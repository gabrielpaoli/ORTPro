<template>
  <div>
    <b>Sin voto:</b>
    {{ profesional.sinVoto }}
    <br />
    <b>1 voto:</b>
    {{ profesional.voto1 }}
    <br />
    <b>2 votos:</b>
    {{ profesional.voto2 }}
    <br />
    <b>3 votos:</b>
    {{ profesional.voto3 }}
    <br />
    <b>4 votos:</b>
    {{ profesional.voto4 }}
    <br />
    <b>5 votos:</b>
    {{ profesional.voto5 }}
    <br />
  </div>
</template>

<script>
export default {
  name: "TipoDeVoto",
  props: {
    profesional: Object,
  },
};
</script>
