<template>
  <main class="bg-gray-100 overflow-hidden relative h-screen">
    <section class="flex flex-col lg:flex-row items-start justify-between z-50">

      <!-- burger -->
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

      <!-- sidebar -->
        <article
          class="relative lg:static top-0 right-0 pb-14 lg:pb-0 h-screen lg:block lg:ml-4 lg:mt-6 shadow-2xl w-full lg:w-1/5"
          :class="[isSidebarOpen ? 'block' : 'hidden']"
        >

        <div class="bg-white h-full lg:rounded-2xl flex flex-col justify-between pb-12 ">
          <nav class="pt-2 md:pt-12 lg:pt-6 max-h-4/5 h-4/5 overflow-y-auto">

            <div class="px-6 mb-6">
              <FilterSelect />
            </div>

            <p
              v-if="allTodos.length === 0"
              class="rounded-2xl text-center p-6"
            >
              Список пуст...
            </p>

            <div v-for="item in allFilteredTodos" :key="item.id" @click="onRouterClick">
              <TodoItem :item="item" @deleteTodoItem="onDeleteTodo" />
            </div>
          </nav>

          <AddNewItemForm :isColumn="true" placeholderText="Название списка" @addNewItem="addTodoList" />
        </div>
      </article>

      <!-- tasks -->
      <router-view name="tasks" :key='$route.fullPath' @populateModal="e => $emit('populateModal', e)"></router-view>
      
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TodoItem from '../components/TodoItem'
import AddNewItemForm from '../components/AddNewItemForm'
import FilterSelect from '../components/FilterSelect'

export default {
  name: 'Todo',

  components: {
    TodoItem,
    AddNewItemForm,
    FilterSelect
  },
  computed: {
    ...mapGetters([
      'allTodos',
      'allFilteredTodos'
    ]),
  },

  created () {
    this.fetchTodos()
  },

  beforeRouteEnter (to, from, next) {
    next(vm => vm.fetchTodos())
  },


  data() {
    return {
      isSidebarOpen: false,
      filterValue: ''
    }
  },
  methods: {
    ...mapActions(['addTodo', 'fetchTodos', 'fetchTasks', 'deleteTodo']),

    addTodoList(name) {
      let newTodoObj = {
        name: name,
        count_tasks: 0,
        is_completed: false,
        is_closed: false,
        created_at: Date.now(),
        // updated_at:
      }

      if (name) {
        let modalObject = {
          header: 'Список добавлен',
          body: `Список дел '${name}' добавлен`,
          footerButtons: [{
            title: 'ОК',
            type: 'OK',
            method: () => this.addTodo(newTodoObj)
          }],
        }

        this.$emit('populateModal', modalObject)
      }
    },

    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },

    onRouterClick() {
      if (this.isSidebarOpen) {
        this.isSidebarOpen = false
      }
    },

    onDeleteTodo(todoId) {
      console.log(todoId);  
      this.deleteTodo(todoId)
    }
  }
}
</script>

<style>

</style>