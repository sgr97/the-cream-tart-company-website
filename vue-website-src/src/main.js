import Vue from 'vue'
import App from './App.vue'
import 'boostrap'
import 'boostrap/dist/css/boostrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
