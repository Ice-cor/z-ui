<template>
  <div class="wrapper">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
.wrapper {
  font-size: $font-size;
  padding: 12px;
  display: inline-flex;
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding-left: 8px;
    &:hover {
      color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
      color: #bbb;
      border-color: #bbb;
    }
    &[readonly] {
      cursor: not-allowed;
    }
  }
}
</style>
