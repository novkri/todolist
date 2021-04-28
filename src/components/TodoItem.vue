<template>
  <div class="flex items-center w-full relative link-wrapper">
    <router-link
      :to="{ name: 'tasks', params: { id: item.id }}"
      :class="[ item.count_tasks === 0 ? 'bg-white' : item.is_completed ? 'bg-lightGreen' : ' bg-gray-200']"
      class="w-full text-md flex items-center p-4 justify-start transition ease-in duration-100 hover:bg-purple-400 block"
    >
      <p class="px-4 pr-9 w-full text-md break-words">
        {{item.name}}
      </p>
    </router-link>

    <DeleteBtn @handleDeleteBtnClick="deleteTodo(item)" :propsClasses="'absolute inset-y-0 right-0 pr-4 text-gray-700'" />
  </div>
</template>

<script>
import DeleteBtn from '../components/common/DeleteBtn'

export default {
  name: "todoitem",
  props: {
    item: Object,
  },
  components: {
    DeleteBtn
  },
  methods: {
    deleteTodo(todoItem) {
      this.$emit('deleteTodoItem', todoItem)
    }
  }
}
</script>

<style scoped>
a {
  color: #1F2937;
}

a:hover, a:hover + span, .router-link-exact-active.router-link-active:hover {
  color: #fff !important;
}

.router-link-exact-active.router-link-active {
  border-left: 4px solid #8B5CF6;
}
</style>