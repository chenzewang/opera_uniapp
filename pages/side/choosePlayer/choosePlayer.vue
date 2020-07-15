<template>
	<view class="box">
		<!-- 选择播放机页面 -->
		<div style="
        display: flex;
        flex-direction: column;
        height: 100%;
        align-content: flex-end;
      ">
			<div class="fav_list">
				<div data-v-357a65ed="" class="fav_list_box">
					<div class="fav_list_title" @tap="setPlayer">
						<h3 class="fav_list_title_h3">目前选定的的播放机</h3>
					</div>
					<div class="my_fav_list">
						<view class="iplist">{{  }}</view>
					</div>
				</div>
			</div>

			<div class="fav_list">
				<div data-v-357a65ed="" class="fav_list_box">
					<div class="fav_list_title">
						<h3 class="fav_list_title_h3">可连接的播放机</h3>
					</div>
					<div class="my_fav_list">
						<button class="iplist" plain @tap="setPlayer" data-ip="192.168.0.100">
							192.168.0.100(测试)
						</button>
						<button class="iplist" plain v-for="(item, index) in list" :key="index" :data-name="item" @tap="setPlayer">
							<span>{{ item }}</span>
						</button>
					</div>
				</div>
			</div>
			
			<!-- <view>
				<button class="btn" :style="
            isSacning
              ? 'background-color: #e2e2e2;'
              : 'background-color: #fcfcfc;'
          "
				 type="primary" :disabled="isSacning" @tap="">
					<span class="iconleft">&#xe75e;</span>
					<span class="iconbot" style="color: #000000;">扫描</span>
				</button>
			</view> -->
		
		</div>
	</view>
</template>

<script>
	import loadLine from "@/components/load-line/load-line.vue";
	import {
		getPlayerList,setPlayer
	} from "@/model/api/playerApi.js";

	export default {
		components: {
			loadLine,
		},
		data() {
			return {
			
				loadPercent: 0,
				localip: "0.0.0.0",
				loading: true,
				ipList: [],
				isSacning: false,
				interval: null,
				hasLocalip: false,
				list:[]
			};
		},
		computed: {
			
		},
		methods: {
			getPlayerList(){
				getPlayerList().then(res=>{
					this.list=res
					console.log(res);
				}).catch(err=>{
					console.log(err);
				})
			},
			setPlayer(){
				// setPlayer({}).then()
			}
			
		},
		onReady() {
			this.getPlayerList()
		},

		onUnload() {
			
		},
		watch: {},
	};
</script>

<style scoped>
	.box {
		background-color: rgba(204, 204, 204, 0.23);
	}

	@font-face {
		font-family: "iconfont";
		/* project id 1760556 */
		src: url("http://at.alicdn.com/t/font_1760556_crzxd3efh4p.eot");
		src: url("http://at.alicdn.com/t/font_1760556_crzxd3efh4p.eot?#iefix") format("embedded-opentype"),
			url("http://at.alicdn.com/t/font_1760556_crzxd3efh4p.woff2") format("woff2"),
			url("http://at.alicdn.com/t/font_1760556_crzxd3efh4p.woff") format("woff"),
			url("http://at.alicdn.com/t/font_1760556_crzxd3efh4p.ttf") format("truetype"),
			url("http://at.alicdn.com/t/font_1760556_crzxd3efh4p.svg#iconfont") format("svg");
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

	.iplist {
		font-size: 15px;
		color: #4d4d4d;
		margin-left: 5%;
		padding: 16px 0;
		border: 0 !important;
		border-top: 1px solid #e0e0e0 !important;
		text-align: left;
		list-style: none;
		/* background-color: rgba(0,0,0,0.1); */
		border-radius: 0;
	}

	/* .bottom {
	display: flex;
	flex-direction:cloumn;
	align-content: flex-end;
} */
	.btn {
		width: 100%;
		position: fixed;
		bottom: 0;
	}

	.iconleft {
		display: inline-block;
		font-family: iconfont;
		text-align: center;
		margin-top: 5rpx;
		margin-right: 20rpx;
		color: black;
		font-size: 35rpx;
	}

	.iconbot {
		font-size: 35rpx;
		color: #000000;
	}
</style>
