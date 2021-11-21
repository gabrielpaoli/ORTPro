<template>
  <div>
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
                @updatePuntaje="handleChildEvent"
                :profesional="profesional"
                :puedePuntuar="true"
                :general="false"
                :email="email"
                :key="estrellasKey"
              />
            </div>
          </td>
          <td>
            <div>
              <Estrellas
                @updatePuntaje="handleChildEvent"
                :profesional="profesional"
                :puedePuntuar="false"
                :general="true"
                :email="email"
                :key="estrellasKey"
              />
            </div>
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
import LinkProfesional from "@/components/LinkProfesional.vue";

export default {
  name: "TablaUserProfile",
  components: {
    Estrellas,
    LinkProfesional,
  },
  props: {
    email: String,
  },
  data() {
    return {
      obtenerContratados: [],
      estrellasKey: 0,
    };
  },
  methods: {
    async handleChildEvent() {
      const response = await fetch(
        "http://localhost:3000/api/v1/getContratadosPorUsuario?mailUsuario=" +
          this.email
      );
      const data = await response.json();
      this.obtenerContratados = data;
      this.estrellasKey++;
    },
  },
  async mounted() {
    const response = await fetch(
      "http://localhost:3000/api/v1/getContratadosPorUsuario?mailUsuario=" +
        this.email
    );
    const data = await response.json();
    this.obtenerContratados = data;
  },
};
</script>
