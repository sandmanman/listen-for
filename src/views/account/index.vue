<template>
  <div class="container" v-if="currentUser">
    <tabbar></tabbar>
  </div>
  <div v-else>
    <login></login>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import Login from './_login'

export default {
  name: 'account',
  components: {
    Tabbar,
    Login
  },
  data() {
    return {
      currentUser: window.localStorage.getItem('CURRENT_USER')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

