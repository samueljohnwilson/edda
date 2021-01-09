<template>
  <div class="main">
    Gods
  </div>
</template>

<script lang="ts">
import { ArticleData } from '@/types.ts';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Gods extends Vue {
  private articles!: ArticleData[];
}
</script>
