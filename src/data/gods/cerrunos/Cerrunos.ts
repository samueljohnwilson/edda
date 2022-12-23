import { Gods } from '@/Enums';
import { BaseArticleInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const cerrunos: BaseArticleInterface = {
  name: 'Cerrunos',
  value: Gods.CERRUNOS,
  data: {
    title: 'CERRUNOS',
    quote: `As spring follows winter, so justice follows
      evil. We must put our faith in the the First King, and act as the
      agents of his judgement.`,
    quoteAttribution: 'Sir Lunder, magistrate of the Even Hand',
    image: require('@/assets/gods/cerrunos-main.png'),
    imageTitle: 'An avatar of Cerrunos',
    content: MainComponent,
    sidebar: SidebarComponent,
  },
};

export default cerrunos;
