<template>
<div>
  <b-container class="verticalCenter">
    <b-row>
      <b-col cols="4">
        <md-avatar class="center" style="width:50%; height:auto; border-radius:50%;">
          <img :src=form.pic>
        </md-avatar>
      </b-col>

      <b-col cols="8">
        <div class="md-title" style="margin-bottom:10px;">Edit your profile</div>
        <b-row>
        <b-col>
          <md-autocomplete v-model="form.state" :md-options="States"><label>State</label></md-autocomplete>
          <md-field>
            <label>City</label>
            <md-input v-model="form.city"></md-input>
          </md-field>
          <md-field>
            <label>Address</label>
            <md-input v-model="form.line1"></md-input>
          </md-field>
        </b-col>
        <b-col>
          <md-field>
            <label>State ID</label>
            <md-input v-model="form.id" />
          </md-field>
          <md-field>
            <label>First Name</label>
            <md-input v-model="form.fname" />
          </md-field>
          <md-field>
            <label>Last Name</label>
            <md-input v-model="form.lname" />
          </md-field>
        </b-col>
        <b-col>
          <md-field>
            <label>Email</label>
            <md-input v-model="form.email" />
          </md-field>
          <md-field>
            <label>Phone Number</label>
            <md-input v-model="form.phone_num" />
          </md-field>

          <md-field>
            <label>Date of Birth</label>
            <md-input v-model="form.DOB" />
          </md-field>
        </b-col>
        </b-row>
        <b-row>
          <b-col>
            <md-button @click="submit" class="md-raised md-primary horCenter" style="margin-left:25%;">Save</md-button>
          </b-col>
          <b-col>
            <md-button @click="cancel" class="md-raised md-primary horCenter" style="background-color:#36318F; margin-left:25%;">Cancel</md-button>
          </b-col>
        </b-row>
      </b-col>

    </b-row>

  </b-container>
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
import router from '../router'
Vue.use(BootstrapVue)
Vue.use(VueMaterial)

export default {
  name: 'UserForm',
  components: { Vue, VueMaterial },
  /* created () {
    this.userSession = userSession
  }, */
  mounted () {
    if (!userSession.isUserSignedIn()) {
      router.push('/')
    }else {
        this.userData = userSession.loadUserData()
        this.user = new Person(this.userData.profile)

      }
  },
  methods: {
    submit(){

      let keys = Object.keys(this.form)
      for(let i = 0; i < keys.length; i++){
        console.log(this.form[keys[i]])
        console.log([keys[i]])
        if(this.form[keys[i]] == ""){
          this.form.canVote = 0
        }
      }
      let options = {
        encrypt: true
      };
      userSession.putFile("user.json", JSON.stringify(this.form), options).then(() => {
        router.push('/')
      });
    },
    cancel () {
      router.push('/')
    }
  },
  data () {
    return {
      userSession: null,
      user: null,
      // state: null,
      States: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ],
      form: {
        id: '',
        state: '',
        fname: '',
        lname: '',
        email: '',
        city: '',
        state: '',
        line1: '',
        phone_num: '',
        DOB: '',
        pic: 'https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif'
      }
    }
  }
}
</script>

<style>
    .test {
        margin-left: 10%;
        margin-right: 10%;
    }

    .center {
      margin-left: 12.5%;
      position: absolute;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .verticalCenter {
      position: absolute;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      margin-left: 5%;
    }

    .horCenter {
      margin-left: calc(25% - 44px);
    }
</style>
