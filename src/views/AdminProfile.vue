<template>
  <div class="adminProfile">
    <div>
      <!-- PASAR A UN COMPONENTE LA TABLA -->
      <h2>Profesionales ordenados por mejor puntaje</h2>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Profesion</th>
            <th>Puntuacion</th>
            <th>Link al perfil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="profesional in obtenerContratados" :key="profesional.id">
            <td>
              <img height="30px" :src="profesional.profesional.imageUrl" />
            </td>
            <td>{{ profesional.profesional.nombre }}</td>
            <td>{{ profesional.profesional.profesion }}</td>
            <td>
              <div>
                <span
                  v-bind:class="
                    puntajeClases(1, puntajeTotal(profesional.profesional.id))
                  "
                ></span>
                <span
                  v-bind:class="
                    puntajeClases(2, puntajeTotal(profesional.profesional.id))
                  "
                ></span>
                <span
                  v-bind:class="
                    puntajeClases(3, puntajeTotal(profesional.profesional.id))
                  "
                ></span>
                <span
                  v-bind:class="
                    puntajeClases(4, puntajeTotal(profesional.profesional.id))
                  "
                ></span>
                <span
                  v-bind:class="
                    puntajeClases(5, puntajeTotal(profesional.profesional.id))
                  "
                ></span>
              </div>
            </td>
            <td>
              <a
                :href="
                  profesional.profesional.link + profesional.profesional.id
                "
                >Ver perfil</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminProfile",
  computed: {
    obtenerContratados() {
      const contratados = this.$store.getters.getAllContratados();
      return contratados;
    },
  },
  methods: {
    puntajeClases(numero, puntaje) {
      let checked = "";
      if (numero <= puntaje) {
        checked = "checked";
      }
      return "fa fa-star " + checked;
    },
    puntajeTotal(profesionalId) {
      return this.$store.getters.getPuntajeTotalPorProfesional(profesionalId);
    },
  },
  data() {
    return {
      profesionales: null,
    };
  },
};
</script>
<style>
.checked {
  color: orange;
}
</style>
