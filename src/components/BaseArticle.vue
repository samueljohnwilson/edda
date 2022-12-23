<template>
  <v-container>
    <h1>{{ data.title }}</h1>
    <v-card class="base rounded-xl">
      <v-row align="center" justify="center">
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 8">
          <FadeImage
            :image="data.image"
            :imageTitle="data.imageTitle"
            :lazy-src="require('@/assets/black-background.jpg')"
            imageHeight="40rem"
            imageWidth="40rem"
          />
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="4">
          <QuoteBlock
            :quoteAttribution="data.quoteAttribution"
            :quote="data.quote"
          />
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.smAndDown">
        <v-col cols="12">
          <QuoteBlock
            :quoteAttribution="data.quoteAttribution"
            :quote="data.quote"
          />
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
            style="padding: 1rem"
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

  @Prop()
  private readonly data!: BaseArticleDataInterface;
}
</script>
