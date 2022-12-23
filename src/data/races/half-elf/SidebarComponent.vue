<template>
  <div>
    <FadeImage
      image="https://cdn.discordapp.com/attachments/1008048169621393458/1054406990333497375/sam.dub_handsome_bard_fantasy_art_portrait_8k_479f63d3-9ece-4566-90cc-7313069dd512.png"
      className="half-elf"
      imageTitle="Half-elf bard in Hydroth"
      imageWidth="18rem"
      imageHeight="18rem"
      :lazy-src="require('@/assets/black-background.jpg')"
    />
    <v-card-text>
      Those half-elves that chose to leave Wydmyn have a varied existence. Many
      are completely integrated into human society and some are not even aware
      of their own ancient lineage, their elvish traits having receded over
      generations. Others maintain some distance from human society, living on
      the fringes as traveling entertainers, rogues, or mercenaries. These
      half-elven maintain a parallel culture among their human kin.
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
