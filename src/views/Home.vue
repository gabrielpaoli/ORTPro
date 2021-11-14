<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <img :src="logo" />
    <Saludo />
    <Mapa />
    <Servicios />
    <Destacados />
  </div>
</template>

<script>
// @ is an alias to /src
import Saludo from "@/components/Saludo.vue";
import Mapa from "@/components/Mapa.vue";
import Servicios from "@/components/Servicios.vue";
import Logo from "../assets/logo.png";
import Destacados from "@/components/Destacados.vue";

export default {
  name: "Home",
  data: function () {
    return {
      logo: Logo,
    };
  },
  components: {
    Saludo,
    Mapa,
    Servicios,
    Destacados,
  },
};
</script>
