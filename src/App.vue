<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">HOME</router-link> |
      <router-link to="/races">RACES</router-link> |
      <router-link to="/lands">LANDS</router-link> |
      <router-link to="/gods">GODS</router-link> |
      <router-link to="/bestiary">BESTIARY</router-link> |
      <router-link to="/history">HISTORY</router-link> |
      <router-link to="/appendix">APPENDIX</router-link>
    </div>
    <router-view />
  </div>
</template>
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

.v-image {
  margin: 0 auto;
  border: 1px black solid;
}

.v-card__text {
  text-align: left !important;

  blockquote {
    text-align: center !important;
    max-width: 500px;
    margin: 0 auto;
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

.timeline-wrapper {
  padding: 20px;

  .timeline {
    text-align: left;

    .v-card__text,
    .v-card__title {
      padding: 4px;
    }

    .heading {
      font-weight: bold;
    }

    .timeline-circle {
      border: unset;
      background-color: unset;

      svg {
        font-size: 30px;
      }
    }
  }
}
</style>
