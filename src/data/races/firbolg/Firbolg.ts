import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const Firbolg: BaseArticleDataInterface = {
  title: 'FIRBOLG',
  quote: `When the elves first came to Edda, the races of men and dwarves had not yet awakened.
    We traveled west, meeting nothing but wild beasts. Yet, when we arrived in Neywyll,
    we came upon the firbolg. Their roots here were ancient even then. Though the centuries
    may pass, we will always be visitors in their land.`,
  attribution: 'Galen, Elder of House Llowynd',
  image:
    'https://assets-of-edda.sfo3.digitaloceanspaces.com/Persons/firbolg.png',
  imageTitle: 'Firbolg',
  isImageHorizontal: false,
  content: MainComponent,
};

export default Firbolg;
