<template>
  <div
    class="relative lg:static top-0 right-0 pb-14 lg:pb-0 h-screen lg:block lg:my-4 lg:ml-4 shadow-lg w-full lg:w-1/5"
    :class="[isOpen ? 'block' : 'hidden']"
  >
    <div class="bg-white h-full lg:rounded-2xl flex flex-col justify-between pb-10 ">

      <nav class="pt-2 md:pt-12 lg:pt-6 max-h-4/5 overflow-x-auto">
        <!-- при загрузке появляется -->
        <p
          v-if="todoItems.length === 0"
          class="rounded-2xl text-center p-6"
        >
          Список пуст...
        </p>

        <div v-for="item in todoItems" :key="item.id">
          <TodoItem :item="item" />
        </div>
      </nav>

      <AddNewItemForm :isColumn="true" placeholderText="Название списка" @addNewItem="addTodoList" />
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
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['addTodo']),

    addTodoList(name) {
      this.addTodo(name)

      let popupObject = {
        popupHeader: 'Список добавлен',
        popupBody: `Список дел '${name}' добавлен`,
        popupFooterBtn1: 'ОК',
        // popupFooterBtn2: 'Не ок'
      }
      this.$emit('showPopup', popupObject)
    }
  }
}
</script>

<style>

</style>