<template>
  <footer class="app-tabbbar">
    <div layout="row stretch-stretch">
      <router-link to="/" exact class="tabbbar-item" self="stretch">
        <i class="icon icon-discover"></i>
        <span class="text">发现</span>
      </router-link>
      <a href="#" class="tabbbar-item" self="stretch">
        <i class="icon icon-video"></i>
        <span class="text">视频</span>
      </a>
      <a href="#" class="tabbbar-item" self="stretch">
        <i class="icon icon-music"></i>
        <span class="text">我的</span>
      </a>
      <a href="#" class="tabbbar-item" self="stretch">
        <i class="icon icon-friends"></i>
        <span class="text">朋友</span>
      </a>
      <router-link to="/account" class="tabbbar-item" self="stretch">
        <i class="icon icon-account"></i>
        <span class="text">账号</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style lang="scss" scoped>
.app-tabbbar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  height: 98px;

  background: rgba(245, 245, 245, 0.9);

  > div {
    height: 100%;
  }

  &:before {
    content: '';

    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    height: 1px;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, .15);

    transform: scaleY(0.5);
  }
}

.tabbbar-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  min-height: 100%;

  color: #989493;
  font-size: 22px;
  text-decoration: none;
  text-align: center;

  .icon {
    display: inline-block;
    width: 52px;
    height: 52px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .icon-discover {
    background-image: url('../assets/img/btm_icn_discovery@3x.png');
  }
  .icon-video {
    background-image: url('../assets/img/btm_icn_video@3x.png');
  }
  .icon-music {
    background-image: url('../assets/img/btm_icn_music@3x.png');
  }
  .icon-friends {
    background-image: url('../assets/img/btm_icn_friend@3x.png');
  }
  .icon-account {
    background-image: url('../assets/img/btm_icn_account@3x.png');
  }

  .text {
    margin-top: 7px;
    display: block;

    line-height: 22px;
  }

  &.router-link-active {
    color: #e64741;
    .icon-discover {
      background-image: url('../assets/img/btm_icn_discovery_active@3x.png');
    }
    .icon-video {
      background-image: url('../assets/img/btm_icn_video_active@3x.png');
    }
    .icon-music {
      background-image: url('../assets/img/btm_icn_music_active@3x.png');
    }
    .icon-friends {
      background-image: url('../assets/img/btm_icn_friend_active@3x.png');
    }
    .icon-account {
      background-image: url('../assets/img/btm_icn_account_active@3x.png');
    }
  }
}
</style>
