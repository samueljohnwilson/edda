<template>
  <div class="scroll-btn">
    <a href="#" v-scroll-to="'#app'">
      <v-btn outlined>Top</v-btn>
    </a>
  </div>
</template>

<style lang="less" scoped>
.scroll-btn {
  margin-top: 20px;

  a {
    text-decoration: none !important;
  }
}
</style>
