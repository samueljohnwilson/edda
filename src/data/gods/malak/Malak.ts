import { Gods } from '@/Enums';
import { BaseArticleInterface } from '@/Types';
import MainComponent from './MainComponent.vue';

const malak: BaseArticleInterface = {
  name: 'Malak',
  value: Gods.MALAK,
  data: {
    title: 'MALAK',
    quote: `It is said the first soul consumed by the Devourer was that of Oleid, Lord Praetor of the Illyum. If this is so,
      his soul has writhed in suffering for nearly fourteen-thousand years. Fall upon your sword, if ever Malak returns.`,
    quoteAttribution: 'Calaith Aowen, elven sage',
    image: require('@/assets/gods/malak-main.png'),
    imageTitle: 'An avatar of Malak',
    content: MainComponent,
  },
};

export default malak;
