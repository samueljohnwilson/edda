<template>
  <v-container class="main">
    <v-btn
      v-for="beast in beasts"
      @click="setActiveRace(beast)"
      :key="beast.value"
      text
      dark
      :class="beast.value === $route.query.page ? 'active' : ''"
    >
      {{ beast.name }}
    </v-btn>
    <component v-bind:is="activeBeast.component"></component>
  </v-container>
</template>

<script lang="ts">
import Kodo from '@/components/beasts/Kodo.vue';
import Orc from '@/components/beasts/Orc.vue';
import { Component, Vue } from 'vue-property-decorator';

enum Beast {
  ORC = 'orc',
  KODO = 'kodo',
}

interface BeastDetails {
  name: string;
  value: Beast;
  component: Vue.Component;
  isActive: boolean;
}

type BeastList = Record<Beast, BeastDetails>;

@Component
export default class Bestiary extends Vue {
  private beasts: BeastList = {
    orc: {
      name: 'Orc',
      value: Beast.ORC,
      component: Orc,
      isActive: false,
    },
    kodo: {
      name: 'Kodo',
      value: Beast.KODO,
      component: Kodo,
      isActive: false,
    },
  };

  private activeBeast: BeastDetails = this.beasts.orc;

  private clearActiveRace() {
    Object.values(this.beasts).forEach(
      (beastDetails: BeastDetails) => (beastDetails.isActive = false),
    );
  }

  private setActiveRace(beast: BeastDetails) {
    this.clearActiveRace();
    this.activeBeast = beast;
    this.beasts[beast.value].isActive = true;

    this.$router.push({ name: 'Bestiary', query: { page: beast.value } });
  }

  private mounted() {
    if (this.$route.query.page) {
      const beast = this.$route.query.page as Beast;
      this.setActiveRace(this.beasts[beast]);
    } else {
      this.setActiveRace(this.activeBeast);
    }
  }
}
</script>
