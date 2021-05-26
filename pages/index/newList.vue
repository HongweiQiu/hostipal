<template>
	<view class="new-list">
		<u-sticky>
			<u-tabs :list="list" bg-color='#E8EEFF' height="70" :current="current" @change="change" bar-width="80"
				:bar-style="barStyle"></u-tabs>
		</u-sticky>
		<view class="list white-back padding-15">
			<view v-for="(item,index) in 8" :key="index">
				<my-article></my-article>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '行业动态'
					}, {
						name: '公司新闻'
					}, {
						name: '热点话题',
					},
					{
						name: '医药法规',
					}
				],
				current: 0,
				barStyle: {
					boderRadius: "10rpx"
				}
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.new-list {
		.list {
			padding: 0 30rpx;
		}

		/deep/ .u-tab-bar{bottom:-2px;}
	}
	
</style>
