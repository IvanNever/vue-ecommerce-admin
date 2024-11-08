<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuth } from '@/auth/composables/useAuth';
import AppIconButton from '@/ui-kit/AppIconButton.vue';

const router = useRouter();
const { token } = useAuth();

function signOut(): void {
  token.value = null;
  localStorage.removeItem('token');
  router.push('/login');
}
</script>

<template>
  <AppIconButton
    icon="mdi-logout"
    density="comfortable"
    size="x-large"
    @click="signOut"
  ></AppIconButton>
</template>

<style scoped lang="scss"></style>
