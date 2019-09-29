<template>
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <i class="fas fa-bars"></i>
        </md-button>
        <span class="md-title">Post-it Vote</span>
      </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

      <md-list>
        <md-list-item>

          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Edit Profile</span>
        </md-list-item>
      </md-list>
      <md-list-item>
        <md-icon>error</md-icon>
        <span class="md-list-item-text">Logout</span>
      </md-list-item>
      </md-list>    </md-app-drawer>
    <md-app-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
    </md-app-content>
  </md-app>
</div>
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
</style>

<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  })
}
</script>
