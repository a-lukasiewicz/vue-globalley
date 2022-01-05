<template>
  <Header></Header>
  <!-- <CountryDetails></CountryDetails> -->
  <div class="container">
    <router-view />
  </div>
  <!-- <CasesElement></CasesElement> -->
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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap");

* {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
