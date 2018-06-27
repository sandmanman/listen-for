<template>
  <div class="banner-swipe">
    <swipe class="swipe" :autoplay="5000">
      <swipe-item class="swipe-item" v-for="(item, index) in banners" :key="index">
        <div class="img-outer" v-lazy:background-image="item.picUrl"></div>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import 'vant/lib/vant-css/swipe.css'
import {Swipe, SwipeItem} from 'vant'

export default {
  name: 'bannerSwipe',
  components: {
    Swipe,
    SwipeItem
  },
  props: {
    banners: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-swipe {
  position: relative;
  padding-top: 10px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 168px;
    background-color: #d43c33;
  }
}
.swipe {
  position: relative;
  margin-left: 12px;
  margin-right: 12px;
  overflow: hidden;

  border-radius: 11px;
}
.swipe-item {
  position: relative;

  overflow: hidden;
  height: 251px !important;

  background-color: #eee;

  .img-outer {
    position: relative;
    z-index: 1;

    display: block;

    width: 100%;
    height: 100%;
    overflow: hidden;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>

