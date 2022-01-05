<template>
  <div class="flex justify-center">
    <div id="block" class="w-1/3 py-10 m-3 text-base text-center bg-blue-200 rounded shadow-md">
      <h4 class="text-2xl font-bold text-blue-800">Cases</h4>
      <p><span class="font-bold">New:</span> {{ stats.NewConfirmed }}</p>
      <p><span class="font-bold">Total:</span> {{ stats.TotalConfirmed }}</p>
    </div>

    <div id="block" class="w-1/3 py-10 m-3 text-base text-center bg-blue-200 rounded shadow-md">
      <h4 class="text-2xl font-bold text-blue-800">Cases</h4>
      <p><span class="font-bold">New:</span> {{ stats.NewConfirmed }}</p>
      <p><span class="font-bold">Total:</span> {{ stats.TotalConfirmed }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBoxes",
  props: ["stats"],
};
</script>

<style></style>
