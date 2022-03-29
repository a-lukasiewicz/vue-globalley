<template lang="">
<div class="w-full">
    <div class="max-w-5xl mx-auto mb-3 sm:px-6">
        <div class="w-full px-8 rounded">
            <h2 class="text-3xl font-bold text-center ">Contact Us</h2>
            <form class="px-6">
                    <div class="flex w-full mt-6">
                        <input type="text" placeholder="Name" class="flex items-center justify-center w-full p-3 mr-3 text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-blue-700" />
                        <input type="email" placeholder="Email" class="w-full p-3 ml-3 text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-blue-700"/>
                    </div>
                <div class="items-center mt-6 md:flex">
                    <div class="flex flex-col w-full">
                        <label class="font-semibold">Subject</label>
                        <input type="text" class="p-3 text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-blue-700"/>
                    </div>
                    
                </div>
                <div>
                    <div class="flex flex-col w-full mt-8">
                        <label class="font-semibold">Message</label>
                        <textarea type="text" class="p-3 text-base text-gray-900 bg-gray-100 border border-gray-200 rounded h-432 focus:oultine-none focus:border-blue-700"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full mt-6">
                    <button class="mb-3 btn">
                        Send message
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "ContactUs"
}
</script>
<style lang="">
    
</style>