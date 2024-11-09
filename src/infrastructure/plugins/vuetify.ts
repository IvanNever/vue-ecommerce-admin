import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const savedTheme = localStorage.getItem('theme');

const prefersTheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: savedTheme || prefersTheme,
    themes: {
      light: {
        colors: {
          background: '#ECEFF1',
          surface: '#CFD8DC',
          'on-background': '#212121',
          'on-surface': '#000000',
          error: '#D50000',
          info: '#3D5AFE',
          success: '#4CAF50',
          warning: '#FB8C00'
        }
      },
      dark: {
        colors: {
          background: '#263238',
          surface: '#37474F',
          'on-background': '#E0E0E0',
          'on-surface': '#EEEEEE',
          error: '#D50000',
          info: '#3D5AFE',
          success: '#4CAF50',
          warning: '#F57C00'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi'
  }
});
