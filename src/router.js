import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserForm from './views/UserForm.vue'
import Vote from './views/Vote.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userForm',
      name: 'userForm',
      component: UserForm
    },
    {
      path: '/vote',
      name: 'Vote',
      component: Vote
    }
  ]
})
