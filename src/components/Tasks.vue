<template>
  <div class="flex flex-col w-full px-4 lg:py-6 lg:px-8 lg:w-4/5" key="tasks">

    <div class="overflow-auto flex flex-col justify-between h-screen pb-20 lg:pb-10 pt-4 lg:pt-0 lg:pt-0 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
      <div class="w-full mb-8 max-h-full overflow-auto">
        <div class="mb-4 mx-0">
          <div class="shadow-lg rounded-2xl bg-white w-full">
            <p class="font-bold text-md p-4 text-black">
              My Tasks
              <span class="text-sm text-gray-500 ml-2">
                ( {{doneTasksLength}} / {{allCurrentTasksLength}} )
              </span>
            </p>

            <p
              v-if="fetched && allCurrentTodoTasks.length === 0"
              class="rounded-2xl text-center p-6"
            >
              Список пуст...
            </p>
            <ul class="pb-4">
              <li
                v-for="(task, idx) in allCurrentTodoTasks"
                :key="task.id"
                class="py-3 border-b-2 border-gray-100"
              >
                <TaskItem :task="task" :index="idx + 1" />
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div class="lg:py-2 lg:px-4">
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
      </div>
        
    </div>

      <!-- <Popup v-show="isPopupOpen" @close="closePopup">
        <p slot="header">{{ popup.popupHeader }}</p>
        <p slot="body">{{ popup.popupBody }}</p>

        <div slot="footer" class="inline-flex rounded-md shadow">
          <button  type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            {{ popup.popupFooterBtn1 }}
          </button>
        </div>
        <div v-if="popup.popupFooterBtn2" slot="footer" class="inline-flex rounded-md shadow">
          <button type="button" class="py-4 px-6  bg-green-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            {{ popup.popupFooterBtn2 }}
          </button>
        </div>
      </Popup> -->

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TaskItem from '../components/TaskItem'
import AddNewItemForm from '../components/AddNewItemForm'
// import Popup from './Popup'

export default {
  name: "Tasks",
  components: {
    TaskItem,
    AddNewItemForm,
    // Popup,
  },

  computed: 
    mapGetters([
      'allCurrentTodoTasks',
      'allCurrentTasksLength',
      'doneTasks',
      'doneTasksLength',
      'currentTodo',
    ])

  ,
  data() {
    return {
      isUrgent: false,

      // popup: {},
      // isPopupOpen: false,
      // ???
      loading: false,
      fetched: false,

    }
  },

  beforeRouteEnter (to, from, next) {
    console.log(to, from);
    let currentTodoId = Number(to.params.id)
    next(vm => {
      vm.fetchCurrentTodo(currentTodoId)
      vm.fetchTasks()
    })
  },

  beforeRouteUpdate (to, from, next) {
    let currentTodoId = Number(to.params.id)
    this.fetchCurrentTodo(currentTodoId)
    this.fetchTasks()
    next()
  },
  
  methods: {
    ...mapActions(['fetchTasks', 'fetchCurrentTodo', 'addTask']),

    addTaskItem(name) {

      let newTaskObj = {
        id: Date.now(),
        todoId: Number(this.currentTodo.id),
        title: name,
        done: false,
        urgent: this.isUrgent,
        createdAt: Date.now()
      }
console.log(newTaskObj);
      this.addTask(newTaskObj)

      let popupObject = {
        popupHeader: 'Дело добавлено',
        popupBody: `'${name}' добавлено в ${this.currentTodo.title}`,
        popupFooterBtn1: 'ОК',
        popupFooterBtn2: 'Не ок'
      }
      
      console.log(this.$route, popupObject);
      this.$emit('addTaskItem', popupObject)
    },

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