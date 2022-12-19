<template>
  <div>
    <FadeImage
      image="https://cdn.discordapp.com/attachments/1008048169621393458/1054204811404394549/sam.dub_african_elf_warrior_portrait_as_drawn_by_Greg_Rutkowski_67a0f00f-4548-4769-b7b7-4adaf3b9bcda.webp"
      imageTitle="Vaedan (Elf of Ithra)"
      imageWidth="18rem"
      imageHeight="18rem"
      :lazy-src="require('@/assets/black-background.jpg')"
    />
    <v-card-text>
      Few in number, and even more elusive than those numbers would suggest, the
      Vaedan are the last of an ancient lineage. While the elves of Neywyll
      chose to make their home as far from Ulwyll as they could travel, the
      elves of Ithra chose to look out upon the Sea of Tears, to remember their
      ancient homeland and seek their return.
    </v-card-text>
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
