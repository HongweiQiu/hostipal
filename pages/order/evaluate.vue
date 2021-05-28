<template>
	<view class="evaluate">
		<view class="all-good">
			<view v-for="(item,index) in 4" :key="index">
				<my-orderproduct></my-orderproduct>
			</view>

		</view>
		<view class="rank">
			<view class="flex-column star">
				<u-rate v-model="value" active-color="#FFC60B" size="44"></u-rate>
				<text class="fs-13 gray-font">如果满意请给五星好评哦~</text>
			</view>
			<view class="text-info">
				<textarea v-model="think" placeholder="产品怎么样，快来发表你的看法~" />
				<u-upload :custom-btn="true" del-bg-color="#386FF0">
					<view slot="addBtn" class="slot-btn flex-column" hover-class="slot-btn__hover"
						hover-stay-time="150">
						<text class="iconfont icon-xiangji" />
						<text class="gray-font">上传图片</text>
					</view>
				</u-upload>
				
			</view>
		</view>
		<view style="height:100rpx;"></view>
		<view class="fixed">
				<view class="c-button">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 0,
				think:''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.evaluate {

		.all-good,
		.rank {
			margin: 30rpx;
			background: white;
			padding: 0 30rpx 30rpx;
			border-radius: 10rpx;
		}

		.all-good>view {
			padding-top: 30rpx;
		}

		.star {
			height: 150rpx;
			justify-content: center;
			align-items: center;
		}

		.slot-btn {
			width: 170rpx;
			height: 170rpx;
			align-items: center;
			justify-content: center;
			border: 1px dashed #999;

			.iconfont {
				font-size: 70rpx;
			}
		}

		.text-info {
			background: #f8f8f8;
			border-radius: 10rpx;
			padding: 30rpx;
			textarea{height: 130rpx;}
		}
		.fixed{position: fixed;bottom: 0;width: 100%;background: white;padding: 10rpx 0;}
	}
</style>
