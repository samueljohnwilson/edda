<template>
  <div>
    <FadeImage
      image="https://cdna.artstation.com/p/assets/images/images/005/144/186/large/lukasz-jaskolski-gnome-gemseeker-kopia.jpg"
      imageSource="https://www.artstation.com/artwork/KdemW"
      title="Cityfolk"
      width="200"
      height="300"
      :lazy-src="require('@/assets/black-background.jpg')"
    />
    <v-card-text>
      The cityfolk have lived in human cities for millennia. They have come to
      embrace human qualities, for better or for worse. Living in an oversized
      world, they have also learned to value education over strength, and are
      often found in educated roles, such as librarians, moneylenders, or
      scholars.
    </v-card-text>
    <v-card-text>
      Theis emphasis on education, and their resulting financial success, can
      sometimes lead to resentment among the human population. As such,
      halflings are generally careful not to display wealth in an ostentatious
      manner.
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
