import { Races } from './Enums';

/**
 * Layout types and interfaces.
 */

export interface BaseCardInterface {
  title: string;
  paragraphs: string[];
}

export interface BaseArticleDataInterface {
  title: string;
  quote: string;
  attribution: string;
  image: string;
  cards: BaseCardInterface[];
}

/**
 * Race types and interfaces.
 */

export interface ListItem {
  name: string;
  value: Races;
  data: BaseArticleDataInterface;
}

export type List = Record<string, ListItem>;
