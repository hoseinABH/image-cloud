import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';
import './styles/tailwind.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'text-green-500',
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler },
  ],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
