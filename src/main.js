/* eslint-disable no-param-reassign */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Ionic from '@ionic/vue';
import VueContentPlaceholders from 'vue-content-placeholders';
import App from './App';
import router from './router';
import { categories } from './settings';


Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Ionic);
Vue.use(VueContentPlaceholders);

const store = new Vuex.Store({
  state: {
    currentCategory: categories[0],
    headlines: [],
  },
  getters: {
    getCurrentCategory: state => state.currentCategory,
    getHeadlines: state => state.headlines,
  },
  mutations: {
    changeCurrentCategory: (state, newCategory) => {
      state.currentCategory = newCategory;
    },
    setHeadlines: (state, articles) => {
      state.headlines = articles;
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
