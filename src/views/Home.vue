<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <Saludo />
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
