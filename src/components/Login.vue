<template>
  <div v-if="!$auth.loading">
    <b-nav-item v-if="!$auth.isAuthenticated" @click="login" class="nav-link"
      >Sign in</b-nav-item
    >
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
