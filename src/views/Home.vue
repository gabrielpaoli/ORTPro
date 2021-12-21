<template>
  <div v-if="!$auth.loading" class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <Saludo />
    <Mapa />
    <Servicios />
    <!--<Destacados />-->
  </div>
</template>

<script>
import Saludo from "@/components/Saludo.vue";
import Mapa from "@/components/Mapa.vue";
import Servicios from "../components/Servicios.vue";
//import Destacados from "@/components/Destacados.vue";

export default {
  name: "Home",
  components: {
    Saludo,
    Mapa,
    Servicios,
    //Destacados,
  },
};
</script>
