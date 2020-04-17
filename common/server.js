
/**
 * 测试接口用
 * 
 */
const http = require("http")

class successModal{
  constructor(){
    this.status=200
    this.success=true
  }
}

//8888
http.createServer(function (req, res) {
  console.log("收到：URL:", req.url);

  let data = {
    test: "test"
  }
  const url = req.url
  if (url == "/test") {
    data = {
      url: "Test"
    }
    res.end(JSON.stringify(data))
  } else {
    res.end(JSON.stringify(data))
  }
}).listen(8888)


//9090
http.createServer(function (req, res) {
  console.log("收到：URL:", req.url);

  let data = {
    test: "test"
  }
  const url = req.url
  console.log(url);
  
  if (url.indexOf("/player/connect")>-1) {
    data = new successModal()
    res.end(JSON.stringify(data))
  } else {
    res.end("port:9090 未命中路由")
  }
}).listen(9090)