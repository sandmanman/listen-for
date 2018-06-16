<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import 'flex-layout-attribute';
@import './assets/css/custom.scss';

body {
  margin: 0;
  font-family: Helvetica Neue,Helvetica,Arial,SCREEN GP Sans SC,sans-serif;
}
img {
  content: normal !important;
}
#app {
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;
}
</style>
