import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
