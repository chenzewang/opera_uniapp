/*
 * @Author: your name
 * @Date: 2020-07-15 13:21:21
 * @LastEditTime: 2020-07-15 13:42:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\model\api\albums.js
 */ 
let host = uni.getStorageSync('connectionIp')

/**
 * 获取专辑信息
 * @param name： 模糊搜索名称（ 可选， 不传就不搜索）
 * @param page_size： 分页大小， 每页显示多少条数据， 必传
 * @param page： 页码， 也就是第几页， 必传
 */
export function getAlbumsList(params) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/player/list/albums", 
      data: params,
      success: (res) => {
        if (res.data.status == 200) {
          resolve(res.data.albums)
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
 * 根据id获取专辑封面
 * http: //<server>:<port>/music/<track_id>/cover.jpg
 * @param server就是扫描到的IP
 * @param port： 固定9000
 * @param track_id： 歌曲ID
 */

 //直接写在标签的src里就行
// export function getAlbumImg(params) {
//   return new Promise((resolve, reject) => {
//     uni.request({
//       url: `http://${host}:9000/music/${params.id}/cover.jpg`,
//       success: (res) => {
//         if (res.data.status == 200) {
//           resolve(res.data.albums)
//         } else {
//           reject(res)
//         }
//       },
//       fail(err) {
//         reject(err)
//       }
//     });
//   })
// }