<template>
<!-- hidden -->
  <div class="h-screen lg:block m-0 lg:my-4 lg:ml-4 shadow-lg absolute lg:relative w-full lg:w-80" :class="[isOpen ? 'block' : 'hidden']">
    <div class="bg-white h-full rounded-2xl">

      <button class="lg:hidden absolute z-10 m-4 h-6 w-6" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav class="pt-12 lg:pt-6">
        <div v-for="item in todoItems" :key="item.title">
          <TodoItem :item="item" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'todolist',
  props: ['isOpen'],
  components: {
    TodoItem
  },
  data: function() {
    return {
      todoItems: [
        {
          id: 0,
          title: "Список 1"
        },
        {
          id: 2,
          title: "Список 2"
        }
      ]
    }
  }
  
}
</script>

<style>

</style>