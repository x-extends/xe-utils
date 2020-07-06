import Vue from 'vue'
import Router from 'vue-router'
import API from '../views/API.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'API',
      component: API
    }
  ]
})
