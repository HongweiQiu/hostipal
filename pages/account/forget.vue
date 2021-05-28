<template>
	<view class="register" :style="{height:height+'px'}">
		<view>
			<form @submit="formSubmit">
				<view class="get_info">
					<view>
						<image src="../../static/img/user.svg" mode=""></image>
						<input type="number" v-model="form.mobile" placeholder="请输入手机号"
							placeholder-class="place_style" />
					</view>
					<view class="flex">
						<image src="../../static/img/yanzhengma.svg" mode="" style="width: 50rpx;margin-left: 5rpx;">
						</image>
						<view class="flex-left-right u-flex-1">
							<input type="number" v-model="form.code" placeholder="请输入验证码"
								placeholder-class="place_style" @focus="back=false" />
							<my-identifyingcode @getCode="getCode" ref="code"></my-identifyingcode>
						</view>
					</view>
					<view>
						<image src="../../static/img/password.svg" mode=""></image>
						<input password v-model="form.password" placeholder="请设置新密码" placeholder-class="place_style" />
					</view>
				
				</view>
				<button form-type="submit" class="submit_button button_style">确认</button>
			</form>
		
		</view>
		
	</view>
</template>

<script>
	const app = getApp().globalData;
	const {
		rootUrl
	} = app;
	export default {
		data() {
			return {

				form: {
					company: '',
					mobile: '',
					code: '',
					password: '',
					repassword: '',
				},
				check: true,
			};
		},
		methods: {
			
			// 获取短信验证码
			getCode() {
				let that = this;
				let {
					mobile
				} = that.form;

				let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if (!reg.test(mobile)) {
					that.$Toast('请输入正确的电话号码', );
					return;
				}

				that.$get(that.$api.mainSend_sms, {
					phone: mobile
				}, (res) => {
					if (res.data.code == 1) {
						that.$refs.code.sendCode();
						that.$Toast('验证码已发送到你手机中，请注意查收');
					} else {
						that.$Toast(res.data.msg);
					}
				})
			},
			formSubmit(e) {
				let that = this;
				let {
					company,
					password,
					repassword,
					mobile,
					code
				} = that.form;
				if (!company) {
					return that.$Toast('单位名称不能为空');
				}
				let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if (!reg.test(mobile)) {
					return that.$Toast('请输入正确的电话号码', );
				}

				if (!code) {
					return that.$Toast('请输入正确的短信验证码');
				}
				if (!password || !repassword) {
					return that.$Toast('密码不能为空');
				}
				if (password != repassword) {
					return that.$Toast('两次输入的密码不一致');
				}

				that.$get(that.$api.userRegister, that.form, (res) => {
					let {
						data
					} = res;
					if (data.code == 1) {
						this.$Toast('登录成功，将跳转到首页');
						getApp().globalData.isReload = true;
						uni.setStorageSync('userInfo', data.data);
						uni.setStorageSync('userToken', data.data.token);
						setTimeout(() => {
							uni.reLaunch({
								url: '/pages/tabar/index'
							});
						}, 1000)
					} else {
						this.$Toast(data.msg)
					}
				})
			}
		}
	};
</script>

<style lang="scss">
	page {
		
		background: white;
	}

	.register {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.register .get_info {
		background: white;
		padding: 0 20rpx;
		margin-top: 10rpx;
	}

	.register .get_info>view {
		display: flex;
		height: 100rpx;
		align-items: center;
		border-bottom: 1px solid #eee;
	}

	.register .get_info>view>image {
		width: 60rpx;
		height: 60rpx;
		margin-right: 24rpx;
	}

	.register .button_style {
		width: 690rpx;
		background: #386FF0;
		height: 79rpx;
		color: white;
		border-radius: 39rpx;
		line-height: 79rpx;
		text-align: center;
		margin: 60rpx auto 30rpx;
	}

	.register .now_login {

		text-align: center;

	}

	.register .agree {
		position: fixed;
		width: 100%;
		bottom: 20rpx;

		.flex-center {
			justify-content: center;
		}

		.u-checkbox {
			display: inline;
			
		}

		.protocol {
			color: #386FF0;
		}
	}

	.iconfont {
		margin-right: 10rpx;
		color: #386FF0;
	}
</style>
