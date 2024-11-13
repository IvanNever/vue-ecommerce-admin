<script setup lang="ts">
import type { VariantType } from '@/ui-kit/commonTypes';

const { width, variant = 'flat' } = defineProps<{
  width?: number | string;
  variant?: VariantType;
}>();
</script>

<template>
  <v-card :width="width" :variant="variant">
    <slot></slot>
  </v-card>
</template>
