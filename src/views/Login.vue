

<template>
  <div class="Login">
      <div>Pagina de login</div>
      <Nav />
      <router-view />
  </div>
</template>

<script>
import Nav from '@/components/partials/Nav.vue';

export default {
  name: "Login",
  components: {
   Nav,
  },
};
</script>
