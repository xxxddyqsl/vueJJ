<!--  -->
<template>
  <div class="loginRegister-wrapper gg-flex-3  ">
    <div class="loginRegister-left gg-flex-1">
      <img draggable="false" class="loginRegister-new-logo" src="../assets/images/new-logo.png" alt="">
    </div>
    <div class="loginRegister-right">
      <div class="loginRegister-right-main" v-if="!registrationSuccess">
        <div class="loginRegister-right-main-from">
          <div class="login-right-main-from-item gg-flex-3">
            <div class="login-right-main-from-item-select">
              <el-select v-model="loginFrom.countryArea" placeholder="Choose your country/region" :popper-append-to-body="false" popper-class="select-popper">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="login-right-main-from-item gg-flex-3" :class="inputFocus=='name'?'gg-input-focus':''">
            <div class="login-right-main-from-item-input">
              <el-input @blur="blurFunc" ref="input_Name" @input="changeName" v-model="loginFrom.Name" placeholder="Enter your name">
                <!-- <i slot="suffix" class="el-input__icon el-icon-error" @click="deleName"></i> -->
              </el-input>
            </div>
          </div>
          <div class="login-right-main-from-item gg-flex-3" :class="inputFocus=='Password'?'gg-input-focus':''">
            <div class="login-right-main-from-item-input">
              <el-input @blur="blurFunc" ref="input_Password" type="Password" @input="changePassword" v-model="loginFrom.Password" placeholder="Enter password">
                <!-- <i slot="suffix" class="el-input__icon el-icon-error" @click="delePassword"></i> -->
              </el-input>
            </div>
          </div>
          <div class="login-right-main-from-item gg-flex-3" :class="inputFocus=='EnterThePasswordA'?'gg-input-focus':''">
            <div class="login-right-main-from-item-input">
              <el-input @blur="blurFunc" ref="input_EnterThePasswordA" type="Password" @input="changeEnterThePasswordA" v-model="loginFrom.EnterThePasswordA" placeholder="Confirm password">
                <!-- <i slot="suffix" class="el-input__icon el-icon-error" @click="delePassword"></i> -->
              </el-input>
            </div>
          </div>

        </div>
        <div class="login-right-main-from-Next gg-flex-1" @click="loginRegisterNext">
          <span>Next</span>
        </div>
      </div>
      <!-- 注册成功 - 提示 -->
      <div class=" loginRegister-right-main" v-if="registrationSuccess">
        <div class="loginRegister-right-main-title">Congratulation for join JJ! Now enjoy your chat and work!</div>

        <div class="loginRegister-right-main-footer">
          <div class="login-right-main-from-Next gg-flex-1" @click="login">
            <span>Join an exist group</span>
          </div>
          <div class="login-right-main-from-Next gg-flex-1" @click="login">
            <span>Add some new contacts</span>
          </div>
          <div class="login-right-main-from-Next gg-flex-1" @click="login">
            <span>Skip now</span>
          </div>

        </div>
      </div>

    </div>

    <template v-if="1==0">
      <div class="loginRegister-header  gg-flex-4">
        <img draggable="false" class="loginRegister-header-quit" src="../assets/images/login_quit.png" alt="">
      </div>
      <!--注册 手机号 -->
      <div class="loginRegister-main gg-flex-1 gg-flex-2" v-if="!NextStepCode&&!registeredAccountPassword">
        <div class="loginRegister-main-logo-box  gg-flex-4">
          <img draggable="false" class="loginRegister-main-logo" src="../assets/images/logo.png" alt="">
        </div>

        <div class="login-main-item gg-flex-3">
          <div class="login-main-item-title" style=" opacity: 0.4;">Country&nbsp;/Region</div>
          <div class="login-main-item-input">
            <el-select v-model="countryArea" placeholder="请选择" :popper-append-to-body="false" popper-class="select-popper">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="login-main-item gg-flex-3" :class="inputFocus=='Account'?'gg-input-focus':''">
          <div class="login-main-item-title">{{countryArea}}</div>
          <div class="login-main-item-input">
            <el-input oninput="value=value.replace(/[^\d]/g,'')" @blur="blurFunc" ref="input_account" @input="changeAccount" v-model="information.account" placeholder="请输入手机号码">
              <i slot="suffix" class="el-input__icon el-icon-error" @click="deleAccount"></i>
            </el-input>
          </div>
        </div>

      </div>
      <!--获取验证码 -->
      <div class="loginRegister-main gg-flex-1 gg-flex-2" v-if="NextStepCode&&!registeredAccountPassword">
        <div class="loginRegister-main-logo-box  gg-flex-4">
          <img draggable="false" class="loginRegister-main-logo" src="../assets/images/logo.png" alt="">
        </div>

        <div class="login-main-item gg-flex-3" :class="inputFocus=='VerificationCode'?'gg-input-focus':''">
          <div class="login-main-item-input">
            <el-input oninput="value=value.replace(/[^\d]/g,'')" @blur="blurFunc" ref="input_VerificationCode" @input="changeVerificationCode" v-model="information.VerificationCode" placeholder="请输入验证码">
              <i slot="suffix" class="el-input__icon el-icon-error" @click="deleVerificationCode"></i>
            </el-input>
          </div>
        </div>

      </div>
      <!-- //   注册-下一步流程 账号密码 -->
      <div class="loginRegister-main gg-flex-1 gg-flex-2" v-if="registeredAccountPassword&&!registrationSuccess">
        <div class="loginRegister-main-logo-box  gg-flex-4">
          <img draggable="false" class="loginRegister-main-logo" src="../assets/images/logo.png" alt="">
        </div>
        <div class="login-main-item gg-flex-3" :class="inputFocus=='Password'?'gg-input-focus':''">
          <div class="login-main-item-input">
            <el-input :type="pwdType" v-model="information.password" ref="input_password" @blur="blurFunc" @input="changePassword" placeholder="Password">
              <i slot="suffix" class="el-input__icon el-icon-view" @click="showPwd"></i>
            </el-input>

          </div>
        </div>

        <div class="login-main-item gg-flex-3" :class="inputFocus=='EnterThePasswordA'?'gg-input-focus':''">
          <div class="login-main-item-input">
            <el-input :type="EnterThePasswordAType" @blur="blurFunc" ref="input_EnterThePasswordA" @input="changeEnterThePasswordA" v-model="information.EnterThePasswordA" placeholder="Enter the password a">
              <i slot="suffix" class="el-input__icon el-icon-view" @click="showEnterThePasswordA"></i>
            </el-input>
          </div>
        </div>

      </div>
      <!-- 注册成功 - 提示 -->
      <div class="loginRegister-main gg-flex-1 gg-flex-2" v-if='registrationSuccess' style="margin-top: 175px;">
        <img draggable="false" class="loginRegister-main-RegistrationSuccess-icon" src="../assets/images/RegistrationSuccess.png" alt="">
        <div class="loginRegister-main-RegistrationSuccess-title">Password set successfully...</div>
      </div>

      <div class="loginRegister-footer gg-flex-3" v-if="!registeredAccountPassword">
        <div class="login-main-btn login-main-Return gg-flex-1" v-if="!NextStepCode" @click="goRegister($event)"><span>Return</span></div>
        <div class="login-main-btn login-main-Return gg-flex-1" v-if="NextStepCode" @click="SendCode($event)"><span>Send code</span></div>
        <div class="login-main-btn login-main-NextStep gg-flex-1" @click="goNextStep($event)" :class="NextStepCode&&information.VerificationCode.length<6?'login-main-NextStep-disabled':''"><span>Next step</span></div>
      </div>

      <div class="loginRegister-footer gg-flex-3" v-if="registeredAccountPassword&&!registrationSuccess">
        <div class="login-main-btn login-main-Return gg-flex-1" @click="goCancel($event)"><span>Cancel</span></div>
        <div class="login-main-btn login-main-NextStep gg-flex-1" @click="Determine($event)" :class="information.password==''||information.EnterThePasswordA==''?'login-main-NextStep-disabled':''"><span>Determine</span></div>
      </div>
      <div class="loginRegister-footer gg-flex-1" v-if="registrationSuccess" style="    justify-content: center;">
        <div class="login-main-btn login-main-NextStep  login-main-RegistrationSuccess  gg-flex-1" @click="goRegistrationSuccess($event)"><span>Determine</span></div>
      </div>
    </template>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 注册页面 不用设置 页面id 当前窗口 打开主页面 设置页面id 无法打开主页面
