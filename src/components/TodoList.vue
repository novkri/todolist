<template>
<!-- hidden -->
<!-- mb ? -->
  <div class="absolute lg:static top-14 right-0 pb-14 lg:pb-0 h-screen lg:block lg:my-4 lg:ml-4 shadow-lg  w-full lg:w-80" :class="[isOpen ? 'block' : 'hidden']">
    <div class="bg-white h-full md:rounded-2xl flex flex-col justify-between pb-10 ">

      <nav class="pt-2 md:pt-12 lg:pt-6">
        <div v-for="item in todoItems" :key="item.title">
          <TodoItem :item="item" />
        </div>
      </nav>

      <AddNewItemForm :isColumn="true" :parent="'todo'" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import AddNewItemForm from './AddNewItemForm'

export default {
  name: 'todolist',
  props: ['isOpen'],
  components: {
    TodoItem,
    AddNewItemForm
  },
  data: function() {
    return {
      todoItems: [
        {
          id: 0,
          title: "Список 1"
        },
        {
          id: 2,
          title: "Список 2"
        }
      ]
    }
  }
  
}
</script>

<style>

</style>