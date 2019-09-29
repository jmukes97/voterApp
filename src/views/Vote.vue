<template>
  <div style="width:80%; margin-left:10%;">
    <h1 style="margin:10px;">Best Backend Dev</h1>
    <div>
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <b-row>
              <b-col>
                <div class="md-title">{{objArr[0].name}}</div>
                <div class="md-subhead">{{objArr[0].party}}</div>
              </b-col>
              <b-col>
                <md-button
                  class="md-raised md-accent"
                  :md-ripple="false"
                  style="float:right;"
                  onclick="first()"
                >Vote</md-button>
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
                <div class="md-title">{{objArr[1].name}}</div>
                <div class="md-subhead">{{objArr[1].party}}</div>
              </b-col>
              <b-col>
                <md-button
                  class="md-raised md-accent"
                  :md-ripple="false"
                  style="float:right;"
                  onclick="second()"
                >Vote</md-button>
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
                <div class="md-title">{{objArr[2].name}}</div>
                <div class="md-subhead">{{objArr[2].party}}</div>
              </b-col>
              <b-col>
                <md-button
                  class="md-raised md-accent"
                  :md-ripple="false"
                  style="float:right;"
                  onclick="third()"
                >Vote</md-button>
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
                <div class="md-title">{{objArr[3].name}}</div>
                <div class="md-subhead">{{objArr[3].party}}</div>
              </b-col>
              <b-col>
                <md-button
                  class="md-raised md-accent"
                  :md-ripple="false"
                  style="float:right;"
                  onclick="fourth()"
                >Vote</md-button>
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
import axios from "axios";

Vue.use(BootstrapVue);
Vue.use(VueMaterial);

export default {
  name: "Vote",
  components: { Vue, VueMaterial, BootstrapVue },
  created() {
    this.userSession = userSession;
  },
  mounted() {},
  methods: {
    methods: {
      first() {
        axios
          .post("https://https://34.68.131.167/test", {
            name: this.objArr[0].name,
            election: this.objArr[0].election
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      second() {
        axios
          .post("https://https://34.68.131.167/test", {
            name: this.objArr[1].name,
            election: this.objArr[1].election
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      third() {
        axios
          .post("https://https://34.68.131.167/test", {
            name: this.objArr[2].name,
            election: this.objArr[2].election
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      fourth() {
        axios
          .post("https://https://34.68.131.167/test", {
            name: this.objArr[3].name,
            election: this.objArr[3].election
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  data() {
    return {
      objArr: [
        {
          name: "Jon",
          party: "Democrat",
          totalVotes: 1,
          election: "Election1"
        },
        {
          name: "Joe",
          party: "Green Party",
          totalVotes: 6,
          election: "Election1"
        },
        {
          name: "Margret",
          party: "Democrat",
          totalVotes: 1,
          election: "Election1"
        },
        {
          name: "Nessa",
          party: "Republican",
          totalVotes: 1,
          election: "Election1"
        }
      ],
      userSession: null,
      user: null
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
