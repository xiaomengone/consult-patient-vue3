import { request } from "@/utils/request";
import type {
    KnowledgeParams, KnowledgePage, paramsDoc,
    ResDoc, ResDocRows,TypeLike
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

export { apiGetKnowlegeList,apiGetDoc,apiLike}