import { BaseArticleInterface, ArticleList } from '@/Types';

export interface RootState {
  name: string;
}

export interface GodsState {
  gods: ArticleList;
  activeGod: BaseArticleInterface;
}

export interface LandsState {
  lands: ArticleList;
  activeLand: BaseArticleInterface;
}

export interface RacesState {
  races: ArticleList;
  activeRace: BaseArticleInterface;
}
