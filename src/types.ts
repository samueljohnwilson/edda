// Layout types and interfaces.

/**
 * Interface for a single article entry.
 */
export interface ArticleEntryInterface {
  title: string;
  paragraphs: string[];
}

/**
 * Interface for the data used in a BaseArticle component.
 */
export interface BaseArticleDataInterface {
  title: string;
  quote: string;
  attribution: string;
  image: string;
  imageSource: string;
  isImageHorizontal: boolean;
  entries: ArticleEntryInterface[];
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
