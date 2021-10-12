import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";
import Game from "@/views/Game.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }, {
    path: "/login",
    name: "Login",
    component: () => import('@/views/Login.vue'),
  }, {
    path: "/register",
    name: "Register",
    component: () => import('@/views/Register.vue'),
  }, {
    path: "/game",
    name: "Game",
    component: Game,
  }, {
    path: "/character",
    name: "Character",
    component: () => import('@/views/Character.vue'),
  }, {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
