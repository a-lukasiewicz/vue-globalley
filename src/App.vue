<template>
  <div :class="isDark ? 'dark' : ''" class="overflow-x-hidden">
    <div id="mainContainer" class="flex flex-col w-full min-h-screen dark:bg-gray-700 sm:h-screen">
      <div class="flex-auto">
        <Header />
        <router-view />
      </div>
      <Footer class="flex-shrink-0 mt-32" />
      <!-- <div class="flex justify-center">
        <button @click="isDark = !isDark" class="px-12 py-3 m-3 text-gray-900 transition-all ease-in-out transform border border-gray-200 rounded shadow-sm lg:absolute lg:bottom-5 hover:bg-blue-300 hover:scale-110 hover:text-white hover:rounded-full dark:bg-green-500 dark:border-green-500 dark:text-white">Change theme colors</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CountryDetails from "./components/CountryDetails.vue";
import CasesElement from "./components/CasesElement.vue";

export default {
  components: {
    Header,
    Footer,
    CountryDetails,
    CasesElement,
  },
  data() {
    return {
      isDark: false,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&display=swap');

* {
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
