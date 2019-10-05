import Vue from 'vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
