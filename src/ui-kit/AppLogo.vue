<script setup lang="ts">
import AppIcon from '@/ui-kit/AppIcon.vue';
defineProps<{
  isLoginPage?: boolean;
}>();
</script>

<template>
  <div v-if="isLoginPage" class="d-flex align-center ga-3">
    <span class="logo__title login">VueMart</span>
    <AppIcon icon="mdi-cart-variant" size="3.6rem"></AppIcon>
  </div>
  <router-link v-else class="logo" :to="{ name: 'home' }">
    <span class="logo__title">VueMart</span>
    <AppIcon icon="mdi-cart-variant"></AppIcon>
  </router-link>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: inherit;
  text-decoration: none;
  &__title {
    font-size: 1.6rem;
    line-height: 1;
    font-weight: 900;
    &.login {
      font-size: 3rem;
    }
  }
}
</style>
