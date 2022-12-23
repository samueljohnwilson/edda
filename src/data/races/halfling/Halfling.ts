import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Halfling: BaseArticleDataInterface = {
  title: 'HALFLING',
  quote:
    "In the countryside, there are few as trustworthy as the halflings; in the cities, you can trust them too—so long as you've got coins to offer.",
  quoteAttribution: 'Haven Thorne, trader',
  image:
    'https://cdn.discordapp.com/attachments/1008048169621393458/1054221976635449364/sam.dub_smiling_hobbit_farmer_portrait_as_drawn_by_Greg_Rutkows_77519bb2-2799-40aa-bd97-389b76a92aa3.webp',
  imageTitle: 'Fieldfolk',
  content: MainComponent,
  sidebar: SidebarComponent,
};

export default Halfling;
