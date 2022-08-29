<template>
  <v-container>
    <h1>{{ data.title }}</h1>
    <v-card class="base rounded-xl">
      <v-row align="center" justify="center">
        <v-col>
          <FadeImage
            :image="data.image"
            :title="data.imageTitle"
            :lazy-src="require('@/assets/black-background.jpg')"
            :width="data.isImageHorizontal ? 600 : 400"
            :height="data.isImageHorizontal ? 400 : 600"
          />
        </v-col>
        <v-col>
          <v-card-text class="quote rounded-xl">
            <blockquote v-html="data.quote" />
          </v-card-text>
          <p class="img-source" style="color: grey">{{ data.attribution }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="!data.sidebar || $vuetify.breakpoint.smAndDown ? 12 : 8">
          <component v-bind:is="data.content" />
        </v-col>
        <v-col
          v-if="data.sidebar"
          :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
        >
          <v-card
            class="sidebar rounded-xl"
            style="padding: 10px"
            elevation="0"
          >
            <component v-bind:is="data.sidebar" />
          </v-card>
        </v-col>
      </v-row>
      <Footer />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import FadeImage from '@/components/FadeImage.vue';
import Footer from '@/components/Footer.vue';
import { BaseArticleDataInterface } from '@/Types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    FadeImage,
    Footer,
  },
})
export default class BaseArticle extends Vue {
  // Props.

  /**
   * The data used to populate the page.
   */
  @Prop()
  private readonly data!: BaseArticleDataInterface;
}
</script>

<style lang="less">
.img-source {
  padding-top: 2px;

  &,
  a {
    font-size: 0.8rem;
  }
}
</style>
