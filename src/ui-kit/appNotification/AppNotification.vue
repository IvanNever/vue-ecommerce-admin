<script setup lang="ts">
import { useNotification } from '@/ui-kit/appNotification/useNotification';
import type { BorderRadius } from '@/ui-kit/commonTypes';

interface AppNotificationProps {
  rounded?: BorderRadius;
  timeout?: number;
}
const { rounded = 'pill', timeout = 5000 } =
  defineProps<AppNotificationProps>();

const { isOpen, message, type } = useNotification();
</script>

<template>
  <v-snackbar
    v-model="isOpen"
    :timeout="timeout"
    :rounded="rounded"
    :color="type"
  >
    <div class="text-center">
      {{ message }}
    </div>
  </v-snackbar>
</template>

<style scoped lang="scss"></style>
