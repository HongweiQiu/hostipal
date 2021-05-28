<template>
	<view class="add">
		<view style="margin:0 30rpx;">
			<view class="form">
				<text>收货人</text>
				<input type="text" value="" placeholder="姓名" />
			</view>
			<view class="form">
				<text>手机号码</text>
				<input type="text" value="" placeholder="手机号" />
			</view>
			<view class="form" @click="show=true">
				<text>选择地区</text>
				<view class="flex-left-right u-flex-1">
					<text></text>
					<u-icon name="arrow-right" color="#C3C3C3"></u-icon>
				</view>
			</view>

			<textarea placeholder="请填写详细的地址（街道、楼牌等）"></textarea>

			<view class="flex-left-right" style="height: 89rpx;">
				<text class="bold">设为默认地址</text>
				<u-switch v-model="checked" inactive-color="#c3c3c3" active-color="#E8EEFF" />
			</view>
		</view>
		<view class="fixed">
			<view class="c-button custom">确定</view>
		</view>
			<u-select v-model="show" mode="mutil-column-auto" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {},
				checked: false,
				show: false,
								list: [
									{
										value: 1,
										label: '中国',
										children: [
											{
												value: 2,
												label: '广东',
												children: [
													{
														value: 3,
														label: '深圳'
													},
													{
														value: 4,
														label: '广州'
													}
												]
											},
											{
												value: 5,
												label: '广西',
												children: [
													{
														value: 6,
														label: '南宁'
													},
													{
														value: 7,
														label: '桂林'
													}
												]
											}
										]
									},
									{
										value: 8,
										label: '美国',
										children: [
											{
												value: 9,
												label: '纽约',
												children: [
													{
														value: 10,
														label: '皇后街区'
													}
												]
											}
										]
									}
								]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add {
		min-height: 100vh;
		background: white;

		.form {
			height: 89rpx;
			display: flex;
			align-items: center;

			border-bottom: 1px solid #eee;
			text{width: 200rpx;font-weight: bold;}
		}

		textarea {
			width: 100%;
			height: 180rpx;
			padding: 30rpx 0;
			border-bottom: 1px solid #eee;
		}

		.fixed {
			position: fixed;
			bottom: 0;
			background: white;
			padding: 10rpx 0;
			width: 100%;

			.custom {
				width: 630rpx;
			}
		}

		/deep/ .u-switch {
			width: 70rpx;
			height: 30rpx;
			.u-switch__node {
				width: 38rpx !important;
				height: 38rpx !important;
				top: -6rpx;
				background: #999;
			}
		}


		/deep/ .u-switch--on .u-switch__node {
			background: #386FF0;
		}
		/deep/ .u-drawer-content{border-radius: 20rpx 20rpx 0 0;}
	}
</style>
