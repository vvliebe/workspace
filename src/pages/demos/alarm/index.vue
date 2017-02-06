<template lang="html">
  <div class="demo-alarm-wrapper">
    <alarm :time="time"></alarm>
  </div>
</template>

<script>
import alarm from 'components/alarm'
export default {
  data() {
    return {
      time: new Date()
    }
  },
  created() {
    setInterval(() => {
      this.time = new Date()
    }, 60)
  },
  components: {
    alarm
  }
}
</script>

<style lang="scss" scoped>
.demo-alarm-wrapper {
}
</style>
