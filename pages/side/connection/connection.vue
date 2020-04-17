<template>
	<view>
		<!-- 连接设备页面 -->
		<div>
			<web-view src="/hybrid/html/getlocalip.html" @message="handleMessage" :webview-styles="webviewStyles" ></web-view>
		</div>
		<div class="fav_list">
			<div data-v-357a65ed="" class="fav_list_box">
				<div class="fav_list_title" @tap="connectPlayer">
					<h3 class="fav_list_title_h3">目前连接的IP</h3>
				</div>
				<div class="my_fav_list">
					<view class="iplist" data-ip="192.168.1.101">{{connectionIp}}</view>
				</div>
			</div>
		</div>

		<div class="fav_list">
			<div data-v-357a65ed="" class="fav_list_box">
				<div class="fav_list_title">
					<h3 class="fav_list_title_h3">可连接的ip</h3>
				</div>
				<div class="my_fav_list">
					<button class="iplist cell" plain @tap="connectPlayer" data-ip="192.168.1.105">192.168.1.105(测试)</button>
					<button class="iplist cell" plain v-for="(item, index) in ipList" :key="index" :data-ip="item" @tap="connectPlayer"><span>{{ item }}</span></button>

				</div>
			</div>
		</div>
		<loadLine v-if="isSacning" loadType="line" :loadPercent="loadPercent"></loadLine>
		<button type="primary" :disabled="isSacning" @tap="scanIps">扫描</button>



	</view>
</template>

<script>
	import loadLine from '@/components/load-line/load-line.vue';
	import {
		connectPlayer
	} from '@/model/player.js'
	var wv;//计划创建的webview


	export default {
		components: {
			loadLine
		},
		data() {
			return {
				webviewStyles:{
					height:0
				},
				loadPercent: 0,
				localip: '0.0.0.0',
				loading: true,
				ipList: [],
				isSacning: false,
				interval: null,
				hasLocalip: false
			};
		},
		computed:{
			connectionIp(){
				return uni.getStorageSync('connectionIp');
			}
		},
		methods: {
			handleMessage(evt) {
				this.localip = evt.detail.data[0].localip;
				this.hasLocalip = true
				// this.scanIps();
			},
			scanIps() {
				this.isSacning = true
				let _this = this;
				let clock = 0; //最多4
				let requestArr = []; //存放尝试进行请求函数
				// let count_scaned=0//已经扫描的个数
				for (let i = 0; i < 256; i++) {
					requestArr.push(function() {
						let arr = _this.localip.split('.');
						arr[3] = i;
						// arr=[192,168,1,104]
						let url = 'http://' + arr.join('.') + ':8888/api/og/detail';
						uni.request({
							timeout: 200,
							url: url,
							success: res => {
								console.log('扫描到：', res);
								_this.ipList.push(arr.join('.'));
							},
							fail: err => {},
							complete: () => {
								clock--;
								_this.loadPercent = parseInt((i / 255) * 100);
							}
						});
					});
				} //end for

				this.interval = setInterval(function() {
					if (clock < 4) {
						clock++;
						let request = requestArr.shift();
						request();
					}
					if (requestArr.length == 0) {
						_this.isSacning = false
						clearInterval(_this.interval);
					}
				}, 100);
			},

			//链接ip
			connectPlayer(e) {
				uni.showLoading({
					title:"连接中"
				})
				// console.log(e.target.dataset.ip);
				connectPlayer({
					hostname: e.target.dataset.ip,
					port: 9090
				}).then(res => {
					if (res.status == 200) {
						uni.hideLoading()
						uni.setStorageSync('connectionIp',e.target.dataset.ip );
						uni.showToast({
							title: "连接成功"
						})
					}
				}).catch(err=>{
					uni.hideLoading()
					uni.showToast({
						title: "连接失败"
					})
				})
			}
		},
		onReady() {
			// #ifdef APP-PLUS
			var currentWebview = this.$scope.$getAppWebview()
			setTimeout(function() {
				wv = currentWebview.children()[0]
				// console.log(currentWebview.children().length);
				wv.setStyle({
					top:0,
					bottom:"auto",
					height: 0,
					width:0
				})
				// console.log(wv.getStyle());
			}, 1000); //如果是页面初始化调用时，需要延时一下
			setTimeout(function(){
				// console.log(wv.getStyle());
			},1000)
			// #endif
		},

		onUnload() {
			if (this.interval) { //退出页面时停止扫描
				clearInterval(this.interval);
				this.interval = null;
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
		margin-left: 5%;
		padding: 16px 0;
		border:0 !important;
		border-top: 1px solid #e0e0e0 !important;
		text-align: left;
		list-style: none;
		/* background-color: rgba(0,0,0,0.1); */
		border-radius: 0;
	}


</style>
