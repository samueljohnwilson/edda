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
      />
    </transition>
    <p class="img-source" style="color: grey">
      {{ title }} —
      <a style="color: grey" :href="imageSource" target="_blank">
        Image Source
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import 'animate.css';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FadeImage extends Vue {
  // Props.

  /**
   * The image.
   */
  @Prop()
  private readonly image!: string;

  /**
   * The image source.
   */
  @Prop()
  private readonly imageSource!: string;

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
}
</script>

<style lang="less" scoped>
.animate__animated.img {
  --animate-duration: 2s;
}
</style>
