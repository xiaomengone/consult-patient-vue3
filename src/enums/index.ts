// 问诊类型
enum EnumConsultationType { 
    // 1问医生2极速问诊3开药问诊--默认是1
    askDoctor= 1,
    rapidConsultation= 2,
    medicationConsultation=3
}

// 问诊时间
enum EnumConsultationTime { 
// 1一周内2一月内3半年内4半年以上
    week = 1,
    mounth = 2,
    halfYear = 3,
    moreHalfYear=4
}

export {EnumConsultationType,EnumConsultationTime }