import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
// import Detail from "../view/Detail.vue";
import DetailJoueur from "@/components/DetailJoueur";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:name/:id",
    name: "Detail",
    component: DetailJoueur
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
