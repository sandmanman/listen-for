<template>
  <div class="panel">
    <div class="panel-header">
      <h3 class="panel-title"><a href="#">最新音乐</a></h3>
    </div>
    <div class="panel-body" layout="row top-center">
      <a href="#" class="album-card newest-card">
        <div class="cover"></div>
        <p class="title">新歌推荐</p>
        <p class="sub">推荐合口味的好音乐</p>
      </a>
      <a href="#" class="album-card" v-for="item in latestAlbums" :key="item.id">
        <div class="cover" v-lazy:background-image="item.song.album.picUrl"></div>
        <p class="title">{{item.song.album.name}}</p>
        <p class="sub">
          <span v-for="artist in item.song.album.artists" :key="artist.id">{{artist.name}}</span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'latestAlbums',
  props: {
    latestAlbums: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.album-card {
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
  .title,
  .sub {
    word-break: break-all;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .title {
    margin-top: 10px;
    margin-bottom: 0;
    height: 30px;
    overflow: hidden;

    color: #67686a;
    font-size: 26px;
    line-height: 32px;
  }
  .sub {
    margin: 0;

    height: 28px;
    overflow: hidden;

    color: #bbb;
    font-size: 20px;

    > span {
      &:after {
        content: '/';
      }
      &:last-child:after {
        display: none;
      }
    }
  }
}

.newest-card .cover {
  background-image: url('./img/disc_cover_new@3x.png');
}
</style>