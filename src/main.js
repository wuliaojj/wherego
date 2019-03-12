// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import '../src/assets/css/reset.css'
import '../src/assets/css/border.css'
import '../src/assets/css/iconfont/iconfont.css'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {
  name: 'v-touch'
})
Vue.config.productionTip = false


import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
