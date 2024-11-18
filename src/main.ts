import { createApp } from 'vue';
import router from './infrastructure/router';
import vuetify from './infrastructure/plugins/vuetify';
import './assets/styles/main.scss';

import { initPublicContext } from '@/infrastructure/context';
import { initUserContext } from '@/users/infrastructure/context';
import { initAuthContext } from '@/auth/infrastructure/context';

import App from './App.vue';

const app = createApp(App);

app.use(vuetify);
app.use(router);

initPublicContext();
initUserContext();
initAuthContext();

app.mount('#app');
