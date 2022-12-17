<template>
  <v-container class="main">
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    />
    <h1>MAPS</h1>
    <LMap
      class="rounded-xl"
      ref="map"
      style="height: 50rem; width: 100%; background-color: black;"
      :minZoom="activeMap.config.minZoom"
      :maxZoom="activeMap.config.maxZoom"
      :maxBounds="activeMap.config.bounds"
      :zoom="activeMap.config.zoom"
      :crs="activeMap.config.crs"
      :center="activeMap.config.center"
    >
      <LImageOverlay
        :url="activeMap.config.url"
        :bounds="activeMap.config.bounds"
      />
    </LMap>
    <Footer />
  </v-container>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';
import { CRS } from 'leaflet';
import { Component, Vue } from 'vue-property-decorator';
import { LImageOverlay, LMap, LTileLayer, LMarker } from 'vue2-leaflet';

enum Map {
  EDDA = 'edda',
}

interface MapConfig {
  bounds: number[][];
  minZoom: number;
  maxZoom: number;
  zoom: number;
  center: number[];
  url: string;
  crs: CRS;
}

interface MapDetails {
  name: string;
  value: Map;
  config: MapConfig;
  isActive: boolean;
}

type MapList = Record<Map, MapDetails>;

@Component({
  components: {
    Footer,
    LImageOverlay,
    LMap,
    LTileLayer,
    LMarker,
  },
})
export default class Maps extends Vue {
  private maps: MapList = {
    edda: {
      name: 'Edda',
      value: Map.EDDA,
      config: {
        bounds: [
          [0, 2500],
          [2500, 0],
        ],
        minZoom: -2,
        maxZoom: 5,
        zoom: -2,
        center: [1250, 1250],
        url:
          'https://www.worldanvil.com/uploads/images/a0442782518cbbc14bce6af5d3f00b2a.jpg',
        crs: CRS.Simple,
      },
      isActive: false,
    },
  };

  private activeMap: MapDetails = this.maps.edda;

  private clearActiveMap() {
    Object.values(this.maps).forEach(
      (mapDetails: MapDetails) => (mapDetails.isActive = false),
    );
  }

  private setActiveMap(map: MapDetails) {
    this.clearActiveMap();
    this.activeMap = map;
    this.maps[map.value].isActive = true;
    this.$router.push({ name: 'Maps', query: { page: map.value } });
  }

  private mounted() {
    if (this.$route.query.page) {
      const map = this.$route.query.page as Map;
      this.setActiveMap(this.maps[map]);
    } else {
      this.setActiveMap(this.activeMap);
    }
  }
}
</script>
