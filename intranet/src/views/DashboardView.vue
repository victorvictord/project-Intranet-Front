<template>
  <div>
    <h1>Bienvenido al Dashboard</h1>
    <button @click="logout">Salir</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem("token");
  router.push({ name: "Login" });
};
</script>
