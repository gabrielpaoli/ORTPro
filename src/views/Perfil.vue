<template>
  <div class="perfil">
    <div>PAGINA DE PERFIL</div>
    <PerfilCard route="sasa" />
  </div>
</template>

<script>
// @ is an alias to /src
import PerfilCard from "@/components/PerfilCard.vue";

export default {
  name: "Perfil",
  components: {
    PerfilCard,
  },
};
</script>
