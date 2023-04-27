import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import JsonViewer from 'vue-json-viewer';
Vue.use(JsonViewer);

import store from './store'

Vue.config.productionTip = false
// Vue.prototype.$EventBus = new Vue()

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
