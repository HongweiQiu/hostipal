<template>
	<view class="apply-return">
		<view class="return-good white-back r-10">
			<view class="border padding-15 order-num align_center">
				<u-checkbox @change="allCheckGood" v-model="allCheck" name="1" shape="circle">
					<text class="fs-13" style="margin-left: 20rpx;">订单编号：{{info.order_num}}</text>
				</u-checkbox>

			</view>
			<view class="padding-15">
				<u-checkbox-group @change="checkboxGroupChange">
					<u-checkbox @change="checkboxChange" v-model="item.checked" v-for="(item, index) in 2" :key="index"
						:name="item.name" shape="circle">
						<view class="sign-order">
							<my-orderproduct></my-orderproduct>
						</view>

					</u-checkbox>
				</u-checkbox-group>
			</view>
		</view>
		<view class="explain white-back r-10" style="margin:30rpx;">
			<view class="flex-left-right bold return-money border">
				<text>退款金额：</text>
				<text class="red-font">￥{{totalPrice}}</text>
			</view>
			<view class="more-reason flex">
				<text class="bold">退款说明：</text>
				<textarea v-model="refund_desc" maxlength=50 placeholder="选填" />
			</view>
			<view class="right gray-font">{{refund_desc.length}}/50</view>
		</view>
		<view class="white-back r-10">
			<view class="bold" style="padding: 30rpx 0;">上传凭证：</view>
			<view class="flex ">
				<view v-for="(item,index) in file" :key="index">
					<image :src="item" mode="aspectFill" class="camera">
					</image>
					<text class="delete-img" @click="file.splice(index,1)">x</text>
				</view>
				<view class="flex-column camera flex-center" @click="showWay=true">
					<text class="iconfont icon-xiangji gray-font"></text>
					<text class="fs-11 gray-font">上传图片</text>
				</view>
			</view>
		</view>
		<view style="height: 120rpx;"></view>
		<view class="fixed">
			<view class="submit" @click="submit"> 提交</view>
		</view>

		<u-popup mode="bottom" v-model="showWay">
			<view class="upload-img">
				<view class="white-back r-10">
					<view class="border method" @click="chooseImage('album')">本地上传</view>
					<view class="method" @click="chooseImage('camera')">拍照上传</view>
				</view>
				<view class="white-back method r-10 cancel" @click="showWay=false">
					取消
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showWay: false,
				info: [],
				allCheck: true,
				imgRemote: getApp().globalData.imgRemote,
				totalPrice: 0,
				file: [],
				id: '',
				refund_desc: ''
			}
		},
		methods: {

			chooseImage(type) {
				let _ = this;
				uni.chooseImage({
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: [type], //从相册选择
					success(res) {
						let file = res.tempFilePaths;
						_.showWay = false;
						for (let i in file) {
							uni.uploadFile({
								url: getApp().globalData.rootUrl + _.$api.mainUpload, //此处换上你的接口地址
								name: 'file',
								filePath: file[i],
								success: function(res1) {
									_.file = _.file.concat(_.imgRemote + JSON.parse(res1.data).data);
								}
							})
						}

					}
				});
			},

			allCheckGood() {
				this.allCheck = !this.allCheck;
				this.info.goods.map((item) => {
					item.checked = this.allCheck;
					return item;
				})
				this.selectCheck();
			},
			selectCheck(index) {
				if (index >= 0) {
					this.info.goods[index].checked = !this.info.goods[index].checked;

				}
				this.allCheck = this.info.goods.every((item) => {
					return item.checked == true;
				})
				this.calculate();
			},
			calculate() {
				let sum = 0;
				for (let i of this.info.goods) {
					if (i.checked) {
						sum += i.buy_num * i.market_price;
					}

				}
				this.totalPrice = sum.toFixed(2);
				return this.totalPrice;
			},
			submit() {
				let selectGoods = this.info.goods.filter((item) => {
					return item.checked == true
				})
				let ids = '';
				for (let i of selectGoods) {
					ids += i.id + ','
				}
				let newId = ids.substring(0, ids.length - 1);
				if (!newId) {
					return this.$Toast('请选择退货商品')
				}
				this.$showModal('确认退货？', () => {
					let params = {
						token: uni.getStorageSync('userToken'),
						order_id: this.id,
						order_goods_id: newId,
						refund_desc: this.refund_desc,
						refund_images: this.file.join(',')
					};

					this.$get(this.$api.orderRefund, params, (res) => {
						let {
							data
						} = res;
						if (data.code == 1) {
							this.$Toast('申请成功');
							getApp().globalData.isReload = true;
							setTimeout(() => {
								uni.reLaunch({
									url: 'orderAfterSale'
								})
							}, 1000)

						} else {
							this.$Toast(data.msg)
						}
					})
				})

			}
		},
		onLoad(e) {
			this.id = e.id;
			this.$get(this.$api.orderDetail, {
				token: uni.getStorageSync('userToken'),
				order_id: e.id
			}, (res) => {
				let {
					data
				} = res;
				if (data.code == 1) {
					if (e.returnIndex >= 0) {
						data.data.goods = data.data.goods.filter((item, index) => {
							return index == e.returnIndex;
						})
					}
					data.data.goods.map((item) => {
						item.checked = true;
						return item;
					})
					this.info = data.data;
					this.calculate();
				} else {
					this.$Toast(data.msg);
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.apply-return>view {

		margin: 0 30rpx;

		&:nth-child(1) {
			margin-top: 30rpx;
		}

		&:nth-child(2),
		&:nth-child(3) {
			padding: 0 20rpx 30rpx;
		}



	}

	.apply-return {
		.order-num {
			height: 60rpx;
		}


		.sign-order {
			padding: 30rpx 0 0 10rpx;

			/deep/ .u-line-2 {
				line-height: 1.2;
			}

			.attr {
				margin: 10rpx 0 20rpx;
			}

			/deep/ .u-flex-1 {
				padding-bottom: 20rpx;
			}
		}

		u-checkbox:nth-last-child(n+2) {
			/deep/ .u-flex-1 {
				border-bottom: 1px solid #eee;
			}
		}

		.return-good {
			.img {
				margin: 0 30rpx 0 20rpx;
				width: 168rpx;
				height: 168rpx;
				padding: 30rpx 0;

				image {
					width: inherit;
					height: inherit;
				}
			}

			.info {
				padding: 30rpx 0;
				padding-bottom: 30rpx;
				justify-content: space-between;
			}


		}

		.return-money {
			height: 88rpx;
		}

		.more-reason {
			padding-top: 30rpx;
		}

		textarea {
			width: 450rpx;
			height: 80rpx;
		}

		.delete-img {
			position: absolute;
			margin-left: -40rpx;
			margin-top: -13rpx;
			background: rgba(0, 0, 0, 0.5);
			width: 40rpx;
			height: 40rpx;
			text-align: center;
			line-height: 32rpx;
			color: white;
			border-radius: 50%;

		}

		.camera {
			.iconfont {
				font-size: 60rpx;
			}

			margin-right: 15rpx;
			justify-content: center;
			width:190rpx;
			height:190rpx;
			border: 1px dashed #eee;
		}

		.submit {
			background: #386FF0;
			color: white;
			border-radius: 39rpx;
			height: 78rpx;
			line-height: 78rpx;
			text-align: center;
			margin:0 30rpx;
		}

		/deep/ .u-drawer-content {
			background: none;
		}

		.upload-img {
			// width: 690rpx;
			margin: 0 30rpx;

			.method {
				height: 109rpx;
				line-height: 109rpx;
				text-align: center;
			}

			.cancel {
				margin: 30rpx 0;
			}
		}

		.fixed {
			padding: 10rpx 0;
			position: fixed;
			bottom: 0;
			width: 100%;
			margin: 0;
			background: white;
		}
	}
</style>
