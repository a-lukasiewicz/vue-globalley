<template>
  <div class="flex justify-center">
    <div id="block" class="w-1/3 py-10 m-3 text-base text-center bg-blue-200 rounded shadow-md transform hover:scale-105 ease-in-out transition-all dark:bg-green-200">
      <h4 class="text-2xl font-bold text-blue-800 dark:text-green-800">Cases</h4>
      <p><span class="font-bold">New:</span> {{ divideNumber(stats.NewConfirmed) }}</p>
      <p><span class="font-bold">Total:</span> {{ divideNumber(stats.TotalConfirmed) }}</p>
    </div>

    <div id="block" class="w-1/3 py-10 m-3 text-base text-center bg-blue-300 rounded shadow-md transform hover:scale-105 ease-in-out transition-all dark:bg-green-300">
      <h4 class="text-2xl font-bold text-blue-800 dark:text-green-800">Deaths</h4>
      <p><span class="font-bold">New:</span> {{ divideNumber(stats.NewDeaths) }}</p>
      <p><span class="font-bold">Total:</span> {{ divideNumber(stats.TotalDeaths) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBoxes",
  props: ["stats"],
  methods: {
    divideNumber(number) {
      return number.toLocaleString("en-GB");
    },
  },
};
</script>

<style></style>
