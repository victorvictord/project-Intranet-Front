import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

// Simulación de autenticación (lo ideal es leer de un store como Pinia o Vuex)
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: { requiresAuth: true }, // 🔒 protegida
  },
  {
    path: "/kanban",
    name: "Kanban",
    component: () => import("../components/Kanban.vue"),
    meta: { requiresAuth: true }, // 🔒 protegida
  },
  {
    path: "/",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard Global
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
