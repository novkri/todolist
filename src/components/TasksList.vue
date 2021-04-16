<template>
  <div class="flex flex-col w-full pl-0 md:p-6 md:space-y-4">
    <div class="overflow-auto flex flex-col justify-between h-screen pb-12 pt-20 lg:pt-0 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
      <div class="w-full mb-8   max-h-full overflow-auto">
        <div class="mb-4 mx-0 sm:ml-4 xl:mr-4">
          <div class="shadow-lg rounded-2xl bg-white w-full">
            <p class="font-bold text-md p-4 text-black">
              My Tasks
              <span class="text-sm text-gray-500 ml-2">
                ( 5 / {{tasks.length}} )
              </span>
            </p>


            <ul class="">
              <li v-for="(task, idx) in tasks" :key="task.id" class="py-3 border-b-2 border-gray-100 cursor-pointer">
                <TaskItem :task="task" :index="idx + 1" />
              </li>
              
            </ul>
          </div>
        </div>
      </div>


      <div class="py-2 px-4">
        <AddNewItemForm :isColumn="false" :parent="'tasks'">
          <div class="flex items-center justify-center">
            <div class="relative inline-block w-10 mr-2 align-middle select-none">
              <input type="checkbox" name="toggle" id="Urgent" class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label for="Urgent" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                </label>
              </div>
              <!-- color if  -->
              <span class="text-gray-400 font-medium">
                Срочное
              </span>
          </div>
        </AddNewItemForm>
      </div>
        
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem'
import AddNewItemForm from './AddNewItemForm'

export default {
  name: "taskslist",
  components: {
    TaskItem,
    AddNewItemForm
  },
  // computed: тут считать не готовые и выводить
  data: function() {
    return {
      tasks: [
        {
          id: 0,
          title: "Create wireframe",
          done: false
        },
        {
          id: 1,
          title: "Google Logo Design",
          done: false
        },
        {
          id: 2,
          title: "Header navigation",
          done: false
        },
        {
          id: 3,
          title: "International",
          done: true
        },
        {
          id: 4,
          title: "Create wireframe",
          done: true
        },
        {
          id: 5,
          title: "Components card",
          done: false
        },
        {
          id: 6,
          title: "Dashboard design",
          done: false
        },
        {
          id: 7,
          title: "Create wireframe",
          done: false
        },
        {
          id: 8,
          title: "Google Logo Design",
          done: false
        },
        {
          id: 9,
          title: "Header navigation",
          done: false
        },
        {
          id: 10,
          title: "International",
          done: true
        },
        {
          id: 11,
          title: "Create wireframe",
          done: true
        },
        {
          id: 12,
          title: "Components card",
          done: false
        },
        {
          id: 13,
          title: "Dashboard design",
          done: false
        },
      ]
    }
  }
}
</script>

<style>

</style>