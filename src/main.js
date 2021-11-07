import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'bulma/css/bulma.css';
// Import the Auth0 configuration
import { domain, clientId } from '../auth_config.json';

// Import the plugin here
import { Auth0Plugin } from './auth';


import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false;



Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");