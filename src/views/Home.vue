<template>
  <div>
    <landing v-if="! userSession.isUserSignedIn()"></landing>
    <div v-if="user" :user="user">
      <dashboard></dashboard>
      <Election></Election>
    </div>
  </div>
</template>

<script>
import Landing from '@/components/Landing.vue'
import Dashboard from '@/components/Dashboard.vue'
import { Person } from 'blockstack'
import { userSession } from '../userSession'
import Election from '@/components/Election.vue'


export default {
  name: 'Home',
  components: { Landing, Dashboard, Election },
  created () {
    this.userSession = userSession
  },
  mounted () {
    if (userSession.isUserSignedIn()) {
      this.userData = userSession.loadUserData()
      this.user = new Person(this.userData.profile)
      this.user.username = this.userData.username
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn()
        .then((userData) => {
          window.location = window.location.origin
        })
    }
  },
  data () {
    return {
      userSession: null,
      user: null
    }
  }
}
</script>
