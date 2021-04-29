<template>
    <Card @onSubmitForm="handleFormSubmit">
      <h2 slot="title">Логин</h2>

        <div slot="footer-links" class="sm:flex sm:flex-wrap mt-6 sm:mb-4  text-md text-center justify-center">
          <p class="text-gray-500 mx-4 my-1 sm:my-auto">Нет аккаунта?</p>
          <router-link class="flex-2 underline text-gray-700 hover:text-gray-900" :to="{name: 'register'}">Зарегистрироваться</router-link>
        </div>
      <!-- <div slot="form-content">
        //Email Input
        <label for="email" class="block text-sm  text-gray-600 ">E-mail</label>
        <input id="email" type="email" name="email" placeholder="E-mail" autocomplete="email"
          class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />

        //Password Input
        <label for="password" class="block mt-4 text-sm  text-gray-600">Пароль</label>
        <input id="password" type="password" name="password" placeholder="Пароль" autocomplete="current-password"
          class=" mt-2 mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />

        //Auth Buttton
        <button type="submit"
          class="w-full py-3 px-4 mt-10 rounded-md
          transition ease-in duration-200 text-center text-base font-medium uppercase
          bg-purple-600 hover:bg-purple-700 
          focus:ring-purple-500 focus:ring-offset-purple-200 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">
          Войти
        </button>

       // Another Auth Routes
        <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4  text-md text-center justify-center">
          <p class="text-gray-500 mx-4 my-1 sm:my-auto">Нет аккаунта?</p>
          <router-link class="flex-2 underline text-gray-700 hover:text-gray-900" :to="{name: 'register'}">Зарегистрироваться</router-link>
        </div>
      </div> -->
    </Card>
</template>

<script>
import Card from '../../components/widgets/Card'

export default {
  name: 'login',
  props: {},
  components: {
    Card,
  },
  data() {
    return {
      // CardContent: {
      //   title: 'Login',

      // }
    }
  },
  methods: {
    handleFormSubmit(defaultObj) {
      defaultObj.firstName = this.firstName
      defaultObj.lastName = this.lastName
      console.log(defaultObj);
    }
  }
}
</script>

<style>

</style>