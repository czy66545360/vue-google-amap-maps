import Vue from 'vue';
import App from './App.vue';
import * as GAMaps from './index';
import Vuep from 'vuep';

Vue.config.productionTip = false;
Vue.use(Vuep);
Vue.use(GAMaps);

new Vue({
  render: h => h(App)
}).$mount('#app');
