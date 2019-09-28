<template>
    <div class="test">
    <md-card>
      <md-card-header>
        <div class="md-title">Card without hover effect</div>
      </md-card-header>

      <md-card-content class="md-primary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button class="md-raised md-primary">Primary</md-button>
      </md-card-actions>
    </md-card>
    </div>
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

