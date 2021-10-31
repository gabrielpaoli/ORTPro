<template>
  <div id="nav">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand id="titulo">TUPRO</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" class="nav-link">Inicio</b-nav-item>
          <b-nav-item to="/buscar-profesional" class="nav-link"
            >Buscar profesional</b-nav-item
          >
          <b-nav-item to="/login" class="nav-link">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#titulo {
  color: darkred;
}
</style>
