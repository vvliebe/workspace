import Home from './pages/common/home'
import Test from './pages/test'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'test',
        name: 'test',
        component: Test,
        isMenuItem: true
      }
    ]
  },
  {
    path: '*',
    redirect: {path: '/404'}
  }
]

export default routes
