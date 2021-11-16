<template>
  <div class="userData">
    <div>
      <div>Nombre: {{ getUserData.name }}</div>
      <div>Nickname: {{ getUserData.nickname }}</div>
      <div>Email: {{ getUserData.email }}</div>
      <div><img :src="getUserData.picture" /></div>

      <!-- PASAR A UN COMPONENTE LA TABLA -->
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Profesion</th>
            <th>Mi Puntuacion</th>
            <th>Puntuacion general</th>
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
                  @click="puntuar(profesional.profesional.id, 1)"
                  v-bind:class="puntajeClases(1, profesional.voto)"
                ></span>
                <span
                  @click="puntuar(profesional.profesional.id, 2)"
                  v-bind:class="puntajeClases(2, profesional.voto)"
                ></span>
                <span
                  @click="puntuar(profesional.profesional.id, 3)"
                  v-bind:class="puntajeClases(3, profesional.voto)"
                ></span>
                <span
                  @click="puntuar(profesional.profesional.id, 4)"
                  v-bind:class="puntajeClases(4, profesional.voto)"
                ></span>
                <span
                  @click="puntuar(profesional.profesional.id, 5)"
                  v-bind:class="puntajeClases(5, profesional.voto)"
                ></span>
              </div>
            </td>
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
  name: "UserProfile",
  computed: {
    obtenerContratados() {
      const contratados = this.$store.getters.getContratados(
        this.$auth.user.email
      );
      return contratados;
    },
    getUserData() {
      return this.$auth.user;
    },
  },
  methods: {
    puntuar(profesionalId, puntaje) {
      const mailUsuario = this.$auth.user.email;
      this.$store.commit("modificarPuntaje", {
        profesionalId,
        mailUsuario,
        puntaje,
      });
    },
    puntajeTotal(profesionalId) {
      return this.$store.getters.getPuntajeTotalPorProfesional(profesionalId);
    },
    puntajeClases(numero, puntaje) {
      let checked = "";
      if (numero <= puntaje) {
        checked = "checked";
      }
      return "fa fa-star " + checked;
    },
  },
  data() {
    return {
      profesionales: null,
      user: null,
    };
  },
};
</script>
<style>
.checked {
  color: orange;
}
</style>
