<template>
    <div id="counter">
        <h1 class="title">Example 4</h1>
        <h1 class="subtitle">Two way binding with Vue JS</h1>
        <p>Just Type in the input and see.After that press space and enter to see the changes!</p>
        <input type="text" v-model="name" v-on:keyup.enter="enterPressed" v-on:keyup.space="spacePressed">
        <p>{{name}}</p>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        name: 'Fanis'
      }
    },
    methods: {
      enterPressed: function () {
        this.name = 'You Pressed Enter'
      },
      spacePressed: function () {
        this.name = 'You Pressed Space'
      }
    }
  }
</script>