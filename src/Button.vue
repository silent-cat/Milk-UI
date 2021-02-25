<template>
  <button
    class="button test-link"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <!-- 如果有loaind就要隐藏当前图标 -->
    <m-icon v-if="icon && !loading" :name="icon" class="icon"></m-icon>
    <m-icon v-if="loading" name="loading" class="icon loading"></m-icon>
    <!-- slot无法使用class -->
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from './Icon'
export default {
  name: 'milk-button',
  components: {
    'm-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      // 对传入的不合法iconPositon进行校验
      validator(val) {
        return val === 'left' || val === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 按钮样式
.button {
  padding: 0 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; //让inline-flex的元素对齐
  padding: 0 1em;
  border: 1px solid orange;
  &:hover {
    border-color: red;
  }
  &:active {
    background-color: #eee;
  }
  &:focus {
    outline: none;
  }
  // 控制图标位置的类
  &.icon-left {
    > .icon {
      order: 1;
      margin-right: 0.4em;
    }
    > .content {
      order: 2;
    }
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.4em;
    }
    > .content {
      order: 1;
    }
  }

  // 加载动画
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  > .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
