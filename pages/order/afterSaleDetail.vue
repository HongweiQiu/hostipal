<template>
	<view class="order-detail">
		<view>
			<view class="bold order-statu padding-15">
				<u-icon name="checkbox-mark" class="icon-style" color="#386FF0" size="20"></u-icon>

				<u-icon name="close" class="icon-style" color="#386FF0" size="20"></u-icon>

				{{info.order_status_msg}}
				<view class="bold">
					<text v-if="info.order_status==1">您取消了订单，退款预计1-5个工作日原路退回 你的账户中</text>
					<text v-if="info.order_status==2">订单未支付，已自动取消</text>
					<text v-if="/2|3/.test(info.order_status)">支付成功，等待商家发货</text>
					<text v-if="info.order_status==4"> 商家已发货，请你耐心等待快递</text>
					<text v-if="info.order_status==5">订单完成，感谢你的支持</text>
				</view>
			</view>
			<view class="delivery-address flex-center">
				<view class="">
					<image src="../../static/img/address.svg" mode=""></image>
				</view>
				<view class="u-flex-1">
					<view class="">
						<text class="bold">{{info.shou_name}}</text>
						<text class="right">{{info.shou_phone}}</text>
					</view>
					<view style="margin-top: 20rpx;">{{info.province+info.city+info.area+info.address}}</view>
				</view>
			</view>

		</view>

		<view class=" good">
			<view>
				<view class="border title">商品信息</view>
				<view v-for="(item,index) in info.goods" :key="index" class="sign-good">
					<my-orderproduct></my-orderproduct>
					<view class="right"><text class="cancel-button">取消订单</text></view>

				</view>
			</view>
			<view style="margin-top: 30rpx;">
				<view class="total-fee">
					<text>商品总价</text>
					<text>￥{{info.total_price}}</text>
				</view>
				<view class="total-fee border">
					<text>基础运费</text>
					<text>￥{{info.freight}}</text>
				</view>
				<view class="total-fee">
					<text>实付款：</text>
					<text class="red-font">￥{{(Number(info.total_price)+Number(info.freight)).toFixed(2)}}</text>
				</view>
			</view>

		</view>
		<view class="order-number">
			<view>订单备注</view>
			<view class="fs-13" style="padding-top: 20rpx;">订单备注</view>
		</view>
		<view class="order-number fs-13">
			<view class="flex-left-right">
				<text>发票类型</text>
				<text>阿达</text>
			</view>
			<view class="flex-left-right">
				<text>发票抬头</text>
				<text>阿达</text>
			</view>
			<view class="flex-left-right">
				<text>企业税号</text>
				<text>阿达</text>
			</view>
		</view>
		<view class="fs-13 gray_font order-number flex-column">
			<view>
				订单编号：{{info.order_num}}
			</view>
			<view>下单时间：{{$fomartDate(info.createtime)}}</view>
			<view>支付方式：
				<text v-if="info.pay_type=='wxpay'">微信支付</text>
				<text v-if="info.pay_type=='money'">余额支付</text>
				<text v-if="info.pay_type=='offline'">线下支付</text>
			</view>
			<view v-if="info.refund_time">申请退款：{{$fomartDate(info.refund_time)}}</view>
		</view>
		<view style="height: 100rpx;"></view>
		<view class="fixed-buttons">
			<view class="button flex-center">
				<text class="cancel" @click="$refs.popup.open()" v-if="info.order_status==1">取消订单</text>
			</view>
		</view>



	</view>
</template>
<script>
	export default {
		data() {
			return {
				imgRemote: getApp().globalData.imgRemote,
				time: 1222,
				id: '',
				info: [],

				orderIndex: '',
				addressInfo: '',
				totalPrice: 0,
				feeInfo: {},
				freight: 0,
				showAllRefund: true,
			}
		},
		methods: {
			getOrderDetail(id) {
				this.$get(this.$api.orderDetail, {
					token: uni.getStorageSync('userToken'),
					order_id: id
				}, (res) => {
					let {
						data
					} = res;
					if (data.code == 1) {
						this.info = data.data;
						this.showAllRefund = !this.info.goods.some((item) => {
							return item.is_refund == 1 || item.is_refund == 2;
						})

					} else {
						this.$Toast(data.msg);
					}
				})
			},
			getAddress() {
				let params = {
					token: uni.getStorageSync('userToken')
				}
				this.$get(this.$api.userInfo, params, (res) => {
					let {
						data
					} = res;
					if (data.code == 1) {
						this.addressInfo = data.data;

					}
				})
			},
			// 邮费
			getFreight() {
				this.$get(this.$api.mainFreight, {}, (res) => {
					let data = res.data;
					if (data.code == 1) {

						this.feeInfo = data.data;
					}
				});
			},

		},
		onLoad(e) {
			this.id = e.id;
			this.orderIndex = e.index;
			this.getOrderDetail(e.id);
			this.getAddress();
			this.getFreight()
		}
	}
