export interface BaseArticleDataInterface {
  attribution: string;
  className?: string;
  content: Vue.Component;
  image: string;
  imageTitle: string;
  title: string;
  quote: string;
  sidebar?: Vue.Component;
}

export interface BaseArticleInterface {
  data: BaseArticleDataInterface;
  name: string;
  value: string;
}

export interface TimelineEntryInterface {
  date?: string;
  icon: string;
  id: string;
  paragraphs: string[];
  title: string;
}

export interface TimelineArticleDataInterface {
  events: TimelineEntryInterface[];
  title: string;
}

export interface TimelineArticleInterface {
  data: TimelineArticleDataInterface;
  name: string;
  value: string;
}

export type ArticleList = Record<string, BaseArticleInterface>;
