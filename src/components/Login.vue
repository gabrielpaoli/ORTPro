<template>
  <div v-if="!$auth.loading">
    <button v-if="!$auth.isAuthenticated" @click="login">Ingresar</button>

    <img class="user-img" v-if="$auth.isAuthenticated" :src="getUserImage()" />

    <b-dropdown
      id="dropdown-1"
      :text="getUserName()"
      v-if="$auth.isAuthenticated"
      class="m-md-2"
      right
      variant="transparent"
    >
      <b-dropdown-item href="/user_profile">Ver perfil</b-dropdown-item>
      <b-dropdown-item @click="logout">Log out</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      //sessionStorage.clear();
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    getUserImage() {
      return this.$auth.user.picture;
    },
    getUserName() {
      return this.$auth.user.given_name;
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
}
.user-img {
  height: 35px;
  width: 35px;
}
</style>
