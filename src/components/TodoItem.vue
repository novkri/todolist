<template>
<!-- uppercase -->
  <router-link
    :to="{ name: 'tasks', params: { id: item.id, title: item.name }}"
    :class="[ item.count_tasks === 0 ? 'bg-white' : item.is_completed ? 'bg-lightGreen' : ' bg-gray-200']"
    class="w-full text-md flex items-center p-4 justify-start hover:bg-purple-400 "
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

<style scoped>
a {
  color: #1F2937;
}

a:hover, .router-link-exact-active.router-link-active:hover {
  color: #fff;
}

.router-link-exact-active.router-link-active {
  border-left: 4px solid #8B5CF6;
  font-size: 1.1rem;
  color: #6845b8;
}
</style>