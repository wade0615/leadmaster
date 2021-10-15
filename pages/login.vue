<template>
  <div id="login">
    <div class="max-w-screen-xl min-h-screen mx-auto flex flex-col">
      <main
        class="flex-auto content-center p-5 grid grid-cols-1 md:grid-cols-2"
      >
        <section class="flex justify-center items-center">
          <NuxtLink to="/" class="p-7">
            <img src="@/assets/logo.svg" alt="Logo" class="w-40" />
          </NuxtLink>
        </section>
        <section class="md:p-12 rounded-2xl md:bg-white">
          <div class="mb-16">
            <h1 class="font-title text-xl mb-4">{{ title }}</h1>
            <div class="mb-3">
              <v-text-field label="Account 帳號" v-model="account"
              ></v-text-field>
            </div>
            <div class="mb-3">
              <label class="flex justify-between">
                <span></span>
                <span>Forgot password ?</span>
              </label>
              <v-text-field label="Password 帳號" v-model="password"
              ></v-text-field>
            </div>
            <v-btn elevation="2" rounded block>
              LOG IN 登入
            </v-btn>
          </div>
          <div>
            <h2 class="font-title text-xl">{{ newUser }}</h2>
            <v-btn elevation="2" rounded block>
              Sign Up 註冊
            </v-btn>
          </div>
        </section>
      </main>
      <footer class="flex-none flex flex-col wert">
        <span class="text-center">&copy; 1958 - 2009, Michael</span>
        <span class="text-center">Contact us: David@gmail.com</span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome to David",
      account: "",
      password: "",
      newUser: "New to David 新訪客",
    };
  },
  mounted() {
    document.title = "D | Login";
  },
};
</script>

<style lang="sass" scoped>
#login
  position: relative
  background: url(https://fakeimg.pl/1200x900/?text=David)
  background-size: cover
  background-position: center
  .v-input
    margin: 0
    padding: 0
</style>
