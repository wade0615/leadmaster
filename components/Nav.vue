<template>
  <header id="nav" class="bg-gray-400">
    <div class="max-w-screen-xl mx-auto">
      <section
        class="px-6 flex justify-between items-center"
      >
        <NuxtLink to="/" class="inline-block">
          <img src="@/assets/logo.svg" alt="Logo" />
        </NuxtLink>
        <div>
          <v-avatar class="cursor-pointer" @click.stop="drawer = !drawer">
            <v-icon>mdi-pencil</v-icon>
          </v-avatar>
          <div class="member-dropdown inline-block" @click.stop="loggedIn">
            <a href="#0">
              <v-avatar>
                <v-icon dark>
                  mdi-account-circle
                </v-icon>
              </v-avatar>
            </a>
            <ol v-if="login" class="dropdown-menu">
              <li class="dropdown-item"><a href="#0">Settings 設定</a></li>
              <li class="dropdown-item"><a href="#0">Collection</a></li>
              <li class="dropdown-item"><NuxtLink to="/login">Log out</NuxtLink></li>
            </ol>
            <ol v-else class="dropdown-menu">
              <li class="dropdown-item"><NuxtLink to="/login">Login 登入/Register 註冊</NuxtLink></li>
            </ol>
          </div>
        </div>
      </section>
      <section class="p-2">
        <nav class="mx-auto px-10">
          <NuxtLink to="/">Home</NuxtLink> |
          <NuxtLink to="/about">About</NuxtLink> |
          <NuxtLink to="/login">Login</NuxtLink>
        </nav>
      </section>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      right
    >
      <div class="px-3 py-2">哈囉是我啦！</div>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
      </ul>
    </v-navigation-drawer>
    <v-overlay :value="drawer"></v-overlay>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      drawer: null,
      login: true,
    };
  },
  methods: {
    loggedIn() {
      if(!this.login) {
        this.$router.push({ name: 'login' });
      };
    },
  }
};
</script>

<style lang="sass" scoped>
#nav
  position: sticky
  top: 0
  left: 0
  z-index: 10
  padding: 1ex 0
  box-shadow: 0px 0px 16px 2px rgb(79 64 53 / 20%)
  section:nth-child(1)
    position: relative
    &::after
      content: ""
      position: absolute
      top: 100%
      left: 0
      width: 100%
      height: 1px
      background: #EEE7E1
    .member-dropdown
      position: relative
      &:hover
        .dropdown-menu
          display: block
      a
        text-decoration: none
        white-space: nowrap
        text-overflow: ellipsis
        color: white
    .dropdown-menu
      list-style-type: none
      margin: 0 auto
      padding: 0
      position: absolute
      width: max-content
      top: 100%
      right: 0
      display: none
      z-index: 10
    .dropdown-item
      padding: 0
      background: #F67280
      opacity: 0
      transform-origin: bottom
      animation: enter 0.2s ease forwards
      @for $n from 1 through 3
        &:nth-child(#{$n})
          animation-duration: 0.2s + 0.1s * ($n - 1)
          animation-delay: 0.1s * ($n - 1)
      &:hover
        background: #F8B195
      a
        display: block
        padding: 0.75rem 1.25rem
  section:nth-child(2)
    overflow-x: scroll
    nav
      width: max-content
      a
        font-weight: bold
        color: #2c3e50
        &.router-link-exact-active
          color: #fcd846
  @keyframes enter
    from
      opacity: 0
      transform: scaleY(0.98) translateY(10px)
    to
      opacity: 1
      transform: none
</style>
