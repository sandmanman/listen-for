<template>
  <header class="header-wrap">
    <div class="header-control-bar" layout="row center-center">
      <div class="search-bar ignore" layout="row center-center">
        <i class="icon-search"></i>
        <span class="text">给你推荐 土耳其冰淇淋</span>
      </div>
    </div>
    <nav class="navbar" layout="row center-center">
      <a href="#" class="nav-item active">个性推荐</a>
      <a href="#" class="nav-item">主播电台</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerWrap'
}
</script>

<style lang="scss" scoped>
.header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  
  width: 100%;

  background-color: #e64741;
}
.header-control-bar {
  padding-top: 18px;
  padding-bottom: 18px;
}
.search-bar {
  width: 424px;
  height: 60px;

  color: #fff;
  text-align: center;

  border-radius: 60px;

  background: rgba(255,255,255,.4);
  border: none;

  .icon-search {
    display: inline-block;

    width: 27px;
    height: 27px;

    opacity: .7;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('./img/icn_search@3x.png');
  }
  .text {
    font-size: 24px;

    opacity: .75;
  }
}

.navbar {
  padding-top: 23px;
  padding-bottom: 23px;
}
.nav-item {
  position: relative;
  margin-left: 60px;
  margin-right: 60px;

  color: #fff;
  font-size: 32px;
  text-decoration: none;

  &.active {
    font-weight: 600;
  }
  &.active:after {
    content: '';

    position: absolute;
    left: 50%;
    bottom: -10px;

    width: 60px;
    height: 5px;

    border-radius: 5px;
    overflow: hidden;

    background-color: #fff;

    transform: translate(-50%, 0);
  }
}
</style>

