<template>
  <div id="app">
    <router-view @addedItem="showPopup" @close="closePopup"></router-view>


<!-- перенести попап в todo.vue ? -->
    <Popup v-show="isPopupOpen" @close="closePopup">
      <p slot="header">{{ popup.header }}</p>
      <p slot="body">{{ popup.body }}</p>

        <button
          slot="footer"
          type="button"
          v-for="button in popup.footerButtons"
          :key="button.title"
          @click="button.method"
         
          :class="[button.type === 'OK' ? 'btn_ok' : 'btn_action']"
          class="text-white py-2 px-4 focus:ring-indigo-500 focus:ring-offset-indigo-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          {{ button.title }}
        </button>

    </Popup>
  </div>
</template>

<script>
import Popup from './components/Popup'

export default {
  name: 'App',
  components: {
    Popup,
  },
  data() { 
    return {
      isPopupOpen: false,
      popup: {
        footerButtons: []
      },
    }
  },
  methods: {
    closePopup() {
      this.isPopupOpen = false
      this.popup = {}
    },

    showPopup(popupObject) {
      this.isPopupOpen = true
      this.popup = popupObject
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* scroll */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #dccdf5;
  box-shadow: 0 0 2px rgba(0, 0, 0, .2) inset;
  border-radius: 8px; 
}

::-webkit-scrollbar-thumb {
  background: #d07ee4;
  border-radius: 8px;
  border: 2px solid #cecdf5;
}

::-webkit-scrollbar-thumb:hover {
  background: #8B5CF6;
}


::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #c471f5 0%, #7f71fa 100%);
  background-size: contain;
  border-radius: 8px;
  border: 2px solid #d9cdf5;
}

/* ::-webkit-scrollbar-button {
  background: #f5cdcd url(arrow_top.png) no-repeat;
  background-size: contain;
} */

/* buttons */

.btn_ok {
  background-color: #7C3AED;
}
.btn_ok:hover {
  background-color: #6D28D9;
}

.btn_action {
  background-color: #EF4444;
}
.btn_action:hover {
  background-color: #DC2626;
}
</style>
