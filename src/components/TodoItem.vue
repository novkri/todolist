<template>
  <div
    class="flex items-center w-full relative link-wrapper"
    :class="routerLinkStyle"
    >
    <router-link
      :to="{ name: 'tasks', params: { id: item.id }}"
      class="w-full text-md flex items-center p-4 justify-start transition ease-in duration-100 block"
    >
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
  computed: {
    routerLinkStyle() {
      if (this.$route.params.id === this.item.id) {
        // current todo is purple
        return 'bg-purple-300 border-l-4 border-purple-700 text-gray-900'
      } else {
        // white, green or gray background
        return this.item.count_tasks === 0 ? 'bg-white' : this.item.is_completed ? 'bg-lightGreen' : ' bg-gray-200'
      }
    }
  },
  methods: {
    deleteTodo(todoItem) {
      this.$emit('deleteTodoItem', todoItem)
    }
  }
}
</script>

<style>
</style>