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
        <!-- //Email Input -->
        <!-- <label for="email" class="block text-sm  text-gray-600 ">E-mail</label> -->
        <input id="email" v-model.trim="$v.email.$model" type="email" name="email" placeholder="E-mail"
          @click="$v.email.$touch()"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          :class="[($v.email.$invalid && $v.email.$dirty) ? 'ring-2 ring-red-400 border-transparent' : '']"
          required
        />
        <span v-if="!$v.email.required && $v.email.$dirty" class="text-sm text-red-500 ">Поле Email не может быть пустым</span>
        <span v-if="!$v.email.email && $v.email.$dirty" class="text-sm text-red-500 ">Введите корректный Email</span>

        <!-- //Password Input -->
        <!-- <label for="password" class="block mt-4 text-sm  text-gray-600">Пароль</label> -->
        <input id="password" v-model.trim="$v.password.$model" type="password" name="password" placeholder="Пароль"
          @click="$v.password.$touch()"
          class="mt-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          :class="[($v.password.$invalid && $v.password.$dirty) ? 'ring-2 ring-red-400 border-transparent' : '']"
          required
        />

        <span v-if="!$v.password.required && $v.password.$dirty" class="text-sm text-red-500 ">Введите пароль</span>
        <span v-if="!$v.password.minLength && $v.password.$dirty" class="text-sm text-red-500 ">Пароль должен содержать минимум {{$v.password.$params.minLength.min}} символов </span>
        <span v-if="!$v.password.maxLength && $v.password.$dirty" class="text-sm text-red-500 ">Пароль не должен содержать более {{$v.password.$params.maxLength.max}} символов</span>

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
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'card',
  props: {},
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(20)
    }
  },
  methods: {
    onSubmitBtn() {
      this.$v.$touch()

      let formData = {}
      if (this.email && this.password) {
        formData.email = this.email
        formData.password = this.password
      }

      this.$emit('onSubmitForm', formData)
    }
  }
}
</script>

<style>

</style>