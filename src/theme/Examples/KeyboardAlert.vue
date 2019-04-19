<template>
    <div id="counter">
        <h1 class="title">Example 3</h1>
        <h1 class="subtitle">Enter a text into form , press Space or Enter and see in console</h1>
        <input type="text" v-on:keyup.enter.space="alertMe">
    </div>
</template>
<script>
  export default {
    methods: {
      alertMe: function () {
        console.log('congrats')
      }
    }
  }
</script>