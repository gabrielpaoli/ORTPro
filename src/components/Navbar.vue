<template>
  <div id="navbar">
    <a :href="inicio"><img :src="logo" class="logo" :href="inicio" /></a>
    <div id="centro">
      <a :href="inicio">Inicio</a>
      <a :href="buscarProfesional">Buscar profesional</a>
    </div>
    <div class="login"><Login /></div>
  </div>
</template>

<script>
import Login from "./Login.vue";
import logo from "../assets/logo.png";
export default {
  name: "Navbar",
  data: function () {
    return {
      logo: logo,
      inicio: "/",
      buscarProfesional: "/buscar-profesional",
    };
  },
  components: {
    Login,
  },
};
Login;
</script>

<style>
#navbar {
  display: flex;
  background-color: #ccd6dd;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
#centro {
  display: flex;
}
img.logo {
  margin-left: 1%;
  margin: left;
  width: 140px;
  height: 50px;
}
#login {
  margin-right: 10%;
}
p {
  margin: 20px;
}
a {
  font-weight: 600;
  color: #66757f !important;
  text-decoration: none !important;
}
</style>
