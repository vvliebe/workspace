import uuid from 'uuid'

export default class Tile {
  constructor(x, y, level) {
    this.id = uuid.v1()
    this.x = x
    this.y = y
    this.level = level
    this.nextX = null
    this.nextY = null
    this.toBeMerge = false
  }
  translate(vector) {
    this.x += vector.x
    this.y += vector.y
    return this
  }
  update(x, y, level, toBeMerge) {
    this.x = x
    this.y = y
    this.level = level
    this.toBeMerge = toBeMerge
    return this
  }
}
