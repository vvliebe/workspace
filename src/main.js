import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'active'
})

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app')
