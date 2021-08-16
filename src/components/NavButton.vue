<template>
  <div>
    <v-btn
      v-for="button in data"
      @click="handleNavigation(button)"
      :key="button.value"
      text
      dark
      :class="button.value === active.value ? 'active' : ''"
    >
      {{ button.name }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Pages } from '@/Enums';
import { List, ListItem } from '@/Types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseArticle extends Vue {
  // Lifecycle hooks.

  /**
   * Mounted lifecycle hook.
   *
   * On page load, check for a query parameter. If one exists,
   * use it to determine the data to display. Otherwise, display
   * whichever item is already active..
   */
  private mounted() {
    const listItem =
      this.$route.query.page &&
      this.data[this.$route.query.page as ListItem['name']]
        ? this.data[this.$route.query.page as ListItem['name']]
        : this.active;

    this.handleNavigation(listItem);
  }

  // Props

  /**
   * The data used to populate the navigation buttons.
   */
  @Prop()
  private readonly data!: List;

  /**
   * The current page.
   */
  @Prop()
  private readonly page!: Pages;

  /**
   * The button that is currently active.
   */
  @Prop()
  private readonly active!: ListItem;

  /**
   * The method to call when a nav button is clicked.
   */
  @Prop()
  private setActiveButton!: (button: ListItem) => void;

  // Methods.

  /**
   * Navigates via the router and updates the page with
   * data from the store.
   */
  private handleNavigation(listItem: ListItem) {
    this.$router.push({ name: this.page, query: { page: listItem.value } });
    this.setActiveButton(listItem);
  }
}
</script>
