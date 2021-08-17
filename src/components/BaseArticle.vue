<template>
  <v-container>
    <h1>{{ data.title }}</h1>
    <v-card class="base">
      <!-- Adds transitions to images -->
      <!-- See https://animate.style/ -->
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <v-img
          :src="require('@/assets/' + data.image)"
          :key="data.image"
          :style="{}"
          :width="[data.isImageHorizontal ? 800 : 400]"
          :height="[data.isImageHorizontal ? 400 : 600]"
        />
      </transition>
      <v-card-text>
        <blockquote v-html="data.quote" />
        <v-card-text class="attribution">- {{ data.attribution }}</v-card-text>
      </v-card-text>
      <div
        v-for="(entry, index) in data.entries"
        :key="`${entry.title}-${index}`"
      >
        <v-card-title>{{ entry.title }}</v-card-title>
        <v-card-text
          v-for="(paragraph, pIndex) in entry.paragraphs"
          v-html="paragraph"
          :key="`${entry.tile}-${index}-p${pIndex}`"
        >
        </v-card-text>
      </div>
      <ReturnToTopButton />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import 'animate.css';
import ReturnToTopButton from '@/components/ReturnToTopButton.vue';
import { BaseArticleDataInterface } from '@/Types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ReturnToTopButton,
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
