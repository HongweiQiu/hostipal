<template>
	<view class="recommend r-5 white-back" :class="{'open-flex':open}" @click="$doubleClick(detailPage)">
		<view>
			<image src="../../static/img/homeHL.png" mode="widthFix"></image>
		</view>
		<view class="status-one">
			<view class="u-line-2 bold" >ZHENDE 振德 振德 一次性医用外科口罩,一次性医用外科口罩</view>
			<view style="margin-top: 20rpx;" class="flex-left-right">
				<view>
					<view class="red-font">市场价:￥999.00</view>
					<view class="gray-font fs-11">挂网价:￥299.99</view>
				</view>
				<view v-if="showCar">
					<text class="iconfont icon-gouwuche21" @click="showCart"></text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {

		props: {
			showCar: {
				default: false,
				type: Boolean
			},
			open: {
				default: false,
				type: Boolean
			},
			
		},
		methods:{
			showCart(){
				this.$emit('addCart')
			},
			detailPage(){
				uni.navigateTo({
					url:'/pages/index/shopdetail?id='+12
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.recommend {
		width: 100%;
		padding: 20rpx;

		image {
			width: 100%;
		}

		.icon-gouwuche21 {
			font-size: 40rpx;
			color: #333;
			border: 1px solid #333;
			display: inline-block;
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
			text-align: center;
		}
	}

	.open-flex {
		display: flex;
		image {
			width: 240rpx;
		}
		.status-one{display: flex;flex-direction: column;
		justify-content: space-between;}
	}
</style>
