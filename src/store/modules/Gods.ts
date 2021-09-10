import Cerrunos from '@/data/gods/Cerrunos';
import Enoreth from '@/data/gods/Enoreth';
import Eos from '@/data/gods/Eos';
import EthKorel from '@/data/gods/EthKorel';
import Malak from '@/data/gods/Malak';
import Othar from '@/data/gods/Othar';
import Ulat from '@/data/gods/Ulat';
import { Gods } from '@/Enums';
import { GodsState, RootState } from '@/store/Types';
import { BaseArticleInterface } from '@/Types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

/**
 * Lore pertaining to the gods of Edda.
 */
const cerrunos: BaseArticleInterface = {
  name: 'Cerrunos',
  value: Gods.CERRUNOS,
  data: Cerrunos,
};
const enoreth: BaseArticleInterface = {
  name: 'Enoreth',
  value: Gods.ENORETH,
  data: Enoreth,
};
const eos: BaseArticleInterface = {
  name: 'Eos',
  value: Gods.EOS,
  data: Eos,
};
const ethKorel: BaseArticleInterface = {
  name: 'Eth Korel',
  value: Gods.ETH_KOREL,
  data: EthKorel,
};
const malak: BaseArticleInterface = {
  name: 'Malak',
  value: Gods.MALAK,
  data: Malak,
};
const othar: BaseArticleInterface = {
  name: 'Othar',
  value: Gods.OTHAR,
  data: Othar,
};
const ulat: BaseArticleInterface = {
  name: 'Ulat',
  value: Gods.ULAT,
  data: Ulat,
};

/**
 * Initial god state.
 */
const state: GodsState = {
  gods: {
    cerrunos,
    eos,
    othar,
    enoreth,
    malak,
    ulat,
    ethKorel,
  },
  activeGod: cerrunos,
};

/**
 * Getters.
 */
const getters: GetterTree<GodsState, RootState> = {
  gods: _state => _state.gods,
  activeGod: _state => _state.activeGod,
};

/**
 * Actions.
 */
const actions: ActionTree<GodsState, RootState> = {
  setActiveGod({ commit }, god: BaseArticleInterface) {
    commit('SET_ACTIVE_GOD', god);
  },
};

/**
 * Mutations.
 */
const mutations: MutationTree<GodsState> = {
  ['SET_ACTIVE_GOD'](_state: GodsState, god: BaseArticleInterface) {
    _state.activeGod = god;
  },
};

/**
 * The Gods Vuex module.
 */
const gods: Module<GodsState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};

export default gods;
