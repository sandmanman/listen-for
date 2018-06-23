<template>
  <div class="panel">
    <div class="panel-header">
      <h3 class="panel-title"><a href="#">推荐歌单</a></h3>
    </div>
    <div class="panel-body" layout="row top-center">
      <a href="#" class="playlist-card" v-for="item in playlist" :key="item.id">
        <div class="cover" :style="{backgroundImage:`url(${item.picUrl})`}"></div>
        <p class="title">{{item.name}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'playlist',
  props: {
    playlist: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist-card {
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 25px;

  width: 32%;

  .cover {
    padding-top: 100%;

    background-color: #eee;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    border-radius: 5px;
  }
  .title {
    margin-top: 10px;
    margin-bottom: 0;
    height: 60px;
    overflow: hidden;

    color: #67686a;
    font-size: 26px;
    line-height: 32px;

    word-break: break-all;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>


