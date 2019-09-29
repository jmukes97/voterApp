<template>
  <md-card md-with-hover v-for="item in items">
    <md-card-header>
      <div class="md-title">[Election name]</div>
    </md-card-header>
    <md-card-actions>
      <md-button class="md-accent">Vote</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {};
</script>

<style>
</style>