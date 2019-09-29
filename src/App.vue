<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
  
}
  Vue.material.locale.dateFormat = 'dd/MM/yyyy'

  // change multiple options
  Vue.material = {
    ...Vue.material,
    locale: {
      ...Vue.material.locale,
      dateFormat: 'dd/MM/yyyy',
      firstDayOfAWeek: 1
    }
  }
</script>

<style src="./assets/styles.css" lang="css"></style>

<style lang="sass">
    @import "~vue-material/dist/theme/engine";

    @include md-register-theme("default", (primary: #060051, accent: #BC0000));

    @import "~vue-material/dist/theme/all";
</style>
