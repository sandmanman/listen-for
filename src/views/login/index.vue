<template>
  <div class="container-login">
    <div class="header">
      <router-link to="/" class="control-close-btn">&nbsp;</router-link>
      <h3>登录</h3>
    </div>
    <div class="content">
      <router-link to="/login/mobile" class="control-btn">手机号登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  beforeRouteEnter( to, from, next ) {
    // 进入登录页面，判断currentUser是否存在
    next( vm => {
      if( window.localStorage.getItem('CURRENT_USER') ) {
        vm.$router.push({path: '/'})
      } else {
        return false
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.container-login {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;

  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('./img/login_bg_anonymous@3x.png');
}
.header {
  position: relative;

  line-height: 88px;
  text-align: center;

  h3 {
    margin: 0;

    font-size: 34px;
    font-weight: 400;
  }
}
.control-close-btn {
  position: absolute;
  top: 50%;
  left: 30px;

  transform: translate(0, -50%);
}

.content {
  padding-top: 480px;
  padding-left: 54px;
  padding-right: 54px;
}
.control-btn {
  display: block;

  color: #d03d29;
  font-size: 34px;
  line-height: 84px;
  text-align: center;

  border: 2px solid #d03d29;
  border-radius: 84px;

  &:active {
    color: #fff;

    background: #d03d29;
  }
}
</style>
