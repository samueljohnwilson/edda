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
  image: 'https://assets-of-edda.sfo3.digitaloceanspaces.com/Persons/elf.png',
  imageTitle: 'Neydan (Elf of Neywyll)',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Elf;
