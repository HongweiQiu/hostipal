<template>
	<view>
		<view class="flex-left-right white-back c-search">
			<view class="search-text ">
				<view class="flex-center" @click="show=!show">
					<text class="fs-13" style="margin-right: 4rpx;">{{condition}}</text>
					<text class="iconfont icon-xiala " :class="{'t-180':show}"></text>
				</view>
				<view class="flex-center" style="margin-left: 54rpx;" @click="search">
					<text class="iconfont icon-sousuo"></text>
					<input v-model="keyword" placeholder="搜索你想知道的" disabled placeholder-class="fs-12" class="input" />
				</view>
			</view>
			<view>
				<text v-if="showIcon" @click="startSearch">搜索</text>
				<text class="iconfont icon-kefu " 	 v-else></text>
			</view>
		</view>
		<view class=" search-cate" v-if="show">
					<view class="type">
						<text @click="getType('商品')">商品</text>
						<text @click="getType('文章')">文章</text>
					</view>

			</view>
		</view>
</template>

<script>
	export default {
		props: {
			showIcon: {
				default: false,
				type: Boolean
			},
			type: {
				default: '商品',
				type: String
			},
		},
		data() {
			return {
				show: false,
				condition: '商品'
			}
		},

		methods: {
			search() {
				this.$emit('getAction', this.condition)
			},
			getType(item) {
				this.condition = item;
				this.show = false;
			},
			startsearch() {
				this.$emit('submit', this.condition)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.c-search {
		padding: 30rpx 20rpx 30rpx 30rpx;
	}

	.search-text {
		height: 60rpx;
		display: flex;
		align-items: center;
		color: #999;
		border-radius: 30rpx;
		padding: 0 30rpx;
		background: #eee;
		width: 620rpx;
		box-sizing: border-box;

		.input {
			margin-left: 9rpx;
		}

	}

	.icon-kefu {
		font-size: 52rpx;
	}

	.icon-xiala {
		font-size: 20rpx;
		margin-left: 8rpx;
	}

	.icon-sousuo {
		font-size: 40rpx;
	}

	.search-cate {
		position: absolute;
		margin: -30rpx 0 0 30rpx;
		z-index: 99;
		background: white;

		.type {
			width: 110rpx;
			height: 110rpx;
			padding: 10rpx 0;
			font-size: 26rpx;
			display: flex;
			flex-direction: column;
			border-radius: 4rpx;
			box-shadow: 0rpx 2rpx 4rpx rgba(0, 0, 0, 0.35);
			justify-content: space-around;
			align-items: center;
		}
	}
</style>
