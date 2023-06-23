import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Consult,Illness } from '@/type/consult'
import {EnumConsultationType } from '@/enums/index'

export const useConsultStore = defineStore('consult', () => {
    const consult = ref<Consult>({})
    // 问诊类型
    const setType = (type:EnumConsultationType) => { 
        consult.value.type=type
    }
    // 问诊级别
    const setIllnessType = (type:0|1) => { 
        consult.value.illnessType=type
    }
    //选择科室
    const selectDepartment = (type:string) => { 
        consult.value.depId=type
    }
    // 存病情描述
    const setIllness = (type:Illness) => { 
        consult.value.illnessDesc = type.illnessDesc
        consult.value.illnessTime = type.illnessTime
        consult.value.consultFlag=type.consultFlag
    }
    //记录患者
    const setPationtId = (type:string|undefined) => { 
        consult.value.patientId=type
    }
    // 记录优惠卷
    const setCoupon = (id: string) => {
        consult.value.couponId=id
    }
    // 清理数据
    const clearData = () => { 
        consult.value = {}
    }

    return {
        consult, setType, setIllnessType, selectDepartment,
        setIllness, setPationtId,setCoupon,clearData
    }
},
{
  persist: true                               //使用
})
