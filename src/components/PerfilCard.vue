<template>
  <div class="perfilCard">
    <div class="dataField"><b>Nombre: </b>{{ nombre }}</div>
    <div class="dataField"><b>Profesion: </b>{{ profesion }}</div>
    <div class="dataField"><img :src="imageUrl" /></div>
  </div>
</template>

<script>
export default {
  name: "PerfilCard",
  data() {
    return {
      loading: false,
      nombre: null,
      profesion: null,
      imageUrl: null,
    };
  },
  async created() {
    const id = this.$route.params.id;
    this.loading = true;
    const response = await fetch("http://localhost:3000/api/v1/profiles/" + id);
    const data = await response.json();
    const profileData = data.persona[0];
    this.nombre = profileData.nombre;
    this.profesion = profileData.profesion;
    this.imageUrl = profileData.imageUrl;
    this.loading = false;
  },
};
</script>

<style scoped>
.perfilCard {
  margin-top: 20px;
}
</style>
