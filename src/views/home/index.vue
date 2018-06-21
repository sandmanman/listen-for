<template>
  <div class="container">
    <header-wrap></header-wrap>

    <van-loading v-show="showLoading" type="spinner" color="black" style="margin-left:auto;margin-right:auto;"/>

    <div class="main" v-show="isLoaded">
      <banner-swipe :banners="banners"></banner-swipe>
      
      <quick-menu :daily="daily"></quick-menu>

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
      showLoading: true,
      isLoaded: false,
      banners: null,
      playlist: null,
      latestAlbums: null,
      djRadios: null,
      daily: 21
    }
  },
  mounted() {
    // get data
    var banners = this.getBanners(),
        playlist = this.getPlaylist(),
        aatestAlbums = this.getLatestAlbums(),
        djRadios = this.getDjRadios()
    
    Promise.all([banners, playlist, aatestAlbums, djRadios])
      .then((res)=>{
        this.$nextTick(function(){
          this.showLoading = false
          this.isLoaded = true
        })
      })
      .catch((error)=>{
        console.log(error)
      })

  },
  methods: {
    // 获取banner
    getBanners: async function() {
      let res = await this.$http.get('/banner')
      return this.banners = res.data.banners
    },

    // 获取推荐歌单
    // to do 登录后推荐歌单数据不同
    getPlaylist: async function() {
      let res = await this.$http.get('/personalized?limit=6')
      return this.playlist = res.data.result
    },
    
    // 获取最新音乐
    getLatestAlbums: async function() {
      let res = await this.$http.get('/personalized/newsong')
      return this.latestAlbums = _.slice(res.data.result, 0 , 5)
    },

    // 获取主播电台
    getDjRadios: async function() {
      let res = await this.$http.get('/personalized/djprogram?limit=6')
      return this.djRadios = res.data.result
    }

  }
}
</script>

<style lang="scss">
.main {
  position: absolute;
  top: 185px;
  right: 0;
  left: 0;
  bottom: 98px;

  overflow-x: hidden;
  overflow-y: auto;
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


