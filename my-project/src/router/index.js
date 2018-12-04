import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Main from '@/pages/main/main'
import Test from '@/pages/test/test'
import notFind from '@/pages/notFind/notFind'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
      // name: 'HelloWorld',
      // component: HelloWorld
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }, {
      path: '*',
      name: 'notFind',
      component: notFind
    }
  ]
})
