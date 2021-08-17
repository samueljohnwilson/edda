import Dwarf from '@/data/races/Dwarf';
import Elf from '@/data/races/Elf';
import Firbolg from '@/data/races/Firbolg';
import HalfElf from '@/data/races/HalfElf';
import Halfling from '@/data/races/Halfling';
import Human from '@/data/races/Human';
import { Races } from '@/Enums';
import { RacesState, RootState } from '@/store/Types';
import { BaseArticleInterface } from '@/Types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

/**
 * Lore pertaining to the races of Edda.
 */
const dwarf: BaseArticleInterface = {
  name: 'Dwarf',
  value: Races.DWARF,
  data: Dwarf,
};
const elf: BaseArticleInterface = {
  name: 'Elf',
  value: Races.ELF,
  data: Elf,
};
const firbolg: BaseArticleInterface = {
  name: 'Firbolg',
  value: Races.FIRBOLG,
  data: Firbolg,
};
const halfElf: BaseArticleInterface = {
  name: 'Half-Elf',
  value: Races.HALF_ELF,
  data: HalfElf,
};
const halfling: BaseArticleInterface = {
  name: 'Halfling',
  value: Races.HALFLING,
  data: Halfling,
};
const human: BaseArticleInterface = {
  name: 'Human',
  value: Races.HUMAN,
  data: Human,
};

/**
 * Initial race state.
 */
const state: RacesState = {
  races: {
    dwarf,
    elf,
    firbolg,
    halfElf,
    halfling,
    human,
  },
  activeRace: dwarf,
};

/**
 * Getters.
 */
const getters: GetterTree<RacesState, RootState> = {
  races: _state => _state.races,
  activeRace: _state => _state.activeRace,
};

/**
 * Actions.
 */
const actions: ActionTree<RacesState, RootState> = {
  setActiveRace({ commit }, race: BaseArticleInterface) {
    commit('SET_ACTIVE_RACE', race);
  },
};

/**
 * Mutations.
 */
const mutations: MutationTree<RacesState> = {
  ['SET_ACTIVE_RACE'](_state: RacesState, race: BaseArticleInterface) {
    _state.activeRace = race;
  },
};

/**
 * The Races Vuex module.
 */
const races: Module<RacesState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};

export default races;
