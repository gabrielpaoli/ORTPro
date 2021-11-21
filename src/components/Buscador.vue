<template>
  <div>
    <div>
      <p>BARRA DE BUSQUEDA</p>
    </div>
    <table class="table table-striped table-bordered">
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
          <td><img height="30px" :src="profesional.properties.imageUrl" /></td>
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
            <a :href="profesional.properties.link + profesional.properties.id"
              >Ver perfil</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//Agregar: Mock API para guardar contratados y estrellitas.
//Mostrar tambien una lista de los mejores en terminos de

import Estrellas from "@/components/Estrellas.vue";
import ContratarButton from "@/components/ContratarButton.vue";

export default {
  name: "Buscador",
  components: {
    Estrellas,
    ContratarButton,
  },
  data() {
    return {
      query: "",
      profesionales: [],
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
    this.getData();
  },
};
</script>

<style>
.containerBuscador {
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  display: inline-block;
}

#searchBox {
  width: 400px;
  margin-top: 5px;
}
</style>
