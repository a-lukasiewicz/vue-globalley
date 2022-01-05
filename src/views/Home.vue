<template>
  <main v-if="!loading" class="w-screen">
    <CountryDetails :text="title" :dataDate="dataDate" />
    <CasesElement :stats="stats" />
  </main>

  <main class="flex flex-col justify-center w-screen text-center align-center" v-else>
    <div class="mt-10 mb-6 text-3xl text-gray-500">Fetching data</div>
    <img :src="loadingImage" class="w-24 m-auto" alt="loadingImage" />
  </main>
</template>

<script>
import CasesElement from "../components/CasesElement.vue";
import CountryDetails from "../components/CountryDetails.vue";

export default {
  name: "Home",
  components: {
    CountryDetails,
    CasesElement,
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
