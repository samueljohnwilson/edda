import { config } from '@/config';
import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const Human: BaseArticleDataInterface = {
  title: 'HUMAN',
  quote: `While the ambition of men is their strength, it is also their weakness.
    That which drives them to achieve is the same
    which compels them to corruption. Few things rival the great heights
    and foul depths of the human spirit.`,
  attribution: 'Calaith Aowen, elven sage',
  image: config.images.human,
  imageTitle: 'Untish soldier',
  isImageHorizontal: false,
  content: MainComponent,
};

export default Human;
