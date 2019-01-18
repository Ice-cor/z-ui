<template>
  <button
    class="z-button"
    :disabled="loading"
    @click="$emit('click')"
  >
    <svg
      :class="['icon','loading',position]"
      aria-hidden="true"
      v-if="loading"
    >
      <use :xlink:href="`#icon-loading`"></use>
    </svg>
    <svg
      :class="['icon',position]"
      aria-hidden="true"
      v-if="name && !loading"
    >
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
    <div class="content">
      <slot>按钮</slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    name: {},
    position: {
      type: String,
      default: "left",
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["left", "right"].indexOf(value) !== -1;
      }
    },
    loading: {
      type: Boolean,
      default: false,
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return [true, false].indexOf(value) !== -1;
      }
    }
  },
  name: "g-button",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.z-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
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
