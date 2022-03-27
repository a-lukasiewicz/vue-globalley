<template lang="">
  <div>
    <h1>Random Page</h1>
    <div class="flex flex-col items-center justify-center">
      <RandomNews class="my-3" />
      <RandomNews class="my-3" />
      <RandomNews class="my-3" />
      <RandomNews class="my-3" />
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
