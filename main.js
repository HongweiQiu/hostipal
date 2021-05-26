import Vue from 'vue'
import App from './App'
import {
	dianji,
	fomartDate,
	fixed
} from './static/js/common.js';
import {
	api
} from './static/js/api.js';
import {
	get,
	post,
	Toast,
	needLogin,
	showModal
} from './static/js/request.js';
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

Vue.prototype.$api = api;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$Toast = Toast;
Vue.prototype.$needLogin = needLogin;
Vue.prototype.$showModal = showModal;
Vue.prototype.$doubleClick = dianji;
Vue.prototype.$fomartDate = fomartDate;
Vue.prototype.$fixed = fixed;
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
