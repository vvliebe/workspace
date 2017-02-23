<template lang="html">
  <div class="game-container">
    <v-2048 :width="450" :height="450"></v-2048>
  </div>
</template>

<script>
import v2048 from 'components/v-2048/index'
export default {
  components: {
    v2048
  }
}
</script>

<style lang="scss" scoped>
.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
