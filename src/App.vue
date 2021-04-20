<template>
  <div id="app">
    <!-- h-screen -->
    <main class="bg-gray-100 overflow-hidden relative">
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

      <!-- <button @click="togglePopup">test popup</button> -->

      <div class="flex flex-col lg:flex-row items-start justify-between z-50">
        <!-- nav for burger -->
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

        
        <TodoList :todoItems="allTodos" :isOpen="isSidebarOpen" @close="toggleSidebar()" @showPopup="showPopup" />

        <!-- <TaskList> -->
          <router-view></router-view>
        <!-- </TaskList> -->
        
        
        
      </div>

      <Popup v-show="isPopupOpen" @close="closePopup">
        <p slot="header">{{ popup.popupHeader }}</p>
        <p slot="body">{{ popup.popupBody }}</p>

        <div slot="footer" class="inline-flex rounded-md shadow">
          <button  type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            {{ popup.popupFooterBtn1 }}
          </button>
        </div>
        <div slot="footer" class="inline-flex rounded-md shadow">
          <button type="button" class="py-4 px-6  bg-green-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            {{ popup.popupFooterBtn2 }}
          </button>
        </div>
      </Popup>

    </main>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodoList from './components/TodoList'
// import TaskList from './views/TasksList'
import Popup from './components/Popup'

export default {
  name: 'App',
  components: {
    TodoList,
    Popup,
    // TaskList
  },
  data() {
    return {
      isSidebarOpen: false,
      isPopupOpen: false,

      popup: {},
      

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
    closePopup() {
      this.isPopupOpen = false
      this.popup = {}
    },

    showPopup(popupObject) {
      console.log('show me');
      this.isPopupOpen = !this.isPopupOpen

      this.popup = popupObject
    }
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

/* scroll */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #dccdf5;
  box-shadow: 0 0 2px rgba(0, 0, 0, .2) inset;
  border-radius: 8px; 
}

::-webkit-scrollbar-thumb {
  background: #d07ee4;
  border-radius: 8px;
  border: 2px solid #cecdf5;
}

::-webkit-scrollbar-thumb:hover {
  background: #8B5CF6;
}


::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #c471f5 0%, #7f71fa 100%);
  background-size: contain;
  border-radius: 8px;
  border: 2px solid #d9cdf5;
}

/* ::-webkit-scrollbar-button {
  background: #f5cdcd url(arrow_top.png) no-repeat;
  background-size: contain;
} */
</style>
