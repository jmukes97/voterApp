<template>
<div>
  <Canidate></Canidate>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import { Person } from 'blockstack'
//import { userSession } from '../userSession'
import BootstrapVue from 'bootstrap-vue'
import Canidate from '@/components/Canidate.vue'

Vue.use(Canidate)
Vue.use(BootstrapVue)
Vue.use(VueMaterial)

export default {
  name: 'Vote',
  components: { Vue, VueMaterial, Canidate },
created () {
    this.userSession = userSession
  },
  mounted () {},
  data () {
    return {
      userSession: null,
      user: null
    }
  }
}
</script>

<style>
    .verticalCenter {
      position: absolute;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
</style>
