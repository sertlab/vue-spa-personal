<template>
<div>
  <app-header></app-header>
  <div class="container">
    <router-view></router-view>
  </div>
  <app-footer></app-footer>
</div>
</template>
<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'

  export default {
    data () {
    },
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter
    }
  }
</script>
<style lang="scss">
  $primary: #287ab4;
  @import '~bulma';

  .columns {
    flex-wrap: wrap
  }
</style>
