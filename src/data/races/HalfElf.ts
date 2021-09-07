import { BaseArticleDataInterface } from '@/Types';

const HalfElf: BaseArticleDataInterface = {
  title: 'HALF-ELF',
  quote: `
    There was a time when noble men dwelled alongside elves. They were brothers to us then,
    but they failed us when our need was greatest. Those men that carry our blood today know
    it as a burden; it is one they will bear until our people look upon the First Tree once again.`,
  attribution: 'Ewenyl, 3rd Praetor of the Council',
  image:
    'https://cdnb.artstation.com/p/assets/images/images/005/303/387/large/matt-duckett-duckettmatt-03-woodlandranger.jpg',
  imageSource: 'https://www.artstation.com/artwork/d6DzA',
  imageTitle: 'Wydmyn',
  isImageHorizontal: false,
  sidebar: [
    {
      image:
        'https://cdna.artstation.com/p/assets/images/images/025/020/872/large/henrique-dld-bardo-2final.jpg',
      imageSource: 'https://www.artstation.com/artwork/qAD46y',
      description: 'Deserter',
    },
    {
      paragraph: `Few in number, and even more elusive than those numbers would suggest, the Vaedan are the
        last of an ancient lineage. While the elves of Neywyll chose to make their home as far from Ulwyll
        as they could travel, the elves of Ithra chose to look out upon the Sea of Tears, to remember their
        ancient homeland and seek their return.`,
    },
    {
      paragraph: `Their kingdom, Validein, was greatest in the early days of the Second Age. They were then
      considered first among the elves in wisdom and wealth. But their wealth and power bred greed
      and lust among the people, and the kingdom began to crumble from within. But even as their power waned,
      they continued upon their path for centuries, until the blight of the Long Dusk claimed the last of
      their worldly wealth.`,
    },
  ],
  entries: [
    {
      title: 'Overview',
      paragraphs: [
        `
          During the latter part of the Second Age, the men of Wydmyn formed close ties to the elves of
          Neywyll. The human race was still new to the world then and the elves took great
          pleasure in their companionship. Through their close relations with the elves,
          the men of Wydmyn gained knowledge and wealth far greater than other men could imagine.
          Eventually, some were even welcomed into the ancient elven houses. When the Great War
          descended upon Edda, the men of Wydmyn fought valiantly alongside their elven brethren;
          however, some among their ranks would be corrupted by the darkness.
        `,
        `
          It was at the Battle of Twelve Kings that the elves were betrayed by some men of Wydmyn;
          they suffered greater losses there than in all of the war's other battles combined.
          At the war's end, the elves made the choice to retire from the world. The Council ruled
          that no men could reside in Neywyll any longer, and all those of mixed blood were expelled,
          tearing apart families.
        `,
        `
          Among the half-elven, there were some who resented the elves for their expulsion.
          They would return to live among humanity, and their elvish lineage faded with each
          passing generation. However, most chose to remain among the mountains of Wydmyn just beyond
          the border of Neywyll. To atone for the failings of their forefathers, they serve as the
          guardians of the passage to Neywyll, ensuring the elves are not troubled by the
          encroachment of human civilization.
        `,
      ],
    },
    {
      title: 'Culture',
      paragraphs: [
        `
          The half-elves are few in number and there are even fewer permanent towns in Wydmyn. Most
          are nomads and they strive to maintain a connection to the land, living off the land and
          patrolling their lands to keep outsiders from reaching the lands of Neywyll beyond.
        `,
      ],
    },
    {
      title: 'Religion',
      paragraphs: [
        `
          The half-elves are not particularly religious, though their are some among them who are
          blessed with the elvish insight into the nature of Enoreth. Others have come to worship
          the Ishtar as humans do, though few half-elves worship Cerunnos.
        `,
      ],
    },
  ],
};

export default HalfElf;
