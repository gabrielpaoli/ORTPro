<template>
  <div id="navbar">
    <h4>ORTPro</h4>
    <div id="centro">
      <p>Inicio</p>
      <p>Buscar profesional</p>
    </div>

    <Login2 />
  </div>
</template>

<script>
import Login2 from "./Login2.vue";
import Login from "./Login.vue";
export default {
  name: "Navbar",
  components: {
    Login2,
  },
};
Login;
</script>

<style>
#navbar {
  display: flex;
  background-color: floralwhite;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
#centro {
  display: flex;
}
h4 {
  margin-left: 20px;
}
p {
  margin: 20px;
}
</style>
