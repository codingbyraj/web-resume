import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

import "./assets/styles/global-styles.css";
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueProgressiveImage from 'vue-progressive-image';
import VuePageTransition from 'vue-page-transition';
import Vuelidate from 'vuelidate';

let VueScrollTo = require('vue-scrollto');
 

library.add(fas);
library.add(fab);
library.add(far);
dom.watch();

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueScrollTo);
Vue.use(VuePageTransition);
Vue.use(Vuelidate);
Vue.use(VueProgressiveImage, {
  blur: 10
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

console.log("Hi, \n\nI would love to connect with you. \nJust drop your message at 'hey@iabhishekraj.in' if you wanna share a cup of tea with me.\n\nThanks,\nAbhishek Raj");