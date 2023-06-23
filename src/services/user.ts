import { Patient } from './../type/user.d';
import type { User ,LoginType,UserInfo,Patient} from '@/type/user'
import { request,PatientList} from '@/utils/request'

//密码登录
const apiLogin = (password:string,mobile:string) => { 
  return  request<User>('/login/password','POST',{mobile,password})
}
//获取验证码
const apiCodeLogin = (mobile:string,type:LoginType) => { 
    return request<User>('/code', 'GET', {mobile,type})
}
//验证码登录
const apiCodeMsgLogin = (mobile:string,code:string) => { 
    return request('/login', 'POST', {mobile,code})
}

// 获取用户信息
const apiUserInfo = () => {
  return request<UserInfo>('/patient/myUser', 'GET')
 }

const apiPatientList = () => { 
  return request<PatientList>('/patient/mylist')
}
//添加患者
const apiAddPatient = (obj:Patient) => { 
  return request('/patient/add','POST',obj)
}
// 修改患者
const apiFixPatient = (Patient:Patient) => { 
  return request<Patient>('/patient/update','PUT',Patient)
}
// 删除患者
const delPatient = (id:string) => { 
  return request(`/patient/del/${id}`,'delete')
}
// 获取患者
const apiGetPatien = (id:string) => { 
  return request<Patient>(`/patient/info/${id}`)
}
export {
  apiLogin, apiCodeLogin, apiCodeMsgLogin, apiUserInfo,
  apiPatientList, apiAddPatient, apiFixPatient, delPatient,
  apiGetPatien
}