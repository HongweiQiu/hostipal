(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/index"],{143:
/*!********************************************************************!*\
  !*** F:/desktop/hospital/main.js?{"page":"pages%2Forder%2Findex"} ***!
  \********************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){n(/*! uni-pages */4);r(n(/*! vue */2));var e=r(n(/*! ./pages/order/index.vue */144));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},144:
/*!*************************************************!*\
  !*** F:/desktop/hospital/pages/order/index.vue ***!
  \*************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! ./index.vue?vue&type=template&id=0ca91b30&scoped=true& */145),o=n(/*! ./index.vue?vue&type=script&lang=js& */147);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n(/*! ./index.vue?vue&type=style&index=0&id=0ca91b30&lang=scss&scoped=true& */149);var a,s=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),u=Object(s["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"0ca91b30",null,!1,r["components"],a);u.options.__file="pages/order/index.vue",e["default"]=u.exports},145:
/*!********************************************************************************************!*\
  !*** F:/desktop/hospital/pages/order/index.vue?vue&type=template&id=0ca91b30&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=0ca91b30&scoped=true& */146);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},146:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/desktop/hospital/pages/order/index.vue?vue&type=template&id=0ca91b30&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return r}));try{r={uSticky:function(){return n.e(/*! import() | uview-ui/components/u-sticky/u-sticky */"uview-ui/components/u-sticky/u-sticky").then(n.bind(null,/*! @/uview-ui/components/u-sticky/u-sticky.vue */207))},uSubsection:function(){return n.e(/*! import() | uview-ui/components/u-subsection/u-subsection */"uview-ui/components/u-subsection/u-subsection").then(n.bind(null,/*! @/uview-ui/components/u-subsection/u-subsection.vue */313))},uTabs:function(){return Promise.all(/*! import() | uview-ui/components/u-tabs/u-tabs */[n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,/*! @/uview-ui/components/u-tabs/u-tabs.vue */271))},myOrderproduct:function(){return n.e(/*! import() | components/orderproduct/index */"components/orderproduct/index").then(n.bind(null,/*! @/components/orderproduct/index.vue */320))},uPopup:function(){return n.e(/*! import() | uview-ui/components/u-popup/u-popup */"uview-ui/components/u-popup/u-popup").then(n.bind(null,/*! @/uview-ui/components/u-popup/u-popup.vue */285))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.list.length?t.__map(t.list,(function(e,n){var r=t.__get_orig(e),o=t.$fomartDate(e.createtime),i=t.$fixed(Number(e.total_price)+Number(e.freight));return{$orig:r,m0:o,m1:i}})):null),r=t.$fixed(t.addressInfo.money),o=parseFloat(t.totalPrice),i=parseFloat(t.freight);t._isMounted||(t.e0=function(e){return t.$refs.popup.close()}),t.$mp.data=Object.assign({},{$root:{l0:n,m2:r,m3:o,m4:i}})},i=!1,a=[];o._withStripped=!0},147:
