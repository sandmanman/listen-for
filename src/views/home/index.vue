<template>
  <div class="container">
    <header-wrap></header-wrap>
    <div class="main">
      <banner-swipe :banners="banners"></banner-swipe>
      <quick-menu></quick-menu>

      <div class="space-line"></div>

      <!-- 推荐歌单 -->
      <playlist :playlist="recommondPlaylist"></playlist>
      <!-- 最新音乐 -->
      <album-list :albumList="newestAlbums"></album-list>
    </div>

    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import HeaderWrap from './_header-wrap'
import BannerSwipe from './_banner-swipe'
import QuickMenu from './_quick-menu'
import Playlist from './_playlist'
import albumList from './_album-list'

export default {
  name: 'home',
  components: {
    Tabbar,
    HeaderWrap,
    BannerSwipe,
    QuickMenu,
    Playlist,
    albumList
  },
  data(){
    return {
      banners: null,
      recommondPlaylist: null,
      newestAlbums: null
    }
  },
  created() {
    // get data
    this.getBanners()
    this.getRecommondPlaylist()
    this.getNewestAlubm()
  },
  methods: {
    // 获取banner
    getBanners() {
      this.$http.get('/banner')
      .then((response)=>{
        this.banners = response.data.banners
      })
      .catch((error)=>{
        console.log(error)
      })
    },

    // 获取推荐歌单
    // to do 登录后推荐歌单数据不同
    getRecommondPlaylist() {
      this.$http.get('/personalized')
      .then((response)=>{
        let data = _.slice(response.data.result, 0, 6)
        this.recommondPlaylist = data
      })
      .catch((error)=>{
        console.log(error)
      })
    },

    // 获取最新音乐
    getNewestAlubm() {
      this.$http.get('/personalized/newsong')
      .then((response)=>{
        this.newestAlbums = response.data.result
      })
      .catch((error)=>{
        console.log(error)
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 185px;
}
</style>


