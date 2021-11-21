<template>
  <div class="hello">
    <header class="masthead">
      <div class="container-fluid position-relative">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div class="text-center text-white">
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
  data: function () {
    return {
      msgBienvenida: "¡Bienvenido a ORTPro!",
      slogan: "Conectamos necesidades con soluciones",
      descripcion:
        "Encontrá un profesional de manera rápida, confiable y segura",
    };
  },
};
</script>

<style scoped>
header.masthead {
  position: relative;
  background-color: #343a40;
  background: url("https://policyoptions.irpp.org/wp-content/uploads/sites/2/2019/03/WordPress-Image-1.jpg")
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
