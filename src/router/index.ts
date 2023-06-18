import { createRouter, createWebHistory } from 'vue-router'
import { useCpuserStore } from '@/stores'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/Login/index.vue'), meta: {title:'登录'} },
    {
      path: '/',
      redirect:'/user',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        { path: '/user', component: () => import('@/views/User/index.vue'), meta: {title:'个人中心'} },
        { path: '/article', component: () => import('@/views/Article/index.vue'), meta: {title:'健康百科'} },
        { path: '/home', component: () => import('@/views/Home/index.vue'), meta: {title:'首页'} },
        { path: '/notify', component: () => import('@/views/notify/index.vue'), meta: {title:'消息通知'} },
      ]
    },
    { path: '/user/patient', component: () => import('@/views/User/PatientPage.vue'), meta: {title:'家庭档案'} },
  ]
})

NProgress.configure({                //关闭右上角的圈
  showSpinner: false
})
//全局前置路由守卫
router.beforeEach((to, from) => {
   NProgress.start() 
  const store=useCpuserStore()
  const witeList = ['/login']
  if (!store.user?.token && !witeList.includes(to.path))
    return '/login'
})
//全局后置路由守卫
router.afterEach((to, from) => {
   NProgress.done()  
  //修改标题
  document.title= `${to.meta.title || ''}-优医问诊`
})

export default router
