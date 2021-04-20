<template>
  <div id="app">
     <!-- just warning:  here ?-->
      <!-- <div
        v-if="todosError"
        class="bg-red-200 border-red-600 text-red-600 border-l-4 p-3 flex justify-center"
        role="alert"
      >
        <p class="font-bold mr-3">
          Be Warned:
        </p>
        <p> -->
          <!-- TODO: add from where the error come -->
          <!-- Something not ideal might be happening.
          {{todosError}}
        </p>
      </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
</style>
