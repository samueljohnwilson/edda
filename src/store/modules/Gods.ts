import cerrunos from '@/data/gods/cerrunos/Cerrunos';
import enoreth from '@/data/gods/enoreth/Enoreth';
import eos from '@/data/gods/eos/Eos';
import ethKorel from '@/data/gods/eth-korel/EthKorel';
import malak from '@/data/gods/malak/Malak';
import othar from '@/data/gods/othar/Othar';
import ulat from '@/data/gods/ulat/Ulat';
import { Gods } from '@/Enums';
import { GodsState, RootState } from '@/store/Types';
import { BaseArticleInterface } from '@/Types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

// Initial state

const state: GodsState = {
  gods: {
    [Gods.CERRUNOS]: cerrunos,
    [Gods.EOS]: eos,
    [Gods.OTHAR]: othar,
    [Gods.ENORETH]: enoreth,
    [Gods.ULAT]: ulat,
    [Gods.ETH_KOREL]: ethKorel,
    [Gods.MALAK]: malak,
  },
  activeGod: cerrunos,
};

// Getters

const getters: GetterTree<GodsState, RootState> = {
  gods: _state => _state.gods,
  activeGod: _state => _state.activeGod,
};

// Actions

const actions: ActionTree<GodsState, RootState> = {
  setActiveGod({ commit }, god: BaseArticleInterface) {
    commit('SET_ACTIVE_GOD', god);
  },
};

// Mutations

const mutations: MutationTree<GodsState> = {
  ['SET_ACTIVE_GOD'](_state: GodsState, god: BaseArticleInterface) {
    _state.activeGod = god;
  },
};

const gods: Module<GodsState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};

export default gods;
