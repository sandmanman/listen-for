<template>
  <div class="container" v-if="currentUserId">
    <navbar :title="`账号`" :showBackBtn="false"></navbar>

    <div class="main" v-if="currentUser">
      <!-- 基本信息 S -->
      <div class="user-basic-info" layout="row center-left">
        <div class="avatar-outer">
          <img :src="currentUser.profile.avatarUrl" class="avatar">
        </div>
        <div class="info" self="center">
          <h1 class="name">{{currentUser.profile.nickname}}</h1>
          <a href="javascript:;" class="level">Lv.{{currentUser.level}}</a>
        </div>
        <a href="javascript:;" self="right" class="signin-btn">签到</a>
      </div>

      <div class="space-line"></div>

      <div class="helper-info" layout="row center-stretch">
        <a href="#" class="info-item">
          <span class="text">动态</span>
          <strong class="number">{{currentUser.profile.eventCount}}</strong>
        </a>
        <a href="#" class="info-item">
          <span class="text">关注</span>
          <strong class="number">{{currentUser.profile.follows}}</strong>
        </a>
        <a href="#" class="info-item">
          <span class="text">粉丝</span>
          <strong class="number">{{currentUser.profile.followeds}}</strong>
        </a>
        <a href="#" class="info-item">
          <i class="icon-edit"></i>
          <span class="text" style="color:#616264;">我的资料</span>
        </a>
      </div>
      <!-- 基本信息 End -->

      <div class="cells-group">
        <a href="javascript:;" @click="logout" class="cell-item text-center text-primary">退出登录</a>
      </div>

    </div>

    <app-tabbar></app-tabbar>
  </div>

  <div v-else>
    <login></login>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar'
import AppTabbar from '@/components/Tabbar'
import Login from './_login'

import { Dialog } from 'vant'
import { removeFromLocal } from '@/utils/localStorage'

export default {
  name: 'account',
  components: {
    Navbar,
    AppTabbar,
    Login
  },
  data() {
    return {
      currentUserId: window.localStorage.getItem('CURRENT_USER'),
      currentUser: null
    }
  },
  created() {
    if ( this.currentUserId ) {
      this.getUserDetail()
    }
  },
  methods: {
    getUserDetail: function() {
      this.$toast.loading({
        duration: 0,
        loadingType: 'spinner',
        message: '正在加载...'
      })
      this.$http.get('/user/detail', {
        uid: this.currentUserId
      }).then((res)=>{
        this.currentUser = res.data
        this.$toast.clear()
      })
    },

    // 清除currentUser
    clearCurrentUser: async function() {
      await removeFromLocal('CURRENT_USER')
    },

    // 退出登录
    logout: function() {
      Dialog.confirm({
        title: '退出登录？',
      }).then(() => {
        this.clearCurrentUser().then(()=>{
          this.$router.push({path: '/'})
        })
      }).catch(() => {
        // on cancel
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style';
</style>

