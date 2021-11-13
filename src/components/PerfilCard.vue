<template>
  <div class="perfilCard">
    <div>
      <div class="dataField"><b>Nombre: </b>{{ nombre }}</div>
      <div class="dataField"><b>Profesion: </b>{{ profesion }}</div>
      <div class="dataField"><img :src="imageUrl" /></div>
    </div>
    <div>
      <l-map style="height: 300px" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng"></l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "PerfilCard",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      loading: false,
      nombre: null,
      profesion: null,
      imageUrl: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 8,
      center: [-34.5893724656529, -58.4839883919569],
      markerLatLng: [-34.5893724656529, -58.4839883919569],
      attribution: "ORTPro",
    };
  },
  async created() {
    this.loading = true;
    const id = parseInt(this.$route.params.id);
    const response = await fetch("http://localhost:3000/api/v1/mapData");
    const data = await response.json();
    const profileData = data;
    const busqueda = profileData.features.find((p) => p.properties.id === id);
    this.nombre = busqueda.properties.nombre;
    this.profesion = busqueda.properties.profesion;
    this.imageUrl = busqueda.properties.imageUrl;
    this.markerLatLng = busqueda.geometry.coordinates_inv;
    this.center = busqueda.geometry.coordinates_inv;
    this.loading = false;
  },
};
</script>

<style scoped>
.perfilCard {
  margin-top: 20px;
}
</style>
