<template>
  <div class="button-group"><slot /></div>
</template>
<script>
export default {
  name:'milk-button-group',
  mounted() {
    // 检测m - button - group的子元素是不是m - button
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(
          `button-group的子元素应该都是m-button,但是你写的是${name}`
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-radius: 4px;
.button-group {
  display: inline-flex;
  vertical-align: middle;
  > .button {
    border-radius: 0;
    /* 合并边距 */
    &:not(:first-child) {
      margin-left: -1px; //为border的宽度
    }
    &:hover {
      z-index: 1;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-bottom-right-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
}
</style>
