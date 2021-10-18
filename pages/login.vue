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
import Vue from 'vue'
import { getters, RootState } from '~/store'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  layout: 'auth',
  methods: {
    login() {
      this.$store.dispatch('setLog')
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
.login {
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
    &__control:nth-of-type(3) {
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
    &__link {
      text-decoration: none;
      color: #c92502;
    }
  }
}
</style>