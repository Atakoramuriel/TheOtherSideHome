import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Enter from '@/components/Enter'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Enter',
      component: Enter
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
