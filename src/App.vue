<template>
  <div>
    <m-button type="success">test</m-button>
    <m-button>test</m-button>
    <m-button type="warning">test</m-button>
    <m-input v-model="val"></m-input>
    <!-- <m-input v-model:inputValue="val"></m-input> -->
    <!-- 当input的value属性绑定的值不为默认的modelValue时，需要使用v-model:xxxxx形式来代替 -->
    <p>{{ val }}</p>
  </div>
</template>

<script lang="ts" setup>
import { MButton, MInput } from '../packages/index';
// @ts-ignore
// import { MButton, MInput } from 'mozui'
import { ref } from 'vue';

const val = ref('');
</script>

<style lang="scss" scoped></style>