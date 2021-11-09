<template>
  <div id="footer">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <hr
      style="
        height: 5px;
        border-width: 0;
        color: black;
        background-color: black;
      "
    />
    <div id="titulo">
      <h5>ORTPro</h5>
      <p>Conectamos necesidades con soluciones</p>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-youtube"></a>
    </div>

    <div id="titulo">
      <h5 id="menu">Producto</h5>
      <p>Política de privacidad</p>
      <p>Términos y condiciones</p>
      <p>Política de devolución</p>
    </div>
    <div id="titulo">
      <h5 id="menu">Nosotros</h5>
      <p>Equipo</p>
      <p>Contacto</p>
      <p>Nuestra historia</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#footer {
  display: flex;
  background: #66757f;
  color: #e1e8ed;
}
#titulo {
  margin: auto;
  margin-top: 13px;
}
h5 {
  margin-bottom: 1.6rem;
}
p {
  text-align: left;
  font-size: 15px;
}
a {
  margin: 5px;
}
#menu {
  text-align: left;
}
.fa {
  padding: 17px;
  width: 50px;
  height: 50px;
  text-decoration: none;
  border-radius: 50%;
}
.fa:hover {
  opacity: 0.4;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}

.fa-instagram {
  background: #125688;
  color: white;
}
</style>
