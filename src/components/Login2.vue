<template>
  <div v-if="!$auth.loading">
    <button
      type="button"
      class="btn btn-outline-primary"
      v-if="!$auth.isAuthenticated"
      @click="login"
    >
      Ingresar
    </button>

    <img width="30px" v-if="$auth.isAuthenticated" :src="getUserImage()" />
    <b-nav-item-dropdown :text="getUserName()" v-if="$auth.isAuthenticated">
      <b-dropdown-item href="/user_profile">Ver perfil</b-dropdown-item>
      <b-dropdown-item @click="logout" class="nav-link"
        >Log out</b-dropdown-item
      >
    </b-nav-item-dropdown>
  </div>
</template>

<script>
export default {
  name: "Login2",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    showConsoleLog() {
      console.log(this.$auth);
      console.log(this.$auth.user);
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

<style></style>
