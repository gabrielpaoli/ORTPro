<template>
  <div id="Home">
    <Saludo msg="Bienvenido a ORTPro" />
    <Mapa />
  </div>
</template>

<script>
// @ is an alias to /src
import Saludo from "@/components/Saludo.vue";
import Mapa from "@/components/Mapa.vue";

export default {
  name: "Home",
  components: {
    Saludo,
    Mapa,
  },
  };
</script>
