<template>
  <section class="showcase">
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div
          class="col-lg-6 order-lg-2 text-white showcase-img"
          style="
            background-image: url('https://caescooperativa.es/wp-content/uploads/2021/07/PLANOS-PARA-OBRA-CIVIL-DESTACADO-1.png');
          "
        ></div>
        <h1>¿Qué tenemos para ofrecerte?</h1>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Multiplicidad de servicios</h2>
          <p class="lead mb-0">
            La plataforma cuenta con una alta variedad de servicios y
            profesionales a disposición.
          </p>
        </div>
      </div>
      <div class="row g-0">
        <div
          class="col-lg-6 text-white showcase-img"
          style="
            background-image: url('https://media.istockphoto.com/photos/business-contract-signing-picture-id1206219776?k=20&m=1206219776&s=612x612&w=0&h=AxefHzhXDdJvPe6PZ2j1fL4VNfJEdOPRbdn8D6rL-Fo=');
          "
        ></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Contratación sin intermediarios</h2>
          <p class="lead mb-0">
            Acordá con los profesionales directamente, sin intervención de
            terceros.
          </p>
        </div>
      </div>
      <div class="row g-0">
        <div
          class="col-lg-6 order-lg-2 text-white showcase-img"
          style="
            background-image: url('https://media.istockphoto.com/photos/woman-hand-typing-in-the-mobile-outside-picture-id1098278352?k=20&m=1098278352&s=612x612&w=0&h=ZbpSTqrk5WTGmu5gtmAob1D7Eb-YF7gPbE7qJkQ3KVc=');
          "
        ></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Rápida y sencilla de usar</h2>
          <p class="lead mb-0">Interfaz y buscadores rápidos y amigables.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "servicios",
};
</script>
<style scoped>
.showcase {
  margin-top: 4%;
  margin-bottom: 4%;
}
h1 {
  margin-bottom: 3%;
}
.showcase .showcase-text {
  padding: 3rem;
}
.showcase .showcase-img {
  min-height: 30rem;
  background-size: cover;
}
</style>
