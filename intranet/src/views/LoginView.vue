<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Ingresar</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
  localStorage.setItem("token", "123456"); // simula autenticación
  router.push({ name: "Dashboard" });
};
</script>
