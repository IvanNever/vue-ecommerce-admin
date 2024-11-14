<script setup lang="ts">
type InputVariants =
  | 'filled'
  | 'underlined'
  | 'outlined'
  | 'plain'
  | 'solo'
  | 'solo-inverted'
  | 'solo-filled';

type InputDensity = 'default' | 'comfortable' | 'compact';

const { label, placeholder, type, variant, density } = defineProps<{
  modelValue?: string | number;
  label?: string;
  placeholder?: string;
  type?: string;
  variant?: InputVariants;
  density?: InputDensity;
}>();
</script>

<template>
  <v-text-field
    :model-value="modelValue"
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :variant="variant"
    :density="density"
    @update:model-value="(value) => $emit('update:model-value', value)"
  ></v-text-field>
</template>

<style scoped lang="scss"></style>
