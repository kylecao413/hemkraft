import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = [
    {
        path: '/',
        redirect: '/MainMenu',
        component: () => import('@/views/MainMenu'),
    },
    {
        path:'/email',
        name:'Email',
        component: () => import('@/views/Household/EnterEmail'),
    }
]
export default router
