<script setup lang="ts">
import { ref } from "vue";
import { FormInstance, showToast } from 'vant';
import { phoneRules, passwordRules,codeRules } from '@/utils/rules'
import { apiLogin ,apiCodeLogin, apiCodeMsgLogin } from '@/services/user'
import { useRoute, useRouter } from "vue-router";
import { onBeforeUnmount } from "vue";

const phoneNumber = ref('')
const phonePassword = ref('')
const codePassword=ref('')
const phoneSelect = ref(false)
const codeTime=ref(0)  //验证码倒计时时间
const form=ref<FormInstance>()
const router = useRouter()
const route = useRoute()
const passwordLogin = ref(true)   //密码登录还是验证码登录
let timer:number
//密码登录
const onSubmit = async (value) => { 
    if (passwordLogin.value) { //密码登录
        if (phoneSelect.value) {
            console.log(111, value);
            const res = await apiLogin(phonePassword.value, phoneNumber.value)
            console.log('res', res);
            router.push(route.query.returnUrl as string || '/user')

        } else {
            showToast('请勾选用户协议');
        }
    } else { 
         if (phoneSelect.value) {   //验证码登录
            console.log(111, value);
            const res = await apiCodeMsgLogin(phoneNumber.value, codePassword.value)
            router.push(route.query.returnUrl as string || '/user')

        } else {
            showToast('请勾选用户协议');
        }
    }
   
}
//点击短信登录时
const messageLogin = () => { 
    passwordLogin.value= !passwordLogin.value
}
const handleGetCode = async () => { 
    if (codeTime.value>0) return
    await form.value?.validate('mobile')
    const res = await apiCodeLogin(phoneNumber.value, 'login')
    showToast({
        duration:5000,
        message:`验证码:\n${res?.data?.code}`,
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    });
    codeTime.value = 6
    if(timer) clearInterval(timer)
     timer = setInterval(() => {
         if (codeTime.value > 0)
             codeTime.value--
         else { 
          clearInterval(timer)
          codeTime.value=0
         }
     }, 1000)
    onBeforeUnmount(() => { 
         clearInterval(timer)
    })
    
}

</script>

<template>
    <div class="login-page">
        <cp-nav-bar right-text="注册" @click-right="$router.push('/register')"></cp-nav-bar>
        <!-- 头部 -->
        <div class="login-head">
            <h3>{{ passwordLogin?'密码登录':'短信登录' }}</h3>
            <a href="javascript:;">
                <span @click="messageLogin">{{ passwordLogin?'短信验证码登录':'密码登录' }}</span>
                <van-icon name="arrow"></van-icon>
            </a>
        </div>
        <!-- 表单 -->
        <van-form autocomplete="off" @submit="onSubmit" ref="form">
            <van-field
              name="mobile"
              placeholder="请输入手机号"
              type="tel" 
              v-model="phoneNumber"
              :rules="phoneRules"
              >
            </van-field>
            <van-field 
            v-if="passwordLogin"
             placeholder="请输入密码"
             v-model="phonePassword"
             type="password"
             :rules="passwordRules"
             >
            </van-field>
            <van-field 
                 v-else
                 placeholder="请输入验证码"
                 v-model="codePassword"
                 type="password"
                 :rules="codeRules"
                 >
            </van-field>

                <van-field
                v-if="!passwordLogin"
                >
                    <template #button>
                    <span class="btn-send" 
                    @click="handleGetCode"
                    >
                    {{ codeTime ?`${codeTime}s后再次发送`:'发送验证码'}}
                    </span>
                    </template> 
                </van-field>
               
            <div class="cp-cell">
                <van-checkbox
                 v-model="phoneSelect"
                >
                    <span>我已同意</span>
                    <a href="javascript:;">用户协议</a>
                    <span>及</span>
                    <a href="javascript:;">隐私条款</a>
                </van-checkbox>
            </div>
            <div class="cp-cell">
                <van-button 
                  block 
                  round 
                  type="primary"
                  native-type="submit"
                  >登 录</van-button>
            </div>
            <div class="cp-cell">
                <a href="javascript:;">忘记密码？</a>
            </div>
        </van-form>
        <!-- 底部 -->
        <div class="login-other">
            <van-divider>第三方登录</van-divider>
            <div class="icon">
                <img src="@/assets/qq.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login {
    &-page {
        padding-top: 46px;
    }

    &-head {
        display: flex;
        padding: 30px 30px 50px;
        justify-content: space-between;
        align-items: flex-end;
        line-height: 1;

        h3 {
            font-weight: normal;
            font-size: 24px;
        }

        a {
            font-size: 15px;
        }
    }

    &-other {
        margin-top: 60px;
        padding: 0 30px;

        .icon {
            display: flex;
            justify-content: center;

            img {
                width: 36px;
                height: 36px;
                padding: 4px;
            }
        }
    }
}

.van-form {
    padding: 0 14px;

    .cp-cell {
        height: 52px;
        line-height: 24px;
        padding: 14px 16px;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        .van-checkbox {
            a {
                color: var(--cp-primary);
                padding: 0 5px;
            }
        }
    }

    .btn-send {
        color: var(--cp-primary);

        &.active {
            color: rgba(22, 194, 163, 0.5);
        }
    }
}
</style>
