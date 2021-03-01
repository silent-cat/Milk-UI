<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" @click="onClickClose" class="close">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator(val) {
        console.log(val);
        return val === false || typeof val === 'number'
      }
    },
    // autoCloseDelay: {
    //   type: Number,
    //   default: 5
    // },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom', 'center'].indexOf(val) >= 0
      }
    }
  },
  created() {
    console.log(this.closeButton)
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + 'px'
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
    log() {
      console.log('log')
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$font-color: #fff;
$toast-min-height: 40px;
$toast-bg: #3b3c3d;

.toast {
  line-height: 1.8;
  display: flex;
  align-items: center;
  color: $font-color;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  /* 不要写死高度 */
  min-height: $toast-min-height;
  background: $toast-bg;
  border-radius: 4px;
  // box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  .message {
    padding: 6px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translate(-50%, -100%);
    }
    100% {
      opacity: 1;
      transform: translateY(-50%, 0%);
    }
  }
  &.position-top {
    animation: slide-down 1s;
    top: 0;
    transform: translateX(-50%);
  }
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translate(-50%, 100%);
    }
    100% {
      opacity: 1;
      transform: translateY(-50%, -100%);
    }
  }
  &.position-bottom {
    animation: slide-up 1s;
    top: 100%;
    transform: translate(-50%, -100%);
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.position-center {
    animation: fade-in 1s;

    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
