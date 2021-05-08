<template>
  <nav class="relative py-3 sm:max-w-xl mx-2">
    <button
      @click="$emit('toggleSidebar')"
      class="rounded-md w-10 h-10 relative focus:outline-none"
      :class="burgerClasses"
    >
      <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" 
          :class="{'rotate-45': isSidebarOpen,' -translate-y-1.5': !isSidebarOpen }"></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" 
          :class="{'opacity-0': isSidebarOpen } "></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" 
          :class="{'-rotate-45': isSidebarOpen, ' translate-y-1.5': !isSidebarOpen}"></span>
      </div>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'burger',
  props: {
    isSidebarOpen: {
      type: Boolean,
      default: true
    },
    burgerClasses: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>

</style>