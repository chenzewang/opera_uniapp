/*
 * @Author: your name
 * @Date: 2020-04-16 20:26:59
 * @LastEditTime: 2020-04-23 21:15:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opera_uniapp\common\server.js
 */

/**
 * 测试接口用
 * 
 */
const http = require("http")
const mockdata= require("./mock/mockdata")

class successModal{
  constructor(params){
    this.status=200
    this.success=true
    if(params.data){
      this.data=params.data
    }
    if (params.message) {
      this.message = params.message
    }
  }
}

//8888
http.createServer(function (req, res) {
  console.log("收到：URL:", req.url);
  const url = req.url.split("?")[0]
  const url_=url.replace(/\//g,"_").replace('_',"")
  console.log("url_:", url_);

  let data   
  if (mockdata[url_]) {
    data = mockdata[url_]
    res.end(JSON.stringify(new successModal({data:data})))
  } else {
    res.end(JSON.stringify(new successModal({
      message: "未命中路由"
    })))
  }
}).listen(8888)


//9090
http.createServer(function (req, res) {
  console.log("收到：URL:", req.url);

  let data = {
    test: "test"
  }
  const url = req.url
  
  if (url.indexOf("/player/connect")>-1) {
    data = new successModal({})
    res.end(JSON.stringify(data))
  } else {
    res.end("port:9090 未命中路由")
  }
}).listen(9090)