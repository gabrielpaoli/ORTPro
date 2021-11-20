<template>
  <div>
    <b>Sin voto:</b>
    {{ tipoDeVoto(profesional.id).sinVoto }}
    <br />
    <b>1 voto:</b>
    {{ tipoDeVoto(profesional.id).voto1 }}
    <br />
    <b>2 votos:</b>
    {{ tipoDeVoto(profesional.id).voto2 }}
    <br />
    <b>3 votos:</b>
    {{ tipoDeVoto(profesional.id).voto3 }}
    <br />
    <b>4 votos:</b>
    {{ tipoDeVoto(profesional.id).voto4 }}
    <br />
    <b>5 votos:</b>
    {{ tipoDeVoto(profesional.id).voto5 }}
    <br />
  </div>
</template>

<script>
export default {
  name: "TipoDeVoto",
  props: {
    profesional: Object,
    profesionales: Array,
  },
  methods: {
    tipoDeVoto(profesionalId) {
      const profesionales = this.profesionales.filter(
        (p) => p.profesional.id === profesionalId
      );
      let votoTotal = [];
      let tipoDeVoto = {};
      profesionales.forEach(function (element) {
        votoTotal.push(element.voto);
      });

      tipoDeVoto.sinVoto = votoTotal.filter((x) => x == 0).length;
      tipoDeVoto.voto1 = votoTotal.filter((x) => x == 1).length;
      tipoDeVoto.voto2 = votoTotal.filter((x) => x == 2).length;
      tipoDeVoto.voto3 = votoTotal.filter((x) => x == 3).length;
      tipoDeVoto.voto4 = votoTotal.filter((x) => x == 4).length;
      tipoDeVoto.voto5 = votoTotal.filter((x) => x == 5).length;

      return tipoDeVoto;
    },
  },
};
</script>
