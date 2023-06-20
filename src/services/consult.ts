import { request } from "@/utils/request";
import type {
    KnowledgeParams, KnowledgePage, paramsDoc,
    ResDoc, ResDocRows,TypeLike,DecType
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

export { apiGetKnowlegeList,apiGetDoc,apiLike,apiGetDep,apiUpload}