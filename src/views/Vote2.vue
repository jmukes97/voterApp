<template>
    <div style="width:80%; margin-left:10%;">
        <h1 style="margin:10px;">Best Backend Dev </h1>
        <div>
            <md-card md-with-hover>
                <md-ripple>
                    <md-card-header>
                        <b-row>
                            <b-col>
                                <div class="md-title">{{objArr[0].name}}</div>
                                <div class="md-subhead" >{{objArr[0].party}}</div>
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
                                <div class="md-title">{{objArr[1].name}}</div>
                                <div class="md-subhead" >{{objArr[1].party}}</div>
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
                                <div class="md-title">{{objArr[2].name}}</div>
                                <div class="md-subhead" >{{objArr[2].party}}</div>
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
  import Vue from 'vue'
  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import { Person } from 'blockstack'
  import { userSession } from '../userSession'
  import BootstrapVue from 'bootstrap-vue'

  Vue.use(BootstrapVue)
  Vue.use(VueMaterial)

  export default {
    name: 'Vote',
    components: { Vue, VueMaterial, BootstrapVue },
    created () {
      this.userSession = userSession
    },
    mounted () {

    },
    data () {
      return {
        objArr:[
          {
            "name" : "Jasmine",
            "party" : "Republican",
            "totalVotes" : 1
          },
          {
            "name" : "Althea",
            "party" : "Democrat",
            "totalVotes" : 1
          },
          {
            "name" : "Gabriel",
            "party" : "Green Party",
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
