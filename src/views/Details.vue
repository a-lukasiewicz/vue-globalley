<template >
    <div id="contaier" class="h-screen overflow-y-scroll snap snap-y snap-mandatory scroll-smooth">
        <section class="w-full h-screen bg-red-500 snap-start">
            <h1>Daily</h1>
            <div id="graph"></div>
        </section>
        <section class="w-full h-screen bg-blue-500 snap-start">
            <h1>Weekly</h1>
            <div id="graph"></div>
        </section>
        <section class="w-full h-screen bg-green-500 snap-start">
            <h1>Monthly</h1>
            <div id="graph"></div>
        </section>
        <section class="w-full h-screen bg-yellow-500 snap-start">
            <h1>Yearly</h1>
            <div id="graph"></div>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>