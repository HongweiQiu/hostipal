(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/account/register"],{"0200":function(t,e,n){"use strict";(function(t){n("9f40");o(n("66fd"));var e=o(n("1d5a"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"0888":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp().globalData,o=(n.rootUrl,{data:function(){return{form:{company:"",mobile:"",code:"",password:"",repassword:""},check:!0}},methods:{pageUrl:function(e){t.navigateTo({url:e})},getCode:function(){var t=this,e=t.form.mobile,n=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;n.test(e)?t.$get(t.$api.mainSend_sms,{phone:e},(function(e){1==e.data.code?(t.$refs.code.sendCode(),t.$Toast("验证码已发送到你手机中，请注意查收")):t.$Toast(e.data.msg)})):t.$Toast("请输入正确的电话号码")},formSubmit:function(e){var n=this,o=this,a=o.form,r=a.company,u=a.password,c=a.repassword,i=a.mobile,s=a.code;if(!r)return o.$Toast("单位名称不能为空");var f=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;return f.test(i)?s?u&&c?u!=c?o.$Toast("两次输入的密码不一致"):void o.$get(o.$api.userRegister,o.form,(function(e){var o=e.data;1==o.code?(n.$Toast("登录成功，将跳转到首页"),getApp().globalData.isReload=!0,t.setStorageSync("userInfo",o.data),t.setStorageSync("userToken",o.data.token),setTimeout((function(){t.reLaunch({url:"/pages/tabar/index"})}),1e3)):n.$Toast(o.msg)})):o.$Toast("密码不能为空"):o.$Toast("请输入正确的短信验证码"):o.$Toast("请输入正确的电话号码")}}});e.default=o}).call(this,n("543d")["default"])},"19ad":function(t,e,n){},"1d5a":function(t,e,n){"use strict";n.r(e);var o=n("270a"),a=n("422f");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("69f6");var u,c=n("f0c5"),i=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=i.exports},"270a":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={myIdentifyingcode:function(){return n.e("components/identifyingcode/index").then(n.bind(null,"fbe1"))},uCheckbox:function(){return n.e("uview-ui/components/u-checkbox/u-checkbox").then(n.bind(null,"7b50"))}},a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.back=!1})},r=[]},"422f":function(t,e,n){"use strict";n.r(e);var o=n("0888"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},"69f6":function(t,e,n){"use strict";var o=n("19ad"),a=n.n(o);a.a}},[["0200","common/runtime","common/vendor"]]]);