import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify/lib";

import 'vuetify/dist/vuetify.css';

import Main from './Main';

Vue.use(VueRouter);
Vue.use(Vuetify, { iconfont: 'mdi' });

new Vue({
    vuetify : new Vuetify(),
    router  : new VueRouter(),
    render  : (h) => h(Main)
}).$mount('#app');