import { Gods } from '@/Enums';
import { BaseArticleInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const enoreth: BaseArticleInterface = {
  name: 'Enoreth',
  value: Gods.ENORETH,
  data: {
    title: 'ENORETH',
    quote: `All that we can imagine exists within The Sum of All Things, whether
      fair or foul. It is eternal, unbounded, limitless.`,
    quoteAttribution: 'Calaith Aowen, elven sage',
    image: require('@/assets/gods/enoreth-main.png'),
    imageTitle: 'The Astral Plane',
    content: MainComponent,
  },
};

export default enoreth;
