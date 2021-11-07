<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <Saludo />
    <Mapa />
    <Destacados />
  </div>
</template>

<script>
// @ is an alias to /src
import Saludo from "@/components/Saludo.vue";
import Mapa from "@/components/Mapa.vue";
import Destacados from "@/components/Destacados.vue";

export default {
  name: "Home",
  components: {
    Saludo,
    Mapa,
    Destacados,
  },
};
</script>
