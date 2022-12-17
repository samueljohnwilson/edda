<template>
  <div>
    <v-card-text class="quote rounded-xl">
      <blockquote v-html="quote" />
    </v-card-text>
    <p class="img-source" style="color: grey">{{ attribution }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class QuoteBlock extends Vue {
  // Props

  @Prop()
  private readonly quote!: string;

  @Prop()
  private readonly attribution!: string;
}
</script>
