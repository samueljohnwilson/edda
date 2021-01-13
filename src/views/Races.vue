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
    <component v-bind:is="activeRace.component"></component>
  </v-container>
</template>

<script lang="ts">
import Dwarf from '@/components/races/Dwarf.vue';
import Elf from '@/components/races/Elf.vue';
import Firbolg from '@/components/races/Firbolg.vue';
import HalfElf from '@/components/races/HalfElf.vue';
import Halfling from '@/components/races/Halfling.vue';
import Human from '@/components/races/Human.vue';
import { ArticleData } from '@/Types.ts';
import { Component, Vue } from 'vue-property-decorator';

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
  component: Vue.Component;
  isActive: boolean;
}

type RaceList = Record<Race, RaceDetails>;

@Component
export default class Races extends Vue {
  private articles!: ArticleData[];

  private races: RaceList = {
    human: {
      name: 'Human',
      value: Race.HUMAN,
      component: Human,
      isActive: false,
    },
    dwarf: {
      name: 'Dwarf',
      value: Race.DWARF,
      component: Dwarf,
      isActive: false,
    },
    elf: {
      name: 'Elf',
      value: Race.ELF,
      component: Elf,
      isActive: false,
    },
    halfelf: {
      name: 'Half-Elf',
      value: Race.HALFELF,
      component: HalfElf,
      isActive: false,
    },
    halfling: {
      name: 'Halfling',
      value: Race.HALFLING,
      component: Halfling,
      isActive: false,
    },
    firbolg: {
      name: 'Firbolg',
      value: Race.FIRBOLG,
      component: Firbolg,
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
    if (this.$route.query.page) {
      const race = this.$route.query.page as Race;
      this.setActiveRace(this.races[race]);
    } else {
      this.setActiveRace(this.activeRace);
    }
  }
}
</script>
