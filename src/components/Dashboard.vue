<template>
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <div>
          <img src="../assets/bars-solid.svg" height="20%" width="20%" @click="showNavigation = true">
        </div>

        <span class="md-title" style="text-align:center;"></span>
      </md-app-toolbar>

    <md-app-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">

      <md-avatar style="width:50%; height:auto; border-radius:50%; margin-top:10px;">
          <img src="https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif">
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
          <img src="../assets/edit-regular.svg" height="20%" width="20%" style="margin-right:5%;">
          <span class="md-list-item-text">Edit Profile</span>
        </md-list-item>
      <md-list-item>
        <img src="../assets/sign-out-alt-solid.svg" height="20%" width="20%" style="margin-right:5%;">
        <span class="md-list-item-text">Logout</span>
      </md-list-item>
      </md-list>    
      </md-app-drawer>
    <md-app-content>
      <div style="width:60%; margin-left:20%">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut volutpat velit, at porta turpis. Nullam vel facilisis erat. Cras fringilla risus erat, at fermentum ante accumsan eu. Maecenas massa dui, tincidunt a risus ac, interdum tincidunt ligula. Quisque ullamcorper dapibus tortor et suscipit. Nulla dictum nibh ut dapibus malesuada. Nam pulvinar mi id scelerisque hendrerit. Nullam ornare leo turpis. Curabitur venenatis rutrum nulla, quis accumsan purus rutrum aliquam. In non sem quis odio fermentum varius. Aliquam hendrerit tortor eu quam tempor interdum. Donec tincidunt vehicula dapibus.</p>
        <Election></Election>
      </div>      
    </md-app-content>
  </md-app>
</template>

<style lang="scss" scoped>
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
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
export default {
  name: 'Reveal',
  data: () => ({
    showNavigation: false
  })
}
</script>
