<script>
	import Storage from '@/utils/storage.js';
	import song from '@/model/song.js';
	import PlayerHelper from '@/utils/player.js';

	export default {
		globalData: {
			flrst_play: true,
			player: {},
		},
		onLaunch: function() {
			console.log('onLaunch');
			this.init_played();
			// //全局唯一播放管理
			// this.init_player(); //这里先注释掉, 放在init_played中调用观察下是否能解决{"code":-99,"message":"未知错误"}的问题
			this.init_current_playlist(); //初始化播放列表
			// 加载icon字体文件
			const dom = weex.requireModule('dom');
			dom.addRule('fontFace', {
				'fontFamily': "weexUiIconFont",
				'src': "url(\'http://at.alicdn.com/t/font_1211227_midl7sqf2t8.ttf\')"
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			/**
			 * 初始化播放模式  循环、随机等等
			 */
			init_play_mode() {
				let current_play_mode = Storage.get_play_mode();
				if (current_play_mode) {
					this.$store.commit('set_play_mode', current_play_mode);
				}
			},
			/**
			 * 初始化播放列表
			 */
			init_current_playlist() {
				let current_playlist = Storage.get_current_playlist();
				if (current_playlist) {
					this.$store.commit('set_current_playlist', current_playlist);
				}
			},
			/**
			 * 初始化上次的播放数据
			 */
			init_played() {
				let played = Storage.get_played();
				if (played && played.id) {
					let music_id = played.id;

					song.get_song_url(music_id, (res) => {
						played.url = res.data[0].url;
						this.$store.commit('set_played', played);
						this.init_player();
					});
				} else {
					this.init_player();
				}
			},
			/**
			 * 初始化播放器（单例）
			 * 这个是调用h5 plus的SDK，使用手机播放。
			 * 需要重写一个播放器
			 */
			init_player() {
				//初始化的时候, 如果played存在, 则需要将played.src填入, 然后不要播放, 这样play页面就可以获取到歌曲音频长度
				const player = plus.audio.createPlayer({
					autoplay: false,
				});

				player.addEventListener('canplay', () => {
					if (this.globalData.flrst_play) {
						this.globalData.flrst_play = false;
						return;
					}
					console.log('on canplay');
					PlayerHelper.play();
				});
				player.addEventListener('play', () => {
					console.log('on play');
					this.$store.commit('set_playing', true);
				});
				player.addEventListener('pause', () => {
					console.log('on pause');
					this.$store.commit('set_playing', false);
				});
				player.addEventListener('stop', () => {
					console.log('on stop');
					this.$store.commit('set_playing', false);
				});
				player.addEventListener('ended', () => {
					console.log('on ended');
					PlayerHelper.next((played) => {
						played && this.$store.commit('set_played', played);
					});
					this.$store.commit('set_playing', false);
				});
				player.addEventListener('error', (e) => {
					console.log('on error');
					console.log(e);
					this.$store.commit('set_playing', false);
				});
				player.addEventListener('waiting', () => {
					console.log('on waiting');
				});
				player.addEventListener('seeking', () => {
					console.log('on seeking');
				});
				player.addEventListener('seeked', () => {
					console.log('on seeked');
				});
				player.addEventListener('prev', () => {
					// 后台播放控制器上点击上一曲按钮时触发，未开启后台控制器则不触发此事件
					console.log('on prev');
				});
				player.addEventListener('next', () => {
					// 后台播放控制器上点击下一曲按钮时触发，未开启后台控制器则不触发此事件
					console.log('on next');
				});

				this.globalData.player = player;
				PlayerHelper.set_url();
			}
		},
	}
</script>

<style>
	.page {
		font-size: 16px;
	}
	@font-face {
	  font-family: 'iconfont'; 
	  src: url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.eot');
	  src: url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.eot?#iefix') format('embedded-opentype'),
	  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.woff2') format('woff2'),
	  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.woff') format('woff'),
	  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.ttf') format('truetype'),
	  url('http://at.alicdn.com/t/font_1760556_1xdg574rlqk.svg#iconfont') format('svg');
	}
	@font-face {
		font-family: 'iconfont';
		
		src: url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.eot');
		src: url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.eot?#iefix') format('embedded-opentype'),
			url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.woff2') format('woff2'),
			url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.woff') format('woff'),
			url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.ttf') format('truetype'),
			url('http://at.alicdn.com/t/font_1760556_i2tv8vna7in.svg#iconfont') format('svg');
	}
</style>
