import { Race, RacesState, RootState } from '@/store/Types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

const state: RacesState = {
  races: {
    human: {
      name: 'Human',
    },
    dwarf: {
      name: 'Dwarf',
    },
    elf: {
      name: 'Elf',
    },
    halfelf: {
      name: 'Half-Elf',
    },
    halfling: {
      name: 'Halfling',
    },
    firbolg: {
      name: 'Firbolg',
    },
  },
  activeRace: Race.DWARF,
};

const getters: GetterTree<RacesState, RootState> = {
  races: _state => _state.races,
  activeRace: _state => _state.activeRace,
};

const actions: ActionTree<RacesState, RootState> = {
  setActiveRace({ commit }, race: Race) {
    commit('SET_ACTIVE_RACE', race);
  },
};

const mutations: MutationTree<RacesState> = {
  ['SET_ACTIVE_RACE'](_state: RacesState, race: Race) {
    _state.activeRace = race;
  },
};

const user: Module<RacesState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};

export default user;
