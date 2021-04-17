<template>
<!-- hidden -->
<!-- mb ? -->
  <div class="relative lg:static top-0 right-0 pb-14 lg:pb-0 h-screen lg:block lg:my-4 lg:ml-4 shadow-lg  w-full lg:w-80" :class="[isOpen ? 'block' : 'hidden']">
    <div class="bg-white h-full lg:rounded-2xl flex flex-col justify-between pb-10 ">

      <nav class="pt-2 md:pt-12 lg:pt-6">
        <div v-for="(item, idx) in todoItems" :key="item.title">
          <TodoItem :item="item" :index="idx" />
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
      todoItems: []
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchTodos()
  },
  methods: {
    async fetchTodos() {
      try {
        // http://localhost:3000/todos to const ?
        let response = await fetch('http://localhost:3000/todos');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          let data = await response.json();
          // this.todoItems.push(data) //???
          data.map(todo => this.todoItems.push(todo))
        }
      } catch(e) {
        console.log(e);
      }
    }
  }
  // в этом хуке?
  // mounted: function () {
  //   this.$nextTick(async function () {
  //     try {
  //       // http://localhost:3000/todos to const ?
  //       let response = await fetch('http://localhost:3000/todos');

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       } else {
  //         let data = await response.json();
  //         // this.todoItems.push(data) //???
  //         data.map(todo => this.todoItems.push(todo))
  //       }
  //     } catch(e) {
  //       console.log(e);
  //     }
  //   })
  // }
  
}
</script>

<style>

</style>