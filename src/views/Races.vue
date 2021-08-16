<template>
  <v-container class="main">
    <NavButton
      :data="races"
      :page="page"
      :active="activeRace"
      :setActiveButton="setActiveRace"
    />
    <BaseArticle :data="activeRace.data" />
  </v-container>
</template>

<script lang="ts">
import BaseArticle from '@/components/BaseArticle.vue';
import NavButton from '@/components/NavButton.vue';
import { Pages } from '@/Enums';
import { ListItem, List } from '@/Types';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component({
  components: {
    BaseArticle,
    NavButton,
  },
})
export default class Races extends Vue {
  // Data.

  /**
   * The page name.
   */
  private page = Pages.RACES;

  // Getters.

  /**
   * The race currently being displayed.
   */
  @Getter('activeRace', { namespace: 'races' })
  private activeRace!: ListItem;

  /**
   * The list of all playable races in Edda.
   */
  @Getter('races', { namespace: 'races' })
  private races!: List;

  // Actions.

  /**
   * Sets the active race in the store, causing
   * it to be displayed.
   */
  @Action('setActiveRace', { namespace: 'races' })
  private setActiveRace!: (race: ListItem) => void;
}
</script>
