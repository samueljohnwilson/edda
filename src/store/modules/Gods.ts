import cerrunos from '@/data/gods/cerrunos/Cerrunos';
import enoreth from '@/data/gods/enoreth/Enoreth';
import eos from '@/data/gods/eos/Eos';
import ethKorel from '@/data/gods/eth-korel/EthKorel';
import malak from '@/data/gods/malak/Malak';
import othar from '@/data/gods/othar/Othar';
import ulat from '@/data/gods/ulat/Ulat';
import { Gods } from '@/Enums';
import { ArticleState, RootState } from '@/store/Types';
import { BaseArticleInterface } from '@/Types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

const state: ArticleState = {
  articleList: {
    [Gods.CERRUNOS]: cerrunos,
    [Gods.EOS]: eos,
    [Gods.OTHAR]: othar,
    [Gods.ENORETH]: enoreth,
    [Gods.ULAT]: ulat,
    [Gods.ETH_KOREL]: ethKorel,
    [Gods.MALAK]: malak,
  },
  activeArticle: cerrunos,
};

const getters: GetterTree<ArticleState, RootState> = {
  gods: _state => _state.articleList,
  activeGod: _state => _state.activeArticle,
};

const actions: ActionTree<ArticleState, RootState> = {
  setActiveGod({ commit }, god: BaseArticleInterface) {
    commit('SET_ACTIVE_GOD', god);
  },
};

const mutations: MutationTree<ArticleState> = {
  ['SET_ACTIVE_GOD'](_state: ArticleState, god: BaseArticleInterface) {
    _state.activeArticle = god;
  },
};

const gods: Module<ArticleState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};

export default gods;
