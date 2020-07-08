import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Buefy from 'buefy'
import { router } from './routes'
import App from './App.vue'
import '../sass/app.scss'
Vue.use(Buefy)
Vue.use(axios)
Vue.use(VueRouter)

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
}

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    el: '#app',
    ...App
})
