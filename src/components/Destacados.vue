<template>
  <div class="destacados">
    <div v-for="(destacado, index) in destacados" :key="index">
      {{ destacado.servicio }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Destacados",
  data() {
    return {
      destacados: [
        //AGREGAR PATH DE IMAGENES
        { servicio: "Plomería", img: "path.jpg" },
        { servicio: "Clases de inglés", img: "path.jpg" },
        { servicio: "Reparación de PC", img: "path.jpg" },
        { servicio: "Masajista", img: "path.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.destacados {
  display: flex;
  justify-content: center;
}
</style>
