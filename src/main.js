import Vue from 'vue'
import App from './App.vue'
import Vue-Router from 'vue-router';
import { routes } from './routes'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
