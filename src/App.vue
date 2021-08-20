<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">HOME</router-link> |
      <router-link to="/races">RACES</router-link> |
      <router-link to="/bestiary">BESTIARY</router-link> |
      <router-link to="/lands">LANDS</router-link> |
      <router-link to="/gods">GODS</router-link> |
      <router-link to="/history">HISTORY</router-link> |
      <router-link to="/maps">MAPS</router-link> |
      <router-link to="/appendix">APPENDIX</router-link>
    </div>
    <!-- Adds transitions when navigating via router -->
    <!-- See https://animate.style/ -->
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import 'animate.css';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="less">
body,
html {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  min-height: 100%;
  color: #ffffff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.router-link-active {
      color: #db4500;
    }
  }
}

.container.main {
  max-width: 1000px;

  .v-image {
    margin: 0 auto;
    border: 1px black solid;
  }
}

.base {
  padding: 40px;
}

.v-card__text {
  text-align: left !important;
  font-size: 1rem !important;

  blockquote,
  .attribution {
    text-align: center !important;
    max-width: 500px;
    margin: 0 auto;
    font-style: italic;
  }

  span {
    font-style: italic;
  }
}

.v-btn {
  font-size: 16px !important;
  font-weight: bold !important;

  &.active {
    color: #db4500 !important;
  }
}

.sidebar {
  margin: 20px;
  background-color: #b8c8d8 !important;
}

.animate__animated {
  --animate-duration: 1s;

  &.img {
    --animate-duration: 1.5s;
  }
}
</style>
