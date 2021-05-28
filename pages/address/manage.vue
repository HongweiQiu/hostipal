<template>
	<view class="manage">
		<view class="all-address">
			<view v-for="(item,index) in 20" :key="index">

				<view class="border">
					<view class="flex-left-right" style="padding-top: 30rpx;">
						<text class="fs-18 bold">医来顺</text>
						<text>138****9076</text>
					</view>
					<view style="padding:20rpx 0">浙江省杭州市拱墅区湖州街168号胜太科技大厦501室</view>
				</view>
				<view class="select">
					<view class="select-default flex-center" @click="active=index">
						<image :src="'/static/img/unchecked.svg'" mode="aspectFill" v-if="active!=index"></image>
						<image :src="'/static/img/checked.svg'" mode="aspectFill" v-else></image>
						<text>设为默认地址</text>
					</view>
					<view class="operate">
						<text @click="$doubleClick(editAddress)">编辑</text>
						<text @click="deleteAddress">删除</text>
					</view>
				</view>

			</view>
		</view>
		<view style="height: 100rpx;"></view>
		<view class="fixed">
			<view class="c-button custom" @click="add">添加新地址</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 1
			}
		},
		methods: {
			deleteAddress() {
				this.$showModal('确定要删除该地址吗', () => {})
			},
			editAddress() {
			uni.navigateTo({
				url:'./edit'
			})
			},
			add(){
				uni.navigateTo({
					url:'./add'
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.manage {
		.all-address>view {
			background: white;
			padding: 0 30rpx;
			margin-bottom: 16rpx;

		}

		.select {
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.select-default image {
			width: 32rpx;
			height: 32rpx;
			margin-right: 20rpx;
		}

		.operate text {
			width: 100rpx;
			height: 40rpx;
			line-height: 40rpx;
			margin-left: 31rpx;
			border: 1px solid #ccc;
			border-radius: 20rpx;
			display: inline-block;
			font-size: 24rpx;
			text-align: center;
			box-sizing: border-box;
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
	}
</style>
