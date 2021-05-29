<template>
	<view class="index">
		<u-sticky>
			<my-search @getAction="searchPage"></my-search>
		</u-sticky>
		<view class="banner white-back ">
			<swiper class="swiper" indicator-dots="true" autoplay="true" duration="2000" circular="true"
				disable-touch="true" indicator-color="#B4E2E5" indicator-active-color="#fff">
				<swiper-item v-for="(item, index) in adList" :key="index">
					<image :src="imgRemote+item.image" class="r-5"></image>
				</swiper-item>
			</swiper>
			<view class="flex explain">
				<view>
					<text class="iconfont " />
					<text>品种丰富</text>
				</view>
				<view>
					<text class="iconfont icon-tianmaotigongfapiao" />
					<text>三证齐全</text>
				</view>
				<view>
					<text class="iconfont icon-tianmaohuopiaotongxing" />
					<text>正规发票</text>
				</view>
				<view>
					<text class="iconfont icon-tianmaoshangmentuihuo" />
					<text>满百包邮</text>
				</view>
			</view>
		</view>
		<view class="nav flex">
			<view v-for="(item, index) in navList" :key="index" @click="navUrl(item)" v-if="index<5" class="center">
				<image :src="imgRemote + item.image" mode="aspectFit"></image>
				<view class="hidden width center fs-13 bold">{{item.name}}</view>
			</view>
		</view>
		<view class="hot-new flex" @click="newPage" style="overflow-y: hidden;">
			<view>
				<image src="../../static/img/new_top.png" mode=""></image>
			</view>
			<scroll-view scroll-y="true" :scroll-top="scrollTop" @scroll="test" class="scroll-view">
				<view class="fs-12">
					<view>撒打发第三方收到</view>
					<view>撒打发第三方收到</view>
					<view>撒打发第三方收到</view>
					<view>撒打发第三方收到</view>
				</view>
			</scroll-view>
			<u-icon name="arrow-right" color="#999" size="24"></u-icon>
		</view>

		<!-- 新品推荐 -->
		<view class="new">
			<view class="flex-left-right title">
				<view class="flex-center">
					<view class="new-product"></view>
					<view class="bold">
						<text>新品</text>
						<text style="color:#386FF0;">推荐</text>
					</view>
				</view>

				<u-icon name="arrow-right" color="#999" size="24"></u-icon>
			</view>

			<view class="flex good">
				<view v-for="(item,index) in 7" :key="index">
					<my-recommend></my-recommend>
				</view>
			</view>
		</view>

		<!-- //热销产品 -->
		<view class="hot-sale">
			<view class="name flex">
				<view class="flex-center">
					<text></text>
					<text class="orange"></text>
				</view>
				<view class="fs-17 bold" style="margin:0 8rpx;">热销商品</view>
				<view class="flex-center">
					<text></text>
					<text class="orange"></text>
				</view>
			</view>
			<view class="flex hot-goods">
				<view v-for="(item,index) in 3" :key="index">
					<my-recommend showCar="true"></my-recommend>
				</view>
			</view>

		</view>
		<view class="enterprise fs-12">
			<view>备案号：赣ICP备12345678号</view>
			<view>医疗器械经营许可证：赣ICP备12345678号</view>
			<view>互联网药品信息服务资格证书：赣ICP备12345678号</view>
			<view> 营业执照根经营许可证：赣ICP备12345678号</view>
		</view>
		<u-back-top :scroll-top="scrollTop" bottom='100'></u-back-top>
	</view>
</template>

