/*
 * @Author: your name
 * @Date: 2020-04-17 19:59:46
 * @LastEditTime: 2020-04-17 21:36:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\model\configureServer.js
 */

/**
 * 获取解码器列表
 * url： /config/list/squeezelite
 * 请求参数： 无
 */
const host = uni.getStorageSync('connectionIp')

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
