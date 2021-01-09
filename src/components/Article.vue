<template>
  <v-title>
    {{ article.title }}
  </v-title>
</template>

<script lang="ts">
import { ArticleData } from '@/types.ts';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
  @Prop() private article!: ArticleData;
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
