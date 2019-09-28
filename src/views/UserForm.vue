<template>
  <div class="center">
    <landing v-if="! userSession.isUserSignedIn()"></landing>
    <dashboard v-if="user" :user="user"></dashboard>

  </div>
</template>

<script>
import Landing from '@/components/Landing.vue'
import Dashboard from '@/components/Dashboard.vue'
import { Person } from 'blockstack'
import { userSession } from '../userSession'

export default {
  name: 'Home',
  components: { Landing, Dashboard },
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
