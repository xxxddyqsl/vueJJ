<template>
  <div class="login-wrapper gg-flex-3">
    <div class="login-left gg-flex-1">
      <img draggable="false" class="login-new-logo" src="../../assets/images/new-logo.png" alt="">
    </div>
    <!-- 登录 第一步 选择登录类型 - 输入邮箱或手机号 -->
    <div class="login-right" v-if="loginFrom.loginCode.type==''?true:false">
      <div class="login-right-header gg-flex-3">
        <!--  扫码-登录 -->
        <img draggable="false" class="login-QR" v-if="this.loginFrom.Type=='QR'?false:true" src="../../assets/images/QR.png" @click="loginWay('QR')" alt="">
        <!-- 账号密码 -登录 -->
        <img draggable="false" class="login-QR" v-else src="../../assets/images/pw.png" @click="loginWay('Email')" alt="">
      </div>
      <div class="login-right-main">
        <!-- 账号密码 -登录 -->
        <template v-if="this.loginFrom.Type=='QR'?false:true">
          <div class="login-right-main-header ">
            <div class="login-right-main-header-toggle gg-flex-3">
              <div class="login-right-main-header-toggle-item gg-flex-3" @click="loginWay('Email')" :class="loginFrom.Type=='Email'?'login-toggle-checked':''"><span v-show="loginFrom.Type=='Email'?true:false" class="login-toggle-checked-mark"></span><span>Email Address</span></div>
              <div class="login-right-main-header-toggle-item gg-flex-3" @click="loginWay('Phone')" :class="loginFrom.Type=='Phone'?'login-toggle-checked':''"><span v-show="loginFrom.Type=='Phone'?true:false" class="login-toggle-checked-mark"></span><span>Phone Number</span></div>
            </div>

          </div>
          <div class="login-right-main-from">
            <div class="login-right-main-from-item" v-show="loginFrom.Type=='Email'?true:false" :class="inputFocus=='Email'?'gg-input-focus':''">
              <el-input @blur="blurFunc" ref="input_Email" @input="changeEmail" v-model="loginFrom.Email" placeholder="Enter your email add">
                <i slot="suffix" class="el-input__icon el-icon-error" @click="deleEmail"></i>
              </el-input>
            </div>
            <div class="login-right-main-from-item gg-flex-3" v-show="loginFrom.Type=='Phone'?true:false" :class="inputFocus=='Phone'?'gg-input-focus':''">
              <div class="login-right-main-from-item-select">
                <el-select v-model="countryArea" placeholder="请选择" :popper-append-to-body="false" popper-class="select-popper">
                  <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value">
                  </el-option>
                </el-select>
              </div>

              <div class="login-right-main-from-item-input">
                <el-input @blur="blurFunc" ref="input_Phone" @input="changePhone" v-model="loginFrom.Phone" placeholder="Enter your email add">
                  <i slot="suffix" class="el-input__icon el-icon-error" @click="delePhone"></i>
                </el-input>
              </div>
            </div>

            <div class="login-right-main-from-convention">
              <div class="login-right-main-from-convention-protocol  gg-flex-3" @mouseover='!loginFrom.protocol? loginFrom.protocol="hover": loginFrom.protocol=loginFrom.protocol' @mouseleave='loginFrom.protocol=="hover" ?loginFrom.protocol=false: loginFrom.protocol=loginFrom.protocol' @click="typeof loginFrom.protocol === 'boolean'?loginFrom.protocol=!loginFrom.protocol:loginFrom.protocol=true">
                <img draggable="false" class="Checkbox-icon" :src="[loginFrom.protocol=='hover'?require('../../assets/images/AutoLogin_hover.png'):!loginFrom.protocol?require('../../assets/images/AutoLogin.png'):require('../../assets/images/AutoLogin_click.png')]" alt="">
                <div class="login-right-main-from-convention-title">I have read and accept <span>Pravicy Policy</span>.</div>
              </div>
              <div class="login-right-main-from-convention-protocol  gg-flex-3" @mouseover='!loginFrom.AutoLogin? loginFrom.AutoLogin="hover": loginFrom.AutoLogin=loginFrom.AutoLogin' @mouseleave='loginFrom.AutoLogin=="hover" ?loginFrom.AutoLogin=false: loginFrom.AutoLogin=loginFrom.AutoLogin' @click="typeof loginFrom.AutoLogin === 'boolean'?loginFrom.AutoLogin=!loginFrom.AutoLogin:loginFrom.AutoLogin=true">
                <img draggable="false" class="Checkbox-icon" :src="[loginFrom.AutoLogin=='hover'?require('../../assets/images/AutoLogin_hover.png'):!loginFrom.AutoLogin?require('../../assets/images/AutoLogin.png'):require('../../assets/images/AutoLogin_click.png')]" alt="">
                <div class="login-right-main-from-convention-title">Keep me log in for 15 days.</div>
              </div>
            </div>

            <div class="login-right-main-from-Next gg-flex-1" @click="loginNext">
              <span>Next</span>
              <!-- 多语言的使用 两种 方式  -->
              <!-- <span> {{ $t('message.title') }}</span> -->
              <!-- <span>{{$i18n.t('message.title')}}</span> -->
            </div>
          </div>
        </template>
        <!-- 扫码-登录 -->
        <div class="login-right-main-QR" v-if="this.loginFrom.Type=='QR'?true:false">
          <div class="login-right-main-QR-header">
            <div class="login-right-main-QR-header-title">QR code login</div>
            <div class="login-right-main-QR-header-subtitle">Use JJ mobile app to scan QR code and login.</div>
          </div>
          <div class="login-right-main-QR-main gg-flex-1">
            <img draggable="false" class="login-right-main-QR-main-img" src="../../assets/images/QR-img.png" alt="">
          </div>
          <div class="login-right-main-from-convention" style="margin-top:34px">
            <div class="login-right-main-from-convention-protocol  gg-flex-3" @mouseover='!loginFrom.AutoLogin? loginFrom.AutoLogin="hover": loginFrom.AutoLogin=loginFrom.AutoLogin' @mouseleave='loginFrom.AutoLogin=="hover" ?loginFrom.AutoLogin=false: loginFrom.AutoLogin=loginFrom.AutoLogin' @click="typeof loginFrom.AutoLogin === 'boolean'?loginFrom.AutoLogin=!loginFrom.AutoLogin:loginFrom.AutoLogin=true">
              <img draggable="false" class="Checkbox-icon" :src="[loginFrom.AutoLogin=='hover'?require('../../assets/images/AutoLogin_hover.png'):!loginFrom.AutoLogin?require('../../assets/images/AutoLogin.png'):require('../../assets/images/AutoLogin_click.png')]" alt="">
              <div class="login-right-main-from-convention-title">Keep me log in for 15 days.</div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <!-- 登录  第二步 选择完登录类型 - 点击进入下一步  -->
    <div class="login-right" v-else>
      <!-- 下一步 - 邮箱 -->
      <div class="login-right-next" v-if="loginFrom.loginCode.type=='Email'?true:false">
        <div class="login-right-next-header">
          <div class="login-right-next-header-title">Check youe email</div>
          <div class="login-right-next-header-subtitle">A 6-digit code was sent to {{loginFrom.Email||'mail@mail.com'}}, Enter it within 10 minutes.</div>
        </div>

        <div class="login-right-main-from" style="margin-top:30px;">
          <div class="login-right-main-from-item" :class="inputFocus=='verificationCode'?'gg-input-focus':''">
            <el-input @blur="blurFunc" ref="input_Email" @input="changeVerificationCode" v-model="loginFrom.loginCode.verificationCode" placeholder="Enter your venrify code">
              <i slot="suffix" class="el-input__icon el-icon-error" @click="deleVerificationCode"></i>
            </el-input>
          </div>
        </div>
        <div class="login-right-next-Code">
          <div class="login-right-next-Code-title">Resend in 30 s</div>
        </div>
        <div class="login-right-next-btn  gg-flex-1" @click="NewLogin" style="margin-top: 122px;">
          <span>Login</span>
        </div>
      </div>
      <!-- 下一步 - 手机号 - 验证码 登录 -->
      <div class="login-right-next" v-if="loginFrom.loginCode.type=='PhoneCode'?true:false">
        <div class="login-right-next-header">
          <div class="login-right-next-header-title">Check youe phone</div>
          <div class="login-right-next-header-subtitle">A 6-digit code was sent to {{ loginFrom.Phone.substr(0,3) + "****" + loginFrom.Phone.substr(7)}}, Enter it within 10 minutes.</div>
        </div>
        <div class="login-right-main-from" style="margin-top:30px;">
          <div class="login-right-main-from-item" :class="inputFocus=='verificationCode'?'gg-input-focus':''">
            <el-input @blur="blurFunc" ref="input_Email" @input="changeVerificationCode" v-model="loginFrom.loginCode.verificationCode" placeholder="Enter your venrify code">
              <i slot="suffix" class="el-input__icon el-icon-error" @click="deleVerificationCode"></i>
            </el-input>
          </div>
        </div>
        <div class="login-right-next-Code">
          <div class="login-right-next-Code-title">Resend in 30 s</div>
        </div>
        <div class="login-right-next-Password ">
          <div class="login-right-next-Password-title" @click="loginFrom.loginCode.type='Password'">Use Password to login.</div>
        </div>

        <div class="login-right-next-btn  gg-flex-1" @click="NewLogin">
          <span>Login</span>
        </div>
      </div>
      <!-- 下一步 - 手机号 - 密码 登录-->
      <div class="login-right-next" v-if="loginFrom.loginCode.type=='Password'?true:false">
        <div class="login-right-next-header">
          <div class="login-right-next-header-title">Enter your password</div>
        </div>
        <div class="login-right-main-from" style="margin-top:30px;">
          <div class="login-right-main-from-item" :class="inputFocus=='Password'?'gg-input-focus':''">
            <el-input type="password" @blur="blurFunc" ref="input_Email" @input="changePassword" v-model="loginFrom.Password" placeholder="Enter password">
              <!-- <i slot="suffix" class="el-input__icon el-icon-error" @click="delePassword"></i> -->
            </el-input>
          </div>
        </div>
        <div class="login-right-next-Password ">
          <div class="login-right-next-Password-title" @click="loginFrom.loginCode.type='PhoneCode'">Login in with verification code</div>
          <div class="login-right-next-Password-subtitle">Forgot password, <span>Reset now</span></div>
        </div>
        <div class="login-right-next-btn  gg-flex-1" @click="NewLogin" style="margin-top: 113px;">
          <span>Login</span>
        </div>

      </div>

    </div>

    <div class="login-header  gg-flex-4" v-if="1==0" @click="closure">
      <img draggable="false" class="login-header-quit" src="../../assets/images/login_quit.png" alt="">
    </div>
    <div class="login-main  gg-flex-1 gg-flex-2" v-if="1==0">
      <div class="login-main-logo-box  gg-flex-4">
        <img draggable="false" class="login-main-logo" src="../../assets/images/logo.png" alt="">
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
      <div class="login-main-item gg-flex-3" style=" margin-bottom: 17px;" :class="inputFocus=='Password'?'gg-input-focus':''">
        <!-- <div class="login-main-item-title">密码</div> -->
        <div class="login-main-item-input">
          <el-input v-model="information.password" ref="input_password" @blur="blurFunc" @input="changePassword" type="password" placeholder="Password">
            <!-- <i slot="suffix" class="el-input__icon el-icon-view" @click="showPwd"></i> -->
          </el-input>
          <!-- <el-input v-model="information.password" ref="input_password" :type="pwdType" placeholder="Password">
            <i slot="suffix" class="el-input__icon el-icon-view" @click="showPwd"></i>
          </el-input> -->
        </div>
      </div>
      <div class="login-main-item-other gg-flex-3">
        <div class="login-main-item-ServiceNumberLogin">Service number login</div>
        <div class="login-main-item-FogetPassword">Foget password？</div>
      </div>

      <div class="login-main-item-AutoLogin gg-flex-3" @mouseover='!information.AutoLogin? information.AutoLogin="hover": information.AutoLogin=information.AutoLogin' @mouseleave='information.AutoLogin=="hover" ?information.AutoLogin=false: information.AutoLogin=information.AutoLogin' @click="typeof information.AutoLogin === 'boolean'?information.AutoLogin=!information.AutoLogin:information.AutoLogin=true">
        <img draggable="false" class="login-main-item-AutoLogin-icon" :src="[information.AutoLogin=='hover'?require('../../assets/images/AutoLogin_hover.png'):!information.AutoLogin?require('../../assets/images/AutoLogin.png'):require('../../assets/images/AutoLogin_click.png')]" alt="">
        <span class="login-main-item-AutoLogin-title" :style="information.AutoLogin||information.AutoLogin=='hover'?'color:#409EFF;opacity: 1;':''">Auto login</span>
        <!-- <el-checkbox class="checkbox" v-model="information.AutoLogin"></el-checkbox> -->
      </div>
      <div class="login-main-btn login-main-SIGNIN gg-flex-1" @click="login($event)"><span>SIGN IN</span></div>
      <div class="login-main-btn login-main-REGISTER gg-flex-1" @click="goRegister($event)"><span>REGISTER</span></div>
    </div>
  </div>
