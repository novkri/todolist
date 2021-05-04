<template>
  <AuthForm @onSubmitForm="handleRegister" submitBtnText="Зарегистрироваться">
    <h2 slot="title">Регистрация</h2>
      
    <!-- First Name -->
    <label slot="additional-fields" for="firstName" class="block mt-4 text-sm  text-gray-600">Имя</label>
    <input
      slot="additional-fields"
      type="text"
      v-model.trim="$v.firstName.$model"
      id="firstName"
      class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 
      w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
      focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      name="First name"
      placeholder="Имя"
      :class="[($v.firstName.$invalid && $v.firstName.$dirty) ? 'ring-2 ring-red-400 border-transparent' : '']"
      @click="$v.firstName.$touch()"
      required />

    <p slot="additional-fields" v-if="!$v.firstName.required && $v.firstName.$dirty" class="text-sm text-red-500 flex-1">Введите имя</p>


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
import AuthForm from '../../components/AuthForm'

export default {
  name: 'register',
  props: {},
  components: {
    AuthForm,
  },
  data() {
    return {
      firstName: '',
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

        this.register(defaultObj)
          .then(() => {
              this.$router.push('/')
            })
          .catch(err => console.log(err))
      }
    }
  }
}
</script>

<style>

</style>