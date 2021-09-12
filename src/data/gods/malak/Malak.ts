import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Malak: BaseArticleDataInterface = {
  title: 'MALAK',
  quote: `The men of the west are brutish. We will educate them, with time. As
  with the sun, the Dawnbringer rises first in the east.`,
  attribution: 'Alyat Turgya, librarian, Atheneum of Amin',
  image:
    'https://cdna.artstation.com/p/assets/images/images/017/982/614/large/antonio-j-manzanedo-consumer-of-souls-mazanedo-2.jpg',
  imageSource: 'https://www.artstation.com/artwork/QzNWPZ',
  imageTitle: 'Eth Korel',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Malak;
