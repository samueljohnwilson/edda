<template>
  <v-col class="footer">
    <v-row>
      <ReturnToTopButton />
    </v-row>
  </v-col>
</template>

<script lang="ts">
import ReturnToTopButton from '@/components/ReturnToTopButton.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ReturnToTopButton,
  },
})
export default class TimelineArticle extends Vue {}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
}
</style>
