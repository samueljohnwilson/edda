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
import Cerrunos from '@/components/gods/Cerrunos.vue';
import EthKorel from '@/components/gods/EthKorel.vue';
import Enoreth from '@/components/gods/Enoreth.vue';
import Eos from '@/components/gods/Eos.vue';
import Othar from '@/components/gods/Othar.vue';
import Malak from '@/components/gods/Malak.vue';
import Ulat from '@/components/gods/Ulat.vue';
import { Component, Vue } from 'vue-property-decorator';

enum God {
  CERRUNOS = 'cerrunos',
  EOS = 'eos',
  OTHAR = 'othar',
  ENORETH = 'enoreth',
  MALAK = 'malak',
  ULAT = 'ulat',
  ETHKOREL = 'ethkorel',
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
    othar: {
      name: 'Othar',
      value: God.OTHAR,
      component: Othar,
      isActive: false,
    },
    eos: {
      name: 'Eos',
      value: God.EOS,
      component: Eos,
      isActive: false,
    },
    cerrunos: {
      name: 'Cerrunos',
      value: God.CERRUNOS,
      component: Cerrunos,
      isActive: false,
    },
    enoreth: {
      name: 'Enoreth',
      value: God.ENORETH,
      component: Enoreth,
      isActive: false,
    },
    ethkorel: {
      name: 'Eth-Korel',
      value: God.ETHKOREL,
      component: EthKorel,
      isActive: false,
    },
    malak: {
      name: 'Malak',
      value: God.MALAK,
      component: Malak,
      isActive: false,
    },
    ulat: {
      name: 'Ulat',
      value: God.ULAT,
      component: Ulat,
      isActive: false,
    },
  };

  private activeGod: GodDetails = this.gods.othar;

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
