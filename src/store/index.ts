import Vue from 'vue';
import Vuex from 'vuex';
import lands from './modules/Lands';
import races from './modules/Races';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lands,
    races,
  },
});
