<template>
  <nav class="relative fixed block lg:hidden w-full h-14">
    <button
      class="absolute z-10 m-4 h-6 w-6 focus:outline-none"
      @click="$emit('toggleSidebar')"
    >
      <svg v-if="!isSidebarOpen" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'burger-btn',
  props: {
    isSidebarOpen: {
      type: Boolean
    }
  }
}
</script>

<style>

</style>