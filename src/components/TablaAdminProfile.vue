<template>
  <div>
    <h2>Tabla de profesionales contratados</h2>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Profesion</th>
          <th>Puntuacion</th>
          <th>Tipos de voto</th>
          <th>Veces contratado</th>
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
            <LinkProfesional :profesional="profesional" />
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
  computed: {
    obtenerContratados() {
      const contratados = this.$store.getters.getAllContratados(
        this.$auth.user.email
      );
      return contratados;
    },
  },
};
</script>
