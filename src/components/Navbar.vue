<template>
  <nav class="bg-white shadow">
    <div class="max-w-full mx-3 px-3 flex items-center justify-between h-14">

      <!-- burger for showing/hiding todo lists (for mobile)-->
      <div class="-ml-2 flex items-center md:hidden">
        <BurgerButton @toggleSidebar="$emit('toggleSidebar')" :isSidebarOpen="isSidebarOpen" />
        <p class="text-gray-700 text-sm">{{ isSidebarOpen ? 'Скрыть списки дел' : 'Показать списки дел' }}</p>
      </div>

      <div class="flex items-center"></div>

      <!-- User icon + name-->
      <div class="relative ml-4 md:ml-6 ">
        <div class="flex items-center justify-end md:justify-center">
          <button
            @click="toggleUserMenu"
            @blur="isUserMenuOpen = false"
            type="button"
            class="flex items-center justify-center rounded-md px-2 py-2 mx-2 
            font-medium text-gray-700 hover:bg-gray-50 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <p class="hidden md:block truncate ml-2">{{user.firstName}}</p>
          </button>


          <!-- logout btn (for desktop) -->
          <button
            @click="userLogout"
            type="button"
            class="flex items-center justify-center rounded-md px-2 py-2 mx-2 hidden md:block
            font-medium text-gray-700 hover:bg-gray-50 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>

        <!-- user dropdown menu -->
        <div
          v-if="isUserMenuOpen"
          class="origin-top-left absolute right-0  mt-2 w-56 rounded-md shadow-lg bg-white z-50 ring-1 ring-black ring-opacity-5"
        >
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <p class="px-4 py-2 text-md text-gray-700 cursor-default break-words">{{user.firstName}}</p>

            <!-- menu links -->
            <p @mousedown="userLogout" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <p class="cursor-default">
                  Выйти
                </p>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import BurgerButton from './widgets/BurgerButton'

export default {
  name: 'navbar',
  props: {
    isSidebarOpen: {
      type: Boolean,
    }
  },
  data() {
    return {
      isUserMenuOpen: false,
      user: JSON.parse(localStorage.getItem('user')) || '',
    }
  },
  // computed: {
  //   userName() {
  //     return this.user.firstName + ' ' + ( this.user.lastName ? this.user.lastName : '')
  //   }
  // },
  components: {
    BurgerButton
  },
  methods: {
    ...mapActions(['logout']),

    userLogout() {
      this.logout()
      this.$router.push('/login')
    },

    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen
    }
  }
}
</script>

<style>

</style>