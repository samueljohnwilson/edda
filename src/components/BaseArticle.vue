<template>
  <v-container>
    <h1>{{ data.title }}</h1>
    <v-card class="base">
      <!-- Adds transitions to images -->
      <!-- See https://animate.style/ -->
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn img"
        leave-active-class="animate__animated animate__fadeOut img"
      >
        <v-img
          :src="data.image"
          :key="data.image"
          :lazy-src="require('@/assets/black-background.jpg')"
          :width="data.isImageHorizontal ? 800 : 400"
          :height="data.isImageHorizontal ? 400 : 600"
        />
      </transition>
      <a
        style="color: grey; font-size: 0.8rem"
        class="img-source"
        :href="data.imageSource"
        >Image Source</a
      >
      <v-card-text>
        <blockquote v-html="data.quote" />
        <v-card-text class="attribution">- {{ data.attribution }}</v-card-text>
      </v-card-text>
      <div v-for="entry in data.entries" :key="`${entry.title}`">
        <v-card-title>{{ entry.title }}</v-card-title>
        <v-card-text
          v-for="(paragraph, index) in entry.paragraphs"
          v-html="paragraph"
          :key="`${entry.title}-${index}`"
        >
        </v-card-text>
      </div>
      <Footer />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import 'animate.css';
import Footer from '@/components/Footer.vue';
import { BaseArticleDataInterface } from '@/Types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
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
