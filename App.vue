<script>
	export default {
		globalData: {
			rootUrl: 'https://xntcps.jxsxkeji.com/api.php',
			imgRemote: 'https://xntcps.jxsxkeji.com',
			classId: '',
			isReload: true,
			onoff: true,
			orderIndex: ''
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import "static/css/common.css";
	@import "static/css/iconfont.css";

	page {
		background: #F8F8F8;
		font-size: 30rpx;
	}

	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	.c-button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border-radius: 39rpx;
		margin: 0 auto;
		background: #386FF0;
		height: 78rpx;
		width: 690rpx;
		margin: 0 auto;
	}
</style>
