<template>
  <div id="details" class="pt-3 pb-5 text-center dark:text-white">
    <h4 class="text-2xl font-bold">{{ text }}</h4>
    <p class="pt-2 text-base">{{ timestamps }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "CountryDetails",
  props: ["text", "dataDate"],
  computed: {
    timestamps: function () {
      return moment(this.dataDate).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
