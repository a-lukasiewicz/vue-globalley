<template lang="">
  <h1 class="pt-3 my-3 text-4xl text-center">About Us</h1>
  <div class="flex flex-col items-center justify-center w-3/4 mx-auto">
  <p class="py-3 italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

<div class="flex flex-col items-center justify-center gap-5 py-6 bg-white">
  <AboutCard 
    title="Why we started?"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    src="https://events.duolingo.com/images/why_global.svg" 
  />
  <AboutCard 
    title="For people not money"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    src="https://events.duolingo.com/images/why_impact.svg" 
  />
  <AboutCard 
    title="Secure and latest data"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    src="https://events.duolingo.com/images/why_access.svg" 
  />
</div>
  <h2 class="text-3xl text-center">How it started?</h2>
  <p class="py-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p class="py-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <img src="../../public/sample-photo.jpg">
  <p class="py-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</template>
<script>
import AboutCard from "../components/AboutCard.vue"
export default {
  components: {
    AboutCard,
  }
};
</script>
<style lang=""></style>
