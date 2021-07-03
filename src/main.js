import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes/index"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: "history"
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
