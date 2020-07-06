/*
 * @Author: your name
 * @Date: 2020-04-15 11:43:56
 * @LastEditTime: 2020-06-01 00:20:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\model\top.js
 */ 
let Top = {};

/**
 * 获取 各类排行top数据
 * 
 */
Top.album = function(cb, limit, offset) {
	let url = config.API.TOP_ALBUM;
	limit = limit || 10;
	offset = offset || 0;
	request.get(url, {limit: limit, offset: offset}, (res)=> {
		let data = res.data
		if (data.code == 200) {
			cb && cb(data)
		}else {
			console.log('failed');
		}
	})
}

import config from '../config/config.js';
import request from '../utils/request.js';

module.exports = Top;