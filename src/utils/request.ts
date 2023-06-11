import axios, { AxiosError, type Method } from 'axios'
import {useCpuserStore} from '@/stores/modules/user'
import { showToast } from 'vant';
import router from '@/router';

const instance = axios.create({
    baseURL: 'https://consult-api.itheima.net',
    timeout: 1000,
  });
  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    const store=useCpuserStore()
    if(store.user?.token &&  config.headers){
        config.headers.Authorization=`Bearer ${store.user.token}`
       }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    if(response.data.code!==10000){
        showToast(response.data.message || '业务失败');
        return Promise.reject(response.data)
    }
    return response.data;
  }, function (error:AxiosError) {
    if(error.response?.status == 401 ){
      const store =useCpuserStore()
      store.delUser()
      router.push({path:'/login',query:{returnUrl:router.currentRoute.value.fullPath}})
    }
    return Promise.reject(error);
  });
  export default instance
  
  type Data<T>=()=>{
    code:number
    message:string
    data:T
  }

export const request = <T>(
  url: string,
  method: Method = 'GET',
  submitData?: object
) => {
    return instance.request<any,Data<T>>({
      url,
      method,
      [method.toUpperCase() == 'GET' ? 'params' :'data']:submitData
    })
  }