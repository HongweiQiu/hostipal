<template>
	<view class="shoplist">
		<view class="white-back delivery-way r-5 flex-center">
			<view class="bold">配送方式：</view>
			<view>
				<radio-group class="radio-pay flex-center" @change="deliveryWay">
					<radio value="1" checked="true" style="transform:scale(0.7);" color="#386FF0" />
					<text>自提</text>
					<radio value="2" style="transform:scale(0.7);" color="#386FF0" />
					<text>配送</text>
				</radio-group>
			</view>
		</view>
		<view class="flex white-back r-5 distribution" @click="$doubleClick(selectAddress)">
			<view>
				<view class="bold">
					<text>医来顺</text>
					<text>17689764358</text>
				</view>
				<view class="fs-13" style="margin-top: 20rpx;">浙江省杭州市拱墅区湖州街168号胜太科技大厦501 室</view>
			</view>
			<u-icon name="arrow-right"></u-icon>
		</view>
		<view>
			<view class="flex white-back r-5 distribution">
				<view>
					<view class="bold">医来顺供应链</view>
					<view class="fs-13" style="margin: 20rpx 0;">浙江省杭州市拱墅区湖州街168号胜太科技大厦501 室</view>
					<view class="fs-11 gray-font">
						<view>营业时间：09：00-22：00</view>
						<view>联系电话：13456785940</view>
					</view>
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
			<view class="white-back r-5 distribution">
				<u-field v-model="addressInfo.tax_name" label="提货人：" placeholder="请输入提货人姓名" />
				<u-field v-model="addressInfo.tax_num" label="联系电话：" placeholder="请输入提货人电话" />
			</view>
		</view>
		<view class="shop white-back r-5 all-good">
			<view v-for="(item,index) in shop" :key="index">
				<view class="flex">
					<image class="have_img r-5" :src="imgRemote+item.goods.main_image" mode="aspectFit"></image>
					<view class="include_delete  flex-left-right u-flex-1">
						<view class="info">
							<view style="width:100%;">
								<view class="bold two-line">{{item.goods.name}}</view>
								<view style="margin-top: 20rpx;" class="flex_left_right">
									<text
										class="gray_font fs-11">￥{{item.sku.market_price}}/{{item.sku.unit}}（{{item.sku.guige}}）x{{item.buy_num}}</text>
									<text class="bold " style="margin-top:-8rpx;">
										￥{{$fixed(item.sku.market_price*item.buy_num)}}
									</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="flex-left-right" style="margin-top: 30rpx;">
				<text>商品金额</text>
				<text>￥{{$fixed(totalPrice)}}</text>
			</view>
			<view class="flex-left-right " style="margin-top: 30rpx;">
				<text>配送费</text>
				<text>￥{{$fixed(freight?freight:0)}}</text>
			</view>

			<view class="total-price">
				<text class="fs-11">合计：</text>
				<text class="red-font bold">￥{{$fixed(totalPrice+parseFloat(freight))}}</text>
			</view>
		</view>
		<view class="white-back padding-15 r-5" style="margin:30rpx;">
			<view class="flex-left-right order-remark">
				<text style="width:160rpx;">订单备注</text>
				<input v-model="remark" placeholder="请填写" class="flex-full" style="text-align: right;" />
			</view>

			<view class="flex-left-right order-remark">
				<text style="width:160rpx;">发票</text>
				<u-switch v-model="showSwitch"></u-switch>
			</view>
			<view v-show="showSwitch" class="receipt">
				<u-field v-model="addressInfo.tax_name" label="发票抬头" placeholder="请填写企业名称" />
				<u-field v-model="addressInfo.tax_num" label="纳税人识别号" placeholder="请填写纳税人识别号" />
				<u-field v-model="addressInfo.tax_name" label="注册地址" placeholder="请填写注册地址" />
				<u-field v-model="addressInfo.tax_name" label="注册电话" placeholder="请填写注册电话" />
				<u-field v-model="addressInfo.tax_name" label="开户银行" placeholder="请填写开户银行" />
				<u-field v-model="addressInfo.tax_name" label="银行账号" placeholder="请填写开户银行" />
			</view>
		</view>
		<view class="white-back pay-method ">
			<view class="way bold padding-15">支付方式</view>
			<radio-group class="radio-pay" @change="payWay">
				<view class=" border remain-money">
					<view class="flex-center ">
						<text class="iconfont icon-weixinzhifu" style="color:#09BB07;"> </text>
						<text class="bold fs-13">微信支付</text>
					</view>
					<radio value="wxpay" checked="true" style="transform:scale(0.7);" color="#386FF0" />
				</view>
				<view class=" remain-money">
					<view class="flex-center">
						<text class="iconfont icon-feiyong" style="color:#FFB92C;"> </text>
						<text class="bold fs-13">额度支付</text>
						<text class="fs-11 red-font" style="margin-left:4rpx;">(可用￥{{$fixed(addressInfo.money)}})</text>
					</view>
					<radio value="money" style="transform:scale(0.7);" color="#386FF0"
						:disabled="(totalPrice+parseFloat(freight))>addressInfo.money?true:false" />
				</view>
			</radio-group>
		</view>
		<view style="height:60px;">

		</view>
		<view class="fixed-bottom white-back" style="width: 100%;">
			<view class="price-info">
				<view>
					<text class="fs-13">合计：</text>
					<text class="bold red-font">￥{{$fixed(totalPrice+parseFloat(freight))}}</text>
				</view>
				<view class="pay-button" @click="pay">支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import gppDatePicker from "@/components/gpp-datePicker/gpp-datePicker.vue"
	const app = getApp().globalData;
	const {
		imgRemote,
	} = app;
	export default {
		components: {
			// gppDatePicker
		},
		data() {
			return {
				startDate: "2021-05-15",
				endDate: "2022-09-09",
				pickerDate: '2021-05-16',
				visible: false,
				addressInfo: {},
				imgRemote: imgRemote,
				shop: [],
				totalPrice: '',
				visible: false,
				feeInfo: '',
				freight: '',
				showSwitch: false,
				pay_type: 'wxpay',
				remark: '',
				receiving: '',

			}
		},
		methods: {
			getTomorrow() {
				function format(dest) {
					return dest < 10 ? '0' + dest : dest;
				}

				let arg = new Date();
				let year = arg.getFullYear();
				let month = arg.getMonth() + parseInt(1);
				let day = arg.getDate() + parseInt(1);
				this.startDate = `${year}-${format(month)}-${format(day)}`;
				this.pickerDate = `${year}-${format(month)}-${format(day)}`;
				this.endDate = `${year+2}-12-31`;
			},
			confirmDate(e) {
				this.pickerDate = e.dateValue;
			},
			payWay(e) {
				this.pay_type = e.detail.value;
			},
			confirmPay() {
				let _ = this;
				let ids = '';
				for (let i of _.shop) {
					if (i.checked == true) {
						ids += i.id + ','
					}
				}
				let newId = ids.substring(0, ids.length - 1);
				let {
					province,
					city,
					area,
					address,
					shou_name,
					shou_phone,
					tax_name,
					tax_num
				} = _.addressInfo;
				if (!province) {
					return _.$Toast('请先填写收货地址');
				}
				if (!shou_name &&
					!shou_phone) {
					return _.$Toast('请先填写收货人和收货人电话');
				}
				if (_.showSwitch) {
					if (!tax_name && !tax_num) {
						return _.$Toast('发票信息不能为空');
					}
				} else {
					tax_name = '';
					tax_num = '';
				}
				// if(this.pay_type=='wxpay'){
				// 	return this.$Toast('暂时不支持')
				// }

				uni.login({
					provider: 'weixin',
					success(res) {
						let params = {
							token: uni.getStorageSync('userToken'),
							province: province,
							city: city,
							area: area,
							address: address,
							shou_name: shou_name,
							shou_phone: shou_phone,
							tax_name: tax_name,
							tax_num: tax_num,
							cart_ids: newId,
							freight: _.freight,
							pay_type: _.pay_type,
							total: _.totalPrice,
							remark: _.remark,
							delivery_time: _.pickerDate,
							code: res.code
						};

						_.$get(_.$api.orderAdd_order, params, (res1) => {
							let data = res1.data;
							if (data.code == 1) {
								if (_.pay_type != 'wxpay') {
									_.$Toast('提交订单成功');
									setTimeout(() => {
										uni.reLaunch({
											url: './paySuccess',
											success() {
												getApp().globalData.isReload = true;
											}
										})
									}, 1000)
								} else {
									uni.requestPayment({
										provider: 'wxpay',
										timeStamp: data.data.timeStamp,
										nonceStr: data.data.nonceStr,
										package: data.data.package,
										signType: data.data.signType,
										paySign: data.data.paySign,
										success: function(res) {
											_.$Toast('支付成功');
											setTimeout(() => {
												uni.reLaunch({
													url: './paySuccess',
													success() {
														getApp().globalData
															.isReload = true;
													}
												})
											}, 500)

										},
										fail: function(err) {
											_.$Toast('支付取消');
											setTimeout(() => {
												uni.reLaunch({
													url: './paySuccess',
													success() {
														getApp().globalData
															.isReload = true;
													}
												})
											}, 500)
										}
									});
								}


							} else {
								_.$Toast(data.msg);
							}
						});
					}
				})

			},

			pay() {
				this.confirmPay();
			},
			switchChange(e) {
				this.showSwitch = e.target.value;
			},
			
			selectAddress() {
				uni.navigateTo({
					url: './selectAddress'
				})
			},

			// 邮费
			getFreight() {
				this.$get(this.$api.mainFreight, {}, (res) => {
					let data = res.data;
					if (data.code == 1) {
						this.feeInfo = data.data;
						this.freight = this.totalPrice > data.data.over ? 0 : data.data.freight;
					}
				});
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
						this.receiving = data.data.province + data.data.city + data.data.area + data.data.address;
						if (this.receiving.match('null')) {
							this.receiving = '';
						}
					}
				})
			}
		},
		onShow() {
			this.getAddress();

		},
		onLoad(e) {
			this.getTomorrow();
			this.shop = uni.getStorageSync('selectGoods');
			let sum = 0;
			for (let i of this.shop) {
				sum += i.buy_num * i.sku.market_price;
			}
			this.totalPrice = sum;
			this.getFreight();
		}
	}
