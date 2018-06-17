<template>
  <div id="app">
    <router-view></router-view>
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

#app {
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;
}
</style>
