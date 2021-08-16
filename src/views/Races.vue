<template>
  <v-container class="main">
    <v-btn
      v-for="race in races"
      @click="setActiveRace(race)"
      :key="race.value"
      text
      dark
      :class="race.value === $route.query.page ? 'active' : ''"
    >
      {{ race.name }}
    </v-btn>
    <BaseArticle :data="activeRace.data" />
  </v-container>
</template>

<script lang="ts">
import Dwarf from '@/data/races/Dwarf';
import Elf from '@/data/races/Elf';
import Firbolg from '@/data/races/Firbolg';
import HalfElf from '@/data/races/HalfElf';
import Halfling from '@/data/races/Halfling';
import Human from '@/data/races/Human';
import BaseArticle from '@/components/BaseArticle.vue';
import { Component, Vue } from 'vue-property-decorator';
import { BaseArticleDataInterface } from '@/Types';

enum Race {
  HUMAN = 'human',
  DWARF = 'dwarf',
  ELF = 'elf',
  HALFELF = 'halfelf',
  HALFLING = 'halfling',
  FIRBOLG = 'firbolg',
}

interface RaceDetails {
  name: string;
  value: Race;
  data: BaseArticleDataInterface;
  isActive: boolean;
}

type RaceList = Record<Race, RaceDetails>;

@Component({
  components: {
    BaseArticle,
  },
})
export default class Races extends Vue {
  private races: RaceList = {
    human: {
      name: 'Human',
      value: Race.HUMAN,
      data: Human,
      isActive: false,
    },
    dwarf: {
      name: 'Dwarf',
      value: Race.DWARF,
      data: Dwarf,
      isActive: false,
    },
    elf: {
      name: 'Elf',
      value: Race.ELF,
      data: Elf,
      isActive: false,
    },
    halfelf: {
      name: 'Half-Elf',
      value: Race.HALFELF,
      data: HalfElf,
      isActive: false,
    },
    halfling: {
      name: 'Halfling',
      value: Race.HALFLING,
      data: Halfling,
      isActive: false,
    },
    firbolg: {
      name: 'Firbolg',
      value: Race.FIRBOLG,
      data: Firbolg,
      isActive: false,
    },
  };

  private activeRace: RaceDetails = this.races.human;

  private clearActiveRace() {
    Object.values(this.races).forEach(
      (raceDetails: RaceDetails) => (raceDetails.isActive = false),
    );
  }

  private setActiveRace(race: RaceDetails) {
    this.clearActiveRace();
    this.activeRace = race;
    this.races[race.value].isActive = true;

    this.$router.push({ name: 'Races', query: { page: race.value } });
  }

  private mounted() {
    const race = this.$route.query.page
      ? this.races[this.$route.query.page as Race]
      : this.activeRace;

    this.setActiveRace(race);
  }
}
</script>
