<template>
  <div>
    <!-- Adds transitions to images -->
    <!-- See https://animate.style/ -->
    <transition
      appear
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn img"
      leave-active-class="animate__animated animate__fadeOut img"
    >
      <v-img
        class="rounded-xl"
        style="cursor: pointer"
        :class="imageClassName"
        :src="image"
        :key="image"
        :lazy-src="require('@/assets/black-background.jpg')"
        :width="imageWidth"
        :height="imageHeight"
        @click="showLightbox"
      />
    </transition>
    <p
      class="img-title"
      v-if="imageTitle"
      style="color: grey"
      v-html="imageTitle"
    ></p>
    <VueEasyLightbox
      teleport="imageClassName"
      zoomDisabled
      moveDisabled
      :scrollDisabled="false"
      :imgs="image"
      :visible="isLightboxVisible"
      @hide="hideLightbox"
    />
  </div>
</template>

<script lang="ts">
import 'animate.css';
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueEasyLightbox from 'vue-easy-lightbox';

@Component({
  components: {
    VueEasyLightbox,
  },
})
export default class FadeImage extends Vue {
  // Data.

  private isLightboxVisible = false;

  // Props.

  @Prop()
  private readonly image!: string;

  @Prop()
  private readonly imageClassName!: string;

  @Prop()
  private readonly imageHeight!: number;

  @Prop()
  private readonly imageWidth!: number;

  @Prop()
  private readonly imageTitle!: string;

  // Methods.

  private hideLightbox() {
    this.isLightboxVisible = false;
  }

  private showLightbox() {
    this.isLightboxVisible = true;
  }

  private preventKeydown(e: KeyboardEvent) {
    if (this.isLightboxVisible) {
      if (e.code && (e.code == 'ArrowUp' || e.code == 'ArrowDown')) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }

  private preventScroll(e: Event): void {
    if (this.isLightboxVisible) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  // Lifecycle methods

  /**
   * Add listeners for scroll and keydown events to prevent the user from
   * scrolling when the lightbox is open.
   */
  private mounted(): void {
    document
      .querySelector('body')
      ?.addEventListener('wheel', this.preventScroll, { passive: false });
    document
      .querySelector('body')
      ?.addEventListener('keydown', this.preventKeydown, { passive: false });
  }
}
</script>

<style lang="less">
.animate__animated.img {
  --animate-duration: 2s;
}

.vel-toolbar {
  display: none !important;
}
</style>
