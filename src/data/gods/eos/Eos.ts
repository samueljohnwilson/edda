import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Eos: BaseArticleDataInterface = {
  title: 'EOS',
  quote: `The men of the west are brutish. We will educate them, with time. As
  with the sun, the Dawnbringer rises first in the east.`,
  attribution: 'Alyat Turgya, librarian, Atheneum of Amin',
  image:
    'https://cdnb.artstation.com/p/assets/images/images/007/542/663/large/julian-bauer-vaipuminen-detail1.jpg',
  imageSource: 'https://www.artstation.com/artwork/ldvRO',
  imageTitle: 'An avatar of Eos',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Eos;