var FRAMEID = '';
import services from '../../static/utils/services'
import utils from '../../static/utils/utils'
export default {
  name: 'loginRegister',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      loginFrom: {
        // 国家地区
        countryArea: '',
        Email: '',
        Phone: '',
        Name: '',
        //   密码
        password: '',
        //   确认密码
        EnterThePasswordA: '',
      },

      inputFocus: '',
      countryArea: '',
      options: [{
        value: '+86',
        label: '中国'
      }, {
        value: '+886',
        label: '台湾'
      }, {
        value: '+1',
        label: '美国'
      }, {
        value: '+82',
        label: '韩国'
      }, {
        value: '+7',
        label: '俄罗斯'
      }, {
        value: '+81',
        label: '日本'
      }],
      information: {
        //   登录类型
        Type: null,
        account: '13962524311',
        password: 'a123456789',
        // 验证码
        VerificationCode: '',
        // 确认密码
        EnterThePasswordA: 'a123456789',
      },
      //   是否开启下一步 获取验证码
      NextStepCode: false,
      //   注册-下一步流程 账号密码
      registeredAccountPassword: false,
      //   密码
      pwdType: 'password',
      //   确认密码
      EnterThePasswordAType: 'password',
      //   注册成功页
      registrationSuccess: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // cef框架
     let params;
    if (typeof jj != 'undefined') {
      // 获取url 后面的参数
      params = services.getSearch(window.location.href);
    } else { 
       // 获取url 后面的参数
    params = JSON.parse(this.$route.query.params);
    if (params.Type == "Phone") {
      this.loginFrom.Phone = params.Phone;
    }
    if (params.Type == "Email") {
      this.loginFrom.Email = params.Email;
    }
    }
    // console.log(this.params)
    utils.FRAMEID = FRAMEID;
    // 引入对应的js
    // utils.writeScript(FRAMEID);
   
    // console.log(JSON.parse(this.$route.query.params));
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  //方法集合
  methods: {
    // 新版- 逻辑 - 开始
    // 监听 name 输入
    changeName() {
      this.inputFocus = 'Name';
    },
    // 清空 name 输入
    deleName() {
      this.loginFrom.Name = '';
    },
    // 注册 - 下一步
    loginRegisterNext() {
      this.registrationSuccess = true;
    },
    login() {
      let params = {
        'id': 'f43245bd9824430b973fbf57320bb38b', 'account': '13962524311', 'Email': 'administrator@mail.com', 'password': 'a123456789',
      }
      // jj cef框架暴露的变量
      if (typeof jj != 'undefined') {
        var url = this.$router.resolve({ path: "/Main" });
        let w = 1364;
        let h = 844;
        console.log('jj cef框架暴露的变量')
        // 调用cef 接口 当前窗口打开
        services.frameService.reset('main', 'index.html' + url.href, params, w, h);
      } else {
         console.log(' winOpen')
        var url = this.$router.resolve({ path: "/Main?constraints=" + JSON.stringify(params) });
        let w = 1364;
        let h = 844;
        this.winOpen(url.href, w, h)
      }
    },
    // 新版- 逻辑 -结束

    winOpen(url, width, height) {
      // 获取窗口垂直 居中位置
      let Top = (window.screen.availHeight - 30 - height) / 2;
      // 获取窗口水平 居中位置
      let Left = (window.screen.availWidth - 30 - width) / 2;
      window.open(url, '', 'width=' + width + ',height=' + height + ',top=' + Top + ',left=' + Left + ',toolbar=no,location=no');
    },

    // 老版- 逻辑

    // 清空账号
    deleAccount() {
      this.information.account = '';
    },
    // 手机号 正在输入 添加样式
    changeAccount() {
      this.inputFocus = 'Account';
    },
    // 确认密码 正在输入 添加样式
    changeEnterThePasswordA(val) {
      this.inputFocus = 'EnterThePasswordA';
    },
    // 验证码 正在输入 添加样式
    changeVerificationCode() {
      this.inputFocus = 'VerificationCode';
    },
    // 删除验证码
    deleVerificationCode() {
      this.information.VerificationCode = '';
    },
    //密码 input 正在输入 添加样式
    changePassword(val) {
      this.inputFocus = 'Password';
    },
    // 失去焦点
    blurFunc() {
      this.inputFocus = '';
    },
    // 返回
    goRegister() {
      this.$router.go(-1);
    },
    // 下一步
    goNextStep() {
      // 注册-进入获取验证码流程-之前校验
      if (!this.NextStepCode) {
        if (this.information.account == '') {
          // 调用$nextTick函数 
          this.$nextTick(function () {
            // 获取元素焦点
            this.$refs.input_account.focus()
          });
          return alert('请输入手机号');
        } else {
          //   注册-进入获取验证码流程
          return this.NextStepCode = true;
        }
      }
      //   // 注册-进入获取验证码流程-之后点击下一步 - 校验
      if (this.NextStepCode) {
        if (this.information.VerificationCode == '') {
          // 调用$nextTick函数 
          this.$nextTick(function () {
            // 获取元素焦点
            this.$refs.input_VerificationCode.focus()
          });
          return alert('请输入验证码');
        } else {
          //   注册-进入输入账号密码流程
          return this.registeredAccountPassword = true;
        }
      }


    },
    //获取验证码
    SendCode() {
      alert('验证码：' + 627889);
      this.information.VerificationCode = '627889';
    },
    //密码显示切换
    showPwd() {
      this.pwdType === 'password' ? this.pwdType = '' : this.pwdType = 'password';
      console.log(this.$refs.input_password)
      //   let e = document.getElementsByClassName('el-icon-view')[0];
      let e = this.$refs.input_password.$el.querySelector('.el-icon-view');
      this.pwdType == '' ? e.setAttribute('style', 'color: #409EFF') : e.setAttribute('style', 'color: #c0c4cc');
    },
    //确认密码显示切换
    showEnterThePasswordA() {
      this.EnterThePasswordAType === 'password' ? this.EnterThePasswordAType = '' : this.EnterThePasswordAType = 'password';
      let e = this.$refs.input_EnterThePasswordA.$el.querySelector('.el-icon-view')
      this.EnterThePasswordAType == '' ? e.setAttribute('style', 'color: #409EFF') : e.setAttribute('style', 'color: #c0c4cc');
    },
    // 取消注册 - 返回登录页
    goCancel() {
      this.$router.go(-1);
    },
    // 确认密码-提交
    Determine() {
      if (this.information.password == '') {
        // 调用$nextTick函数 
        this.$nextTick(function () {
          // 获取元素焦点
          this.$refs.input_password.focus();
        });
        return alert('请输入密码');
      };
      if (this.information.EnterThePasswordA == '') {
        // 调用$nextTick函数 
        this.$nextTick(function () {
          // 获取元素焦点
          this.$refs.input_EnterThePasswordA.focus();
        });
        return alert('请输入确认密码');
      };
      // 确认密码 通过 -进入下一步流程-注册成功页面
      this.registrationSuccess = true;
    },
    // 注册成功 - 进入登录页面
    goRegistrationSuccess() {
      // 编程式导航-params传递参数-JS代码内部跳转 + 传递参数 
      let params = ''
      this.$router.push({
        name: "login",
        path: "/login",
        query: {
          params: params,
        }
      });
    },
  },
  // //生命周期 - 创建完成（可以访问当前this实例）
  // created() {

  // },
  // //生命周期 - 挂载完成（可以访问DOM元素）
  // mounted() {

  // },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
@import "../assets/css/loginRegister.css";
.login-main-item:hover {
  border: 1px solid #17ba77;
}
/* .login-main-item-input /deep/ .el-input{
height: 100%;
 } */

.login-main-item-input /deep/ .el-input__inner {
  border: 0px !important;
}
/* 去除 全局的 获取焦点时边框颜色 */
.login-main-item /deep/ .el-input__inner:hover,
.login-main-item /deep/ .el-input__inner:focus {
  border: 0px !important;
}

/* 去除  获取焦点时边框颜色 */
.login-right-main-from-item /deep/ .el-input__inner:hover,
.login-right-main-from-item /deep/ .el-input__inner:focus {
  border: 0px !important;
}
.login-right-main-from-item:hover {
  border: 1px solid #17ba77;
}
.login-right-main-from-item /deep/ .el-input {
  height: 100%;
}
.login-right-main-from-item /deep/ .el-input__inner {
  border: 0px;
  height: 100%;
}
.login-right-main-from-item /deep/ .el-select {
  width: 100%;
  height: 100%;
}
.login-right-main-from-item /deep/ .el-select .el-input__inner {
  border: 0px;
}
</style>
