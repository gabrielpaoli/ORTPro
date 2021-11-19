<template>
  <td>{{ numeroDeContrataciones(profesional.profesional.id) }}</td>
</template>

<script>
export default {
  name: "NumeroDeContrataciones",
  props: {
    profesional: Object,
  },
  methods: {
    numeroDeContrataciones(profesionalId) {
      return this.$store.getters.getCantidadDeContrataciones(profesionalId);
    },
  },
};
</script>
