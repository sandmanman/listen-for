<template>
  <footer class="app-tabbbar">
    <div layout="row stretch-stretch">
      <a href="#" class="tabbbar-item active" self="stretch">
        <i class="icon icon-explore"></i>
        <span class="text">发现</span>
      </a>
      <a href="#" class="tabbbar-item" self="stretch">
        <i class="icon icon-explore"></i>
        <span class="text">视频</span>
      </a>
      <a href="#" class="tabbbar-item" self="stretch">
        <i class="icon icon-user"></i>
        <span class="text">我的</span>
      </a>
      <a href="#" class="tabbbar-item" self="stretch">
        <i class="icon icon-friends"></i>
        <span class="text">朋友</span>
      </a>
      <a href="#" class="tabbbar-item" self="stretch">
        <i class="icon icon-account"></i>
        <span class="text">账号</span>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style lang="scss" scoped>
.app-tabbbar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  height: 98px;

  background: rgba(231, 231, 232, .97);

  > div {
    height: 100%;
  }

  &:before {
    content: '';

    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    height: 1px;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, .15);

    transform: scaleY(0.5);
  }
}

.tabbbar-item {
  color: #989493;
  font-size: 22px;
  text-decoration: none;
  text-align: center;

  &.active {
    color: #e64741;
  }

  .icon {
    display: inline-block;
    width: 48px;
    height: 48px;
  }
  .text {
    display: block;
  }
}
</style>
