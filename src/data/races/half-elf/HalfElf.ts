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
  image:
    'https://cdn.discordapp.com/attachments/1008048169621393458/1054408791606689893/sam.dub_beautiful_redhead_female_ranger_portrait_fantasy_art_as_94a1a47e-6e54-499e-ad57-402fd0f92ef1.png',
  imageTitle: 'Half-elf of Wydmyn',
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default HalfElf;
