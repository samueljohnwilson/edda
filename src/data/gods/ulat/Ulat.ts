import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Ulat: BaseArticleDataInterface = {
  title: 'ULAT',
  quote: 'Die smiling! Othar awaits!',
  attribution: 'Bjord toast',
  image:
    'https://cdna.artstation.com/p/assets/images/images/036/716/296/large/antonio-j-manzanedo-great-earl-of-hell-manzanedo-fire-2.jpg',
  imageSource: 'https://www.artstation.com/artwork/aY3Kq2',
  imageTitle: 'Ulat',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Ulat;
