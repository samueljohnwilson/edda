<template>
  <v-container class="main">
    <v-btn
      v-for="land in lands"
      @click="setActiveRace(land)"
      :key="land.value"
      text
      dark
      :class="land.value === $route.query.page ? 'active' : ''"
    >
      {{ land.name }}
    </v-btn>
    <component v-bind:is="activeLand.component"></component>
  </v-container>
</template>

<script lang="ts">
import Bjordlund from '@/components/lands/Bjordlund.vue';
import Garrad from '@/components/lands/Garrad.vue';
import Hetheskein from '@/components/lands/Hetheskein.vue';
import Ithra from '@/components/lands/Ithra.vue';
import Neywyll from '@/components/lands/Neywyll.vue';
import Unterlund from '@/components/lands/Unterlund.vue';
import Ulwyll from '@/components/lands/Ulwyll.vue';
import { Component, Vue } from 'vue-property-decorator';

enum Land {
  HETHESKEIN = 'hetheskein',
  BJORDLUND = 'bjordlund',
  UNTERLUND = 'unterlund',
  NEYWYLL = 'neywyll',
  GARRAD = 'garrad',
  ITHRA = 'ithra',
  ULWYLL = 'ulwyll',
}

interface LandDetails {
  name: string;
  value: Land;
  component: Vue.Component;
  isActive: boolean;
}

type LandList = Record<Land, LandDetails>;

@Component
export default class Lands extends Vue {
  private lands: LandList = {
    unterlund: {
      name: 'Unterlund',
      value: Land.UNTERLUND,
      component: Unterlund,
      isActive: false,
    },
    garrad: {
      name: 'Garrad',
      value: Land.GARRAD,
      component: Garrad,
      isActive: false,
    },
    bjordlund: {
      name: 'Bjordlund',
      value: Land.BJORDLUND,
      component: Bjordlund,
      isActive: false,
    },
    ithra: {
      name: 'Ithra',
      value: Land.ITHRA,
      component: Ithra,
      isActive: false,
    },
    hetheskein: {
      name: 'Hetheskein',
      value: Land.HETHESKEIN,
      component: Hetheskein,
      isActive: false,
    },
    neywyll: {
      name: 'Neywyll',
      value: Land.NEYWYLL,
      component: Neywyll,
      isActive: false,
    },
    ulwyll: {
      name: 'Ulwyll',
      value: Land.ULWYLL,
      component: Ulwyll,
      isActive: false,
    },
  };

  private activeLand: LandDetails = this.lands.unterlund;

  private clearActiveRace() {
    Object.values(this.lands).forEach(
      (landDetails: LandDetails) => (landDetails.isActive = false),
    );
  }

  private setActiveRace(land: LandDetails) {
    this.clearActiveRace();
    this.activeLand = land;
    this.lands[land.value].isActive = true;

    this.$router.push({ name: 'Lands', query: { page: land.value } });
  }

  private mounted() {
    if (this.$route.query.page) {
      const land = this.$route.query.page as Land;
      this.setActiveRace(this.lands[land]);
    } else {
      this.setActiveRace(this.activeLand);
    }
  }
}
</script>
