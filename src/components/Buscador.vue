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
            <input type="text" v-model="selectedProf" placeholder="Profesion" />
          </th>
          <th>Puntuacion</th>
          <th>Tipos de voto</th>
          <th>Veces contratado</th>
          <th>Link al perfil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profesional in arrayFiltrado" :key="profesional.id">
          <td><p>IMAGEN</p></td>
          <td>{{ profesional.nombre }}</td>
          <td>{{ profesional.profesion }}</td>
          <td>{{ profesional.link }}</td>
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
      selectedProf: "",
      profesionales: [],
      datos: null,
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      const response = await fetch("http://localhost:3000/api/v1/mapData");
      const dataDB = await response.json();
      this.datos = dataDB.features;
      this.loading = false;
    },
    getProfesionales() {
      const suggestions = [];
      this.datos.forEach(function (data) {
        suggestions.push(data.properties);
      });
      this.profesionales = suggestions;
    },
  },
  computed: {
    filterProfesiones() {
      let arrayFiltrado = [];
      arrayFiltrado = this.profesionales.filter((p) =>
        p.profesion.includes(this.selectedProf)
      );
      return arrayFiltrado;
    },
  },
  created() {
    this.getData().then(() => this.getProfesionales());
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
