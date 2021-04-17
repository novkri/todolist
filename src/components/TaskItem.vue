<template>
  <label class="flex items-center mx-2.5">
    <input type="checkbox" name="Urgent" class="form-tick mx-3 appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"/>

<!-- flex-col md:flex-row justify-center md:-->
    <div class="flex items-center justify-between w-full">
      <!--  w-full md:max-w-90 -->
      <!-- text-sm? -->
    <div class="flex items-center justify-start max-w-90">
      <span :class="[task.done ? 'line-through' : '' ]">
        {{task.title}}
      </span>
    </div>

<!-- md:ml-6 -->
    <div class="flex flex-col md:flex-row items-center text-center ml-4">
      <!-- color -->
      <!-- w-min ?? -->
      <p class="text-sm text-gray-500 mb-2 md:mb-0 md:mx-1 w-min">12.12.2012</p>
      <p class="text-sm text-gray-500 mb-2 md:mb-0 md:mx-1 w-min">12:00</p>

      <!-- h-6 w-6 -->
      <svg :class="{invisible: task.urgent}" xmlns="http://www.w3.org/2000/svg" width="20" height="20"  class="text-red-500 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>

    </div>
  </label>
</template>

<script>
export default {
  name: 'taskitem',
  props: ['task', 'index']
}
</script>

<style>

</style>