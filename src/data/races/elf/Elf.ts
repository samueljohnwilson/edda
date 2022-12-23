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
  image:
    'https://cdn.discordapp.com/attachments/1008048169621393458/1053910707697111040/sam.dub_beautiful_elf_maiden_portrait_as_drawn_by_Greg_Rutkowsk_62a15289-4eac-44ad-b758-9dcf676a8c7c.png',
  imageTitle: 'Neydan (Elf of Neywyll)',
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Elf;
