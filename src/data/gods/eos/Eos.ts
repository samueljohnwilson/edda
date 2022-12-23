import { Gods } from '@/Enums';
import { BaseArticleInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const eos: BaseArticleInterface = {
  name: 'Eos',
  value: Gods.EOS,
  data: {
    title: 'EOS',
    quote: `The men of the west are brutish. We will educate them, with time. As
    with the sun, the Dawnbringer rises first in the east.`,
    attribution: 'Alyat Turgya, librarian, Atheneum of Amin',
    image: require('@/assets/gods/enoreth-main.png'),
    imageTitle: 'An avatar of Eos',
    sidebar: SidebarComponent,
    content: MainComponent,
  },
};

export default eos;
