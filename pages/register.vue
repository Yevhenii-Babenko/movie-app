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
import Vue from 'vue'

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
        this.$router.push('/')
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
  margin: 8% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  &__title {
    font-weight: bold;
    margin-bottom: 10%;
  }
  &-form {
    width: 100%;
    &__input {
      padding: 2% 2%;
      width: 100%;
      margin: 2% 0;
      font-size: 16px;
    }
    &__label {
      font-weight: bold;
    }
    &__control:nth-of-type(4) {
      margin: 5% 0;
    }
    &__button {
      width: 100%;
      display: inline-block;
      text-decoration: none;
      font-weight: bold;
      color: inherit;
      padding: 8px 16px;
      background-color: #c92502;
      border: none;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s ease all;
      &:hover {
        background-color: #891b02;
      }
    }
  }
  .question-box {
    margin: 5% auto;
    &__link{
      text-decoration: none;
      color: #c92502;
    }
  }
}
</style>