<template>
	<view>
		连接设备页面
		<web-view src="/hybrid/html/getlocalip.html" @message="handleMessage"></web-view>

		<loadLine loadType="line" :loadPercent="loadPercent"></loadLine>
		<view class="ip_list">
			以下是扫描到的ip
			<view v-for="(item,index) in  ipList" :key="index">{{item}}</view>
		</view>
	</view>
</template>

<script>
	import loadLine from '@/components/load-line/load-line.vue';

	export default {
		components: {
			loadLine,
		},
		data() {
			return {
				loadPercent: 0,
				localip: '0.0.0.0',
				loading: true,
				ipList: []

			}
		},
		methods: {
			handleMessage(evt) {
				this.localip = evt.detail.data[0].localip
				this.scanIps()
			},
			scanIps(){
				let _this = this
				let clock=0  //最多4
				let requestArr = []//存放尝试进行请求函数
				// let count_scaned=0//已经扫描的个数
				for (let i = 0; i < 256; i++) {
					requestArr.push(function() {
						let arr = _this.localip.split('.')
						arr[3] = i
						// arr=[192,168,1,104]
						let url = "http://" + arr.join('.') + ":8888/test"
						uni.request({
							timeout: 200,
							url: url,
							success: (res) => {
								console.log('扫描到：',res)
								_this.ipList.push(arr.join('.'))
							},
							fail: (err) => {
							},
							complete: () => {
								clock--
								_this.loadPercent = parseInt((i / 255) * 100)
							}
						})
					})
				}//end for
				
				var interval=setInterval(function(){
					if(clock<4){
						clock++
						let request=requestArr.shift()
						request()
					}
					if(requestArr.length==0){
						clearInterval(interval)
					}
				},100)
			}
		},
		watch: {
			
		}
	}
</script>

<style>
	.ip_webview {
		display: none;
		width: 0upx;
		height: 0upx;
	}
</style>
