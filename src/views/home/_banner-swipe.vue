<template>
  <div class="banner-swipe">
    <flickity ref="flickity" :options="flickityOptions" class="swipe">
      <div class="swipe-item" v-for="(item, index) in banners" :key="index"
      :style="{backgroundImage:`url(${item})`}"></div>
    </flickity>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  name: 'bannerSlider',
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        autoPlay: true
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

<style lang="scss" scoped>

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
}
.swipe-item {
  width: 100%;
  min-height: 238px;
  overflow: hidden;

  border-radius: 11px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  img {
    display: block;
    width: 100%;

    border-radius: 11px;
  }
}
.flickity-page-dots {
  bottom: 0;
}
</style>

