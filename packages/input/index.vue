<template>
  <div>
    <!-- <input type="text" :value="inputValue" @input="input"> -->
    <input type="text" :value="modelValue" @input="input">
  </div>
</template>

<script lang="ts">
  export default {
    name: "MInput"
  }
</script>
<script setup lang="ts">
const props = defineProps<{modelValue: String | Number}>()
// const props = defineProps({
//   inputValue: [ String, Number ]
// })
const emit = defineEmits<{ (event: 'update:modelValue', modelValue: String | Number): void }>();
const input = (e: any) => {
  emit('update:modelValue', e.target.value);
  // console.log(e.target.value);
}
</script>

<style lang="scss" scoped>

</style>