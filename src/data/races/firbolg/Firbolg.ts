import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const Firbolg: BaseArticleDataInterface = {
  title: 'FIRBOLG',
  quote: `When the elves first came to Edda, the races of men and dwarves had not yet awakened.
    We traveled west, meeting nothing but wild beasts. <br />
    Yet, when we arrived in Neywyll, we came upon the firbolg.
    Their roots here were ancient even then. <br />
    Though the centuries may pass, we will always be visitors in their land.`,
  quoteAttribution: 'Galen, Elder of House Llowynd',
  image:
    'https://cdn.discordapp.com/attachments/1008048169621393458/1054256785080455239/sam.dub_firbolg_portrait_druid_long_beard_as_drawn_by_Greg_Rutk_ab58b4ca-cc6c-4694-a50e-e9a3b668bf73.webp',
  imageTitle: 'Firbolg',
  content: MainComponent,
};

export default Firbolg;
