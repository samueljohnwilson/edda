import Vue from 'vue';
import Vuex from 'vuex';
import races from './modules/Races';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    races,
  },
});
