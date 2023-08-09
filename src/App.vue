<script setup>
import { RouterLink, RouterView } from "vue-router";
import "@/assets/css/styles.css";
import LandingPage from "./views/LandingPageView.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <LandingPage />
    </div>
    <RouterView />
  </header>
</template>
