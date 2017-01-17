<template lang="html">
  <div class="markdown-body" v-html="content"></div>
</template>

<script>
import marked from 'marked'
import 'github-markdown-css'

export default {
  props: ['html'],
  data() {
    return {
      content: marked(this.html)
    }
  }
}
</script>

<style lang="css">
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}
</style>
