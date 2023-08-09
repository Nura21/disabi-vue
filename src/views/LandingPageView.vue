<script setup>

<template>
    <header class="w-full h-screen bg-no-repeat bg-cover" style="background-image: url('./assets/img/backround.jpg')">
    <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="pt-[40px] h-40 w-40">
            <img src="./assets/img/logo.png" alt="" />
          </div>
          <div class="flex items-center px-1">
            <nav id="nav-menu"
              class="hidden absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none xl:block xl:static xl:bg-transparent xl:max-w-full xl:rounded-none xl:shadow-none ">
              <ul class="block lg:flex xl:flex">
                <li class="group">
                  <a href="#home" class="font-poppins text-white font-medium  mx-8 group-hover:text-slate-400">Home
                  </a>
                </li>
                <li class="group">
                  <a href="#our-product" class="font-poppins text-white font-medium mx-8 group-hover:text-slate-400">
                    Our Product</a>
                </li>
                <li class="group">
                  <a href="#about" class="font-poppins text-white font-medium mx-8 group-hover:text-slate-400">
                    About</a>
                </li>
                <li class="group -mt-3 px-9" />
                <button href=""
                  class="py-3 px-4 font-poppins text-white font-semibold text-base rounded-xl shadow-sm bg-primary tracking-normal">Donate
                  Now
                </button>
              </ul>
            </nav>
          </div>
        </div>

        <section id="home" class="pt-20">
          <div class="container">
            <div class="flex flex-wrap">
              <div class="w-full self-start px-4 xl:w-1/2">
                <h1 class="text-white text-[40px] font-bold font-poppins tracking-normal leading-normal">We will help you
                  to
                  give
                  .</h1>
                <p class="font-poppins font-normal text-secondary pt-[30px]">Find our Your best program that might fit
                  your ipsum int
                  the world.
                </p>
                <div class="pt-[25px]">
                  <button href=""
                    class="py-3 px-4 font-poppins text-white font-semibold text-base rounded-xl shadow-sm bg-primary tracking-normal">Get
                    Started
                  </button>
                </div>
              </div>
              <div class="w-full self-end px-8 xl:w-1/2">
                <div class="mt-5">
                  <img src="./assets/img/hero.png" alt="hero disabi" class="h-72 w-60 max-w-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>

    <section id="product" class="pt-20">
      <div class="container">
        <h1 class="text-[32px] px-8 text-primary font-poppins font-bold">NEWEST</h1>
        <div class="grid">
          <div class="flex flex-wrap">

            <div class="w-full pt-5 xl:w-1/2">
              <h3 class="pt-3 px-8 font-poppins font-semibold text-gray">Disabilitas dan di fabel berbeda</h3>
              <p class="pt-3 px-8 font-poppins font-normal text-slale-400 text-justify">kedengarannya sama namun
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum nihil odio asperiores nam dolores,
                illo
                ratione, reprehenderit ipsa culpa vel fugiat quo qui quae vero iure eos doloribus fugit?</p>
              <p class="px-8 mt-4 font-poppins">01 januari 2023</p>
            </div>
            <div class="w-full px-4 xl:w-1/2">
              <img src="./assets/img/item.png" alt="hero disabi" class="mt-10 w-40 h-32 max-w-full" />
            </div>

            <div class="w-full pt-5 xl:w-1/2">
              <h3 class="pt-3 px-8 font-poppins font-semibold text-gray">Disabilitas dan di fabel berbeda</h3>
              <p class="pt-3 px-8 font-poppins font-normal text-slale-400 text-justify">kedengarannya sama namun
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum nihil odio asperiores nam dolores,
                illo
                ratione, reprehenderit ipsa culpa vel fugiat quo qui quae vero iure eos doloribus fugit?</p>
              <p class="px-8 mt-4 font-poppins">01 januari 2023</p>
            </div>
            <div class="w-full px-4 xl:w-1/2">
              <img src="./assets/img/item.png" alt="hero disabi" class="mt-10 w-40 h-32 max-w-full" />
            </div>

            <div class="w-full pt-5 xl:w-1/2">
              <h3 class="pt-3 px-8 font-poppins font-semibold text-gray">Disabilitas dan di fabel berbeda</h3>
              <p class="pt-3 px-8 font-poppins font-normal text-slale-400 text-justify">kedengarannya sama namun
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum nihil odio asperiores nam dolores,
                illo
                ratione, reprehenderit ipsa culpa vel fugiat quo qui quae vero iure eos doloribus fugit?</p>
              <p class="px-8 mt-4 font-poppins">01 januari 2023</p>
            </div>
            <div class="w-full px-4 xl:w-1/2">
              <img src="./assets/img/item.png" alt="hero disabi" class="mt-10 w-40 h-32 max-w-full" />
            </div>

            <div class="mt-5 px-8">
              <button href=""
                class="py-2 px-48 font-poppins text-white font-semibold text-base rounded-xl shadow-sm bg-primary tracking-normal">
                See More
              </button>
            </div>
          </div>
          <div class=" col-end-7">
            <div class="w-64 h-72 mt-4 bg-primary font-poppins pt-10 px-4 rounded-lg text-center shadow-md ">
              <h2 class="font-poppins font-bold text-white ">Donasi untuk mendukung Disabi!</h2>
              <button href=""
                class=" mt-28 py-3 px-6  font-poppins text-primary font-semibold text-base rounded-xl shadow-sm bg-white tracking-normal">
                Donasi Sekarang
              </button>
            </div>
            <div class="mt-5 w-64 h-72  bg-primary font-poppins pt-10 rounded-lg text-center shadow-md ">
              <h2 class="font-poppins font-bold text-white ">Join komunitas kami di telegram!</h2>
              <button href=""
                class=" mt-28 py-3 px-6  font-poppins text-primary font-semibold text-base rounded-xl shadow-sm bg-white tracking-normal">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="mt-20 max-w-full h-[450px] bg-gray font-poppins pt-10 px-4 rounded-lg shadow-md">
          <h1 class="text-[32px] px-8 text-white font-poppins font-bold">About</h1>
        </div>
      </div>
    </section>

    <section>
      <div class="mt-10 max-w-full h-[300px] bg-gray-dark">
        <div class="container">
          <div class="pt-[40px] h-40 w-40 ">
            <img src="./assets/img/logo.png" alt="logo disabi" />
          </div>
          <div class="grid-flow-row">

            <div class="flex pt-2">
              <img src="./assets/img/icon phone.png" alt="" class="item-center " />
              <div>
                <P class="font-poppins text-white items-center mt-2 px-2">+62 857 7332 2129</P>
              </div>
            </div>
            <div class="flex mt-4">
              <img src="./assets/img/icon email.png" alt="" class="item-center " />
              <div>
                <P class="font-poppins text-white items-center mt-2 px-2">disabi@gmail.com</P>
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse -mt-[75px]">
            <img src="./assets/img/Telegram App.png" alt="" />
            <img class="mx-5" src="./assets/img/Instagram Circle.png" alt="" />
            <img src="./assets/img/LinkedIn.png" alt="" />
          </div>
        </div>
      </div>
    </section>
</template>
