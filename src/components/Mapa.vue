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
      buscar: "",
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
      const newGeojson = this.geojson;
      const geojsonBase = this.geojsonBase;
      const buscar = this.buscar;
      if (geojsonBase !== null) {
        const busqueda = geojsonBase.features.filter((obj) =>
          obj.properties.profesion.includes(buscar)
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
            "' /></div><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-star' viewBox='0 0 16 16'><path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'/></svg><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-star' viewBox='0 0 16 16'><path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'/></svg><a href='" +
            feature.properties.link +
            "'>Ver perfil</a></div>"
        );
      };
    },
  },
  async created() {
    this.loading = true;
    const response = await fetch("http://localhost:3000/api/v1/test");
    const data = await response.json();
    this.geojson = data;
    this.geojsonBase = { ...data };
    this.loading = false;
  },
};
</script>

<style>
.popupContainer {
  background-color: red;
}
</style>
