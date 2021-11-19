<template>
  <a :href="profesional.profesional.link + profesional.profesional.id"
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
