<template lang="">
        <card class="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5">
    <div class="grid grid-cols-6 gap-3">
      <div class="col-span-2">
        <img :src=src />
      </div>
      <div class="col-span-4">
        <p class="font-bold text-gray-700"> {{title}} </p>
        <p class="mt-4 text-gray-500"> {{description}} </p>
      </div>
    </div>
  </card>
</template>
<script>
export default {
    data(){
        return {
            title: "",
            description: "",
            src: "",
        };
    },
    props: ["title", "description", "src"]
}
</script>
<style lang="">
    
</style>