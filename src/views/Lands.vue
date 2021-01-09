<template>
  <div class="main">
    Lands
  </div>
</template>

<script lang="ts">
import { ArticleData } from '@/types.ts';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Lands extends Vue {
  private articles!: ArticleData[];
}
</script>
