<template>
  <nav class="quick-menu">
    <div layout="row stretch-stretch">
      <a href="#" class="quick-menu-item">
        <i class="icon icon-fm"></i>
        <span class="text">私人FM</span>
      </a>
      <a href="#" class="quick-menu-item">
        <i class="icon icon-day"></i>
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
  name: 'quickMenu'
}
</script>

<style lang="scss" scoped>
.quick-menu {
  padding-top: 34px;
  padding-bottom: 34px;
}
.quick-menu-item {
  .icon {
    display: inline-block;
    width: 94px;
    height: 94px;
    overflow: hidden;
  }
  .text {
    display: block;

    color: #37383a;
    font-size: 28px;
    text-align: center;
  }
}
</style>