</script>

<style scoped lang="scss">
	input {
		margin-top: 3rpx;
	}

	.delivery-way {
		height: 96rpx;
		margin: 30rpx;
		padding: 0 30rpx;

		radio {
			margin-left: 30rpx;
		}
	}

	.detail-address {
		width: 550rpx;
		padding: 0 30rpx;
	}

	.all-good {
		padding: 0 30rpx;
		margin: 0 30rpx;
	}

	.single_good {
		padding-top: 30rpx;

		.good_img {
			width: 180rpx;
			height: 120rpx;
			margin-right: 30rpx;


		}
	}

	.have_img {
		width: 200rpx;
		height: 200rpx;
		margin: 30rpx 30rpx 0 0;
	}

	.total-price {
		border-top: 1px solid #eee;
		margin-top: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: right;
	}

	.order-remark {
		height: 83rpx;

		/deep/ .u-switch {
			width: 70rpx;
			height: 30rpx;
		}

		/deep/ .u-switch__node {
			width: 38rpx !important;
			height: 38rpx !important;
			top: -6rpx;
		}
	}

	.pay-method {
		border-radius: 10rpx;


		.radio-pay {
			padding: 0 16rpx 0 20rpx;

		}

		.remain-money {
			height: 90rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		margin:0 30rpx;

		.way {
			padding-top: 30rpx;
		}

		.iconfont {
			margin-right: 19rpx;
			font-size: 40rpx;
		}

		.border-color {
			border-top: 1px solid #EEE;
			margin: 20rpx 12rpx 20rpx 8rpx;
		}


	}

	.fixed-bottom {
		position: fixed;
		bottom: 0;
		z-index: 9;

		.price-info {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 49px;
			padding: 0 30rpx;


			.pay-button {
				background: #386FF0;
				color: white;

			}
		}
	}

	.receipt,.distribution {
		/deep/ .u-field {
			padding: 20rpx 0;
		}

		/deep/ .u-label {
			flex: 0.5 !important;
		}
	}

	.distribution {
		margin: 30rpx;
		padding: 30rpx;
	}
</style>
