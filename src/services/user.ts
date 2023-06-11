import type { User ,LoginType} from '@/type/user'
import { request} from '@/utils/request'

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

export {apiLogin,apiCodeLogin ,apiCodeMsgLogin}