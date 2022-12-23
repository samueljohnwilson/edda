import { Gods } from '@/Enums';
import { BaseArticleInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const ulat: BaseArticleInterface = {
  name: 'Ulat',
  value: Gods.ULAT,
  data: {
    title: 'ULAT',
    quote: 'Something evil',
    quoteAttribution: 'Ulat',
    image: require('@/assets/gods/ulat-main.png'),
    imageTitle: 'An avatar of Ulat',
    content: MainComponent,
  },
};

export default ulat;
