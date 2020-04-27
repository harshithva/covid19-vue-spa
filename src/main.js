import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import Statistics from './components/Statistics.vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHouseUser, faChartArea, faAddressBook, faInfoCircle, faAlignLeft, faBell, faPhoneAlt, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter)

library.add(faUserSecret, faHouseUser, faChartArea, faAddressBook, faInfoCircle, faAlignLeft, faBell, faPhoneAlt, faComment)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const routes = [
  { path: '/', component: Home },
  { path: '/stats', component: Statistics },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
