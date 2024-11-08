<script setup lang="ts">
import { useNotification } from '@/ui-kit/appNotification/useNotification';

const { isOpen, message } = useNotification();
</script>

<template>
  <v-snackbar :timeout="3000" v-model="isOpen">
    {{ message }}
  </v-snackbar>
</template>

<style scoped lang="scss"></style>
