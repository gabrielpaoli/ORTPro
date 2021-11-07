<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div id="navbar" class="navbar-menu">
      <div class="navbar-item mx-auto">
        <div class="buttons">
          <div v-if="!$auth.loading">
            <a
              v-if="!$auth.isAuthenticated"
              @click="login"
              class="button is-dark"
              ><strong>Sign in</strong></a
            >
            <button v-on:click="showConsoleLog()">sasa</button>
            <a
              v-if="$auth.isAuthenticated"
              @click="logout"
              class="button is-dark"
              ><strong>Log out</strong></a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
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
  },
};
</script>
