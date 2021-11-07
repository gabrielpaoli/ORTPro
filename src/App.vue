<template>
  <div id="app">
    <Navbar />
    <div id="container"><router-view /></div>
    <Footer />
    <Footer2 />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Footer2 from "./components/Footer2.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Footer2,
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

#container {
  min-height: 800px;
}
</style>
