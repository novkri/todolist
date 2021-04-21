<template>
  <form
    class="flex flex-col w-full items-center justify-center self-center py-2 px-4 lg:p-4"
    :class="[isColumn ? 'md:flex-col md:max-w-md' : 'md:flex-row']"
  >

    <input
      type="text"
      v-model="name"
      class="my-2.5 md:m-2 w-full max-w-md rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      :placeholder="placeholderText"
    /> 
      
      <!-- create class isColumn -->
      <button
        :class="[isColumn ? 'w-full' : '']"
        class="flex-shrink-0 my-2.5 md:m-2 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        type="submit"
        @click.prevent="submitForm"
      >
        Добавить
      </button>
      
      <slot></slot>
  </form>
</template>

<script>
export default {
  // name
  props: {
    isColumn: Boolean,
    placeholderText: String
  },
  data() {
    return {
      name: ''
    }
  },

  methods: {
    submitForm() {
      // e.preventDefault()
      
      // !this.name ? 'Введите название' : emit...
      this.$emit('addNewItem', this.name)
      
      this.name = ''
    }
  }
}
</script>

<style>

</style>