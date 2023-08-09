<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    id="nav-menu"
    class="hidden absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none xl:block xl:static xl:bg-transparent xl:max-w-full xl:rounded-none xl:shadow-none">
    <ul class="block lg:flex xl:flex">
      <li class="group">
        <RouterLink
          to="/home"
          class="font-poppins text-white font-medium mx-8 group-hover:text-slate-400"
          >Home
        </RouterLink>
      </li>
      <li class="group">
        <RouterLink
          to="/our-product"
          class="font-poppins text-white font-medium mx-8 group-hover:text-slate-400">
          Our Product</RouterLink
        >
      </li>
      <li class="group">
        <RouterLink
          to="/about"
          class="font-poppins text-white font-medium mx-8 group-hover:text-slate-400">
          About</RouterLink
        >
      </li>
      <li class="group -mt-3 px-9" />
      <button
        href=""
        class="py-3 px-4 font-poppins text-white font-semibold text-base rounded-xl shadow-sm bg-primary tracking-normal">
        Donate Now
      </button>
    </ul>
  </nav>
</template>
