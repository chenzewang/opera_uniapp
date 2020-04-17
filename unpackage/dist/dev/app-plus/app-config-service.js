
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/welcome/welcome","pages/index/index","pages/search/search","pages/login/login","pages/login/phone","pages/login/password","pages/login/captcha","pages/login/nickname","pages/playlist/playlist","pages/play/play","pages/album/album","pages/video/video","pages/side/configureDecoder/configureDecoder","pages/side/connection/connection","pages/side/mountDisk/mountDisk"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"cloud music","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff"},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"cloudmusic","compilerVersion":"2.6.11","entryPagePath":"pages/welcome/welcome","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/welcome/welcome","meta":{"isQuit":true,"isNVue":true},"window":{"titleNView":false}},{"path":"/pages/index/index","meta":{"isNVue":true},"window":{"navigationBarTitleText":"首页","titleNView":false}},{"path":"/pages/search/search","meta":{"isNVue":true},"window":{"titleNView":false,"backgroundColor":"rgba(0,0,0,0.3)","animationType":"slide-in-bottom","animationDuration":250,"bounce":"none","subNVues":[{"id":"search_nav_bar","path":"subNVue/search_nav_bar","style":{"position":"dock","dock":"top","height":"130rpx"}}]}},{"path":"/pages/login/login","meta":{"isNVue":true},"window":{"navigationBarTitleText":"登录","titleNView":false}},{"path":"/pages/login/phone","meta":{"isNVue":true},"window":{"navigationBarTitleText":"手机号登录","titleNView":{"titleAlign":"left","backgroundColor":"#FF0000","titleColor":"#FFFFFF"}}},{"path":"/pages/login/password","meta":{"isNVue":true},"window":{"navigationBarTitleText":"手机号登录","titleNView":{"titleAlign":"left","backgroundColor":"#FF0000","titleColor":"#FFFFFF"}}},{"path":"/pages/login/captcha","meta":{"isNVue":true},"window":{"navigationBarTitleText":"手机号验证","titleNView":{"titleAlign":"left","backgroundColor":"#FF0000","titleColor":"#FFFFFF"}}},{"path":"/pages/login/nickname","meta":{"isNVue":true},"window":{"navigationBarTitleText":"昵称","titleNView":{"titleAlign":"left","backgroundColor":"#FF0000","titleColor":"#FFFFFF"}}},{"path":"/pages/playlist/playlist","meta":{"isNVue":true},"window":{"titleNView":{"titleColor":"#FFFFFF","titleText":"歌单","backgroundColor":"rgba(218, 45, 30, 1)","buttons":[{"fontSrc":"/static/font/iconfont.ttf","text":"","width":"40px","fontSize":"24px","color":"#FFFFFF","background":"rgba(0,0,0,0)"},{"fontSrc":"/static/font/iconfont.ttf","text":"","width":"40px","fontSize":"24px","color":"#FFFFFF","background":"rgba(0,0,0,0)"}]}}},{"path":"/pages/play/play","meta":{"isNVue":true},"window":{"titleNView":{"titleAlign":"left","titleColor":"#FFFFFF","titleText":"加载中...","backgroundColor":"#171616","buttons":[{"fontSrc":"/static/font/iconfont.ttf","text":"","width":"40px","fontSize":"24px","color":"#FFFFFF","background":"rgba(0,0,0,0)"}]}}},{"path":"/pages/album/album","meta":{"isNVue":true},"window":{"titleNView":{"titleColor":"#FFFFFF","titleText":"专辑","backgroundColor":"rgba(218, 45, 30, 1)","buttons":[{"fontSrc":"/static/font/iconfont.ttf","text":"","width":"40px","fontSize":"24px","color":"#FFFFFF","background":"rgba(0,0,0,0)"}]}}},{"path":"/pages/video/video","meta":{"isNVue":true},"window":{"animationType":"fade-in","titleNView":{"titleColor":"#FFFFFF","titleText":"精彩视频","backgroundColor":"rgba(0, 0, 0, .2)","titleAlign":"left","type":"float"}}},{"path":"/pages/side/configureDecoder/configureDecoder","meta":{},"window":{}},{"path":"/pages/side/connection/connection","meta":{},"window":{"titleNView":{"titleColor":"#FFFFFF","titleText":"连接设备","backgroundColor":"rgba(218, 45, 30, 1)","buttons":[{"fontSrc":"/static/font/iconfont.ttf","text":"","width":"40px","fontSize":"24px","color":"#FFFFFF","background":"rgba(0,0,0,0)"}]}}},{"path":"/pages/side/mountDisk/mountDisk","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
