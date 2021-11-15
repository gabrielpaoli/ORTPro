import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BuscarProfesional from "../views/BuscarProfesional.vue";
import Perfil from "../views/Perfil.vue";
import UserProfile from "../views/UserProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buscar-profesional",
    name: "BuscarProfesional",
    component: BuscarProfesional,
  },
  {
    path: "/perfil/:id",
    name: "Perfil",
    component: Perfil,
  },
  {
    path: "/user_profile",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
