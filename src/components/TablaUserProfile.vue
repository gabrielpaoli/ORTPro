<template>
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
            <Estrellas
              :profesional="profesional"
              :puedePuntuar="true"
              :general="false"
            />
          </div>
        </td>
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
          <a :href="profesional.profesional.link + profesional.profesional.id"
            >Ver perfil</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Estrellas from "@/components/Estrellas.vue";

export default {
  name: "TablaUserProfile",
  components: {
    Estrellas,
  },
  computed: {
    obtenerContratados() {
      const contratados = this.$store.getters.getContratados(
        this.$auth.user.email
      );
      return contratados;
    },
  },
};
</script>
