import { createApp } from 'vue';
import router from './infrastructure/router';
import { createPinia } from 'pinia';
import vuetify from './infrastructure/plugins/vuetify';
import './assets/styles/main.scss';

import { initPublicContext } from '@/infrastructure/context';
import { initUserContext } from '@/users/infrastructure/context';

import App from './App.vue';
import { initAuthContext } from '@/auth/infrastructure/context';

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

initPublicContext();
initUserContext();
initAuthContext();

app.mount('#app');
