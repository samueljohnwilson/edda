import Dwarf from '@/data/races/dwarf/Dwarf';
import Elf from '@/data/races/elf/Elf';
import Firbolg from '@/data/races/firbolg/Firbolg';
import HalfElf from '@/data/races/half-elf/HalfElf';
import Halfling from '@/data/races/halfling/Halfling';
import Human from '@/data/races/human/Human';
import { Races } from '@/Enums';
import { ArticleState, RootState } from '@/store/Types';
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

const state: ArticleState = {
  articleList: {
    [Races.DWARF]: dwarf,
    [Races.ELF]: elf,
    [Races.FIRBOLG]: firbolg,
    [Races.HALF_ELF]: halfElf,
    [Races.HALFLING]: halfling,
    [Races.HUMAN]: human,
  },
  activeArticle: dwarf,
};

const getters: GetterTree<ArticleState, RootState> = {
  races: _state => _state.articleList,
  activeRace: _state => _state.activeArticle,
};

const actions: ActionTree<ArticleState, RootState> = {
  setActiveRace({ commit }, race: BaseArticleInterface) {
    commit('SET_ACTIVE_RACE', race);
  },
};

const mutations: MutationTree<ArticleState> = {
  ['SET_ACTIVE_RACE'](_state: ArticleState, race: BaseArticleInterface) {
    _state.activeArticle = race;
  },
};

const races: Module<ArticleState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};

export default races;
