<template>
  <nav class="quick-menu">
    <div layout="row stretch-stretch">
      <a href="#" class="quick-menu-item">
        <i class="icon icon-fm"></i>
        <span class="text">私人FM</span>
      </a>
      <a href="#" class="quick-menu-item">
        <i class="icon icon-daily"></i>
        <span class="daily">{{daily}}</span>
        <span class="text">每日推荐</span>
      </a>
      <a href="#" class="quick-menu-item">
        <i class="icon icon-list"></i>
        <span class="text">歌单</span>
      </a>
      <a href="#" class="quick-menu-item">
        <i class="icon icon-rank"></i>
        <span class="text">排行榜</span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'quickMenu',
  props: {
    daily: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.quick-menu {
  padding-top: 34px;
  padding-bottom: 34px;
}
.quick-menu-item {
  position: relative;

  font-size: 24px;
  text-align: center;

  .icon {
    position: relative;

    display: inline-block;
    width: 94px;
    height: 94px;

    background-color: #e04936;
    background: linear-gradient(to right,#f74e38 0,#e04936 100%);
    border-radius: 94px;

    box-shadow: 0 3px 10px #ffd9d4;

    &:before {
      content: '';

      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;

      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  .icon-fm:before {
    background-image: url('./img/disc_topbtn_fm@3x.png');
  }
  .icon-daily:before {
    background-image: url('./img/disc_topbtn_daily@3x.png');
  }
  .icon-list:before {
    background-image: url('./img/disc_topbtn_list@3x.png');
  }
  .icon-rank:before {
    background-image: url('./img/disc_topbtn_rank@3x.png');
  }

  .text {
    display: block;

    color: #37383a;
  }

  .daily {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 71px;

    color: #fff;
    font-size: 24px;
    font-weight: lighter;
  }
}
</style>

