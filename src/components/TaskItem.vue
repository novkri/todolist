<template>
  <label class="flex items-center mx-2.5">
    <input
      type="checkbox"
      name="Urgent"
      v-model="task.done"
      class="form-tick mx-3 cursor-pointer appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
    />

    <div class="flex items-center justify-between w-full">
      <div class="flex items-center justify-start max-w-90 cursor-pointer">
        <span :class="[task.done ? 'line-through' : '' ]">
          {{task.title}}
        </span>
      </div>


      <div class="flex flex-col md:flex-row items-center text-center ml-4">
        <p class="text-sm text-gray-500 mb-2 md:mb-0 md:mx-1 w-min">
          {{ getTaskDate(task) }}
        </p>
        <p class="text-sm text-gray-500 mb-2 md:mb-0 md:mx-1 w-min">
          {{ getTaskTime(task) }}
        </p>

       
        <!-- filled bell: -->
        <!-- <svg xmlns="http://www.w3.org/2000/svg" :class="{invisible: task.urgent}" class="text-red-500 mx-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg> -->

        <svg :class="{invisible: !task.urgent}" class="text-red-500 mx-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>

    </div>
  </label>
</template>

<script>
export default {
  name: 'taskitem',
  props: {
    task: Object,
    index: Number
  },
  methods: {
    getTaskDate(task) {
      let date = new Date(task.createdAt)
      return date.toLocaleDateString('ru-RU')
    },
    getTaskTime(task) {
      let time = new Date(task.createdAt)
      return time.toLocaleTimeString('ru-RU')
    }
  }
}
</script>

<style>

</style>