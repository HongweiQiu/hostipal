(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-upload/u-upload"],{334:
/*!*********************************************************************!*\
  !*** F:/desktop/hospital/uview-ui/components/u-upload/u-upload.vue ***!
  \*********************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var i=n(/*! ./u-upload.vue?vue&type=template&id=0d33af60&scoped=true& */335),o=n(/*! ./u-upload.vue?vue&type=script&lang=js& */337);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(/*! ./u-upload.vue?vue&type=style&index=0&id=0d33af60&lang=scss&scoped=true& */339);var s,a=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),u=Object(a["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"0d33af60",null,!1,i["components"],s);u.options.__file="uview-ui/components/u-upload/u-upload.vue",t["default"]=u.exports},335:
/*!****************************************************************************************************************!*\
  !*** F:/desktop/hospital/uview-ui/components/u-upload/u-upload.vue?vue&type=template&id=0d33af60&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t);var i=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-upload.vue?vue&type=template&id=0d33af60&scoped=true& */336);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},336:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/desktop/hospital/uview-ui/components/u-upload/u-upload.vue?vue&type=template&id=0d33af60&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return i}));try{i={uIcon:function(){return n.e(/*! import() | uview-ui/components/u-icon/u-icon */"uview-ui/components/u-icon/u-icon").then(n.bind(null,/*! @/uview-ui/components/u-icon/u-icon.vue */278))},uLineProgress:function(){return n.e(/*! import() | uview-ui/components/u-line-progress/u-line-progress */"uview-ui/components/u-line-progress/u-line-progress").then(n.bind(null,/*! @/uview-ui/components/u-line-progress/u-line-progress.vue */369))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.showUploadList?e.$u.addUnit(e.width):null),i=e.showUploadList?e.$u.addUnit(e.height):null,o=!e.disabled&&e.maxCount>e.lists.length&&!e.customBtn?e.$u.addUnit(e.width):null,r=!e.disabled&&e.maxCount>e.lists.length&&!e.customBtn?e.$u.addUnit(e.height):null;e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:o,g3:r}})},r=!1,s=[];o._withStripped=!0},337:
