import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const Neywyll: BaseArticleDataInterface = {
  title: 'NEYWYLL',
  quote: `They say Hydroth was the first city of men. Whether that's true or
    not, I can't say, but there's no question it is ancient beyond
    reckoning. The city you see today stands on the bones of long-dead
    men. It is safe to say, new stones will be laid on our bones someday
    too.`,
  attribution: 'Argyle Bild, acolyte of the Middle Path',
  image:
    'https://cdn.discordapp.com/attachments/1008048169621393458/1015104947089588294/sam.dub_forest_covered_mountains_decfcb68-40ac-499c-beca-5034f85a23d8.png',
  imageTitle: 'An ancient vale',
  isImageHorizontal: true,
  content: MainComponent,
};

export default Neywyll;
