<template>
    
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
//import { Person } from 'blockstack'
//import { userSession } from '../userSession'


Vue.use(VueMaterial)

export default {
  name: 'UserForm',
  components: { Vue, VueMaterial },
  /* created () {
    this.userSession = userSession
  }, */
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
    .test {
        margin-left: 10%;
        margin-right: 10%;
    }
</style>

