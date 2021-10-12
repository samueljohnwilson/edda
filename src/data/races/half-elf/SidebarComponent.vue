<template>
  <div>
    <FadeImage
      image="https://cdna.artstation.com/p/assets/images/images/025/020/872/large/henrique-dld-bardo-2final.jpg"
      imageSource="https://www.artstation.com/artwork/qAD46y"
      title="Half-elf bard in Hydroth"
      width="200"
      height="300"
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
