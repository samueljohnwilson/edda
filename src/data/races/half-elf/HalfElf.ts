import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const HalfElf: BaseArticleDataInterface = {
  title: 'HALF-ELF',
  quote: `There was a time when noble men dwelled alongside elves. They were brothers to us then,
    but they failed us when our need was greatest. Those men that carry our blood today know
    it as a burden; it is one they will bear until our people look upon the First Tree once again.`,
  attribution: 'Ewenyl, 3rd Praetor of the Council',
  image:
    'https://cdnb.artstation.com/p/assets/images/images/005/303/387/large/matt-duckett-duckettmatt-03-woodlandranger.jpg',
  imageSource: 'https://www.artstation.com/artwork/d6DzA',
  imageTitle: 'Half-elf of Wydmyn',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default HalfElf;
