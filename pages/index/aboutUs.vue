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
						name: '公司简介'
					}, {
						name: '公司愿景'
					}, {
						name: '公司理念',
					},
					{
						name: '公司文化',
					},
					{
						name: '经营模式',
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
