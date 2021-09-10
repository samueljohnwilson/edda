<template>
  <v-container class="main">
    <NavButton :data="gods" :active="activeGod" :setActive="setActiveGod" />
    <BaseArticle :data="activeGod.data" />
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
export default class Gods extends Vue {
  // Getters.

  /**
   * The god currently being displayed.
   */
  @Getter('activeGod', { namespace: 'gods' })
  private activeGod!: BaseArticleInterface;

  /**
   * The list of all the gods of Edda.
   */
  @Getter('gods', { namespace: 'gods' })
  private gods!: ArticleList;

  // Actions.

  /**
   * Sets the active god in the store, causing
   * it to be displayed.
   */
  @Action('setActiveGod', { namespace: 'gods' })
  private setActiveGod!: (god: BaseArticleInterface) => void;
}
</script>
