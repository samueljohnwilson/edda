import { config } from '@/config';
import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Dwarf: BaseArticleDataInterface = {
  title: 'DWARF',
  quote: `The dwarves are a tough lot. <br />
    They live among rocks and ice, where no men make their homes. <br />
    Yet, it is the rocks that yield, not the dwarves.`,
  attribution: 'Orym Rithgut, Jut trapper',
  image:
    'https://cdn.discordapp.com/attachments/1008048169621393458/1053896936060633169/sam.dub_dwarf_portrait_fantasy_art_8k_a6265a5c-5e6c-4c58-8e68-47e89f93ab13.png',
  imageTitle: 'Hethven (Mountain Dwarf)',
  content: MainComponent,
  sidebar: SidebarComponent,
};

export default Dwarf;
