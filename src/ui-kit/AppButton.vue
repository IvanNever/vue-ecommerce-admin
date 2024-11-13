<script setup lang="ts">
import type { BorderRadius, Sizes, VariantType } from '@/ui-kit/commonTypes';

const {
  prependIcon,
  appendIcon,
  rounded = 'xs',
  size,
  density,
  color = 'info',
  loading,
  variant = 'flat'
} = defineProps<{
  prependIcon?: string;
  appendIcon?: string;
  rounded?: BorderRadius;
  size?: Sizes | number;
  density?: 'default' | 'comfortable' | 'compact';
  color?: string;
  loading?: boolean;
  variant?: VariantType;
}>();
</script>

<template>
  <v-btn
    :prependIcon="prependIcon"
    :appendIcon="appendIcon"
    :size="size"
    :rounded="rounded"
    :density="density"
    :color="color"
    :loading="loading"
    :variant="variant"
  >
    <slot></slot>
  </v-btn>
</template>

<style scoped lang="scss"></style>
