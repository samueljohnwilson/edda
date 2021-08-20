import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueScrollTo from 'vue-scrollto';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faArrowUp);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueScrollTo);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
