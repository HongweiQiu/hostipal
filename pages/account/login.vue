<template>
	<view class="login flex-column" style="height:100vh;">
		<!-- 	<view style="margin-top:100rpx;" class="flex-j-c">

			<view class="logo_width">
				<image class="login_logo" src="../../static/img/login-logo.jpg" mode="aspectFit"></image>
			</view>
		</view> -->
		<view class="login_method u-flex-1">

			<view class="mobilelogin">
				<view class="phone flex-center">
					<image src="../../static/img/user.svg"></image>
					<input type="number" placeholder="请输入手机号" v-model="mobile" placeholder-class="place_style" />
				</view>
				<view class="password flex-center">
					<image src="../../static/img/password.svg"></image>
					<input password placeholder="请输入密码" v-model="password" placeholder-class="place_style" />
				</view>
				<view class="determine_mobile" @click="mobileLogin">登录</view>

				<view class="flex-left-right fs-13 gray-font">

					<view class="" @click="pageUrl('forget')">忘记密码</view>
					<view class="" @click="pageUrl('register')">
						<text>还没有账号?</text>
						<text class="blue-font">立即注册</text>
					</view>
				</view>
			</view>

			<!-- 微信登录 -->
			<view class="wechat_login">
				<view class="">
					<view class="divider gray-font">其他方式登录</view>
					<view class="weixin_button">
						<button @click="wechatLogin">
							<text class="iconfont icon-weixin weixin_img"></text>
						</button>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				password: '',
			};
		},
		methods: {
			pageUrl(data) {
				uni.navigateTo({
					url: data
				}), 300
			},
			// 手机登录
			mobileLogin() {
				let {
					mobile,
					password
				} = this;
				if (!mobile) {
					this.$Toast('手机号码不能为空，请输入手机号');
					return;
				}
				if (!password) {
					this.$Toast('密码不能为空，请输入密码');
					return;
				}

				let params = {
					account: mobile,
					password: password,
				};

				this.$get(this.$api.userLogin, params, res => {
					let data = res.data;
					if (data.code == 1) {
						this.$Toast('登录成功，将跳转到首页');
						getApp().globalData.isReload = true;
						uni.setStorageSync('userInfo', data.data.userinfo);
						uni.setStorageSync('userToken', data.data.userinfo.token);
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/tabar/index'
							});
						}, 1000)
					} else {
						this.$Toast(data.msg);
					}
				});
			},

			// 微信端微信登录
			// #ifdef MP-WEIXIN
			wechatLogin(e) {
				let _ = this;
				uni.getUserProfile({
					desc: '授权确认',
					success(res1) {
						uni.login({
							provider: 'weixin',
							success(res) {
								_.$get(_.$api.userWx_login, {
									code: res.code
								}, (result) => {

									let {
										data
									} = result;
									if (data.code == 1) {
										if (typeof data.data == 'string') {
											uni.navigateTo({
												url: './bind?openId=' + data.data
											})
										} else {
											_.$Toast('登录成功，将跳转到首页');
											getApp().globalData.isReload = true;
											uni.setStorageSync('userInfo', data.data);
											uni.setStorageSync('userToken', data.data.token);
											setTimeout(() => {
												uni.reLaunch({
													url: '/pages/tabar/index'
												});
											}, 1000)
										}
									} else {
										_.$Toast(data.msg)
									}
								})
							}
						})
					}
				})

			}
			// #endif
		}
	};
</script>

<style lang="scss">
	page {
		background: #fff;
	}

	.logo_width {
		text-align: center;
		/* margin: 60rpx 0 80rpx; */
		height: 300rpx;
		width: 400rpx;
		display: flex;
		align-items: center;
	}

	.login .login_logo {
		width: 100%;
		height: 100%;
	}

	.login .login_method {
		display: flex;
		/* height: 72%; */
		flex-direction: column;
		justify-content: space-between;
	}

	.login .phone,
	.login .password {
		display: flex;
	}

	.login .mobilelogin {
		margin: 0 30rpx;

		image {
			width: 70rpx;
			height: 60rpx;
			margin-right: 24rpx;
		}
	}

	.login .mobilelogin input {
		width: 100%;
	}

	.login .determine_mobile {
		background: #386FF0;
		height: 79rpx;
		color: white;
		border-radius: 39rpx;
		line-height: 79rpx;
		text-align: center;

		margin: 60rpx 0 30rpx;
	}

	.login .phone,
	.login .password {
		border-bottom: 1px solid #eee;

		height: 102rpx;
	}

	.wechat_login {
		/* position: absolute; */
		z-index: 0;
		/* bottom: 20rpx; */
		padding-bottom: 20rpx;
		width: 100%;
		text-align: center;
		font-size: 24rpx;
	}

	.wechat_login .divider {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 20rpx;
	}

	.wechat_login .divider:before {
		content: '';
		display: block;

		width: 100rpx;
		box-sizing: border-box;
		height: 1px;
		border-color: #999;
		border-style: solid;
		border-width: 1px 0 0;
		margin-right: 30rpx;
	}

	.wechat_login .divider:after {
		margin-left: 30rpx;
		content: '';
		display: block;

		width: 100rpx;
		box-sizing: border-box;
		height: 1px;
		border-color: #999;
		border-style: solid;
		border-width: 1px 0 0;
	}


	.login .weixin_button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}




	.login {
		.weixin_img {
			font-size: 80rpx;
			color: #00C800;
			display: flex;
			flex-direction: column;
			margin: 30rpx 0 40rpx;

			&::after {
				content: '微信';
				text-align: center;
				font-size: 30rpx;
				color: black;
				margin-top: -10rpx;
			}
		}

	}
</style>
