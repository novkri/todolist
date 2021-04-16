<template>
  <div id="app">
    <main class="bg-gray-100 relative h-screen overflow-hidden relative">
      <div class="flex items-start justify-between">
        <nav class="fixed bg-gray-200 block lg:hidden w-full h-16">
          <button class="absolute z-10 m-4 h-6 w-6" @click="toggleSidebar()">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        
        <TodoList :isOpen="isSidebarOpen" @close="toggleSidebar()" />

        <TasksList />

      </div>
    </main>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import TasksList from './components/TasksList'

export default {
  name: 'App',
  components: {
    TodoList,
    TasksList,
  },
  data: function() {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    }
  }
}
</script>

<style>

</style>
