<template>
	<view class="select-address">
		<radio-group @change="radioChange">
			<view v-for="(item, index) in 20" :key="item.value" class="flex-center sign-address border" color="#386FF0">
				<radio :value="item" color="#386FF0"/>
				<view>
					<view class="flex-left-right">
						<view class="bold flex-center">
							<text>医来顺</text>
							<text class="default">默认</text>
						</view>
						<view>13445678654</view>
					</view>
					<view class="fs-13 " style="margin-top: 30rpx;">浙江省杭州市拱墅区湖州街168号胜太科技大厦501室</view>
				</view>
			</view>
		</radio-group>
		<view class="fixed-style">	<view class="submit">新增收货地址</view></view>
	
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.select-address {
		min-height: 100vh;
		background: white;

		.default {
			background: #386FF0;
			font-size: 20rpx;
			color: white;
			padding: 0 4rpx;
			font-weight: normal;
			margin:-0rpx 0 0 10rpx;
			border-radius: 4rpx;
			
		}

		.sign-address {
			padding: 30rpx 0;
			margin: 0 30rpx;

			radio {
				margin-right: 30rpx;
			}
		}
		.fixed-style{
			position: fixed;
			bottom: 0rpx;
			width: 100%;
			padding: 30rpx 0;
			background: white;
			.submit{
				width: 630rpx;
				height: 79rpx;
				line-height: 79rpx;
				margin: 0 auto;
				color: white;
				text-align: center;
				background: #386FF0;
				border-radius: 39rpx;
			}
		}
		
	}
</style>
