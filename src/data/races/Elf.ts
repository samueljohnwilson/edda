import { BaseArticleDataInterface } from '@/Types';

const Elf: BaseArticleDataInterface = {
  title: 'ELF',
  quote: `
    Upon the dying of the Sun and Moon,<br />
    Those flowers which have yet to bloom,<br />
    Shall be the first to know the pain,<br />
    Of the folk that crossed from whence we came.`,
  attribution: 'Elvish proverb',
  image:
    'https://cdna.artstation.com/p/assets/images/images/008/961/682/large/carlos-amaral-elf-archer.jpg',
  imageSource: 'https://www.artstation.com/artwork/E5wVn',
  isImageHorizontal: false,
  entries: [
    {
      title: 'Overview',
      paragraphs: [
        `
          The elves retired from the world following the Great War. Today, they
          remain secluded in Neywyll, awaiting a day when they might return to
          their ancient home in Ulwyll. The elves no longer maintain relationships
          with the kingdoms of men and few men have ventured into Neywyll in the
          centuries that have passed since the war; it is unclear as to whether
          those few were welcomed.
        `,
      ],
    },
    {
      title: 'Culture',
      paragraphs: [
        `
          The elves are a noble and thoughtful race, valuing wisdom above all
          other traits. They live in balance with nature and are deeply attuned to
          its cycles. They reside among the trees of Neywyll, rather than clearing
          them to make cities. Their society is relatively egalitarian, but major
          matters are decided by a council of elders. Magic is more common among
          the elves than the other races of Edda, though mostly in the form of
          cantrips, as powerful users remain few and far between.
        `,
      ],
    },
    {
      title: 'Religion',
      paragraphs: [
        `
          Unlike the other races, the elves have full knowledge of the role of
          Enoreth and since arriving in Edda they have remember it in their
          prayers, asking forgiveness for the sins that cast them out from Ulwyll.
        `,
      ],
    },
  ],
};

export default Elf;
