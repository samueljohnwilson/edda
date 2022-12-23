import Hetheskein from '@/data/lands/hetheskein/Hetheskein';
import Bjordlund from '@/data/lands/bjordlund/Bjordlund';
import Unterlund from '@/data/lands/unterlund/Unterlund';
import Neywyll from '@/data/lands/neywyll/Neywyll';
import Garrad from '@/data/lands/garrad/Garrad';
import Ithra from '@/data/lands/ithra/Ithra';
import Ulwyll from '@/data/lands/ulwyll/Ulwyll';
import { Lands } from '@/Enums';
import { ArticleState, RootState } from '@/store/Types';
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

const state: ArticleState = {
  articleList: {
    [Lands.HETHESKEIN]: hetheskein,
    [Lands.BJORDLUND]: bjordlund,
    [Lands.UNTERLUND]: unterlund,
    [Lands.NEYWYLL]: neywyll,
    [Lands.GARRAD]: garrad,
    [Lands.ITHRA]: ithra,
    [Lands.ULWYLL]: ulwyll,
  },
  activeArticle: hetheskein,
};

const getters: GetterTree<ArticleState, RootState> = {
  lands: _state => _state.articleList,
  activeLand: _state => _state.activeArticle,
};

const actions: ActionTree<ArticleState, RootState> = {
  setActiveLand({ commit }, land: BaseArticleInterface) {
    commit('SET_ACTIVE_LAND', land);
  },
};

const mutations: MutationTree<ArticleState> = {
  ['SET_ACTIVE_LAND'](_state: ArticleState, land: BaseArticleInterface) {
    _state.activeArticle = land;
  },
};

const lands: Module<ArticleState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};

export default lands;
