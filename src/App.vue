<template>
  <div id="app">
    <main class="bg-gray-100 relative h-screen overflow-hidden relative">
      <!-- just warning: -->
      <div
        v-if="todosError"
        class="bg-red-200 border-red-600 text-red-600 border-l-4 p-3 flex justify-center"
        role="alert"
      >
        <p class="font-bold mr-3">
          Be Warned:
        </p>
        <p>
          <!-- TODO: add from where the error come -->
          Something not ideal might be happening.
          <!-- ?? -->
          {{todosError}}
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
        
        <TodoList :todoItems="allTodos" :isOpen="isSidebarOpen" @close="toggleSidebar()" />

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
import { mapGetters, mapActions } from 'vuex'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList,
  },
  data: function() {
    return {
      isSidebarOpen: false,

      // ???
      loading: false,
      fetched: false,

    }
  },
  computed: 
    mapGetters([
      'allTodos',
      'todosError'
    ])
  ,

  created () {
    this.fetchTodos()
  },

  methods: {
    ...mapActions(['fetchTodos']),


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  },


    async addTask(data) {
      console.log('addTodoList', data);

       
    // let newTaskObj = {
    //     id: Date.now(),
    //     todoId: this.$route.params.id,
    //     title: name,
    //     done: false,
    //     urgent: this.isUrgent
    //   }
    //   try {
    //     // http://localhost:3000/todos to const ?
    //     await axios.post('http://localhost:3000/tasks', newTaskObj).then(resp => {
    //         console.log(resp.data);

    //         this.tasksItems.push(resp.data)
            
    //     }).catch(error => {
    //         console.log(error);
    //     }); 
    //   } catch (error) {
    //     // оповестить об ошибке
    //     console.log(error);
    //   }
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
