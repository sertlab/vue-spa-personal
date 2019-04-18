<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(lang, title) in langs" v-bind:key="lang.id">
      <app-language :lang="lang"></app-language>
    </div>
  </div>
</template>
<script>
  import Language from './ProgrammLanguage.vue'
  export default {
    components: {
      'app-language': Language
    },
    data () {
      return {
        langs: [
          {id: 1, title: 'PHP', content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque imperdiet diam, in tincidunt nunc scelerisque sit amet. Nam quis efficitur dui, vitae scelerisque ante. Donec cursus commodo neque, nec ornare enim facilisis id.'},
          {id: 2, title: 'JavaScript', content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque imperdiet diam, in tincidunt nunc scelerisque sit amet. Nam quis efficitur dui, vitae scelerisque ante. Donec cursus commodo neque, nec ornare enim facilisis id.'},
          {id: 3, title: 'C#', content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque imperdiet diam, in tincidunt nunc scelerisque sit amet. Nam quis efficitur dui, vitae scelerisque ante. Donec cursus commodo neque, nec ornare enim facilisis id.'},
          {id: 4, title: 'Assembly', content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque imperdiet diam, in tincidunt nunc scelerisque sit amet. Nam quis efficitur dui, vitae scelerisque ante. Donec cursus commodo neque, nec ornare enim facilisis id.'},
          {id: 5, title: 'Python', content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque imperdiet diam, in tincidunt nunc scelerisque sit amet. Nam quis efficitur dui, vitae scelerisque ante. Donec cursus commodo neque, nec ornare enim facilisis id.'}
        ]
      }
    }
  }
</script>
