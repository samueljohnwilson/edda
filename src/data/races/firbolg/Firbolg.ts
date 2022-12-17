import { config } from '@/config';
import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const Firbolg: BaseArticleDataInterface = {
  title: 'FIRBOLG',
  quote: `When the elves first came to Edda, the races of men and dwarves had not yet awakened.
    We traveled west, meeting nothing but wild beasts. <br />
    Yet, when we arrived in Neywyll, we came upon the firbolg.
    Their roots here were ancient even then. <br />
    Though the centuries may pass, we will always be visitors in their land.`,
  attribution: 'Galen, Elder of House Llowynd',
  image: config.images.races.firbolg,
  imageTitle: 'Firbolg',
  isImageHorizontal: false,
  content: MainComponent,
};

export default Firbolg;
