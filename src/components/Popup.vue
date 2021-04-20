<template>
  <!-- <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition> -->

    <div class="h-auto w-full z-10 inset-0 overflow-y-auto absolute top-0 left-0 w-full">
      <!-- bg -->
      <div class="absolute w-full h-full inset-0 bg-gray-500 opacity-30">
      </div>

      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- без него не центрируется - ? -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        </span>

        <div class="inline-block relative overflow-hidden transform transition-all  min-w-sm w-96  sm:align-middle sm:max-w-lg" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div class="rounded-lg bg-white shadow text-center">
              <header class="p-3 flex justify-between border-b-2 border-gray-200">
                <slot name="header">
                  default header
                </slot>
                <button class="modal-default-button" @click="$emit('close')">
                  X
                </button>
              </header>
              <!-- <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"> -->
                <!-- <span class="block">
                  Become millionaire ?
                </span>
                <span class="block text-indigo-500">
                  It&#x27;s today or never.
                </span> -->
                 <!-- <slot name="header">
                  default header
                </slot> -->
              <!-- </h2> -->

              <div class="lg:mt-0 lg:flex-shrink-0 p-4">
                <slot name="body">
                  default body
                </slot>
                <!-- <div class="mt-12 inline-flex rounded-md shadow">
                  <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                  </button>
                </div> -->
              </div>

              <footer class="p-4 flex item-center justify-between">
                <slot name="footer">
                  default footer
                </slot>
              </footer>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'popup',
  props: {},
  data() {
    return {}
  }
}
</script>

<style>

</style>