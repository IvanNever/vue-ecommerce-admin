<script setup lang="ts">
import { useTheme } from 'vuetify';
import type { VariantType } from '@/ui-kit/commonTypes';

const theme = useTheme();

const { width, variant = 'flat' } = defineProps<{
  width?: number | string;
  variant?: VariantType;
}>();
</script>

<template>
  <v-card
    :width="width"
    :variant="variant"
    :class="{ 'bg-white': !theme.global.current.value.dark }"
  >
    <slot></slot>
  </v-card>
</template>
