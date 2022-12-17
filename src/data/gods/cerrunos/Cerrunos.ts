import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Cerrunos: BaseArticleDataInterface = {
  title: 'CERRUNOS',
  quote: `As spring follows winter, so justice follows
    evil. We must put our faith in the the First King, and act as the
    agents of his judgement.`,
  attribution: 'Sir Lunder, magistrate of the Even Hand',
  image:
    'https://cdnb.artstation.com/p/assets/images/images/005/947/665/large/anita-chaudhary-myt-red-astradhari-fire-5.jpg',
  imageTitle: 'An avatar of Cerrunos',
  content: MainComponent,
  sidebar: SidebarComponent,
};

export default Cerrunos;
