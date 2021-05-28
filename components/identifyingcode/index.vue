<template>
	<view class="identifying_code" :class="count == true ? 'graycode' : 'greencode'" @click="getCode">{{str}}</view>
</template>

<script>
	export default {
		data() {
			return {
				count: '',
				str: '获取验证码'
			};
		},
		methods: {
			sendCode() {
				this.count = true;
				if (this.str != '获取验证码') {
					return;
				}
				let seconds = 60;
				let clear = setInterval(() => {
					seconds--;
					this.str = '重新获取('+seconds + 's)';
					if (seconds <= 0) {
						clearInterval(clear);
						this.str = '获取验证码';
						this.count = false;
					}
				}, 1000)
			},
			getCode() {
				if (this.str != '获取验证码') {
					return;
				}
				this.$emit('getCode')
			}
		}
	};
</script>

<style>
	.identifying_code {
		padding: 0 10rpx;
		height: 50rpx;
		line-height: 50rpx;
		color:#999;
		border-radius: 25rpx;
		text-align: center;

	}

	.greencode {
		background: #386FF0;
			color:white;
	}

	.graycode {
		background: #eee;
			color:#999;
	}
</style>
