<template>
<!-- uppercase -->
  <router-link
    :to="{ name: 'tasks', params: { id: item.id, title: item.name }}"
    :class="[ item.count_tasks === 0 ? 'bg-white' : item.is_completed ? 'bg-green-300' : 'bg-gray-300']"
    class="w-full text-gray-700 flex items-center p-4 transition-colors duration-200 justify-start hover:text-black bg-opacity-40 hover:bg-opacity-80"
  >

   <p class="px-4 w-full text-md font-normal break-words">
      {{item.name}}
    </p>
  </router-link>
</template>

<script>
export default {
  name: "todoitem",
  props: {
    item: Object,
  }
}
</script>

<style>
.router-link-exact-active.router-link-active {
  /* TODO smtng else with Active Route */

  /* color: rgba(59, 130, 246, 1); */
  /* background-image: linear-gradient(to right, transparent, #c4b9f5); */
  border-left: 4px solid #8B5CF6;
  /* background-image: linear-gradient(to right, transparent, #ececec81); */
  /* border-left: 4px solid #000; */
}
</style>