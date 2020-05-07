<!--
 * @Author: your name
 * @Date: 2020-04-23 21:26:22
 * @LastEditTime: 2020-04-24 19:27:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\pages\side\manageService\manageService.vue
 -->
<template>
	<scroll-view class="box">

		<uni-segmented-control :current="tab_current" :values="tabs" @clickItem="onClickItem" style-type="text" active-color="rgba(218, 45, 30, 1)"></uni-segmented-control>
		<view class="content">
			<view v-show="tab_current === 0">
				<!-- <Ober></Ober> -->
				<NAA top="Ober"></NAA>
			</view>
			<view v-show="tab_current === 1">
				<NAA top="RoonBridge"></NAA>
			</view>
			<view v-show="tab_current === 2">
				<NAA top="NAA"></NAA>
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
	import NAA from "../manageService/item.vue"
	export default {
		components: {
			// uniSegmentedControl,NAA,Ober,roonBridge
			uniSegmentedControl,NAA
		},
		data() {
			return {
				tabs: ['欧博音乐网桥', 'RoonBridge', 'NAA'],
				tab_current: 0
			};
		},
		onLoad() {
		},
		methods: {
			onClickItem(e) {
				this.tab_current = e.currentIndex;
			},

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
