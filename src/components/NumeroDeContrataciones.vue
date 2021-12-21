<template>
  <td>{{ profesional.numeroDeContrataciones }}</td>
</template>

<script>
export default {
  name: "NumeroDeContrataciones",
  props: {
    profesional: Object,
  },
};
</script>
