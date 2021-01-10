<template>
  <div class="main">
    Beasts
  </div>
</template>

<script lang="ts">
import { ArticleData } from '@/Types.ts';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Bestiary extends Vue {
  private articles!: ArticleData[];
}
</script>
