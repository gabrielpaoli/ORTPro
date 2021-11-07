<template>
  <div class="userData">
    <div>Nombre: {{ getUserData().name }}</div>
    <div>{{ getUserData().nickname }}</div>
    <div>{{ getUserData().email }}</div>
    <div><img :src="getUserData().picture" /></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    getUserData() {
      console.log(this.$auth.user);
      return this.$auth.user;
    },
  },
};
</script>
