(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/shopdetail"],{"07be":function(t,e,n){"use strict";n.r(e);var r=n("59af"),i=n("826b");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("69a7");var o,c=n("f0c5"),u=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"8e3d223a",null,!1,r["a"],o);e["default"]=u.exports},"579e":function(t,e,n){"use strict";(function(t){function n(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw o}}}}function r(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=getApp().globalData,c=o.imgRemote,u={components:{},data:function(){return{showParams:!1,showCart:!1,maskShow:!0,showcart:!1,path:"",cartCount:"",base:{width:"540rpx",height:"800rpx",views:[{type:"view",css:{background:"#57B127",width:"540rpx",height:"800rpx"}},{type:"view",css:{left:"40rpx",top:"60rpx",background:"#fff",radius:"10rpx",width:"460rpx",height:"680rpx",shadow:"0 20rpx 48rpx rgba(0,0,0,.05)"}},{type:"image",src:"",css:{left:"72rpx",top:"86rpx",width:"400rpx",height:"400rpx",radius:"10rpx"}},{type:"text",text:"1212",maxLines:2,css:{fontWeight:"bold",left:"72rpx",top:"500rpx",width:"260rpx"}},{type:"text",text:"",css:{color:"#F01D1D",left:"72rpx",top:"600rpx"}},{type:"view",css:a({left:"40rpx",top:"648rpx",background:"#E1FFE3",radius:"10rpx",width:"245rpx",height:"40rpx"},"radius","0 20rpx 20rpx 0")},{type:"text",text:"长按识别小程序",css:{color:"#008909",left:"72rpx",top:"650rpx"}},{type:"image",src:"../../static/img/mp.jpg",css:{left:"330rpx",top:"500rpx",width:"150rpx",height:"150rpx"}}]},imgRemote:c,ware:[],maxPrice:"",minPrice:"",explain:"",currentIndex:0,id:""}},methods:{canvasToTempFilePath:function(){var e=this,n=this.$refs.painter;n.render(this.base),n.canvasToTempFilePath().then((function(n){e.path=n.tempFilePath,t.saveImageToPhotosAlbum({filePath:e.path,success:function(e){t.showModal({title:"保存成功",content:"图片成功保存到相册了，快去分享朋友圈吧",showCancel:!1,confirmText:"好的",confirmColor:"#818FFB"})}})}))},goodDetail:function(t){var e=this;this.$get(this.$api.goodDetail,{id:t},(function(t){var r=t.data;if(1==r.code){r.data.content=r.data.content.replace('<img src="','<img style="max-width:100%;height:auto" src="'+getApp().globalData.imgRemote),e.ware=r.data;var i,a=[],o=n(r.data.sku);try{for(o.s();!(i=o.n()).done;){var c=i.value;a.push(c.market_price)}}catch(u){o.e(u)}finally{o.f()}e.maxPrice=Math.max.apply(Math,a).toFixed(2),e.minPrice=Math.min.apply(Math,a).toFixed(2),e.base.views[2].src=e.imgRemote+e.ware.main_image,e.base.views[3].text=e.ware.name,1==e.ware.sku.length?e.base.views[4].text="￥"+e.ware.sku[0].market_price:e.base.views[4].text="￥"+e.minPrice+"-"+e.maxPrice}})),this.$get(this.$api.mainSevice,{},(function(t){var n=t.data;1==n.code&&(e.explain=n.data)}))},changCurrent:function(t){this.currentIndex=t.target.current},playBill:function(){this.cancelShare()},buyGood:function(){this.showCart=!0},close:function(){this.getCount()},getCount:function(){var t=this;this.$get(this.$api.cart_count,{},(function(e){var n=e.data;1==n.code&&(t.cartCount=n.data)}))},goodLike:function(e){this.$get(this.$api.goodsJoin_like,{token:t.getStorageSync("userToken"),goods_id:e},(function(){}))},shopcartPage:function(){this.$needLogin((function(){t.switchTab({url:"../tabar/shopcart"})}))}},onLoad:function(e){var n=e.id;this.goodDetail(n),this.id=e.id,this.getCount(),t.getStorageSync("userToken")&&this.goodLike(n)},onShareAppMessage:function(){return this.maskShow=!1,{title:this.ware.name,path:"/pages/index/shopdetail?id="+this.id,imgageUrl:this.imgRemote+this.ware.main_image}},onShareTimeline:function(){}};e.default=u}).call(this,n("543d")["default"])},"59af":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"0a0b"))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,"2053"))},myAddcart:function(){return n.e("components/addcart/index").then(n.bind(null,"99fc"))}},i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.showParams=!0},t.e1=function(e){return t.$refs.poster.close()},t.e2=function(e){t.showCart=!1})},a=[]},"69a7":function(t,e,n){"use strict";var r=n("e2e0"),i=n.n(r);i.a},"826b":function(t,e,n){"use strict";n.r(e);var r=n("579e"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"92ce":function(t,e,n){"use strict";(function(t){n("9f40");r(n("66fd"));var e=r(n("07be"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e2e0:function(t,e,n){}},[["92ce","common/runtime","common/vendor"]]]);