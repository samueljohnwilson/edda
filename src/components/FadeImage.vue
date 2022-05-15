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
        :class="className"
        :src="image"
        :key="image"
        :title="title"
        :lazy-src="require('@/assets/black-background.jpg')"
        :width="width"
        :height="height"
        @click="showLightbox"
      />
    </transition>
    <p class="img-source" style="color: grey">
      {{ title }}
    </p>
    <VueEasyLightbox
      teleport="className"
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

  /**
   * Should the lightbox be displayed?
   */
  private isLightboxVisible = false;

  // Props.

  /**
   * The image.
   */
  @Prop()
  private readonly image!: string;

  /**
   * A class to apply to the image.
   */
  @Prop()
  private readonly className!: string;

  /**
   * The image height.
   */
  @Prop()
  private readonly height!: number;

  /**
   * The image width.
   */
  @Prop()
  private readonly width!: number;

  /**
   * The image title.
   */
  @Prop()
  private readonly title!: string;

  // Methods.

  private hideLightbox() {
    this.isLightboxVisible = false;
  }

  private showLightbox() {
    this.isLightboxVisible = true;
  }

  private mounted(): void {
    // @ts-expect-error
    document
      .querySelector('body')
      .addEventListener('wheel', this.preventScroll, { passive: false });
    // @ts-expect-error
    document
      .querySelector('body')
      .addEventListener('keydown', this.preventKeydown, { passive: false });
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
