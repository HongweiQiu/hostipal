<template>
	<view>
		<view class="addcart">
			<view class="flex">
				<image src="../../static/img/homeHL.png" class="img"></image>
				<view class="flex u-flex-1">
					<view class="good-info">
						<view class="bold u-line-2">ZHENDE 振德 振德 一次性医用外科口罩一次性医用外科口罩一次性医用外科口罩...</view>
						<view>
							<view class="fs-18 red-font bold">￥199.99</view>
							<view>已选：50个/盒, 1件</view>
						</view>
					</view>
					<text class="iconfont icon-close gray-font" @click="close"></text>

				</view>
			</view>
			<view class="attr">
				<view class="bold">规格</view>
				<view class="attr-name">
					<text v-for="(item,index) in 4" class="tag" :class="{'active-tag':active==index}" :key="index"
						@click="active=index">规格：50个/盒</text>
				</view>
			</view>
			<view class="flex-left-right num">
				<text class="bold">数量</text>
				<u-number-box v-model="value" @change="valChange" bg-color="white"></u-number-box>
			</view>
			<view>
				<text class="add-shop">加入购物车</text>
				<text class="now-buy">立刻购买</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				active: 0,
				value: 1
			}
		},
		methods: {
			close() {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.num  ::v-deep .u-numberbox {
		border: 1px solid red!important;
	}

	.addcart {
		padding: 30rpx;
		.good-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.img {
			width: 240rpx;
			height: 240rpx;
		}

		.attr {
			.attr-name {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
			}

			.tag {
				display: block;
				border-radius: 31rpx;
				margin: 30rpx 20rpx 0 0;
				border: 1px solid #999;
				height: 62rpx;
				line-height: 62rpx;
				padding: 0 30rpx;
			}

			.active-tag {
				color: #386FF0;
				background: #E8EEFF;
				border: 1px solid #386FF0;
			}
		}

		.add-shop,
		.now-buy {
			display: inline-block;
			text-align: center;
			color: white;
			width: 345rpx;
			height: 79rpx;
			line-height: 79rpx;
		}

		.add-shop {
			background: #F8895C;
			border-radius: 39rpx 0 0 39rpx;
		}

		.now-buy {
			background: #FB4E48;
			border-radius: 0 39rpx 39rpx 0;
		}

		.num {
			padding: 30rpx 0;
		}
	}
</style>
