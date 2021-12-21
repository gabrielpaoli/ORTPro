<template>
  <div id="app">
    <Navbar />
    <div id="container"><router-view /></div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Source Sans Pro", sans-serif;
  text-align: center;
  color: #2c3e50;
}

#container {
  min-height: 100%;
}
</style>
