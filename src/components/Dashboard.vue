<template>
  <div class="panel-welcome" id="section-2">
    <div class="avatar-section">
      <img :src="avatar" class="img-rounded avatar" id="avatar-image" />
    </div>
    <h1 class="landing-heading">
      Hello,
      <span id="heading-name">{{ givenName }}</span>!
    </h1>
    <button @click="write">write</button>>
    <p class="lead">
      <a href="#" class="btn btn-primary btn-lg" id="signout-button" @click.prevent="signOut">Logout</a>
    </p>

    <button @click="read">Read Me</button>
  </div>
</template>

<script>
import { userSession } from "../userSession";
export default {
  methods: {
    signOut() {
      userSession.signUserOut(window.location.href);
    },

    read() {
      userSession.getFile("/hello.txt", this.options).then(fileContents => {
        // get the contents of the file /hello.txt
        assert(fileContents === "hello world!");
      });
    },
    async write() {
      let options = {
        encrypt: true
      };
      await userSession.putFile("hello.txt", "Hello World", options);
    }
  },
  data() {
    return {
      blockstack: window.blockstack,
      avatar: "https://s3.amazonaws.com/onename/avatar-placeholder.png",
      givenName: "Anonymous",
      options: { decrypt: true }
    };
  },
  mounted() {
    const blockstack = this.blockstack;
    if (blockstack.isUserSignedIn()) {
      const profile = blockstack.loadUserData().profile;
      const user = new blockstack.Person(profile);
      this.givenName = user.name() ? user.name() : "Nameless Person";
      if (user.avatarUrl()) this.avatar = user.avatarUrl();
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(userData => {
        window.location = window.location.origin;
      });
    }
  }
};
</script>

<style scoped></style>
