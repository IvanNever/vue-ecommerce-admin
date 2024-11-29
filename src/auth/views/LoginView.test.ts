import { expect, describe, it, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginView from './LoginView.vue';
import AppForm from '@/ui-kit/AppForm.vue';
import AppLogo from '@/ui-kit/AppLogo.vue';
import AppHeading from '@/ui-kit/AppHeading.vue';
import AppCard from '@/ui-kit/AppCard.vue';
import AppInput from '@/ui-kit/AppInput.vue';
import AppButton from '@/ui-kit/AppButton.vue';

vi.mock('@/auth/composables/useAuth', () => ({
  useAuth: vi.fn(() => ({
    token: { value: null },
    currentUser: { value: null }
  }))
}));

vi.mock('@/ui-kit/appNotification/useNotification', () => ({
  useNotification: vi.fn(() => ({
    showNotification: vi.fn()
  }))
}));

const mockAuthRepo = {
  signIn: vi.fn()
};

vi.mock('@/auth/infrastructure/context', () => ({
  authContext: {
    get: vi.fn(() => mockAuthRepo)
  }
}));

describe('LoginView', () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    wrapper = mount(LoginView);
  });

  it('renders the login form correctly', () => {
    expect(wrapper.findComponent(AppLogo).exists()).toBe(true);
    expect(wrapper.findComponent(AppHeading).exists()).toBe(true);
    if (expect(wrapper.findComponent(AppCard).exists()).toBe(true)) {
      if (expect(wrapper.findComponent(AppForm).exists()).toBe(true)) {
        expect(wrapper.findComponent(AppInput).exists()).toBe(true);
        expect(wrapper.findComponent(AppButton).exists()).toBe(true);
      }
    }
  });

  it('updates email and password fields', async () => {
    const emailInput = wrapper.findComponent(AppInput).find('input');
    const passwordInput = wrapper.findAllComponents(AppInput)[1].find('input');

    console.log(emailInput, passwordInput);

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');

    expect(wrapper.vm.email).toBe('test@example.com');
    expect(wrapper.vm.password).toBe('password123');
  });

  it('validates input fields', () => {});

  it('handles API interaction', () => {});

  it('handles successful login', () => {});

  it('shows error notifications', () => {});
});
