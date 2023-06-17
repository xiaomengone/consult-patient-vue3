import { createRouter, createWebHistory } from 'vue-router'
import { useCpuserStore} from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/Login/index.vue') },
    {
      path: '/',
      redirect:'/user',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        { path: '/user', component: () => import('@/views/User/index.vue') },
        { path: '/article', component: () => import('@/views/Article/index.vue') },
        { path: '/home', component: () => import('@/views/Home/index.vue') },
        { path: '/notify', component: () => import('@/views/notify/index.vue') },
      ]
    },
  ]
})
//全局前置路由守卫
router.beforeEach((to, from) => {
  const store=useCpuserStore()
  const witeList = ['/login']
  if (!store.user?.token && !witeList.includes(to.path))
    return '/login'
})

export default router
