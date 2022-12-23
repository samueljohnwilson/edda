import { Gods } from '@/Enums';
import { BaseArticleInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const othar: BaseArticleInterface = {
  name: 'Othar',
  value: Gods.OTHAR,
  data: {
    title: 'OTHAR',
    quote: 'Die smiling! Othar awaits!',
    quoteAttribution: 'Bjord toast',
    image: require('@/assets/gods/othar-main.png'),
    imageTitle: 'An avatar of Othar',
    sidebar: SidebarComponent,
    content: MainComponent,
  },
};

export default othar;
