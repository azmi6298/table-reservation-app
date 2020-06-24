import Vue from 'vue'
import store from './store'
import VModal from 'vue-js-modal'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
import './assets/css/tailwind.css'
import VueTailwind from 'vue-tailwind'

Vue.use(VueTailwind)

Vue.use(VModal)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router: router
}).$mount('#app')
