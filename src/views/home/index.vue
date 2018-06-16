<template>
  <div class="container">
    <header-wrap></header-wrap>
    <banner-swipe :banners="banners"></banner-swipe>
  </div>
</template>

<script>
import HeaderWrap from './_header-wrap'
import BannerSwipe from './_banner-swipe'

export default {
  name: 'home',
  components: {
    HeaderWrap,
    BannerSwipe
  },
  data(){
    return {
      banners: ['http://p1.music.126.net/3qNIngUxK2K4YZsPHbnwUw==/109951163358943710.jpg', 'http://p1.music.126.net/hdJQG1QafkE76IQ6HoRcew==/109951163358935826.jpg']
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>


