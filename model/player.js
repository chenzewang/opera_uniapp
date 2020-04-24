/*
 * @Author: your name
 * @Date: 2020-04-16 21:45:16
 * @LastEditTime: 2020-04-23 21:23:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\model\player.js
 */
/*
 * @Author: your name
 * @Date: 2020-04-16 21:45:16
 * @LastEditTime: 2020-04-16 21:53:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\model\player.js
 */

import config from '../config/config.js';


/**
 * 连接播放器
 * url： / player / connect
 *请求参数：
 *hostname： 目标的IP地址
 *port： 固定传给我9090即可
 * 
 */
export function connectPlayer(params) {
  let url = `http://${params.hostname}:9090/player/connect`
  return new Promise((resolve,reject)=>{
    uni.request({
      url: url, //仅为示例，并非真实接口地址。
      data: params,
      success: (res) => {
        resolve(res)
      },
      fail(res){
        reject(res)
      }
    });
  })


  // return uni.request({
  //     url: url, //仅为示例，并非真实接口地址。
  //     data: params
  //   })
}

