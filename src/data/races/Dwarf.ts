import { BaseArticleDataInterface } from '@/Types';

const Dwarf: BaseArticleDataInterface = {
  title: 'DWARF',
  quote:
    'The dwarfs are a tough lot. They live among rocks and ice, where no men make their homes. Yet, it is the rocks that yield, not the dwarfs.',
  attribution: 'Orym Rithgut, Jut trapper',
  image:
    'https://cdna.artstation.com/p/assets/images/images/003/661/790/large/liu-pengcheng-8.jpg',
  imageSource: 'https://www.artstation.com/artwork/Zxo8Z',
  imageTitle: 'Hethven (Mountain Dwarf)',
  isImageHorizontal: false,
  sidebar: [
    {
      image:
        'https://cdna.artstation.com/p/assets/images/images/035/233/260/large/alex-pointer-dwarf-comp-color.jpg',
      imageSource: 'https://www.artstation.com/artwork/3dZQEY',
      description: 'Ingarven (Tundra Dwarf)',
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
          The dwarves inhabit Hethskein, the northernmost reach of Edda. There are
          two groups of dwarves: those of the <strong>mountain</strong> and those
          of the <strong>tundra</strong>.
        `,
        `
          The <strong>mountain dwarves</strong> live within Hethe, the great
          volcano that towers above all other peaks in Edda. The dwarves have
          tunnelled deep into its depths and the winding, labyrinthine shafts are
          home to many dwarven communities. Near the mountain's top stands the
          fortress, Hethedun, which is the seat of the dwarfish king and the site
          of a great forge, powered by the very magma that flows from the earth
          below.
        `,
        `
          The <strong>tundra dwarves</strong> live scattered across Hetheskein.
          Their ancestors left the mountain long ago, following a religious schism
          that divided the dwarves of Hethe. They believe that the teachings of
          Othar entreat his followers to choose freedom above all else, so they
          live in loose-knit tribes with little distinct hierarchy. Though they do
          roam the tundra, hunting and foraging, they have not forsaken the
          underground entirely: they often use glacial caverns as their residence,
          sometimes occupying the same site for months or years before moving on.
          Though the dwarves maintain respectful relations, the mountain dwarves
          tend to look upon the tundra dwarves as coarse and barbaric, and the
          tundra dwarves see their mountain-dwelling kin as rigid and prudish.
        `,
      ],
    },
    {
      title: 'Culture',
      paragraphs: [
        `
          The <strong>mountain dwarves</strong> prize education, the development
          of practical skills, and the dignity of physical labour. Their studious
          and hard-working culture tends to produce knowledgable and skilled
          citizens.
        `,
        `
          The <strong>tundra dwarves</strong> value experiences above possessions,
          revelling in the dramatic northern sunsets or in watching the caribou
          herds stampede across the landscape. They are attuned to the pulse of
          their land and to the natural world at large.
        `,
      ],
    },
    {
      title: 'Religion',
      paragraphs: [
        'All dwarves worship Othar, though in their own ways.',
        `
          The <strong>mountain dwarves</strong> consider productivity, diligence,
          and patience to be the core values of a good life. Their church is known
          as the House of Othar, but in conversations among dwarves, they simply
          refer to it as the House. The head of the order is known as the Raester
          <span class="translate">(Dwarvish: Forgemaster)</span>. Traditionally a
          male, he is chosen for the role based on his adherence to the religion's
          values, his standing in the community, and his skill as a smith. Though
          any dwarf can become the Raester, it has long been common for high
          families to enroll their second-born sons in the priesthood to become
          candidates; the Raester takes no wife, but the the position is second
          only to the king in its political power. Worship is centred around the
          Great Forge of Hethedun, which is powered by the magma that flows out
          from the volcano below. When not studying scripture, the priests of the
          order spend much of their time working at the forge.
        `,
        `
          In the middle of the Second Age, a dwarf named Inga Ethwred ascended to
          the role of Raester and upended the religious establishment with his
          proclamations regarding the will of Othar; this eventually lead to a
          religious schism known as the Sunder. Following the split, Ethwred led
          his followers into the tundra, where they established a less-restrictive
          way of worshipping Othar. The <strong>tundra dwarves</strong> call
          themselves the Wethwen
          <span class="translate">(Dwarvish: True Sons)</span> and their worship
          centres on the freedom that Othar gave his creations. They believe that
          they honour him by casting aside comfort and living a life without
          restraint. As a result of the Sunder, a common curse among the mountain
          dwarves is 'wen wey Inga'
          <span class="translate">(Dwarvish: son of Inga)</span>, which is roughly
          equivalent to 'son of a bitch' or 'bastard'.
        `,
      ],
    },
  ],
};

export default Dwarf;
