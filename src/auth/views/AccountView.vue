<script setup lang="ts">
import AppPageHeading from '@/ui-kit/AppPageHeading.vue';
import { useAuth } from '@/auth/composables/useAuth';
import AppHeading from '@/ui-kit/AppHeading.vue';
import UpdateCurrentUserDataForm from '@/auth/views/UpdateCurrentUserDataForm.vue';
import UpdateCurrentUserPasswordForm from '@/auth/views/UpdateCurrentUserPasswordForm.vue';

const { currentUser } = useAuth();

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
  {{ currentUser }}
  <AppHeading type="h2"> Update your account data </AppHeading>
  <UpdateCurrentUserDataForm />
  <AppHeading type="h2"> Update your password </AppHeading>
  <UpdateCurrentUserPasswordForm />
</template>

<style scoped lang="scss"></style>
