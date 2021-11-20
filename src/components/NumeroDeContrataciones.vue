<template>
  <td>{{ numeroDeContrataciones(profesional.id) }}</td>
</template>

<script>
export default {
  name: "NumeroDeContrataciones",
  props: {
    profesional: Object,
    profesionales: Array,
  },
  methods: {
    numeroDeContrataciones(profesionalId) {
      return this.profesionales.filter((p) => p.id === profesionalId).length;
    },
  },
};
</script>
