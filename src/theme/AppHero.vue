<template>
<section class="hero is-medium is-bold" :class="getClass()">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{title}}
      </h1>
      <h2 class="subtitle">
        {{subtitle}}
      </h2>
    </div>
  </div>
</section>
</template>
<script>
  export default {
    methods: {
      getClass: function () {
        if (this.$route.path === '/') {
          return 'is-primary'
        } else if (this.$route.path === '/interests') {
          return 'is-info'
        } else if (this.$route.path === '/vue-examples') {
          return 'is-dark'
        } else {
          return 'is-danger'
        }
      }
    },
    computed: {
      subtitle: function () {
        console.log(this.$route.path)
        if (this.$route.path === '/') {
          return 'Welcome to my first SPA. This Project build during DotMe day proccess'
        } else if (this.$route.path === '/interests') {
          return 'Programming Languages im currently using'
        } else if (this.$route.path === '/vue-examples') {
          return 'Examples of single event listening'
        } else {
          return 'The Requested URL didnt found'
        }
      },
      title: function () {
        console.log(this.$route.path)
        if (this.$route.path === '/') {
          return 'Home Page'
        } else if (this.$route.path === '/interests') {
          return 'My Interests'
        } else if (this.$route.path === '/vue-examples') {
          return 'Event Listening'
        } else {
          return 'The Requested URL didnt found'
        }
      }
    },
    props: ['route']
  }
</script>
<style lang="scss">
  .hero {
    margin-bottom:50px; 
  }
</style>
