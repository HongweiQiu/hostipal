<template>
	<view class="classify">
		<u-sticky>
			<view style="padding: 30rpx 0; " class="white-back">
				<view class="flex-center search-cate" @click="search">
					<text class="iconfont icon-sousuo"></text>
					<input v-model="keyword" placeholder="搜索你想知道的" disabled placeholder-class="fs-12" class="input" />
				</view>
			</view>

		</u-sticky>

		<view class="cate-info flex">
			<scroll-view class="left-area" scroll-y="true" style="height:90vh;">
				<view v-for="(item,index) in 2" class="first-cate" :key="index">
					<view class="first-name" :class="{'active':index==activeIndex}" @click="activeIndex=index">
						<text class="text">地址器材</text>

					</view> <text class="iconfont icon-sanjiao2 t-180" @click="index==!activeIndex"></text>
					<view v-for="(item2,index) in 2" v-if="index==activeIndex" class="second-name fs-11">
						<text class="text">12</text>
					</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" style="height:89vh;">
				<view class="third-cate" v-for="(item,index) in 4" :key="index">
					<view class="third-name">低值耗材</view>
					<view class="flex all-third">
						<view class="center" v-for="(item,index) in 4" :key="index">
							<image src="../../static/img/classify_active.png"></image>
							<view class="fs-13">医用口罩</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0
			}
		},
		methods: {
			search() {
				uni.navigateTo({
					url: '/pages/classify/enterClassify'
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.classify {


		.search-cate {
			width: 690rpx;
			background: #EEE;
			border-radius: 30rpx;
			height: 60rpx;
			padding: 20rpx;
			margin: 0 auto;

			.icon-sousuo {
				margin-right: 9rpx;
				font-size: 38rpx;
			}
		}

		.left-area {
			width: 180rpx;
			background: white;

			.first-name .text {
				width: 100%;
				display: inline-block;
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 26rpx;
				border-bottom: 1px solid #eee;
			}

			.second-name .text {
				width: 100%;
				display: inline-block;
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 26rpx;
				border-bottom: 1px solid #eee;
			}

			.icon-sanjiao2 {
				position: absolute;
				left: 10rpx;
				color: #386FF0;
				margin-top: -8rpx;
			}

			.active {
				background: #f8f8f8;
				color: #386FF0;
				display: flex;
				align-items: center;

				&::before {
					content: '';
					width: 10rpx;
					height: 80rpx;
					line-height: 80rpx;
					position: absolute;
					left: 0;
					background: #386FF0;
					display: inline-block;
					border-radius: 3rpx;
				}

			}
		}

		.third-cate {
			background: white;
			border-radius: 10rpx;
			margin:30rpx;
			padding: 0 20rpx 20rpx;

			.third-name {
				height: 64rpx;
				line-height: 64rpx;
				font-weight: bold;
				font-size: 26rpx;
			}

			image {
				width: 142rpx;
				height: 142rpx;
			}

			.all-third {
				flex-basis: 33%;
				flex-wrap: wrap;justify-content: space-between;
			}
		}
	}
</style>
