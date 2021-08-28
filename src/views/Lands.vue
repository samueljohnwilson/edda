<template>
  <v-container class="main">
    <NavButton :data="lands" :active="activeLand" :setActive="setActiveLand" />
    <BaseArticle :data="activeLand.data" />
  </v-container>
</template>

<script lang="ts">
import BaseArticle from '@/components/BaseArticle.vue';
import NavButton from '@/components/NavButton.vue';
import { BaseArticleInterface, ArticleList } from '@/Types';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component({
  components: {
    BaseArticle,
    NavButton,
  },
})
export default class Lands extends Vue {
  // Getters.

  /**
   * The land currently being displayed.
   */
  @Getter('activeLand', { namespace: 'lands' })
  private activeLand!: BaseArticleInterface;

  /**
   * The list of all the lands of Edda.
   */
  @Getter('lands', { namespace: 'lands' })
  private lands!: ArticleList;

  // Actions.

  /**
   * Sets the active land in the store, causing
   * it to be displayed.
   */
  @Action('setActiveLand', { namespace: 'lands' })
  private setActiveLand!: (land: BaseArticleInterface) => void;
}
</script>
