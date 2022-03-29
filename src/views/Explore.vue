<template lang="">
  <div class="mt-6">
    <main v-if="!loading" class="w-screen">
    <CountryDetails :text="title" :dataDate="dataDate" />
    <CasesElement :stats="stats" />
    <SearchCountry :countries="countries" @get-country="getCountryData" @clear="clearCountryData" />
  </main>

  <main class="flex flex-col justify-center w-screen text-center align-center" v-else>
    <div class="mt-10 mb-6 text-3xl text-gray-500 dark:text-white">Fetching data</div>
    <img :src="loadingImage" class="w-24 m-auto" alt="loadingImage" />
  </main>
  </div>
</template>
<script>
import CasesElement from "../components/CasesElement.vue";
import CountryDetails from "../components/CountryDetails.vue";
import SearchCountry from "../components/SearchCountry.vue";
export default {
  name: "Home",
  components: {
    CountryDetails,
    CasesElement,
    SearchCountry,
  },
  data() {
    return {
      loading: true,
      title: "Global",
      dataDate: "",
      stats: {},
      countries: [],
      loadingImage: require("../assets/spinning-loading.gif"),
    };
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
    getCountryData(country) {
      //because of emit you pass it
      this.stats = country;
      this.title = country.Country;
    },
    async clearCountryData() {
      this.loading = true;
      const data = await this.fetchCovidData();
      this.title = "Global";
      this.stats = data.Global;
      this.loading = false;
    },
  },
  async created() {
    const data = await this.fetchCovidData();
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
};
</script>
<style lang=""></style>
