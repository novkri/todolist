<template>
  <div class="flex flex-col-reverse md:flex-row items-center mx-4 mb-2 relative">
    <label class="flex items-start md:items-center lg:justify-center w-full mb-4 pr-6 lg:mb-0 lg:w-4/6">
      <input
        type="checkbox"
        name="Urgent"
        v-model="task.is_completed"
        @change="toggleTaskComplete(task)"
        class="form-checkbox mt-1 mr-3 lg:mt-0 lg:mx-3 cursor-pointer appearance-none bg-white bg-check h-5 w-5 min-w-5 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none focus:ring-transparent"
      />

      <p
        class="break-all w-full max-w-90 cursor-pointer "
        :class="[task.is_completed ? 'line-through text-gray-500' : 'text-gray-800' ]" 
      >
        {{task.name}}
      </p>
    </label>

    <div class="flex w-full items-center justify-between mb-6 mt-3 lg:m-0 lg:w-2/6">
      <!-- urgency  -->
      <span>
        <svg :class="{'invisible': !task.urgency}" class="text-red-500  h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </span>

      <div class="flex flex-col lg:flex-row items-center justify-center text-center mx-3 cursor-default">
        <p class="text-sm text-gray-500 mb-2 lg:mb-0 lg:mx-1 w-min">
          {{ getTaskDate }}
        </p>
        <p class="text-sm text-gray-500 mb-2 lg:mb-0 lg:mx-1 w-min">
          {{ getTaskTime }}
        </p>
      </div>

      <DeleteBtn @handleDeleteBtnClick="deleteTask(task)" :propsClasses="'mx-4 text-gray-600 hover:text-purple-700'" />
    </div>
  </div>
</template>

<script>
import DeleteBtn from '../components/widgets/DeleteBtn'

export default {
  name: 'taskitem',

  props: {
    task: Object,
    index: Number
  },

  components: {
    DeleteBtn
  },

  computed: {
    getTaskDate() {
      let date = new Date(this.task.created_at)
      return date.toLocaleDateString('ru-RU')
    },

    getTaskTime() {
      let time = new Date(this.task.created_at)
      return time.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      })
    },
  },
  methods: {
    deleteTask(task) {
      this.$emit('deleteTaskItem', task)
    },

    toggleTaskComplete(task) {
      this.$emit('toggleTaskItem', task)
    }
  }
}
</script>

<style>

</style>