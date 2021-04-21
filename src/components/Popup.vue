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
              <header class="p-4 flex justify-between border-b-2 border-gray-200 text-gray-800 text-lg font-medium mb-4">
                <!-- class here? -->
                <slot name="header" class="">
                  default header
                </slot>

                <button class="bg-transparent border border-transparent" @click="$emit('close')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-6 w-6 text-gray-700" viewBox="0 0 1792 1792">
                      <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
                      </path>
                  </svg>
                </button>
              </header>

              <div class="p-4 text-center text-xl text-gray-800 font-medium ">
                <!-- class? -->
                <slot name="body">
                  default body
                </slot>
              </div>

              <footer class="p-4 flex item-center justify-between flex items-center justify-between gap-4 w-full mt-4">
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