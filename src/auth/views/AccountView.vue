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
  <div v-else class="account">
    <AppHeading type="h2"> Update your account data </AppHeading>
    <AppCard class="account__card">
      <UpdateCurrentUserDataForm />
    </AppCard>
    <AppHeading type="h2" class="mt-6"> Update your password </AppHeading>
    <AppCard class="account__card">
      <UpdateCurrentUserPasswordForm />
    </AppCard>
  </div>
</template>

<style scoped lang="scss">
.account {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &__card {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 1.8rem;
  }
}
</style>
