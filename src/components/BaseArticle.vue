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
      <p class="img-source" style="color: grey">
        {{ data.imageTitle }} —
        <a style="color: grey" :href="data.imageSource" target="_blank">
          Image Source
        </a>
      </p>
      <v-card-text>
        <blockquote v-html="data.quote" />
        <v-card-text class="attribution">{{ data.attribution }}</v-card-text>
      </v-card-text>
      <v-row>
        <v-col :cols="!data.sidebar || $vuetify.breakpoint.smAndDown ? 12 : 8">
          <div v-for="entry in data.entries" :key="entry.title">
            <v-card-title>{{ entry.title }}</v-card-title>
            <v-card-text
              v-for="(paragraph, index) in entry.paragraphs"
              v-html="paragraph"
              :key="`${entry.title}-${index}`"
            >
            </v-card-text>
          </div>
        </v-col>
        <v-col
          v-if="data.sidebar"
          :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
        >
          <v-card class="sidebar" style="padding: 10px">
            <div
              v-for="(el, sidebarIndex) in data.sidebar"
              :key="`sidebar-${sidebarIndex}`"
            >
              <div v-if="el.image">
                <v-img :src="el.image" height="400" />
                <p class="img-source">
                  {{ el.description }} —
                  <a
                    style="color: black"
                    :href="data.imageSource"
                    target="_blank"
                  >
                    Image Source
                  </a>
                </p>
              </div>
              <div v-else>
                <v-card-text>
                  {{ el.paragraph }}
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
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

<style lang="less" scoped>
.img-source {
  padding-top: 2px;

  &,
  a {
    font-size: 0.8rem;
  }
}
</style>
