<template>
  <div class="Estrellas">
    <div class="dataField">
      <b>Puntuacion: </b>
      <span
        v-for="numero in numeros"
        :key="numero"
        @click="puntuar(profesional.id, numero)"
        v-bind:class="puntajeClases(numero, puntaje)"
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
    email: String,
  },
  methods: {
    puntuar(profesionalId, puntaje) {
      if (this.puedePuntuar) {
        const mailUsuario = this.$auth.user.email;
        const requestOptions = {
          method: "POST",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify({
            puntaje: puntaje,
            profesionalId: profesionalId,
            mailUsuario: mailUsuario,
          }),
          mode: "no-cors",
        };
        fetch("http://localhost:3000/api/v1/puntuar", requestOptions);
        this.$emit("updatePuntaje");
      }
    },
    puntajeClases(numero, puntaje) {
      let checked = "";
      if (numero <= puntaje) {
        checked = "checked";
      }
      return "fa fa-star " + checked;
    },
    async getVoto() {
      const response = await fetch(
        "http://localhost:3000/api/v1/getVoto?mailUsuario=" +
          this.email +
          "&profesionalId=" +
          this.profesional.id
      );
      const data = await response.json();
      this.puntaje = data.voto;
    },
    async getVotosTotal() {
      const response = await fetch(
        "http://localhost:3000/api/v1/getVotosTotal?profesionalId=" +
          this.profesional.id
      );
      const data = await response.json();
      this.puntaje = data;
    },
  },
  data() {
    return {
      numeros: [1, 2, 3, 4, 5],
      puntaje: 0,
    };
  },
  async created() {
    if (this.general) {
      this.getVotosTotal();
    } else {
      this.getVoto();
    }
  },
};
</script>

<style scoped>
.perfilCard {
  margin-top: 20px;
}
.checked {
  color: orange;
}
</style>
