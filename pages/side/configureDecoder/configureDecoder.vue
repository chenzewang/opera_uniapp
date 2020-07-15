<template>
	<scroll-view>
		<view class="fav_list">
			<div data-v-357a65ed="" class="fav_list_box">
				<div class="fav_list_title">
					<h3 class="fav_list_title_h3">选择DSD:</h3>
				</div>
				<div class="my_fav_list">
					<radio-group @change="radioChange1">
						<view class="iplist">
							<text class="title">DoP</text>
							<radio class="switch" checked value="DoP" color="rgba(218, 45, 30, 1)"/>
						</view>
						<view class="iplist ">
							<text class="uni-list-cell-db">Native</text>
							<radio class="switch" value="Native"  color="rgba(218, 45, 30, 1)"  />
						</view>
					</radio-group>
				</div>
			</div>

		</view>

		<view class="fav_list">
			<div data-v-357a65ed="" class="fav_list_box">
				<div class="fav_list_title">
					<h3 class="fav_list_title_h3">选择解码器:</h3>
				</div>
				<div class="my_fav_list">
					<button class="iplist cell" plain v-for="(item, index) in decoder_list" :key="index" :data-val="item.value" @tap="configureDecoder"><span>{{ item.key }}</span>
					</button>

				</div>
			</div>
		</view>

	</scroll-view>
</template>

<script>
	import {
		getSqueezeliteList,
		configureDecoder
	} from '@/model/configureServer.js'
	export default {
		components: {},
		data() {
			return { 
				decoder_list: [],
				dsd: "DoP"

			};
		},
		onLoad() {
			this.getDecoderList()
		},
		methods: {
			getDecoderList() {
				getSqueezeliteList().then(res => {
					this.decoder_list = res
				}).catch(err => {
					console.log('err', err);
				})
			},
			configureDecoder(e) {
				uni.showLoading({
					title:"配置中"
				})
				var output = String(e.target.dataset.val).split("-")[0].trim()
				configureDecoder({
					output: output,
					dsd: this.dsd 
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title:"配置成功"
					})
				}).catch(err => {
					console.log(err)
					uni.hideLoading()
				})
			},
			radioChange1(evt) {
				this.dsd=evt.target.value
			}
		},

		watch: {}
	};
</script>

<style>
	body {
		background-color: rgba(204, 204, 204, 0.23);
	}

	.ip_webview {
		display: none;
		width: 0upx;
		height: 0upx;
	}

	li {
		text-align: -webkit-match-parent;
		display: list-item;
	}

	.fav_list {
		margin-bottom: 20upx;
		background-color: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	}

	.fav_list_box {
		box-sizing: border-box;
		display: block;
		overflow: hidden;
		zoom: 1;
	}

	.fav_list_title {
		height: 10%;
		line-height: 60px;
		/* border-bottom: 1px solid #e0e0e0; */
		margin-left: 3%;
		display: block;
	}

	.fav_list_title_h3 {
		display: inline;
		font-size: 17px;
		color: gray;

	}

	.my_fav_con {
		display: block;
	}

	.my_fav_list {
		margin: 0;
		padding: 0;
		font-size: 100%;
		vertical-align: baseline;
		border: 0;
		display: block;
		overflow: hidden;
		zoom: 1;
	}

	/* span{
	margin-left: 3%;
} */
	.iplist {
		font-size: 15px;
		color: #4d4d4d;
		padding: 16px 0;
		padding-left: 5%;
		border: 0 !important;
		border-top: 1px solid #e0e0e0 !important;
		text-align: left;
		list-style: none;
		/* background-color: rgba(0,0,0,0.1); */
		border-radius: 0;
	}

	.cell:active {
		background-color: rgba(0, 0, 0, 0.1);
	}

	.iplist .switch {
		float: right;
		margin-right: 5%;
	}
</style>
