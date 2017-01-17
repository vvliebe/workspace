import Home from './pages/common/home'
import About from './pages/about/index'
import Test from './pages/test'

const Abstract = {
  template: '<router-view></router-view>'
}

const routes = [
  {
    path: '/',
    redirect: { name: 'test' }
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
            path: 'test',
            name: 'test',
            isMenuItem: true,
            component: Test
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
