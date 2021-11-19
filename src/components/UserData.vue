<template>
  <div>
    <div>Nombre: {{ getUserData.name }}</div>
    <div>Nickname: {{ getUserData.nickname }}</div>
    <div>Email: {{ getUserData.email }}</div>
    <div><img :src="getUserData.picture" /></div>
  </div>
</template>

<script>
export default {
  name: "UserData",
  computed: {
    getUserData() {
      return this.$auth.user;
    },
  },
};
</script>
