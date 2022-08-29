<template>
  <div>
    <FadeImage
      image="https://cdnb.artstation.com/p/assets/images/images/015/739/663/4k/omar-samy-144.jpg"
      title="Ithran mercenary"
      width="200"
      height="300"
      :lazy-src="require('@/assets/black-background.jpg')"
    />
    <v-card-text>
      Few in number, and even more elusive than those numbers would suggest, the
      Vaedan are the last of an ancient lineage. While the elves of Neywyll
      chose to make their home as far from Ulwyll as they could travel, the
      elves of Ithra chose to look out upon the Sea of Tears, to remember their
      ancient homeland and seek their return.
    </v-card-text>
    <FadeImage
      image="https://cdna.artstation.com/p/assets/images/images/003/183/028/large/kseniia-tselousova-595-mongol-s.jpg"
      title="Garradi war queen"
      width="200"
      height="300"
      :lazy-src="require('@/assets/black-background.jpg')"
    />
    <v-card-text>
      Their kingdom, Validein, was greatest in the early days of the Second Age.
      They were then considered first among the elves in wisdom and wealth. But
      their wealth and power bred greed and lust among the people, and the
      kingdom began to crumble from within. But even as their power waned, they
      continued upon their path for centuries, until the blight of the Long Dusk
      claimed the last of their worldly wealth.
    </v-card-text>
  </div>
</template>

<script lang="ts">
import FadeImage from '@/components/FadeImage.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    FadeImage,
  },
})
export default class SidebarComponent extends Vue {}
</script>
