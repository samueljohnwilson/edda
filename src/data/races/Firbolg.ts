import { BaseArticleDataInterface } from '@/Types';

const Firbolg: BaseArticleDataInterface = {
  title: 'FIRBOLG',
  quote: `
    When the elves first came to Edda, the races of men and dwarves had not yet awakened.
    We traveled west, meeting nothing but wild beasts. Yet, when we arrived in Neywyll,
    we came upon the firbolg. Their roots here were ancient even then. Though the centuries
    may pass, we will always be visitors in their land.`,
  attribution: 'Galen, Elder of House Llowynd',
  image:
    'https://cdna.artstation.com/p/assets/images/images/003/143/164/large/tomas-duchek-druid-m.jpg',
  imageSource: 'https://www.artstation.com/artwork/KynJr',
  isImageHorizontal: false,
  entries: [
    {
      title: 'Overview',
      paragraphs: [
        `
          To the men of Edda, the elves border on myth; the firbolg have a similar
          reputation among the elves. The mystery surrounding the firbolg is not
          undeserved: they are few in number and lead solitary lives, roaming the
          furthest depths of Neywyll alone, often passing months or years in
          silent contemplation. They live for many centuries and there are some
          alive today that still remember the Second Age. Whatever the firbolg may
          know of their ancient history is not shared with outsiders.
        `,
        `
          The firbolg resemble enormous humans with long pointed ears. They have
          grey hair and grey-blue skin. They typically do not cut their hair, nor
          trim their beards.
        `,
      ],
    },
    {
      title: 'Culture',
      paragraphs: [
        `        
          The firbolg reside in Neywyll and their presence there predates the
          arrival of the elves. They live lives of total solitude and little else
          is known about them.
        `,
      ],
    },
    {
      title: 'Religion',
      paragraphs: [
        "The firbolg worship the Old God, whom they call 'Laeth', which means 'That Which Is' in sylvan.",
      ],
    },
  ],
};

export default Firbolg;
