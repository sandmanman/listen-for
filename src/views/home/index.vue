<template>
  <div class="container">
    <header-wrap></header-wrap>
    <div class="main">
      <banner-swipe :banners="banners"></banner-swipe>
      <quick-menu></quick-menu>

      <div class="space-line"></div>

      <!-- 推荐歌单 -->
      <playlist :playlist="playlist"></playlist>
      <!-- 最新音乐 -->
      <latest-albums :latestAlbums="latestAlbums"></latest-albums>
      <!-- 主播电台 -->
      <dj-radios :djRadios="djRadios"></dj-radios>
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
import LatestAlbums from './_latest-albums'
import DjRadios from './_djradio'

export default {
  name: 'home',
  components: {
    Tabbar,
    HeaderWrap,
    BannerSwipe,
    QuickMenu,
    Playlist,
    LatestAlbums,
    DjRadios
  },
  data(){
    return {
      banners: null,
      playlist: null,
      latestAlbums: null,
      djRadios: null
    }
  },
  created() {
    // get data
    this.getBanners()
    this.getPlaylist()
    this.getLatestAlbums()
    this.getDjRadios()
  },
  methods: {
    // 获取banner
    getBanners: async function() {
      let res = await this.$http.get('/banner')
      this.banners = res.banners
    },

    // 获取推荐歌单
    // to do 登录后推荐歌单数据不同
    getPlaylist: async function() {
      let res = await this.$http.get('/personalized?limit=6')
      this.playlist = res.result
    },
    
    // 获取最新音乐
    getLatestAlbums: async function() {
      let res = await this.$http.get('/personalized/newsong')
      this.latestAlbums = _.slice(res.result, 0 , 5)
    },

    // 获取主播电台
    getDjRadios: async function() {
      let res = await this.$http.get('/personalized/djprogram?limit=6')
      this.djRadios = res.result
    }

  }
}
</script>

<style lang="scss">
.main {
  margin-top: 185px;
}
.panel {
  padding-left: 8px;
  padding-right: 8px;
}
.panel-header {
  margin-top: 35px;
  margin-bottom: 25px;
}
.panel-title {
  margin: 0;
  padding-left: 4px;
  padding-right: 4px;

  font-size: 34px;

  > a {
    color: #2e2e30;
  }
  &:after {
    content: '';

    display: inline-block;
    vertical-align: -3px;

    width: 35px;
    height: 28px;
    overflow: hidden;

    background: url('./img/more_icn_arrow@3x.png') no-repeat center right;
    background-size: contain;
  }
}
.panel-body {
  flex-wrap: wrap;
}
</style>


