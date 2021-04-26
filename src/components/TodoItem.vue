<template>
  <div class="flex items-center w-full relative link-wrapper">
    <router-link
      :to="{ name: 'tasks', params: { id: item.id, title: item.name }}"
      :class="[ item.count_tasks === 0 ? 'bg-white' : item.is_completed ? 'bg-lightGreen' : ' bg-gray-200']"
      class="w-full text-md flex items-center p-4 justify-start transition ease-in duration-100 hover:bg-purple-400   block"
    >
      <p class="px-4 pr-9 w-full text-md break-words">
        {{item.name}}
      </p>
    </router-link>
    
    <span
      @click.stop="deleteTodo(item)"
      class="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer transition ease-in duration-100 text-gray-800 hover:text-purple-700"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 font-thin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "todoitem",
  props: {
    item: Object,
  },
  methods: {
    deleteTodo(todoItem) {
      this.$emit('deleteTodoItem', todoItem)
    }
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
}

.link-wrapper:hover span {
  color: #fff;
}
</style>