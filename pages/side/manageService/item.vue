<template>
	<!-- 管理服务item组件 -->
	<view>
		<div id="main">
			<div id="top">{{top}}</div>
			<div id="middle">
					<div class="mid">
						<text class="iconleft" :style="sub1show?'color:rgba(218, 45, 30, 1)':''">&#xe616;</text>
						<div class="mright">该服务是否开启中？</div>
						<span v-if="!sub1show" class="mbottom" >否</span>
						<span v-else class="mbottom" >是</span>
					</div>
					<div class="mid">
						<text class="iconleft" :style="sub2show?'color:rgba(218, 45, 30, 1)':''">&#xe616;</text>
						<div class="mright">该服务开机是否自动启动？</div>
						<span v-if="!sub2show" class="mbottom" >否</span>
						<span v-else class="mbottom" >是</span>
					</div>
			</div>
			<div id="bottom">
				 <!-- <p :class="{red: !isshow,blue: isshow}" @click="isshow=!isshow">我爱云虹</p> -->
				<button :class="{subl:!sub1show,subll:sub1show}" @tap="switchServer">开启该服务</button>
				<button :class="{subr:sub1show,subrr:!sub1show}" @tap="switchServer">关闭该服务</button>
				<button :class="{subl:!sub2show,subll:sub2show}" @tap="switchPowerOn">开机自启动</button>
				<button :class="{subr:sub2show,subrr:!sub2show}" @tap="switchPowerOn">开机不自启</button>
				<button class="subl" @tap="restartServer">重启该服务</button>
				<button class="subr" @tap="reCheckStatus" >重检测状态</button>
			</div>
		</div>
	</view>
</template>

<script>
	import {
		checkServiceStatus,
		checkPowerOnStatus,
		switchPowerOn,
		switchServerOn,
		restartServer
	} from "@/model/configureServer.js";


export default {
	components: {},
	props: ['top'],
	data() {
		return {
			sub1show:false,//服务是否开启
			sub2show:false,//是否开机自启动
			sub3show:false,
		};
	},
	methods: {
		checkServiceStatus(){
			checkServiceStatus({type:this.top}).then(res=>{
				this.sub1show=res.active
			}).catch(res=>{
				console.log(res);
			})
		},
		checkPowerOnStatus(){
			checkPowerOnStatus({type:this.top}).then(res=>{
				this.sub1show=res.active
			}).catch(res=>{
				console.log(res);
			})
		},
		//重新检测两种状态
		reCheckStatus(){
			uni.showToast({
				title:'检测完毕'
			})
			this.checkServiceStatus()
			this.checkPowerOnStatus()
		},
		/*
		*切换开机自启状态
		*/
		switchPowerOn(){
			uni.showLoading({
				title:'操作进行中'
			})
			let isOn=this.sub2show?"off":"on"  //开还是关
			switchPowerOn({type:[this.top,isOn]}).then(res=>{
				this.sub2show=!this.sub2show
				uni.hideLoading()
			}).catch(err=>{
				uni.hideLoading()
			})
		},
		/*
		*切换服务开关状态
		*/
		switchServer(){
			uni.showLoading({
				title:'操作进行中'
			})
			let isOn=this.sub1show?"off":"on"  //开还是关
			switchServerOn({type:[this.top,isOn]}).then(res=>{
				this.sub1show=!this.sub1show
				uni.hideLoading()
			}).catch(err=>{
				uni.hideLoading()
			})
		},
		//重新重启服务
		restartServer(){
			uni.showLoading({
				title:'操作进行中'
			})
			restartServer({type:this.top}).then(res=>{
				uni.hideLoading()
			}).catch(res=>{
				uni.hideLoading()
				console.log(res);
			})
		},
	},
	mounted(){
		this.checkServiceStatus()
		this.checkPowerOnStatus()
	},
	watch: {}
};
</script>

<style>
/* @font-face {
  font-family: 'iconfont';  
  src: url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.eot');
  src: url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.eot?#iefix') format('embedded-opentype'),
  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.woff2') format('woff2'),
  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.woff') format('woff'),
  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.ttf') format('truetype'),
  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.svg#iconfont') format('svg');
} */
.iconleft {
	display: inline-block;
	font-family: iconfont;
	margin-left: 5%;
	margin-top: 5rpx;
	float: left;
	font-size: 45rpx;
}
.ip_webview {
	display: none;
	width: 0upx;
	height: 0upx;
}
body {
	background-color: rgba(204, 204, 204, 0.23);
}
#main {
	margin-top: 10%;
}
#top {
	text-align: center;
	font-size: 60rpx;
	color: rgb(95, 114, 128);
	margin-bottom: 4%;
}
#middle {
	overflow: hidden;
	background-color: #fff;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	width: 90%;
	margin-top: 5%;
	margin-bottom: 10%;
	margin-left: 5%;
}
.mid{
	margin-top: 5%;
	margin-bottom: 5%;
}
.mright{
	margin-left: 20%;
	font-size: 39rpx;
	color: #4e4e4e;
}
.mbottom{
	margin-left: 20%;
	font-size: 35rpx;
	color: rgb(183, 0, 0);
}
#bottom{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: space-around;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	background-color: #fff;
	width: 90%;
	height: 500rpx;
	margin: 0 auto;
}

.subl {
	height: 20%;
	width: 38%;
	font-size: 40rpx;
	color: rgb(95, 114, 128);
}
.subr {
	height: 20%;
	width: 38%;
	font-size: 40rpx;
	color: rgb(95, 114, 128);
}
.subll{
	width: 38%;
	font-size: 40rpx;
	color: white;
	background-color: rgb(95, 114, 128);
}
.subrr{
	width: 38%;
	font-size: 40rpx;
	color: white;
	background-color: rgb(95, 114, 128);
}
</style>
