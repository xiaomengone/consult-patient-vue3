<script setup lang="ts">
import { apiPatientList, apiAddPatient, apiFixPatient , delPatient } from '@/services/user'
import { computed, onMounted, ref } from 'vue'
import type { PatientList, Patient } from '@/type/user'
import CpRadioBtn from '@/components/CpRadioBtn.vue'
import CpNavBar from '@/components/CpNavBar.vue'
import { nameRules, idCardRules } from '@/utils/rules'
import { FormInstance, showConfirmDialog, showSuccessToast } from 'vant'
import { showDialog } from 'vant';

const showRight=ref(false)
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
//获取患者列表
const loadList = async() => { 
     const res = await apiPatientList()
    patientList.value = res?.data
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

</script>

<template>
    <div class="patient-page">
        <cp-nav-bar title="家庭档案"></cp-nav-bar>
        <div class="patient-list">
            <div class="patient-item" v-for="item in patientList" :key="item.id">
                <div class="info">
                    <span class="name">{{item.name}}</span>
                    <span class="id">{{item.idCard.replace(/^(.{6}).+(.{4})$/,'$1********$2')}}</span>
                    <span>{{item.genderValue}}</span>
                    <span>{{item.age}}岁</span>
                </div>
                <!-- 编辑 -->
                <div class="icon" @click="showPopup(item)"><van-icon name="edit" /></div>
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
}</style>

