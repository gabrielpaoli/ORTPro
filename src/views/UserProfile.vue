<template>
  <div class="userData">

    <div>

      <div id="caja">
        <div id="card">
          <img :src="getUserData.picture" />
          <h3>{{ getUserData.name }}</h3>
        </div>
        <div id="info">
          <div id="mail"><strong>Mail: </strong>{{ getUserData.email }}</div>
          <div id="nickname">
            <strong>Nickname: </strong>{{ getUserData.nickname }}
          </div>
          <div id="login">
            <strong>Último ingreso: </strong>{{ getLastLogin() }}
          </div>
        </div>
      </div>

      <!-- PASAR A UN COMPONENTE LA TABLA -->
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
                  @click="puntuar(profesional.profesional.id, 1)"
                  v-bind:class="
                    puntajeClases(1, profesional.profesional.puntuacion)
                  "
                ></span>
                <span
                  @click="puntuar(profesional.profesional.id, 2)"
                  v-bind:class="
                    puntajeClases(2, profesional.profesional.puntuacion)
                  "
                ></span>
                <span
                  @click="puntuar(profesional.profesional.id, 3)"
                  v-bind:class="
                    puntajeClases(3, profesional.profesional.puntuacion)
                  "
                ></span>
                <span
                  @click="puntuar(profesional.profesional.id, 4)"
                  v-bind:class="
                    puntajeClases(4, profesional.profesional.puntuacion)
                  "
                ></span>
                <span
                  @click="puntuar(profesional.profesional.id, 5)"
                  v-bind:class="
                    puntajeClases(5, profesional.profesional.puntuacion)
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
    getLastLogin() {
      const fecha = new Date(this.$auth.user.updated_at);
      return `${fecha.getDate()} de ${
        this.meses[fecha.getMonth()]
      } de ${fecha.getFullYear()} a las ${fecha.getHours()}:${fecha.getMinutes()}`;
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
      meses: [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ],
    };
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
.checked {
  color: orange;
}
</style>