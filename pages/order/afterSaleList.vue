<template>
	<view class="order">
		<u-sticky>
			<u-tabs :list="tabList" :current="activeTab" @change="changeFirst" item-width="50%"></u-tabs>
		</u-sticky>
		<view class="order_info">
			<view class="content" v-if="orderList.length">
				<view v-for="(item, index) in orderList" :key="index">
					<view class="top border fs-13">
						<view>{{$fomartDate(item.createtime)}}</view>
						<view :class="item.status==3?'gray_font':'red-font'">
							<text v-if="item.status==1">退款中</text>
							<text v-if="item.status==2">退款完成</text>
							<text v-if="item.status==3">退款失败</text>
							<text v-if="item.status==4">退款被拒</text>
						</view>
					</view>
					<view @click="orderDetailPage(item,index)">
						<view class="flex detail" v-for="(second,sIndex) in item.goods" :key="sIndex">
							<my-orderproduct></my-orderproduct>
						</view>
					</view>
					<view class="order_option">
						<text class=" cancel_order" @click="orderDetailPage(item,index)">查看详情</text>
					</view>
				</view>
			</view>
			<view class="bitmap" v-else>
				<image src="../../static/img/after-order.svg" mode="aspectFit"></image>
				<view class="gray_font">
					没有订单信息哦~
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	const app = getApp().globalData;
	const {

		imgRemote
	} = app;
	export default {
		data() {
			return {
				imgRemote: imgRemote,
				tabList: [{
					name: '申请售后'
				}, {
					name: '全部售后'
				}],
				activeTab: 1,
				page: 1,
				orderList: [],
				status: 2
			};
		},
		methods: {
			orderDetailPage(item, index) {
				uni.navigateTo({
					url: './refunddetail?id=' + item.id
				})
			},
			changeFirst(e) {
				this.activeTab = e;
				this.status = e + Number(1);
				this.orderList = [];
				this.page = 1;
				this.getList()
			},
			getList() {
				let params = {
					token: uni.getStorageSync('userToken'),
					page: this.page,
					status: this.status
				}
				this.$get(this.$api.orderRefund_list, params, (res) => {
					let data = res.data;
					if (data.code == 1) {

						this.orderList = this.orderList.concat(data.data);
					}
				}, true);
			},
		},
		onLoad() {
			this.getList()
		},
		onReachBottom() {
			this.page++;
			this.getList()
		}
	};
</script>

<style lang="scss" scoped>
	.order .select_account {
		border-bottom: 1px solid #efefef;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 65rpx;
		padding-right: 18rpx;

		text {
			color: grey;
			display: inline-block;
			margin-left: 10rpx;
		}
	}


	.order .order_option {
		border-top: 1px solid #efefef;
		height: 96rpx;
		line-height: 96rpx;
		text-align: right;
		padding-right: 20rpx;

		text {
			border-radius: 23rpx;
			width: 140rpx;
			display: inline-block;
			height: 46rpx;
			line-height: 46rpx;
			margin-left: 20rpx;
			font-size: 26rpx;
			text-align: center;
		}
	}

	.order .look_logist {
		background: rgb(2, 177, 228);
		color: white;
	}

	.order .cancel_order {
		background: white;
		color: #333;
		border: 1px solid #333;
	}

	.confirm_good {
		background: red;
		color: white;
		// border: 1px solid red;
	}

	.order .order_img {
		width: 208rpx;
		height: 208rpx;
		margin-right: 30rpx;
	}

	.order .order_info .content>view {
		background: white;
		margin: 30rpx 30rpx 0;
		border-radius: 10rpx;
	}

	.order .order_info .content {
		.top {
			padding: 0 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 60rpx;
		}

		.detail {
			padding: 20rpx;
			border-top: 1px solid #efefef;
		}
	}

	.order /deep/ .u-tab-bar {
		bottom: -6rpx;
	}

	.order .bitmap {
		text-align: center;

		image {
			width: 100%;
			height: 500rpx;
			margin: 252rpx 0 60rpx;
		}
	}
</style>
