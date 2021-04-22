<template>
  <div id="app">
    <router-view @populateModal="populateModal"></router-view>

    <Modal v-if="isModalOpen" @close="closeModal">
      <p slot="header">{{ modalContent.header }}</p>
      <p slot="body">{{ modalContent.body }}</p>

      <button
        slot="footer"
        type="button"
        v-for="button in modalContent.footerButtons"
        :key="button.title"
        @click="handleBtnClick(button.method)"
        :class="[button.type === 'OK' ? 'btn_ok' : 'btn_action']"
        class="text-white py-2 px-4 focus:ring-indigo-500 focus:ring-offset-indigo-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        {{ button.title }}
      </button>
    </Modal>
  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() { 
    return {
      isModalOpen: false,
      modalContent: {}
    }
  },

  methods: {
    populateModal(data) {
      console.log(data);
      this.modalContent = data
      this.isModalOpen = true
    },

    closeModal() {
      this.isModalOpen = false
      this.modalContent = {}
    },

    handleBtnClick(actionFromBtn) {
      actionFromBtn()
      this.closeModal()
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
