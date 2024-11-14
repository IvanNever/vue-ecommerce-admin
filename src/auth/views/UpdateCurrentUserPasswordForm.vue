<script setup lang="ts">
import { ref } from 'vue';
import { useNotification } from '@/ui-kit/appNotification/useNotification';
import { apiErrors } from '@/infrastructure/utils/apiErrors';
import { useDisplay } from 'vuetify';
import AppButton from '@/ui-kit/AppButton.vue';
import AppForm from '@/ui-kit/AppForm.vue';
import AppInput from '@/ui-kit/AppInput.vue';

const { showNotification } = useNotification();
const { smAndUp } = useDisplay();

const isLoading = ref<boolean>(false);
const showPassword = ref<boolean>(false);

const password = ref<string>('');
function handlePasswordUpdate(value: string): void {
  password.value = value;
}

const passwordConfirm = ref<string>('');
function handlePasswordConfirmUpdate(value: string): void {
  passwordConfirm.value = value;
}

async function handleSubmit(): void {
  if (password.value !== passwordConfirm.value) {
    showNotification('Passwords do not match. Please try again.', 'error');
    password.value = '';
    passwordConfirm.value = '';
    return;
  }

  try {
    isLoading.value = true;
    password.value = '';
    passwordConfirm.value = '';
    showNotification('Password updated successfully', 'success');
  } catch (error) {
    showNotification(apiErrors(error), 'error');
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <AppForm @submit="handleSubmit">
    <AppInput
      :modelValue="password"
      class="w-100"
      label="New password"
      placeholder="New password..."
      variant="outlined"
      :type="showPassword ? 'text' : 'password'"
      :density="smAndUp ? 'default' : 'compact'"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="showPassword = !showPassword"
      @update:model-value="handlePasswordUpdate"
    />
    <AppInput
      :modelValue="passwordConfirm"
      class="w-100"
      label="Confirm Password"
      placeholder="Confirm password..."
      variant="outlined"
      :type="showPassword ? 'text' : 'password'"
      :density="smAndUp ? 'default' : 'compact'"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="showPassword = !showPassword"
      @update:model-value="handlePasswordConfirmUpdate"
    />
    <AppButton
      :loading="isUpdating"
      type="submit"
      :size="smAndUp ? 'large' : undefined"
      class="d-block ml-auto"
    >
      Update password
    </AppButton>
  </AppForm>
</template>
