<template>
  <v-container>
    <h1>{{ data.title }}</h1>
    <v-card>
      <v-card-text>
        <blockquote v-html="data.quote" />
        <v-card-text>- {{ data.attribution }}</v-card-text>
      </v-card-text>
      <v-img :src="require('@/assets/' + data.image)" max-width="400" />
      <div v-for="(card, index) in data.cards" :key="`${card.title}-${index}`">
        <v-card-title>{{ card.title }}</v-card-title>
        <v-card-text
          v-for="(paragraph, pIndex) in card.paragraphs"
          :key="`${card.tile}-${index}-p${pIndex}`"
          v-html="paragraph"
        >
        </v-card-text>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BaseArticleDataInterface } from '@/Types';

@Component
export default class BaseArticle extends Vue {
  @Prop()
  private readonly data!: BaseArticleDataInterface;
}
</script>
