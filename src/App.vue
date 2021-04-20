<template>
  <div id="app">
    <main class="bg-gray-100 relative h-screen overflow-hidden relative">
      <!-- just warning: -->
      <div
        v-if="error"
        class="bg-red-200 border-red-600 text-red-600 border-l-4 p-3 flex justify-center"
        role="alert"
      >
        <p class="font-bold mr-3">
          Be Warned:
        </p>
        <p>
          <!-- TODO: add from where the error come -->
          Something not ideal might be happening.
          {{error}}
        </p>
      </div>

      <!-- nav for burger -->
      <div class="flex flex-col lg:flex-row items-start justify-between z-50">
        <nav class="relative fixed block lg:hidden w-full h-14">
          <button
            class="absolute z-10 m-4 h-6 w-6 focus:outline-none"
            @click="toggleSidebar()"
          >
            <svg v-if="!isSidebarOpen" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>
        
        <TodoList :todoItems="todoItems" :isOpen="isSidebarOpen" @close="toggleSidebar()" @addTodoList="addTodoList" />

        <router-view></router-view>

        <!-- чет не получаиццо :( -->
        <!-- <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view> -->
        
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList,
  },
  data: function() {
    return {
      isSidebarOpen: false,

      todoItems: [],
      loading: false,
      fetched: false,
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchTodos()
  },
  methods: {
    async fetchTodos() {
      this.error = null
      this.todoItems = []
      this.loading = true

      try {
        // http://localhost:3000/todos to const ?
        let response = await fetch('http://localhost:3000/todos');

        if (!response.ok) {
          this.error = `HTTP error! status: ${response.status}`
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          this.loading = false
          this.fetched = true

          let data = await response.json();
          
          data.map(todo => this.todoItems.push(todo))
        }
      } catch(e) {
        console.log(e);
      }
    },

    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },

    async addTodoList(name) {
      console.log('addTodoList', name);

       
      try {
        // http://localhost:3000/todos to const ?
        await axios.post('http://localhost:3000/todos', {
            id: Date.now(),
            title: name
        }).then(resp => {
            console.log(resp.data);

            this.todoItems.push(resp.data)

        }).catch(error => {
            console.log(error);
        }); 
      } catch (error) {
        // оповестить об ошибке
        console.log(error);
      }
    },
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
