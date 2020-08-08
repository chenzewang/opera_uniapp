let host = uni.getStorageSync('connectionIp')
//原来的接口，调用的是网易云的接口
let Playlist = {};

Playlist.get_playlist_detail = function(id, cb) {
	let url = config.API.PLAYLIST_DETAIL;
	let params = {
		id: id
	}
	request.get(url, params, (res)=> {
		let data = res.data
		if (data.code == 200) {
			
			cb && cb(data)
		}else {
			console.log('failed');
		}
	})
}

//python server的接口
/*
根据专辑名字获取歌曲信息
*/
Playlist.getSongByalbum=function(params){
	return new Promise((resolve, reject) => {
	    uni.request({
	      url: "http://" + host + ":8888/player/find/songs", 
	      data: params,
	      success: (res) => {
	        if (res.data.status == 200) {
	          resolve(res.data.tracks)
	        } else {
	          reject(res)
	        }
	      },
	      fail(err) {
	        reject(err)
	      }
	    });
	  })
}

import config from '../config/config.js';
import request from '../utils/request.js';

module.exports = Playlist;