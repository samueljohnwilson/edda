import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const EthKorel: BaseArticleDataInterface = {
  title: 'ETH-KOREL',
  quote: `The men of the west are brutish. We will educate them, with time. As
  with the sun, the Dawnbringer rises first in the east.`,
  attribution: 'Alyat Turgya, librarian, Atheneum of Amin',
  image:
    'https://cdna.artstation.com/p/assets/images/images/000/286/178/large/The_spider.jpg',
  imageSource: 'https://www.artstation.com/artwork/VdED4',
  imageTitle: 'Eth Korel',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default EthKorel;
