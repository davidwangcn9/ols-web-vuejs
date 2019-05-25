import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Create from '@/page/Create'
import List from '@/page/List'
import Detail from '@/page/Detail'
import Account from '@/components/Account'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'account',
      component: Account
    },{
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/train',
      name:"train",
      children:[
        {
          path: '/',
          name: 'list',
          component: List
        },
        {
          path: 'create',
          name: 'create',
          component: Create
        },
        {
          path: 'train/detail',
          name: 'detail',
          component: Detail
        }
      ]
    },

  ]
})
