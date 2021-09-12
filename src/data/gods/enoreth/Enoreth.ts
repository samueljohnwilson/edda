import { BaseArticleDataInterface } from '@/Types';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const Enoreth: BaseArticleDataInterface = {
  title: 'ENORETH',
  quote: `All that we can imagine exists within The Sum of All Things, whether
    fair or foul. It is eternal, unbounded, limitless.`,
  attribution: 'Calaith Aowen, elven sage',
  image:
    'https://cdna.artstation.com/p/assets/images/images/027/695/358/4k/john-edwards-fractal-web-01-a.jpg',
  imageSource: 'https://www.artstation.com/artwork/xJAg52',
  imageTitle: 'The Astral Plane',
  isImageHorizontal: false,
  sidebar: SidebarComponent,
  content: MainComponent,
};

export default Enoreth;
