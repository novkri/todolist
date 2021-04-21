<template>
<!-- uppercase -->
  <router-link
    :to="{ name: 'tasks', params: { id: item.id, title: item.title }}"
    class="w-full uppercase font-thin text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-purple-500"
  >
   <span class="mx-4 text-sm font-normal">
      {{item.title}}
    </span>
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
  color: rgba(59, 130, 246, 1);
  background-image: linear-gradient(to right, #fff, #EDE9FE);
  border-left: 4px solid #8B5CF6;
}
</style>