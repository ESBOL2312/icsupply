import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue2TouchEvents from 'vue2-touch-events';
import VueRouter from 'vue-router';


import i18n from './lang';

Vue.use(BootstrapVue);
Vue.use(Vue2TouchEvents);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
