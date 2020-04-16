<template>
	<view>
		<!-- 连接设备页面 -->
		<div v-if="isLogin"><web-view src="/hybrid/html/getlocalip.html" @message="handleMessage"></web-view></div>
		<loadLine loadType="line" :loadPercent="loadPercent"></loadLine>

		<div class="fav_list">
			<div data-v-357a65ed="" class="fav_list_box">
				<div class="fav_list_title"><h3 class="fav_list_title_h3">可连接的ip</h3></div>
				<div class="my_fav_con">
					<ul class="my_fav_list">
						<li class="iplist">hhhh</li>
						<view class="iplist" v-for="(item, index) in ipList" :key="index"><span>{{ item }}</span></view>
						
					</ul>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
import loadLine from '@/components/load-line/load-line.vue';

export default {
	components: {
		loadLine
	},
	data() {
		return {
			loadPercent: 0,
			localip: '0.0.0.0',
			loading: true,
			ipList: [],
			isLogin: true
		};
	},
	methods: {
		handleMessage(evt) {
			this.localip = evt.detail.data[0].localip;
			this.scanIps();
		},
		scanIps() {
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

			var interval = setInterval(function() {
				if (clock < 4) {
					clock++;
					let request = requestArr.shift();
					request();
				}
				if (requestArr.length == 0) {
					clearInterval(interval);
				}
			}, 100);
		}
	},
	created() {
		if (requestArr.length == 0) {
			this.isLogin = false;
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
	margin-top: -13%;	
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
	border-top: 1px solid #e0e0e0;
	list-style: none;
	}

</style>
