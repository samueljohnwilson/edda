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
import { ArticleList, BaseArticleInterface } from '@/Types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavButton extends Vue {
  // Lifecycle hooks.

  /**
   * Mounted lifecycle hook.
   *
   * On page load, check for a query parameter. If one exists,
   * use it to determine the data to display. Otherwise, display
   * the item that is already active.
   */
  private mounted() {
    const article =
      this.$route.query.page &&
      this.data[this.$route.query.page as BaseArticleInterface['name']]
        ? this.data[this.$route.query.page as BaseArticleInterface['name']]
        : this.active;

    this.setActive(article);
  }

  // Props.

  /**
   * The data used to populate the navigation buttons.
   */
  @Prop()
  private readonly data!: ArticleList;

  /**
   * The button that is currently active.
   */
  @Prop()
  private readonly active!: BaseArticleInterface;

  /**
   * The method to call when a nav button is clicked.
   */
  @Prop()
  private setActive!: (button: BaseArticleInterface) => void;

  // Methods.

  /**
   * Updates the query parameter and sets the active list item.
   */
  private handleNavigation(BaseArticleInterface: BaseArticleInterface) {
    this.setActive(BaseArticleInterface);
    this.$router.replace({ query: { page: BaseArticleInterface.value } });
  }
}
</script>
