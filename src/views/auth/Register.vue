<template>
  <AuthForm @onSubmitForm="handleRegister">
    <h2 slot="title">Регистрация</h2>
      
    <div slot="additional-fields" class="flex flex-col">
      <div class="flex gap-4 mt-4 mb-2">
        <!-- First Name -->
        <input
          type="text"
          v-model.trim="$v.firstName.$model"
          id="first-name"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 
          w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="First name"
          placeholder="Имя"
          :class="[($v.firstName.$invalid && $v.firstName.$dirty) ? 'ring-2 ring-red-400 border-transparent' : '']"
          @click="$v.firstName.$touch()"
          required />

        <!-- Last Name -->
        <input
          type="text"
          v-model.trim="lastName"
          id="last-name"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 
          w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="Last name"
          placeholder="Фамилия"/>
      </div>

      <p v-if="!$v.firstName.required && $v.firstName.$dirty" class="text-sm text-red-500 flex-1">Введите имя</p>
    </div>

    <div slot="footer-links" class="sm:flex sm:flex-wrap mt-6 sm:mb-4  text-md text-center justify-center">
      <p class="text-gray-500 mx-4 my-1 sm:my-auto">Уже есть аккаунт?</p>
      <router-link class="flex-2 underline text-gray-700 hover:text-gray-900" :to="{name: 'login'}">
        Войти
      </router-link>
    </div>
  </AuthForm>
</template>

<script>
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import AuthForm from '../../components/BasicAuthForm'

export default {
  name: 'register',
  props: {},
  components: {
    AuthForm,
  },
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  validations: {
    firstName: {
      required
    }
  },
  methods: {
     ...mapActions(['register']),
    handleRegister(defaultObj) {
      this.$v.$touch()

      if (defaultObj && this.firstName) {
        defaultObj.firstName = this.firstName
        defaultObj.lastName = this.lastName
        console.log(defaultObj);

        this.register(defaultObj)
          .then(() => {
              console.log('then')
              // this.$router.push('/')
            })
          // .catch(err => console.log(err))
      }
    }
  }
}
</script>

<style>

</style>