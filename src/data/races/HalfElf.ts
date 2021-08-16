import { BaseArticleDataInterface } from '@/Types';

const HalfElf: BaseArticleDataInterface = {
  title: 'HALF-ELF',
  quote: `
    There was a time when noble men dwelled alongside elves. They were brothers to us then,
    but they failed us when our need was greatest. Those men that carry our blood today know
    it as a burden; it is one they will bear until our people look upon the First Tree once again.`,
  attribution: 'Ewenyl, 3rd Praetor of the Council',
  image: 'half-elf.jpg',
  cards: [
    {
      title: 'Overview',
      paragraphs: [
        `
          During the latter part of the Second Age, the men of Wydmyn formed close ties to the elves of
          Neywyll.The human race was still new to the world then and the elves took great
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
