import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserForm from './views/UserForm.vue'
import Vote from './views/Vote.vue'
import Results from './views/Results.vue'
import Vote2 from './views/Vote2.vue'
import Vote3 from './views/Vote3.vue'
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
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/vote2',
      name: 'Vote2',
      component: Vote2
    },
    {
      path: '/vote3',
      name: 'Vote3',
      component: Vote3
    },
  ]
})
