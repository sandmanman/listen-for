<template>
  <div class="container">
    <navbar :title="`手机号登录`" :showBackBtn="true" :backPath="`/login`"></navbar>

    <div class="panel-form">
      <div class="form-group">
        <i class="control-icon control-icon-mobile"></i>
        <input type="number" class="input-control" placeholder="手机号" v-model="mobile">
      </div>
      <div class="form-group">
        <i class="control-icon control-icon-pwd"></i>
        <input type="password" class="input-control" placeholder="密码" v-model="password">
      </div>
      <button class="control-btn" :disabled="disabled" @click="submitAccount">登录</button>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'loginMobile',
  components: {
    Navbar
  },
  data() {
    return {
      disabled: true,
      mobile: null,
      password: null
    }
  },
  watch: {

  },
  methods: {
    submitAccount: async function() {
      let res = await this.$http.get('/login/cellphone')
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-form {
  padding: 20px;
}
.form-group {
  position: relative;

  .control-icon {
    position: absolute;
    left: 0;
    top: 50%;

    transform: translateY(-50%);
  }
}
.input-control {
  padding-left: 60px;

  width: 100%;
  height: 88px;

  border: none;

  border-bottom: 1px solid #eee;
}
.control-icon {
  display: inline-block;
  width: 40px;
  height: 40px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.control-icon-mobile {
  background-image: url('./img/login_icn_mobile@3x.png');
}
.control-icon-pwd {
  background-image: url('./img/login_icn_pwd@3x.png');
}
.control-btn {
  display: block;

  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  width: 90%;
  height: 78px;

  color: #fff;
  font-size: 28px;
  text-align: center;

  background: #e64741;
  border: none;
  border-radius: 78px;

  &[disabled] {
    color: rgba(255,255,255,.4);
  }
}
</style>
