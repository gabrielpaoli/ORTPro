<template>
  <div class="userData">
    <div id="caja">
      <div id="card">
        <img :src="profesional.imageUrl" />
        <h3>
          <b>{{ profesional.nombre }}</b>
        </h3>
      </div>
      <div id="info">
        <div><strong>Profesión: </strong>{{ profesional.profesion }}</div>
        <div><strong>Puntuación: </strong></div>
      </div>
    </div>
    <div class="map">
      <l-map style="height: 300px" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng"></l-marker>
      </l-map>
    </div>
    <div>
      <div v-if="$auth.isAuthenticated">
        <button v-if="noEstaContratado()" v-on:click="contratar">
          Contratar
        </button>
        <div v-else>Profesional contratado</div>
      </div>
      <div v-else>
        Para poder contratar profesionales, primero debes loguearte
      </div>
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
  methods: {
    noEstaContratado() {
      let acceso = true;
      const idContratado = this.profesional.id;
      const mailUsuario = this.$auth.user.email;
      const contratado = this.$store.getters.getContratado(
        idContratado,
        mailUsuario
      );
      if (contratado) {
        acceso = false;
      }
      return acceso;
    },
    contratar() {
      if (this.$auth.user) {
        const profesional = this.profesional;
        const idContratado = this.profesional.id;
        const mailUsuario = this.$auth.user.email;
        this.$store.commit("contratar", {
          idContratado,
          mailUsuario,
          profesional,
        });
      }
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
img {
  border-radius: 50%;
}
#caja {
  display: flex;
  flex-direction: column;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin-left: 500px;
  margin-right: 500px;
}
#card {
  margin-top: 20px;
  margin-bottom: 15px;
  border-bottom-color: #ccd6dd;
  border-bottom-width: thin;
  border-bottom-style: solid;
}
#info {
  flex-direction: column;
  margin-bottom: 20px;
}
.map {
  margin-top: 3%;
}
</style>
