<template>
  <div style="width:80%; margin-left:10%;">
    <h1 style="margin:10px;">Best Database Management Dev</h1>
    <div>
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <b-row>
              <b-col>
                <div class="md-title">{{objectArr[0].name}}</div>
                <div class="md-subhead">{{objectArr[0].party}}</div>
              </b-col>
              <b-col>
                <md-button class="md-raised md-accent" :md-ripple="false" style="float:right;">Vote</md-button>
              </b-col>
            </b-row>
          </md-card-header>
        </md-ripple>
      </md-card>
    </div>

    <div style="margin-top: 5%">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <b-row>
              <b-col>
                <div class="md-title">{{objectArr[1].name}}</div>
                <div class="md-subhead">{{objectArr[1].party}}</div>
              </b-col>
              <b-col>
                <md-button class="md-raised md-accent" :md-ripple="false" style="float:right;">Vote</md-button>
              </b-col>
            </b-row>
          </md-card-header>
        </md-ripple>
      </md-card>
    </div>

    <div style="margin-top: 5%">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <b-row>
              <b-col>
                <div class="md-title">{{objectArr[2].name}}</div>
                <div class="md-subhead">{{objectArr[2].party}}</div>
              </b-col>
              <b-col>
                <md-button class="md-raised md-accent" :md-ripple="false" style="float:right;">Vote</md-button>
              </b-col>
            </b-row>
          </md-card-header>
        </md-ripple>
      </md-card>
    </div>
    <div style="margin-top: 5%">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <b-row>
              <b-col>
                <div class="md-title">{{objectArr[3].name}}</div>
                <div class="md-subhead">{{objectArr[3].party}}</div>
              </b-col>
              <b-col>
                <md-button class="md-raised md-accent" :md-ripple="false" style="float:right;">Vote</md-button>
              </b-col>
            </b-row>
          </md-card-header>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { Person } from "blockstack";
import { userSession } from "../userSession";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(VueMaterial);

export default {
  name: "Vote",
  components: { Vue, VueMaterial, BootstrapVue },
  created() {
    this.userSession = userSession;
  },
  mounted() {
    if (!userSession.isUserSignedIn()) {
      router.push("/");
    }

    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("https://34.68.131.167:4444/test")
      .then(function(response) {
        return this.objectArr;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    return {
      userSession: null,
      user: null,
      objectArr: [
        {
          name: "David",
          party: "Green Party",
          totalVotes: 1,
          election: "Election3"
        },
        {
          name: "Sandy",
          party: "Republican",
          totalVotes: 1,
          election: "Election3"
        },
        {
          name: "Robert",
          party: "Democrat",
          totalVotes: 1,
          election: "Election3"
        },
        {
          name: "Nathan",
          party: "Tree Hugging Pacifist",
          totalVotes: 1,
          election: "Election3"
        }
      ]
    };
  }
};
</script>

<style>
.verticalCenter {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
