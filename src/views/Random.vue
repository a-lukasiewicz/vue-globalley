<template lang="">
  <div class="">
    <h1 class="py-8 text-4xl text-center">Random News</h1>
    <div class="flex flex-col items-center justify-center">
      <RandomNews />
      <RandomNews />
      <RandomNews />
      <RandomNews />
      <RandomNews />
      <RandomNews />
      <RandomNews />
      <RandomNews />
      <RandomNews />
      <RandomNews />
    </div>
  </div>
</template>
<script>
import RandomNews from "../components/RandomNews.vue";
export default {
  name: "RandomsNews",
  components: {
    RandomNews,
  },
};
</script>
<style lang=""></style>
