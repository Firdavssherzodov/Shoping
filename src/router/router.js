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
    {
      path: "/korzinka",
      name: "savat",
      component: () => import("../QoshimchaPage.vue/Korzinka.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../user/User.vue"),
    },
    {
      path: "/search",
      name: "seach",
      component: () => import("../QoshimchaPage.vue/Qidiruv.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../QoshimchaPage.vue/Like.vue"),
    },
  ],
});

export default router;
