<template lang="html">
  <div class="game-container" :style="styles.gameContainer">
    <div class="grid-container">
      <div class="grid-row" v-for="rowIndex in 4">
        <div v-for="colIndex in 4" class="grid-box" :style="styles.gridBox"></div>
      </div>
    </div>
    <div class="grid-list"></div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      required: true,
      type: Number
    },
    height: {
      required: true,
      type: Number
    }
  },
  computed: {
    styles() {
      let containerWidth = this.width
      let containerHeight = this.height
      let gridWidth = (containerWidth - 5 * 15) / 4
      let gridHeight = (containerHeight - 5 * 15) / 4
      return {
        gameContainer: {
          width: `${containerWidth}px`,
          height: `${containerWidth}px`
        },
        gridBox: {
          width: `${gridWidth}px`,
          height: `${gridHeight}px`,
          margin: '15px 0 0 15px'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$back-color: #bbada0;
$grid-box-color: rgba(238, 228, 218, 0.35);

.game-container {
  position: relative;
  background: $back-color;
}

.grid-container,
.grid-list {
  position: absolute;
  width: 100%;
  height: 100%;
}

.grid-box {
  float: left;
  background: $grid-box-color;
}

.grid-list {
  
}
</style>
