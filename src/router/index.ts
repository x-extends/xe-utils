import Vue from 'vue'
import Router from 'vue-router'
import API from '../views/API.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '*',
      redirect: {
        name: 'API'
      }
    },
    {
      path: '/',
      redirect: {
        name: 'API'
      }
    },
    {
      path: '/',
      name: 'API',
      component: API
    }
  ]
})
