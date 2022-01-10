import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'; // modulo de roteamento da aplicação

import router from './router/router.config';
import './css/global.css';

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
