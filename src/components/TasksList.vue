<template>
  <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
    <div class="overflow-auto h-screen pb-24 pt-20 lg:pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
      <div class="w-full">
        <div class="mb-4 mx-0 sm:ml-4 xl:mr-4">
          <div class="shadow-lg rounded-2xl bg-white w-full">
            <p class="font-bold text-md p-4 text-black">
              My Tasks
              <span class="text-sm text-gray-500 ml-2">
                ( 5 / {{tasks.length}} )
              </span>
            </p>

            <ul v-for="(task, idx) in tasks" :key="task.id">
              <TaskItem :task="task" :index="idx + 1" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem'

export default {
  name: "taskslist",
  components: {
    TaskItem
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
      ]
    }
  }
}
</script>

<style>

</style>