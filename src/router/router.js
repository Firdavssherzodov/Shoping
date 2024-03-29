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
      path: "/users",
      name: "user",
      component: () => import("../user/Users.vue"),
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
    {
      path: "/Siginup",
      name: "registration",
      component: () => import("../Registertion/Siginup.vue"),
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../Registertion/Login.vue"),
    },
    {
      path: "/adminHome",
      name: "admin",
      component: () => import("../Admin.vue"),
    },
    {
      path: "/addProduct",
      name: "addProduct",
      component: () => import("../admin/addProducts.vue"),
    },
    {
      path:'/updateProduct/:id',
      name: "updateProduct",
      component: () => import("../admin/productUpdate.vue"),
    }
  ],
});

export default router;
