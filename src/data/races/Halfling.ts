import { BaseArticleDataInterface } from '@/Types';

const Halfling: BaseArticleDataInterface = {
  title: 'HALFLING',
  quote: `
      In the countryside, there are few as trustworthy as the halflings; in the cities, you can trust
      them too—so long as you've got coins to offer.
    `,
  attribution: 'Haven Thorne, trader',
  image:
    'https://cdna.artstation.com/p/assets/images/images/007/228/612/large/tomas-duchek-lastadventuref02.jpg',
  isImageHorizontal: false,
  imageTitle: 'Fieldfolk',
  imageSource: 'https://www.artstation.com/artwork/ELZ4bK',
  sidebar: [
    {
      image:
        'https://cdna.artstation.com/p/assets/images/images/005/144/186/large/lukasz-jaskolski-gnome-gemseeker-kopia.jpg',
      imageSource: 'https://www.artstation.com/artwork/KdemW',
      description: 'Cityfolk',
    },
    {
      paragraph: `Few in number, and even more elusive than those numbers would suggest, the Vaedan are the
        last of an ancient lineage. While the elves of Neywyll chose to make their home as far from Ulwyll
        as they could travel, the elves of Ithra chose to look out upon the Sea of Tears, to remember their
        ancient homeland and seek their return.`,
    },
  ],
  content: [
    {
      title: 'Overview',
      paragraphs: [
        `
          The halflings have lived in the midst of the kingdoms of men throughout recorded history.
          In the country, the <strong>fieldfolk</strong> tend to live in separate communities, though
          often directly neighbouring human settlements. In the city, the <strong>cityfolk</strong>
          either manage in an oversized world or carve out their own small neighbourhoods, which are
          better equipped to accommodate their diminutive size.
        `,
        `
          Unterlund is home to the vast majority of the halfling population, though they do live in
          the other nations of Balamyn; a few have even ventured so far as southern Ostramyn, but the
          cold does not suit their tastes, nor their proclivity for going about without shoes.
        `,
      ],
    },
    {
      title: 'Culture',
      paragraphs: [
        `
          The <strong>fieldfolk</strong> are known as simple and good-hearted
          people, if a little naive. Most of them are content to tend their
          gardens, smoke their pipe-weed, and while away their days in peace and
          quiet. However, in times of trouble, they have proven themselves to be
          brave and loyal citizens of the kingdoms in which they dwell. There are
          few men that have spent time among the fieldfolk and come away with a
          harsh word on their lips.
        `,
        `
          In many cases, the <strong>cityfolk</strong> have inhabited the cities
          they call home for many generations. They have cultures that reflect the
          human society around them, while still retaining some of the
          characteristics and heritage of their halfling roots. In order to
          provide value to the human societies they inhabit, they have learned to
          embrace certain roles, including merchants, moneylenders, librarians,
          scholars, and jurists. Through their long lives and strong familial
          connections, they have a tendency to possess greater education and
          material wealth than many of the humans the live alongside. This can
          occasionally lead to unfortunate resentments or stereotypes being
          attributed to cityfolk, but overall, they are well-regarded and accepted
          members of society.
        `,
      ],
    },
    {
      title: 'Religion',
      paragraphs: [
        `
          Most halflings worship Cerrunos, though they worship Eos in Amin. They
          tend not to be overtly religious and there are no prominent halfling
          religious orders, though particularly pious individuals have been known
          to join human orders.
        `,
      ],
    },
  ],
};

export default Halfling;
