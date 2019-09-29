<template>
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <div>
        <img src="../assets/bars-solid.svg" height="20%" width="20%" @click="showNavigation = true" />
      </div>
      <span class="md-title" style="text-align:center;"></span>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <md-avatar style="width:50%; height:auto; border-radius:50%; margin-top:10px;">
          <img
            src="https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif"
          />
        </md-avatar>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <span class="md-list-item-text">[Name]</span>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">[Email]</span>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">[Eligable to vote]</span>
        </md-list-item>

        <md-list-item>
          <img src="../assets/edit-regular.svg" height="20%" width="20%" style="margin-right:5%;" />
          <span class="md-list-item-text">Edit Profile</span>
        </md-list-item>
        <md-list-item>
          <img
            src="../assets/sign-out-alt-solid.svg"
            height="20%"
            width="20%"
            style="margin-right:5%;"
          />
          <span class="md-list-item-text">Logout</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>
    <md-app-content>
      <div style="width:60%; margin-left:20%">
        <md-card md-with-hover>
          <md-card-header style="margin-top: 5%" >
            <div class="md-title" @click="checkIfCanVote">Best Backend Dev</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-raised md-accent"  @click="checkIfCanVote()" >Vote</md-button>
          </md-card-actions>
        </md-card>

        <md-card md-with-hover style="margin-top: 5%" >
          <md-card-header>
            <div class="md-title" @click="checkIfCanVote()">Best Front End Dev</div>
          </md-card-header>
          <md-card-actions>
            <md-button @click="checkIfCanVote()" class="md-raised md-accent">Vote</md-button>
          </md-card-actions>
        </md-card>

        <md-card md-with-hover style="margin-top: 5%" @click="checkIfCanVote">
          <md-card-header>
            <div class="md-title">Best Database Management Dev</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-raised md-accent" @click="checkIfCanVote()">Vote</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </md-app-content>
  </md-app>
</template>

<style lang="scss" scoped>
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-list-item-text {
  text-align: center;
}
</style>

<script>
import swal from "sweetalert";
import { Person } from 'blockstack'
import { userSession } from '../userSession'
import router from '../router'
export default {
  name: "Reveal",
  methods: {
    profileSetupAlert() {
      swal({
        title: "Error Inelegable",
        text: "Please fill out profile in order to vote",
        icon: "warning"
      })
    },
    checkIfCanVote(){
      userSession.getFile("user.json", this.options).then(fileContents => {
        // get the contents of the file /hello.txt
        if(JSON.parse(fileContents).canVote !== 1){
          this.profileSetupAlert()
          setTimeout(()=>{
            router.push('/userForm')
          }, 2000)
        }else{
          console.log("user can vote")
        }
      });
    }

  },
  data: () => ({
    showNavigation: false,
    elections: []
  }),
  mounted() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("http://34.68.131.167:4444/test")
      .then(response => {
        this.elections = response.data;
        console.log(this.elections);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>
