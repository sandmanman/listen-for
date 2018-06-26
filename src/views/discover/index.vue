<template>
  <div class="container">
    <header-wrap></header-wrap>

    <div class="page-discover" v-if="isLoaded">
      <pull-refresh v-model="isLoading" @refresh="onRefresh">
        <banner-swipe :banners="banners" v-if="banners"></banner-swipe>
        
        <quick-menu :daily="daily"></quick-menu>

        <div class="space-line"></div>

        <!-- 推荐歌单 -->
        <playlist :playlist="playlist" v-if="playlist"></playlist>
        <!-- 最新音乐 -->
        <latest-albums :latestAlbums="latestAlbums" v-if="latestAlbums"></latest-albums>
        <!-- 主播电台 -->
        <dj-radios :djRadios="djRadios" v-if="djRadios"></dj-radios>
      </pull-refresh>
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

import { PullRefresh } from 'vant'

export default {
  name: 'home',
  components: {
    PullRefresh,
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
      isLoading: false,
      isLoaded: false,
      banners: null,
      playlist: null,
      latestAlbums: null,
      djRadios: null,
      daily: 21
    }
  },
  beforeCreate() {
    this.$toast.loading({
      duration: 0,
      loadingType: 'spinner',
      message: '正在加载...'
    })
  },
  created() {
    // get data
    this.getAllData()
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
    },

    getAllData: function() {
      var banners = this.getBanners(),
        playlist = this.getPlaylist(),
        aatestAlbums = this.getLatestAlbums(),
        djRadios = this.getDjRadios()
    
      Promise.all([banners, playlist, aatestAlbums, djRadios])
        .then((res)=>{
          this.isLoaded = true
          this.isLoading = !this.isLoading
          this.$toast.clear()

          // this.$nextTick(function(){
          //   // 操作DOM
          // })
        })
        .catch((error)=>{
          console.log(error)
        })
    },

    // 下拉刷新
    onRefresh: function() {
      console.log('pull refresh')
      setTimeout(()=>{
        this.getAllData()
      }, 1000)
    }

  }
}
</script>

<style lang="scss">
.page-discover {
  position: absolute;
  top: 185px;
  right: 0;
  left: 0;
  bottom: 98px;

  overflow-x: hidden;
  overflow-y: auto;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 168px;
    background-color: #d43c33;
  }

  .van-pull-refresh__head {
    position: relative;
    z-index: 1;

    margin-bottom: -20px;

    color: #fff;
    font-size: 26px;

    background-color: #d43c33;
  }
  .van-pull-refresh__text,
  .van-pull-refresh__loading {
    &:after {
      content: '';
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;

      width: 200px;
      height: 120px;
      overflow: hidden;

      background-position: center;
      background-repeat: no-repeat;
      background-size: 135%;
    }
  }
  .van-pull-refresh__text:after {
    background-image: url('./img/mainpage_ddxx_ani_black_stage2.png');
  }
  .van-loading {
    display: none;
  }
  .van-pull-refresh__loading:after {
    animation-name: zhazhayan;
    animation-duration: .7s;
    animation-iteration-count: infinite;
  }
}

@keyframes zhazhayan {
  from {
    background-image: url('./img/mainpage_ddxx_ani_black_stage1.png');
  }
  to {
    background-image: url('./img/mainpage_ddxx_ani_black_stage2.png');
  }
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


