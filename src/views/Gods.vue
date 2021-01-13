<template>
  <v-container class="main">
    <v-btn
      v-for="god in gods"
      @click="setActiveRace(god)"
      :key="god.value"
      text
      dark
      :class="god.value === $route.query.page ? 'active' : ''"
    >
      {{ god.name }}
    </v-btn>
    <component v-bind:is="activeGod.component"></component>
  </v-container>
</template>

<script lang="ts">
import Enoreth from '@/components/gods/Enoreth.vue';
import { Component, Vue } from 'vue-property-decorator';

enum God {
  HETHESKEIN = 'hetheskein',
  BJORDLUND = 'bjordlund',
  UNTERLUND = 'unterlund',
  NEYWYLL = 'neywyll',
  GARRAD = 'garrad',
  ITHRA = 'ithra',
  ULWYLL = 'ulwyll',
}

interface GodDetails {
  name: string;
  value: God;
  component: Vue.Component;
  isActive: boolean;
}

type GodList = Record<God, GodDetails>;

@Component
export default class Gods extends Vue {
  private gods: GodList = {
    unterlund: {
      name: 'Unterlund',
      value: God.UNTERLUND,
      component: Enoreth,
      isActive: false,
    },
    garrad: {
      name: 'Garrad',
      value: God.GARRAD,
      component: Enoreth,
      isActive: false,
    },
    bjordlund: {
      name: 'Bjordlund',
      value: God.BJORDLUND,
      component: Enoreth,
      isActive: false,
    },
    ithra: {
      name: 'Ithra',
      value: God.ITHRA,
      component: Enoreth,
      isActive: false,
    },
    hetheskein: {
      name: 'Hetheskein',
      value: God.HETHESKEIN,
      component: Enoreth,
      isActive: false,
    },
    neywyll: {
      name: 'Neywyll',
      value: God.NEYWYLL,
      component: Enoreth,
      isActive: false,
    },
    ulwyll: {
      name: 'Ulwyll',
      value: God.ULWYLL,
      component: Enoreth,
      isActive: false,
    },
  };

  private activeGod: GodDetails = this.gods.unterlund;

  private clearActiveRace() {
    Object.values(this.gods).forEach(
      (godDetails: GodDetails) => (godDetails.isActive = false),
    );
  }

  private setActiveRace(god: GodDetails) {
    this.clearActiveRace();
    this.activeGod = god;
    this.gods[god.value].isActive = true;

    this.$router.push({ name: 'Gods', query: { page: god.value } });
  }

  private mounted() {
    if (this.$route.query.page) {
      const god = this.$route.query.page as God;
      this.setActiveRace(this.gods[god]);
    } else {
      this.setActiveRace(this.activeGod);
    }
  }
}
</script>
