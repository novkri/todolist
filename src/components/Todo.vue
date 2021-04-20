<template>
    <main class="bg-gray-100 overflow-hidden relative h-screen">
     
      <div class="flex flex-col lg:flex-row items-start justify-between z-50">
        <!-- вынести в компонент -->
        <!-- nav for burger -->
        <nav class="relative fixed block lg:hidden w-full h-14">
          <button
            class="absolute z-10 m-4 h-6 w-6 focus:outline-none"
            @click="toggleSidebar()"
          >
            <svg v-if="!isSidebarOpen" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>

        <!-- сайдбар для больших экранов -->
         <div
          class="relative lg:static top-0 right-0 pb-14 lg:pb-0 h-screen lg:block lg:ml-4 lg:mt-6 shadow-lg w-full lg:w-1/5"
          :class="[isOpen ? 'block' : 'hidden']"
        >
          <div class="bg-white h-full lg:rounded-2xl flex flex-col justify-between pb-12 ">

            <nav class="pt-2 md:pt-12 lg:pt-6 max-h-4/5 overflow-x-auto">
              <!-- при загрузке появляется -->
              <p
                v-if="allTodos.length === 0"
                class="rounded-2xl text-center p-6"
              >
                Список пуст...
              </p>

              <div v-for="item in allTodos" :key="item.id">
                <TodoItem :item="item" />
              </div>
            </nav>

            <AddNewItemForm :isColumn="true" placeholderText="Название списка" @addNewItem="addTodoList" />
          </div>
        </div>



        <router-view name="tasks" :key='$route.fullPath' @addTaskItem="e => $emit('addedItem', e)"></router-view>
        
      </div>


      <!-- <Popup v-show="isPopupOpen" @close="closePopup">
        <p slot="header">{{ popup.popupHeader }}</p>
        <p slot="body">{{ popup.popupBody }}</p>

        <div slot="footer" class="inline-flex rounded-md shadow">
          <button  type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            {{ popup.popupFooterBtn1 }}
          </button>
        </div>
        <div v-if="popup.popupFooterBtn2" slot="footer" class="inline-flex rounded-md shadow">
          <button type="button" class="py-4 px-6  bg-green-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            {{ popup.popupFooterBtn2 }}
          </button>
        </div>
      </Popup> -->

    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TodoItem from './TodoItem'
import AddNewItemForm from './AddNewItemForm'
// import Popup from './Popup'

export default {
  name: 'Todo',

  components: {
    TodoItem,
    AddNewItemForm,
    // Popup,
  },
  computed: 
    mapGetters([
      'allTodos',
      'todosError'
    ])
  ,
  created () {
    this.fetchTodos()
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter');
    next(vm => vm.fetchTodos())
  },

  data() {
    return {
      isSidebarOpen: false,
      // isPopupOpen: false,

      // popup: {},
      isOpen: false,

      // ???
      loading: false,
      fetched: false,
    }
  },
  methods: {
    ...mapActions(['addTodo', 'fetchTodos']),

    addTodoList(name) {
      this.addTodo(name)

      let popupObject = {
        popupHeader: 'Список добавлен',
        popupBody: `Список дел '${name}' добавлен`,
        popupFooterBtn1: 'ОК',
        // popupFooterBtn2: 'Не ок'
      }

this.$emit('addedItem', popupObject)
      // this.showPopup(popupObject)
    },


    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },

    // closePopup() {
    //   this.isPopupOpen = false
    //   this.popup = {}
    // },

    // showPopup(popupObject) {
    //   console.log('show me');
    //   this.isPopupOpen = !this.isPopupOpen

    //   this.popup = popupObject
    // }
  }
}
</script>

<style>

</style>