<template>
	<view class="article">
		<view class="info" @click="$doubleClick(newDetailPage)">
			<view class="u-line-3 bold">转作风 优环境 | 市三医院开展健康科普专家转作风 优环境 | 市三医院</view>
			<view class="fs-13 gray-font">
				<text>人民网</text>
				<text>2021-02-23</text>
				<text class="iconfont icon-bangzhuzhongxin">3756</text>
			</view>
		</view>
		<view>
			<image src="../../static/img/classify.png" mode="aspectFill" class="video r-5"></image>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			newDetailPage(){
				uni.navigateTo({
					url:'/pages/index/newDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.article {
		padding:30rpx 0;
		border-bottom: 1px solid #eee;

		display: flex;

		.info {
			display: flex;
			flex-direction: column;
			justify-content: space-between
		}

		.video {
			width: 230rpx;
			height: 154rpx;
		}
	}
</style>
