<template>
  <div
    class="flex items-center w-full relative link-wrapper"
    :class="[this.$route.params.id === item.id ? 'bg-purple-300 border-l-4 border-purple-700 text-gray-900' : item.count_tasks === 0 ? 'bg-white' : item.is_completed ? 'bg-lightGreen' : ' bg-gray-200']"
    >
    <router-link
      :to="{ name: 'tasks', params: { id: item.id }}"
      class="w-full text-md flex items-center p-4 justify-start transition ease-in duration-100 block"
    >
    <!-- hover:bg-purple-400  -->


      <p class="px-4 pr-10 w-full text-md break-words">
        {{item.name}}
      </p>
    </router-link>

    <div class="flex items-center absolute inset-y-0 right-0 ">
      <DeleteButton
        @handleDeleteBtnClick="deleteTodo(item)"
        propsClasses="bg-transparent text-gray-600 hover:text-purple-700"
      />
    </div>
   
  </div>
</template>

<script>
import DeleteButton from '../components/widgets/DeleteButton'

export default {
  name: "todoitem",
  props: {
    item: Object,
  },
  components: {
    DeleteButton
  },

  methods: {
    deleteTodo(todoItem) {
      console.log('s');
      this.$emit('deleteTodoItem', todoItem)
    }
  }
}
</script>

<style scoped>
/* a {
  color: #1F2937;
}

a:hover, a:hover + span, .router-link-exact-active.router-link-active:hover {
  color: #fff !important;
}

.router-link-exact-active.router-link-active ~ .link-wrapper {
  border-left: 4px solid #8B5CF6;
} */
</style>