<template>
<!-- bg -->
<div class="flex flex-col h-screen bg-gray-100">
  <div class="grid place-items-center mx-2 my-20 sm:my-auto">
    <!-- Auth Card  max-w-xl rounded -->
    <!-- w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-4/12 2xl:w-4/12 
      px-10 py-10 sm:px-10 sm:py-6 
      bg-white rounded shadow-xl  -->
    <div class="
      flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">

      <!-- Card Title -->
      <header class="text-3xl text-center font-semibold text-gray-800">
        <slot name="title"></slot>
      </header>

      <form class="p-6 mt-8">
        <!-- <slot name="form-content"></slot> -->
        <!-- //Email Input -->
        <!-- <label for="email" class="block text-sm  text-gray-600 ">E-mail</label> -->
        <input id="email" v-model="email" type="email" name="email" placeholder="E-mail" autocomplete="email"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />
        <!-- <span v-if="this.error && !this.email" class="text-sm text-red-500 ">Поле Email не может быть пустым</span> -->

        <!-- //Password Input -->
        <!-- <label for="password" class="block mt-4 text-sm  text-gray-600">Пароль</label> -->
        <input id="password" v-model="password" type="password" name="password" placeholder="Пароль" autocomplete="current-password"
          :class="[this.error ? 'ring-2 ring-red-400 border-transparent' : '']"
          class="mt-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />
        <!-- <span v-if="this.error && !this.password" class="text-sm text-red-500 ">Введите пароль</span>
        <span v-if="this.password.trim() && this.password.trim().length < 3" class="text-sm text-red-500 ">Пароль должен содержать минимум 3 символа</span>
        <span v-if="this.password.trim().length > 20" class="text-sm text-red-500 ">Пароль не должен содержать более 20 символов</span> -->

        <slot name="additional-fields"></slot>

        <!-- //Auth Buttton -->
        <button type="submit"
          @click.prevent="onSubmitBtn"
          class="w-full py-3 px-4 mt-8 rounded-md
          transition ease-in duration-200 text-center text-base font-medium uppercase
          bg-purple-600 hover:bg-purple-700 
          focus:ring-purple-500 focus:ring-offset-purple-200 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">
          Войти
        </button>

       <!-- // Another Auth Routes -->
        <!-- <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4  text-md text-center justify-center"> -->
          <slot name="footer-links"></slot>
          <!-- <p class="text-gray-500 mx-4 my-1 sm:my-auto">Нет аккаунта?</p>
          <router-link class="flex-2 underline text-gray-700 hover:text-gray-900" :to="{name: 'register'}">Зарегистрироваться</router-link> -->
        <!-- </div> -->
      </form>
   

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'card',
  props: {},
  data() {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    onSubmitBtn() {
      if (this.email && this.password) {
        this.error = false
        this.$emit('onSubmitForm', {
          email: this.email.trim(),
          password: this.password.trim()
        })
      } 
      else {
        this.error = true
      }
      
    }
  }
}
</script>

<style>

</style>