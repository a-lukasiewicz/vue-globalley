import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    name: "Details",
    component: import(/* webpackChunkName: "details" */ "../views/Details.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: import(/* webpackChunkName: "Explore" */ "../views/Explore.vue"),
  },
  {
    path: "/random",
    name: "Random",
    component: import(/* webpackChunkName: "Random" */ "../views/Random.vue"),
  },
  {
    path: "/aboutUs",
    name: "AboutUs",
    component: import(/* webpackChunkName: "AboutUs" */ "../views/AboutUs.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
