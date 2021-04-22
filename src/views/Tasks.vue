<template>
  <article class="flex flex-col w-full px-4 lg:py-6 lg:px-8 lg:w-4/5">
    <section class="overflow-auto flex flex-col justify-between h-screen pb-20 lg:pb-10 pt-4 lg:pt-0 lg:pt-0 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
      <main class="w-full mb-8 max-h-full overflow-auto">
        <div class="shadow-md rounded-2xl bg-white w-full  mb-4 mx-0">
          <header class="font-bold text-md p-4 text-black">
            My Tasks
            <span class="text-sm text-gray-500 ml-2">
              ( {{doneTasksLength}} / {{allCurrentTasksLength}} )
            </span>
          </header>

          <p
            v-if="allCurrentTodoTasks && allCurrentTodoTasks.length === 0"
            class="rounded-2xl text-center p-6"
          >
            Список пуст...
          </p>

          <ul class="pb-4">
            <li
              v-for="(task, idx) in allCurrentTodoTasks"
              :key="task.id"
              class="py-3 border-t-2 border-gray-100 first:border-0"
            >
              <TaskItem :task="task" :index="idx + 1" />
            </li>
          </ul>

        </div>
      </main>


      <section class="lg:py-2 lg:px-4">
        <AddNewItemForm
          :isColumn="false"
          placeholderText="Название задачи"
          @addNewItem="addTaskItem"
        >
          <div class="flex justify-center items-center mx-4">
            <div class="relative inline-block w-10 mr-2 items-center select-none">
              <input
                @click="isUrgent = !isUrgent"
                type="checkbox"
                name="toggle"
                v-model="isUrgent"
                value=""
                id="Urgent"
                class="checked:bg-purple-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label for="Urgent" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>

            <span
              :class="{'text-purple-500': isUrgent}"
              class="text-gray-500 font-medium"
            >
              Срочное
            </span>
          </div>

        </AddNewItemForm>
      </section>
        
    </section>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TaskItem from '../components/TaskItem'
import AddNewItemForm from '../components/AddNewItemForm'

export default {
  name: "Tasks",
  components: {
    TaskItem,
    AddNewItemForm,
  },

  computed: 
    mapGetters([
      'allCurrentTodoTasks',
      'allCurrentTasksLength',
      'doneTasks',
      'doneTasksLength',
      'currentTodo',
    ]),

  data() {
    return {
      isUrgent: false,
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.fetchCurrentTodo(Number(to.params.id))
      vm.fetchTasks()
    })
  },

  beforeRouteUpdate (to, from, next) {
    this.fetchCurrentTodo(Number(to.params.id))
    this.fetchTasks()
    next()
  },
  
  methods: {
    ...mapActions(['fetchTasks', 'fetchCurrentTodo', 'addTask']),

    addTaskItem(name) {
      if (name) {
        let newTaskObj = {
          id: Date.now(),
          list_id: Number(this.currentTodo.id),
          name: name,
          // description: , executor_user_id: ,
          is_completed: false,
          urgency: this.isUrgent,
          // updated_at
          created_at: Date.now()
        }

        let modalObject = {
          header: 'Дело добавлено',
          body: `Дело '${name}' добавлено в '${this.currentTodo.name}'`,
          footerButtons: [
            // {
            //   title: 'Отмена',
            //   type: 'action'
            // },
            {
              title: 'OK',
              type: 'OK',
              method: () => this.addTask(newTaskObj)
            }
          ]
        }

        this.$emit('populateModal', modalObject)
      }
    },
  }
}
</script>

<style>
/* .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
} */
</style>