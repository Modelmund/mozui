<template>
  <div :class="mClass">
    <button>
      <slot> </slot>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "mButton",
};
</script>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
});

const mClass = computed(() => {
  return ['m-button', `m-button-${props.type}`];
})
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  &:hover,&:focus {
      opacity: .8;
    }
}

.m-button {
  button {
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid black;
  }
}

.m-button-default {
  button {
    background: rgb(134, 59, 25);
  }
}

.m-button-success {
  button {
    background: lightgreen;
  }
}

.m-button-warning {
  button {
    background: rgb(215, 45, 15);
  }
}
</style>
