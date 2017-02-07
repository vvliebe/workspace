<template lang="html">
  <div class="demo-v-modal-wrapper">
    <div class="btn-grid">
      <div v-for="type in types">
        <el-button @click="openModal(type)">{{type}}</el-button>
      </div>
    </div>
    <v-modal
      :type="modalType"
      :visible="modalVisible"
      :close="closeModal"></v-modal>
  </div>
</template>

<script>
import Vue from 'vue'
import {Button} from 'element-ui'
import vModal from 'components/v-modal'

Vue.use(Button)
export default {
  data() {
    return {
      types: [
        'zoom',
        'fade',
        'flip',
        'door',
        'rotate',
        'slideUp',
        'slideDown',
        'slideLeft',
        'slideRight'
      ],
      modalType: 'fade',
      modalVisible: false
    }
  },
  components: {
    vModal
  },
  methods: {
    openModal(type) {
      this.modalType = type
      this.modalVisible = true
    },
    closeModal() {
      this.modalVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .demo-v-modal-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background: #58B7FF;
    .btn-grid {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      div {
        display: flex;
        width: 33.3%;
        justify-content: center;
        button {
          width: 100px;
          height: 40px;
        }
      }
    }
  }
</style>
