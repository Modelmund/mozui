<template>
  <div>
    <m-button type="success">test</m-button>
    <m-button>test</m-button>
    <m-button type="warning">test</m-button>
    <m-input v-model="val"></m-input>
    <p>{{ val }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const val = ref('');
</script>

<style lang="scss" scoped></style>