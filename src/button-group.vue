<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ZButtonGroup'
}
</script>
<style lang="scss">
.z-button-group {
  display: inline-flex;
  > .z-button {
    border-radius: 0;
    margin-right: 0;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
      // border-right: 1px solid black;
      border-right: 1px solid var(--border-color-active)

    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:not(:first-child) {
      // margin-left: -1px;
    }
  }
}
</style>
