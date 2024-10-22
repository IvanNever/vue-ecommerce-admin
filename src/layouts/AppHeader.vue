<script setup lang="ts">
import { useTheme } from 'vuetify';
import { useNavbar } from '@/layouts/useNavbar';
import { useAuth } from '@/auth/composables/useAuth';
import { useRouter } from 'vue-router';
import AppIconButton from '@/ui-kit/AppIconButton.vue';
import AppIcon from '@/ui-kit/AppIcon.vue';
import AppLogo from '@/ui-kit/AppLogo.vue';

const router = useRouter();
const theme = useTheme();
const { toggleNavbar } = useNavbar();
const { signOut } = useAuth();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<template>
  <v-app-bar class="header" elevation="1">
    <template #prepend>
      <v-app-bar-nav-icon @click.stop="toggleNavbar" />
    </template>
    <v-toolbar-title>
      <AppLogo />
    </v-toolbar-title>
    <template #append>
      <div class="pr-2 d-flex align-center ga-1">
        <span>Ivan N.</span>
        <AppIconButton
          icon="mdi-account-outline"
          density="comfortable"
          size="x-large"
          @click="() => router.push({ name: 'account' })"
        ></AppIconButton>
        <AppIconButton
          icon="mdi-theme-light-dark"
          density="comfortable"
          size="x-large"
          @click="toggleTheme"
        ></AppIconButton>
        <AppIconButton
          icon="mdi-logout"
          density="comfortable"
          size="x-large"
          @click="signOut"
        ></AppIconButton>
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
