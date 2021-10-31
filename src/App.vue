<template>
  <div id="app">
    <Navbar />
    <div id="container"><router-view /></div>
    <div id="footer">Cosas del footer</div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer {
  bottom: 0;
  background: blue;
  width: 100%;
  color: white;
}

#container {
  min-height: 800px;
}
</style>
