import { Gods } from '@/Enums';
import { BaseArticleInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const ethKorel: BaseArticleInterface = {
  name: 'Eth Korel',
  value: Gods.ETH_KOREL,
  data: {
    title: 'ETH-KOREL',
    quote: `The men of the west are brutish. We will educate them, with time. As
    with the sun, the Dawnbringer rises first in the east.`,
    quoteAttribution: 'Alyat Turgya, librarian, Atheneum of Amin',
    image: require('@/assets/gods/eth-korel-main.png'),
    imageTitle:
      'The avatar of Eth Korel with a vial of poison during the <a>Turning of House Andrel</a>',
    content: MainComponent,
  },
};

export default ethKorel;
