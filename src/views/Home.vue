<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <Saludo />
    <Mapa />
    <Servicios />
  </div>
</template>

<script>
// @ is an alias to /src
import Saludo from "@/components/Saludo.vue";
import Mapa from "@/components/Mapa.vue";
import Servicios from "@/components/Servicios.vue";

export default {
  name: "Home",
  components: {
    Saludo,
    Mapa,
    Servicios,
  },
};
</script>
