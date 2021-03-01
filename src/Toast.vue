<template>
  <div class="milk-toast" ref="toast">
    <div class="milk-message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="milk-line" ref="line"></div>
    <span v-if="closeButton" @click="onClickClose" class="milk-close">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'milk-toast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 500
    },
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
    }
  },
  created() {
    console.log(this.closeButton)
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
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
.milk-toast {
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
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  .milk-message{
    padding: 6px 0;
  }
}
.milk-close {
  padding-left: 16px;
  flex-shrink: 0;
  cursor: pointer;
}
.milk-line {
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>