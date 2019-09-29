<template>
  <div style="margin-left:10%; width:80%; margin-top:2.5%;">
    <h1>Election Results</h1>
    <ResultBox></ResultBox>
    <ResultBox></ResultBox>
    <md-button class="md-raised md-primary" href="./" style="float:right; margin-right:5%;">Dashboard</md-button>
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
import ResultBox from '@/components/ResultBox.vue'

Vue.use(ResultBox)
Vue.use(BootstrapVue)
Vue.use(VueMaterial)

export default {
  name: 'Results',
  components: { Vue, VueMaterial, ResultBox, BootstrapVue },
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