/*!**********************************************************************************************!*\
  !*** F:/desktop/hospital/uview-ui/components/u-upload/u-upload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var i=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-upload.vue?vue&type=script&lang=js& */338),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},338:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/desktop/hospital/uview-ui/components/u-upload/u-upload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(/*! ./node_modules/@babel/runtime/regenerator */22));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,o,r,s){try{var a=e[r](s),u=a.value}catch(l){return void n(l)}a.done?t(u):Promise.resolve(u).then(i,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,u,"next",e)}function u(e){r(s,i,o,a,u,"throw",e)}a(void 0)}))}}var a={name:"u-upload",props:{showUploadList:{type:Boolean,default:!0},action:{type:String,default:""},maxCount:{type:[String,Number],default:52},showProgress:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},name:{type:String,default:"file"},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},previewFullImage:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:function(){return[]}},uploadText:{type:String,default:"选择图片"},autoUpload:{type:Boolean,default:!0},showTips:{type:Boolean,default:!0},customBtn:{type:Boolean,default:!1},width:{type:[String,Number],default:200},height:{type:[String,Number],default:200},delBgColor:{type:String,default:"#fa3534"},delColor:{type:String,default:"#ffffff"},delIcon:{type:String,default:"close"},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null},beforeRemove:{type:Function,default:null},limitType:{type:Array,default:function(){return["png","jpg","jpeg","webp","gif","image"]}},index:{type:[Number,String],default:""}},mounted:function(){},data:function(){return{lists:[],isInCount:!0,uploading:!1}},watch:{fileList:{immediate:!0,handler:function(e){var t=this;e.map((function(e){var n=t.lists.some((function(t){return t.url==e.url}));!n&&t.lists.push({url:e.url,error:!1,progress:100})}))}},lists:function(e){this.$emit("on-list-change",e,this.index)}},methods:{clear:function(){this.lists=[]},reUpload:function(){this.uploadFile()},selectFile:function(){var t=this;if(!this.disabled){this.name;var n=this.maxCount,i=this.multiple,o=this.maxSize,r=this.sizeType,s=this.lists,a=(this.camera,this.compressed,this.maxDuration,this.sourceType),u=null,l=n-s.length;u=new Promise((function(t,n){e.chooseImage({count:i?l>9?9:l:1,sourceType:a,sizeType:r,success:t,fail:n})})),u.then((function(e){var r=t.lists.length;e.tempFiles.map((function(e,r){if(t.checkFileExt(e)&&(i||!(r>=1)))if(e.size>o)t.$emit("on-oversize",e,t.lists,t.index),t.showToast("超出允许的文件大小");else{if(n<=s.length)return t.$emit("on-exceed",e,t.lists,t.index),void t.showToast("超出最大允许的文件个数");s.push({url:e.path,progress:0,error:!1,file:e})}})),t.$emit("on-choose-complete",t.lists,t.index),t.autoUpload&&t.uploadFile(r)})).catch((function(e){t.$emit("on-choose-fail",e)}))}},showToast:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||n)&&e.showToast({title:t,icon:"none"})},upload:function(){this.uploadFile()},retry:function(t){this.lists[t].progress=0,this.lists[t].error=!1,this.lists[t].response=null,e.showLoading({title:"重新上传"}),this.uploadFile(t)},uploadFile:function(){var t=arguments,n=this;return s(i.default.mark((function o(){var r,s,a;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:0,!n.disabled){i.next=3;break}return i.abrupt("return");case 3:if(!n.uploading){i.next=5;break}return i.abrupt("return");case 5:if(!(r>=n.lists.length)){i.next=8;break}return n.$emit("on-uploaded",n.lists,n.index),i.abrupt("return");case 8:if(100!=n.lists[r].progress){i.next=11;break}return 0==n.autoUpload&&n.uploadFile(r+1),i.abrupt("return");case 11:if(!n.beforeUpload||"function"!==typeof n.beforeUpload){i.next=22;break}if(s=n.beforeUpload.bind(n.$u.$parent.call(n))(r,n.lists),!s||"function"!==typeof s.then){i.next=18;break}return i.next=16,s.then((function(e){})).catch((function(e){return n.uploadFile(r+1)}));case 16:i.next=22;break;case 18:if(!1!==s){i.next=22;break}return i.abrupt("return",n.uploadFile(r+1));case 22:if(n.action){i.next=25;break}return n.showToast("请配置上传地址",!0),i.abrupt("return");case 25:n.lists[r].error=!1,n.uploading=!0,a=e.uploadFile({url:n.action,filePath:n.lists[r].url,name:n.name,formData:n.formData,header:n.header,success:function(e){var t=n.toJson&&n.$u.test.jsonString(e.data)?JSON.parse(e.data):e.data;[200,201,204].includes(e.statusCode)?(n.lists[r].response=t,n.lists[r].progress=100,n.lists[r].error=!1,n.$emit("on-success",t,r,n.lists,n.index)):n.uploadError(r,t)},fail:function(e){n.uploadError(r,e)},complete:function(t){e.hideLoading(),n.uploading=!1,n.uploadFile(r+1),n.$emit("on-change",t,r,n.lists,n.index)}}),a.onProgressUpdate((function(e){e.progress>0&&(n.lists[r].progress=e.progress,n.$emit("on-progress",e,r,n.lists,n.index))}));case 29:case"end":return i.stop()}}),o)})))()},uploadError:function(e,t){this.lists[e].progress=0,this.lists[e].error=!0,this.lists[e].response=null,this.$emit("on-error",t,e,this.lists,this.index),this.showToast("上传失败，请重试")},deleteItem:function(t){var n=this;e.showModal({title:"提示",content:"您确定要删除此项吗？",success:function(){var e=s(i.default.mark((function e(o){var r;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!o.confirm){e.next=12;break}if(!n.beforeRemove||"function"!==typeof n.beforeRemove){e.next=11;break}if(r=n.beforeRemove.bind(n.$u.$parent.call(n))(t,n.lists),!r||"function"!==typeof r.then){e.next=8;break}return e.next=6,r.then((function(e){n.handlerDeleteItem(t)})).catch((function(e){n.showToast("已终止移除")}));case 6:e.next=9;break;case 8:!1===r?n.showToast("已终止移除"):n.handlerDeleteItem(t);case 9:e.next=12;break;case 11:n.handlerDeleteItem(t);case 12:case"end":return e.stop()}}),e)})));function o(t){return e.apply(this,arguments)}return o}()})},handlerDeleteItem:function(e){this.lists[e].process<100&&this.lists[e].process>0&&"undefined"!=typeof this.lists[e].uploadTask&&this.lists[e].uploadTask.abort(),this.lists.splice(e,1),this.$forceUpdate(),this.$emit("on-remove",e,this.lists,this.index),this.showToast("移除成功")},remove:function(e){e>=0&&e<this.lists.length&&(this.lists.splice(e,1),this.$emit("on-list-change",this.lists,this.index))},doPreviewImage:function(t,n){var i=this;if(this.previewFullImage){var o=this.lists.map((function(e){return e.url||e.path}));e.previewImage({urls:o,current:t,success:function(){i.$emit("on-preview",t,i.lists,i.index)},fail:function(){e.showToast({title:"预览图片失败",icon:"none"})}})}},checkFileExt:function(e){var t=!1,n="",i=/.+\./;return n=e.path.replace(i,"").toLowerCase(),t=this.limitType.some((function(e){return e.toLowerCase()===n})),t||this.showToast("不允许选择".concat(n,"格式的文件")),t}}};t.default=a}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},339:
/*!*******************************************************************************************************************************!*\
  !*** F:/desktop/hospital/uview-ui/components/u-upload/u-upload.vue?vue&type=style&index=0&id=0d33af60&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var i=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-upload.vue?vue&type=style&index=0&id=0d33af60&lang=scss&scoped=true& */340),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},340:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/desktop/hospital/uview-ui/components/u-upload/u-upload.vue?vue&type=style&index=0&id=0d33af60&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-upload/u-upload.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-upload/u-upload-create-component',
    {
        'uview-ui/components/u-upload/u-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(334))
        })
    },
    [['uview-ui/components/u-upload/u-upload-create-component']]
]);