</script>
<style scoped lang="scss">
	.order-detail .pay-method {
		padding: 0 20rpx 30rpx;

		.way {
			height: 80rpx;
			line-height: 80rpx;
		}

		.iconfont {
			font-size: 50rpx;
		}

		.submit-order {
			background: #009943;
			width: 200rpx;
			color: white;
			text-align: center;
			height: 60rpx;
			border-radius: 10rpx;
			line-height: 60rpx;
			margin: 0 auto;
		}
	}

	.order-detail {

		.order-statu {

			color: white;
			padding: 40rpx 30rpx 100rpx;
			background: linear-gradient(#386FF0, #6893F7);

			.icon-style {
				background: white;
				padding: 10rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
		}

		.explain {
			padding: 0 30rpx;
			// height: 120rpx;
			// line-height: 120rpx;
		}

		.cancel-button {
			width: 140rpx;
			height: 46rpx;
			line-height: 42rpx;
			border-radius: 23rpx;
			font-size: 26rpx;
			display: inline-block;
			text-align: center;
			box-sizing: border-box;
			margin: 10rpx 0 0 33rpx;
			border: 1px solid #999;
		}

		.button {
			justify-content: flex-end;
			height: 96rpx;
			margin-right: 30rpx;

			text {
				width: 140rpx;
				height: 46rpx;
				line-height: 42rpx;
				border-radius: 23rpx;
				font-size: 26rpx;
				display: inline-block;
				text-align: center;
				box-sizing: border-box;
				margin-left: 33rpx;
			}

			.cancel {
				border: 1px solid #333;
			}

			.go-pay {
				background: #FF3333;
				color: white;
			}

		}

		.delivery-address {
			margin: -80rpx 30rpx 30rpx;
			border-radius: 10rpx;
			height: 160rpx;

			image {
				width: 60rpx;
				height: 60rpx;
			}

			&>view:first-child {
				margin-right: 20rpx;
			}
		}

		.desc {
			padding: 30rpx 0 20rpx;

			.more-address text {
				height: 44rpx;
				line-height: 44rpx;
			}
		}

		.good,
		.order-number {
			margin: 30rpx;
			background: white;
		}

		.delivery-address {
			background: white;
			padding: 0 30rpx;
		}

		.good {

			padding: 0rpx 30rpx 1rpx;

			.title {
				padding: 15rpx 0;
			}

			.sign-good {
				padding-top: 30rpx;

				.buy-num {
					margin-top: 20rpx;
					font-weight: normal;
				}

				.photo {
					width: 180rpx;
					height: 180rpx;
					margin-right: 30rpx;

					image {
						width: inherit;
						height: inherit;
					}
				}

				.return-button text {
					border-radius: 23rpx;
					border: 1px solid #999;
					font-weight: normal;
					width: 140rpx;
					height: 46rpx;
					justify-content: center;
					box-sizing: border-box;
				}
			}

			.total-fee {
				padding-bottom: 25rpx;
				display: flex;
				justify-content: space-between;

				&:last-child {
					padding-top: 25rpx;
				}
			}

			.paid-in {
				height: 90rpx;
				line-height: 90rpx;
			}
		}

		.order-number {
			padding: 0 30rpx 30rpx;

			justify-content: space-between;
			box-sizing: border-box;

			&>view {
				padding-top: 30rpx;
			}
		}

		.cancel-order {
			border-radius: 20rpx 20rpx 0 0;
			padding: 40rpx 30rpx 30rpx;

			.title {
				margin-bottom: 40rpx;
			}

			.desc-reason {
				margin-bottom: 60rpx;
			}

			.submit {
				background: #57B127;
				color: white;
				border-radius: 39rpx;
				height: 78rpx;
				line-height: 78rpx;
				text-align: center;
			}
		}

		.fixed-buttons {
			position: fixed;
			bottom: 0;
			background: white;
			width: 100%;

			.return-good {
				color: #999;
				border: 1px solid #999;
			}

			.confirm-receipt {
				border: 1px solid #f33;
				color: #f33;
			}
		}
	}
</style>
