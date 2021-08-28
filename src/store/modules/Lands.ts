import Hetheskein from '@/data/lands/Hetheskein';
import Bjordlund from '@/data/lands/Bjordlund';
import Unterlund from '@/data/lands/Unterlund';
import Neywyll from '@/data/lands/Neywyll';
import Garrad from '@/data/lands/Garrad';
import Ithra from '@/data/lands/Ithra';
import Ulwyll from '@/data/lands/Ulwyll';
import { Lands } from '@/Enums';
import { LandsState, RootState } from '@/store/Types';
import { BaseArticleInterface } from '@/Types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

/**
 * Lore pertaining to the lands of Edda.
 */
const hetheskein: BaseArticleInterface = {
  name: 'Hetheskein',
  value: Lands.HETHESKEIN,
  data: Hetheskein,
};
const bjordlund: BaseArticleInterface = {
  name: 'Bjordlund',
  value: Lands.BJORDLUND,
  data: Bjordlund,
};
const unterlund: BaseArticleInterface = {
  name: 'Unterlund',
  value: Lands.UNTERLUND,
  data: Unterlund,
};
const neywyll: BaseArticleInterface = {
  name: 'Neywyll',
  value: Lands.NEYWYLL,
  data: Neywyll,
};
const garrad: BaseArticleInterface = {
  name: 'Garrad',
  value: Lands.GARRAD,
  data: Garrad,
};
const ithra: BaseArticleInterface = {
  name: 'Ithra',
  value: Lands.ITHRA,
  data: Ithra,
};
const ulwyll: BaseArticleInterface = {
  name: 'Ulwyll',
  value: Lands.ULWYLL,
  data: Ulwyll,
};

/**
 * Initial land state.
 */
const state: LandsState = {
  lands: {
    hetheskein,
    bjordlund,
    unterlund,
    neywyll,
    garrad,
    ithra,
    ulwyll,
  },
  activeLand: hetheskein,
};

/**
 * Getters.
 */
const getters: GetterTree<LandsState, RootState> = {
  lands: _state => _state.lands,
  activeLand: _state => _state.activeLand,
};

/**
 * Actions.
 */
const actions: ActionTree<LandsState, RootState> = {
  setActiveLand({ commit }, land: BaseArticleInterface) {
    commit('SET_ACTIVE_LAND', land);
  },
};

/**
 * Mutations.
 */
const mutations: MutationTree<LandsState> = {
  ['SET_ACTIVE_LAND'](_state: LandsState, land: BaseArticleInterface) {
    _state.activeLand = land;
  },
};

/**
 * The Lands Vuex module.
 */
const lands: Module<LandsState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};

export default lands;
