<template>
	<scroll-view>
		<view class="fav_list">
			<div data-v-357a65ed="" class="fav_list_box">
				<div class="fav_list_title"><h3 class="fav_list_title_h3">当前连接的wifi:</h3></div>
				<div class="my_fav_list">
					<view class="iplist cell" plain:data-val="item.value"><span>192.168.1.101(测试)</span></view>
				</div>
			</div>
		</view>

		<view class="fav_list">
			<div data-v-357a65ed="" class="fav_list_box">
				<div class="fav_list_title"><h3 class="fav_list_title_h3">选择Wifi:</h3></div>
				<div class="my_fav_list">
					<button @tap="configureWifi"><span>192.168.1.101(测试)</span></button>
					<button class="iplist cell" plain v-for="(item, index) in decoder_list" :key="index" :data-val="item.value" @tap="configureWifi">
						<span>{{ item.key }}</span>
					</button>
				</div>
			</div>
		</view>

		<uni-popup ref="popup" type="center">
			<div style="background-color: #FFFFFF;border-radius: 40rpx;">
				
					<div class="secwife"><span style="display:inline-block;margin-top: 8%;">192.168.1.101(测试)</span></div>
					<input
						:type="showPass ? 'text' : 'password'"
						placeholder="    密码"
						v-model="passtext"
						class="uni-input"
						:style="isshow ? 'width:85%;height: 100rpx;margin-left:7%;margin-top: 8%; border: 1px solid black;background:rgba(224, 224, 224, 0.4);border-radius: 30rpx;':'width:85%;height: 100rpx;margin-left:7%;margin-top: 8%; border: 1px solid #55aaff;background:rgba(213, 213, 213, 0.4);border-radius: 30rpx;'"
						@focus="isshow=false"
					/>
					<image :src="showPass ? src1 : src2" @tap="showEye" class="icon" ></image>
				<button class="btn" style="margin-left:10%;display: inline-block;"><span class="btnspan">取消</span></button>
				<button class="btn" style="margin-left: 15%;float:left"><span class="btnspan">连接</span></button>
			</div>
		</uni-popup>
	</scroll-view>
</template>

<script>
import { getSqueezeliteList, configureDecoder } from '@/model/configureServer.js';
import uniPopup from '@/components/uni-popup/uni-popup.vue';

export default {
	components: { uniPopup },
	data() {
		return {
			decoder_list: [],
			dsd: 'DoP',
			showPass: false,
			src1: '../../../static/rattle/mine/yanjing.png',
			src2: '../../../static/rattle/mine/yanjing_4.png',
			eyetext: '',
			passtext: '',
			isshow:true
		};
	},
	onLoad() {
		this.getDecoderList();
	},
	methods: {
		getDecoderList() {
			getSqueezeliteList()
				.then(res => {
					this.decoder_list = res;
				})
				.catch(err => {
					console.log('err', err);
				});
		},
		configureWifi(e) {
			this.$refs.popup.open();
		},
		getInputValue(e) {
			console.log(e);
		},
		showEye() {
			this.showPass = !this.showPass;
		},
		focus(e){  
			 let height = e.detail.height  ;
			 console.log(height);
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
.uni-popup__wrapper-box {
	width: 100%;
	height: 55%;
	border-radius: 51px;
}
/* .uni-popup__wrapper-box {
	background-color: #ffffff;
	height: 100%;
	width: 100%;
} */
.secwife{
	text-align: center;
	font-size: 40rpx;
}

.icon{
	margin-top: -9%;
	margin-right: 57rpx;
	width: 59rpx;
	height: 55rpx;
	float: right;
}
.btn {
	margin-top: 8%;
	margin-bottom: 6%;
	width: 30%;
	height: 90rpx;
	text-align: center;
	/* border:none; */
	border-radius: 12rpx;
	/* padding-bottom: 40rpx; */
	/* float: left; */
	/* margin-top: 80%; */
}

.btnspan {
	text-align: center;
	font-size: 35rpx;
	vertical-align: top;
}

</style>
