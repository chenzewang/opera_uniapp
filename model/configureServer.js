/*
 * @Author: your name
 * @Date: 2020-04-17 19:59:46
 * @LastEditTime: 2020-07-14 14:21:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\model\configureServer.js
 */

let host = uni.getStorageSync('connectionIp')
// const host = "192.168.1.102"


/**
 * 获取解码器列表
 * url： /config/list/squeezelite
 * 请求参数： 无
 */

export function getSqueezeliteList() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/config/list/squeezelite", //仅为示例，并非真实接口地址。
      success: (res) => {
        if (res.data.status == 200) {
          var keysArr = Object.keys(res.data.data)
          var data = []
          keysArr.forEach(i => {
            data.push({
              key: i,
              value: res.data.data[i]
            })
          })
          resolve(data)
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
 * 配置解码器
 * url： /config/modify/squeezelite
 * 请求参数： output： value中类似” hw: CARD = Audio, DEV = 0” 这一段
 *           dsd： 只有两种选择： DoP、 Native， 注意区分大小写传递
 */
export function configureDecoder(params) {
  
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/config/modify/squeezelite",
      data: params,
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
 * 获取wifi列表
 * url： / config / list / wifi
 * 请求参数： 无
 */
export function getWifiList() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/config/list/wifi",
      success: (res) => {
        console.log(res);
        
        if (res.data.status == 200) {
          resolve(data)
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
      url: "http://" + host + ":8888/config/mount/list",
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
      url: "http://" + host + ":8888/config/mount/local",
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


/**
 * 检测当前连接的WIFI
 * url： /config/check/wifi
 * 请求参数： 无
 */
export function checkNowWifi() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/config/check/wifi",
      success: (res) => {
		console.log(res);
        if (res.data.data.status == 200 && res.data.data.ssid) {
          resolve(res.data.data.ssid)
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
 * 连接WIFI
 * url： /config/config/wifi
 * 请求参数： 无
 */
export function connectWifi(params) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888/config/config/wifi",
      data: params,
      success: (res) => {
        console.log(res);

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
 * opera/naa/roon 服务开关状态检测
 * url： / config / status / squeezelite(naa/roon)
 * 请求参数： 无
 */
export function checkServiceStatus(params) {
  let url = "/config/status/squeezelite"
  if (params.type == "RoonBridge") {
    url = "/config/status/roon"
  } else if (params.type == "NAA") {
    url = "/config/status/naa"
  }

  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888" + url,
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
 * opera/naa/roon 服务开机自启状态检测
 * url： / config / boot_status / squeezelite(naa/roon)
 * 请求参数： 无
 */
export function checkPowerOnStatus(params) {
  let url = "/config/boot_status/squeezelite"
  if (params.type == "RoonBridge") {
    url = "/config/boot_status/roon"
  } else if (params.type == "NAA") {
    url = "/config/boot_status/naa"
  }

  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888" + url,
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
 *  切换开机自启状态
 * url： /config/boot_start(boot_stop)/roon(naa/squeezelite)
 * 请求参数： 无
 */
/**
 * @param {*} params
 * params.type=['NAA','on']    第一个是服务类型，第二个是开或者关
 */
export function switchPowerOn(params) {
  let url = ""

  let obj = {
    RoonBridge: {
      on: "/config/boot_start/roon",
      off: "/config/boot_stop/roon"
    },
    NAA: {
      on: "/config/boot_start/naa",
      off: "/config/boot_stop/naa"
    },
    Ober: {
      on: "/config/boot_start/squeezelite",
      off: "/config/boot_stop/squeezelite"
    },
  }

  url = obj[params.type[0]][params.type[1]]

  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888" + url,
      success: (res) => {
        if (res.data.success == true) {
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
 *  切换服务开关状态
 * url： /config/start/roon
 * 请求参数： 无
 */
/**
 * @param {*} params
 * params.type=['NAA','on']    第一个是服务类型，第二个是开或者关
 */
export function switchServerOn(params) {
  let url = ""

  let obj = {
    RoonBridge: {
      on: "/config/start/roon",
      off: "/config/stop/roon"
    },
    NAA: {
      on: "/config/start/naa",
      off: "/config/stop/naa"
    },
    Ober: {
      on: "/config/start/squeezelite",
      off: "/config/stop/squeezelite"
    },
  }

  url = obj[params.type[0]][params.type[1]]

  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888" + url,
      success: (res) => {
        if (res.data.success == true) {
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
 *  重启服务
 * url： /config/restart/roon(squeezelite,naa)
 * 请求参数： 无
 */
export function restartServer(params) {
  let url = ""

  let obj = {
    RoonBridge: "/config/restart/roon",
    NAA: "/config/restart/naa",
    Ober: "/config/restart/squeezelite",
  }

  url = obj[params.type]

  return new Promise((resolve, reject) => {
    uni.request({
      url: "http://" + host + ":8888" + url,
      success: (res) => {
        if (res.data.success == true) {
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