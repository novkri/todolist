<template>
<!-- routes -->
<!-- active: w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 -->

  <router-link :to="{ name: 'TaskList', params: { id: index }}" class="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
   <span class="mx-4 text-sm font-normal">
      {{item.title}}
    </span>
  </router-link>

  <!-- <a class="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
    <span class="mx-4 text-sm font-normal">
      {{item.title}}
    </span>
  </a> -->
</template>

<script>
export default {
  name: "todoitem",
  props: ["item", "index"]
}
</script>

<style>

</style>