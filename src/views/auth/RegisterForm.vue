<template>
  <Card @onSubmitForm="handleFormSubmit">
    <h2 slot="title">Регистрация</h2>
      
    <div slot="additional-fields" class="flex gap-4 mt-4 mb-2">
      <div class=" relative ">
        <input type="text" v-model="firstName" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="First name" placeholder="First name"/>
      </div>
      <div class=" relative ">
        <input type="text" v-model="lastName" id="create-account-last-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Last name" placeholder="Last name"/>
      </div>
    </div>

    <div slot="footer-links" class="sm:flex sm:flex-wrap mt-6 sm:mb-4  text-md text-center justify-center">
      <p class="text-gray-500 mx-4 my-1 sm:my-auto">Уже есть аккаунт?</p>
      <router-link class="flex-2 underline text-gray-700 hover:text-gray-900" :to="{name: 'login'}">Войти</router-link>
    </div>
  </Card>
</template>

<script>
import Card from '../../components/widgets/Card'

export default {
  name: 'register',
  props: {},
  components: {
    Card,
  },
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    handleFormSubmit(defaultObj) {
      defaultObj.firstName = this.firstName.trim()
      defaultObj.lastName = this.lastName.trim()
      console.log(defaultObj);
    }
  }
}
</script>

<style>

</style>