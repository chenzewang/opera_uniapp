/*
 * @Author: 日王
 * @Date: 2020-07-15 13:50:45
 * @LastEditTime: 2020-07-15 14:26:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\model\api\player.js
 */ 
let host = uni.getStorageSync('connectionIp')

/**
 * 随机播放
 * @param mode tracks表示随机播放所有歌曲， albums表示随机播放所有专辑
 */
export function randomPlay(params) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/player/play/random",
      data: params,
      success: (res) => {
        if (res.data.status == 200) {
          resolve(res.data)
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


/**
 * 播放机列表
 * 
 */
export function getPlayerList() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/player/list/players",
      success: (res) => {
        if (res.data.status == 200) {
          resolve(res.data)
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

/**
 * 选择播放机
 * @param player   播放机名称
 */
export function setPlayer(params) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/player/set/players",
      data: params,
      success: (res) => {
        if (res.data.status == 200) {
          resolve(res.data.player_name)
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


