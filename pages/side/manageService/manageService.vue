<template>
	<scroll-view class="box">

		<uni-segmented-control :current="tab_current" :values="tabs" @clickItem="onClickItem" style-type="text" active-color="rgba(218, 45, 30, 1)"></uni-segmented-control>
		<view class="content">
			<view v-show="tab_current === 0">
				<NAA></NAA>
			</view>
			<view v-show="tab_current === 1">
				<Ober></Ober>
			</view>
			<view v-show="tab_current === 2">
				<roonBridge></roonBridge>
			</view>
		</view>

	</scroll-view>
</template>

<script>
	import {
		getDiskList,
		mountMobileDisk,
		mountNetworkDisk
	} from '@/model/configureServer.js';
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	import NAA from "../managementService/NAA.vue"
	import Ober from "../managementService/Ober.vue"
	import roonBridge from "../managementService/roonBridge.vue"
	export default {
		components: {
			uniSegmentedControl,NAA,Ober,roonBridge
		},
		data() {
			return {
				tabs: ['欧博音乐网桥', 'RoonBridge', 'NAA'],
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
				this.tab_current = e.currentIndex;
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
	.content {
		margin-top: 10rpx;
	}
</style>
