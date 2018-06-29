<template>
  <div class="container">
    <navbar :title="`手机号登录`"></navbar>

    <div class="panel-form">
      <div class="form-group">
        <i class="control-icon control-icon-mobile"></i>
        <input type="number" class="input-control" placeholder="手机号" v-model.trim="mobile">
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
import { saveToLocal, getFromLocal } from '@/utils/localStorage'

export default {
  name: 'loginMobile',
  beforeRouteEnter( to, from, next ) {
    // 进入登录页面，判断currentUser是否存在
    next( vm => {
      if( getFromLocal('CURRENT_USER') !== null ) {
        vm.$router.push({path: '/'})
      } else {
        return false
      }
    })
  },
  components: {
    Navbar
  },
  data() {
    return {
      disabled: false,
      mobile: null,
      password: null
    }
  },
  computed: {
    // 校验手机号是否合法
    verifyMobile: function() {
      let mobileReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
      return mobileReg.test(this.mobile)
    }
  },
  methods: {
    saveLocal: async function(id) {
      await saveToLocal('CURRENT_USER', id)
    },
    submitAccount: function() {
      if ( !this.mobile && !this.password ) {
        this.$toast.fail('请输入手机号和密码')
      } else if(!this.verifyMobile) {
        this.$toast.fail('手机号不合法')
      } else {
        this.disabled = true
        this.$http.get('/login/cellphone', {
          phone: this.mobile,
          password: this.password
        }).then((res)=>{
          if ( res.data.code == 200 ) {
            // 登录成功
            // 记录currentUser
            this.saveLocal(res.data.account.id).then(()=>{
              this.$toast.success('登录成功')
              // 返回上一页
              this.$router.go(-1)
            })
            
          } else {
            this.disabled = false
          }
        })
      }
      
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
