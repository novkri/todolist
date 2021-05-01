<template>
  <div>
    <nav class="bg-white shadow ">
      <div class="max-w-full mx-3 px-3">
        <div class="flex items-center justify-between h-16">
          <!-- <div class="-ml-2 flex md:hidden">
            <BurgerBtn @toggleSidebar="$emit('toggleSidebar')" :isSidebarOpen="isSidebarOpen" />
          </div> -->

          <div class="flex items-center"></div>

          <div class="flex items-center justify-between ml-4 md:ml-6">
            <div class=" flex items-center justify-center">
              <!-- focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500 -->
              <button type="button" class="cursor-default flex items-center justify-center rounded-md px-2 py-2 mx-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <p class="cursor-default">User Userovich</p>
            </div>

            <div class="ml-6">
              <button @click="userLogout" type="button" class="flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium text-gray-700 focus:text-gray-600 hover:bg-gray-50 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import BurgerBtn from './widgets/BurgerBtn'

export default {
  name: 'navbar',
  props: {
  //   isSidebarOpen: {
  //     type: Boolean,
  //   }
  },
  data() {
    return {}
  },
  components: {
  //   BurgerBtn
  },
  methods: {
    userLogout() {
      console.log('logout')
    }
  }
}
</script>

<style>

</style>