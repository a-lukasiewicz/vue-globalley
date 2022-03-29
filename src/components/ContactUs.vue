<template lang="">
<div class="w-full px-6 mt-6">
    <div class="max-w-5xl px-6 mx-auto mb-12 sm:px-6 lg:px-8">
        <div class="w-full p-8 bg-white rounded shadow sm:p-12 -mt-72">
            <h2 class="pb-2 text-3xl font-bold text-center">Contact Us</h2>
            <form class="px-6">
                    <div class="flex flex-col w-full md:w-1/2">
                        <label class="font-semibold">Name</label>
                        <input type="text" class="p-3 mt-4 text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-blue-700" />
                    </div>
                <div class="flex flex-col w-full mt-4 md:w-1/2 md:ml-6 md:mt-0">
                        <label class="font-semibold">Phone</label>
                        <input type="email" class="p-3 mt-4 text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-blue-700"/>
                    </div>
                <div class="items-center mt-8 md:flex">
                    <div class="flex flex-col w-full">
                        <label class="font-semibold">Subject</label>
                        <input type="text" class="p-3 mt-4 text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-blue-700"/>
                    </div>
                    
                </div>
                <div>
                    <div class="flex flex-col w-full mt-8">
                        <label class="font-semibold">Message</label>
                        <textarea type="text" class="h-40 p-3 mt-4 text-base text-gray-900 bg-gray-100 border border-gray-200 rounded focus:oultine-none focus:border-blue-700"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full mt-6">
                    <button class="btn">
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