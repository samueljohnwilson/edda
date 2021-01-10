<template>
  <div class="main">
    Gods
  </div>
</template>

<script lang="ts">
import { ArticleData } from '@/Types.ts';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Gods extends Vue {
  private articles!: ArticleData[];
}
</script>
