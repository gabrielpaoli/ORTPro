<template>
  <div class="hello">
    <h1>{{ msgBienvenida }}</h1>
    <h4>{{ slogan }}</h4>
    <h6>{{ descripcion }}</h6>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      msgBienvenida: "Bienvenido!",
      slogan: "Conectamos necesidades con soluciones",
      descripcion:
        "Encontrá un profesional de manera rápida, confiable y segura",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
