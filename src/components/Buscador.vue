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
            <input type="search" v-model="query" placeholder="Profesion" />
          </th>
          <th>Puntuacion</th>
          <th>Tipos de voto</th>
          <th>Veces contratado</th>
          <th>Link al perfil</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="profesional in filteredProfesionales"
          :key="profesional.properties.id"
        >
          <td><p>IMAGEN</p></td>
          <td>{{ profesional.properties.nombre }}</td>
          <td>{{ profesional.properties.profesion }}</td>
          <td>{{ profesional.properties.link }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//Agregar: Mock API para guardar contratados y estrellitas.
//Mostrar tambien una lista de los mejores en terminos de

// import Estrellas from "@/components/Estrellas.vue";

export default {
  name: "Buscador",
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

<style scoped>
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
