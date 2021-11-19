import Vue from "vue";
import VueRouter from "vue-router";
import Idx from "../views/Idx.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Idx",
    component: Idx,
  },
  {
    path: "/about",
    name: "About",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
