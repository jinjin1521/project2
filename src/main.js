import Vue from 'vue'
import router from './router/index.js'
import app from './components/app.vue'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el:'#app',
  render:h=>h(app),
  router
})
