<template>
  <div class="panel-cells">
    <div class="panel-header" layout="row center-justify">
      <span>歌单({{basicInfo.profile.playlistCount}})</span>
      <span>共被收藏{{basicInfo.profile.playlistBeSubscribedCount}}次</span>
    </div>

    <a href="javascript:;" class="panel-cell-item" layout="row center-center">
      <div class="panel-cell-item-hd" self="stretch">
        <div class="cover music-ranking-cover"></div>
      </div>
      <div class="panel-cell-item-bd" self="stretch size-x1" layout="column center-stretch">
        <h3 class="panel-cell-title">听歌排行</h3>
        <p class="helper-info">累计听歌{{basicInfo.listenSongs}}</p>
      </div>
    </a>
    <!-- / panel-cell-item End -->

    <a href="javascript:;" class="panel-cell-item" layout="row center-center"
    v-for="(item, index) in playlistCreated" :key="`created${index}`">
      <div class="panel-cell-item-hd" self="stretch">
        <div class="cover" v-lazy:background-image="item.coverImgUrl"></div>
      </div>
      <div class="panel-cell-item-bd" self="stretch size-x1" layout="column center-stretch">
        <h3 class="panel-cell-title">{{item.name}}</h3>
        <p class="helper-info">{{item.trackCount}}首，播放{{item.playCount}}次</p>
      </div>
    </a>
    <!-- / panel-cell-item End -->

    <template v-if="playlistSubscribed.length > 0">
      <div class="panel-header" layout="row center-justify">
        <span>收藏的歌单({{playlistSubscribed.length}})</span>
      </div>

      <a href="javascript:;" class="panel-cell-item" layout="row center-center"
      v-for="(item, index) in playlistSubscribed" :key="`subscribed${index}`">
        <div class="panel-cell-item-hd" self="stretch">
          <div class="cover" v-lazy:background-image="item.coverImgUrl"></div>
        </div>
        <div class="panel-cell-item-bd" self="stretch size-x1" layout="column center-stretch">
          <h3 class="panel-cell-title">{{item.name}}</h3>
          <p class="helper-info">{{item.trackCount}}首，播放{{item.playCount}}次</p>
        </div>
      </a>
      <!-- / panel-cell-item End -->
    </template>

    
  </div>
  <!-- / panel-cells End -->
</template>

<script>
export default {
  name: 'playlist',
  props: {
    playlistCreated: null,
    playlistSubscribed: null,
    basicInfo: null
  }
}
</script>

<style lang="scss" scoped>
//
.panel-header {
  padding-left: 20px;
  padding-right: 20px;

  height: 50px;

  color: #717274;
  font-size: 26px;
  line-height: 50px;

  background-color: #f0f1f3;
  border-top: 1px solid #e2e3e5;
}

.panel-cell-item {
  padding: 6px 0 6px 12px;
}
.panel-cell-item-hd {
  .cover {
    width: 108px;
    height: 108px;
    overflow: hidden;

    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #eee;
    background-size: cover;
  }
  .music-ranking-cover {
    background-image: url('./img/list_cover_rank@3x.png');
  }
}
.panel-cell-item-bd {
  position: relative;
  padding-right: 12px;
  margin-left: 20px;

  display: flex;
  align-items: center;

  &:after {
    content: '';

    position: absolute;
    right: 0;
    left: 0;
    bottom: -8px;

    height: 0;

    border-top: 1px solid #e3e4e6;

    transform: scaleY(0.5);
  }

  .panel-cell-title {
    width: 100%;
    height: 45px;
    overflow: hidden;

    margin-top: 0;
    margin-bottom: 5px;
    
    color: #2b2b2d;
    font-size: 34px;
    font-weight: 400;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .helper-info {
    width: 100%;
    margin: 0;

    color: #aaabad;
    font-size: 28px;
  }
}
</style>

