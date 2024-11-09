<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/auth/composables/useAuth';
import { authContext } from '@/auth/infrastructure/context';
import AppHeading from '@/ui-kit/AppHeading.vue';
import AppCard from '@/ui-kit/AppCard.vue';
import AppInput from '@/ui-kit/AppInput.vue';
import AppForm from '@/ui-kit/AppForm.vue';
import AppButton from '@/ui-kit/AppButton.vue';
import AppLogo from '@/ui-kit/AppLogo.vue';
import AppNotification from '@/ui-kit/appNotification/AppNotification.vue';

import type { AuthRepo } from '@/auth/domain/AuthRepo';
import { useNotification } from '@/ui-kit/appNotification/useNotification';
import { apiErrors } from '@/infrastructure/utils/apiErrors';
import { useTheme } from 'vuetify';

const authRepo = authContext.get<AuthRepo>('AuthRepo');
const router = useRouter();
const { token } = useAuth();
const { showNotification } = useNotification();
const theme = useTheme();

const email = ref<string>('test@mail.com');
function handleEmailUpdate(value: string) {
  email.value = value;
}

const password = ref<string>('12345');
function handlePasswordUpdate(value: string) {
  password.value = value;
}

async function handleSubmit() {
  try {
    const res = await authRepo.signIn({
      email: email.value,
      password: password.value
    });
    token.value = res.token;
    localStorage.setItem('token', token.value);
    await router.push({ name: 'home' });
  } catch (error) {
    showNotification(apiErrors(error), 'error');
  }
}
</script>

<template>
  <div
    class="d-flex flex-column align-center justify-center ma-auto h-100 ga-8 px-6 w-100 w-md-50 w-xl-33"
  >
    <AppLogo isLoginPage />
    <AppHeading class="text-center" type="h1">
      Log in to your account
    </AppHeading>
    <AppCard
      class="w-100 pa-6 pa-md-10 mt-4"
      :class="{ 'bg-white': !theme.global.current.value.dark }"
    >
      <AppForm
        class="d-flex flex-column align-center ga-2 ga-md-6"
        @submit="handleSubmit"
      >
        <AppInput
          :modelValue="email"
          class="w-100"
          label="E-mail"
          placeholder="Email address..."
          type="email"
          variant="outlined"
          autocomplete="email"
          @update:model-value="handleEmailUpdate"
        />
        <AppInput
          :modelValue="password"
          class="w-100"
          label="Password"
          placeholder="Password..."
          type="password"
          variant="outlined"
          autocomplete="current-password"
          @update:model-value="handlePasswordUpdate"
        />
        <AppButton
          class="w-md-50 w-100"
          color="info"
          size="large"
          type="submit"
        >
          Log in
        </AppButton>
      </AppForm>
    </AppCard>
  </div>
  <AppNotification />
</template>

<style scoped lang="scss"></style>
