<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#m-${name}`"></use>
  </svg>
</template>
<script>
import './svg.js'
export default {
  name:'milk-icon',
  props: ['name']
}
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
