<template>
  <button
    class="z-button shabi"
    :disabled="loading"
    @click="$emit('click')"
  >
    <z-icon
      :class="['icon','loading',position]"
      v-if="loading"
      name="loading"
    ></z-icon>
    <z-icon
      :class="['icon',position]"
      v-if="name && !loading"
      :name="name"
    ></z-icon>
    <div class="content">
      <slot>按钮</slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon'

export default {
  components: {
    'z-icon': Icon
  },
  props: {
    name: {},
    position: {
      type: String,
      default: 'left',
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
    loading: {
      type: Boolean,
      default: false,
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return [true, false].indexOf(value) !== -1
      }
    }
  },
  name: 'g-button',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.z-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  color: var(--color);
  background: var(--button-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    background-color: var(--button-hover-bg);
    border-color: var(--border-hover-color);
    color: var(--color-hover);
    z-index: 1;
  }
  &:active {
    background-color: var(--button-active-bg);
    border-color: var(--border-active-color);
    color: var(--color-hover);
  }
  &:focus {
    // background-color: var(--button-hover-bg);
    // border-color: var(--border-hover-color);
    // color: var(--color-hover);
    outline: none;
  }
  &:disabled {
    background-color: white;
    cursor: default;
  }
  > .icon {
    order: 1;
    margin-right: 0.2em;
  }
  > .content {
    order: 2;
  }
  > .icon.right {
    order: 3;
    margin-left: 0.2em;
    margin-right: 0;
  }
  .loading {
    animation: loading 1s infinite linear;
  }
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
