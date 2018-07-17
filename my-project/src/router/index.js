import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Main from '@/pages/main/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
      // name: 'HelloWorld',
      // component: HelloWorld
    }
  ]
})
