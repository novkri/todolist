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
                ( {{doneTasksLength}} / {{allTasksLength}} )
              </span>
            </p>

<!-- <transition-group name="fade"> -->
  <!-- не тут? мигает-->
            <p
              v-if="fetched && tasksItems.length === 0"
              class="rounded-2xl text-center p-6"
            >
              Список пуст...
            </p>
            <!-- v-else -->
            <ul  class="pb-4">
              <li
                v-for="(task, idx) in tasksItems"
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
        <AddNewItemForm :isColumn="false" :parent="'tasks'">
          <div class="flex justify-center items-center mx-4">
            <div class="relative inline-block w-10 mr-2 items-center select-none">
            <input
              @click="isUrgent = !isUrgent"
              type="checkbox"
              name="toggle"
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

          <!-- <label class="flex items-center space-x-3 my-2.5 md:m-2">
            <input type="checkbox" name="Urgent" class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"/>
            <span class="text-gray-700 dark:text-white font-normal">
              Срочное
            </span>
          </label> -->
        </AddNewItemForm>
      </div>
        
    </div>
  </div>
</template>

<script>
import TaskItem from '../components/TaskItem'
import AddNewItemForm from '../components/AddNewItemForm'

export default {
  name: "taskslist",
  components: {
    TaskItem,
    AddNewItemForm
  },
  // computed: тут считать не готовые и выводить
  computed: {
    doneTasksLength() {
      let doneTasks = this.tasksItems.filter(task => task.done)
      return doneTasks.length
    },
    allTasksLength() {
      return this.tasksItems.length
    }
  },
  data: function() {
    return {
      isUrgent: false,

      tasksItems: [],
      loading: false,
      fetched: false,
      error: null
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => vm.fetchTasks(to.params.id))
  },

  // when route changes and this component is already rendered,
  beforeRouteUpdate (to, from, next) {
    this.fetchTasks(to.params.id)
    next()
  },

  methods: {
    async fetchTasks(currentTaskId) {
      this.error = null
      this.tasksItems = []
      this.loading = true

      try {
        // http://localhost:3000/todos to const ?
        let response = await fetch(`http://localhost:3000/tasks`);
        // let response = await fetch(`http://localhost:3000/tasks/${currentTask}`);

        if (!response.ok) {
          this.error = response.status
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          this.loading = false
          this.fetched = true

          let data = await response.json();
          // this.todoItems.push(data) //???

          let currentTodoTasks = data.filter(task => task.todoId === currentTaskId)
      console.log(currentTodoTasks);
          currentTodoTasks.map(task => this.tasksItems.push(task))
        }
      } catch(e) {
        console.log(e);
      }
    },

    // beforeLeave(el) {
    //   const { marginLeft, marginTop, width, height } = window.getComputedStyle(
    //     el
    //   );
    //   el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
    //   el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
    //   el.style.width = width;
    //   el.style.height = height;
    // }
  }

}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>