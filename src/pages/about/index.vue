<template lang="html">
  <markdown :html="html"></markdown>
</template>

<script>
import markdown from 'components/markdown/index'
import aboutPage from 'sources/md/about.md'
export default {
  data() {
    return {
      html: aboutPage
    }
  },
  components: {
    markdown
  }
}
</script>

<style lang="css">
</style>
