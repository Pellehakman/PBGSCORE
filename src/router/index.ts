import Account from "@/views/Account/Account.vue";
import Home from "@/views/Home/Home.vue";
import Landing from "@/views/Landing/Landing.vue";
import Statistics from "@/views/Statistics/Statistics.vue";
import Teams from "@/views/Teams/Teams.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  linkActiveClass: "active-menu",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/statistics",
      name: "statistics",
      component: Statistics,
    },
    {
      path: "/teams",
      name: "teams",
      component: Teams,
    },
    {
      path: "/account",
      name: "account",
      component: Account,
    },
  ],
});

export default router;
