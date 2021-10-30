<template>
  <div>
    <div>
      <span v-if="loading">Loading...</span>
      <label for="searchBox">Buscar: </label>
      <input id="searchBox" v-model="buscar" type="text" />
    </div>
    <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-geo-json
        v-if="show"
        :geojson="geojson"
        :options="options"
        :buscar="whenSearch"
      />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";

export default {
  name: "ORTProMap",
  components: { LMap, LTileLayer, LGeoJson },
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 6,
      buscar: "Gasista",
      center: [-8.8044875, -38.3613558],
      geojsonBase: null,
      geojson: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "ORTPro",
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      };
    },
    whenSearch() {
      const geojsonCopy = this.geojson;
      const supertest = { ...this.geojsonBase };
      if (
        Object.keys(supertest).length === 0 &&
        supertest.constructor === Object
      ) {
        console.log("ENTRE 0");
      } else {
        console.log("ENTRE 1");
        const busqueda = supertest.features.filter((obj) =>
          obj.properties.profesion.includes(this.buscar)
        );
        geojsonCopy.features = busqueda;
      }

      return "HOLA";
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>Nombre:" +
            feature.properties.nombre +
            "</div><div>Profesion: " +
            feature.properties.profesion +
            "</div>",
          { permanent: false, sticky: false }
        );
      };
    },
  },
  async created() {
    this.loading = true;
    const response = await fetch("http://localhost:3000/api/v1/test");
    const data = await response.json();
    const response2 = await fetch("http://localhost:3000/api/v1/test");
    const data2 = await response2.json();
    this.geojson = data;
    this.geojsonBase = data2;
    this.loading = false;
  },
};
</script>
