<template>
  <section class="wrapper">
    <div class="container">
      <div class="register">
        <h2 class="register__title">Register!</h2>

        <Notification :message="error" v-if="error" />

        <form method="post" @submit.prevent="register">
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                type="text"
                class="input"
                name="username"
                v-model="username"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                type="email"
                class="input"
                name="email"
                v-model="email"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                type="password"
                class="input"
                name="password"
                v-model="password"
                required
              />
            </div>
          </div>
          <div class="control">
            <button type="submit" class="button is-dark is-fullwidth">
              Register
            </button>
          </div>
        </form>

        <div class="has-text-centered" style="margin-top: 20px">
          Already got an account?
          <NuxtLink :to="{ name: 'login' }">Login</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import Vue from 'vue';
import Notification from '~/components/Notification.vue';
import axios from 'axios'

export default Vue.extend({
  layout: 'auth',
  components: {
    Notification,
  },
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
        // this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.register {
  width: 30%;
  margin: auto;
  text-align: center;
}
</style>