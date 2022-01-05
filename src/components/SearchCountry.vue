<template>
  <div class="flex justify-center mt-5">
    <select @change="onChange()" v-model="selected" class="w-3/5 border-2 rounded-sm p-3">
      <option value="0">Select country</option>
      <option v-for="country in countries" :value="country.ID">{{ country.Country }}</option>
    </select>
    <button @click="$emit('clear')" class="px-12 ml-3 rounded-sm border border-gray-200 text-gray-900 shadow-sm hover:bg-blue-300 ease-in-out transform hover:scale-110 transition-all hover:text-white hover:rounded-full dark:bg-green-500 dark:border-green-500 dark:text-white" type="button">Clear</button>
  </div>
</template>

<script>
export default {
  name: "SearchCountry",
  props: ["countries"],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      const country = this.countries.find((item) => item.ID === this.selected);
      this.$emit("get-country", country);
    },
  },
};
</script>
