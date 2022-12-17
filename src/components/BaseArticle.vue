<template>
  <v-container>
    <h1>{{ data.title }}</h1>
    <v-card class="base rounded-xl">
      <v-row align="center" justify="center">
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 8">
          <FadeImage
            :image="data.image"
            :title="data.imageTitle"
            :lazy-src="require('@/assets/black-background.jpg')"
          />
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="4">
          <QuoteBlock :attribution="data.attribution" :quote="data.quote" />
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.smAndDown">
        <QuoteBlock :attribution="data.attribution" :quote="data.quote" />
      </v-row>
      <v-row>
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
        <v-col :cols="!data.sidebar || $vuetify.breakpoint.smAndDown ? 12 : 8">
          <component v-bind:is="data.content" />
        </v-col>
      </v-row>
      <Footer />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import FadeImage from '@/components/FadeImage.vue';
import Footer from '@/components/Footer.vue';
import QuoteBlock from '@/components/QuoteBlock.vue';
import { BaseArticleDataInterface } from '@/Types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    FadeImage,
    Footer,
    QuoteBlock,
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
