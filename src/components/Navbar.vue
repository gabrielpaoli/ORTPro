<template>
  <div id="navbar">
    <div id="logo">
      <a href="inicio"><img :src="logo" class="logo-img" /></a>
      <a href="inicio" class="logo-text">ORTPro</a>
    </div>
    <div id="rutas">
      <a :href="inicio">Inicio</a>
      <a :href="dashboard">Dashboard</a>
    </div>
    <div class="login"><Login /></div>
  </div>
</template>

<script>
import Login from "./Login.vue";
import logo from "../assets/logo2.png";
export default {
  name: "Navbar",
  data: function () {
    return {
      logo: logo,
      inicio: "/",
      dashboard: "/admin_profile", //cambiar ruta
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
  background-color: #dfdfdf;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
#rutas {
  display: flex;
}
#logo {
  display: flex;
  align-items: center;
}
.logo-img {
  margin-left: 30%;
  height: 60px;
  width: 60px;
}
.logo-text {
  font-size: 30px;
  font-family: "Secular One", sans-serif;
}
.login {
  margin-right: 2%;
}

a {
  margin-right: 30px;
  font-weight: 600;
  color: #66757f !important;
  text-decoration: none !important;
}
</style>
