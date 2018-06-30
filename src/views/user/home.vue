<template>
  <div class="container">
    <div class="user-home-header" v-if="basicInfo">
      <div class="user-home-header-inner">
        <navbar class="transparent">
          <a href="javascript:;" @click="share" class="nav-bar-btn">
            <i class="nav-bar-icon nav-bar-icon-share"></i>
          </a>
        </navbar>

        <div class="basic-info">
          <div class="avatar-outer">
            <img :src="basicInfo.profile.avatarUrl" class="avatar">
          </div>
          <h1 class="nickname">{{basicInfo.profile.nickname}}</h1>
          <div class="followship">关注 {{basicInfo.profile.follows}} | 粉丝 {{basicInfo.profile.followeds}}</div>
          <div class="tags">
            <span class="tag-item">Lv.{{basicInfo.level}}</span>
          </div>
        </div>
        <!-- / basic-info End -->
      </div>
      <div class="bg-cover" :style="{backgroundImage: `url(${basicInfo.profile.backgroundUrl})`}"></div>
    </div>
    <!-- / user-home-header End -->

    <tabs v-if="basicInfo" v-model="activeTab" :line-width="parseInt(35)" class="user-home-tabs">
      <tab :title="`音乐`">
        <template v-if="playlistCreated && playlistSubscribed">
          <playlist :basicInfo="basicInfo" :playlistCreated="playlistCreated" :playlistSubscribed="playlistSubscribed"></playlist>
        </template>
      </tab>
      <tab :title="`动态`"></tab>
    </tabs>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

import 'vant/lib/vant-css/tab.css'
import { Tab, Tabs } from 'vant'

import Playlist from './_playlist'
import About from './_about'

export default {
  name: 'userHome',
  components: {
    Navbar,
    Tab,
    Tabs,
    Playlist,
    About
  },
  data() {
    return {
      basicInfo: null,
      activeTab: 0,
      playlistCreated: null,
      playlistSubscribed: null,
    }
  },
  created() {
    let userId = this.$route.params.id
    this.getBasicInfo(userId)
    this.getPlaylist(userId)
  },
  methods: {
    // 获取基本信息
    getBasicInfo: async function(userId) {
      let res = await this.$http.get('/user/detail', {
        uid: userId
      })
      this.basicInfo = res.data
    },

    // 获取用户歌单
    getPlaylist: async function(userId) {
      let createdPlaylist = [], subscribedPlaylist = []
      let res = await this.$http.get('/user/playlist', {
        uid: userId
      })
      let data = res.data.playlist
      let len = data.length
      for( let i = 0; i < len; i++ ) {
        if( data[i].subscribed == false ) {
          createdPlaylist.push(data[i])
        }
        if( data[i].subscribed == true ) {
          subscribedPlaylist.push(data[i])
        }
      }
      this.playlistCreated = createdPlaylist
      this.playlistSubscribed = subscribedPlaylist
    },
    // 点击分享
    share: function() {

    }
  }
}
</script>

<style lang="scss" scoped>
.user-home-header {
  position: relative;
  height: 582px;

  &,
  .bg-cover {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  background-image: url('./img/default_bg_header@2x.jpg');

  .user-home-header-inner,
  .bg-cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .user-home-header-inner {
    z-index: 1;
  }
}

.header-bar {
  height: 88px;
}

.basic-info {
  padding: 40px 20px 0 35px;

  .followship {
    color: #fff;
    font-size: 26px;
    font-weight: lighter;
  }
  .nickname {
    margin-top: 25px;
    margin-bottom: 10px;

    color: #fff;
    font-weight: 400;
    font-size: 36px;
  }
  .tags {
    margin-top: 14px;
  }
  .tag-item {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;

    height: 26px;

    color: #fff;
    font-size: 24px;
    line-height: 26px;
    font-weight: lighter;
    font-style: italic;

    border-radius: 26px;
    background-color: rgba(255,255,255,.65);
  }
}

.avatar-outer {
  width: 160px;
  height: 160px;
  overflow: hidden;

  border-radius: 160px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #eee;
  background-size: cover;
  background-image: url('../../assets/img/default_user_960.png');

  > .avatar {
    width: 100%;
    height: 100%;
  }
}
</style>
