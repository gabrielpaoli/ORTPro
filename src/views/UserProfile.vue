<template>
  <div class="userData">
    <div>
      <div>Nombre: {{ getUserData.name }}</div>
      <div>Nickname: {{ getUserData.nickname }}</div>
      <div>Email: {{ getUserData.email }}</div>
      <div><img :src="getUserData.picture" /></div>

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
                  data-clasif="5"
                  :data-pid="profesional.id"
                  class="fa fa-star checked"
                ></span>
                <span
                  data-clasif="4"
                  :data-pid="profesional.id"
                  class="fa fa-star checked"
                ></span>
                <span
                  data-clasif="3"
                  :data-pid="profesional.id"
                  class="fa fa-star"
                ></span>
                <span
                  data-clasif="2"
                  :data-pid="profesional.id"
                  class="fa fa-star"
                ></span>
                <span
                  data-clasif="1"
                  :data-pid="profesional.id"
                  class="fa fa-star"
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
