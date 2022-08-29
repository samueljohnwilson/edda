import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const Halfling: BaseArticleDataInterface = {
  title: 'HALFLING',
  quote:
    "In the countryside, there are few as trustworthy as the halflings; in the cities, you can trust them too—so long as you've got coins to offer.",
  attribution: 'Haven Thorne, trader',
  image:
    'https://assets-of-edda.sfo3.digitaloceanspaces.com/Persons/halfling.png',
  isImageHorizontal: false,
  imageTitle: 'Fieldfolk',
  content: MainComponent,
};

export default Halfling;
