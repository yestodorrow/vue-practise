// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
    error:'src/assets/time.jpg',
    loading:'src/assets/time.jpg',
    listenEvents:['scroll']
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
