<template>
  <div
    class="wrapper"
    :class="{error}"
  >
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
    />
    <template v-if="error">
      <icon name="error"></icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  components: {
    Icon,
  },
  props: {
    value: {
      type: String
    },
    placeholder: {
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
      type: String
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
$color-danger: #F73D71;
.wrapper {
  font-size: $font-size;
  // padding: 12px;
  margin-top: 12px;
  display: inline-block;
  >:not(:last:child){
    margin-right: .5em;
  }
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
  &.error {
    & > input {
      border-color: $color-danger;
    }
    svg{
      fill: $color-danger;
    }
    span{
      color: $color-danger;
    }
  }
}
</style>
