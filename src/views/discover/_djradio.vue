<template>
  <div class="panel">
    <div class="panel-header">
      <h3 class="panel-title"><a href="#">主播电台</a></h3>
    </div>
    <div class="panel-body" layout="row top-center">
      <a href="#" class="djradio-card" v-for="item in djRadios" :key="item.id">
        <div class="cover" :style="{backgroundImage:`url(${item.picUrl})`}"></div>
        <p class="title">{{item.name}}</p>
        <span class="radio-name">{{item.program.radio.name}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'djRadio',
  props: {
    djRadios: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.djradio-card {
  position: relative;

  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 25px;

  width: 32%;

  .cover {
    position: relative;

    padding-top: 100%;

    background-color: #eee;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    border-radius: 5px;

    &:after {
      content: '';

      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;

      width: 100%;
      height: 60px;

      border-radius: 0 0 5px 5px;

      background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.4));

    }
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
  .radio-name {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 60%;

    height: 28px;
    overflow: hidden;

    color: #fff;
    font-size: 22px;

    word-break: break-all;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}
</style>

