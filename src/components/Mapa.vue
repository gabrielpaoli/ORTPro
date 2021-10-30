<template>
  <div>
    <div>
      <span v-if="loading">Loading...</span>
      <div class="containerBuscador">
        <label for="searchBox">Que estas buscando ? </label>
        <input id="searchBox" v-model="buscar" type="text" />
      </div>
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
      zoom: 12,
      buscar: "",
      center: [-34.6144934119689, -58.4458563545429],
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
      const newGeojson = this.geojson;
      const geojsonBase = this.geojsonBase;
      const buscar = this.buscar;
      if (geojsonBase !== null) {
        const busqueda = geojsonBase.features.filter((obj) =>
          obj.properties.profesion.toUpperCase().match(buscar.toUpperCase())
        );
        newGeojson.features = busqueda;
      }
      return true;
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindPopup(
          "<div class='containerPopup'><div class='popupField'><h2>" +
            feature.properties.nombre +
            "</h2></div><div class='popupField'><h4>" +
            feature.properties.profesion +
            "</h4></div><div><img width='100%' src='" +
            feature.properties.imageUrl +
            "' /></div><a href='" +
            feature.properties.link +
            feature.properties.id +
            "'>Ver perfil</a></div>"
        );
      };
    },
  },
  async created() {
    this.loading = true;
    const response = await fetch("http://localhost:3000/api/v1/mapData");
    const data = await response.json();
    this.geojson = data;
    this.geojsonBase = { ...data };
    this.loading = false;
  },
};
</script>

<style>
.containerBuscador {
  margin-bottom: 20px;
}
</style>
