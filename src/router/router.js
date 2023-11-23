import { createRouter, createWebHistory } from "vue-router";
import HomeView1 from "../components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView1,
    },
   
  ],
});

export default router;
