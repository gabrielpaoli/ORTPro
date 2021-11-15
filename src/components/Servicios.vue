<template>
  <div id="carousel">
    <h2>¿Qué ofrecen los profesionales de ORTPro?</h2>
    <b-carousel
      id="carousel-fade"
      v-model="slide"
      :interval="3000"
      indicators="True"
      controls
      label-next=""
      label-prev=""
      fade
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide
        caption="Servicio de Plomería"
        img-src="https://static.wixstatic.com/media/2c239b3714724b7287ff66dbbdb41ca9.jpg/v1/fill/w_1024,h_480,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/2c239b3714724b7287ff66dbbdb41ca9.webp"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Clases de inglés"
        img-src="http://blogs.ubc.ca/tutor/files/2020/04/College-destress-1-1024x480.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Sesiones de masajes"
        img-src="https://winonamassagecenter.com/wp-content/uploads/2021/03/20210315161452-1024x480.png"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Servicio técnico de PC"
        img-src="https://bptechs.in/images/chip-repair.png"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Servicios",

  methods: {
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    },
  },
};
</script>
<style scoped>
#carousel {
  margin-left: 400px;
  margin-right: 400px;
  margin-bottom: 100px;
  margin-top: 100px;
}
</style>
