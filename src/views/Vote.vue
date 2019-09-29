<template>
<div style="width:80%; margin-left:10%;">
  <h1 style="margin:10px;">Best Backend Dev </h1>
  <Canidate></Canidate>
  <Canidate></Canidate>
</div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { Person } from 'blockstack'
import { userSession } from '../userSession'
import BootstrapVue from 'bootstrap-vue'
import Canidate from '@/components/Canidate.vue'

Vue.use(Canidate)
Vue.use(BootstrapVue)
Vue.use(VueMaterial)

export default {
  name: 'Vote',
  components: { Vue, VueMaterial, Canidate, BootstrapVue },
created () {
    this.userSession = userSession
  },
  mounted () {

  },
  data () {
    return {
      objArr:[
        {
          "_id" : ObjectId("5d90a9237f72fc0d983f67fd"),
          "name" : "Jon",
          "party" : "Democrat",
          "totalVotes" : 1
        },
        {
          "_id" : ObjectId("5d90a9237f72fc0d983f67fe"),
          "name" : "Joe",
          "party" : "Green Party",
          "totalVotes" : 6
        },
        {
          "_id" : ObjectId("5d90a9237f72fc0d983f67ff"),
          "name" : "Margret",
          "party" : "Democrat",
          "totalVotes" : 1
        },
        {
          "_id" : ObjectId("5d90a9237f72fc0d983f6800"),
          "name" : "Nessa",
          "party" : "Republican",
          "totalVotes" : 1
        }
      ],
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
