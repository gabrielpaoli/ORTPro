<template>
  <div>
    <h2>Tabla de profesionales contratados</h2>
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
                v-for="profesional in obtenerContratados"
                :key="profesional.profesional.id"
                :value="profesional.profesional.profesion"
              >
                {{ profesional.profesional.profesion }}
              </option>
            </select>
          </th>
          <th>
            <span
              v-for="numero in numeros"
              :key="numero"
              @click="filtrarPorEstrellas(numero)"
              v-bind:class="puntajeClases(numero, queryEstrellas)"
            ></span>
          </th>
          <th>Tipos de voto</th>
          <th>Veces contratado</th>
          <th>Link al perfil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profesional in filteredProfesionales" :key="profesional.id">
          <td>
            <img height="30px" :src="profesional.profesional.imageUrl" />
          </td>
          <td>{{ profesional.profesional.nombre }}</td>
          <td>{{ profesional.profesional.profesion }}</td>
          <td>
            <div>
              <Estrellas
                :profesional="profesional"
                :puedePuntuar="false"
                :general="true"
              />
            </div>
          </td>
          <td>
            <TipoDeVoto
              :profesional="profesional"
              :profesionales="obtenerContratadosSF"
            />
          </td>
          <td>
            <NumeroDeContrataciones
              :profesional="profesional"
              :profesionales="obtenerContratadosSF"
            />
          </td>
          <td>
            <LinkProfesional :profesional="profesional.profesional" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Estrellas from "@/components/Estrellas.vue";
import TipoDeVoto from "@/components/TipoDeVoto.vue";
import NumeroDeContrataciones from "@/components/NumeroDeContrataciones.vue";
import LinkProfesional from "@/components/LinkProfesional.vue";

export default {
  name: "TablaAdminProfile",
  components: {
    Estrellas,
    TipoDeVoto,
    NumeroDeContrataciones,
    LinkProfesional,
  },
  data() {
    return {
      query: "",
      queryEstrellas: 0,
      obtenerContratados: [],
      obtenerContratadosSF: [],
      numeros: [1, 2, 3, 4, 5],
      puntaje: 0,
    };
  },
  async created() {
    const response = await fetch(
      "http://localhost:3000/api/v1/getAllContratados"
    );
    const data = await response.json();
    this.obtenerContratados = data;
    const responseSF = await fetch(
      "http://localhost:3000/api/v1/getAllContratadosSinFiltro"
    );
    const dataSF = await responseSF.json();
    this.obtenerContratadosSF = dataSF;
  },
  methods: {
    puntajeClases(numero, puntaje) {
      let checked = "";
      if (numero <= puntaje) {
        checked = "checked";
      }
      return "fa fa-star " + checked;
    },
    filtrarPorEstrellas(numero) {
      if (this.queryEstrellas === numero) {
        this.queryEstrellas = 0;
      } else {
        this.queryEstrellas = numero;
      }
      const getQuery = this.query;
      this.query = getQuery;
    },
    filterByProfesion(contratados) {
      return contratados.filter((obj) =>
        obj.profesional.profesion.toUpperCase().match(this.query.toUpperCase())
      );
    },
    filterByEstrellas(contratados) {
      if (this.queryEstrellas > 0) {
        return contratados.filter(
          (obj) => obj.votoTotal === this.queryEstrellas
        );
      }
      return contratados;
    },
  },
  computed: {
    filteredProfesionales() {
      if (!this.query && !this.queryEstrellas) return this.obtenerContratados;
      return this.filterByProfesion(
        this.filterByEstrellas(this.obtenerContratados)
      );
    },
  },
};
</script>

<style scoped>
.checked {
  color: orange;
}
.resetButton {
  margin-left: 10px;
}
select {
  border: none;
  outline: 0px;
}
</style>
