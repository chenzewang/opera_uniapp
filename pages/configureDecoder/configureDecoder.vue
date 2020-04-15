<template>
	<view>
		配置解码器页面
		<web-view src="/hybrid/html/getlocalip.html" @message="handleMessage"></web-view>

		<view >
			扫描中...(扫描样式等待优化)
			
		</view>
		<view class="ip_list">
			以下是扫描到的ip
			<text v-for="(item,index) in  ipList" :key="index">{{item}}</text>
		</view>
		<!-- <web-view src="https://www.baidu.com"></web-view> -->
		<!-- <load-line loadType="circle"  :loadPercent="loadPercent"></load-line> -->
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
				ipList:[]

			}
		},
		methods: {
			getIps() { //获取所有局域网内开启了8888端口的ip

			},
			handleMessage(evt) {
				this.localip = evt.detail.data[0].localip
			}
		},
		watch: {
			localip(newval, oldval) {
				this.loadPercent=100
				
				var i=0
				setInterval(function(){
					i++
					let arr=newval.split('.')
					arr[3]=i
					// arr=[192,168,1,104]
					let url="http://"+arr.join('.')+":8888/test"
					uni.request({
						timeout:200,
						url:url,
						success:(res)=>{
							console.log(res)
							this.ipList.push(arr.join('.'))
						},
						fail:(err)=>{
							console.log(url,err);
						}
					})
					
				},200)
				
				for(let i=0;i<256;i++){
					let arr=this.localip.split('.')
					arr[3]=i
					// arr=[192,168,1,104]
					let url="http://"+arr.join('.')+":8888/test"
					uni.request({
						timeout:100,
						url:url,
						success:(res)=>{
							console.log(res)
							this.ipList.push(arr.join('.'))
						},
						fail:(err)=>{
							console.log(url,err);
						}
					})
				}
			}
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
