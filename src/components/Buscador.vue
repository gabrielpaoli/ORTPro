<template>
  <div class="prof" v-if="!$auth.loading">
    <div class="container-fluid">
      <div class="col-md-offset-1 col-md-12">
        <div class="panel">
          <div class="panel-heading">
            <div class="row">
              <div class="col col-sm-3 col-xs-12">
                <h4 class="title">Nuestros <span>Profesionales</span></h4>
              </div>
            </div>
          </div>
          <div class="panel-body table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>
                    <!-- <input type="search" v-model="query" placeholder="Profesion" /> -->
                    <select v-model="query">
                      <option value="">Profesión</option>
                      <option
                        v-for="profesional in profesionales"
                        :key="profesional.id"
                        :value="profesional.properties.profesion"
                      >
                        {{ profesional.properties.profesion }}
                      </option>
                    </select>
                  </th>
                  <th>Puntuacion</th>
                  <th>Contratar</th>
                  <th>Link al perfil</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="profesional in filteredProfesionales"
                  :key="profesional.properties.id"
                >
                  <td>
                    <img height="30px" :src="profesional.properties.imageUrl" />
                  </td>
                  <td>{{ profesional.properties.nombre }}</td>
                  <td>{{ profesional.properties.profesion }}</td>
                  <td>
                    <Estrellas
                      :profesional="profesional.properties"
                      :puedePuntuar="false"
                      :general="true"
                    />
                  </td>
                  <td>
                    <ContratarButton
                      :profesional="profesional.properties"
                      :email="getEmail()"
                    />
                  </td>
                  <td>
                    <LinkProfesional :profesional="profesional.properties" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Agregar: Mock API para guardar contratados y estrellitas.
//Mostrar tambien una lista de los mejores en terminos de

import Estrellas from "@/components/Estrellas.vue";
import ContratarButton from "@/components/ContratarButton.vue";
import LinkProfesional from "@/components/LinkProfesional.vue";

export default {
  name: "Buscador",
  components: {
    Estrellas,
    ContratarButton,
    LinkProfesional,
  },
  data() {
    return {
      query: "",
      profesionales: [],
      loading: true,
    };
  },
  methods: {
    async getData() {
      const response = await fetch("http://localhost:3000/api/v1/mapData");
      const dataDB = await response.json();
      this.profesionales = dataDB.features;
    },
    getEmail() {
      return this.$auth.user ? this.$auth.user.email : "";
    },
  },
  computed: {
    filteredProfesionales() {
      if (!this.query) return this.profesionales;
      return this.profesionales.filter((obj) =>
        obj.properties.profesion.toUpperCase().match(this.query.toUpperCase())
      );
    },
  },
  created() {
    this.loading = true;
    this.getData();
    this.loading = false;
  },
};
</script>

<style>
.prof {
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
select {
  border: none;
  outline: 0px;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgb(70, 70, 70);
}
option {
  color: #2c3e50;
}
.panel {
  background: linear-gradient(to right, #d6d6d6, #afb2b6);
  padding: 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.05), 0 0 0 10px rgba(0, 0, 0, 0.05);
}
.panel .panel-heading {
  padding: 20px 15px;
  border-radius: 10px 10px 0 0;
  margin: 0;
}
.panel .panel-heading .title {
  color: rgb(70, 70, 70);
  font-size: 28px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 40px;
  margin: 0;
}

.panel .panel-body {
  padding: 0;
}
.panel .panel-body .table thead tr th {
  color: rgb(70, 70, 70);
  background-color: rgba(255, 255, 255, 0.563);
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 12px;
  border: none;
}
.panel .panel-body .table tbody tr td {
  color: rgb(70, 70, 70);
  font-size: 15px;
  padding: 10px 12px;
  vertical-align: middle;
  border: none;
}
.panel .panel-body .table tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}
.panel .panel-body .table tbody .action-list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.panel .panel-body .table tbody .action-list li {
  display: inline-block;
  margin: 0 5px;
}
.panel .panel-body .table tbody .action-list li a {
  color: rgb(70, 70, 70);
  font-size: 15px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease 0s;
}
.panel .panel-body .table tbody .action-list li a:hover {
  text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.3);
}
.panel .panel-body .table tbody .action-list li a:before,
.panel .panel-body .table tbody .action-list li a:after {
  content: attr(data-tip);
  color: rgb(70, 70, 70);
  background-color: #111;
  font-size: 12px;
  padding: 5px 7px;
  border-radius: 4px;
  text-transform: capitalize;
  display: none;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: -32px;
  transition: all 0.3s ease 0s;
}
.panel .panel-body .table tbody .action-list li a:after {
  content: "";
  height: 15px;
  width: 15px;
  padding: 0;
  border-radius: 0;
  transform: translateX(-50%) rotate(45deg);
  top: -18px;
  z-index: -1;
}
.panel .panel-body .table tbody .action-list li a:hover:before,
.panel .panel-body .table tbody .action-list li a:hover:after {
  display: block;
}
</style>
