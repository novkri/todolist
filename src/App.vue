<template>
  <div id="app">
    <main class="bg-gray-100 relative h-screen overflow-hidden relative">
      <div class="flex flex-col lg:flex-row items-start justify-between z-50">
        <nav class="relative fixed block lg:hidden w-full h-14">
          <button class="absolute z-10 m-4 h-6 w-6" @click="toggleSidebar()">
            <!-- closed -->
            <svg v-if="!isSidebarOpen" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- opened -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
