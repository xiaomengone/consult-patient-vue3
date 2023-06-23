<script setup lang="ts">
import { apiPatientList, apiAddPatient, apiFixPatient , delPatient } from '@/services/user'
import { computed, onMounted, ref } from 'vue'
import type { PatientList, Patient } from '@/type/user'
import CpRadioBtn from '@/components/CpRadioBtn.vue'
import CpNavBar from '@/components/CpNavBar.vue'
import { nameRules, idCardRules } from '@/utils/rules'
import { FormInstance, showConfirmDialog, showDialog, showSuccessToast } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { useConsultStore } from '@/stores'
import router from '@/router'

const showRight = ref(false)
const route = useRoute()
const patientList = ref<PatientList>()
const options = [
    { label: '男', value: 1 },
    {label:'女',value:0}
]
const initPaient: Patient = {
    name: '',
    idCard:'',
    gender: 1,
    defaultFlag: 0,
}
const Patient = ref<Patient>({
    ...initPaient
})
const form = ref<FormInstance>()
const patientId = ref<string>()
const store = useConsultStore()
//获取患者列表
const loadList = async() => { 
    const res = await apiPatientList()
    patientList.value = res?.data
    if (route.query.isChange && patientList.value?.length) { 
        const defPatientList = patientList.value.find((item) => item.defaultFlag === 1)
        if (defPatientList) patientId.value = defPatientList.id
        else patientId.value = patientList.value[0].id
    }
}
// 打开弹出框,添加。编辑
const showPopup = (item?: Patient) => { 
    if (item) {   //编辑患者 
        console.log('edit');
        const { id, name, idCard, gender, defaultFlag } = item
        Patient.value= { id, name, idCard, gender, defaultFlag }
    } else { //添加患者
        console.log('add');
        Patient.value = {...initPaient }
    }    
    showRight.value=true
}
onMounted(() => { 
    loadList()
})
const fefaultFlag = computed({
    get: () => {return Patient.value.defaultFlag===1?true:false },
    set: (value) => { Patient.value.defaultFlag = value?1:0 }
})
//添加患者信息
const onSubmit =async () => { 
// 表单校验
    await form.value.validate()
    // 添加 或 编辑
   const res= Patient.value.id ?
        await apiFixPatient(Patient.value) :
        await apiAddPatient(Patient.value)
    console.log('1res',res);
    
    loadList()
    showRight.value = false
     showSuccessToast(Patient.value.id ? '编辑成功':'添加成功')
}
// 删除按钮
const onClickButton = async () => { 
    if (Patient.value.id) { 
  await showConfirmDialog({
        title: '温馨提示',
        message:`您确定删除 ${Patient.value.name} 患者信息吗？`
    })
   await delPatient(Patient.value.id)
    showRight.value = false
    loadList()
    }
}
 const msg = computed(() => { 
   return route.query.isChange==='1' ? '选择患者':'家庭档案'
 })
//  选择患者
const selectPatient = (item) => {
    if (!!route.query.isChange) { 
        patientId.value = item.id
    }
 }
const next =async () => { 
    if (!!patientId.value) {
        store.setPationtId(patientId.value)
    } else { 
        showDialog({
            title: '标题',
            message: '代码是写出来给人看的，附带能在机器上运行。',
        })
    }
    router.push('/consult/pay')
}

</script>

