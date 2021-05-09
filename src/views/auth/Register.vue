<template>
  <AuthForm @onSubmitForm="handleRegister" submitBtnText="Зарегистрироваться">
    <h2 slot="title">Регистрация</h2>
      
    <!-- Name -->
    <label slot="additional-fields" for="name" class="block mt-2 text-sm text-gray-600">Имя</label>
    <input slot="additional-fields"
      type="text"
      v-model.trim="$v.name.$model"
      id="name"
      class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 my-2
      w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
      focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      name="First name"
      placeholder="Имя"
      :class="[($v.name.$invalid && $v.name.$dirty) ? 'ring-2 ring-red-400 border-transparent' : '']"
      @click="$v.name.$touch()"
      required />

    <span slot="additional-fields" v-if="!$v.name.required && $v.name.$dirty" class="text-xs text-red-500 inline-block pb-2">Введите имя</span>
    <span slot="additional-fields" v-if="!$v.name.maxLength && $v.name.$dirty" class="text-xs text-red-500 inline-block pb-2">
      Имя не должно содержать более {{$v.name.$params.maxLength.max}} символов
    </span>

    <div slot="footer-links" class="sm:flex sm:flex-wrap mt-6 sm:mb-4  text-md text-center justify-center">
      <p class="text-gray-500 mx-4 my-1 sm:my-auto">Уже есть аккаунт?</p>
      <router-link class="flex-2 underline text-gray-700 hover:text-gray-900" :to="{name: 'login'}">
        Войти
      </router-link>
    </div>
  </AuthForm>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { required, maxLength } from 'vuelidate/lib/validators'
import AuthForm from '../../components/AuthForm'

export default {
  name: 'register',
  props: {},
  components: {
    AuthForm,
  },
  data() {
    return {
      name: '',
    }
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(255)
    }
  },
  computed: {
    ...mapGetters(['userError'])
  },
  methods: {
    ...mapActions(['register', 'login']),

    async handleRegister(defaultObj) {
      this.$v.$touch()

      if (defaultObj && this.name) {
        defaultObj.name = this.name
        await this.register(defaultObj)
        if(!this.userError) {
          // await this.login({email: defaultObj.email, password: defaultObj.password})
          this.$router.push('/')}
          // this.$router.push('/login')}
      }
    }
  }
}
</script>

<style>

</style>