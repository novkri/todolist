<template>
  <AuthForm @onSubmitForm="handleLogin" submitBtnText="Войти">
    <h2 slot="title">Логин</h2>

    <div slot="footer-links" class="sm:flex sm:flex-wrap mt-6 sm:mb-4 text-md text-center justify-center">
      <p class="text-gray-500 mx-4 my-1 sm:my-auto">Нет аккаунта?</p>
      <router-link class="flex-2 underline text-gray-700 hover:text-gray-900" :to="{name: 'register'}">
        Зарегистрироваться
      </router-link>
    </div>
  </AuthForm>
</template>

<script>
import AuthForm from '../../components/AuthForm'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'login',
  props: {},
  components: {
    AuthForm,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['userError'])
  },
  methods: {
    ...mapActions(['login']),

    async handleLogin(defaultObj) {
      if(defaultObj) {
        await this.login(defaultObj)
          // .then((r) => {
        if(!this.userError) { this.$router.push('/') }
          //   })
          // .catch(err => console.log(err))
      }
    }
  }
}
</script>

<style>

</style>