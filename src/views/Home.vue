<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <Saludo msg="Bienvenido a ORTPro" />
  </div>
</template>

<script>
// @ is an alias to /src
import Saludo from "@/components/Saludo.vue";

export default {
  name: "Home",
  components: {
    Saludo,
  },
};
</script>
