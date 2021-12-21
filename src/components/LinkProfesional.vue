<template>
  <a class="btn btn-secondary" :href="profesional.link + profesional.id"
    >Ver perfil</a
  >
</template>

<script>
export default {
  name: "LinkProfesional",
  props: {
    profesional: Object,
  },
};
</script>

<style scoped>
a {
  color: white !important;
}
</style>
