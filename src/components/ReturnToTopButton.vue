<template>
  <div class="scroll-btn">
    <a href="#" v-scroll-to="'#app'">
      <v-btn icon outlined color="#db4500">
        <FontAwesomeIcon icon="arrow-up" />
      </v-btn>
    </a>
  </div>
</template>

<style lang="less" scoped>
.v-btn {
  background-color: white;
}

.scroll-btn {
  a {
    text-decoration: none !important;
  }
}
</style>
