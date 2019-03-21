import Vue from 'vue';
import App from './App.vue';
import * as GAMaps from './index';

Vue.config.productionTip = false;
Vue.use(GAMaps);

new Vue({
  render: h => h(App)
}).$mount('#app');
