import Vue from "vue";
import VueRouter from "vue-router";
import Bike from "../views/Bike.vue";
import Route from "../views/Route.vue";
import Attraction from "../views/Attraction.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Bike",
    component: Bike,
  },
  {
    path: "/route",
    name: "Route",
    component: Route,
  },
  {
    path: "/attraction",
    name: "Attraction",
    component: Attraction,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
