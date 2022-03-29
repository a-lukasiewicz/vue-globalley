<template>
  <div id="hero-background">
    <div class="container flex flex-col items-center py-8 mx-auto sm:py-24">
      <div class="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
        <h1 class="text-2xl font-black leading-7 text-center text-gray-100 animate__animated animate__bounce sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
          Get latest information <br />
          about our World
        </h1>
        <p class="mt-5 text-sm font-normal text-center text-gray-200 sm:mt-10 lg:w-10/12 sm:text-lg">A professonal website offers details about population, pandemic situation and more!</p>
      </div>
      <div class="flex items-center justify-center">
        <router-link to="/random" class="px-4 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 border border-indigo-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 lg:text-xl lg:font-bold sm:px-10 sm:py-4">Show random news</router-link>
      </div>
    </div>
    <div id="titles" class="flex items-center justify-center mt-6 bg-white ">
      <div class="flex flex-col px-16 mt-6 md:grid md:grid-cols-6 md:gap-2 animate__animated animate__bounceInUp">
        <div class="flex flex-col gap-1">
          <a href="" class="bg-purple-500">
            <img src="../../public/population.jpg" height="360" class="duration-100 hover:translate-x-1 hover:-translate-y-1 delay-50" />
          </a>
          <a href="#" class="font-semibold text-center text-purple-500 hover:text-gray-200"> POPULATION </a>
        </div>
        <div class="flex flex-col gap-1">
          <a href="" class="bg-purple-500">
            <img src="../../public/covid.png" height="360" class="duration-100 hover:translate-x-1 hover:-translate-y-1 delay-50" />
          </a>
          <a href="#" class="font-semibold text-center text-purple-500 hover:text-gray-500"> COVID-19 </a>
        </div>
        <div class="flex flex-col gap-1">
          <a href="" class="bg-purple-500">
            <img src="../../public/ukraine.jpg" class="duration-100 hover:translate-x-1 hover:-translate-y-1 delay-50" />
          </a>
          <a href="#" class="font-semibold text-center text-purple-500 hover:text-gray-500"> UKRAINE WAR </a>
        </div>
        <div class="flex flex-col gap-1">
          <a href="" class="bg-purple-500">
            <img src="../../public/usa.jpg" class="duration-100 hover:translate-x-1 hover:-translate-y-1 delay-50" />
          </a>
          <a href="#" class="font-semibold text-center text-purple-500 hover:text-gray-500"> USA NEWS </a>
        </div>
        <div class="flex flex-col gap-1">
          <a href="" class="bg-purple-500">
            <img src="../../public/earth.jpg" class="duration-100 hover:translate-x-1 hover:-translate-y-1 delay-50" />
          </a>
          <a href="#" class="font-semibold text-center text-purple-500 hover:text-gray-500"> GLOBAL INFORMATION </a>
        </div>
        <div class="flex flex-col gap-1">
          <a href="" class="bg-purple-500">
            <img src="../../public/gray.jpg" class="duration-100 hover:translate-x-1 hover:-translate-y-1 delay-50" />
          </a>
          <a href="#" class="font-semibold text-center text-purple-500 hover:text-gray-500">AND MORE</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hero",
};
</script>
<style>
#hero-background {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(67, 56, 202, 0.8323704481792717) 35%, rgba(0, 212, 255, 1) 100%);
}
</style>
