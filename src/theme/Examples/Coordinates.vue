<template>
    <div id="counter">
        <h1 class="title">Example 2</h1>
        <h1 class="subtitle">The Coordinate Method.Just Hover and see!</h1>
        <p v-on:mousemove="updateCoordinates">{{ x }} / {{ y }}
            - <span v-on:mousemove.stop="">Dead Spot</span>
        </p>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        x: 0,
        y: 0
      }
    },
    methods: {
      updateCoordinates: function (event) {
        this.x = event.clientX
        this.y = event.clientY
      }
    }
  }
</script>