<template>
  <div class="container-table">
    <div class="col-md-offset-1 col-md-12">
      <div class="panel">
        <div class="panel-heading">
          <div class="row">
            <h4 class="title">Profesionales contratados</h4>
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
              <tr
                v-for="profesional in filteredProfesionales"
                :key="profesional.id"
              >
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
                  <TipoDeVoto :profesional="profesional" />
                </td>
                <td>
                  <NumeroDeContrataciones :profesional="profesional" />
                </td>
                <td>
                  <LinkProfesional :profesional="profesional.profesional" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
      numeros: [1, 2, 3, 4, 5],
      puntaje: 0,
    };
  },
  async created() {
    const response = await fetch(
      "http://localhost:3000/api/v1/getAllContratados"
    );
    const data = await response.json();
    this.obtenerContratados = data.contratados;
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
.container-table {
  width: 100%;
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

.panel .panel-body .table tbody tr td {
  color: rgb(70, 70, 70);
  font-size: 15px;
  padding: 10px 12px;
  vertical-align: middle;
  border: none;
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
