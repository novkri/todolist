<template>
  <div
    class="relative lg:static top-0 right-0 pb-14 lg:pb-0 h-screen lg:block lg:my-4 lg:ml-4 shadow-lg w-full lg:w-1/5"
    :class="[isOpen ? 'block' : 'hidden']"
  >
    <div class="bg-white h-full lg:rounded-2xl flex flex-col justify-between pb-10 ">

      <nav class="pt-2 md:pt-12 lg:pt-6">
        <p
          v-if="todoItems.length === 0"
          class="rounded-2xl text-center p-6"
        >
          Список пуст...
        </p>

        <div v-for="item in todoItems" :key="item.title">
          <TodoItem :item="item" />
        </div>
      </nav>

      <AddNewItemForm :isColumn="true" :parent="'todo'" @addNewItem="addTodoList" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TodoItem from './TodoItem'
import AddNewItemForm from './AddNewItemForm'

export default {
  name: 'todolist',
  props: {
    isOpen: Boolean,
    todoItems: Array
  },
  components: {
    TodoItem,
    AddNewItemForm
  },
  data: function() {
    return {
    }
  },
  methods: {
    ...mapActions(['addTodo']),

    addTodoList(name) {
      this.addTodo(name)
    }
  }
}
</script>

<style>

</style>