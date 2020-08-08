/*
 * @Author: 日王
 * @Date: 2020-07-15 13:50:45
 * @LastEditTime: 2020-07-18 12:55:01
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
          let players = res.data.players
          let result=[]
          for(let key in players){
            result.push({
              name: key,
              mac: players[key]
            })
          }
          resolve(result)
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
      url: "http://" + host + ":8888/player/set/player",
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



/**
 * 根据歌曲id播放
 * @param track_id： 歌曲ID
 */
export function playById(params) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/player/play/song",
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
 * 当前播放歌曲的信息
 * @param track_id： 歌曲ID
 */
export function getCurrentSong(params) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/player/current/info",
      data: params,
      success: (res) => {
        if (res.data.status == 200) {
          resolve(res.data.data)
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
 * 跳转播放进度
 * @param second 秒数， 需要跳转到多少秒
 */
export function playerSeeked(params) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/player/play/seek",
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
 * 播放or暂停
 * @param params play或pause
 */
export function playerTurn(playing) {
  let tag=playing?"pause":"play"
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/player/" + tag,
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