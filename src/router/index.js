import Vue from 'vue'
import Router from 'vue-router'
import publics from '@/components/public/public'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: publics
    }
  ]
})
