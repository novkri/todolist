<template>
  <div class="flex flex-col-reverse md:flex-row items-center mx-6 lg:mx-4 relative">
    <label class="flex items-center lg:justify-center w-full mb-4 lg:mb-0 lg:w-4/6">
      <input
        type="checkbox"
        name="Urgent"
        v-model="task.is_completed"
        @change="toggleTaskComplete(task)"
        class="form-tick mr-3 lg:mx-3 cursor-pointer appearance-none bg-white bg-check h-5 w-5 min-w-5 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
      />

      <p
        class="break-all w-full max-w-90 cursor-pointer "
        :class="[task.is_completed ? 'line-through text-gray-500' : 'text-gray-800' ]" 
      >
        {{task.name}}
      </p>
    </label>

    <div class="flex w-full items-center justify-between mb-6 mt-3 lg:my-0 lg:w-2/6">
      <div class="flex flex-col md:flex-row items-center justify-center text-center ml-4 cursor-default">
        <p class="text-sm text-gray-500 mb-2 md:mb-0 md:mx-1 w-min">
          {{ getTaskDate }}
        </p>
        <p class="text-sm text-gray-500 mb-2 md:mb-0 md:mx-1 w-min">
          {{ getTaskTime }}
        </p>

      </div>

      <span>
        <svg :class="{'invisible': !task.urgency}" class="text-red-500 mx-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </span>

      <span
        @click="deleteTask(task)"     
        class="flex items-center mx-4 cursor-pointer transition ease-in duration-100 text-gray-800 hover:text-purple-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'taskitem',
  props: {
    task: Object,
    index: Number
  },

  computed: {
    getTaskDate() {
      let date = new Date(this.task.created_at)
      return date.toLocaleDateString('ru-RU')
    },

    getTaskTime() {
      let time = new Date(this.task.created_at)
      return time.toLocaleTimeString('ru-RU')
    },
  },
  methods: {
    // updated_at
    // ????

    deleteTask(task) {
      // here ?
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