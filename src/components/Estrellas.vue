<template>
  <div class="Estrellas">
    <div class="dataField">
      <b>Puntuacion: </b>
      <span
        v-for="numero in numeros"
        :key="numero"
        @click="puntuar(profesional.id, numero)"
        v-bind:class="puntajeClases(numero, puntajeTotal(profesional.id))"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Estrellas",
  props: {
    profesional: Object,
    puedePuntuar: Boolean,
    general: Boolean,
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
      let resultado;
      if (this.general) {
        resultado =
          this.$store.getters.getPuntajeTotalPorProfesional(profesionalId);
      } else {
        const mailUsuario = this.$auth.user.email;
        resultado = this.$store.getters.getVoto(profesionalId, mailUsuario);
      }
      return resultado;
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
