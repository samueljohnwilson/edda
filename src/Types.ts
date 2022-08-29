import Vue from 'vue';

// Layout types and interfaces.

/**
 * Interface for the data used in a BaseArticle component.
 */
export interface BaseArticleDataInterface {
  title: string;
  quote: string;
  attribution: string;
  image: string;
  imageTitle: string;
  isImageHorizontal: boolean;
  content: Vue.Component;
  className?: string;
  sidebar?: Vue.Component;
}

/**
 * Interface for the data and metadata used in
 * a BaseArticle component.
 */
export interface BaseArticleInterface {
  name: string;
  value: string;
  data: BaseArticleDataInterface;
}

/**
 * Interface for a single timeline entry.
 */
export interface TimelineEntryInterface {
  id: string;
  title: string;
  paragraphs: string[];
  icon: string;
  date?: string;
}

/**
 * Interface for a page that utilizes
 * the TimelineArticle component.
 */
export interface TimelineArticleDataInterface {
  title: string;
  events: TimelineEntryInterface[];
}

/**
 * Interface for the data and metadata used in
 * a TimelineArticle component.
 */
export interface TimelineArticleInterface {
  name: string;
  value: string;
  data: TimelineArticleDataInterface;
}

/**
 * Type designating a list of articles.
 */
export type ArticleList = Record<string, BaseArticleInterface>;
