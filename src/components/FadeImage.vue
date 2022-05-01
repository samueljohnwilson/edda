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
      moveDisabled
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

  /**
   * The image.
   */
  @Prop()
  private readonly image!: string;

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
}
</script>

<style lang="less" scoped>
.animate__animated.img {
  --animate-duration: 2s;
}
</style>