</template>

<script>
var FRAMEID = 'login';
import services from '../../../static/utils/services'

import qs from 'qs';       //引用qs模块
import axios from 'axios'
import utils from '../../../static/utils/utils'

export default {
  name: "login",
  components: {

  },
  data() {
    return {
      // 新版- 逻辑 - 开始
      loginFrom: {
        //   登录类型
        Type: 'Email',
        // 邮箱
        Email: 'administrator@mail.com',
        // 手机号
        Phone: '13962524311',
        // 密码
        Password: '',
        // 协议
        protocol: false,
        // 自动登录
        AutoLogin: false,
        // 验证码类型
        loginCode: {
          type: '',
          verificationCode: '',
        },
      },
      // 新版- 逻辑 -结束

      inputFocus: '',
      countryArea: '+86',
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
        // 自动登录
        AutoLogin: false,
        account: '13962524311',
        password: 'a123456789',
      },
      pwdType: 'password',
      userList: [
        {
          'id': 'f43245bd9824430b973fbf57320bb38b', 'account': '13962524311', 'Email': 'administrator@mail.com', 'password': 'a123456789',
        },
        {
          'id': '5bfcdc99aa55498aa1c5da6be672c136', 'account': '13962524322', 'Email': 'administrator@mail.com', 'password': 'b123456789',
        },
        // { 'id': 'C', 'account': '13962524333', 'password': 'c123456789', 'name': '测试c' }
      ],
    }
  },
  created() {
    // 默认英文
    localStorage.setItem('lang', 'en');
    // 初始化
    this.init();

  },
  mounted() {
    //  console.log('多语言输出测试C===》', this.$t('message.title'));
    //  多语言 -  测试调用 输出
    console.log('多语言输出测试A===》', this.$i18n.t('message.title'));
    // console.log(this.userList)
    // 引入对应的js
    utils.writeScript(FRAMEID);
    window.addEventListener('beforeunload', e => {
      this.beforeunloadFn(e);
    });
  },
  methods: {
    // 新版- 逻辑 - 开始
    // 切换登录 方式
    loginWay(key) {
      this.loginFrom.Type = key;
    },
    // 监听邮箱输入
    changeEmail() {
      this.inputFocus = 'Email';
    },
    // 清空 邮箱输入
    deleEmail() {
      this.loginFrom.Email = '';
    },
    // 监听 手机号码 输入
    changePhone() {
      this.inputFocus = 'Phone';
    },
    // 清空 手机号码 输入
    delePhone() {
      this.loginFrom.Phone = '';
    },
    // 手机号码 或 邮箱 登录 点击下一步
    loginNext() {
      let is = false;
      if (this.loginFrom.Type == 'Email') {
        if (this.loginFrom.Email == '') {
          // 调用$nextTick函数 
          this.$nextTick(function () {
            // 获取元素焦点
            this.$refs.input_Email.focus()
          });
          return alert('请输入邮箱');
        }
        for (let i in this.userList) {
          // 老用户 收到验证码 直接登录 新用户进入注册
          if (this.userList[i].Email == this.loginFrom.Email) {
            is = true;
            break;
          }
        }
      } else if (this.loginFrom.Type == 'Phone') {
        if (this.loginFrom.Phone == '') {
          // 调用$nextTick函数 
          this.$nextTick(function () {
            // 获取元素焦点
            this.$refs.input_Phone.focus()
          });
          return alert('请输入手机号');
        }
        for (let i in this.userList) {
          // 老用户 收到验证码 直接登录 新用户进入注册
          if (this.userList[i].account == this.loginFrom.Phone) {
            is = true;
            break;
          }
        }
      }

      if (!is) {
        //   新用户进入注册
        // 编程式导航-params传递参数-JS代码内部跳转 + 传递参数
        let params = {};
        params.Type = this.loginFrom.Type;
        if (this.loginFrom.Type == 'Phone') {
          params.Phone = this.loginFrom.Phone;
        } else if (this.loginFrom.Type == 'Email') {
          params.Email = this.loginFrom.Email;
        }
        this.$router.push({
          name: "loginRegister",
          path: "/components/loginRegister/",
          query: {
            params: JSON.stringify(params),
          }
        });
        return;
      }
      if (this.loginFrom.Type == 'Email' && is) {
        this.loginFrom.loginCode.type = 'Email';
      } else if (this.loginFrom.Type == 'Phone' && is) {
        // 默认使用手机验证码 登录
        this.loginFrom.loginCode.type = 'PhoneCode';
      };
      console.log(this.loginFrom)
      // 模拟验证码 - 延时1000 执行
      setTimeout(() => {
        alert('验证码：' + 627889);
        this.loginFrom.loginCode.verificationCode = '627889';
      }, 800);
    },
    // 监听 手机验证码  输入
    changeVerificationCode() {
      this.inputFocus = 'verificationCode';
    },
    // 清空 手机验证码 输入
    deleVerificationCode() {
      this.loginFrom.loginCode.verificationCode = '';
    },

    // 新版 验证码 登录
    NewLogin(event) {
      // 不是密码登录 通过邮箱或手机 验证码登录的 校验 验证码
      if (this.loginFrom.loginCode.verificationCode == '' && this.loginFrom.loginCode.type != "Password") {
        alert('请填写验证码');
        return;
      }
      // jj cef框架暴露的变量
      if (typeof jj != 'undefined') {
        let params = this.userList[0];
        var url = this.$router.resolve({ path: "/Main" });
        let w = 1364;
        let h = 844;
        // this.winOpen(url.href, w, h)
        // 调用cef 接口 当前窗口打开
        services.frameService.reset('main', 'index.html' + url.href, params, w, h);
      } else {
        var url = this.$router.resolve({ path: "/Main?constraints=" + JSON.stringify(this.userList[0]) });
        let w = 1364;
        // 826
        let h = 844;
        this.winOpen(url.href, w, h)
      }

    },

    // 新版- 逻辑 -结束


    // 老版- 逻辑

    // 清空账号
    deleAccount() {
      this.information.account = '';
    },
    //密码显示切换
    showPwd() {
      this.pwdType === 'password' ? this.pwdType = '' : this.pwdType = 'password';
      let e = document.getElementsByClassName('el-icon-view')[0];
      this.pwdType == '' ? e.setAttribute('style', 'color: #409EFF') : e.setAttribute('style', 'color: #c0c4cc');
    },
    // 监听页面刷新 触发
    beforeunloadFn(e) {
      e = e || window.event;
      this.setLs('RefreshKey', 'true');
    },
    init() {
      console.log('初始化')
    },
    // input 正在输入 添加样式
    changePassword(val) {
      this.inputFocus = 'Password';
    },
    changeAccount(val) {
      this.inputFocus = 'Account';
    },
    // 失去焦点
    blurFunc() {
      this.inputFocus = '';
    },

    //登录
    login(event) {
      // console.log(event)
      // 点击event.currentTarget为该点击事件绑定的元素对象，className为该元素的class类值
      //  event.currentTarget.className += '  login-main-SIGNIN-click'
      console.log(this.information)
      if (this.information.account == '') {
        // 调用$nextTick函数 
        this.$nextTick(function () {
          // 获取元素焦点
          this.$refs.input_account.focus()
        });
        return alert('请输入手机号');
      };
      if (this.information.password == '') {
        // 调用$nextTick函数 
        this.$nextTick(function () {
          // 获取元素焦点
          this.$refs.input_password.focus()
        });
        return alert('请输入密码');
      };
      // 校验 账号密码 是否存在
      let is = false;
      for (let i in this.userList) {
        if (this.userList[i].account == this.information.account) {
          is = true;
          if (this.userList[i].password == this.information.password) {
            this.userList[i].account = this.countryArea + this.userList[i].account;
            //   编程式导航-params传递参数-JS代码内部跳转 + 传递参数
            // this.$router.push({
            //   path: "/Main",
            //   query: {
            //     constraints: JSON.stringify(this.userList[i]),
            //   }
            // });
            // jj cef框架暴露的变量
            if (typeof jj != 'undefined') {
              let params = this.userList[i];
              var url = this.$router.resolve({ path: "/Main" });
              let w = 1364;
              let h = 844;
              // this.winOpen(url.href, w, h)
              // 调用cef 接口 当前窗口打开
              services.frameService.reset('main', 'index.html' + url.href, params, w, h);
            } else {
              var url = this.$router.resolve({ path: "/Main?constraints=" + JSON.stringify(this.userList[i]) });
              let w = 1364;
              // 826
              let h = 844;
              this.winOpen(url.href, w, h)
            }

            break;
          } else {
            alert('密码不正确');
            break;
          }
        } else {
          is = false;
        }
      }
      // this.userList.map(item => {
      //   if (item.account == this.information.account) {
      //     if (item.password == this.information.password) {
      //       is = true;
      //       item.account = this.countryArea + item.account;
      //       //   编程式导航-params传递参数-JS代码内部跳转 + 传递参数
      //       this.$router.push({
      //         path: "/Main",
      //         query: {
      //           constraints: JSON.stringify(item),
      //         }
      //       });
      //     } else {
      //       is = true;
      //       alert('密码不正确')
      //     }
      //   } else {
      //     is = false;
      //   }
      // })
      if (!is) {
        alert('账号不存在')
      }
      // this.information.account = this.countryArea + this.information.account;
      // utils.setLs('loginInfo', this.information);
      //   编程式导航-params传递参数-JS代码内部跳转 + 传递参数
      // console.log(row);
      // this.$router.push({
      //   // name: "LogDetails",
      //   path: "/Main",
      //   query: {
      //     constraints: JSON.stringify(this.information),
      //   }
      // });
    },
    // 注册页
    goRegister() {
      // 编程式导航-params传递参数-JS代码内部跳转 + 传递参数 
      let params = ''
      this.$router.push({
        name: "loginRegister",
        path: "/components/loginRegister/",
        query: {
          params: params,
        }
      });
    },
    winOpen(url, width, height) {
      // 获取窗口垂直 居中位置
      let Top = (window.screen.availHeight - 30 - height) / 2;
      // 获取窗口水平 居中位置
      let Left = (window.screen.availWidth - 30 - width) / 2;
      window.open(url, '', 'width=' + width + ',height=' + height + ',top=' + Top + ',left=' + Left + ',toolbar=no,location=no');
    },
    // 关闭登录窗口
    closure() {
      if (typeof jj != 'undefined')
        services.frameService.closeMainFrame();
    },

  },
  // 销毁前状态
  beforeDestroy() {
    // console.group("beforeDestroy 销毁前状态 Log===============》");
  },
  destroyed() {
    // console.group("destroyed 销毁完成状态 Log===============》");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/login.css";
.select-popper {
  font-family: "Futura-Medium, Futura" !important;
}
.login-main-item:hover {
  border: 1px solid #17ba77;
}

/* 去除  获取焦点时边框颜色 */
.login-main-item /deep/ .el-input__inner:hover,
.login-main-item /deep/ .el-input__inner:focus {
  border: 0px !important;
}
/* login 新版- */
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
  padding: 0 15px;
  padding-left: 10px;
  border: 0px;
}
.login-right-main-from-item /deep/ .el-select .el-input__suffix {
  right: 0px;
}
</style>