<template>
    <div class="patient-page">
        <cp-nav-bar :title="msg"></cp-nav-bar>
     <div class="patient-change" v-if="msg==='选择患者'">
          <h3>请选择患者信息</h3>
          <p>以便医生给出更准确的治疗，信息仅医生可见</p>
        </div>
        <div class="patient-list">
            <div class="patient-item"
              v-for="item in patientList" 
              :key="item.id"
              @click="selectPatient(item)" 
              :class="{ active:item.id== patientId }"
             >
                <div class="info">
                    <span class="name">{{item.name}}</span>
                    <span class="id">{{item.idCard.replace(/^(.{6}).+(.{4})$/,'$1********$2')}}</span>
                    <span>{{item.genderValue}}</span>
                    <span>{{item.age}}岁</span>
                </div>
                <!-- 编辑 -->
                <div class="icon" @click.stop="showPopup(item)"><van-icon name="edit" /></div>
                <div class="tag" v-if="item.defaultFlag==1">默认</div>
            </div>
            <div class="patient-add" v-if="patientList?.length<6" @click="showPopup()">
                <cp-icon name="user-add" />
                <p>添加患者</p>
            </div>
            <div class="patient-tip">最多可添加 6 人</div>
        </div>
        <!-- 右边弹出框 -->
    <van-popup
      v-model:show="showRight"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
    <div>
        <CpNavBar
         :title="Patient.id?'编辑患者':'添加患者'" 
         right-text="保存"
         :back="()=>showRight=false"
         @click-right="onSubmit"
         >
        </CpNavBar>
        <!-- 表单 -->
              <van-form autocomplete="off" ref="form">
            <van-field
               label="真实姓名"
               placeholder="请输入真实姓名"
               v-model="Patient.name"
               :rules="nameRules"
            />
            <van-field 
             label="身份证号" 
             placeholder="请输入身份证号" 
             v-model="Patient.idCard"
             :rules="idCardRules"
            />
            <van-field label="性别" class="pb4">
              <!-- 单选按钮组件 -->
              <template #input>
                <CpRadioBtn 
                  :options="options"
                  v-model="Patient.gender"
                  >
                </CpRadioBtn> 
              </template>
            </van-field>
            <van-field label="默认就诊人">
              <template #input>
                <van-checkbox :icon-size="18" round v-model="fefaultFlag"/>
              </template>
            </van-field>
          </van-form>
          <!-- 删除按钮 -->
    <van-action-bar v-if="Patient.id">
      <van-action-bar-button 
      text="删除" 
      @click="onClickButton" 
      />
    </van-action-bar>
    </div>
    </van-popup>
    <div class="patient-next" v-if="msg === '选择患者'">
          <van-button 
            type="primary"
            round
            block
            @click="next"
            >下一步</van-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// 底部操作栏
.van-action-bar {
  padding: 0 10px;
  margin-bottom: 10px;
  .van-button {
    color: var(--cp-price);
    background-color: var(--cp-bg);
  }
}

.patient-page {
  padding: 46px 0 80px;
  :deep() {
    .van-popup {
      width: 80%;
      height: 100%;
    }
  }
}

.patient-page {
    padding: 46px 0 80px;
}

.patient-list {
    padding: 15px;
}

.patient-item {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: var(--cp-bg);
    border-radius: 8px;
    margin-bottom: 15px;
    position: relative;
    border: 1px solid var(--cp-bg);
    transition: all 0.3s;
    overflow: hidden;

    .info {
        display: flex;
        flex-wrap: wrap;
        flex: 1;

        span {
            color: var(--cp-tip);
            margin-right: 20px;
            line-height: 30px;

            &.name {
                font-size: 16px;
                color: var(--cp-text1);
                width: 80px;
                margin-right: 0;
            }

            &.id {
                color: var(--cp-text2);
                width: 180px;
            }
        }
    }

    .icon {
        color: var(--cp-tag);
        width: 20px;
        text-align: center;
    }

    .tag {
        position: absolute;
        right: 60px;
        top: 21px;
        width: 30px;
        height: 16px;
        font-size: 10px;
        color: #fff;
        background-color: var(--cp-primary);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.selected {
        border-color: var(--cp-primary);
        background-color: var(--cp-plain);

        .icon {
            color: var(--cp-primary);
        }
    }
}

.patient-add {
    background-color: var(--cp-bg);
    color: var(--cp-primary);
    text-align: center;
    padding: 15px 0;
    border-radius: 8px;

    .cp-icon {
        font-size: 24px;
    }
}

.patient-tip {
    color: var(--cp-tag);
    padding: 12px 0;
}

.pb4 {
    padding-bottom: 4px;
}
.patient-change {
  padding: 15px;
  > h3 {
    font-weight: normal;
    margin-bottom: 5px;
  }
  > p {
    color: var(--cp-text3);
  }
}
.patient-next {
  padding: 15px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
}
.active {
    background-color: skyblue;
}
</style>

