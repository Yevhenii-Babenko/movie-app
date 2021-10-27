<template>
  <section class="wrapper">
    <div class="container">
      <div class="register">
        <h2 class="register__title">Register!</h2>

        <Notification :message="error" v-if="error" />

        <form class="register-form" method="post" @submit.prevent="register">
          <div class="register-form__field">
            <label class="register-form__label">Username</label>
            <div class="register-form__control">
              <input
                type="text"
                class="register-form__input"
                name="username"
                v-model="username"
                required
              />
            </div>
          </div>
          <div class="register-form__field">
            <label class="register-form__label">Email</label>
            <div class="register-form__control">
              <input
                type="email"
                class="register-form__input"
                name="email"
                v-model="email"
                required
              />
            </div>
          </div>
          <div class="register-form__field">
            <label class="register-form__label">Password</label>
            <div class="register-form__control">
              <input
                type="password"
                class="register-form__input"
                name="password"
                v-model="password"
                required
              />
            </div>
          </div>
          <div class="register-form__control">
            <button type="submit" class="register-form__button">
              Register
            </button>
          </div>
        </form>

        <div class="question-box">
          Already got an account?
          <NuxtLink class="question-box__link" :to="{ name: 'login' }">Login</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import Vue from 'vue';
import Notification from '~/components/Notification.vue';
import axios from 'axios'
// import Vue from 'vue'

export default Vue.extend({
  data(): {
    username: string
    email: string
    password: string
    error: null | string
  } {
    return {
      username: '',
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('register', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        console.log('islogged', this.$store.state.auth.loggedIn)
        /* await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          },
        }) */

        this.$router.push('/')
      } catch (e: any) {
        this.error = e.response.data.message
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/question-box';
@import '~/assets/scss/pages/register';

</style>