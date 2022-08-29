import { config } from '@/config';
import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Elf: BaseArticleDataInterface = {
  title: 'ELF',
  quote: `Upon the dying of the Sun,<br />
    Night will fall, never to be undone.<br />
    The trees will be the first to share the pain,<br />
    Of the folk that crossed from whence we came.`,
  attribution: 'Elvish proverb',
  image: config.images.elf,
  imageTitle: 'Neydan (Elf of Neywyll)',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Elf;
