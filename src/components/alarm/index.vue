<template lang="html">
  <div class="alarm-wrapper" :style="styles.alarmWrapper">
    <div
      :class="'alarm-scale-box alarm-scale-box-' + (num - 1)"
      v-for="num in 60">
      <div :style="styles.alarmScale" class="alarm-scale"></div>
      <div :style="styles.alarmNumber" class="alarm-number" v-if="num % 5 === 1">{{(num - 1) / 5 || 12}}</div>
    </div>
    <div :style="styles.hour" class="hour"></div>
    <div :style="styles.minute" class="minute"></div>
    <div :style="styles.second" class="second"></div>
    <div :style="styles.alarmCenter" class="center"></div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Date,
      required: true
    },
    size: {
      type: Number,
      default: 200,
      validator: value => value >= 150
    },
    hourColor: {
      type: String,
      default: 'rgb(225, 225, 225)'
    },
    minuteColor: {
      type: String,
      default: 'rgb(200, 200, 200)'
    },
    secondColor: {
      type: String,
      default: 'rgb(255, 12, 12)'
    },
    bgColor: {
      type: String,
      default: 'rgba(0, 0, 0, .45)'
    },
    frontColor: {
      type: String,
      default: 'rgb(255, 255, 255)'
    }
  },
  computed: {
    alarmSize() {
      return this.size >= 150 ? this.size : 150
    },
    styles() {
      // calc rotate angle
      let hourNum = this.time.getHours()
      let minuteNum = this.time.getMinutes()
      let secondNum = this.time.getSeconds()
      let msNum = this.time.getMilliseconds()
      hourNum = hourNum > 12 ? hourNum - 12 : hourNum

      // calc pointer length
      let hourHeight = this.alarmSize / 2 * 0.4
      let minuteHeight = this.alarmSize / 2 * 0.6
      let secondHeight = this.alarmSize / 2 * 0.8

      return {
        alarmWrapper: {
          width: `${this.alarmSize}px`,
          height: `${this.alarmSize}px`,
          background: this.bgColor
        },
        hour: {
          height: `${hourHeight}px`,
          transform: `rotate(${hourNum * 30 + minuteNum / 2}deg)`,
          background: this.hourColor
        },
        minute: {
          height: `${minuteHeight}px`,
          transform: `rotate(${minuteNum * 6}deg)`,
          background: this.minuteColor
        },
        second: {
          height: `${secondHeight}px`,
          transform: `rotate(${(secondNum + msNum / 1000) * 6}deg)`,
          background: this.secondColor
        },
        alarmNumber: {
          color: this.frontColor
        },
        alarmScale: {
          background: this.frontColor
        },
        alarmCenter: {
          background: this.frontColor
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$scale-width-1: 2px;
$scale-height-1: 8px;
$scale-width-2: 3px;
$scale-height-2: 12px;
$hour-width: 20px;

$minute-width: 20px;
$second-width: 5px;
$center-size: 20px;

.alarm-wrapper {
  position: relative;
}
.alarm-scale-box {
  position: absolute;
  width: 10%;
  height: 50%;
  left: 50%;
  margin-left: -5%;
}
.alarm-scale {
  position: absolute;
  left: 50%;
  width: $scale-width-1;
  height: $scale-height-1;
}

.alarm-number {
  position: absolute;
  left: 50%;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: $center-size;
  height: $center-size;
  border-radius: 50%;
}
.hour,
.minute,
.second {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform-origin: bottom center;
}

.hour {
  width: $hour-width;
  margin-left: -$hour-width / 2;
  border-radius: 50% 50% 0 0;
}
.minute {
  width: $minute-width;
  margin-left: -$minute-width / 2;
  border-radius: 50% 50% 0 0;
}
.second {
  width: $second-width;
  margin-left: -$second-width / 2;
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
      transform: translate(-50%, 15px) rotate(#{-$i * 6}deg);
    }
  }
}
</style>
