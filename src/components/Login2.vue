<template>
  <div v-if="!$auth.loading">
    <p v-if="!$auth.isAuthenticated" @click="login">Sign in</p>
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
