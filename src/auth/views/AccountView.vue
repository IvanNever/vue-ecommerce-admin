<script setup lang="ts">
import { useAuth } from '@/auth/composables/useAuth';
import AppPageHeading from '@/ui-kit/AppPageHeading.vue';
import AppHeading from '@/ui-kit/AppHeading.vue';
import UpdateCurrentUserDataForm from '@/auth/views/UpdateCurrentUserDataForm.vue';
import UpdateCurrentUserPasswordForm from '@/auth/views/UpdateCurrentUserPasswordForm.vue';
import AppCard from '@/ui-kit/AppCard.vue';
import AppSpinner from '@/ui-kit/AppSpinner.vue';

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
  <AppSpinner v-if="!currentUser" />
  <div v-else class="d-flex flex-column ga-3">
    <AppHeading type="h3"> Update your account data </AppHeading>
    <AppCard class="d-flex flex-column px-3 py-4 px-md-4 py-md-6 pb-md-4">
      <UpdateCurrentUserDataForm />
    </AppCard>
    <AppHeading type="h3" class="mt-6"> Update your password </AppHeading>
    <AppCard class="d-flex flex-column px-3 py-4 px-md-4 py-md-6 pb-md-4">
      <UpdateCurrentUserPasswordForm />
    </AppCard>
  </div>
</template>
