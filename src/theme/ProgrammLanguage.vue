<template>
    <article class="message is-dark">
    <div class="message-header">
      <p>{{lang.title}}</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      {{lang.content}}
    </div>
  </article>
</template>
<script>
  export default {
    props: ['lang']
  }
</script>
