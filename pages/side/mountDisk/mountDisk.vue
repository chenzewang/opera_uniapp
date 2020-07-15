<template>
	<scroll-view class="box">

		<uni-segmented-control :current="tab_current" :values="tabs" @clickItem="onClickItem" style-type="text" active-color="rgba(218, 45, 30, 1)"></uni-segmented-control>
		<view class="content">
			<view v-show="tab_current === 0">
				<view class="fav_list">
					<div data-v-357a65ed="" class="fav_list_box">
						<div class="fav_list_title">
							<h3 class="fav_list_title_h3">硬盘列表:</h3>
						</div>
						<div class="my_fav_list">
							<button class="iplist cell"><span>192.168.1.101(测试)</span></button>
							<button class="iplist cell" plain v-for="(item, index) in disk_list" :key="index">
								<span>{{ item }}</span>
							</button>
						</div>
					</div>
				</view>
			</view>
			<view v-show="tab_current === 1">
				<div id="main">
					<div id="top"></div>
					<div id="bottom">
						<div class="mui-input-row">
							<span class="iconleft">&#xe60b;</span>
							<label></label>
							<input type="text" style="width: 70% ;margin-left: 20%;padding-bottom: 2%;  border-bottom:1px solid darkgrey; " v-model="form_network_disk.username"
							 placeholder="用户名">
						</div>
						<div class="mui-input-row">
							<text class="iconleft">&#xe688;</text>
							<label></label>
							<input type="password" style="width: 70%;margin-left: 20%;padding-bottom: 1%; border-bottom:1px solid darkgrey;" v-model="form_network_disk.password"
							 placeholder="密码">
						</div>
						<div class="mui-input-row">
							<text class="iconleft">&#xe607;</text>
							<label></label>
							<input type="text" style="width: 70% ;margin-left: 20%; padding-bottom: 1%; border-bottom:1px solid darkgrey;" v-model="form_network_disk.path"
							 placeholder="挂载源路径">
						</div>
						<button class="sub" @tap="mountNetworkDisk">确定</button>
					</div>
				</div>
			</view>
			<view v-show="tab_current === 2">
				选项卡3的内容
			</view>
		</view>




		<uni-popup ref="popup" type="top">

		</uni-popup>
	</scroll-view>
</template>

<script>
	import {
		getDiskList,
		mountMobileDisk,
		mountNetworkDisk
	} from '@/model/configureServer.js';
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"

	export default {
		components: {
			uniPopup,
			uniSegmentedControl
		},
		data() {
			return {
				tabs: ['硬盘列表', '挂载网络硬盘', '挂载移动硬盘'],
				tab_current: 0,
				disk_list: [],
				showPass: false,
				form_network_disk:{
					username:"",
					password:"",
					path:""
				}
			};
		},
		onLoad() {
			this.getDiskList();
		},
		methods: {
			onClickItem(e) {
				if (e.currentIndex == 2) {
					uni.showModal({
						title: '挂载移动硬盘',
						content: '挂载移动硬盘将会重启设备',
						success: function(res) {
							uni.showLoading({
								title:"请稍等"
							})
							mountMobileDisk().then(res=>{
								console.log(res);
								uni.hideLoading()
							}).catch(err=>{
								console.log(res);
								uni.hideLoading()
							})
							// if (res.confirm) {
							// 	uni.navigateTo({
							// 		url: '../../pages/side/connection/connection',
							// 	});
							// }
						}
					});
				} else {
					this.tab_current = e.currentIndex;
				}

			},
			mountDisk(e) {
				this.$refs.popup.open();
			},
			showEye() {
				this.showPass = !this.showPass;
			},
			getDiskList() {
				getDiskList().then(res => {
					console.log(res);
					this.disk_list = res
				})
			},
			mountNetworkDisk(){
				uni.showLoading({
					title:"将会重启设备,请稍等"
				})
				let params=this.form_network_disk
					mountNetworkDisk(params).then(res=>{
					console.log(res);
					uni.hideLoading()
				})
			}
		},

		watch: {}
	};
</script>

<style>
	body {
		background-color: rgba(204, 204, 204, 0.23);
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

	.iplist {
		font-size: 15px;
		color: #4d4d4d;
		padding: 16px 0;
		padding-left: 5%;
		border: 0 !important;
		border-top: 1px solid #e0e0e0 !important;
		text-align: left;
		list-style: none;
		background-color: #FFFFFF;
		border-radius: 0;
	}

	.cell:active {
		background-color: rgba(0, 0, 0, 0.1);
	}

	.iplist .switch {
		float: right;
		margin-right: 5%;
	}


	/* form部分 */
	#main {
		margin: 0 auto;
		padding: 15rpx 0;
		/* margin-top: 15%; */
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}

	#top {
		text-align: center;
		font-size: 40rpx;
		color: rgb(95, 114, 128);
		margin-bottom: 4%;
	}

	#bottom {
		margin-top: 5%;
	}

	.mui-input-row {
		margin-top: 5%;
	}

	.sub {
		margin-top: 7%;
		width: 30%;
		font-size: 40rpx;
		color: rgb(95, 114, 128);
	}



	.iconleft {
		display: inline-block;
		font-family: iconfont;
		margin-left: 10%;
		float: left;
		font-size: 45rpx;

	}

	.ip_webview {
		display: none;
		width: 0upx;
		height: 0upx;
	}

	.content {
		margin-top: 10rpx;
	}
</style>
