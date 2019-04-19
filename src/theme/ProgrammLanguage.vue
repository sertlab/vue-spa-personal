<template>
    <article class="message is-dark">
    <div class="message-header">
      <p>{{lang.title}}</p>
      <button @click="show = !show" class="delete" :aria-label="{arialabel}"></button>
    </div>
    <div v-if="show" class="message-body">
      {{lang.content}}
    </div>
  </article>
</template>
<script>
  export default {
    data () {
      return {
        show: true,
        arialabel: 'delete'
      }
    },
    methods: {
      changeLabel () {
        this.arialabel = 'edit'
      }
    },
    props: ['lang']
  }
</script>
