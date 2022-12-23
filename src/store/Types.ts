import { BaseArticleInterface, ArticleList } from '@/Types';

export interface RootState {
  name: string;
}

export interface ArticleState {
  articleList: ArticleList;
  activeArticle: BaseArticleInterface;
}