/*!**************************************************************************!*\
  !*** F:/desktop/hospital/pages/order/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */148),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},148:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/desktop/hospital/pages/order/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){function n(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw a}}}}function r(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=getApp().globalData,a=i.imgRemote,s={data:function(){return{imgRemote:a,tabListOne:[{name:"待发货"},{name:"待付款"},{name:"待评价"}],curNow:0,tabList:[{name:"全部",id:""},{name:"待付款",id:"1"},{name:"待发货",id:"2"},{name:"待收货",id:"3"},{name:"待评价",id:"4"}],current:0,search_default:!0,list:[],page:1,id:"",addressInfo:"",totalPrice:0,feeInfo:{},freight:0,pay_type:"wxpay",orderInfo:"",index:""}},methods:{nowPay:function(t,e){this.totalPrice=t.total_price,this.freight=this.totalPrice>this.feeInfo.over?0:this.feeInfo.freight,this.index=e,this.orderInfo=t,this.$refs.popup.open()},orderPay:function(){var e=this;t.login({provider:"weixin",success:function(n){var r={token:t.getStorageSync("userToken"),order_id:e.orderInfo.id,pay_type:e.pay_type,code:n.code};e.$get(e.$api.orderPay,r,(function(n){var r=n.data;1==r.code?null==r.data?(e.$Toast("支付成功"),e.getAddress(),e.list[e.index].order_status=2,e.list[e.index].order_status_msg=e.list[e.index].order_status_msg.replace("未支付","已支付")):t.requestPayment({provider:"wxpay",timeStamp:r.data.timeStamp,nonceStr:r.data.nonceStr,package:r.data.package,signType:r.data.signType,paySign:r.data.paySign,success:function(t){e.$Toast("支付成功"),e.list[e.index].order_status_msg=e.list[e.index].order_status_msg.replace("未支付","已支付"),e.list[e.index].order_status=2,e.getAddress()},fail:function(t){e.$Toast("支付取消")}}):e.$Toast(r.msg),e.$refs.popup.close()}))}})},payWay:function(t){this.pay_type=t.detail.value},destPage:function(e,n){1==e||t.navigateTo({url:"/pages/order/orderdetail?id="+e.id+"&index="+n})},orderList:function(e){var n=this,r={token:t.getStorageSync("userToken"),order_status:e,page:this.page};this.$get(this.$api.orderIndex,r,(function(t){var e=t.data;1==e.code?n.list=n.list.concat(e.data):n.$Toast(e.msg)}),!0)},changeFirst:function(t){this.current=t,this.page=1,this.list=[],this.id=t,this.orderList(t)},cancelOrder:function(e,n){var r=this;this.$showModal("确认取消订单?",(function(){var o={token:t.getStorageSync("userToken"),order_id:e};r.$get(r.$api.orderCancel,o,(function(t){var e=t.data;1==e.code?(r.$Toast("取消订单成功"),r.list.splice(n,1)):r.$Toast(e.msg)}))}))},deleteOrder:function(e,n){var r=this;this.$showModal("确认删除订单?",(function(){var o={token:t.getStorageSync("userToken"),order_id:e};r.$get(r.$api.orderDel_order,o,(function(t){var e=t.data;1==e.code?(r.$Toast("删除订单成功"),r.list.splice(n,1)):r.$Toast(e.msg)}))}))},oneMoreOrder:function(e){var r,o=this,i=n(e.details);try{for(i.s();!(r=i.n()).done;){var a=r.value,s={token:t.getStorageSync("userToken"),sku_id:a.sku_id,goods_id:a.goods_id,buy_num:a.buy_num};this.$get(this.$api.cartAdd_cart,s,(function(t){var e=t.data;1==e.code?(o.$Toast("加入购物车成功"),o.close()):o.$Toast(e.msg)}))}}catch(u){i.e(u)}finally{i.f()}setTimeout((function(){t.switchTab({url:"/pages/tabar/shopcart"})}),1e3)},confirmReceipt:function(e,n){var r=this;this.$showModal("确认收货?",(function(){var o={token:t.getStorageSync("userToken"),order_id:e};r.$get(r.$api.orderReceipt,o,(function(t){var e=t.data;1==e.code?(r.$Toast("收货成功"),r.list.splice(n,1)):r.$Toast(e.msg)}))}))},getAddress:function(){var e=this,n={token:t.getStorageSync("userToken")};this.$get(this.$api.userInfo,n,(function(t){var n=t.data;1==n.code&&(e.addressInfo=n.data)}))},getFreight:function(){var t=this;this.$get(this.$api.mainFreight,{},(function(e){var n=e.data;1==n.code&&(t.feeInfo=n.data)}))}},onLoad:function(t){this.activeTab=t.id?t.id:0,this.id=t.id,this.orderList(t.id),this.getAddress(),this.getFreight()},onReachBottom:function(){this.page++,this.orderList(this.id)},onShow:function(){var t=this;setTimeout((function(){var e=getApp().globalData.orderIndex;e&&t.list.splice(e,1)}),1e3)},onHide:function(){getApp().globalData.orderIndex=null},onUnload:function(){getApp().globalData.orderIndex=null}};e.default=s}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},149:
/*!***********************************************************************************************************!*\
  !*** F:/desktop/hospital/pages/order/index.vue?vue&type=style&index=0&id=0ca91b30&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=0ca91b30&lang=scss&scoped=true& */150),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},150:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/desktop/hospital/pages/order/index.vue?vue&type=style&index=0&id=0ca91b30&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}},[[143,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/index.js.map