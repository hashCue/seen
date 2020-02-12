import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FullPage from 'vue-fullpage.js/src/FullPage.vue'
import 'fullpage.js/vendors/scrolloverflow'


Vue.use(FullPage)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
