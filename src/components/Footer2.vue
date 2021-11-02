<template>
  <div class="footer2">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-collapse id="nav-text-collapse" is-nav>
        <div>
          <b-navbar-nav>
            <b-nav-text>TUPRO</b-nav-text>
          </b-navbar-nav>
        </div>

        <div>
          <b-navbar-nav>
            <b-nav-text>REDES</b-nav-text>
          </b-navbar-nav>
        </div>

        <div>
          <b-navbar-nav>
            <b-nav-text>PRODUCTO</b-nav-text>
          </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Footer2",
};
</script>

<style scoped>
#titulo {
  color: darkred;
}
</style>
