import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const Dwarf: BaseArticleDataInterface = {
  title: 'DWARF',
  quote:
    'The dwarves are a tough lot. They live among rocks and ice, where no men make their homes. Yet, it is the rocks that yield, not the dwarves.',
  attribution: 'Orym Rithgut, Jut trapper',
  image: process.env.IMAGE_URL_DWARF,
  imageTitle: 'Hethven (Mountain Dwarf)',
  isImageHorizontal: false,
  content: MainComponent,
};

export default Dwarf;
