/*
 * @Author: your name
 * @Date: 2020-04-17 19:40:09
 * @LastEditTime: 2020-04-24 12:56:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\common\mock\mockdata.js
 */

  const config_list_squeezelite= {
    "DW-I2S-HDMI": "hw:CARD=DWI2SHDMI,DEV=0        - DW-I2S-HDMI,  - Direct hardware device without any conversions",
    "USB Audio OnBoard USB Audio": "hw:CARD=OnBoard,DEV=0          - USB Audio OnBoard, USB Audio - Direct hardware device without any conversions",
    "USB Audio OnBoard USB Audio #1": "hw:CARD=OnBoard,DEV=1          - USB Audio OnBoard, USB Audio #1 - Direct hardware device without any conversions",
    "USB Audio OnBoard USB Audio #2": "hw:CARD=OnBoard,DEV=2          - USB Audio OnBoard, USB Audio #2 - Direct hardware device without any conversions"
  }

 const config_modify_squeezelite = {
   
 }

 const config_mount_list = ["/dev/sda1 -> /mnt/music/sda1"]

 const config_mount_local = {data:"aaaa"}

 const config_mount_network = {
   data: "aaaa"
 }

 const config_check_wifi = {
   "ssid": "xuyiqing",
   "status": 200,
   "success": true
 }

  const config_config_wifi = "成功"
  module.exports={
    config_list_squeezelite,
    config_modify_squeezelite,
    config_mount_list,
    config_mount_local,
    config_mount_network,
    config_check_wifi,
    config_config_wifi
  }