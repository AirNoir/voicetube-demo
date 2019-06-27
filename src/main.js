import Vue from 'vue'
import App from './App.vue'
import store from './store'
import moment from 'moment'
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment);
Vue.config.productionTip = false
Vue.prototype.$duration = (seconds) => {
  return moment.duration(seconds, 'seconds').format('hh:mm:ss');
}

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
