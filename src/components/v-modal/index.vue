<template lang="html">
  <transition name="fade">
    <div class="v-modal-wrapper" v-show="visible">
      <div class="modal-mask" @click="close"></div>
      <transition :name="type">
        <div v-show="visible" class="modal-box">
        </div>
      </transition>
    </div>
</transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      default: 'fade'
    },
    close: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss">
.v-modal-wrapper {
  transform-style: preserve-3d;
  perspective: 1500px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .modal-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .45);
  }
  .modal-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 600px;
    height: 400px;
    background: rgb(255, 255, 255);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.zoom-enter-active, .zoom-leave-active {
  transition: all .5s;
}
.zoom-enter, .zoom-leave-active {
  transform: scale(.1);
}

.flip-enter-active, .flip-leave-active {
  transition: all .5s;
}
.flip-enter, .flip-leave-active {
  transform: rotateX(75deg);
}

.door-enter-active, .door-leave-active {
  transition: all .5s;
}
.door-enter, .door-leave-active {
  transform: rotateY(75deg);
}

.rotate-enter-active, .rotate-leave-active {
  transition: all .5s;
}
.rotate-enter, .rotate-leave-active {
  transform: rotateZ(120deg);
}

.slideUp-enter-active, .slideUp-leave-active {
  transition: all .5s;
}
.slideUp-enter, .slideUp-leave-active {
  transform: translate(0, 100px);
}

.slideDown-enter-active, .slideDown-leave-active {
  transition: all .5s;
}
.slideDown-enter, .slideDown-leave-active {
  transform: translate(0, -100px);
}

.slideLeft-enter-active, .slideLeft-leave-active {
  transition: all .5s;
}
.slideLeft-enter, .slideLeft-leave-active {
  transform: translate(-100px, 0);
}

.slideRight-enter-active, .slideRight-leave-active {
  transition: all .5s;
}
.slideRight-enter, .slideRight-leave-active {
  transform: translate(100px, 0);
}
</style>
