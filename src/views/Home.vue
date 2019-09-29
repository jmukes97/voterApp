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
import Landing from "@/components/Landing.vue";
import Dashboard from "@/components/Dashboard.vue";
import { Person } from "blockstack";
import { userSession } from "../userSession";

export default {
  name: "Home",
  components: { Landing, Dashboard },
  created() {
    this.userSession = userSession;
  },
  data() {
    return {
      userSession: null,
      user: null
    };
  },
  mounted() {
    if (userSession.isUserSignedIn()) {
      this.userData = userSession.loadUserData();
      this.user = new Person(this.userData.profile);
      this.user.username = this.userData.username;
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.location = window.location.origin;
      });
    }
  }
};
</script>
