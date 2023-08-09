<script setup></script>

<template>
  <nav>
    <header
      class="w-full h-screen bg-no-repeat bg-cover"
      style="background-image: url('@/assets/img/backround.jpg')">
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="pt-[40px] h-40 w-40">
            <img src="@/assets/img/logo.png" alt="" />
          </div>
          <div class="flex items-center px-1">
            <nav
              id="nav-menu"
              class="hidden absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none xl:block xl:static xl:bg-transparent xl:max-w-full xl:rounded-none xl:shadow-none">
              <ul class="block lg:flex xl:flex">
                <li class="group">
                  <a
                    href="#home"
                    class="font-poppins text-white font-medium mx-8 group-hover:text-slate-400"
                    >Home
                  </a>
                </li>
                <li class="group">
                  <a
                    href="#our-product"
                    class="font-poppins text-white font-medium mx-8 group-hover:text-slate-400">
                    Our Product</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#about"
                    class="font-poppins text-white font-medium mx-8 group-hover:text-slate-400">
                    About</a
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
          </div>
        </div>
      </div>
      <!-- hero section start -->
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
    </header>
  </nav>
</template>
