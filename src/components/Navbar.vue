<template>
  <div id="nav" class="sticky-top">
    <b-navbar>
      <b-navbar-brand id="titulo">ORTPro</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="rutas">
          <b-nav-item to="/" class="nav-link">Inicio</b-nav-item>

          <b-nav-item to="/buscar-profesional" class="nav-link"
            >Buscar profesional</b-nav-item
          >
          <Login id="login" />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "Navbar",
  components: {
    Login,
  },
};
</script>

<style scoped>
#nav {
  background-color: #e4e4e4;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #5588c2;
}

#titulo {
  color: #a8201a;
  margin-left: 20px;
  font-size: 25px;
}

#rutas {
  display: flex;
  justify-items: center;
}
#login {
  margin-left: 300%;
}
</style>
