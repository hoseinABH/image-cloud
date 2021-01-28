import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import AuthHandler from './components/AuthHandler';
import './styles/tailwind.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{ path: '/ouath2/callback', component: AuthHandler }],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
