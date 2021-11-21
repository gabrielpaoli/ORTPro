<template>
  <div v-if="!$auth.loading" class="buscarProfesional">
    <Buscador />
  </div>
</template>

<script>
import Buscador from "@/components/Buscador.vue";

export default {
  name: "BuscarProfesional",
  components: {
    Buscador,
  },
};
</script>
