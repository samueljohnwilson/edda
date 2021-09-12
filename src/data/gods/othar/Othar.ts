import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Othar: BaseArticleDataInterface = {
  title: 'OTHAR',
  quote: 'Die smiling! Othar awaits!',
  attribution: 'Bjord toast',
  image:
    'https://cdnb.artstation.com/p/assets/images/images/028/674/601/large/caglayan-kaya-goksoy-valhalla-drowning-low.jpg',
  imageSource: 'https://www.artstation.com/artwork/9mNK3o',
  imageTitle: 'Othar',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Othar;
