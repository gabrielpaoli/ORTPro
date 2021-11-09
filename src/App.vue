<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"
    />
    <Navbar />
    <Navbar2 />
    <div id="container"><router-view /></div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Navbar2 from "./components/Navbar2.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Navbar2,
  },
};
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #292f33;
}

#container {
  min-height: 800px;
}
</style>
