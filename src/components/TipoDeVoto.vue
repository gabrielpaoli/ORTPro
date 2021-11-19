<template>
  <div>
    <b>Sin voto:</b>
    {{ tipoDeVoto(profesional.profesional.id).sinVoto }}
    <br />
    <b>1 voto:</b>
    {{ tipoDeVoto(profesional.profesional.id).voto1 }}
    <br />
    <b>2 votos:</b>
    {{ tipoDeVoto(profesional.profesional.id).voto2 }}
    <br />
    <b>3 votos:</b>
    {{ tipoDeVoto(profesional.profesional.id).voto3 }}
    <br />
    <b>4 votos:</b>
    {{ tipoDeVoto(profesional.profesional.id).voto4 }}
    <br />
    <b>5 votos:</b>
    {{ tipoDeVoto(profesional.profesional.id).voto5 }}
    <br />
  </div>
</template>

<script>
export default {
  name: "TipoDeVoto",
  props: {
    profesional: Object,
  },
  methods: {
    tipoDeVoto(profesionalId) {
      return this.$store.getters.getTipoDeVotoPorProfesional(profesionalId);
    },
  },
};
</script>
