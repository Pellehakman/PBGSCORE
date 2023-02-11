import Landing from "@/views/Landing/Landing.vue";
import Statistics from "@/views/Statistics/Statistics.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    {
      path: "/statistics",
      name: "statistics",
      component: Statistics,
    },
  ],
});

export default router;
