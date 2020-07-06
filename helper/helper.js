/*
 * @Author: your name
 * @Date: 2020-04-15 11:44:02
 * @LastEditTime: 2020-07-02 22:47:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\helper\helper.js
 */
//监听globalData中的played属性
function played_watch(cb) {
	var obj = getApp().globalData;
	Object.defineProperty(obj, "played", {
		configurable: true,
		enumerable: true,
		set: function (value) {
			getApp().globalData._played = value;
			cb(value);
		},
		get: function () {
			// 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.played的时候，这里就会执行。
			return getApp().globalData._played;
		}
	})
}


function backgrounder() {
	let os = plus.os.name.toLocaleLowerCase() == 'android' ? 'android' : 'ios';
	if (os == 'android') {
		let main = plus.android.runtimeMainActivity();
		main.moveTaskToBack(false);
	}
}



function to(url, mode) {
	mode = mode || 'navigate_to';


	uni.navigateTo({
		url: url
	});
}


function toast(icon, text, duration, mask, position) {
	duration = duration || 1500;
	mask = mask || false;
	position = position || false;
	uni.showToast({
		icon: icon,
		title: text,
		duration: duration,
		mask: mask,
		position: position,
	})
}


export default {
	to,
	toast,
	backgrounder,
	played_watch
}