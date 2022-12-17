import { config } from '@/config';
import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const HalfElf: BaseArticleDataInterface = {
  title: 'HALF-ELF',
  quote: `There was a time when noble men dwelled alongside elves. They were brothers to us then,
    but they failed us when our need was greatest. Those men that carry our blood today know
    it as a burden; it is one they will bear until our people look upon the First Tree once again.`,
  attribution: 'Ewenyl, 3rd Praetor of the Council',
  image: config.images.races.halfElf,
  imageTitle: 'Half-elf of Wydmyn',
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default HalfElf;
