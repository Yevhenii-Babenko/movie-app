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
          <NuxtLink class="question-box__link" :to="{ name: 'login' }"
            >Login</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Register extends Vue {
  username!: string
  email!: string
  password!: string
  error!: null | string

  register() {
    try {
      this.$router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
}

</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/question-box';
@import '~/assets/scss/pages/register';
</style>