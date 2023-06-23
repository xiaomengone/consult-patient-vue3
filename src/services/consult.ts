import { request } from "@/utils/request";
import type {
    KnowledgeParams, KnowledgePage, paramsDoc,
    ResDoc, ResDocRows, TypeLike, DecType, ConsultOrderPreParams,
    ConsultOrderPreData
} from '@/type/consult'

const apiGetKnowlegeList = (params:KnowledgeParams) => { 
    return request<KnowledgePage>('/patient/home/knowledge','GET', params)
}
const apiGetDoc = (params: paramsDoc) => {
    return request<ResDocRows>('/home/page/doc','GET',params)
}
//关注医生
const apiLike = (params:TypeLike) => { 
    return request('/like','POST',params)
}
// 获取科室
const apiGetDep = () => { 
    return request<DecType>('/dep/all')
}
// 上传图片
const apiUpload = (file: File) => { 
    const fd = new FormData()
    fd.append('file',file)
    return request('/upload','POST',fd)
}
// 支付页面
const apiGetPay = (params:ConsultOrderPreParams) => { 
    return request<ConsultOrderPreData>('/patient/consult/order/pre','GET',params)
}
// 生成订单
const createConsultOrder = (data:any) => { 
    return request<{id:string}>('/patient/consult/order','POST',data)
}
// 订单支付
const apiPayment = (params: {
    paymentMethod: 0 | 1,
    orderId: string,
    payCallback?:string
}) => { 
    return request<{
        payUrl:string
    }>('/patient/consult/pay','POST',params)
}

export {
    apiGetKnowlegeList, apiGetDoc, apiLike, apiGetDep,
    apiUpload, apiGetPay, createConsultOrder,apiPayment
}