import {EnumConsultationType,EnumConsultationTime } from '@/enums/index'
import type { templateRef } from '@vueuse/core'

// 文章信息类型
export type Knowledge = {
  id: string
  /** 标题 */
  title: string
  /** 封面[] */
  coverUrl: string[]
  /** 标签[] */
  topics: string[]
  /** 收藏数 */
  collectionNumber: number
  /** 评论数 */
  commentNumber: number
  /** 医生名称 */
  creatorName: string
  /** 医生头像 */
  creatorAvatar: string
  /** 医生医院 */
  creatorHospatalName: string
  /** 关注文章 */
  likeFlag: 0 | 1
  /** 内容 */
  content: string
  /** 医生科室 */
  creatorDep: string
  /** 医生职称 */
  creatorTitles: string
  /** 医生ID */
  creatorId: string
}

// 文章列表
export type KnowledgeList = Knowledge[]

// 文章列表带分页
export type KnowledgePage = {
  pageTotal: number
  total: number
  rows: KnowledgeList
}
// props类型 recommend推荐，fatReduction减脂，food健康饮食，like关注医生页面文章
export type KnowledgeType = 'like' | 'recommend' | 'fatReduction' | 'food'

// 文章列表查询参数
export type KnowledgeParams = {
  type: KnowledgeType
  current: number
  pageSize: number
}

//关注医生
export type paramsDoc = Omit<KnowledgeParams, 'type'>
export type ResDocObj = {
    id: string,
    name: string,
    avatar: string,
    hospitalName: string,
    gradeName: string,
    depName: string,
    positionalTitles: string,
    likeFlag: 0 | 1,
    serviceFee: number,
    consultationNum: number,
    score: number,
    major:string
  }
export type ResDocRows = ResDocObj[]
export type ResDoc = {
  pageTotal: number,
  total: number
  rows:ResDocRows
}

// 关注操作
export type TypeLike = {
  type: 'topic' | 'knowledge'|'doc' | 'disease',
  id:string
}

export type TypeLikeCotegory = 'topic' | 'knowledge' | 'doc' | 'disease'

export type Image = {
  /** 图片ID */
  id: string
  /** 图片地址 */
  url: string
}
// 问诊记录
export type Illness = {
  illnessDesc: string,
  illnessTime: number,
  consultFlag:number
}
export type Consult = {
  /** 问诊记录ID */
  id?: string
  /** 问诊类型 */
  type?: EnumConsultationType
  /** 快速问诊类型，0 普通 1 三甲 */
  illnessType?: 0 | 1
  /** 科室ID */
  depId?: string
  /** 疾病描述 */
  illnessDesc?: string
  /** 疾病持续时间 */
  illnessTime?: EnumConsultationTime
  /** 是否就诊过，0 未就诊过  1 就诊过 */
  consultFlag?: 0 | 1
  /** 图片数组 */
  pictures?: Image[]
  /** 患者ID */
  patientId?: string
  /** 优惠券ID */
  couponId?: string
}

// 获取科室
export type SecondaryType = {
  id: string,
  name: string,
  avatar?:string
}

export type DecType = {
  id: string,
  name: string
  child:SecondaryType[]
}

// 支付页面
// 问诊订单预支付传参
export type ConsultOrderPreParams = Pick<Consult, 'type' | 'illnessType'>

// 问诊订单预支付信息
export type ConsultOrderPreData = {
  /** 积分抵扣 */
  pointDeduction: number
  /** 优惠券抵扣 */
  couponDeduction: number
  /** 优惠券ID */
  couponId: string
  /** 需付款 */
  payment: number
  /** 实付款 */
  actualPayment: number
}

// 病情描述对象
export type ConsultIllness = Pick<Consult,'illnessDesc'|'illnessTime'|'consultFlag'|'pictures'>


