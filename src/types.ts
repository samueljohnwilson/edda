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
