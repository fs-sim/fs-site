import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './pages/Dashboard'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Dashboard }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
