<template>
  <v-container class="main">
    <BaseArticle :data="data" />
  </v-container>
</template>

<script lang="ts">
import BaseArticle from '@/components/BaseArticle.vue';
import Home from '@/data/home/Home';
import { HomeArticleDataInterface } from '@/Types';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    BaseArticle,
  },
})
export default class HomePage extends Vue {
  // Data.

  private readonly data: HomeArticleDataInterface = Home;
}
</script>
