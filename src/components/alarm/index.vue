<template lang="html">
  <div class="alarm-wrapper">
    <div
      :class="'alarm-scale-box alarm-scale-box-' + (num - 1)"
      v-for="num in 60">
      <div class="alarm-scale"></div>
      <div class="alarm-number" v-if="num % 5 === 1">{{(num - 1) / 5 || 12}}</div>
    </div>
    <div :style="{transform: hourRotate}" class="hour"></div>
    <div :style="{transform: minuteRotate}" class="minute"></div>
    <div :style="{transform: secondRotate}" class="second"></div>
    <div class="center"></div>
  </div>
</template>

<script>
export default {
  props: ['time'],
  computed: {
    hourRotate() {
      let hourNum = this.time.getHours()
      hourNum = hourNum > 12 ? hourNum - 12 : hourNum
      let minuteNum = this.time.getMinutes()
      return `rotate(${hourNum * 30 + minuteNum / 2}deg)`
    },
    minuteRotate() {
      let minuteNum = this.time.getMinutes()
      return `rotate(${minuteNum * 6}deg)`
    },
    secondRotate() {
      let secondNum = this.time.getSeconds()
      return `rotate(${secondNum * 6}deg)`
    }
  }
}
</script>

<style lang="scss" scoped>
$alarm-size: 200px;
$scale-width-1: 2px;
$scale-height-1: 8px;
$scale-width-2: 3px;
$scale-height-2: 12px;
$hour-width: 20px;

$minute-width: 20px;
$second-width: 5px;
$hour-height: $alarm-size / 2 * .4;
$minute-height: $alarm-size / 2 * .6;
$second-height: $alarm-size / 2 * .8;
$center-size: $alarm-size / 10;

$back-color: rgba(0, 0, 0, .45);
$front-color: rgb(255, 255, 255);
$hour-color: rgb(225, 225, 225);
$minute-color: rgb(200, 200, 200);
$second-color: rgb(255, 0, 0);

.alarm-wrapper {
  position: relative;
  width: $alarm-size;
  height: $alarm-size;
  background: $back-color;
}
.alarm-scale-box {
  position: absolute;
  width: $alarm-size / 10;
  height: $alarm-size / 2;
  left: 50%;
  margin-left: -$alarm-size / 20;
}
.alarm-scale {
  position: absolute;
  left: 50%;
  background: $front-color;
  width: $scale-width-1;
  height: $scale-height-1;
}

.alarm-number {
  position: absolute;
  left: 50%;
  color: $front-color;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: $center-size;
  height: $center-size;
  border-radius: 50%;
  background: $front-color;
}
.hour {
  position: absolute;
  width: $hour-width;
  height: $hour-height;
  left: 50%;
  bottom: 50%;
  margin-left: -$hour-width / 2;
  background: $hour-color;
  border-radius: 50% 50% 0 0;
  transform-origin: bottom center;
}
.minute {
  position: absolute;
  width: $minute-width;
  height: $minute-height;
  left: 50%;
  bottom: 50%;
  margin-left: -$minute-width / 2;
  background: $minute-color;
  border-radius: 50% 50% 0 0;
  transform-origin: bottom center;
}
.second {
  position: absolute;
  width: $second-width;
  height: $second-height;
  left: 50%;
  bottom: 50%;
  margin-left: -$second-width / 2;
  background: $second-color;
  transform-origin: bottom center;
}
@for $i from 0 to 60 {
  .alarm-scale-box-#{$i} {
    transform-origin: bottom center;
    transform: rotate(#{$i * 6}deg);
    .alarm-scale {
      @if $i % 5 == 0 {
        width: $scale-width-2;
        height: $scale-height-2;
      }
      transform: translate(-50%, 0);
    }
    .alarm-number {
      transform: translate(-50%, 12px) rotate(#{-$i * 6}deg);
    }
  }
}
</style>
