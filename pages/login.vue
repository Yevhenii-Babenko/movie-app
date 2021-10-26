<template>
  <section class="wrapper">
    <div class="container">
      <div class="login">
        <h2 class="login__title">Welcome back!</h2>

        <Notification :message="error" v-if="error" />

        <form class="login-form" method="post" @submit.prevent="login">
          <div class="login-form__field">
            <label class="login-form__label">Email</label>
            <div class="login-form__control">
              <input
                type="email"
                class="login-form__input"
                name="email"
                v-model="email"
              />
            </div>
          </div>
          <div class="login-form__field">
            <label class="login-form__label">Password</label>
            <div class="login-form__control">
              <input
                type="password"
                class="login-form__input"
                name="password"
                v-model="password"
              />
            </div>
          </div>
          <div class="login-form__control">
            <button type="submit" class="login-form__button">Log In</button>
          </div>
        </form>
        <div class="question-box">
          <p>
            Don't have an account?
            <NuxtLink class="question-box__link" :to="{ name: 'register' }"
              >Register</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { mapGetters } from 'vuex'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  computed: mapGetters(['auth']),
})
export default class Login extends Vue {
  login() {
    this.$store.dispatch('setLog')
    this.$router.push('/')
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/login';
@import '~/assets/scss/components/question-box';
</style>