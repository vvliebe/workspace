<template lang="html">
  <div class="tile" :class="tileClass">
    {{value}}
  </div>
</template>

<script>
export default {
  props: {
    tile: {
      required: true,
      type: Object
    }
  },
  computed: {
    tileClass() {
      return `tile-${this.tile.level} tile-${this.tile.x}-${this.tile.y}`
    },
    value() {
      return Math.pow(2, this.tile.level)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";

.tile {
  position: absolute;
  left: 0;
  top: 0;
  width: $tile-size;
  height: $tile-size;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  font-weight: bolder;
  transition: all .25s ease-in-out;

  @for $x from 1 through 4 {
    @for $y from 1 through 4 {
      $newX: $tile-size * ($x - 1) + $tile-padding * ($x - 1);
      $newY: $tile-size * ($y - 1) + $tile-padding * ($y - 1);

      &.tile-#{$x}-#{$y} {
        transform: translate($newX, $newY);
      }
    }
  }

  @for $i from 1 through length($tile-colors) {
    &.tile-#{$i} {
      background: nth($tile-colors, $i)
    }
  }
}
</style>
