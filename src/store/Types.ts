import { BaseArticleInterface, ArticleList } from '@/Types';

export interface RootState {
  name: string;
}

export interface RacesState {
  races: ArticleList;
  activeRace: BaseArticleInterface;
}

export interface LandsState {
  lands: ArticleList;
  activeLand: BaseArticleInterface;
}
