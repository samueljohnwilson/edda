import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Human: BaseArticleDataInterface = {
  title: 'HUMAN',
  quote: `While the ambition of men is their strength, it is also their weakness.
    That which drives them to achieve is the same
    which compels them to corruption. Few things rival the great heights
    and foul depths of the human spirit.`,
  attribution: 'Calaith Aowen, elven sage',
  image:
    'https://cdna.artstation.com/p/assets/images/images/016/956/610/large/tomas-duchek-redbaron-m.jpg',
  imageSource: 'https://www.artstation.com/artwork/2xOlKa',
  imageTitle: 'Untish soldier',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Human;
