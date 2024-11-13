<script setup lang="ts">
defineProps<{
  size?: number;
  width?: number;
}>();
</script>

<template>
  <v-progress-circular
    intermediate
    :size="size"
    :width="width"
  ></v-progress-circular>
</template>

<style scoped lang="scss"></style>
