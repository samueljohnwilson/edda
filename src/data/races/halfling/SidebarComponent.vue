<template>
  <div>
    <FadeImage
      image="https://cdn.discordapp.com/attachments/1008048169621393458/1054219606677536828/sam.dub_hobbit_merchant_portrait_as_drawn_by_Greg_Rutkowski_8k_836350a8-6693-4858-ad64-e41dabdbee6c.png"
      imageTitle="Cityfolk"
      imageWidth="18rem"
      imageHeight="18rem"
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
