<script setup lang="ts">
import AppPageHeading from '@/ui-kit/AppPageHeading.vue';

const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    href: 'home'
  },
  {
    title: 'Account',
    disabled: true,
    href: 'account'
  }
];
</script>

<template>
  <AppPageHeading title="Account" :breadcrumbs="breadcrumbs" />
  <div>Account page in progress...</div>
</template>

<style scoped lang="scss"></style>
