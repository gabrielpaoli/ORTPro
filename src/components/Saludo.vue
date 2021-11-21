<template>
  <div class="hello">
    <header class="masthead">
      <div class="container-fluid position-relative">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div class="text-center text-white">
              <!-- Page heading-->
              <h1 class="mb-1">{{ msgBienvenida }}</h1>
              <h1 class="mb-5">{{ slogan }}</h1>
              <p>
                {{ descripcion }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      msgBienvenida: "Bienvenido a ORTPro",
      slogan: "Conectamos problemas con soluciones",
      descripcion:
        "Encontrá un profesional de manera rápida, confiable y segura",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header.masthead {
  position: relative;
  background-color: #343a40;
  background: url("http://www.revistavivienda.com.ar/wp-content/uploads/Screen-Shot-2014-06-17-at-2.23.23-PM.png")
    no-repeat center center;
  background-size: cover;
  padding-top: 8rem;
  padding-bottom: 8rem;
}
header.masthead:before {
  content: "";
  position: absolute;
  background-color: #1c375e;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.5;
}
</style>
