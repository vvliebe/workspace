<template lang="html">
  <div class="game-container">
    <div class="grid-container">
      <div class="grid-row" v-for="rowIndex in 4">
        <div v-for="colIndex in 4" class="grid-column"></div>
      </div>
    </div>
    <div class="tile-container">
      <transition-group name="tile-list">
        <tile v-for="tile in tiles" :key="tile.id" :tile="tile"></tile>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Tile from 'components/v-2048/tile'
import TileModel from '../../pages/demos/my2048/tile'

const vectors = [
  { x: -1, y: 0, key: 'x' },
  { x: 0, y: -1, key: 'y' },
  { x: 1, y: 0, key: 'x' },
  { x: 0, y: 1, key: 'y' }
]
export default {
  components: {
    Tile
  },
  data() {
    return {
      tiles: [],
      gameover: false
    }
  },
  created() {
    this.start()
  },
  destroyed() {
    this.$nextTick(() => {
      this.removeEventListener()
    })
  },
  methods: {
    start() {
      this.addRamdomTile()
      this.addRamdomTile()
      this.addEventListener()
    },
    end() {
      this.tiles = []
      this.removeEventListener()
    },
    addEventListener() {
      document.addEventListener('keyup', this.move, false)
    },
    removeEventListener() {
      document.removeEventListener('keyup', this.move, false)
    },
    move(event) {
      let {keyCode} = event
      if (keyCode < 37 || keyCode > 40) return
      let dir = keyCode - 37
      this.moveTile(dir)
      this.addRamdomTile()
    },
    addRamdomTile() {
      if (this.tiles.length >= 16) {
        return
      }
      let x = Math.ceil(Math.random() * 4)
      let y = Math.ceil(Math.random() * 4)
      let level = Math.ceil(Math.random() * 2)
      while (true) {
        if (this.tiles.filter(tile => tile.x === x && tile.y === y).length === 0) break
        x = Math.ceil(Math.random() * 4)
        y = Math.ceil(Math.random() * 4)
      }
      this.tiles.push(new TileModel(x, y, level))
    },
    moveTile(dir) {
      let vector = vectors[dir]
      let key = vector.key
      let newTileList = []
      // 排序 并改成json
      let tileList = this.tiles
                      .sort((t1, t2) => vector[key] * (t2[key] - t1[key]))
                      .map(tile => ({x: tile.x, y: tile.y, level: tile.level}))
      tileList.forEach((tile, index) => {
        let target = {x: tile.x + vector.x, y: tile.y + vector.y, level: tile.level}
        while (target[key] <= 4 && target[key] > 0) {
          let repeatTiles = tileList.filter(t => t.x === target.x && t.y === target.y)
          let repeatNum = repeatTiles.length
          if (repeatNum === 0) {
            tile[key] = target[key]
            target[key] += vector[key]
          } else {
            if (repeatNum === 1 && target.level === repeatTiles[0].level) {
              tile[key] = target[key]
              repeatTiles[0].toBeMerge = true
              tile.toBeMerge = true
              newTileList.push(new TileModel(target.x, target.y, target.level + 1))
            }
            break
          }
        }
      })
      // TODO 如何强制更新dom？
      this.tiles = tileList.map((tile, index) => this.tiles[index].update(tile.x, tile.y, tile.level, tile.toBeMerge))
      // this.$forceUpdate()
      this.tiles = this.tiles.filter(tile => !tile.toBeMerge)
      // this.$forceUpdate()
      this.tiles = this.tiles.concat(newTileList)
      // this.$nextTick().then(() => {
      // }).then(() => {
      // })
      // this.$nextTick(() => {
      //   this.$nextTick(() => {
      //   })
      // })
    }
  },
  watch: {
    gameover() {
      this.end()
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index";

// .tile-list-move {
//   transition: all 1s ease-in-out;
// }
//
.tile-list-enter-active, .tile-list-leave {
  transition: all 1s ease-in-out;
}

.tile-list-enter, .tile-list-leave-active {
  opacity: 0;
  transform: scale(.1);
}

.game-container {
  position: relative;
  background: $back-color;
  box-sizing: border-box;
  border-radius: 10px;
  padding: $game-padding;
  width: $game-size;
  height: $game-size;
}

.grid-container,
.tile-container {
  position: absolute;
  left: $game-padding;
  right: $game-padding;
  top: $game-padding;
  bottom: $game-padding;
}

.grid-container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.grid-row {
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  &:not(:first-child) {
    margin-top: $tile-padding;
  }
}

.grid-column {
  flex: 1;
  height: 100%;
  background: $grid-box-color;
  &:not(:first-child) {
    margin-left: $tile-padding;
  }
}

</style>
