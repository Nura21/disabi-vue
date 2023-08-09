<script setup>
import { RouterLink } from "vue-router";
import NavigationLinks from "../layouts/NavigationLinks.vue";
import Logo from "../layouts/Logo.vue";
</script>

<template>
  <header>
    <div class="background-container w-full h-screen">
      <div class="container">
        <div class="flex items-center justify-between relative">
          <Logo />
          <div class="flex items-center px-1">
            <NavigationLinks />
          </div>
        </div>
      </div>
      <section id="home" class="pt-20">
        <div class="container">
          <div class="flex flex-wrap">
            <div class="w-full self-start px-4 xl:w-1/2">
              <h1
                class="text-white text-[40px] font-bold font-poppins tracking-normal leading-normal">
                We will help you to give .
              </h1>
              <p class="font-poppins font-normal text-secondary pt-[30px]">
                Find our Your best program that might fit your ipsum int the
                world.
              </p>
              <div class="pt-[25px]">
                <button
                  href=""
                  class="py-3 px-4 font-poppins text-white font-semibold text-base rounded-xl shadow-sm bg-primary tracking-normal">
                  Get Started
                </button>
              </div>
            </div>
            <div class="w-full self-end px-8 xl:w-1/2">
              <div class="mt-5">
                <img
                  src="@/assets/img/hero.png"
                  alt="hero disabi"
                  class="h-72 w-60 max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
</template>

<style>
.background-container {
  background-image: url("@/assets/img/backround.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
