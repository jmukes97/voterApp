<template>
  <div class="panel-landing" id="section-1" >
    <!--<div class="img-banner" :style="{'background-image': 'url(' + require('../assets/usFlag.jpg') + ')'}">test</div> -->
    <h1 class="landing-heading"<h1>Post-It Vote</h1>
    <h5><i>Voting that sticks</i></h5>
    <br>
    <p class="lead">
      <a
        href="#"
        class="btn btn-primary btn-lg"
        id="signin-button"
        @click.prevent="signIn"
      >
        Login
      </a>
    </p>
  </div>
</template>

<script>
import { userSession } from '../userSession'
export default {
  name: 'signin',
  methods: {
    signIn () {
      userSession.redirectToSignIn()
    }
  }
}
</script>
<style scoped>
  #section-1{
    float:right;
    padding-top: 30vh;
    font-size: small;
    padding-right:5vh;
    background-image: '';
  }
  #signin-button {
    width: 100%;
  }
body{
  background-image:url(https://imgur.com/ZKYENSj);
  background-size:cover;
}
</style>
