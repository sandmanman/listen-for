<template>
  <div class="banner-swipe">
    <swipe class="swipe" :autoplay="5000">
      <swipe-item class="swipe-item" v-for="(item, index) in banners" :key="index">
        <img :src="item.picUrl">
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
  data() {
    return {
      flickityOptions: {
        autoPlay: 5000,
        prevNextButtons: false
      }
    }
  },
  props: {
    banners: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
.banner-swipe {
  position: relative;
  padding-top: 20px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 168px;
    background-color: #e64741;
  }
}
.swipe {
  position: relative;
  margin-left: 12px;
  margin-right: 12px;
  overflow: hidden;
  min-height: 238px;
}
.swipe-item {
  overflow: hidden;

  background-color: #eee;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 11px;

  img {
    display: block;

    width: 100%;
  }
}
</style>

