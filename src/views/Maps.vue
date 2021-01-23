<template>
  <v-container class="main">
    <h1>MAPS</h1>
    <v-card>
      <span>{{ center }}</span>
      <l-map
        ref="map"
        style="height: 600px; width: 100%; background-color: black;"
        :minZoom="activeMap.config.minZoom"
        :maxZoom="activeMap.config.maxZoom"
        :zoom="activeMap.config.zoom"
        :center="activeMap.config.center"
      >
        <l-image-overlay
          :url="activeMap.config.url"
          :bounds="activeMap.config.bounds"
        />
      </l-map>
    </v-card>
  </v-container>
</template>

<script lang="ts">
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
          [0, 749],
          [999, 999],
        ],
        minZoom: 2,
        maxZoom: 5,
        zoom: 2,
        center: [66, 872],
        url:
          'https://www.worldanvil.com/uploads/maps/37f92b105e66dda536a03c6b52c53d8f.jpg',
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
