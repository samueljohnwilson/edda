<template>
  <v-container class="main">
    <TimelineArticle :data="data" />
  </v-container>
</template>

<script lang="ts">
import TimelineArticle from '@/components/TimelineArticle.vue';
import { TimelineArticleDataInterface } from '@/Types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueScrollTo from 'vue-scrollto';

@Component({
  components: {
    TimelineArticle,
  },
})
export default class History extends Vue {
  // Lifecycle hooks.

  /**
   * Mounted lifecycle hook.
   *
   * If an event is passed as a query parameter,
   * scroll to it.
   */
  private mounted() {
    if (this.$route.query.event) {
      VueScrollTo.scrollTo(`#${this.$route.query.event}`, 500);
    }
  }

  // Data.

  /**
   * The data used to populate the timeline.
   */
  @Prop()
  private data!: TimelineArticleDataInterface;
}
</script>
