<template>
  <section class="mapSearch">
    <span v-if="loading">Cargando...</span>
    <div class="containerBuscador">
      <h2 for="searchBox">¿Qué estás buscando?</h2>
      <input
        class="form-control"
        id="searchBox"
        v-model="buscar"
        type="text"
        list="suggestions"
        placeholder="Ingrese un servicio"
      />
      <datalist id="suggestions">
        <option v-for="(item, key) in suggestions" :key="key">
          {{ item }}
        </option>
      </datalist>
    </div>
    <div class="container">
      <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-geo-json
          v-if="show"
          :geojson="search"
          :options="options"
          :buscar="search"
        />
      </l-map>
    </div>
  </section>
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
      geojson: null,
      suggestions: [],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "ORTPro",
    };
  },
  methods: {
    async getMapData() {
      this.loading = true;
      const response = await fetch("http://localhost:3000/api/v1/mapData");
      const data = await response.json();
      this.geojson = data;
      this.loading = false;
    },
    getSuggestions() {
      const suggestions = [];
      this.geojson.features.forEach(function (data) {
        suggestions.push(data.properties.profesion);
      });
      this.suggestions = suggestions;
    },
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      };
    },
    search() {
      const geoJsonParaBuscar = this.geojson;
      const buscar = this.buscar;
      const geoJsonParaReturn = { type: "FeatureCollection", features: [] };
      let busqueda = [];
      if (geoJsonParaBuscar !== null) {
        busqueda = geoJsonParaBuscar.features.filter((obj) =>
          obj.properties.profesion.toUpperCase().match(buscar.toUpperCase())
        );
      }
      return (geoJsonParaReturn.features = busqueda);
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
            "</h4></div><div><Estrellas :idProfesional='1'/><img width='100%' src='" +
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
    this.getMapData().then(() => this.getSuggestions());
  },
};
</script>

<style>
.mapSearch {
  padding: 10px 0;
}
.containerBuscador {
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  display: inline-block;
}
.containerBuscador h2 {
  font-size: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.container {
  margin-top: 20px;
  margin-bottom: 5px;
}
#searchBox {
  width: 800px;
  margin-top: 15px;
}
</style>
