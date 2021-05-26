<template>
	<view class="enter-classify">
		<u-sticky>
			<view style="padding: 30rpx ; " class="white-back">
				<view class="flex-left-right">
					<view class="flex-center search-cate" @click="search">
						<text class="iconfont icon-sousuo"></text>
						<input v-model="keyword" placeholder="搜索你想知道的" disabled placeholder-class="fs-12"
							class="input" />
					</view>
					<text class="fs-13 bold">搜索</text>
				</view>
				<view class="flex-left-right fs-15 sort">
					<view @click="sortIndex=1" :class="sortIndex==1?'m-color':''"><text>综合</text></view>
					<view @click="sortIndex=2" :class="sortIndex==2?'m-color':''"><text>销量</text></view>
					<view @click="sortIndex=3" :class="sortIndex==3?'m-color':''" class="flex">
						<view style="padding-right:5rpx;">价格</view>
						<view class="flex-column">
							<text class="iconfont jiantou"
								style="transform: rotate(180deg);margin-top:6rpx;">&#xf36c;</text>
							<text class="iconfont jiantou" style="margin-top:-12rpx;">&#xf36c;</text>
						</view>
					</view>
					<view @click="showScreen=!showScreen">
						<text>筛选</text>
						<text class="iconfont icon-shaixuan"></text>
					</view>
					<view @click="open=!open">
						<text class="iconfont" :class="!open?'icon-shitu':'icon-shitu-'"></text>

					</view>
				</view>
			</view>

		</u-sticky>
		<view :class="open?'recomend-one':'recomend'">
			<view v-for="(item,index) in 2" :key="index" :style="{'width':open?'100%':'330rpx'}">
				<my-recommend showCar="true" :open="open" @addCart="addCart"></my-recommend>
			</view>
		</view>
		<u-popup v-model="showScreen" mode="right" width="600rpx">
			<view class="select-attr">
				<scroll-view scroll-y="true">
					<view v-for="(item,index) in 30" :key="index" class="sign-attr">
						<view class="flex-left-right">
							<view>品牌</view>
							<view class="flex-center" @click="showMore=!showMore">
								<text class="gray-font fs-11" >展开</text>
								<text class="icon-fanhui iconfont fs-11" :style="{'transform':showMore?'rotate(270deg)':'rotate(90deg)'}"></text>
							</view>
						</view>
						<view class="good-attr" v-if="showMore">
							<text v-for="(item,index) in 4" :key="index">12</text>
						</view>
					</view>
				</scroll-view>
				<view class="select-operate flex-left-right">
					<view class="reset">重置</view>
					<view class="submit" @click="deterMineAttr">确定</view>
				</view>
			</view>
		</u-popup>
		<u-popup v-model="showAddCart" mode="bottom" border-radius="20">
			<my-addcart @close="showAddCart=false"></my-addcart>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				open: false,
				showScreen: false,
				showAddCart: false,
				showMore:false
			}
		},
		methods: {
			addCart() {
				this.showAddCart = true;
			},
			deterMineAttr(){
				this.showScreen = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.enter-classify {

		.search-cate {
			width: 610rpx;
			background: #EEE;
			border-radius: 30rpx;
			height: 60rpx;
			padding: 30rpx;
			// margin: 0 auto;

			.icon-sousuo {
				margin-right: 9rpx;
				font-size: 38rpx;
			}
		}

		.sort {
			padding-top: 30rpx;
		}

		.recomend {
			display: flex;
			margin: 30rpx 30rpx 0;
			justify-content: space-between;
			flex-wrap: wrap;

			&>view {
				margin-bottom: 30rpx;
			}
		}

		.select-attr {
			

			scroll-view {
				padding: 30rpx 30rpx 0;
				padding-bottom: 20px;
				height: 91.6vh;
				box-sizing: border-box;
			}

			.sign-attr:nth-child(n+2) {
				margin-top: 30rpx;
			}

			.select-operate {
				box-sizing: border-box;
				padding: 10rpx 30rpx;
				border-top:1px solid #eee;
			}

			.select-operate>view {
				width: 255rpx;
				height: 79rpx;
				line-height: 79rpx;
				border-radius: 39rpx;
				text-align: center;
			}

			.reset {
				border: 1px solid #999;
			}

			.submit {
				background: #386FF0;
				border: 1px solid #386FF0;
				color: white;
			}
		}

		.good-attr text {
			display: inline-block;
			width: 160rpx;
			text-align: center;
			line-height: 50rpx;
			margin: 30rpx 30rpx 0rpx 0;
			height: 50rpx;
			border-radius: 25rpx;
			background: #eee;
		}
	}
</style>
