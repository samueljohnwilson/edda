<template>
  <div class="main">
    Races
  </div>
</template>

<script lang="ts">
import { ArticleData } from '@/types.ts';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Races extends Vue {
  private articles!: ArticleData[];
}
</script>
