<template>
  <section class="wrapper">
    <div class="container">
      <div class="login">
        <h2 class="login__title">Welcome back!</h2>

        <Notification :message="error" v-if="error" />

        <form method="post" @submit.prevent="login">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input type="email" class="input" name="email" v-model="email" />
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
              />
            </div>
          </div>
          <div class="control">
            <button type="submit" class="button is-dark is-fullwidth">
              Log In
            </button>
          </div>
        </form>
        <div class="has-text-centered" style="margin-top: 20px">
          <p>
            Don't have an account?
            <NuxtLink :to="{ name: 'register' }">Register</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          }
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.login {
  width: 30%;
  margin: auto;
  text-align: center;
}
</style>