<template>
  <div v-if="!$auth.loading" class="perfil">
    <PerfilCard />
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
