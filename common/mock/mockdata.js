/*
 * @Author: your name
 * @Date: 2020-04-17 19:40:09
 * @LastEditTime: 2020-05-07 16:57:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\common\mock\mockdata.js
 */

const config_list_squeezelite = {
  "DW-I2S-HDMI": "hw:CARD=DWI2SHDMI,DEV=0        - DW-I2S-HDMI,  - Direct hardware device without any conversions",
  "USB Audio OnBoard USB Audio": "hw:CARD=OnBoard,DEV=0          - USB Audio OnBoard, USB Audio - Direct hardware device without any conversions",
  "USB Audio OnBoard USB Audio #1": "hw:CARD=OnBoard,DEV=1          - USB Audio OnBoard, USB Audio #1 - Direct hardware device without any conversions",
  "USB Audio OnBoard USB Audio #2": "hw:CARD=OnBoard,DEV=2          - USB Audio OnBoard, USB Audio #2 - Direct hardware device without any conversions"
}

const config_modify_squeezelite = {

}

const config_mount_list = ["/dev/sda1 -> /mnt/music/sda1"]

const config_mount_local = {
  data: "aaaa"
}

const config_mount_network = {
  data: "aaaa"
}

const config_check_wifi = {
  "ssid": "xuyiqing",
  "status": 200,
  "success": true
}

const config_config_wifi = "成功"


//三种服务的开关状态监测
const config_status_naa = {
  "active": false,
  "status": 200,
  "success": true
}
const config_status_roon = {
  "active": true,
  "status": 200,
  "success": true
}
const config_status_squeezelite = {
  "active": false,
  "status": 200,
  "success": true
}

//三种服务的开机自启状态监测
const config_boot_status_naa = {
  "active": false,
  "status": 200,
  "success": true
}
const config_boot_status_roon = {
  "active": true,
  "status": 200,
  "success": true
}
const config_boot_status_squeezelite = {
  "active": false,
  "status": 200,
  "success": true
}


//切换三种服务的开机自启状态
const config_boot_start_roon = {
  "status": 200,
  "success": true
}

const config_boot_start_squeezelite = {
  "status": 200,
  "success": true
}

const config_boot_start_naa = {
  "status": 200,
  "success": true
}

const config_boot_stop_roon = {
  "status": 200,
  "success": true
}

const config_boot_stop_squeezelite = {
  "status": 200,
  "success": true
}

const config_boot_stop_naa = {
  "status": 200,
  "success": true
}


//切换三种服务的开关状态
const config_start_roon = {
  "status": 200,
  "success": true
}

const config_start_squeezelite = {
  "status": 200,
  "success": true
}

const config_start_naa = {
  "status": 200,
  "success": true
}

const config_stop_roon = {
  "status": 200,
  "success": true
}

const config_stop_squeezelite = {
  "status": 200,
  "success": true
}

const config_stop_naa = {
  "status": 200,
  "success": true
}


//三种服务的重启
const config_restart_naa = {
  "status": 200,
  "success": true
}
const config_restart_squeezelite = {
  "status": 200,
  "success": true
}
const config_restart_roon = {
  "status": 200,
  "success": true
}


module.exports = {
  config_list_squeezelite,
  config_modify_squeezelite,
  config_mount_list,
  config_mount_local,
  config_mount_network,
  config_check_wifi,
  config_config_wifi,
  config_status_naa,
  config_status_roon,
  config_status_squeezelite,
  config_boot_status_naa,
  config_boot_status_roon,
  config_boot_status_squeezelite,
  config_boot_start_roon,
  config_boot_start_squeezelite,
  config_boot_start_naa,
  config_boot_stop_roon,
  config_boot_stop_squeezelite,
  config_boot_stop_naa,

  config_start_roon,
  config_start_squeezelite,
  config_start_naa,
  config_stop_roon,
  config_stop_squeezelite,
  config_stop_naa,

  config_restart_naa,
  config_restart_squeezelite,
  config_restart_roon
}