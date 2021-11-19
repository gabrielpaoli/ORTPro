<template>
  <div>
    <div v-if="$auth.isAuthenticated">
      <button v-if="noEstaContratado()" v-on:click="contratar">
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
  },
  methods: {
    noEstaContratado() {
      let acceso = true;
      const idContratado = this.profesional.id;
      const mailUsuario = this.$auth.user.email;
      const contratado = this.$store.getters.getContratado(
        idContratado,
        mailUsuario
      );
      if (contratado) {
        acceso = false;
      }
      return acceso;
    },
    contratar() {
      if (this.$auth.user) {
        const profesional = this.profesional;
        const idContratado = this.profesional.id;
        const mailUsuario = this.$auth.user.email;
        this.$store.commit("contratar", {
          idContratado,
          mailUsuario,
          profesional,
        });
      }
    },
  },
};
</script>
