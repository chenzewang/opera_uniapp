<template>
	<view>
		<div id="main">
			<div id="top">RoonBridge</div>
			<div id="middle">
					<div class="mid">
						<text class="iconleft">&#xe616;</text>
						<div class="mright">该服务是否开启中？</div>
						<span class="mbottom">否</span>
					</div>
					<div class="mid">
						<text class="iconleft">&#xe616;</text>
						<div class="mright">该服务开机是否自动启动？</div>
						<span class="mbottom">否</span>
					</div>
			</div>
			<div id="bottom">
				 <!-- <p :class="{red: !isshow,blue: isshow}" @click="isshow=!isshow">我爱云虹</p> -->
				<button :class="{subl:!sub1show,subll:sub1show}" @click="sub1show=!sub1show" style="margin-top: 8%;">开启该服务</button>
				<button :class="{subr:sub1show,subrr:!sub1show}" @click="sub1show=!sub1show">关闭该服务</button>
				<button :class="{subl:!sub2show,subll:sub2show}" @click="sub2show=!sub2show">开机自启动</button>
				<button :class="{subr:sub2show,subrr:!sub2show}" @click="sub2show=!sub2show">开机不自启</button>
				<button :class="{subl:!sub3show,subll:sub3show}" @click="sub3show=!sub3show">重启该服务</button>
				<button :class="{subr:sub3show,subrr:!sub3show}" @click="sub3show=!sub3show" style="margin-bottom: 8%; width:39%;font-size: 35rpx;">重新检测状态</button>
			</div>
		</div>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			sub1show:false,
			sub2show:false,
			sub3show:false,
			
		};
	},
	methods: {},
	watch: {}
};
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 1760556 */
  src: url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.eot');
  src: url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.eot?#iefix') format('embedded-opentype'),
  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.woff2') format('woff2'),
  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.woff') format('woff'),
  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.ttf') format('truetype'),
  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.svg#iconfont') format('svg');
}
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
#bottom {
	overflow: hidden;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	background-color: #fff;
	width: 90%;
	margin: 0 auto;
}
.subl {
	float: left;

	margin-left: 5%;
	margin-top: 7%;
	width: 38%;
	font-size: 40rpx;
	color: rgb(95, 114, 128);
}
.subr {
	float: right;

	margin-right: 5%;
	margin-top: 8%;
	width: 38%;
	font-size: 40rpx;
	color: rgb(95, 114, 128);
}
.subll{
	float: left;
	margin-left: 5%;
	margin-top: 7%;
	width: 38%;
	font-size: 40rpx;
	color: white;
	background-color: rgb(95, 114, 128);
}
.subrr{
	float: right;
	margin-right: 5%;
	margin-top: 8%;
	width: 38%;
	font-size: 40rpx;
	color: white;
	background-color: rgb(95, 114, 128);
}
</style>
