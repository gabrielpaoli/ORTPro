<template>
  <div class="Estrellas">
    <div class="dataField">
      <b>Puntuacion: </b>
      <span
        v-for="numero in numeros"
        :key="numero"
        @click="puntuar(idProfesional, numero)"
        v-bind:class="puntajeClases(numero, puntajeTotal(idProfesional))"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Estrellas",
  props: {
    idProfesional: Number,
    puedePuntuar: Boolean,
  },
  methods: {
    puntuar(profesionalId, puntaje) {
      if (this.puedePuntuar) {
        const mailUsuario = this.$auth.user.email;
        this.$store.commit("modificarPuntaje", {
          profesionalId,
          mailUsuario,
          puntaje,
        });
      }
    },
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
      numeros: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style scoped>
.perfilCard {
  margin-top: 20px;
}
</style>
