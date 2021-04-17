<template>
  <!-- add adaptive -->
  <!-- align-self -->

  <form class="flex flex-col w-full items-center justify-center py-2 px-4 lg:p-4" :class="[isColumn ? 'md:flex-col' : 'md:flex-row']">
    <input type="text" class="my-2.5 md:m-2 w-full max-w-md rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" :placeholder="inputPlaceholder" /> 
      
      <!-- create class isColumn -->
      <!-- :class="[isColumn ? 'w-full' : '']"  -->
      <button class="flex-shrink-0 my-2.5 md:m-2 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
        Добавить
      </button>

      
      <slot></slot>
  </form>
</template>

<script>
export default {

  props: ['isColumn', 'parent'],

  // ????
  computed: {
    inputPlaceholder() {
      return this.parent === 'todo' ? 'Название списка' : 'Название задачи'
    }
  }
}
</script>

<style>

</style>