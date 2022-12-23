<template>
  <v-container class="main">
    <NavButton :data="races" :active="activeRace" :setActive="setActiveRace" />
    <BaseArticle :data="activeRace.data" />
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
export default class RacesPage extends Vue {
  // Getters

  /**
   * The race currently being displayed.
   */
  @Getter('activeRace', { namespace: 'races' })
  private activeRace!: BaseArticleInterface;

  /**
   * The list of all playable races in Edda.
   */
  @Getter('races', { namespace: 'races' })
  private races!: ArticleList;

  // Actions

  @Action('setActiveRace', { namespace: 'races' })
  private setActiveRace!: (race: BaseArticleInterface) => void;
}
</script>
