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


<script lang="ts">
import Vue from 'vue'
import { getters, RootState } from '~/store'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  layout: 'auth',
  methods: {
    login() {
      this.$store.dispatch('setLog', true)
      this.$router.push('/')
    },
  },
  computed: mapGetters(['auth']),
})
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