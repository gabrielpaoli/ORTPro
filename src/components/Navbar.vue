<template>
  <!--<div id="nav" class="sticky-top">
    <b-navbar>
      <b-navbar-brand id="titulo">ORTPro</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="rutas">
          <b-nav-item align-h="end" to="/" class="nav-link">Inicio</b-nav-item>
          <b-nav-item to="/buscar-profesional" class="nav-link"
            >Buscar profesional</b-nav-item
          >
          <Login />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>-->

  <!--NAVBAR-->
  <nav class="navbar navbar-dark navbar-expand-md" id="app-navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="fa fa-life-ring" id="brand-logo"></i></a
      ><button
        data-toggle="collapse"
        class="navbar-toggler"
        data-target="#navcol-1"
      >
        <span class="sr-only">Toggle navigation</span
        ><span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navcol-1">
        <ul class="nav navbar-nav">
          <li class="nav-item" role="presentation">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" href="#">Services</a>
          </li>
        </ul>
        <ul class="nav navbar-nav ms-auto flex-row float-right">
          <li class="nav-item" role="presentation">
            <Login />
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
#brand-logo {
  font-size: 34px;
}

#app-navbar {
  background: #16222a;
  background: -webkit-linear-gradient(59deg, #3a6073, #16222a);
  background: linear-gradient(59deg, #3a6073, #16222a);
}
</style>
