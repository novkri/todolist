<template>
<!-- bg -->
<div class="flex flex-col h-screen bg-gray-100">
  <div class="grid place-items-center mx-2 my-20 sm:my-auto">
    <!-- Auth Card -->
    <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
      <header class="text-3xl text-center font-semibold text-gray-800">
        <slot name="title"></slot>
      </header>

      <form class="p-6 mt-8">
        <!-- Email -->
        <!-- <label for="email" class="block text-sm  text-gray-600 ">E-mail</label> -->
        <input
          id="email"
          v-model.trim="$v.email.$model"
          type="email"
          name="email"
          placeholder="E-mail"
          class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full 
          py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          :class="[($v.email.$invalid && $v.email.$dirty) ? 'ring-2 ring-red-400 border-transparent' : '']"
          required
        />

        <span v-if="!$v.email.required && $v.email.$dirty" class="text-sm text-red-500">
          Поле Email не может быть пустым
        </span>
        <span v-if="!$v.email.email && $v.email.$dirty" class="text-sm text-red-500">
          Введите корректный Email
        </span>

        <!-- Password -->
        <!-- <label for="password" class="block mt-4 text-sm  text-gray-600">Пароль</label> -->
        <input
          id="password"
          v-model.trim="$v.password.$model"
          type="password"
          name="password"
          placeholder="Пароль"
          class="mt-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full 
          py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          :class="[($v.password.$invalid && $v.password.$dirty) ? 'ring-2 ring-red-400 border-transparent' : '']"
          required
        />

        <span v-if="!$v.password.required && $v.password.$dirty" class="text-sm text-red-500">
          Введите пароль
        </span>
        <span v-if="!$v.password.minLength && $v.password.$dirty" class="text-sm text-red-500">
          Пароль должен содержать минимум {{$v.password.$params.minLength.min}} символов 
        </span>
        <span v-if="!$v.password.maxLength && $v.password.$dirty" class="text-sm text-red-500">
          Пароль не должен содержать более {{$v.password.$params.maxLength.max}} символов
        </span>


        <slot name="additional-fields"></slot>

        <!-- Auth Buttton -->
        <Button btnType="submit" text="Войти" additionalClasses="uppercase mt-8 w-full" :clickHandler="onSubmitBtn" />

        <!-- Another Auth Routes -->
        <slot name="footer-links"></slot>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import Button from './widgets/Button'

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
  components: {
    Button,
  },
  methods: {
    onSubmitBtn() {
      this.$v.$touch()

      let formData = {}

      if (this.email && this.password) {
        formData.email = this.email
        formData.password = this.password

        this.$emit('onSubmitForm', formData)
      }

      this.$emit('onSubmitForm')
    }
  }
}
</script>

<style>

</style>