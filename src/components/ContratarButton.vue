<template>
  <div>
    <div v-if="$auth.isAuthenticated">
      <button v-if="noEstaContratado" v-on:click="contratar()">
        Contratar
      </button>
      <div v-else>Profesional contratado</div>
    </div>
    <div v-else>
      Para poder contratar profesionales, primero debes loguearte
    </div>
  </div>
</template>

<script>
export default {
  name: "ContratarButton",
  props: {
    profesional: Object,
    email: String,
  },
  data() {
    return {
      noEstaContratado: false,
    };
  },
  methods: {
    async contratado() {
      this.noEstaContratado = true;
      const idContratado = this.profesional.id;
      const mailUsuario = this.email;
      const response = await fetch(
        "http://localhost:3000/api/v1/getContratado?mailUsuario=" +
          mailUsuario +
          "&idContratado=" +
          idContratado
      );
      const contratado = await response.json();
      if (contratado) {
        this.noEstaContratado = false;
      }
    },
    contratar() {
      if (this.$auth.user) {
        const requestOptions = {
          method: "POST",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify({
            profesional: this.profesional,
            profesionalId: this.profesional.id,
            mailUsuario: this.email,
          }),
          mode: "no-cors",
        };
        fetch("http://localhost:3000/api/v1/contratar", requestOptions);
        this.noEstaContratado = false;
      }
    },
  },
  created() {
    this.contratado();
  },
};
</script>
