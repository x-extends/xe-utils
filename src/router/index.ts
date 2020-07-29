import Vue from 'vue'
import Router from 'vue-router'
import API from '../views/API.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'API',
      component: API
    }
  ]
})
