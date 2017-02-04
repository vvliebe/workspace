<template lang="html">
  <div class="demo-v-modal-wrapper">
    <div class="btn-grid">
      <el-button>testing</el-button>
    </div>
    <v-modal></v-modal>
  </div>
</template>

<script>
import Vue from 'vue'
import {Button} from 'element-ui'
import vModal from 'components/v-modal'

Vue.use(Button)
export default {
  components: {
    vModal
  }
}
</script>

<style lang="scss" scoped>
  .demo-v-modal-wrapper {
    width: 100%;
    height: 100%;
    background: #58B7FF;
    .btn-grid {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
