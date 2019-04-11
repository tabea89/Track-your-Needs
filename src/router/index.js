import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Entry from '@/components/Entry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      path: '/entry',
      name: 'Entry',
      component: Entry
    }
  ]
})