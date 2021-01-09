<template>
  <v-container>
    <Article :article="article" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ArticleData } from '@/types.ts';
import Article from './Article.vue';

@Component({
  components: {
    Article,
  },
})
export default class HelloWorld extends Vue {
  private article: ArticleData = {
    title: 'hello',
  };
}
</script>
