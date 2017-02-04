import Home from './pages/common/home'
import About from './pages/about/index'
import Alarm from './pages/demos/alarm/index'
import vModal from './pages/demos/v-modal/index'

const Abstract = {
  template: '<router-view></router-view>'
}

const routes = [
  {
    path: '/',
    redirect: { name: '时钟' }
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'demos',
        name: 'Demos',
        isSubmenu: true,
        component: Abstract,
        children: [
          {
            path: 'alarm',
            name: '时钟',
            isMenuItem: true,
            component: Alarm
          },
          {
            path: 'v-modal',
            name: 'vue-modal',
            isMenuItem: true,
            component: vModal
          }
        ]
      },
      {
        path: 'about',
        name: '关于',
        isMenuItem: true,
        component: About
      }
    ]
  },
  {
    path: '*',
    redirect: {path: '/404'}
  }
]

export default routes
