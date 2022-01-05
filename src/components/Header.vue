<template>
  <header class="text-4xl md:text-5xl font-bold text-center text-white bg-blue-700 py-9 dark:bg-gray-800">
    <div id="title" class="flex justify-center">
      <img src="../assets/logo.png" alt="logo" class="w-12 h-12" />
      <h1>Covid-19 Tracker</h1>
    </div>
    <div class="flex justify-center mt-3 text-base">
      <p>API by</p>
      <a href="#" class="ml-2 text-blue-300 opacity-80 dark:text-green-400">covid19api.com</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["isDark"],
};
</script>
