<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <router-link :to="backPath" class="nav-bar-btn" v-if="showBackBtn">
        <i class="nav-bar-icon nav-bar-icon-back"></i>
      </router-link>
    </div>
    <div class="nav-bar-center text-ellipsis">{{title}}</div>
    <div class="nav-bar-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    title: {
      type: String,
      default: 'ListenFor'
    },
    showBackBtn: {
      type: Boolean,
      default: true
    },
    backPath: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
