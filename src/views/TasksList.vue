<template>
  <div class="flex flex-col w-full px-4 lg:py-4 lg:px-8 lg:w-4/5" key="tasks">
    <!-- <div v-if="!fetched && loading">loading...</div>v-else -->

    <div class="overflow-auto flex flex-col justify-between h-screen pb-20 lg:pb-10 pt-4 lg:pt-0 lg:pt-0 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
      <div class="w-full mb-8 max-h-full overflow-auto">
        <div class="mb-4 mx-0">
          <div class="shadow-lg rounded-2xl bg-white w-full">
            <p class="font-bold text-md p-4 text-black">
              My Tasks
              <span class="text-sm text-gray-500 ml-2">
                <!-- ( {{doneTasksLength}} / {{tasksItems.length}} ) -->
                ( {{doneTasksLength}} / {{allCurrentTasksLength}} )
              </span>
            </p>

<!-- <transition-group name="fade"> -->
            <p
              v-if="fetched && allCurrentTodoTasks.length === 0"
              class="rounded-2xl text-center p-6"
            >
              Список пуст...
            </p>
            <!-- v-else -->
            <ul  class="pb-4">
              <li
                v-for="(task, idx) in allCurrentTodoTasks"
                :key="task.id"
                class="py-3 border-b-2 border-gray-100 cursor-pointer"
              >
                <TaskItem :task="task" :index="idx + 1" />
              </li>
            </ul>
<!-- </transition-group> -->

          </div>
        </div>
      </div>

      <div class="lg:py-2 lg:px-4">
        <!-- parent - not sure -->
        <AddNewItemForm
          :isColumn="false"
          :parent="'tasks'"
          @addNewItem="addTaskItem"
        >
          <div class="flex justify-center items-center mx-4">
            <div class="relative inline-block w-10 mr-2 items-center select-none">
            <input
              @click="isUrgent = !isUrgent"
              type="checkbox"
              name="toggle"
              v-model="isUrgent"
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
      </div>
        
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TaskItem from '../components/TaskItem'
import AddNewItemForm from '../components/AddNewItemForm'

export default {
  name: "taskslist",
  components: {
    TaskItem,
    AddNewItemForm
  },

  computed: 
    mapGetters([
      'allCurrentTodoTasks',
      'allCurrentTasksLength',
      'doneTasks',
      'doneTasksLength'
    ])

  ,
  data: function() {
    return {
      isUrgent: false,

      // ???
      loading: false,
      fetched: false,

    }
  },

  beforeRouteEnter (to, from, next) {
    let currentTodoId = Number(to.params.id)
    next(vm => vm.fetchTasks(currentTodoId))
  },

  beforeRouteUpdate (to, from, next) {
    this.fetchTasks(to.params.id)
    next()
  },

  methods: {
    ...mapActions(['fetchTasks', 'addTask']),

    addTaskItem(name) {

      // HERE ?
      let newTaskObj = {
        id: Date.now(),
        todoId: Number(this.$route.params.id),
        title: name,
        done: false,
        urgent: this.isUrgent,
        createdAt: Date.now()
      }

      this.addTask(newTaskObj)
    }
  }

}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>