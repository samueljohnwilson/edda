<template>
  <v-container>
    <h1>{{ data.title }}</h1>
    <v-card class="timeline-wrapper rounded-xl">
      <timeline>
        <timeline-item
          v-for="(event, index) in data.events"
          :key="`${event.title}-${index}`"
        >
          <img :src="require('@/assets/icons/' + event.icon)" slot="others" />
          <v-card-title>{{ event.title }}</v-card-title>
          <v-card-subtitle v-if="event.date">
            {{ event.date }}
          </v-card-subtitle>
          <v-card-text
            v-for="(paragraph, pIndex) in event.paragraphs"
            :key="`${event.title}-${index}-p${pIndex}`"
            v-html="paragraph"
          />
        </timeline-item>
      </timeline>
    </v-card>
    <Footer />
  </v-container>
</template>

<script lang="ts">
import 'animate.css';
import Footer from '@/components/Footer.vue';
import { TimelineArticleDataInterface } from '@/Types';
import { Timeline, TimelineItem } from 'vue-cute-timeline';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Footer,
    Timeline,
    TimelineItem,
  },
})
export default class TimelineArticle extends Vue {
  // Props.

  /**
   * The data used to populate the page.
   */
  @Prop()
  private readonly data!: TimelineArticleDataInterface;
}
</script>

<style lang="less" scoped>
.timeline-wrapper {
  padding: 2rem;

  .timeline {
    text-align: left;

    .timeline-item img {
      width: 2.5rem;
      height: 2.5rem;
    }

    .v-card__text,
    .v-card__title,
    .v-card__subtitle {
      padding: 0.25rem;
    }

    .v-card__subtitle {
      margin-top: -0.5rem;
    }

    .heading {
      font-weight: bold;
    }

    .timeline-circle {
      border: unset;
      background-color: unset;
    }
  }
}
</style>
