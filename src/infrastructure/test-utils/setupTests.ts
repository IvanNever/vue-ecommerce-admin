import { vi } from 'vitest';
import { config } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light'
  }
});

config.global.plugins = [vuetify];

vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn()
  }))
}));
