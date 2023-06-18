import { request } from "@/utils/request";
import type { KnowledgeParams,KnowledgePage} from '@/type/consult'

const apiGetKnowlegeList = (params:KnowledgeParams) => { 
    return request<KnowledgePage>('/patient/home/knowledge','GET', params)
}

export { apiGetKnowlegeList}