<template>
  <div class="perfilCard">
    <span v-if="loading">Loading...</span>
    <div v-else>
      <div>
        <div class="dataField"><b>Nombre: </b>{{ profesional.nombre }}</div>
        <div class="dataField">
          <b>Profesion: </b>{{ profesional.profesion }}
        </div>
        <b>Puntaje: </b
        ><span
          ><Estrellas
            :profesional="profesional"
            :puedePuntuar="false"
            :general="true"
        /></span>
        <div class="dataField"><img :src="profesional.imageUrl" /></div>
      </div>
      <div>
        <l-map style="height: 300px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
      </div>
      <div v-if="!$auth.loading">
        <ContratarButton :profesional="profesional" :email="getEmail()" />
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import Estrellas from "@/components/Estrellas.vue";
import ContratarButton from "@/components/ContratarButton.vue";

export default {
  name: "PerfilCard",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    Estrellas,
    ContratarButton,
  },
  methods: {
    getEmail() {
      return this.$auth.user ? this.$auth.user.email : "";
    },
  },
  data() {
    return {
      loading: false,
      profesional: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 14,
      center: [],
      markerLatLng: [],
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
    this.profesional = busqueda.properties;
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
