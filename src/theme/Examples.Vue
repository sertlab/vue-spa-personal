<template>
  <div class="columns">
    <div class="column is-half">
      <app-increasedecrease></app-increasedecrease>
    </div>
    <div class="column is-half">
      <app-coordinates></app-coordinates>
    </div>
    <div class="column is half">
        <app-keyboardalert></app-keyboardalert>
    </div>
    <div class="column is half">
        <app-twowaybinding></app-twowaybinding>
    </div>
  </div>
</template>
<script>
  import IncreaseDecrease from './Examples/IncreaseDecrease.vue'
  import Coordinates from './Examples/Coordinates.vue'
  import KeyboardAlert from './Examples/KeyboardAlert.vue'
  import TwoWayBinding from './Examples/TwoWayBinding.vue'
  export default {
    components: {
      'app-increasedecrease': IncreaseDecrease,
      'app-coordinates': Coordinates,
      'app-keyboardalert': KeyboardAlert,
      'app-twowaybinding': TwoWayBinding
    }
  }
</script>