<script>
	const app = getApp().globalData;
	const {
		imgRemote
	} = app;
	import tonyScroll from '@/components/tony-scroll/tony-scroll.vue'
	export default {
		components: {
			tonyScroll
		},
		data() {
			return {

				imgRemote: imgRemote,
				adList: [],
				navList: [{
						name: '关于我们',
						url: 'aboutUs'
					},
					{
						name: '商品分类',
						url: 'classify'
					},
					{
						name: '行业资讯',
						url: 'newList'
					},
					{
						name: '在线咨询',
						url: 'onlineAsk'
					},
					{
						name: '注册/登录',
						url: 'login'
					},


				],
				scrollTop: 0,
				height: 0
				// list: [{}]
			}
		},
		methods: {
			navUrl(item) {
				console.log(item)
				let {
					url
				} = item;
				if (/aboutUs|newList|onlineAsk/.test(url)) {
					uni.navigateTo({
						url: '/pages/index/' + url
					});
				}
				if (url == 'classify') {
					uni.switchTab({
						url: '/pages/tabar/' + url
					});
				}
				if (url == 'login') {
					this.$showModal('登录？')
				}
			},
			indexMainAd() {
				this.$get(this.$api.mainAd, {}, (res) => {
					let {
						data
					} = res;
					if (data.code == 1) {
						this.adList = data.data;
					}
				})
			},

			searchPage(val) {
				uni.navigateTo({
					url: '../index/search?type=' + val
				})
			},
			newPage() {
				uni.navigateTo({
					url: '../index/newList'
				})
			},
			test(e) {

				if (e.detail.scrollHeight - this.height == e.detail.scrollTop) {
					this.scrollTop = 0;
				}
			}
		},
		onLoad() {

			this.indexMainAd();
			
		},
		mounted() {
			const query = uni.createSelectorQuery();
			query.selectAll('.scroll-view').boundingClientRect(data => {
				console.log("得到布局位置信息" + JSON.stringify(data));
				console.log("节点离页面顶部的距离为" + data[0].top);
				this.height = data[0].height;
			}).exec();
			setInterval(() => {
				this.scrollTop++
			}, 100)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		.banner {
			padding: 0 30rpx;

			image {
				width: 100%;
				height: 100%;
			}

			.explain {

				height: 71rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 22rpx;
				color: #153F88;

				&>view {
					display: flex;
					align-items: center;
				}

				.iconfont {
					font-size: 40rpx;
					margin-right: 10rpx;
				}
			}
		}

		.nav {
			background: white;
			padding: 40rpx 30rpx;
			margin: 16rpx 0;
			display: flex;
			justify-content: space-between;

			image {
				width: 79rpx;
				height: 79rpx;
				border-radius: 50%;
			}
		}

		.hot-new {
			image {
				width: 60rpx;
				height: 60rpx;
				margin-right: 60rpx;
			}

			height: 102rpx;
			background: white;
			padding: 20rpx 30rpx;

			swiper {
				height: 100%;
				width: 90%;
			}
		}

		.new {
			margin-top: 16rpx;
			background: white;
			padding-left: 30rpx;


			.title {
				height: 94rpx;
				padding-right: 30rpx;
				font-size: 34rpx;
				font-family: jiangxizhuokai-Regular
			}

			.new-product {
				width: 8rpx;
				height: 32rpx;
				border-radius: 4rpx;
				background: #386FF0;
				margin-right: 9rpx;
			}

			.good::-webkit-scrollbar {
				width: 0 !important
			}

			.good {
				overflow: scroll;
				background: #D9E4FF;
				padding: 20rpx 0 20rpx 20rpx;
				border-radius: 10rpx 0 0 10rpx;

				&>view {
					margin-right: 20rpx;
				}

				/deep/ .recommend image {
					width: 260rpx;
					height: 210rpx;
				}
			}
		}

		.hot-sale {
			padding: 0 30rpx;

			.name {
				height: 92rpx;
				align-items: center;
				text-align: center;
				justify-content: center;


				text {
					display: inline-block;
					width: 40rpx;
					height: 8rpx;
					margin-top: 4rpx;
					background: linear-gradient(to right, #386FF0, #ADC6FF);
					border-radius: 4rpx;
					transform: rotate(-45deg);
				}

				.orange {
					background: linear-gradient(to right, #F07538, #FFC1A2);
					margin-left: -18rpx;
				}
			}

			.hot-goods {
				flex-wrap: wrap;
				justify-content: space-between;

				&>view {
					width: 330rpx;
					margin-bottom: 30rpx;
				}
			}
		}

		.enterprise {
			color: #153F88;
			text-align: center;
			margin-bottom: 24rpx;

			&>view {
				margin-top: 12rpx;
			}
		}
	}
</style>
