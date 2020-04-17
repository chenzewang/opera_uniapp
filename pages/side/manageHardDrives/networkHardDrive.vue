<template>
	<view>
		
		<div id="main">
			<div id="top">挂载网络硬盘</div>
			<div id="bottom">
				<div class="mui-input-row">
					<span class="iconleft">&#xe60b;</span>
					<label></label>
					<input type="text" style="width: 70% ;margin-left: 20%;padding-bottom: 2%;  border-bottom:1px solid darkgrey; "	 placeholder="用户名">
				</div>
				<div class="mui-input-row">
					<text class="iconleft">&#xe688;</text>
					<label></label>
					<input type="password" style="width: 70%;margin-left: 20%;padding-bottom: 1%; border-bottom:1px solid darkgrey;" placeholder="密码">
				</div>
				<div class="mui-input-row">
					<text class="iconleft">&#xe607;</text>
					<label></label>
					<input type="text" style="width: 70% ;margin-left: 20%; padding-bottom: 1%; border-bottom:1px solid darkgrey;" placeholder="挂载源路径">
				</div>
				<button class="sub">提 交</button>
			</div>
		</div>
	</view>
</template>

<script>

	export default {
		components: {
		},
		data() {
			return {
			

			}
		},
		methods: {
		
		},
		watch: {
		
		}
	}
</script>

<style>
	@font-face {
	  font-family: 'iconfont';  /* project id 1760556 */
	  src: url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.eot');
	  src: url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.eot?#iefix') format('embedded-opentype'),
	  url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.woff2') format('woff2'),
	  url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.woff') format('woff'),
	  url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.ttf') format('truetype'),
	  url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.svg#iconfont') format('svg');
	}
	.iconleft {
		    display: inline-block;
	        font-family: iconfont;
	        margin-left: 10%;
			float: left;
			font-size:45rpx ;
		
	    }
	.ip_webview {
		display: none;
		width: 0upx;
		height: 0upx;
	}
	#main{
		margin-top: 15%;
	}
	#top{
		text-align: center;
		font-size: 60rpx;
		color: rgb(95,114,128);
		margin-bottom: 4%;
	}
	#bottom{
		margin-top: 5%;
	}
	.mui-input-row{
		margin-top: 5%;
	}
	.sub{
		margin-top: 7%;
		width: 30%;
		font-size: 40rpx;
		color: rgb(95,114,128);
	}
	
</style>
