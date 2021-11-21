<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <img :src="logo" class="logo2" />
          <p class="text-justify">
            ORTPro - Conectamos necesidades con soluciones.
          </p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Producto</h6>
          <ul class="footer-links">
            <li>
              <a>Política de privacidad</a>
            </li>
            <li>
              <a>Términos y condiciones</a>
            </li>
            <li>
              <a>Política de devolución</a>
            </li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Nosotros</h6>
          <ul class="footer-links">
            <li><a>Equipo</a></li>
            <li><a>Contacto</a></li>
            <li>
              <a>Nuestra historia</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy; 2021. Todos los derechos reservados por Grupo 9.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li>
              <a class="github" href="https://github.com/gabrielpaoli/ORTPro"
                ><i class="fa fa-github"></i
              ></a>
            </li>
            <li>
              <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a class="instagram" href="#"><i class="fa fa-instagram"></i></a>
            </li>
            <li>
              <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../assets/logo2.png";
export default {
  name: "Footer",
  data: function () {
    return {
      logo: Logo,
    };
  },
};
</script>

<style scoped>
.site-footer {
  background-color: #293241;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #cacaca;
}
.site-footer hr {
  border-top-color: rgb(255, 255, 255);
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
  text-align: left;
}
.site-footer a {
  color: #cacaca;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
  text-align: left;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #cacaca;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #cacaca;
  color: #cacaca;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.github:hover {
  background-color: #9c3cb9;
}
.social-icons a.instagram:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
.logo2 {
  width: 75px;
  height: 75px;
}
</style>
