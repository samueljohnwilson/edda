import { BaseArticleDataInterface } from '@/Types';

const Human: BaseArticleDataInterface = {
  title: 'HUMAN',
  quote: `
    While the ambition of men is their strength, it is also their weakness.
    That which drives them to achieve is the same
    which compels them to corruption. Few things rival the great heights
    and foul depths of the human spirit.`,
  attribution: 'Calaith Aowen, elven sage',
  image:
    'https://cdna.artstation.com/p/assets/images/images/016/956/610/large/tomas-duchek-redbaron-m.jpg',
  imageSource: 'https://www.artstation.com/artwork/2xOlKa',
  isImageHorizontal: false,
  content: [
    {
      title: 'Overview',
      paragraphs: [
        `
        The men of Edda are a diverse race and they have come to inhabit much of
        the continent. There are four kingdoms of men: Bjordlund, Unterlund,
        Garrad, and Ithra. They are divided among two regions: Ostramyn and
        Balamyn. Their cultures, religious beliefs, and social structures vary
        enormously from place to place.
        `,
      ],
    },
    {
      title: 'Culture',
      paragraphs: [
        `        
          <strong>Ostramyn</strong> is an Elvish word that translates as 'the land
          of the northern men' in Common; the inhabitants of the region are known
          as the Ostrans <span class="translate">(Elvish: Northeners)</span>. It
          is composed of Bjordlund and northern Unterlund. A third nation,
          Jutlund, once existed between Bjordlund and Unterlund, but it was
          absorbed by the expansion of its neighbours; despite this, its culture
          is still distinct in many ways. Today, the Ostrans are divided into two
          national identities, the Bjords and the Juts. The tribes of the north
          commonly come into conflict with one another, but they have
          traditionally unified against external threats. A common saying among
          the Ostrans is "North, blood, honor", in reference to the values they
          hold.
        `,
        `
          <strong>Balamyn</strong> is Elvish for the 'land of the southern men'.
          It is composed of Garrad, Ithra, and southern Unterlund. The inhabitants
          of Balamyn are more diverse than the men of the north. Each have their
          own distinctive culture that distinguish them from their neighbours. As
          such, Balamyn is often used in describing geography, but rarely culture.
        `,
      ],
    },
    {
      title: 'Religion',
      paragraphs: [
        `
          Humans are more diverse in their religious beliefs than other races.
          While the kingdoms of men all currently worship the Eiar, there was a
          time when the hearts and minds of kings were corrupted by the Malor and
          men flew the banners of the dark lords.
        `,
      ],
    },
  ],
};

export default Human;
