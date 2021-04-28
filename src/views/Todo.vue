<template>
  <main class="bg-gray-100 overflow-hidden relative h-screen">
    <section class="flex flex-col md:flex-row items-start justify-between z-50">

      <BurgerBtn @toggleSidebar="toggleSidebar" :isSidebarOpen="isSidebarOpen" />

      <!-- sidebar -->
        <div
          class="relative lg:static top-0 right-0 pb-14 lg:pb-0 h-screen md:block md:ml-4 md:mt-6 shadow-2xl w-full md:w-1/5 md:min-w-16"
          :class="[isSidebarOpen ? 'block' : 'hidden']"
        >
        <div class="bg-white h-full md:rounded-2xl flex flex-col justify-between pb-6 lg:pb-12">
          <nav class="pt-2 md:pt-12 md:pt-6 max-h-4/5 h-4/5 overflow-y-auto">

            <div class="px-6 py-3 mb-3">
              <FilterSelect :filterOptions="filterTodoOptions" :initOption="filterTodoOptions[0]" />
            </div>

            <p
              v-if="allTodos.length === 0"
              class="text-center p-6 font-light text-xl mb-3"
            >
              Список пуст...
            </p>

            <div v-for="item in allFilteredTodos" :key="item.id" @click="toggleSidebar">
              <TodoItem :item="item" @deleteTodoItem="onDeleteTodo" />
            </div>
          </nav>

          <AddForm :propsClasses="'max-w-sm md:max-w-md'" placeholderText="Название списка" @addNewItem="addTodoList" />
        </div>
      </div>

      <!-- tasks -->
      <router-view name="tasks" :key='$route.fullPath' @populateModal="e => $emit('populateModal', e)"></router-view>
      
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TodoItem from '../components/TodoItem'
import AddForm from '../components/widgets/AddForm'
import FilterSelect from '../components/widgets/FilterSelect'
import BurgerBtn from '../components/widgets/BurgerBtn'

export default {
  name: 'Todo',
  components: {
    TodoItem,
    AddForm,
    FilterSelect,
    BurgerBtn
  },
  computed: {
    ...mapGetters([
      'allTodos',
      'allFilteredTodos',
      'todosError'
    ]),
  },

  beforeRouteEnter (to, from, next) {
    next(async vm => await vm.fetchTodos())
  },

  data() {
    return {
      isSidebarOpen: true,
      filterValue: '',
      filterTodoOptions: [
        {
          name: "not_completed",
          value: 'Неисполненные'
        },
        {
          name: "completed",
          value: 'Исполненные'
        }, 
        {
          name: "all",
          value: 'Все'
        }
      ]
    }
  },

  methods: {
    ...mapActions(['addTodo', 'fetchTodos', 'fetchTasks', 'deleteTodo']),

    addTodoList(name) {
      let newTodoObj = {
        name: name.trim(),
        count_tasks: 0,
        is_completed: false,
        created_at: Date.now(),
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

    onDeleteTodo(todoItem) {
      let modalObject = {
        header: 'Удалить список дел',
        body: `Удалить список дел '${todoItem.name}'?`,
        footerButtons: [
          {
            title: 'Отмена',
            type: 'Cancel'
          },
          {
            title: 'Удалить',
            type: 'OK',
            method: () => {
              this.deleteTodo(todoItem.id)
              if (this.$route.params.id === todoItem.id) {
                this.$router.push('/')
              }
            }
          }
        ],
      }

      this.$emit('populateModal', modalObject)
    }
  }
}
</script>

<style>

</style>