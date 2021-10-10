import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Elf: BaseArticleDataInterface = {
  title: 'ELF',
  quote: `Upon the dying of the Sun and Moon,<br />
    Those flowers which have yet to bloom,<br />
    Shall be the first to know the pain,<br />
    Of the folk that crossed from whence we came.`,
  attribution: 'Elvish proverb',
  image:
    'https://cdnb.artstation.com/p/assets/images/images/008/945/603/large/carlos-amaral-elf-lord.jpg',
  imageSource: 'https://www.artstation.com/artwork/wor8X',
  imageTitle: 'Neydan (Elf of Neywyll)',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Elf;
