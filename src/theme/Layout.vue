<template>
<div>
  <app-header></app-header>
  <app-hero :route="route"></app-hero>
  <div class="container">
    <router-view></router-view>
  </div>
  <app-footer></app-footer>
</div>
</template>
<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import AppHero from './AppHero.vue'

  export default {
    data () {
      return {
        test: this.$route
      }
    },
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'app-hero': AppHero
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
