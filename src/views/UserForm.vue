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

          <md-field>
            <md-select v-model="form.state" name="State" id="State" placeholder="State">
              <md-option value="AL">AL</md-option>
              <md-option value="AK">AK</md-option>
              <md-option value="AZ">AZ</md-option>
              <md-option value="AR">AR</md-option>
              <md-option value="CA">CA</md-option>
              <md-option value="CO">CO</md-option>
              <md-option value="CT">CT</md-option>
              <md-option value="DC">DC</md-option>
              <md-option value="DE">DE</md-option>
              <md-option value="FL">FL</md-option>
              <md-option value="GA">GA</md-option>
              <md-option value="HI">HI</md-option>
              <md-option value="ID">ID</md-option>
              <md-option value="IL">IL</md-option>
              <md-option value="IN">IN</md-option>
              <md-option value="IA">IA</md-option>
              <md-option value="KS">KS</md-option>
              <md-option value="KY">KY</md-option>
              <md-option value="LA">LA</md-option>
              <md-option value="ME">ME</md-option>
              <md-option value="MD">MD</md-option>
              <md-option value="MA">MA</md-option>
              <md-option value="MI">MI</md-option>
              <md-option value="MN">MN</md-option>
              <md-option value="MS">MS</md-option>
              <md-option value="MO">MO</md-option>
              <md-option value="MT">MT</md-option>
              <md-option value="NE">NE</md-option>
              <md-option value="NV">NV</md-option>
              <md-option value="NH">NH</md-option>
              <md-option value="NJ">NJ</md-option>
              <md-option value="NM">NM</md-option>
              <md-option value="NY">NY</md-option>
              <md-option value="NC">NC</md-option>
              <md-option value="ND">ND</md-option>
              <md-option value="OH">OH</md-option>
              <md-option value="OK">OK</md-option>
              <md-option value="OR">OR</md-option>
              <md-option value="PA">PA</md-option>
              <md-option value="RI">RI</md-option>
              <md-option value="SC">SC</md-option>
              <md-option value="SD">SD</md-option>
              <md-option value="TN">TN</md-option>
              <md-option value="TX">TX</md-option>
              <md-option value="UT">UT</md-option>
              <md-option value="VT">VT</md-option>
              <md-option value="VA">VA</md-option>
              <md-option value="WA">WA</md-option>
              <md-option value="WV">WV</md-option>
              <md-option value="WI">WI</md-option>
              <md-option value="WY">WY</md-option>
            </md-select>
          </md-field>
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
            <label>Profile Picture</label>
            <md-file v-model="form.pic" />
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
            <md-button class="md-raised md-primary horCenter" style="background-color:#36318F; margin-left:25%;">Cancel</md-button>
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
      form: {
        state_id: null,
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
