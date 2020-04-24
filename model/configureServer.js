/*
 * @Author: your name
 * @Date: 2020-04-17 19:59:46
 * @LastEditTime: 2020-04-23 21:00:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\model\configureServer.js
 */

// const host = uni.getStorageSync('connectionIp')
const host = "192.168.1.103"


/**
 * 获取解码器列表
 * url： /config/list/squeezelite
 * 请求参数： 无
 */

export function getSqueezeliteList() {  
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://"+ host + ":8888/config/list/squeezelite", //仅为示例，并非真实接口地址。
      success: (res) => {
        if (res.data.status == 200) {
          var keysArr=Object.keys(res.data.data)
          var data=[]
          keysArr.forEach(i=>{
            data.push({
              key:i,
              value:res.data.data[i]
            })
          })          
          resolve(data)
        } else {
          reject(res)
        }
      },
      fail(err){
          reject(err)
      }
    });
  })
}


/**
 * 配置解码器
 * url： /config/modify/squeezelite
 * 请求参数： 无
 */
export function configureDecoder(params) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/config/modify/squeezelite", 
      data:params,
      success: (res) => {
        if (res.data.status == 200) {
          resolve(res)
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
 * 挂载列表
 * url： /config/mount/list
 * 请求参数： 无
 */
export function getDiskList() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + "192.168.1.103" + ":8888/config/mount/list",
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
 * 挂载移动硬盘
 * url： /config/mount/local
 * 请求参数： 无
 */
export function mountMobileDisk() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host+ ":8888/config/mount/local",
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
 * 挂载网络硬盘
 * url： /config/mount/network
 * 请求参数： 无
 */
export function mountNetworkDisk(mountNetworkDisk) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/config/mount/network",
      data: mountNetworkDisk,
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