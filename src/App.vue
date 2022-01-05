<template>
  <div :class="isDark ? 'dark' : ''">
    <div id="mainContainer" class="dark:bg-gray-700 h-screen">
      <Header />
      <div class="container">
        <router-view />
      </div>
      <div class="flex justify-center">
        <button @click="isDark = !isDark" class="absolute bottom-5 px-12 py-3 ml-3 rounded-sm border border-gray-200 text-gray-900 shadow-sm hover:bg-blue-300 ease-in-out transform hover:scale-110 transition-all hover:text-white hover:rounded-full dark:bg-green-500 dark:border-green-500 dark:text-white">Change theme colors</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CountryDetails from "./components/CountryDetails.vue";
import CasesElement from "./components/CasesElement.vue";

export default {
  components: {
    Header,
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
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap");

* {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
