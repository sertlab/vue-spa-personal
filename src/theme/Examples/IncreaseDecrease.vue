<template>
    <div id="counter">
        <h1 class="title">Example 1</h1>
        <h1 class="subtitle">The increase and decrease buttons</h1>
        <p>{{ counter }}</p>
        <button v-on:click="increase">Increase me</button>
        <button v-on:click="decrease">Increase me</button>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      increase: function () {
        this.counter++
      },
      decrease: function () {
        this.counter--
      }
    }
  }
</script>