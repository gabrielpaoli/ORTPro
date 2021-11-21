<template>
  <div class="perfilCard">
    <!--<span v-if="loading">Loading...</span>
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
    </div>-->
    <span v-if="loading">Loading...</span>
    <div class="container-fluid" v-else>
      <div class="main-body">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="main-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0)">User</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Professional Profile
            </li>
          </ol>
        </nav>
        <!-- /Breadcrumb -->

        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    :src="profesional.imageUrl"
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  />
                  <div class="mt-3">
                    <h4>{{ profesional.nombre }}</h4>
                    <p class="text-secondary mb-1">
                      {{ profesional.profesion }}
                    </p>
                    <p class="text-muted font-size-sm">
                      <Estrellas
                        :profesional="profesional"
                        :puedePuntuar="false"
                        :general="true"
                      />
                    </p>
                    <div v-if="!$auth.loading">
                      <ContratarButton
                        :profesional="profesional"
                        :email="getEmail()"
                      />
                    </div>
                    <!-- PASAR A UN COMPONENTE EL BOTON DE CONTRATAR PARA REUTILIZAR EN LA HOME 
                  <BtnContratar />
                  <div v-if="$auth.isAuthenticated">
                    <button
                      class="btn btn-primary"
                      v-if="noEstaContratado()"
                      v-on:click="contratar"
                    >
                      Contratar
                    </button>

                    <div v-else>Profesional contratado</div>
                  </div>
                  <div v-else>
                    Para poder contratar profesionales, primero debes loguearte
                  </div> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3">
              <ul class="list-group list-group-flush">
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    flex-wrap
                  "
                >
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-globe mr-2 icon-inline"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path
                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                      ></path></svg
                    >Website
                  </h6>
                  <span class="text-secondary">https://ejemplo.com</span>
                </li>

                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    flex-wrap
                  "
                >
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-twitter mr-2 icon-inline text-info"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                      ></path></svg
                    >Twitter
                  </h6>
                  <span class="text-secondary">@ejemplo</span>
                </li>
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    flex-wrap
                  "
                >
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="
                        feather feather-instagram
                        mr-2
                        icon-inline
                        text-danger
                      "
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path
                        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                      ></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg
                    >Instagram
                  </h6>
                  <span class="text-secondary">ejemplo</span>
                </li>
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    flex-wrap
                  "
                >
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="
                        feather feather-facebook
                        mr-2
                        icon-inline
                        text-primary
                      "
                    >
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      ></path></svg
                    >Facebook
                  </h6>
                  <span class="text-secondary">ejemplo</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">ejemplo@.com</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Teléfono</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">(111) 111-1111</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Celular</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">(111) 111-1111</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Dirección</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    Fake Street 123, Springfield, OREGON
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 mb-3">
                <div class="card h-100">
                  <div class="card-body">
                    <l-map style="height: 300px" :zoom="zoom" :center="center">
                      <l-tile-layer
                        :url="url"
                        :attribution="attribution"
                      ></l-tile-layer>
                      <l-marker :lat-lng="markerLatLng"></l-marker>
                    </l-map>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
.main-body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>
