import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Cerrunos: BaseArticleDataInterface = {
  title: 'CERRUNOS',
  quote: `As spring follows the hardest winter, so justice inevitably follows
    evil deeds. We must put our faith in the the First King, and act as the
    agents of his judgement.`,
  attribution: 'Sir Lunder, magistrate of the Even Hand',
  image:
    'https://cdnb.artstation.com/p/assets/images/images/005/947/665/large/anita-chaudhary-myt-red-astradhari-fire-5.jpg',
  imageSource: 'https://www.artstation.com/artwork/lDqye',
  imageTitle: 'An avatar of Cerrunos',
  isImageHorizontal: false,
  content: MainComponent,
  sidebar: SidebarComponent,
};

export default Cerrunos;
