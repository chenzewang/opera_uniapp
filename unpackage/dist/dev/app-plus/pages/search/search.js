"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 154);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 3).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 4).default || __webpack_require__(/*! uni-stat-config */ 4);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-261120200409001","_inBundle":false,"_integrity":"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz","_shasum":"e9daeef120f133bf3d4ca0505f5b2abed0e874a7","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"ff0877f516c1cc986cf2d7eae2bf5030c58050f9","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-261120200409001"};

/***/ }),
/* 3 */
/*!******************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages.json?{"type":"style"} ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 4 */
/*!*****************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages.json?{"type":"stat"} ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__D07ECB1"});

/***/ }),
/* 5 */
/*!******************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/main.js?{"type":"appStyle"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 6 */
/*!******************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "fontSize": "16"
  }
}

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type]['apply'](console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 24 */
/*!********************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/utils/repeater.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _helper = _interopRequireDefault(__webpack_require__(/*! ../helper/helper.js */ 26));

var _player = _interopRequireDefault(__webpack_require__(/*! @/utils/player.js */ 27));
var _storage = _interopRequireDefault(__webpack_require__(/*! @/utils/storage.js */ 28));

var _user = _interopRequireDefault(__webpack_require__(/*! ../model/user.js */ 31));
var _playlist = _interopRequireDefault(__webpack_require__(/*! ../model/playlist.js */ 32));
var _song = _interopRequireDefault(__webpack_require__(/*! ../model/song.js */ 29));
var _search = _interopRequireDefault(__webpack_require__(/*! ../model/search.js */ 33));
var _other = _interopRequireDefault(__webpack_require__(/*! ../model/other.js */ 34));
var _album = _interopRequireDefault(__webpack_require__(/*! ../model/album.js */ 35));
var _personalized = _interopRequireDefault(__webpack_require__(/*! ../model/personalized.js */ 36));
var _top = _interopRequireDefault(__webpack_require__(/*! ../model/top.js */ 37));
var _video = _interopRequireDefault(__webpack_require__(/*! ../model/video.js */ 38));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

{
  config: _config.default,
  helper: _helper.default,
  user: _user.default,
  playlist: _playlist.default,
  player: _player.default,
  storage: _storage.default,
  song: _song.default,
  search: _search.default,
  other: _other.default,
  album: _album.default,
  personalized: _personalized.default,
  top: _top.default,
  video: _video.default };exports.default = _default;

/***/ }),
/* 25 */
/*!*******************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/config/config.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var systemInfo = uni.getSystemInfoSync();

var status_bar_height = systemInfo.statusBarHeight;

var HOST = 'http://api.cloudmusic.pulsating.cn:3000/';

var API = {};
//登录
API.CELLPHONE_LOGIN = 'login/cellphone'; // 手机号登录
API.LOGIN_STATUS = 'login/status'; // 登陆状态
API.CHECK_PHONE = 'cellphone/existence/check'; // 检查手机号是否注册过
API.LOGOUT = 'logout'; // 登出
API.SEND_CAPTCHA = 'captcha/sent'; // 发送短信验证码
API.VERIFY_CAPTCHA = 'captcha/verify'; // 核实验证码
API.PHONE_REG = 'register/cellphone'; // 手机号注册
//用户
API.SUBCOUNT = 'user/subcount'; // 用户的歌单，收藏，mv, dj 数量
API.USER_DETAIL = 'user/detail'; // 获取用户详情
API.USER_PLAYLIST = 'user/playlist'; // 获取用户歌单
API.USER_LIKE_LIST = 'likelist'; // 获取用户喜欢的音乐列表
API.LIKE = 'like'; // 喜欢某个歌曲

// 歌单
API.PLAYLIST_DETAIL = 'playlist/detail'; // 歌单详情

// 专辑
API.ALBUM_DETAIL = 'album'; //专辑详情

// 歌曲
API.SONG = 'song/url'; //获取歌曲url
API.LYRIC = 'lyric'; //获取歌词
API.SONG_DETAIL = 'song/detail'; //获取歌曲详情

// 搜索
API.HOT_SEARCH = 'search/hot/detail'; //获取热搜
API.SEARCH = 'search'; //搜索


// Other
API.BANNER = 'banner'; // 发现页banner图
API.RECOMMEND_RESOURCE = 'recommend/resource'; // 每日推荐歌单

// 私人推荐
API.PERSONALIZED_PLAYLIST = 'personalized'; // 推荐歌单
API.PERSONALIZED_NEWSONG = 'personalized/newsong'; // 推荐新歌

// 各类排行top
API.TOP_ALBUM = 'top/album'; // 新碟上架

// 视频
API.VIDEO_LIST = 'video/group'; // 按分类获取视频列表, 需登录
var _default =

{
  systemInfo: systemInfo,
  status_bar_height: status_bar_height,
  HOST: HOST,
  API: API };exports.default = _default;

/***/ }),
/* 26 */
/*!*******************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/helper/helper.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //监听globalData中的played属性
function played_watch(cb) {
  var obj = getApp().globalData;
  Object.defineProperty(obj, "played", {
    configurable: true,
    enumerable: true,
    set: function set(value) {
      getApp().globalData._played = value;
      cb(value);
    },
    get: function get() {
      // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.played的时候，这里就会执行。
      return getApp().globalData._played;
    } });

}


function backgrounder() {
  var os = plus.os.name.toLocaleLowerCase() == 'android' ? 'android' : 'ios';
  if (os == 'android') {
    var main = plus.android.runtimeMainActivity();
    main.moveTaskToBack(false);
  }
}



function to(url, mode) {
  mode = mode || 'navigate_to';


  uni.navigateTo({
    url: url });

}


function toast(icon, text, duration, mask, position) {
  duration = duration || 1500;
  mask = mask || false;
  position = position || false;
  uni.showToast({
    icon: icon,
    title: text,
    duration: duration,
    mask: mask,
    position: position });

}var _default =


{
  to: to,
  toast: toast,
  backgrounder: backgrounder,
  played_watch: played_watch };exports.default = _default;

/***/ }),
/* 27 */
/*!******************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/utils/player.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {






























































































































































































var _storage = _interopRequireDefault(__webpack_require__(/*! ../utils/storage.js */ 28));
var _song = _interopRequireDefault(__webpack_require__(/*! ../model/song.js */ 29));
var _helper = _interopRequireDefault(__webpack_require__(/*! ../helper/helper.js */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o) {if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var it,normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} // 全局音频播放管理
var PlayerHelper = {}; //获取唯一player, 保持player统一
function get_player() {return getApp().globalData.player;}PlayerHelper.set_url = function (url) {url = url || _storage.default.get_played().url; // console.log('set_url:' + url);
  var player = get_player();player.setStyles({ src: url });return;}; //play前的准备
// PlayerHelper.start = function() {
// 	this.set_url();
// 	let player = get_player();
// 	player.resume();
// 	return;
// }
//统一play入口, 真正的播放入口
PlayerHelper.play = function () {var player = get_player();player.play(function () {__f__("log", '当前音乐播放完毕', " at utils\\player.js:33");}, function (e) {__f__("log", e, " at utils\\player.js:35");});;return;}; /**
                                                                                                                                                                                                                   * 暂停
                                                                                                                                                                                                                   * 需要start后, 触发onPlay事件后, pause才有效
                                                                                                                                                                                                                   */PlayerHelper.pause = function () {var player = get_player();player.pause();return;};PlayerHelper.get_position = function () {var player = get_player();return player.getPosition();};PlayerHelper.get_duration = function () {var player = get_player();return player.getDuration();};PlayerHelper.seek_to = function (position) {return get_player().seekTo(position);};PlayerHelper.prev = function (cb) {var played = _storage.default.get_played();var playlist = _storage.default.get_current_playlist();var current_song_id = played.id;var prev_index = playlist.length - 1;for (var i = 0; i < playlist.length; i++) {if (current_song_id == playlist[i].id) {if (i > 0) {prev_index = i - 1;}break;}}var prev_song_id = playlist[prev_index].id;this.start(prev_song_id, function (played) {cb && cb(played);});};PlayerHelper.next = function (cb) {var played = _storage.default.get_played();var current_song_id = played.id;var playlist = _storage.default.get_current_playlist();var next_index = 0;for (var i = 0; i < playlist.length; i++) {if (current_song_id == playlist[i].id) {if (i + 1 < playlist.length) {next_index = i + 1;}break;}}__f__("log", next_index, " at utils\\player.js:104");var next_song_id = playlist[next_index].id;this.start(next_song_id, function (played) {cb && cb(played);});}; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @param {Object} song_id
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * 传入歌曲id播放
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */PlayerHelper.start = function (song_id, cb) {var _this = this;var player = get_player();var played = _storage.default.get_played();_song.default.get_song_detail(song_id, function (data) {__f__("log", data, " at utils\\player.js:121");var song = data.songs[0];var song_name = song.name;var cover_image = song.al.picUrl;var current_played = played;var played_music_id = current_played.id;if (song_id == played_music_id) {// 跳转播放详情页并播放
      var _player = get_player();if (_player.isPaused()) {_player.play(function () {}, function (e) {});;} // this.turn();
      _helper.default.to('../play/play');return;}_song.default.get_song_url(song_id, function (res) {__f__("log", res, " at utils\\player.js:142");var url = res.data[0].url;if (!url) {setTimeout(function () {_helper.default.toast('none', '亲爱的, 暂无该歌曲资源~', 3000, false, 'bottom');}, 10);return;}var creators = song.ar;var creator_str = '';var _iterator = _createForOfIteratorHelper(creators),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var creator = _step.value;creator_str = creator_str + creator.name;}} catch (err) {_iterator.e(err);} finally {_iterator.f();}var played = { id: song_id, url: url, name: song_name, creator: creator_str, cover_image: cover_image // time: 0, //上次播放的位置
      };_this.set_url(url);cb && cb(played);});});};PlayerHelper.turn = function () {var player = get_player();if (player.isPaused()) {player.play(function () {}, function (e) {__f__("log", e, " at utils\\player.js:184");});;} else {player.pause();}return;};module.exports = PlayerHelper;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 28 */
/*!*******************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/utils/storage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__f__) {// 缓存统一管理

var Storage = {};

var LATEST_PLAYED = 'latest_played'; //最后一个播放记录
var CURRENT_PLAYLIST = 'current_playlist'; // 当前播放列表
var IS_LOGIN = 'is_login'; // 登录状态
var PLAY_MODE = 'play_mode';

Storage.is_login = function () {
  return get(IS_LOGIN);
};

Storage.set_is_login = function (v) {
  set(IS_LOGIN, v);
  return;
};

Storage.get_played = function () {
  return get(LATEST_PLAYED);
};

Storage.set_played = function (v) {
  set(LATEST_PLAYED, v);
  return;
};
Storage.get_current_playlist = function () {
  return get(CURRENT_PLAYLIST);
};

Storage.set_current_playlist = function (v) {
  set(CURRENT_PLAYLIST, v);
  return;
};

Storage.get_play_mode = function () {
  return get(PLAY_MODE);
};

Storage.set_play_mode = function (v) {
  set(PLAY_MODE, v);
  return;
};

function set(k, v) {
  try {
    uni.setStorageSync(k, v);
  } catch (e) {
    // error
  }
  return;
}

function get(k) {
  try {
    return uni.getStorageSync(k);
  } catch (e) {
    __f__("log", e, " at utils\\storage.js:58");
  }
}

module.exports = Storage;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 29 */
/*!****************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/model/song.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {






















































var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Song = {};Song.get_song_url = function (id, cb) {var url = _config.default.API.SONG;var params = { id: id, br: 320000 };_request.default.get(url, params, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\song.js:15");}});};Song.get_lyric = function (id, cb) {var url = _config.default.API.LYRIC;var params = { id: id };_request.default.get(url, params, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\song.js:33");}});};Song.get_song_detail = function (id, cb) {var url = _config.default.API.SONG_DETAIL;var params = { ids: id };_request.default.get(url, params, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\song.js:51");}});};

module.exports = Song;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 30 */
/*!*******************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/utils/request.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























































var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _helper = _interopRequireDefault(__webpack_require__(/*! ../helper/helper.js */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function get(url, params, success_cb, failed_cb) {_helper.default.toast('loading', '加载中...', 10000);var uri = _config.default.HOST + url;uni.request({ url: uri, data: params, method: "GET", success: function success(res) {success_cb && success_cb(res);}, fail: function fail(res) {failed_cb && failed_cb(res);__f__("log", 'request_fail:url:' + url + ' ; ' + 'errMsg:' + res.errMsg, " at utils\\request.js:17");}, complete: function complete() {uni.hideToast();} });}function post(url, params, success_cb, failed_cb) {_helper.default.toast('loading', '加载中...', 10000);uni.request({ url: _config.default.HOST + url, data: params, method: "POST", success: function success(res) {success_cb && success_cb(res);}, fail: function fail(res) {__f__("log", 'request_fail:url:' + url + ' ; ' + 'errMsg:' + res.errMsg, " at utils\\request.js:37");failed_cb && failed_cb(res);}, complete: function complete() {uni.hideToast();} });}function test() {//111.13.100.92
  uni.request({ url: 'https://www.baidu.com/', //仅为示例，并非真实接口地址。
    success: function success(res) {__f__("log", res.data, " at utils\\request.js:51");} });}var _default = {
  get: get,
  post: post,
  test: test };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 31 */
/*!****************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/model/user.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {


































































































































































































var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 30));
var _helper = _interopRequireDefault(__webpack_require__(/*! ../helper/helper.js */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var User = {};User.check_phone = function (phone, cb) {var url = _config.default.API.CHECK_PHONE;var params = { phone: phone };_request.default.get(url, params, function (res) {if (res.statusCode == 200) {cb && cb(res.data);} else {__f__("log", 'failed', " at model\\user.js:14");}});}; //登陆
User.login = function (phone, password, cb) {var url = _config.default.API.CELLPHONE_LOGIN;var params = { phone: phone, password: password };_request.default.get(url, params, function (res) {if (res.data) {var data = res.data;if (data.code == 200) {get_status(function (status) {cb && cb(status);});} else {_helper.default.toast('none', data.msg, 3000, false, 'bottom');}} else {__f__("log", res, " at model\\user.js:40");}});};User.reg = function (phone, password, captcha, cb) {var url = _config.default.API.PHONE_REG;var params = { phone: phone, password: password, captcha: captcha };_request.default.post(url, params, function (res) {__f__("log", res, " at model\\user.js:53");cb && cb(res.data);});};User.logout = function (cb) {var url = _config.default.API.LOGOUT;_request.default.get(url, {}, function (res) {if (res.statusCode == 200) {cb && cb(res.data);} else {__f__("log", 'failed', " at model\\user.js:67");}});};User.send_captcha = function (phone, cb) {var url = _config.default.API.SEND_CAPTCHA;_request.default.post(url, { phone: phone }, function (res) {__f__("log", res, " at model\\user.js:77");cb && cb(res.data);});};User.verify_captcha = function (phone, captcha, cb) {var url = _config.default.API.VERIFY_CAPTCHA;var params = { phone: phone, captcha: captcha };_request.default.get(url, params, function (res) {__f__("log", res, " at model\\user.js:89");cb && cb(res.data);});}; //登录检查
User.check_login = function (cb) {get_status(function (res) {cb && cb(res);});}; //获取用户mv,歌单, dj, 收藏数量
User.get_subcount = function (cb) {var url = _config.default.API.SUBCOUNT;_request.default.post(url, {}, function (res) {var data = res.data;cb && cb(data);});}; //获取用户资料
User.get_user_detail = function (uid, cb) {var url = _config.default.API.USER_DETAIL;var params = { uid: uid };_request.default.post(url, params, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\user.js:125");}});}; //获取用户歌单列表
User.get_playlist = function (uid, cb) {var url = _config.default.API.USER_PLAYLIST;var params = { uid: uid };_request.default.post(url, params, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\user.js:141");}});};User.get_likelist = function (uid, cb) {var url = _config.default.API.USER_LIKE_LIST;var params = { uid: uid };_request.default.post(url, params, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\user.js:156");}});};User.like = function (music_id, like, cb) {var url = _config.default.API.LIKE;var params = { id: music_id, like: like };_request.default.post(url, params, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\user.js:172");}});}; //获取用户状态
function get_status(cb) {var ts = new Date().getTime();var url = _config.default.API.LOGIN_STATUS;_request.default.get(url, { timestamp: ts }, function (res) {var data = res.data;if (data && data.code == 200) {cb && cb(data);} else {__f__("log", '获取状态失败', " at model\\user.js:188");cb && cb(false);}});}module.exports = User;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 32 */
/*!********************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/model/playlist.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {

















var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Playlist = {};Playlist.get_playlist_detail = function (id, cb) {var url = _config.default.API.PLAYLIST_DETAIL;var params = { id: id };_request.default.get(url, params, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\playlist.js:14");}});};

module.exports = Playlist;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 33 */
/*!******************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/model/search.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {















































var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Search = {};Search.get_hot_list = function (cb) {var url = _config.default.API.HOT_SEARCH;_request.default.get(url, {}, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\search.js:11");}});}; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                           * 单项搜索
                                                                                                                                                                                                                                                                                                                                                                                                                                           * 此接口post方式有问题, 分页参数无效
                                                                                                                                                                                                                                                                                                                                                                                                                                           * 
                                                                                                                                                                                                                                                                                                                                                                                                                                           * 必选参数: 
                                                                                                                                                                                                                                                                                                                                                                                                                                           * keywords: 关键词
                                                                                                                                                                                                                                                                                                                                                                                                                                           * 
                                                                                                                                                                                                                                                                                                                                                                                                                                           * 可选参数: 
                                                                                                                                                                                                                                                                                                                                                                                                                                           * limit : 返回数量 , 默认为 30 
                                                                                                                                                                                                                                                                                                                                                                                                                                           * offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
                                                                                                                                                                                                                                                                                                                                                                                                                                           * type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
                                                                                                                                                                                                                                                                                                                                                                                                                                           */Search.search = function (keyword, type, page, cb) {var url = _config.default.API.SEARCH;var limit = 10;var offset = page * limit;type = type || 1;var params = { keywords: keyword, limit: limit, offset: offset, type: type };_request.default.get(url, params, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\search.js:44");}});};module.exports = Search;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 34 */
/*!*****************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/model/other.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {




























var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Other = {};Other.banner = function (cb) {var url = _config.default.API.BANNER;_request.default.get(url, { type: 1 }, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\other.js:11");}});}; // 需登陆后调用
Other.recommend_resource = function (cb) {var url = _config.default.API.RECOMMEND_RESOURCE;_request.default.get(url, {}, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\other.js:25");}});};
module.exports = Other;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 35 */
/*!*****************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/model/album.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {














var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Album = {};Album.detail = function (id, cb) {var url = _config.default.API.ALBUM_DETAIL;_request.default.get(url, { id: id }, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\album.js:11");}});};

module.exports = Album;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 36 */
/*!************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/model/personalized.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {


























var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Personalized = {};Personalized.playlist = function (cb, limit) {var url = _config.default.API.PERSONALIZED_PLAYLIST;limit = limit || 10;_request.default.get(url, { limit: limit }, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\personalized.js:11");}});};Personalized.newsong = function (cb) {var url = _config.default.API.PERSONALIZED_NEWSONG;_request.default.get(url, {}, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\personalized.js:23");}});};

module.exports = Personalized;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 37 */
/*!***************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/model/top.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {















var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Top = {};Top.album = function (cb, limit, offset) {var url = _config.default.API.TOP_ALBUM;limit = limit || 10;offset = offset || 0;_request.default.get(url, { limit: limit, offset: offset }, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\top.js:12");}});};

module.exports = Top;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 38 */
/*!*****************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/model/video.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {














var _config = _interopRequireDefault(__webpack_require__(/*! ../config/config.js */ 25));
var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Video = {};Video.list = function (id, cb) {var url = _config.default.API.VIDEO_LIST;_request.default.get(url, { id: id }, function (res) {var data = res.data;if (data.code == 200) {cb && cb(data);} else {__f__("log", 'failed', " at model\\video.js:11");}});};

module.exports = Video;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/*!************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-icon/wyy-icon.nvue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wyy_icon_nvue_vue_type_template_id_40cf9bac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wyy-icon.nvue?vue&type=template&id=40cf9bac& */ 46);
/* harmony import */ var _wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wyy-icon.nvue?vue&type=script&lang=js& */ 48);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./wyy-icon.nvue?vue&type=style&index=0&lang=css& */ 50).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./wyy-icon.nvue?vue&type=style&index=0&lang=css& */ 50).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wyy_icon_nvue_vue_type_template_id_40cf9bac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wyy_icon_nvue_vue_type_template_id_40cf9bac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "6a92285f",
  false,
  _wyy_icon_nvue_vue_type_template_id_40cf9bac___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/components/wyy-icon/wyy-icon.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 46 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-icon/wyy-icon.nvue?vue&type=template&id=40cf9bac& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_template_id_40cf9bac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./wyy-icon.nvue?vue&type=template&id=40cf9bac& */ 47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_template_id_40cf9bac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_template_id_40cf9bac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_template_id_40cf9bac___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_template_id_40cf9bac___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 47 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-icon/wyy-icon.nvue?vue&type=template&id=40cf9bac& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "u-text",
      {
        staticClass: ["iconfont"],
        style: { fontSize: _vm.size + "rpx", color: _vm.color },
        on: { click: _vm.onClick }
      },
      [_vm._v(_vm._s(_vm.name))]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 48 */
/*!*************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-icon/wyy-icon.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./wyy-icon.nvue?vue&type=script&lang=js& */ 49);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-icon/wyy-icon.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//

//传&#x的icon, 转成\u icon
//template 直接使用&#x的icon 可以正确展示, 但是如果使用变量传&#x的icon 则展示失败
//template 中直接使用\u icon 或者使用\u icon变量 展示效果都正常
//如果使用props 传过来的\u icon 在template使用 显示失败, 传过来的 \u icon一被编码成字符串内存中的值其实是"\\ue715"
var _default = {
  props: {
    type: {
      type: String,
      default: "" },

    color: {
      type: String,
      default: "#FFFFFF" },

    size: {
      type: Number,
      default: 40 } },


  computed: {
    name: function name() {
      var tmp = this.type;
      tmp = '\\' + 'u' + tmp.replace('&#x', '');
      tmp = tmp.substring(0, tmp.length - 1);
      return eval("'" + tmp + "'"); // 将内存中"\\ue715" 转成"\ue715"
    } },

  data: function data() {
    return {};


  },
  created: function created() {

  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),
/* 50 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-icon/wyy-icon.nvue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./wyy-icon.nvue?vue&type=style&index=0&lang=css& */ 51);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_icon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-icon/wyy-icon.nvue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "weexUiIconFont"
  },
  "iconlike": {
    "width": "36",
    "height": "36",
    "fontSize": "34"
  }
}

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */
/*!************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-play/wyy_play.nvue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wyy_play_nvue_vue_type_template_id_355163d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wyy_play.nvue?vue&type=template&id=355163d8& */ 55);
/* harmony import */ var _wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wyy_play.nvue?vue&type=script&lang=js& */ 57);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./wyy_play.nvue?vue&type=style&index=0&lang=css& */ 81).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./wyy_play.nvue?vue&type=style&index=0&lang=css& */ 81).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wyy_play_nvue_vue_type_template_id_355163d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wyy_play_nvue_vue_type_template_id_355163d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "7f694be6",
  false,
  _wyy_play_nvue_vue_type_template_id_355163d8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/components/wyy-play/wyy_play.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 55 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-play/wyy_play.nvue?vue&type=template&id=355163d8& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_template_id_355163d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./wyy_play.nvue?vue&type=template&id=355163d8& */ 56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_template_id_355163d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_template_id_355163d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_template_id_355163d8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_template_id_355163d8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 56 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-play/wyy_play.nvue?vue&type=template&id=355163d8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "wyy-icon": __webpack_require__(/*! @/components/wyy-icon/wyy-icon.nvue */ 45).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.played
    ? _c(
        "view",
        { staticClass: ["play"] },
        [
          _c(
            "view",
            {
              staticClass: ["play-left"],
              on: {
                click: function($event) {
                  _vm.to_play_page()
                }
              }
            },
            [
              _c("u-image", {
                staticClass: ["cover-image"],
                attrs: {
                  resize: "cover",
                  src: _vm.played.cover_image + "?param=100y100"
                }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: ["play-center"],
              on: {
                click: function($event) {
                  _vm.to_play_page()
                }
              }
            },
            [
              _c("u-text", { staticClass: ["music-name"] }, [
                _vm._v(_vm._s(_vm.played.name))
              ]),
              _c("u-text", { staticClass: ["creator-nickname"] }, [
                _vm._v(_vm._s(_vm.played.creator))
              ])
            ]
          ),
          _c("view", { staticClass: ["play-right"] }, [
            _c(
              "view",
              {
                staticClass: ["handle-icon"],
                on: {
                  click: function($event) {
                    _vm.turn($event)
                  }
                }
              },
              [
                _c("wyy-icon", {
                  attrs: {
                    type: _vm.playing ? "&#xe672;" : "&#xe677;",
                    size: "50",
                    color: "#000000"
                  }
                })
              ],
              1
            ),
            _c(
              "view",
              {
                staticClass: ["handle-icon"],
                on: {
                  click: function($event) {
                    _vm.open_playlist($event)
                  }
                }
              },
              [
                _c("wyy-icon", {
                  attrs: { type: "&#xe671;", size: "40", color: "#000000" }
                })
              ],
              1
            )
          ]),
          _c("playlist-drawer", { ref: "playlist_drawer" })
        ],
        1
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 57 */
/*!*************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-play/wyy_play.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./wyy_play.nvue?vue&type=script&lang=js& */ 58);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 58 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-play/wyy_play.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
























var _wyyIcon = _interopRequireDefault(__webpack_require__(/*! ../../components/wyy-icon/wyy-icon.nvue */ 45));
var _playlist_drawer = _interopRequireDefault(__webpack_require__(/*! @/components/playlist_drawer.nvue */ 59));
var _repeater = _interopRequireDefault(__webpack_require__(/*! @/utils/repeater.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { wyyIcon: _wyyIcon.default, playlistDrawer: _playlist_drawer.default }, data: function data() {return { audio_url: 'https://mudic.oss-cn-shanghai.aliyuncs.com/%E8%AE%B8%E5%B5%A9%20-%20%E5%BA%90%E5%B7%9E%E6%9C%88.mp3' //测试音频
    };}, computed: { playing: function playing() {return this.$store.state.playing;}, played: function played() {return this.$store.state.played;} }, watch: {}, created: function created() {
  },
  methods: {
    open_playlist: function open_playlist(event) {
      event.stopPropagation();
      this.$refs.playlist_drawer.open_playlist();
    },
    to_play_page: function to_play_page() {
      _repeater.default.helper.to('../play/play');
    },
    turn: function turn(event) {
      //切换播放暂停状态
      event.stopPropagation();
      _repeater.default.player.turn();
    } } };exports.default = _default;

/***/ }),
/* 59 */
/*!**********************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_drawer.nvue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playlist_drawer_nvue_vue_type_template_id_87c4cb4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist_drawer.nvue?vue&type=template&id=87c4cb4a& */ 60);
/* harmony import */ var _playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist_drawer.nvue?vue&type=script&lang=js& */ 62);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./playlist_drawer.nvue?vue&type=style&index=0&lang=css& */ 79).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./playlist_drawer.nvue?vue&type=style&index=0&lang=css& */ 79).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _playlist_drawer_nvue_vue_type_template_id_87c4cb4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _playlist_drawer_nvue_vue_type_template_id_87c4cb4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "7bdf881d",
  false,
  _playlist_drawer_nvue_vue_type_template_id_87c4cb4a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/components/playlist_drawer.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 60 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_drawer.nvue?vue&type=template&id=87c4cb4a& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_template_id_87c4cb4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist_drawer.nvue?vue&type=template&id=87c4cb4a& */ 61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_template_id_87c4cb4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_template_id_87c4cb4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_template_id_87c4cb4a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_template_id_87c4cb4a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 61 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_drawer.nvue?vue&type=template&id=87c4cb4a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "wyy-icon": __webpack_require__(/*! @/components/wyy-icon/wyy-icon.nvue */ 45).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-pop-up",
    { ref: "showpopup", attrs: { type: "bottom" }, on: { change: _vm.change } },
    [
      _c("view", { staticClass: ["content"] }, [
        _c("view", { staticClass: ["header"] }, [
          _c(
            "view",
            { staticClass: ["play-type"] },
            [
              _c("wyy-icon", {
                attrs: { type: "&#xe676;", size: "30", color: "#000000" }
              }),
              _c(
                "u-text",
                { staticStyle: { fontSize: "26rpx", marginLeft: "20rpx" } },
                [_vm._v("随机播放")]
              )
            ],
            1
          ),
          _c("view", { staticClass: ["header-right"] })
        ]),
        _c(
          "list",
          { staticStyle: { flex: "1" }, attrs: { showScrollbar: "false" } },
          _vm._l(_vm.playlist, function(song, index) {
            return _c(
              "cell",
              {
                key: index,
                ref: "song" + song.id,
                refInFor: true,
                staticClass: ["song-cell"],
                appendAsTree: true,
                attrs: { append: "tree" },
                on: {
                  click: function($event) {
                    _vm.play(song.id)
                  }
                }
              },
              [
                _c(
                  "view",
                  {
                    staticStyle: { flexDirection: "row", alignItems: "center" }
                  },
                  [
                    song.id == _vm.played.id
                      ? _c("wyy-icon", {
                          staticStyle: { marginRight: "20rpx" },
                          attrs: {
                            type: "&#xe67f;",
                            size: "30",
                            color: "#FF0000"
                          }
                        })
                      : _vm._e(),
                    _c(
                      "u-text",
                      {
                        class: song.id == _vm.played.id ? "active-song" : "",
                        staticStyle: { fontSize: "26rpx" }
                      },
                      [_vm._v(_vm._s(song.name))]
                    ),
                    _c(
                      "u-text",
                      {
                        staticClass: ["ar-text"],
                        class: song.id == _vm.played.id ? "active-song" : ""
                      },
                      [_vm._v(_vm._s(" - " + song.artists[0].name))]
                    )
                  ],
                  1
                ),
                _c("wyy-icon", {
                  attrs: {
                    type: "&#xe636;",
                    size: "30",
                    color: "rgba(0,0,0,.5)"
                  }
                })
              ],
              1
            )
          }),
          0
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 62 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_drawer.nvue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist_drawer.nvue?vue&type=script&lang=js& */ 63);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_drawer.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























var _uniPopup = _interopRequireDefault(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 64));
var _wyyIcon = _interopRequireDefault(__webpack_require__(/*! @/components/wyy-icon/wyy-icon.nvue */ 45));

var _repeater = _interopRequireDefault(__webpack_require__(/*! @/utils/repeater.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dom = weex.requireModule('dom');var _default = { components: { uniPopUp: _uniPopup.default, wyyIcon: _wyyIcon.default }, data: function data() {return {};}, props: {}, computed: { playlist: function playlist() {return this.$store.state.current_playlist;}, played: function played() {return this.$store.state.played;} }, created: function created() {}, methods: { prev_song: function prev_song() {var _this = this;
      _repeater.default.player.prev(function (played) {
        played && _this.$store.commit('set_played', played);
      });
    },
    next_song: function next_song() {var _this2 = this;
      _repeater.default.player.next(function (played) {
        played && _this2.$store.commit('set_played', played);
      });
    },
    play: function play(song_id) {var _this3 = this;
      _repeater.default.player.start(song_id, function (played) {
        played && _this3.$store.commit('set_played', played);
        _this3.close_playlist();
      });
    },
    change: function change(e) {var _this4 = this;
      // 这里暂时会报一个错误, 因为当前播放的歌曲, 不在播放列表中, 这个问题在将歌曲添加到列表中后会自动解决, 暂时不影响使用
      if (e.show) {
        setTimeout(function () {
          var song_id = _this4.played.id;
          var el = _this4.$refs["song".concat(song_id)][0];
          dom.scrollToElement(el, {
            offset: 0,
            animated: false });

        }, 300);
      }
    },

    close_playlist: function close_playlist() {var _this5 = this;
      this.$nextTick(function () {
        _this5.$refs.showpopup.close();
      });
    },
    open_playlist: function open_playlist() {var _this6 = this;
      this.$nextTick(function () {
        _this6.$refs.showpopup.open();
      });



    } } };exports.default = _default;

/***/ }),
/* 64 */
/*!*************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/uni-popup/uni-popup.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_popup_vue_vue_type_template_id_eb525998_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=eb525998&scoped=true& */ 65);
/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 75);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=eb525998&scoped=true&lang=css& */ 77).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=eb525998&scoped=true&lang=css& */ 77).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_popup_vue_vue_type_template_id_eb525998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_popup_vue_vue_type_template_id_eb525998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eb525998",
  "47066725",
  false,
  _uni_popup_vue_vue_type_template_id_eb525998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/components/uni-popup/uni-popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 65 */
/*!********************************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/uni-popup/uni-popup.vue?vue&type=template&id=eb525998&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_eb525998_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=eb525998&scoped=true& */ 66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_eb525998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_eb525998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_eb525998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_eb525998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 66 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/uni-popup/uni-popup.vue?vue&type=template&id=eb525998&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "uni-transition": __webpack_require__(/*! @/components/uni-transition/uni-transition.vue */ 67)
    .default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["page"] }, [
    _vm.showPopup
      ? _c(
          "view",
          { staticClass: ["uni-popup"], on: { touchmove: _vm.clear } },
          [
            _c("uni-transition", {
              attrs: {
                modeClass: ["fade"],
                styles: _vm.maskClass,
                duration: _vm.duration,
                show: _vm.showTrans
              },
              on: { click: _vm.onTap }
            }),
            _c(
              "uni-transition",
              {
                attrs: {
                  modeClass: _vm.ani,
                  styles: _vm.transClass,
                  duration: _vm.duration,
                  show: _vm.showTrans
                },
                on: { click: _vm.onTap }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: ["uni-popup__wrapper-box"],
                    on: { click: _vm.clear }
                  },
                  [_vm._t("default")],
                  2
                )
              ]
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 67 */
/*!***********************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/uni-transition/uni-transition.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_transition_vue_vue_type_template_id_23d3a194_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=23d3a194&scoped=true& */ 68);
/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 70);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&id=23d3a194&scoped=true&lang=css& */ 73).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&id=23d3a194&scoped=true&lang=css& */ 73).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_transition_vue_vue_type_template_id_23d3a194_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_transition_vue_vue_type_template_id_23d3a194_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23d3a194",
  "6a60cdff",
  false,
  _uni_transition_vue_vue_type_template_id_23d3a194_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/components/uni-transition/uni-transition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 68 */
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/uni-transition/uni-transition.vue?vue&type=template&id=23d3a194&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_23d3a194_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=23d3a194&scoped=true& */ 69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_23d3a194_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_23d3a194_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_23d3a194_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_23d3a194_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 69 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/uni-transition/uni-transition.vue?vue&type=template&id=23d3a194&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["page"] }, [
    _vm.isShow
      ? _c(
          "view",
          {
            ref: "ani",
            staticClass: ["uni-transition"],
            class: [_vm.ani.in],
            style: "transform:" + _vm.transform + ";" + _vm.stylesObject,
            on: { click: _vm.change }
          },
          [_vm._t("default")],
          2
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 70 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 71);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 71 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//
//


var animation = __webpack_provided_uni_dot_requireNativePlugin('animation');

/**
                                                       * Transition 过渡动画
                                                       * @description 简单过渡动画组件
                                                       * @tutorial https://ext.dcloud.net.cn/plugin?id=985
                                                       * @property {Boolean} show = [false|true] 控制组件显示或隐藏
                                                       * @property {Array} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型
                                                       *  @value fade 渐隐渐出过渡
                                                       *  @value slide-top 由上至下过渡
                                                       *  @value slide-right 由右至左过渡
                                                       *  @value slide-bottom 由下至上过渡
                                                       *  @value slide-left 由左至右过渡
                                                       *  @value zoom-in 由小到大过渡
                                                       *  @value zoom-out 由大到小过渡
                                                       * @property {Number} duration 过渡动画持续时间
                                                       * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`
                                                       */var _default2 =
{
  name: 'uniTransition',
  props: {
    show: {
      type: Boolean,
      default: false },

    modeClass: {
      type: Array,
      default: function _default() {
        return [];
      } },

    duration: {
      type: Number,
      default: 300 },

    styles: {
      type: Object,
      default: function _default() {
        return {};
      } } },


  data: function data() {
    return {
      isShow: false,
      transform: '',
      ani: {
        in: '',
        active: '' } };


  },
  watch: {
    show: {
      handler: function handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          this.close();
        }
      },
      immediate: true } },


  computed: {
    stylesObject: function stylesObject() {
      var styles = _objectSpread({},
      this.styles, {
        'transition-duration': this.duration / 1000 + 's' });

      var transfrom = '';
      for (var i in styles) {
        var line = this.toLine(i);
        transfrom += line + ':' + styles[i] + ';';
      }
      return transfrom;
    } },

  created: function created() {
    // this.timer = null
    // this.nextTick = (time = 50) => new Promise(resolve => {
    // 	clearTimeout(this.timer)
    // 	this.timer = setTimeout(resolve, time)
    // 	return this.timer
    // });
  },
  methods: {
    change: function change() {
      this.$emit('click', {
        detail: this.isShow });

    },
    open: function open() {var _this = this;
      clearTimeout(this.timer);
      this.isShow = true;
      this.transform = '';
      this.ani.in = '';
      for (var i in this.getTranfrom(false)) {
        if (i === 'opacity') {
          this.ani.in = 'fade-in';
        } else {
          this.transform += "".concat(this.getTranfrom(false)[i], " ");
        }
      }
      this.$nextTick(function () {
        setTimeout(function () {
          _this._animation(true);
        }, 50);
      });

    },
    close: function close(type) {
      clearTimeout(this.timer);
      this._animation(false);
    },
    _animation: function _animation(type) {var _this2 = this;
      var styles = this.getTranfrom(type);

      if (!this.$refs['ani']) return;
      animation.transition(this.$refs['ani'].ref, {
        styles: styles,
        duration: this.duration, //ms
        timingFunction: 'ease',
        needLayout: false,
        delay: 0 //ms
      }, function () {
        if (!type) {
          _this2.isShow = false;
        }
        _this2.$emit('change', {
          detail: _this2.isShow });

      });





















    },
    getTranfrom: function getTranfrom(type) {
      var styles = {
        transform: '' };

      this.modeClass.forEach(function (mode) {
        switch (mode) {
          case 'fade':
            styles.opacity = type ? 1 : 0;
            break;
          case 'slide-top':
            styles.transform += "translateY(".concat(type ? '0' : '-100%', ") ");
            break;
          case 'slide-right':
            styles.transform += "translateX(".concat(type ? '0' : '100%', ") ");
            break;
          case 'slide-bottom':
            styles.transform += "translateY(".concat(type ? '0' : '100%', ") ");
            break;
          case 'slide-left':
            styles.transform += "translateX(".concat(type ? '0' : '-100%', ") ");
            break;
          case 'zoom-in':
            styles.transform += "scale(".concat(type ? 1 : 0.8, ") ");
            break;
          case 'zoom-out':
            styles.transform += "scale(".concat(type ? 1 : 1.2, ") ");
            break;}

      });
      return styles;
    },
    _modeClassArr: function _modeClassArr(type) {
      var mode = this.modeClass;
      if (typeof mode !== "string") {
        var modestr = '';
        mode.forEach(function (item) {
          modestr += item + '-' + type + ',';
        });
        return modestr.substr(0, modestr.length - 1);
      } else {
        return mode + '-' + type;
      }
    },
    // getEl(el) {
    // 	console.log(el || el.ref || null);
    // 	return el || el.ref || null
    // },
    toLine: function toLine(name) {
      return name.replace(/([A-Z])/g, "-$1").toLowerCase();
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 72)["default"]))

/***/ }),
/* 72 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 73 */
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/uni-transition/uni-transition.vue?vue&type=style&index=0&id=23d3a194&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_23d3a194_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=style&index=0&id=23d3a194&scoped=true&lang=css& */ 74);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_23d3a194_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_23d3a194_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_23d3a194_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_23d3a194_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_23d3a194_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 74 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/uni-transition/uni-transition.vue?vue&type=style&index=0&id=23d3a194&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@TRANSITION": {
    "uni-transition": {
      "timingFunction": "ease",
      "duration": 300,
      "property": "transform,opacity"
    }
  },
  "uni-transition": {
    "transitionTimingFunction": "ease",
    "transitionDuration": 300,
    "transitionProperty": "transform,opacity"
  },
  "fade-in": {
    "opacity": 0
  },
  "fade-active": {
    "opacity": 1
  },
  "slide-top-in": {
    "transform": "translateY(-100%)"
  },
  "slide-top-active": {
    "transform": "translateY(0)"
  },
  "slide-right-in": {
    "transform": "translateX(100%)"
  },
  "slide-right-active": {
    "transform": "translateX(0)"
  },
  "slide-bottom-in": {
    "transform": "translateY(100%)"
  },
  "slide-bottom-active": {
    "transform": "translateY(0)"
  },
  "slide-left-in": {
    "transform": "translateX(-100%)"
  },
  "slide-left-active": {
    "transform": "translateX(0)",
    "opacity": 1
  },
  "zoom-in-in": {
    "transform": "scale(0.8)"
  },
  "zoom-out-active": {
    "transform": "scale(1)"
  },
  "zoom-out-in": {
    "transform": "scale(1.2)"
  }
}

/***/ }),
/* 75 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 76);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 76 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _uniTransition = _interopRequireDefault(__webpack_require__(/*! ../uni-transition/uni-transition.vue */ 67));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
/**
 * PopUp 弹出层
 * @description 弹出层组件，为了解决遮罩弹层的问题
 * @tutorial https://ext.dcloud.net.cn/plugin?id=329
 * @property {String} type = [top|center|bottom] 弹出方式
 * 	@value top 顶部弹出
 * 	@value center 中间弹出
 * 	@value bottom 底部弹出
 * @property {Boolean} animation = [ture|false] 是否开启动画
 * @property {Boolean} maskClick = [ture|false] 蒙版点击是否关闭弹窗
 * @event {Function} change 打开关闭弹窗触发，e={show: false}
 */var _default = { name: 'UniPopup', components: { uniTransition: _uniTransition.default }, props: { // 开启动画
    animation: { type: Boolean, default: true },
    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
    type: {
      type: String,
      default: 'center' },

    // maskClick
    maskClick: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      duration: 300,
      ani: [],
      showPopup: false,
      showTrans: false,
      maskClass: {
        'position': 'fixed',
        'bottom': 0,
        'top': 0,
        'left': 0,
        'right': 0,
        'backgroundColor': 'rgba(0, 0, 0, .6)' },

      transClass: {
        'position': 'fixed',
        'left': 0,
        'right': 0 } };


  },
  watch: {
    type: {
      handler: function handler(newVal) {
        switch (this.type) {
          case 'top':
            this.ani = ['slide-top'];
            this.transClass = {
              'position': 'fixed',
              'left': 0,
              'right': 0 };

            break;
          case 'bottom':
            this.ani = ['slide-bottom'];
            this.transClass = {
              'position': 'fixed',
              'left': 0,
              'right': 0,
              'bottom': 0 };

            break;
          case 'center':
            this.ani = ['zoom-out', 'fade'];
            this.transClass = {
              'position': 'fixed',




              'bottom': 0,
              'left': 0,
              'right': 0,
              'top': 0,
              'justifyContent': 'center',
              'alignItems': 'center' };


            break;}

      },
      immediate: true } },


  created: function created() {
    if (this.animation) {
      this.duration = 300;
    } else {
      this.duration = 0;
    }
  },
  methods: {
    clear: function clear(e) {
      // TODO nvue 取消冒泡
      e.stopPropagation();
    },
    open: function open() {var _this = this;
      this.showPopup = true;
      this.$nextTick(function () {
        clearTimeout(_this.timer);
        _this.timer = setTimeout(function () {
          _this.showTrans = true;
        }, 50);
      });
      this.$emit('change', {
        show: true });

    },
    close: function close(type) {var _this2 = this;
      this.showTrans = false;
      this.$nextTick(function () {
        clearTimeout(_this2.timer);
        _this2.timer = setTimeout(function () {
          _this2.$emit('change', {
            show: false });

          _this2.showPopup = false;
        }, 300);
      });
    },
    onTap: function onTap() {
      if (!this.maskClick) return;
      this.close();
    } } };exports.default = _default;

/***/ }),
/* 77 */
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=eb525998&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_eb525998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=style&index=0&id=eb525998&scoped=true&lang=css& */ 78);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_eb525998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_eb525998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_eb525998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_eb525998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_eb525998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 78 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=eb525998&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-popup": {
    "position": "fixed",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "uni-popup__mask": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "opacity": 0
  },
  "@TRANSITION": {
    "mask-ani": {
      "property": "opacity",
      "duration": 200
    },
    "content-ani": {
      "property": "transform,opacity",
      "duration": 200
    }
  },
  "mask-ani": {
    "transitionProperty": "opacity",
    "transitionDuration": 200
  },
  "uni-top-mask": {
    "opacity": 1
  },
  "uni-bottom-mask": {
    "opacity": 1
  },
  "uni-center-mask": {
    "opacity": 1
  },
  "uni-popup__wrapper": {
    "position": "absolute"
  },
  "top": {
    "top": 0,
    "left": 0,
    "right": 0,
    "transform": "translateY(-500px)"
  },
  "bottom": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "transform": "translateY(500px)"
  },
  "center": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0,
    "justifyContent": "center",
    "alignItems": "center",
    "transform": "scale(1.2)",
    "opacity": 0
  },
  "uni-popup__wrapper-box": {
    "position": "relative"
  },
  "content-ani": {
    "transitionProperty": "transform,opacity",
    "transitionDuration": 200
  },
  "uni-top-content": {
    "transform": "translateY(0)"
  },
  "uni-bottom-content": {
    "transform": "translateY(0)"
  },
  "uni-center-content": {
    "transform": "scale(1)",
    "opacity": 1
  }
}

/***/ }),
/* 79 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_drawer.nvue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist_drawer.nvue?vue&type=style&index=0&lang=css& */ 80);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_drawer_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 80 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_drawer.nvue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "height": "850rpx",
    "width": "750rpx",
    "backgroundColor": "#FFFFFF",
    "borderTopLeftRadius": "35rpx",
    "borderTopRightRadius": "35rpx"
  },
  "header": {
    "flexDirection": "row",
    "height": "80rpx",
    "borderBottomColor": "rgba(0,0,0,0.1)",
    "borderBottomWidth": "1rpx"
  },
  "play-type": {
    "flexDirection": "row",
    "height": "90rpx",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "backgroundColor:active": "rgba(0,0,0,0.2)"
  },
  "song-cell": {
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "height": "80rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor:active": "rgba(0,0,0,0.1)"
  },
  "active-song": {
    "color": "#FF0000"
  },
  "ar-text": {
    "fontSize": "18rpx",
    "color": "rgba(0,0,0,0.5)"
  }
}

/***/ }),
/* 81 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-play/wyy_play.nvue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./wyy_play.nvue?vue&type=style&index=0&lang=css& */ 82);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_wyy_play_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 82 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/wyy-play/wyy_play.nvue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "play": {
    "width": "750rpx",
    "borderTopColor": "rgba(0,0,0,0.1)",
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "backgroundColor:active": "rgba(0,0,0,0.1)"
  },
  "play-left": {
    "width": "90rpx",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx"
  },
  "play-right": {
    "flexDirection": "row",
    "width": "160rpx"
  },
  "handle-icon": {
    "width": "80rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "play-center": {
    "width": "500rpx",
    "height": "90rpx",
    "justifyContent": "center"
  },
  "cover-image": {
    "width": "70rpx",
    "height": "70rpx",
    "borderRadius": 50
  },
  "music-name": {
    "fontSize": "20rpx",
    "color": "#000000"
  },
  "creator-nickname": {
    "fontSize": "18rpx",
    "color": "rgba(0,0,0,0.5)",
    "marginTop": "10rpx"
  }
}

/***/ }),
/* 83 */
/*!****************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/song_card.nvue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _song_card_nvue_vue_type_template_id_21c1821f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song_card.nvue?vue&type=template&id=21c1821f& */ 84);
/* harmony import */ var _song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song_card.nvue?vue&type=script&lang=js& */ 86);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./song_card.nvue?vue&type=style&index=0&lang=css& */ 88).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./song_card.nvue?vue&type=style&index=0&lang=css& */ 88).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _song_card_nvue_vue_type_template_id_21c1821f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _song_card_nvue_vue_type_template_id_21c1821f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "c41d2d3e",
  false,
  _song_card_nvue_vue_type_template_id_21c1821f___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/components/song_card.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 84 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/song_card.nvue?vue&type=template&id=21c1821f& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_template_id_21c1821f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./song_card.nvue?vue&type=template&id=21c1821f& */ 85);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_template_id_21c1821f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_template_id_21c1821f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_template_id_21c1821f___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_template_id_21c1821f___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 85 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/song_card.nvue?vue&type=template&id=21c1821f& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["music"], on: { click: _vm.play } }, [
    _vm.show_number
      ? _c("view", { staticClass: ["music-index"] }, [
          _c("u-text", { staticClass: ["index-text"] }, [
            _vm._v(_vm._s(_vm.number + 1))
          ])
        ])
      : _vm._e(),
    _c(
      "view",
      {
        staticClass: ["music-info"],
        class: _vm.show_number ? "" : "padding-left"
      },
      [
        _c("u-text", { staticClass: ["music-name"] }, [
          _vm._v(_vm._s(_vm.song.name))
        ]),
        _c(
          "view",
          { staticClass: ["music-creators"] },
          [
            _vm._l(_vm.song.artists, function(creator, c_index) {
              return _c(
                "u-text",
                { key: c_index, staticClass: ["music-creator"] },
                [_vm._v(_vm._s(creator.name + " "))]
              )
            }),
            _c("u-text", { staticClass: ["music-al"] }, [
              _vm._v("- " + _vm._s(_vm.song.album_name))
            ])
          ],
          2
        )
      ]
    ),
    false ? undefined : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 86 */
/*!*****************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/song_card.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./song_card.nvue?vue&type=script&lang=js& */ 87);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 87 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/song_card.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



















var _repeater = _interopRequireDefault(__webpack_require__(/*! @/utils/repeater.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { props: { song: { type: Object, default: {} }, number: { type: Number, default: 0 }, show_number: { type: Boolean, default: true }, playlist_id: { type: Number, default: 0 } },



  data: function data() {
    return {};


  },
  computed: {
    played: function played() {
      return this.$store.state.played;
    } },

  methods: {
    // 播放
    // 如果选中歌曲和底部播放组件是同一首歌, 则跳转到播放页并开始播放
    // 如果不同, 则开始播放新选中的歌曲, 更新播放组件信息, 不跳转
    play: function play() {var _this = this;
      var song_id = this.song.id;
      _repeater.default.player.start(song_id, function (played) {
        played && _this.$store.commit('set_played', played);
      });

      // 获取相同歌单下的歌曲生成一个播放列表, 如何没有指定歌单id, 那么仅将此首歌push到播放列表中

      if (this.playlist_id) {
        var playlist_id = this.playlist_id;
        _repeater.default.playlist.get_playlist_detail(playlist_id, function (data) {
          var playlist = data.playlist;

          var format_songs = [];
          playlist.tracks.forEach(function (song) {
            var format_song = {};
            format_song.id = song.id;
            format_song.name = song.name;
            format_song.artists = song.ar;
            format_song.album_name = song.al.name;
            format_songs.push(format_song);
          });
          _this.$store.commit('set_current_playlist', format_songs);
        });
      } else {
        // 不存在playlist_id, 则直接将此歌曲插入到播放列表中
        var song = this.song;
        var format_song = {};
        format_song.id = song.id;
        format_song.name = song.name;
        format_song.artists = song.artists;
        format_song.album_name = song.album_name;

        this.$store.commit('push_current_playlist', format_song);
      }

    } } };exports.default = _default;

/***/ }),
/* 88 */
/*!*************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/song_card.nvue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./song_card.nvue?vue&type=style&index=0&lang=css& */ 89);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_song_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 89 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/song_card.nvue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "music": {
    "flexDirection": "row",
    "width": "750rpx",
    "height": "100rpx",
    "backgroundColor:active": "rgba(0,0,0,0.1)"
  },
  "music-index": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100rpx"
  },
  "index-text": {
    "fontSize": "26rpx",
    "color": "rgba(0,0,0,0.3)"
  },
  "music-info": {
    "flex": 1,
    "height": "100rpx",
    "justifyContent": "center"
  },
  "padding-left": {
    "paddingLeft": "30rpx"
  },
  "music-name": {
    "fontSize": "26rpx"
  },
  "music-creators": {
    "marginTop": "10rpx",
    "flexDirection": "row",
    "textOverflow": "ellipsis"
  },
  "music-creator": {
    "fontSize": "18rpx",
    "color": "rgba(0,0,0,0.3)"
  },
  "music-al": {
    "fontSize": "18rpx",
    "color": "rgba(0,0,0,0.3)"
  },
  "handle-area": {
    "height": "100rpx",
    "width": "120rpx"
  }
}

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/*!*********************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/main.js?{"page":"pages%2Fsearch%2Fsearch"} ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_search_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search/search.nvue?mpType=page */ 155);

        
        
        
        _pages_search_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_search_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/search/search'
        _pages_search_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_search_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 155 */
/*!***************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/search/search.nvue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_nvue_vue_type_template_id_7687e610_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.nvue?vue&type=template&id=7687e610&mpType=page */ 156);
/* harmony import */ var _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.nvue?vue&type=script&lang=js&mpType=page */ 158);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./search.nvue?vue&type=style&index=0&lang=css&mpType=page */ 167).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./search.nvue?vue&type=style&index=0&lang=css&mpType=page */ 167).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_nvue_vue_type_template_id_7687e610_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_nvue_vue_type_template_id_7687e610_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "13301ca3",
  false,
  _search_nvue_vue_type_template_id_7687e610_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/pages/search/search.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 156 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/search/search.nvue?vue&type=template&id=7687e610&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_template_id_7687e610_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./search.nvue?vue&type=template&id=7687e610&mpType=page */ 157);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_template_id_7687e610_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_template_id_7687e610_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_template_id_7687e610_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_template_id_7687e610_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 157 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/pages/search/search.nvue?vue&type=template&id=7687e610&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "uni-transition": __webpack_require__(/*! @/components/uni-transition/uni-transition.vue */ 67)
    .default,
  "wyy-icon": __webpack_require__(/*! @/components/wyy-icon/wyy-icon.nvue */ 45).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        { staticClass: ["page"] },
        [
          _c(
            "view",
            { staticStyle: { flex: "1" } },
            [
              _c(
                "uni-transition",
                {
                  attrs: {
                    duration: 200,
                    modeClass: _vm.mode_class,
                    styles: _vm.transfrom_class,
                    show: !_vm.show_result
                  }
                },
                [
                  !_vm.show_result
                    ? _c(
                        "list",
                        {
                          staticClass: ["content", "search-page"],
                          attrs: { showScrollbar: "false" }
                        },
                        [
                          false
                            ? undefined
                            : _vm._e(),
                          _c("cell", {
                            staticClass: ["search-history"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          }),
                          _c(
                            "cell",
                            {
                              staticClass: ["title"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [
                              _c("u-text", { staticClass: ["title-text"] }, [
                                _vm._v("热搜榜")
                              ])
                            ]
                          ),
                          _vm._l(_vm.hot_list, function(item, index) {
                            return _c(
                              "cell",
                              {
                                key: index,
                                staticClass: ["hot-item"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                                on: {
                                  click: function($event) {
                                    _vm.hot_search(item)
                                  }
                                }
                              },
                              [
                                _c(
                                  "view",
                                  { staticClass: ["hot-item-index"] },
                                  [
                                    _c(
                                      "u-text",
                                      { staticClass: ["index-text"] },
                                      [_vm._v(_vm._s(index + 1))]
                                    )
                                  ]
                                ),
                                _c("view", { staticClass: ["hot-info"] }, [
                                  _c("u-text", { staticClass: ["key_word"] }, [
                                    _vm._v(_vm._s(item.searchWord))
                                  ]),
                                  _c(
                                    "u-text",
                                    { staticClass: ["description"] },
                                    [_vm._v(_vm._s(item.content))]
                                  )
                                ])
                              ]
                            )
                          })
                        ],
                        2
                      )
                    : _vm._e()
                ]
              ),
              _c(
                "uni-transition",
                {
                  attrs: {
                    duration: 200,
                    modeClass: _vm.mode_class,
                    styles: _vm.transfrom_class,
                    show: _vm.show_result
                  }
                },
                [
                  _c(
                    "view",
                    { staticClass: ["content", "result-page"] },
                    [
                      _c(
                        "scroll-view",
                        {
                          staticClass: ["scroll-bar-view"],
                          attrs: {
                            scrollWithAnimation: "true",
                            scroll: false,
                            scrollX: true,
                            showScrollbar: false,
                            scrollIntoView: _vm.current_scroll_into
                          }
                        },
                        [
                          _c(
                            "view",
                            { staticClass: ["scroll-bar"] },
                            _vm._l(_vm.result_bars, function(item, bar_index) {
                              return _c(
                                "view",
                                {
                                  key: bar_index,
                                  staticClass: ["bar-name"],
                                  attrs: { id: item.id },
                                  on: {
                                    click: function($event) {
                                      _vm.on_tab_tap(bar_index)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["bar-name-text"],
                                      class:
                                        _vm.current_bar_index == bar_index
                                          ? "active-bar"
                                          : ""
                                    },
                                    [_vm._v(_vm._s(item.name))]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      ),
                      _c(
                        "swiper",
                        {
                          staticClass: ["bar-box"],
                          attrs: {
                            current: _vm.current_bar_index,
                            skipHiddenItemLayout: true
                          },
                          on: { change: _vm.tab_changed }
                        },
                        _vm._l(_vm.result_bars, function(page, index) {
                          return _c("swiper-item", { key: index }, [
                            page.id == 1018
                              ? _c(
                                  "list",
                                  {
                                    staticStyle: { flex: "1" },
                                    attrs: { showScrollbar: "false" }
                                  },
                                  _vm._l(_vm.comprehensive_data, function(
                                    value,
                                    key,
                                    t_index
                                  ) {
                                    return _c(
                                      "cell",
                                      {
                                        key: t_index,
                                        appendAsTree: true,
                                        attrs: { append: "tree" }
                                      },
                                      [
                                        key == "song"
                                          ? _c(
                                              "view",
                                              [
                                                _c(
                                                  "view",
                                                  { staticClass: ["title"] },
                                                  [
                                                    _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "title-text"
                                                        ]
                                                      },
                                                      [_vm._v("单曲")]
                                                    )
                                                  ]
                                                ),
                                                _vm._l(value.songs, function(
                                                  song,
                                                  s_index
                                                ) {
                                                  return _c("song-card", {
                                                    key: s_index,
                                                    attrs: {
                                                      show_number: false,
                                                      song: song
                                                    }
                                                  })
                                                })
                                              ],
                                              2
                                            )
                                          : _vm._e(),
                                        key == "playList"
                                          ? _c(
                                              "view",
                                              [
                                                _c(
                                                  "view",
                                                  { staticClass: ["title"] },
                                                  [
                                                    _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "title-text"
                                                        ]
                                                      },
                                                      [_vm._v("歌单")]
                                                    )
                                                  ]
                                                ),
                                                _vm._l(
                                                  value.playLists,
                                                  function(playlist, p_index) {
                                                    return _c("playlist-card", {
                                                      key: p_index,
                                                      attrs: {
                                                        playlist: playlist
                                                      }
                                                    })
                                                  }
                                                )
                                              ],
                                              2
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : page.id == 1
                              ? _c(
                                  "list",
                                  {
                                    staticStyle: { flex: "1" },
                                    attrs: { showScrollbar: "false" }
                                  },
                                  [
                                    _c(
                                      "cell",
                                      {
                                        staticClass: ["top-bar"],
                                        appendAsTree: true,
                                        attrs: { append: "tree" }
                                      },
                                      [
                                        _c(
                                          "view",
                                          { staticClass: ["icon"] },
                                          [
                                            _c("wyy-icon", {
                                              attrs: {
                                                type: "&#xe601;",
                                                size: "40",
                                                color: "#000000"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _c(
                                          "u-text",
                                          { staticClass: ["top-bar-text"] },
                                          [_vm._v("播放全部")]
                                        )
                                      ]
                                    ),
                                    _vm._l(_vm.songs_data, function(
                                      song,
                                      s_index
                                    ) {
                                      return _c(
                                        "cell",
                                        {
                                          key: s_index,
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [
                                          _c("song-card", {
                                            attrs: {
                                              show_number: false,
                                              song: song
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    })
                                  ],
                                  2
                                )
                              : page.id == 1000
                              ? _c(
                                  "list",
                                  {
                                    staticStyle: { flex: "1" },
                                    attrs: { showScrollbar: "false" }
                                  },
                                  _vm._l(_vm.playlist_data, function(
                                    playlist,
                                    p_index
                                  ) {
                                    return _c(
                                      "cell",
                                      {
                                        key: p_index,
                                        appendAsTree: true,
                                        attrs: { append: "tree" }
                                      },
                                      [
                                        _c("playlist-card", {
                                          attrs: { playlist: playlist }
                                        })
                                      ],
                                      1
                                    )
                                  }),
                                  0
                                )
                              : _c("list", [
                                  _c(
                                    "cell",
                                    {
                                      appendAsTree: true,
                                      attrs: { append: "tree" }
                                    },
                                    [
                                      _c("u-text", [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t未完成\n\t\t\t\t\t\t\t"
                                        )
                                      ])
                                    ]
                                  )
                                ])
                          ])
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm.played ? _c("wyy-play") : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 158 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/search/search.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./search.nvue?vue&type=script&lang=js&mpType=page */ 159);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 159 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/pages/search/search.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












































































































var _uniTransition = _interopRequireDefault(__webpack_require__(/*! @/components/uni-transition/uni-transition.vue */ 67));
var _wyy_play = _interopRequireDefault(__webpack_require__(/*! @/components/wyy-play/wyy_play.nvue */ 54));
var _wyyIcon = _interopRequireDefault(__webpack_require__(/*! ../../components/wyy-icon/wyy-icon.nvue */ 45));
var _song_card = _interopRequireDefault(__webpack_require__(/*! ../../components/song_card.nvue */ 83));
var _playlist_card = _interopRequireDefault(__webpack_require__(/*! ../../components/playlist_card.nvue */ 160));
var _repeater = _interopRequireDefault(__webpack_require__(/*! @/utils/repeater.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { uniTransition: _uniTransition.default, wyyPlay: _wyy_play.default, songCard: _song_card.default, playlistCard: _playlist_card.default, wyyIcon: _wyyIcon.default }, data: function data() {return { hot_list: [], show_result: false, result_bars: [{ id: 1018, name: '综合', key: 'comprehensive' }, { id: 1, name: '单曲', key: 'song' }, // {id: 1014, name: '视频', key: 'mv'},
      // {id: 100, name: '歌手', key: 'artist'},
      // {id: 10, name: '专辑', key: 'album'},
      { id: 1000, name: '歌单', key: 'playlist' } // {id: 1009, name: '主播电台', key: 'dj'},
      // {id: 1002, name: '用户', key: 'user'},
      ], current_keyword: '', current_search_result: {}, current_page: 0, current_bar_index: 0, current_scroll_into: '', mode_class: ['fade'], transfrom_class: { 'position': 'fixed', 'bottom': '90rpx', 'top': 0, 'left': 0, 'right': 0, 'justify-content': 'center', 'align-items': 'center' } };}, watch: { current_bar_index: function current_bar_index(index, old_index) {if (!this.show_result) {return;}if (!this.current_search_result[this.result_bars[index].key]) {this.search();}} }, computed: { played: function played() {return this.$store.state.played;}, playlist_data: function playlist_data() {if (!this.search_result_init_check('playlist')) {return;}var playlists = this.current_search_result.playlist.playlists;var new_playlists = [];playlists.forEach(function (playlist) {var tmp_playlist = {};tmp_playlist.id = playlist.id;tmp_playlist.coverImgUrl = playlist.coverImgUrl;tmp_playlist.name = playlist.name;tmp_playlist.trackCount = playlist.trackCount;tmp_playlist.creator = playlist.creator;new_playlists.push(tmp_playlist);});return new_playlists;}, comprehensive_data: function comprehensive_data() {if (!this.search_result_init_check('comprehensive')) {return;}var comprehensive = this.current_search_result.comprehensive;if (comprehensive.song.songs) {//format songs信息
        comprehensive.song.songs.forEach(function (song) {song.id = song.id;song.name = song.name;song.artists = song.ar;song.album_name = song.al.name;});}return comprehensive;}, songs_data: function songs_data() {if (!this.search_result_init_check('song')) {return;}if (this.current_search_result.song.songCount == 0) {return;}var songs = this.current_search_result.song.songs;var format_songs = [];songs.forEach(function (song) {var format_song = {};format_song.id = song.id;format_song.name = song.name;format_song.artists = song.artists;format_song.album_name = song.album.name;format_songs.push(format_song);});

      return format_songs;
    } },

  onBackPress: function onBackPress() {
    // 如果当前显示的是搜索结果页, 则拦截返回事件, 并关闭结果页
    if (this.show_result) {
      this.close_result_page();
      return true;
    }
  },
  created: function created() {
    uni.$on('search', this.on_search);
    this.get_hot_list();
  },
  beforeDestroy: function beforeDestroy() {
    uni.$off('search');
  },
  methods: {
    //检查是否可以正常展示搜索结果相关的内容
    search_result_init_check: function search_result_init_check(module) {
      __f__("log", module, " at pages\\search\\search.nvue:251");
      if (!this.current_keyword) {//没有搜索关键词
        return false;
      }
      if (!this.current_search_result[module]) {//对应模块没有加载好数据
        return false;
      }

      if (Object.keys(this.current_search_result[module]).length === 0) {
        return false;
      }
      return true;
    },
    on_search: function on_search(e) {
      this.set_keyword(e.keyword);
    },
    set_keyword: function set_keyword(keyword) {
      __f__("log", keyword, " at pages\\search\\search.nvue:268");
      this.current_keyword = keyword;
      this.open_result_page();
    },
    on_tab_tap: function on_tab_tap(index) {
      this.switch_tab(index);
    },
    tab_changed: function tab_changed(e) {
      this.switch_tab(e.detail.current);
    },
    switch_tab: function switch_tab(index) {
      this.current_bar_index = index;
      this.current_scroll_into = this.result_bars[index].id;
    },
    hot_search: function hot_search(hot) {
      this.set_keyword(hot.searchWord);
    },

    search: function search() {var _this = this;

      var keyword = this.current_keyword;

      var index = this.current_bar_index;
      var type = this.result_bars[index].id;
      var page = this.current_page;
      _repeater.default.search.search(keyword, type, page, function (data) {
        _this.$set(_this.current_search_result, _this.result_bars[index].key, data.result);
      });
    },
    close_result_page: function close_result_page() {
      this.show_result = false; //关闭结果页
      this.current_keyword = '';
      this.current_search_result = {};
      this.current_page = 0;
      this.current_bar_index = 0;
      this.current_scroll_into = '';
    },
    open_result_page: function open_result_page() {
      this.show_result = true; //打开结果页
      this.current_search_result = {};
      this.current_page = 0;
      this.search();
    },

    get_hot_list: function get_hot_list() {var _this2 = this;
      _repeater.default.search.get_hot_list(function (data) {

        var hot_list = data.data;
        //部分介绍结尾可能有换行符\n,需要去掉不然会扰乱样式
        hot_list.forEach(function (item) {
          item.content = item.content.trim();
        });
        _this2.hot_list = hot_list;
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 160 */
/*!********************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_card.nvue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playlist_card_nvue_vue_type_template_id_d29cb5c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist_card.nvue?vue&type=template&id=d29cb5c8& */ 161);
/* harmony import */ var _playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist_card.nvue?vue&type=script&lang=js& */ 163);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./playlist_card.nvue?vue&type=style&index=0&lang=css& */ 165).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./playlist_card.nvue?vue&type=style&index=0&lang=css& */ 165).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _playlist_card_nvue_vue_type_template_id_d29cb5c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _playlist_card_nvue_vue_type_template_id_d29cb5c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "1e381b5e",
  false,
  _playlist_card_nvue_vue_type_template_id_d29cb5c8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/components/playlist_card.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 161 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_card.nvue?vue&type=template&id=d29cb5c8& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_template_id_d29cb5c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist_card.nvue?vue&type=template&id=d29cb5c8& */ 162);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_template_id_d29cb5c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_template_id_d29cb5c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_template_id_d29cb5c8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_template_id_d29cb5c8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 162 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_card.nvue?vue&type=template&id=d29cb5c8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["music-list"], on: { click: _vm.to_playlist } },
    [
      _c(
        "view",
        { staticClass: ["music-list-left"] },
        [
          _c("u-image", {
            staticClass: ["cover-image"],
            attrs: { src: _vm.playlist.coverImgUrl + "?param=100y100" }
          })
        ],
        1
      ),
      _c("view", { staticClass: ["music-list-center"] }, [
        _c("u-text", { staticClass: ["music-list-name"] }, [
          _vm._v(_vm._s(_vm.playlist.name))
        ]),
        _c("u-text", { staticClass: ["number"] }, [
          _vm._v(
            _vm._s(_vm.playlist.trackCount) +
              "首 by " +
              _vm._s(_vm.playlist.creator.nickname)
          )
        ])
      ]),
      _c("view", { staticClass: ["music-list-right"] })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 163 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_card.nvue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist_card.nvue?vue&type=script&lang=js& */ 164);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 164 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_card.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

















var _repeater = _interopRequireDefault(__webpack_require__(/*! @/utils/repeater.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { props: { playlist: { type: Object, default: {} } }, data: function data() {return {};}, methods: { to_playlist: function to_playlist() {var playlist = this.playlist;
      _repeater.default.helper.to('/pages/playlist/playlist?playlist_id=' + playlist.id + '&cover_image=' + playlist.coverImgUrl + '&name=' + playlist.name);
    } } };exports.default = _default;

/***/ }),
/* 165 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_card.nvue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist_card.nvue?vue&type=style&index=0&lang=css& */ 166);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_card_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 166 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/components/playlist_card.nvue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "music-list": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "25rpx",
    "paddingRight": "25rpx",
    "height": "100rpx",
    "backgroundColor:active": "rgba(0,0,0,0.1)"
  },
  "cover-image": {
    "height": "90rpx",
    "width": "90rpx",
    "borderRadius": "8rpx"
  },
  "music-list-center": {
    "flexDirection": "column",
    "justifyContent": "space-between",
    "width": "560rpx",
    "height": "60rpx",
    "paddingLeft": "15rpx"
  },
  "music-list-right": {
    "flex": 1,
    "height": "60rpx"
  },
  "music-list-name": {
    "fontSize": "24rpx"
  },
  "number": {
    "fontSize": "18rpx",
    "color": "rgba(0,0,0,0.5)"
  }
}

/***/ }),
/* 167 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/search/search.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./search.nvue?vue&type=style&index=0&lang=css&mpType=page */ 168);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_search_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 168 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/pages/search/search.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "flex": 1
  },
  "title-text": {
    "fontSize": "24rpx",
    "fontWeight": "bold",
    "color": "#000000"
  },
  "title": {
    "height": "80rpx",
    "width": "750rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx",
    "justifyContent": "center"
  },
  "content": {
    "width": "750rpx",
    "flex": 1
  },
  "hot-item": {
    "width": "750rpx",
    "height": "100rpx",
    "flexDirection": "row",
    "backgroundColor:active": "rgba(0,0,0,0.1)"
  },
  "hot-item-index": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100rpx"
  },
  "index-text": {
    "fontSize": "26rpx",
    "color": "rgba(0,0,0,0.3)"
  },
  "hot-info": {
    "width": "650rpx",
    "height": "100rpx",
    "justifyContent": "center"
  },
  "key_word": {
    "fontSize": "26rpx"
  },
  "description": {
    "fontSize": "18rpx",
    "color": "rgba(0,0,0,0.3)",
    "marginTop": "10rpx"
  },
  "scroll-bar-view": {
    "width": "750rpx",
    "height": "70rpx",
    "flexDirection": "row",
    "backgroundColor": "rgba(218,45,30,1)"
  },
  "scroll-bar": {
    "flexDirection": "row"
  },
  "bar-name": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "135rpx",
    "backgroundColor:active": "rgba(0,0,0,0.1)"
  },
  "bar-name-text": {
    "fontSize": "26rpx",
    "color": "rgba(255,255,255,0.6)"
  },
  "active-bar": {
    "fontSize": "26rpx",
    "fontWeight": "bold",
    "color": "#FFFFFF"
  },
  "bar-box": {
    "flex": 1
  },
  "top-bar": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "750rpx",
    "height": "90rpx"
  },
  "icon": {
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "top-bar-text": {
    "fontSize": "26rpx",
    "color": "#000000"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMuanNvbj9hOTkzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMuanNvbj9jOTU5Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvbWFpbi5qcz8wNDc4Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvQXBwLnZ1ZT83MmMzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvQXBwLnZ1ZT9hNmU3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL2xpYi9mb3JtYXQtbG9nLmpzPzBkZTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ1bmktYXBwOi8vL3V0aWxzL3JlcGVhdGVyLmpzIiwidW5pLWFwcDovLy9jb25maWcvY29uZmlnLmpzIiwidW5pLWFwcDovLy9oZWxwZXIvaGVscGVyLmpzIiwidW5pLWFwcDovLy91dGlscy9wbGF5ZXIuanMiLCJ1bmktYXBwOi8vL3V0aWxzL3N0b3JhZ2UuanMiLCJ1bmktYXBwOi8vL21vZGVsL3NvbmcuanMiLCJ1bmktYXBwOi8vL3V0aWxzL3JlcXVlc3QuanMiLCJ1bmktYXBwOi8vL21vZGVsL3VzZXIuanMiLCJ1bmktYXBwOi8vL21vZGVsL3BsYXlsaXN0LmpzIiwidW5pLWFwcDovLy9tb2RlbC9zZWFyY2guanMiLCJ1bmktYXBwOi8vL21vZGVsL290aGVyLmpzIiwidW5pLWFwcDovLy9tb2RlbC9hbGJ1bS5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvcGVyc29uYWxpemVkLmpzIiwidW5pLWFwcDovLy9tb2RlbC90b3AuanMiLCJ1bmktYXBwOi8vL21vZGVsL3ZpZGVvLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlP2I3NGQiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3d5eS1pY29uL3d5eS1pY29uLm52dWU/ZTRhZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZT8zNzQ5Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlP2FlNzQiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZT8zZmQzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlPzFiMTciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3d5eS1wbGF5L3d5eV9wbGF5Lm52dWU/Yjk4ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LXBsYXkvd3l5X3BsYXkubnZ1ZT81ODcwIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktcGxheS93eXlfcGxheS5udnVlP2Y3NjYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3d5eS1wbGF5L3d5eV9wbGF5Lm52dWU/OThkZiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy93eXktcGxheS93eXlfcGxheS5udnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT8wYTUzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT9kNTIyIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT84MjkxIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT82M2JhIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3BsYXlsaXN0X2RyYXdlci5udnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZT9hNTdmIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZT8yYTU0Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZT8wYjA5Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/MDBmNCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlPzkyZDkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZT81NDdhIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/YzFjYiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUvZGlzdC9yZXF1aXJlLW5hdGl2ZS1wbHVnaW4uanM/ZWZlNSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlPzgzMjEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZT85NGY2Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZT8zZTc2IiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZT85MjUyIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZT84NTI3Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT8yMDhmIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT9jYWQxIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktcGxheS93eXlfcGxheS5udnVlPzVmYzMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3d5eS1wbGF5L3d5eV9wbGF5Lm52dWU/MzFiZCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvc29uZ19jYXJkLm52dWU/OTJiYiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvc29uZ19jYXJkLm52dWU/YmJmNiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvc29uZ19jYXJkLm52dWU/NWU3NiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvc29uZ19jYXJkLm52dWU/NGNhMyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9zb25nX2NhcmQubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvc29uZ19jYXJkLm52dWU/YjczZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvc29uZ19jYXJkLm52dWU/ODI0NSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL21haW4uanM/ZWI5NCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL3BhZ2VzL3NlYXJjaC9zZWFyY2gubnZ1ZT8xZDhjIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMvc2VhcmNoL3NlYXJjaC5udnVlPzc2NzEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9wYWdlcy9zZWFyY2gvc2VhcmNoLm52dWU/NzY1OCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL3BhZ2VzL3NlYXJjaC9zZWFyY2gubnZ1ZT9iOWFhIiwidW5pLWFwcDovLy9wYWdlcy9zZWFyY2gvc2VhcmNoLm52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2NhcmQubnZ1ZT9kMmFlIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy9wbGF5bGlzdF9jYXJkLm52dWU/NGJjOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvcGxheWxpc3RfY2FyZC5udnVlP2ViM2YiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2NhcmQubnZ1ZT9iODA1IiwidW5pLWFwcDovLy9jb21wb25lbnRzL3BsYXlsaXN0X2NhcmQubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvcGxheWxpc3RfY2FyZC5udnVlPzM1YzkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2NhcmQubnZ1ZT9kOGJkIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMvc2VhcmNoL3NlYXJjaC5udnVlP2RkMjUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9wYWdlcy9zZWFyY2gvc2VhcmNoLm52dWU/MjhhNyJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInR5cGUiLCJyZXNpZGVuY2VUaW1lIiwib3ZlcnRpbWUiLCJnZXRSb3V0ZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsIl9zZWxmIiwiJHZtIiwiJG1wIiwiaXMiLCIkc2NvcGUiLCJyb3V0ZSIsImdldFBhZ2VSb3V0ZSIsInNlbGYiLCJxdWVyeSIsIl9xdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCIkb3B0aW9ucyIsImNhbGlicmF0aW9uIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImVycm9yIiwiUGFnZXNKc29uIiwicmVxdWlyZSIsImRlZmF1bHQiLCJzdGF0Q29uZmlnIiwicmVzdWx0T3B0aW9ucyIsImdldFN5c3RlbUluZm9TeW5jIiwiVXRpbCIsIl9yZXRyeSIsIl9wbGF0Zm9ybSIsIl9uYXZpZ2F0aW9uQmFyVGl0bGUiLCJjb25maWciLCJyZXBvcnQiLCJsdCIsIl9vcGVyYXRpbmdUaW1lIiwiX3JlcG9ydGluZ1JlcXVlc3REYXRhIiwiX19wcmV2ZW50X3RyaWdnZXJpbmciLCJfX2xpY2F0aW9uSGlkZSIsIl9fbGljYXRpb25TaG93IiwiX2xhc3RQYWdlUm91dGUiLCJ1dCIsIm1wbiIsImFrIiwiYXBwaWQiLCJ1c3YiLCJ2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJwYXRoIiwic2MiLCJfc2VuZFJlcG9ydFJlcXVlc3QiLCJfc2VuZEhpZGVSZXF1ZXN0IiwidXJscmVmIiwidXJscmVmX3RzIiwicm91dGVwYXRoIiwidGl0bGVOVmlldyIsInRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJfc2VuZFBhZ2VSZXF1ZXN0IiwidXJsIiwiX3NlbmRFdmVudFJlcXVlc3QiLCJrZXkiLCJmdnRzIiwibHZ0cyIsInR2YyIsImdldFByb3BlcnR5IiwiZ2V0TmV0d29ya0luZm8iLCJvcHQiLCJyZXF1ZXN0IiwidmFsdWUiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInB1c2giLCJ1bmlTdGF0RGF0YSIsImZpcnN0QXJyIiwiY29udGVudEFyciIsImxhc3RBcnIiLCJyZCIsImZvckVhY2giLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJtZXRob2QiLCJmYWlsIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiYXJncyIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJjYWxsIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm9uRXJyb3IiLCJtYWluIiwidHlwb2YiLCJzIiwicHJvdG90eXBlIiwic3Vic3RyaW5nIiwiaXNEZWJ1Z01vZGUiLCJfX2NoYW5uZWxJZF9fIiwibG9nIiwiX2xlbiIsImFyZ3VtZW50cyIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiZm9ybWF0TG9nIiwic2hpZnQiLCJwb3AiLCJtc2dzIiwibWFwIiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJ2VHlwZSIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwibXNnIiwibGFzdE1zZyIsImpvaW4iLCJpbmRleE9mIiwiaGVscGVyIiwidXNlciIsInBsYXlsaXN0IiwicGxheWVyIiwic3RvcmFnZSIsInNvbmciLCJzZWFyY2giLCJvdGhlciIsImFsYnVtIiwicGVyc29uYWxpemVkIiwidG9wIiwidmlkZW8iLCJzeXN0ZW1JbmZvIiwic3RhdHVzX2Jhcl9oZWlnaHQiLCJzdGF0dXNCYXJIZWlnaHQiLCJIT1NUIiwiQVBJIiwiQ0VMTFBIT05FX0xPR0lOIiwiTE9HSU5fU1RBVFVTIiwiQ0hFQ0tfUEhPTkUiLCJMT0dPVVQiLCJTRU5EX0NBUFRDSEEiLCJWRVJJRllfQ0FQVENIQSIsIlBIT05FX1JFRyIsIlNVQkNPVU5UIiwiVVNFUl9ERVRBSUwiLCJVU0VSX1BMQVlMSVNUIiwiVVNFUl9MSUtFX0xJU1QiLCJMSUtFIiwiUExBWUxJU1RfREVUQUlMIiwiQUxCVU1fREVUQUlMIiwiU09ORyIsIkxZUklDIiwiU09OR19ERVRBSUwiLCJIT1RfU0VBUkNIIiwiU0VBUkNIIiwiQkFOTkVSIiwiUkVDT01NRU5EX1JFU09VUkNFIiwiUEVSU09OQUxJWkVEX1BMQVlMSVNUIiwiUEVSU09OQUxJWkVEX05FV1NPTkciLCJUT1BfQUxCVU0iLCJWSURFT19MSVNUIiwicGxheWVkX3dhdGNoIiwiY2IiLCJvYmoiLCJnZXRBcHAiLCJnbG9iYWxEYXRhIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwic2V0IiwiX3BsYXllZCIsImdldCIsImJhY2tncm91bmRlciIsIm9zIiwibmFtZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiYW5kcm9pZCIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJtb3ZlVGFza1RvQmFjayIsInRvIiwibW9kZSIsIm5hdmlnYXRlVG8iLCJ0b2FzdCIsImljb24iLCJ0ZXh0IiwiZHVyYXRpb24iLCJtYXNrIiwicG9zaXRpb24iLCJzaG93VG9hc3QiLCJQbGF5ZXJIZWxwZXIiLCJnZXRfcGxheWVyIiwic2V0X3VybCIsIlN0b3JhZ2UiLCJnZXRfcGxheWVkIiwic2V0U3R5bGVzIiwicGxheSIsInBhdXNlIiwiZ2V0X3Bvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJnZXRfZHVyYXRpb24iLCJnZXREdXJhdGlvbiIsInNlZWtfdG8iLCJzZWVrVG8iLCJwcmV2IiwicGxheWVkIiwiZ2V0X2N1cnJlbnRfcGxheWxpc3QiLCJjdXJyZW50X3NvbmdfaWQiLCJpZCIsInByZXZfaW5kZXgiLCJwcmV2X3NvbmdfaWQiLCJzdGFydCIsIm5leHQiLCJuZXh0X2luZGV4IiwibmV4dF9zb25nX2lkIiwic29uZ19pZCIsIlNvbmciLCJnZXRfc29uZ19kZXRhaWwiLCJzb25ncyIsInNvbmdfbmFtZSIsImNvdmVyX2ltYWdlIiwiYWwiLCJwaWNVcmwiLCJjdXJyZW50X3BsYXllZCIsInBsYXllZF9tdXNpY19pZCIsImlzUGF1c2VkIiwiSGVscGVyIiwiZ2V0X3NvbmdfdXJsIiwicmVzIiwiY3JlYXRvcnMiLCJhciIsImNyZWF0b3Jfc3RyIiwiY3JlYXRvciIsInR1cm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiTEFURVNUX1BMQVlFRCIsIkNVUlJFTlRfUExBWUxJU1QiLCJJU19MT0dJTiIsIlBMQVlfTU9ERSIsImlzX2xvZ2luIiwic2V0X2lzX2xvZ2luIiwic2V0X3BsYXllZCIsInNldF9jdXJyZW50X3BsYXlsaXN0IiwiZ2V0X3BsYXlfbW9kZSIsInNldF9wbGF5X21vZGUiLCJrIiwicGFyYW1zIiwiYnIiLCJjb2RlIiwiZ2V0X2x5cmljIiwiaWRzIiwic3VjY2Vzc19jYiIsImZhaWxlZF9jYiIsInVyaSIsImVyck1zZyIsImhpZGVUb2FzdCIsInBvc3QiLCJ0ZXN0IiwiVXNlciIsImNoZWNrX3Bob25lIiwicGhvbmUiLCJzdGF0dXNDb2RlIiwibG9naW4iLCJwYXNzd29yZCIsImdldF9zdGF0dXMiLCJzdGF0dXMiLCJyZWciLCJjYXB0Y2hhIiwibG9nb3V0Iiwic2VuZF9jYXB0Y2hhIiwidmVyaWZ5X2NhcHRjaGEiLCJjaGVja19sb2dpbiIsImdldF9zdWJjb3VudCIsImdldF91c2VyX2RldGFpbCIsInVpZCIsImdldF9wbGF5bGlzdCIsImdldF9saWtlbGlzdCIsImxpa2UiLCJtdXNpY19pZCIsInRzIiwidGltZXN0YW1wIiwiUGxheWxpc3QiLCJnZXRfcGxheWxpc3RfZGV0YWlsIiwiU2VhcmNoIiwiZ2V0X2hvdF9saXN0Iiwia2V5d29yZCIsImxpbWl0Iiwib2Zmc2V0Iiwia2V5d29yZHMiLCJPdGhlciIsImJhbm5lciIsInJlY29tbWVuZF9yZXNvdXJjZSIsIkFsYnVtIiwiZGV0YWlsIiwiUGVyc29uYWxpemVkIiwibmV3c29uZyIsIlRvcCIsIlZpZGVvIiwibGlzdCIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJ3ZWV4IiwicmVxdWlyZU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFD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Q0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQStqQyxDQUFnQix1bENBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQW5sQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFBdWtDLENBQWdCLGdsQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBM2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7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QSxFQWRBLEU7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQTZqQyxDQUFnQixxbENBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQWpsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQWdsQyxDQUFnQix5bENBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXBtQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTU0KTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOnt9LFwiZ2xvYmFsU3R5bGVcIjp7fX0iLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiX19VTklfX0QwN0VDQjFcIn0iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInBhZ2VcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNlwiXG4gIH1cbn0iLCJmdW5jdGlvbiB0eXBvZiAodikge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxufVxuXG5mdW5jdGlvbiBpc0RlYnVnTW9kZSAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gIHJldHVybiB0eXBlb2YgX19jaGFubmVsSWRfXyA9PT0gJ3N0cmluZycgJiYgX19jaGFubmVsSWRfX1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nICh0eXBlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIHZhciB0eXBlID0gYXJncy5zaGlmdCgpXG4gIGlmIChpc0RlYnVnTW9kZSgpKSB7XG4gICAgYXJncy5wdXNoKGFyZ3MucG9wKCkucmVwbGFjZSgnYXQgJywgJ3VuaS1hcHA6Ly8vJykpXG4gICAgcmV0dXJuIGNvbnNvbGVbdHlwZV1bJ2FwcGx5J10oY29uc29sZSwgYXJncylcbiAgfVxuXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgYXJyYXldJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYgPT09IG51bGwpIHtcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZcbiAgfSlcbiAgdmFyIG1zZyA9ICcnXG5cbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xuICAgIHZhciBsYXN0TXNnID0gbXNncy5wb3AoKVxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxuXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XG4gICAgICBtc2cgKz0gbGFzdE1zZ1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbXNnID0gbXNnc1swXVxuICB9XG5cbiAgY29uc29sZVt0eXBlXShtc2cpXG59XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcyc7XG5cbmltcG9ydCBwbGF5ZXIgZnJvbSAnQC91dGlscy9wbGF5ZXIuanMnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQC91dGlscy9zdG9yYWdlLmpzJztcblxuaW1wb3J0IHVzZXIgZnJvbSAnLi4vbW9kZWwvdXNlci5qcyc7XG5pbXBvcnQgcGxheWxpc3QgZnJvbSAnLi4vbW9kZWwvcGxheWxpc3QuanMnO1xuaW1wb3J0IHNvbmcgZnJvbSAnLi4vbW9kZWwvc29uZy5qcyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uL21vZGVsL3NlYXJjaC5qcyc7XG5pbXBvcnQgb3RoZXIgZnJvbSAnLi4vbW9kZWwvb3RoZXIuanMnO1xuaW1wb3J0IGFsYnVtIGZyb20gJy4uL21vZGVsL2FsYnVtLmpzJztcbmltcG9ydCBwZXJzb25hbGl6ZWQgZnJvbSAnLi4vbW9kZWwvcGVyc29uYWxpemVkLmpzJztcbmltcG9ydCB0b3AgZnJvbSAnLi4vbW9kZWwvdG9wLmpzJztcbmltcG9ydCB2aWRlbyBmcm9tICcuLi9tb2RlbC92aWRlby5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0eyBcblx0Y29uZmlnLFxuXHRoZWxwZXIsXG5cdHVzZXIsXG5cdHBsYXlsaXN0LFxuXHRwbGF5ZXIsXG5cdHN0b3JhZ2UsXG5cdHNvbmcsXG5cdHNlYXJjaCxcblx0b3RoZXIsXG5cdGFsYnVtLFxuXHRwZXJzb25hbGl6ZWQsXG5cdHRvcCxcblx0dmlkZW9cbn0iLCJcbmNvbnN0IHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblxuY29uc3Qgc3RhdHVzX2Jhcl9oZWlnaHQgPSBzeXN0ZW1JbmZvLnN0YXR1c0JhckhlaWdodDtcblxuY29uc3QgSE9TVCA9ICdodHRwOi8vYXBpLmNsb3VkbXVzaWMucHVsc2F0aW5nLmNuOjMwMDAvJztcblxuY29uc3QgQVBJID0ge307XG4vL+eZu+W9lVxuQVBJLkNFTExQSE9ORV9MT0dJTiA9ICdsb2dpbi9jZWxscGhvbmUnOyAvLyDmiYvmnLrlj7fnmbvlvZVcbkFQSS5MT0dJTl9TVEFUVVMgPSAnbG9naW4vc3RhdHVzJzsgLy8g55m76ZmG54q25oCBXG5BUEkuQ0hFQ0tfUEhPTkUgPSAnY2VsbHBob25lL2V4aXN0ZW5jZS9jaGVjayc7IC8vIOajgOafpeaJi+acuuWPt+aYr+WQpuazqOWGjOi/h1xuQVBJLkxPR09VVCA9ICdsb2dvdXQnOyAvLyDnmbvlh7pcbkFQSS5TRU5EX0NBUFRDSEEgPSAnY2FwdGNoYS9zZW50JzsgLy8g5Y+R6YCB55+t5L+h6aqM6K+B56CBXG5BUEkuVkVSSUZZX0NBUFRDSEEgPSAnY2FwdGNoYS92ZXJpZnknOyAvLyDmoLjlrp7pqozor4HnoIFcbkFQSS5QSE9ORV9SRUcgPSAncmVnaXN0ZXIvY2VsbHBob25lJzsgLy8g5omL5py65Y+35rOo5YaMXG4vL+eUqOaIt1xuQVBJLlNVQkNPVU5UID0gJ3VzZXIvc3ViY291bnQnOyAvLyDnlKjmiLfnmoTmrYzljZXvvIzmlLbol4/vvIxtdiwgZGog5pWw6YePXG5BUEkuVVNFUl9ERVRBSUwgPSAndXNlci9kZXRhaWwnOyAvLyDojrflj5bnlKjmiLfor6bmg4VcbkFQSS5VU0VSX1BMQVlMSVNUID0gJ3VzZXIvcGxheWxpc3QnOyAvLyDojrflj5bnlKjmiLfmrYzljZVcbkFQSS5VU0VSX0xJS0VfTElTVCA9ICdsaWtlbGlzdCc7IC8vIOiOt+WPlueUqOaIt+WWnOasoueahOmfs+S5kOWIl+ihqFxuQVBJLkxJS0UgPSAnbGlrZSc7IC8vIOWWnOasouafkOS4quatjOabslxuXG4vLyDmrYzljZVcbkFQSS5QTEFZTElTVF9ERVRBSUwgPSAncGxheWxpc3QvZGV0YWlsJzsgLy8g5q2M5Y2V6K+m5oOFXG5cbi8vIOS4k+i+kVxuQVBJLkFMQlVNX0RFVEFJTCA9ICdhbGJ1bSc7IC8v5LiT6L6R6K+m5oOFXG5cbi8vIOatjOabslxuQVBJLlNPTkcgPSAnc29uZy91cmwnOyAvL+iOt+WPluatjOabsnVybFxuQVBJLkxZUklDID0gJ2x5cmljJzsgLy/ojrflj5bmrYzor41cbkFQSS5TT05HX0RFVEFJTCA9ICdzb25nL2RldGFpbCc7IC8v6I635Y+W5q2M5puy6K+m5oOFXG5cbi8vIOaQnOe0olxuQVBJLkhPVF9TRUFSQ0ggPSAnc2VhcmNoL2hvdC9kZXRhaWwnOyAvL+iOt+WPlueDreaQnFxuQVBJLlNFQVJDSCA9ICdzZWFyY2gnOyAvL+aQnOe0olxuXG5cbi8vIE90aGVyXG5BUEkuQkFOTkVSID0gJ2Jhbm5lcic7IC8vIOWPkeeOsOmhtWJhbm5lcuWbvlxuQVBJLlJFQ09NTUVORF9SRVNPVVJDRSA9ICdyZWNvbW1lbmQvcmVzb3VyY2UnOyAvLyDmr4/ml6XmjqjojZDmrYzljZVcblxuLy8g56eB5Lq65o6o6I2QXG5BUEkuUEVSU09OQUxJWkVEX1BMQVlMSVNUID0gJ3BlcnNvbmFsaXplZCc7IC8vIOaOqOiNkOatjOWNlVxuQVBJLlBFUlNPTkFMSVpFRF9ORVdTT05HID0gJ3BlcnNvbmFsaXplZC9uZXdzb25nJzsgLy8g5o6o6I2Q5paw5q2MXG5cbi8vIOWQhOexu+aOkuihjHRvcFxuQVBJLlRPUF9BTEJVTSA9ICd0b3AvYWxidW0nOyAvLyDmlrDnop/kuIrmnrZcblxuLy8g6KeG6aKRXG5BUEkuVklERU9fTElTVCA9ICd2aWRlby9ncm91cCc7IC8vIOaMieWIhuexu+iOt+WPluinhumikeWIl+ihqCwg6ZyA55m75b2VXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRzeXN0ZW1JbmZvLCBcblx0c3RhdHVzX2Jhcl9oZWlnaHQsXG5cdEhPU1QsXG5cdEFQSVxufVxuIiwiLy/nm5HlkKxnbG9iYWxEYXRh5Lit55qEcGxheWVk5bGe5oCnXG5mdW5jdGlvbiBwbGF5ZWRfd2F0Y2goY2IpIHtcblx0dmFyIG9iaiA9IGdldEFwcCgpLmdsb2JhbERhdGE7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicGxheWVkXCIsIHtcblx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLl9wbGF5ZWQgPSB2YWx1ZTtcblx0XHRcdGNiKHZhbHVlKTtcblx0XHR9LFxuXHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyDlj6/ku6XlnKjov5nph4zmiZPljbDkuIDkupvkuJzopb/vvIznhLblkI7lnKjlhbbku5bnlYzpnaLosIPnlKhnZXRBcHAoKS5nbG9iYWxEYXRhLnBsYXllZOeahOaXtuWAme+8jOi/memHjOWwseS8muaJp+ihjOOAglxuXHRcdFx0cmV0dXJuIGdldEFwcCgpLmdsb2JhbERhdGEuX3BsYXllZDtcblx0XHR9XG5cdH0pXG59XG5cblxuZnVuY3Rpb24gYmFja2dyb3VuZGVyKCkge1xuXHRsZXQgb3MgPSBwbHVzLm9zLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSAnYW5kcm9pZCcgPyAnYW5kcm9pZCcgOiAnaW9zJztcblx0aWYgKG9zID09ICdhbmRyb2lkJykge1xuXHRcdGxldCBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcblx0XHRtYWluLm1vdmVUYXNrVG9CYWNrKGZhbHNlKTtcblx0fVxufVxuXG5cblxuZnVuY3Rpb24gdG8odXJsLCBtb2RlKSB7XG5cdG1vZGUgPSBtb2RlIHx8ICduYXZpZ2F0ZV90byc7XG5cblxuXHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0dXJsOiB1cmxcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gdG9hc3QoaWNvbiwgdGV4dCwgZHVyYXRpb24sIG1hc2ssIHBvc2l0aW9uKSB7XG5cdGR1cmF0aW9uID0gZHVyYXRpb24gfHwgMTUwMDtcblx0bWFzayA9IG1hc2sgfHwgZmFsc2U7XG5cdHBvc2l0aW9uID0gcG9zaXRpb24gfHwgZmFsc2U7XG5cdHVuaS5zaG93VG9hc3Qoe1xuXHRcdGljb246IGljb24sXG5cdFx0dGl0bGU6IHRleHQsXG5cdFx0ZHVyYXRpb246IGR1cmF0aW9uLFxuXHRcdG1hc2s6IG1hc2ssXG5cdFx0cG9zaXRpb246IHBvc2l0aW9uLFxuXHR9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0dG8sXG5cdHRvYXN0LFxuXHRiYWNrZ3JvdW5kZXIsXG5cdHBsYXllZF93YXRjaCxcblx0XG59XG4iLCIvLyDlhajlsYDpn7PpopHmkq3mlL7nrqHnkIZcbmxldCBQbGF5ZXJIZWxwZXIgPSB7fTtcblxuLy/ojrflj5bllK/kuIBwbGF5ZXIsIOS/neaMgXBsYXllcue7n+S4gFxuZnVuY3Rpb24gZ2V0X3BsYXllcigpIHtcblx0cmV0dXJuIGdldEFwcCgpLmdsb2JhbERhdGEucGxheWVyO1xufVxuXG5QbGF5ZXJIZWxwZXIuc2V0X3VybCA9IGZ1bmN0aW9uKHVybCkge1xuXHRcblx0dXJsID0gdXJsIHx8IFN0b3JhZ2UuZ2V0X3BsYXllZCgpLnVybDtcblx0Ly8gY29uc29sZS5sb2coJ3NldF91cmw6JyArIHVybCk7XG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XG5cdHBsYXllci5zZXRTdHlsZXMoe1xuXHRcdHNyYzogdXJsXG5cdH0pO1xuXHRcblx0cmV0dXJuO1xufVxuXG4vL3BsYXnliY3nmoTlh4blpIdcbi8vIFBsYXllckhlbHBlci5zdGFydCA9IGZ1bmN0aW9uKCkge1xuLy8gXHR0aGlzLnNldF91cmwoKTtcbi8vIFx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcbi8vIFx0cGxheWVyLnJlc3VtZSgpO1xuLy8gXHRyZXR1cm47XG4vLyB9XG5cbi8v57uf5LiAcGxheeWFpeWPoywg55yf5q2j55qE5pKt5pS+5YWl5Y+jXG5QbGF5ZXJIZWxwZXIucGxheSA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xuXHRwbGF5ZXIucGxheSgoKT0+e1xuXHRcdGNvbnNvbGUubG9nKCflvZPliY3pn7PkuZDmkq3mlL7lrozmr5UnKTtcblx0fSwoZSk9PiB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH0pOztcblx0cmV0dXJuO1xufVxuXG4vKipcbiAqIOaaguWBnFxuICog6ZyA6KaBc3RhcnTlkI4sIOinpuWPkW9uUGxheeS6i+S7tuWQjiwgcGF1c2XmiY3mnInmlYhcbiAqL1xuUGxheWVySGVscGVyLnBhdXNlID0gZnVuY3Rpb24oKSB7XG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XG5cdHBsYXllci5wYXVzZSgpO1xuXHRyZXR1cm47XG59XG5cblBsYXllckhlbHBlci5nZXRfcG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcblx0cmV0dXJuIHBsYXllci5nZXRQb3NpdGlvbigpO1xufVxuXG5QbGF5ZXJIZWxwZXIuZ2V0X2R1cmF0aW9uID0gZnVuY3Rpb24oKSB7XG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XG5cdFxuXHRyZXR1cm4gcGxheWVyLmdldER1cmF0aW9uKCk7XG59XG5cblBsYXllckhlbHBlci5zZWVrX3RvID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0cmV0dXJuIGdldF9wbGF5ZXIoKS5zZWVrVG8ocG9zaXRpb24pO1xufVxuXG5cblxuXG5QbGF5ZXJIZWxwZXIucHJldiA9IGZ1bmN0aW9uKGNiKSB7XG5cdGxldCBwbGF5ZWQgPSBTdG9yYWdlLmdldF9wbGF5ZWQoKTtcblx0bGV0IHBsYXlsaXN0ID0gU3RvcmFnZS5nZXRfY3VycmVudF9wbGF5bGlzdCgpO1xuXHRsZXQgY3VycmVudF9zb25nX2lkID0gcGxheWVkLmlkO1xuXHRsZXQgcHJldl9pbmRleCA9IHBsYXlsaXN0Lmxlbmd0aCAtIDE7XG5cdFxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBsYXlsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGN1cnJlbnRfc29uZ19pZCA9PSBwbGF5bGlzdFtpXS5pZCkge1xuXHRcdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRcdHByZXZfaW5kZXggPSBpIC0gMTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRcblx0bGV0IHByZXZfc29uZ19pZCA9IHBsYXlsaXN0W3ByZXZfaW5kZXhdLmlkO1xuXHR0aGlzLnN0YXJ0KHByZXZfc29uZ19pZCwgKHBsYXllZCk9PiB7XG5cdFx0Y2IgJiYgY2IocGxheWVkKVxuXHR9KTtcbn1cblxuXG5QbGF5ZXJIZWxwZXIubmV4dCA9IGZ1bmN0aW9uKGNiKSB7XG5cdGxldCBwbGF5ZWQgPSBTdG9yYWdlLmdldF9wbGF5ZWQoKTtcblx0bGV0IGN1cnJlbnRfc29uZ19pZCA9IHBsYXllZC5pZDtcblx0bGV0IHBsYXlsaXN0ID0gU3RvcmFnZS5nZXRfY3VycmVudF9wbGF5bGlzdCgpO1xuXHRcblx0bGV0IG5leHRfaW5kZXggPSAwO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBsYXlsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGN1cnJlbnRfc29uZ19pZCA9PSBwbGF5bGlzdFtpXS5pZCkge1xuXHRcdFx0aWYgKGkgKyAxIDwgcGxheWxpc3QubGVuZ3RoKSB7XG5cdFx0XHRcdG5leHRfaW5kZXggPSBpICsgMTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRjb25zb2xlLmxvZyhuZXh0X2luZGV4KTtcblx0bGV0IG5leHRfc29uZ19pZCA9IHBsYXlsaXN0W25leHRfaW5kZXhdLmlkO1xuXHR0aGlzLnN0YXJ0KG5leHRfc29uZ19pZCwgKHBsYXllZCk9PiB7XG5cdFx0Y2IgJiYgY2IocGxheWVkKVxuXHR9KTtcbn1cblxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb25nX2lkXG4gKiDkvKDlhaXmrYzmm7JpZOaSreaUvlxuICovXG5QbGF5ZXJIZWxwZXIuc3RhcnQgPSBmdW5jdGlvbihzb25nX2lkLCBjYikge1xuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xuXHRsZXQgcGxheWVkID0gU3RvcmFnZS5nZXRfcGxheWVkKCk7XG5cdFxuXHRTb25nLmdldF9zb25nX2RldGFpbChzb25nX2lkLCAoZGF0YSk9PiB7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0bGV0IHNvbmcgPSBkYXRhLnNvbmdzWzBdO1xuXHRcdGxldCBzb25nX25hbWUgPSBzb25nLm5hbWU7XG5cdFx0bGV0IGNvdmVyX2ltYWdlID0gc29uZy5hbC5waWNVcmw7XG5cdFx0bGV0IGN1cnJlbnRfcGxheWVkID0gcGxheWVkO1xuXHRcdGxldCBwbGF5ZWRfbXVzaWNfaWQgPSBjdXJyZW50X3BsYXllZC5pZDtcblx0XHRcblx0XHRpZiAoc29uZ19pZCA9PSBwbGF5ZWRfbXVzaWNfaWQpIHtcblx0XHRcdC8vIOi3s+i9rOaSreaUvuivpuaDhemhteW5tuaSreaUvlxuXHRcdFx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcblx0XHRcdGlmIChwbGF5ZXIuaXNQYXVzZWQoKSkge1xuXHRcdFx0XHRwbGF5ZXIucGxheSgoKT0+e30sKGUpPT4ge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTs7XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzLnR1cm4oKTtcblx0XHRcdEhlbHBlci50bygnLi4vcGxheS9wbGF5Jyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdFNvbmcuZ2V0X3NvbmdfdXJsKHNvbmdfaWQsIChyZXMpPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdGxldCB1cmwgPSByZXMuZGF0YVswXS51cmw7XG5cdFx0XHRcblx0XHRcdGlmICghdXJsKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0SGVscGVyLnRvYXN0KCdub25lJywgJ+S6sueIseeahCwg5pqC5peg6K+l5q2M5puy6LWE5rqQficsIDMwMDAsIGZhbHNlLCAnYm90dG9tJyk7XG5cdFx0XHRcdH0sIDEwKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0bGV0IGNyZWF0b3JzID0gc29uZy5hcjtcblx0XHRcdGxldCBjcmVhdG9yX3N0ciA9ICcnO1xuXHRcdFx0XG5cdFx0XHRmb3IgKGxldCBjcmVhdG9yIG9mIGNyZWF0b3JzKSB7XG5cdFx0XHRcdGNyZWF0b3Jfc3RyID0gY3JlYXRvcl9zdHIgKyBjcmVhdG9yLm5hbWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGxldCBwbGF5ZWQgPSB7XG5cdFx0XHRcdGlkOiBzb25nX2lkLFxuXHRcdFx0XHR1cmw6IHVybCxcblx0XHRcdFx0bmFtZTogc29uZ19uYW1lLFxuXHRcdFx0XHRjcmVhdG9yOiBjcmVhdG9yX3N0cixcblx0XHRcdFx0Y292ZXJfaW1hZ2U6IGNvdmVyX2ltYWdlLFxuXHRcdFx0XHQvLyB0aW1lOiAwLCAvL+S4iuasoeaSreaUvueahOS9jee9rlxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLnNldF91cmwodXJsKTtcblx0XHRcdFxuXHRcdFx0Y2IgJiYgY2IocGxheWVkKTtcblx0XHRcdFxuXHRcdH0pO1xuXHRcdFxuXHR9KTtcbn1cblxuXG5QbGF5ZXJIZWxwZXIudHVybiA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xuXHRpZiAocGxheWVyLmlzUGF1c2VkKCkpIHtcblx0XHRwbGF5ZXIucGxheSgoKT0+e30sKGUpPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0fSk7O1xuXHR9ZWxzZSB7XG5cdFx0cGxheWVyLnBhdXNlKCk7XG5cdH1cblx0cmV0dXJuO1xufVxuXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuLi91dGlscy9zdG9yYWdlLmpzJ1xuaW1wb3J0IFNvbmcgZnJvbSAnLi4vbW9kZWwvc29uZy5qcyc7XG5pbXBvcnQgSGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXIuanMnXG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVySGVscGVyIiwiLy8g57yT5a2Y57uf5LiA566h55CGXG5cbmxldCBTdG9yYWdlID0ge31cblxuY29uc3QgTEFURVNUX1BMQVlFRCA9ICdsYXRlc3RfcGxheWVkJzsgLy/mnIDlkI7kuIDkuKrmkq3mlL7orrDlvZVcbmNvbnN0IENVUlJFTlRfUExBWUxJU1QgPSAnY3VycmVudF9wbGF5bGlzdCc7IC8vIOW9k+WJjeaSreaUvuWIl+ihqFxuY29uc3QgSVNfTE9HSU4gPSAnaXNfbG9naW4nOyAvLyDnmbvlvZXnirbmgIFcbmNvbnN0IFBMQVlfTU9ERSA9ICdwbGF5X21vZGUnO1xuXG5TdG9yYWdlLmlzX2xvZ2luID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBnZXQoSVNfTE9HSU4pO1xufVxuXG5TdG9yYWdlLnNldF9pc19sb2dpbiA9IGZ1bmN0aW9uKHYpIHtcblx0c2V0KElTX0xPR0lOLCB2KTtcblx0cmV0dXJuO1xufVxuXG5TdG9yYWdlLmdldF9wbGF5ZWQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGdldChMQVRFU1RfUExBWUVEKTtcbn1cblxuU3RvcmFnZS5zZXRfcGxheWVkID0gZnVuY3Rpb24odikge1xuXHRzZXQoTEFURVNUX1BMQVlFRCwgdik7XG5cdHJldHVybjtcbn1cblN0b3JhZ2UuZ2V0X2N1cnJlbnRfcGxheWxpc3QgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGdldChDVVJSRU5UX1BMQVlMSVNUKTtcbn1cblxuU3RvcmFnZS5zZXRfY3VycmVudF9wbGF5bGlzdCA9IGZ1bmN0aW9uKHYpIHtcblx0c2V0KENVUlJFTlRfUExBWUxJU1QsIHYpO1xuXHRyZXR1cm47XG59XG5cblN0b3JhZ2UuZ2V0X3BsYXlfbW9kZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZ2V0KFBMQVlfTU9ERSk7XG59XG5cblN0b3JhZ2Uuc2V0X3BsYXlfbW9kZSA9IGZ1bmN0aW9uKHYpIHtcblx0c2V0KFBMQVlfTU9ERSwgdik7XG5cdHJldHVybjtcbn1cblxuZnVuY3Rpb24gc2V0KGssIHYpIHtcblx0dHJ5IHtcblx0ICAgIHVuaS5zZXRTdG9yYWdlU3luYyhrLCB2KTtcblx0fSBjYXRjaCAoZSkge1xuXHQgICAgLy8gZXJyb3Jcblx0fVxuXHRyZXR1cm47XG59XG5cbmZ1bmN0aW9uIGdldChrKSB7XG5cdHRyeSB7XG5cdCAgICByZXR1cm4gdW5pLmdldFN0b3JhZ2VTeW5jKGspO1xuXHR9IGNhdGNoIChlKSB7XG5cdCAgICBjb25zb2xlLmxvZyhlKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0b3JhZ2U7IiwibGV0IFNvbmcgPSB7fTtcblxuU29uZy5nZXRfc29uZ191cmwgPSBmdW5jdGlvbihpZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuU09ORztcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRpZDogaWQsXG5cdFx0YnI6IDMyMDAwMFxuXHR9XG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdFxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5Tb25nLmdldF9seXJpYyA9IGZ1bmN0aW9uKGlkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MWVJJQztcblx0XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0aWQ6IGlkLFxuXHR9XG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0XG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdFxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5Tb25nLmdldF9zb25nX2RldGFpbCA9IGZ1bmN0aW9uKGlkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TT05HX0RFVEFJTDtcblx0XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0aWRzOiBpZCxcblx0fVxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdFxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNvbmc7IiwiZnVuY3Rpb24gZ2V0KHVybCwgcGFyYW1zLCBzdWNjZXNzX2NiLCBmYWlsZWRfY2IpIHtcblx0XG5cdGhlbHBlci50b2FzdCgnbG9hZGluZycsICfliqDovb3kuK0uLi4nLCAxMDAwMClcblx0XG5cdGxldCB1cmkgPSBjb25maWcuSE9TVCArIHVybDtcblxuXHR1bmkucmVxdWVzdCh7XG5cdFx0dXJsOiB1cmksIFxuXHRcdGRhdGE6IHBhcmFtcyxcblx0XHRtZXRob2Q6XCJHRVRcIixcblx0XHRzdWNjZXNzOiAocmVzKT0+e1xuXHRcdFx0XG5cdFx0XHRzdWNjZXNzX2NiICYmIHN1Y2Nlc3NfY2IocmVzKTtcblx0XHR9LFxuXHRcdGZhaWw6KHJlcykgPT4ge1xuXHRcdFx0ZmFpbGVkX2NiICYmIGZhaWxlZF9jYihyZXMpO1xuXHRcdCAgICBjb25zb2xlLmxvZygncmVxdWVzdF9mYWlsOnVybDonICsgdXJsICsgJyA7ICcgKyAnZXJyTXNnOicgKyByZXMuZXJyTXNnKTtcblx0XHR9LFxuXHRcdGNvbXBsZXRlOiAoKT0+IHtcblx0XHRcdHVuaS5oaWRlVG9hc3QoKTtcblx0XHR9XG5cdH0pO1xufSBcblxuZnVuY3Rpb24gcG9zdCh1cmwsIHBhcmFtcywgc3VjY2Vzc19jYiwgZmFpbGVkX2NiKSB7XG5cdFxuXHRoZWxwZXIudG9hc3QoJ2xvYWRpbmcnLCAn5Yqg6L295LitLi4uJywgMTAwMDApXG5cdFxuXHR1bmkucmVxdWVzdCh7XG5cdFx0dXJsOiBjb25maWcuSE9TVCArIHVybCwgXG5cdFx0ZGF0YTogcGFyYW1zLFxuXHRcdG1ldGhvZDpcIlBPU1RcIiwgICBcblx0XHRzdWNjZXNzOiAocmVzKT0+e1xuXHRcdFx0c3VjY2Vzc19jYiAmJiBzdWNjZXNzX2NiKHJlcyk7XG5cdFx0fSxcblx0XHRmYWlsOihyZXMpID0+IHtcblx0XHQgICAgY29uc29sZS5sb2coJ3JlcXVlc3RfZmFpbDp1cmw6JyArIHVybCArICcgOyAnICsgJ2Vyck1zZzonICsgcmVzLmVyck1zZyk7XG5cdFx0XHRmYWlsZWRfY2IgJiYgZmFpbGVkX2NiKHJlcyk7XG5cdFx0fSxcblx0XHRjb21wbGV0ZTogKCk9PiB7XG5cdFx0XHR1bmkuaGlkZVRvYXN0KCk7XG5cdFx0fVxuXHR9KSAgIFxufVxuXG5mdW5jdGlvbiB0ZXN0KCkge1xuXHQvLzExMS4xMy4xMDAuOTJcblx0dW5pLnJlcXVlc3Qoe1xuXHQgICAgdXJsOiAnaHR0cHM6Ly93d3cuYmFpZHUuY29tLycsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e5o6l5Y+j5Zyw5Z2A44CCXG5cdCAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG5cdCAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHQgICAgfVxuXHR9KTtcbn1cblxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHR7XG5cdGdldCxcblx0cG9zdCxcblx0dGVzdFxufSIsImxldCBVc2VyID0ge307XG5cblVzZXIuY2hlY2tfcGhvbmUgPSBmdW5jdGlvbihwaG9uZSwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuQ0hFQ0tfUEhPTkU7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0cGhvbmU6IHBob25lXG5cdH1cblx0XG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRcblx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihyZXMuZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG4vL+eZu+mZhlxuVXNlci5sb2dpbiA9IGZ1bmN0aW9uKHBob25lLCBwYXNzd29yZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuQ0VMTFBIT05FX0xPR0lOO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdHBob25lOiBwaG9uZSxcblx0XHRwYXNzd29yZDogcGFzc3dvcmRcblx0fVxuXHRcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGlmIChyZXMuZGF0YSkge1xuXHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdFx0Z2V0X3N0YXR1cygoc3RhdHVzKT0+IHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjYiAmJiBjYihzdGF0dXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdGhlbHBlci50b2FzdCgnbm9uZScsIGRhdGEubXNnLCAzMDAwLCBmYWxzZSwgJ2JvdHRvbScpO1xuXHRcdFx0fVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0fVxuXHR9KVxufVxuVXNlci5yZWcgPSBmdW5jdGlvbihwaG9uZSwgcGFzc3dvcmQsIGNhcHRjaGEsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlBIT05FX1JFRztcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRwaG9uZTogcGhvbmUsXG5cdFx0cGFzc3dvcmQ6IHBhc3N3b3JkLFxuXHRcdGNhcHRjaGE6IGNhcHRjaGFcblx0fVxuXHRcblx0cmVxdWVzdC5wb3N0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdGNiICYmIGNiKHJlcy5kYXRhKVxuXHR9KVxufVxuXG5Vc2VyLmxvZ291dCA9IGZ1bmN0aW9uKGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkxPR09VVDtcblxuXHRcblx0cmVxdWVzdC5nZXQodXJsLCB7fSwgKHJlcyk9PiB7XG5cdFx0XG5cdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IocmVzLmRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuVXNlci5zZW5kX2NhcHRjaGEgPSBmdW5jdGlvbihwaG9uZSwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuU0VORF9DQVBUQ0hBO1xuXHRcblx0XG5cdHJlcXVlc3QucG9zdCh1cmwsIHtwaG9uZTogcGhvbmV9LCAocmVzKT0+IHtcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdGNiICYmIGNiKHJlcy5kYXRhKVxuXHR9KVxufVxuVXNlci52ZXJpZnlfY2FwdGNoYSA9IGZ1bmN0aW9uKHBob25lLCBjYXB0Y2hhLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5WRVJJRllfQ0FQVENIQTtcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRwaG9uZTogcGhvbmUsXG5cdFx0Y2FwdGNoYTogY2FwdGNoYVxuXHR9XG5cdFxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRjYiAmJiBjYihyZXMuZGF0YSlcblx0fSlcbn1cblxuLy/nmbvlvZXmo4Dmn6VcblVzZXIuY2hlY2tfbG9naW4gPSBmdW5jdGlvbihjYikge1xuXHRcblx0Z2V0X3N0YXR1cygocmVzKT0+IHtcblx0XHRjYiAmJiBjYihyZXMpO1xuXHR9KVxufVxuXG4vL+iOt+WPlueUqOaIt212LOatjOWNlSwgZGosIOaUtuiXj+aVsOmHj1xuVXNlci5nZXRfc3ViY291bnQgPSBmdW5jdGlvbihjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TVUJDT1VOVDtcblx0XG5cdHJlcXVlc3QucG9zdCh1cmwsIHt9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xuXHRcdGNiICYmIGNiKGRhdGEpO1xuXHR9KVxufVxuXG4vL+iOt+WPlueUqOaIt+i1hOaWmVxuVXNlci5nZXRfdXNlcl9kZXRhaWwgPSBmdW5jdGlvbih1aWQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlVTRVJfREVUQUlMO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdHVpZDogdWlkXG5cdH1cblx0cmVxdWVzdC5wb3N0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuLy/ojrflj5bnlKjmiLfmrYzljZXliJfooahcblVzZXIuZ2V0X3BsYXlsaXN0ID0gZnVuY3Rpb24odWlkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5VU0VSX1BMQVlMSVNUO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdHVpZDogdWlkXG5cdH1cblx0cmVxdWVzdC5wb3N0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cblVzZXIuZ2V0X2xpa2VsaXN0ID0gZnVuY3Rpb24odWlkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5VU0VSX0xJS0VfTElTVDtcblx0bGV0IHBhcmFtcyA9IHtcblx0XHR1aWQ6IHVpZFxuXHR9XG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5Vc2VyLmxpa2UgPSBmdW5jdGlvbihtdXNpY19pZCwgbGlrZSwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuTElLRTtcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRpZDogbXVzaWNfaWQsXG5cdFx0bGlrZTogbGlrZVxuXHR9XG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG4vL+iOt+WPlueUqOaIt+eKtuaAgVxuZnVuY3Rpb24gZ2V0X3N0YXR1cyhjYikge1xuXHRsZXQgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuTE9HSU5fU1RBVFVTO1xuXHRcblx0cmVxdWVzdC5nZXQodXJsLCB7dGltZXN0YW1wOiB0c30sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XG5cdFx0XG5cdFx0aWYgKGRhdGEgJiYgZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygn6I635Y+W54q25oCB5aSx6LSlJyk7XG5cdFx0XHRjYiAmJiBjYihmYWxzZSk7XG5cdFx0fVxuXHR9KVxufVxuXG5cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyLmpzJztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXI7IiwibGV0IFBsYXlsaXN0ID0ge307XG5cblBsYXlsaXN0LmdldF9wbGF5bGlzdF9kZXRhaWwgPSBmdW5jdGlvbihpZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUExBWUxJU1RfREVUQUlMO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdGlkOiBpZFxuXHR9XG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdFxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWxpc3Q7IiwibGV0IFNlYXJjaCA9IHt9O1xuXG5TZWFyY2guZ2V0X2hvdF9saXN0ID0gZnVuY3Rpb24oY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuSE9UX1NFQVJDSDtcblxuXHRyZXF1ZXN0LmdldCh1cmwsIHt9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuLyoqXG4gKiDljZXpobnmkJzntKJcbiAqIOatpOaOpeWPo3Bvc3TmlrnlvI/mnInpl67popgsIOWIhumhteWPguaVsOaXoOaViFxuICogXG4gKiDlv4XpgInlj4LmlbA6IFxuICoga2V5d29yZHM6IOWFs+mUruivjVxuICogXG4gKiDlj6/pgInlj4LmlbA6IFxuICogbGltaXQgOiDov5Tlm57mlbDph48gLCDpu5jorqTkuLogMzAgXG4gKiBvZmZzZXQgOiDlgY/np7vmlbDph4/vvIznlKjkuo7liIbpobUgLCDlpoIgOiDlpoIgOigg6aG15pWwIC0xKSozMCwg5YW25LitIDMwIOS4uiBsaW1pdCDnmoTlgLwgLCDpu5jorqTkuLogMFxuICogdHlwZTog5pCc57Si57G75Z6L77yb6buY6K6k5Li6IDEg5Y2z5Y2V5puyICwg5Y+W5YC85oSP5LmJIDogMTog5Y2V5puyLCAxMDog5LiT6L6RLCAxMDA6IOatjOaJiywgMTAwMDog5q2M5Y2VLCAxMDAyOiDnlKjmiLcsIDEwMDQ6IE1WLCAxMDA2OiDmrYzor40sIDEwMDk6IOeUteWPsCwgMTAxNDog6KeG6aKRLCAxMDE4Oue7vOWQiFxuICovXG5TZWFyY2guc2VhcmNoID0gZnVuY3Rpb24oa2V5d29yZCwgdHlwZSwgcGFnZSwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuU0VBUkNIO1xuXHRsZXQgbGltaXQgPSAxMDtcblx0bGV0IG9mZnNldCA9IHBhZ2UgKiBsaW1pdDtcblx0dHlwZSA9IHR5cGUgfHwgMTtcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRrZXl3b3Jkczoga2V5d29yZCxcblx0XHRsaW1pdDogbGltaXQsXG5cdFx0b2Zmc2V0OiBvZmZzZXQsXG5cdFx0dHlwZTogdHlwZVxuXHR9XG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlYXJjaDsiLCJsZXQgT3RoZXIgPSB7fTtcblxuT3RoZXIuYmFubmVyID0gZnVuY3Rpb24oY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuQkFOTkVSO1xuXG5cdHJlcXVlc3QuZ2V0KHVybCwge3R5cGU6IDF9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuLy8g6ZyA55m76ZmG5ZCO6LCD55SoXG5PdGhlci5yZWNvbW1lbmRfcmVzb3VyY2UgPSBmdW5jdGlvbihjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5SRUNPTU1FTkRfUkVTT1VSQ0U7XG5cdFxuXHRyZXF1ZXN0LmdldCh1cmwsIHt9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE90aGVyOyIsImxldCBBbGJ1bSA9IHt9O1xuXG5BbGJ1bS5kZXRhaWwgPSBmdW5jdGlvbihpZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuQUxCVU1fREVUQUlMO1xuXG5cdHJlcXVlc3QuZ2V0KHVybCwge2lkOiBpZH0sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gQWxidW07IiwibGV0IFBlcnNvbmFsaXplZCA9IHt9O1xuXG5QZXJzb25hbGl6ZWQucGxheWxpc3QgPSBmdW5jdGlvbihjYiwgbGltaXQpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUEVSU09OQUxJWkVEX1BMQVlMSVNUO1xuXHRsaW1pdCA9IGxpbWl0IHx8IDEwO1xuXHRyZXF1ZXN0LmdldCh1cmwsIHtsaW1pdDogbGltaXR9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuUGVyc29uYWxpemVkLm5ld3NvbmcgPSBmdW5jdGlvbihjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5QRVJTT05BTElaRURfTkVXU09ORztcblx0cmVxdWVzdC5nZXQodXJsLCB7fSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzb25hbGl6ZWQ7IiwibGV0IFRvcCA9IHt9O1xuXG5Ub3AuYWxidW0gPSBmdW5jdGlvbihjYiwgbGltaXQsIG9mZnNldCkge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5UT1BfQUxCVU07XG5cdGxpbWl0ID0gbGltaXQgfHwgMTA7XG5cdG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXHRyZXF1ZXN0LmdldCh1cmwsIHtsaW1pdDogbGltaXQsIG9mZnNldDogb2Zmc2V0fSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBUb3A7IiwibGV0IFZpZGVvID0ge307XG5cblZpZGVvLmxpc3QgPSBmdW5jdGlvbihpZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVklERU9fTElTVDtcblxuXHRyZXF1ZXN0LmdldCh1cmwsIHtpZDogaWR9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZGVvOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGNmOWJhYyZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNmE5MjI4NWZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGNmOWJhYyZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidmlld1wiLCBbXG4gICAgX2MoXG4gICAgICBcInUtdGV4dFwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvbmZvbnRcIl0sXG4gICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiBfdm0uc2l6ZSArIFwicnB4XCIsIGNvbG9yOiBfdm0uY29sb3IgfSxcbiAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkNsaWNrIH1cbiAgICAgIH0sXG4gICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubmFtZSkpXVxuICAgIClcbiAgXSlcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3PlxuXHRcdDx0ZXh0IEBjbGljaz1cIm9uQ2xpY2tcIiBjbGFzcz1cImljb25mb250XCIgOnN0eWxlPVwie2ZvbnRTaXplOiBzaXplICsgJ3JweCcsY29sb3I6Y29sb3J9XCI+e3tuYW1lfX08L3RleHQ+XG5cdDwvdmlldz5cblx0XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHQvL+S8oCYjeOeahGljb24sIOi9rOaIkFxcdSBpY29uXG5cdC8vdGVtcGxhdGUg55u05o6l5L2/55SoJiN455qEaWNvbiDlj6/ku6XmraPnoa7lsZXnpLosIOS9huaYr+WmguaenOS9v+eUqOWPmOmHj+S8oCYjeOeahGljb24g5YiZ5bGV56S65aSx6LSlXG5cdC8vdGVtcGxhdGUg5Lit55u05o6l5L2/55SoXFx1IGljb24g5oiW6ICF5L2/55SoXFx1IGljb27lj5jph48g5bGV56S65pWI5p6c6YO95q2j5bi4XG5cdC8v5aaC5p6c5L2/55SocHJvcHMg5Lyg6L+H5p2l55qEXFx1IGljb24g5ZyodGVtcGxhdGXkvb/nlKgg5pi+56S65aSx6LSlLCDkvKDov4fmnaXnmoQgXFx1IGljb27kuIDooqvnvJbnoIHmiJDlrZfnrKbkuLLlhoXlrZjkuK3nmoTlgLzlhbblrp7mmK9cIlxcXFx1ZTcxNVwiXG5cdGV4cG9ydCBkZWZhdWx0e1xuXHRcdHByb3BzOiB7XG5cdFx0XHR0eXBlOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogXCJcIlxuXHRcdFx0fSxcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogXCIjRkZGRkZGXCJcblx0XHRcdH0sXG5cdFx0XHRzaXplOiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDogNDBcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRuYW1lKCl7XG5cdFx0XHRcdGxldCB0bXAgPSB0aGlzLnR5cGU7XG5cdFx0XHRcdHRtcCA9ICdcXFxcJyArICd1JyArICB0bXAucmVwbGFjZSgnJiN4JywgJycpO1xuXHRcdFx0XHR0bXAgPSB0bXAuc3Vic3RyaW5nKDAsIHRtcC5sZW5ndGgtMSk7XG5cdFx0XHRcdHJldHVybiAgZXZhbChcIidcIiArIHRtcCArIFwiJ1wiKTsgICAgICAgICAgICAgICAvLyDlsIblhoXlrZjkuK1cIlxcXFx1ZTcxNVwiIOi9rOaIkFwiXFx1ZTcxNVwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9LCBcblx0XHRjcmVhdGVkKCl7XG5cdFx0XHRcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHQgICAgb25DbGljaygpIHtcblx0XHQgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJylcblx0XHQgICAgfSBcblx0XHR9ICBcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0Lmljb25mb250IHsgIFxuXHQgICAgZm9udC1mYW1pbHk6IHdlZXhVaUljb25Gb250OyAgXG5cdH0gIFxuXHQuaWNvbmxpa2UgeyAgXG5cdCAgICB3aWR0aDogMzZweDsgIFxuXHQgICAgaGVpZ2h0OiAzNnB4OyAgXG5cdCAgICBmb250LXNpemU6IDM0cHg7ICBcblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpY29uZm9udFwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwid2VleFVpSWNvbkZvbnRcIlxuICB9LFxuICBcImljb25saWtlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzZcIixcbiAgICBcImhlaWdodFwiOiBcIjM2XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM0XCJcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vd3l5X3BsYXkubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTUxNjNkOCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3d5eV9wbGF5Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3d5eV9wbGF5Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi93eXlfcGxheS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3d5eV9wbGF5Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiN2Y2OTRiZTZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LXBsYXkvd3l5X3BsYXkubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd3l5X3BsYXkubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTUxNjNkOCZcIiIsInZhciBjb21wb25lbnRzID0ge1xuICBcInd5eS1pY29uXCI6IHJlcXVpcmUoXCJAL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZVwiKS5kZWZhdWx0XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5wbGF5ZWRcbiAgICA/IF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1wicGxheVwiXSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInBsYXktbGVmdFwiXSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0udG9fcGxheV9wYWdlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImNvdmVyLWltYWdlXCJdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByZXNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnBsYXllZC5jb3Zlcl9pbWFnZSArIFwiP3BhcmFtPTEwMHkxMDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wicGxheS1jZW50ZXJcIl0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnRvX3BsYXlfcGFnZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJtdXNpYy1uYW1lXCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wbGF5ZWQubmFtZSkpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJjcmVhdG9yLW5pY2tuYW1lXCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wbGF5ZWQuY3JlYXRvcikpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wicGxheS1yaWdodFwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaGFuZGxlLWljb25cIl0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnR1cm4oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwid3l5LWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLnBsYXlpbmcgPyBcIiYjeGU2NzI7XCIgOiBcIiYjeGU2Nzc7XCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwiNTBcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJoYW5kbGUtaWNvblwiXSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0ub3Blbl9wbGF5bGlzdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ3eXktaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIiYjeGU2NzE7XCIsIHNpemU6IFwiNDBcIiwgY29sb3I6IFwiIzAwMDAwMFwiIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJwbGF5bGlzdC1kcmF3ZXJcIiwgeyByZWY6IFwicGxheWxpc3RfZHJhd2VyXCIgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd3l5X3BsYXkubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3d5eV9wbGF5Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGxheVwiIHYtaWY9XCJwbGF5ZWRcIj5cblx0XHQ8dmlldyBjbGFzcz1cInBsYXktbGVmdFwiIEB0YXA9XCJ0b19wbGF5X3BhZ2UoKVwiPlxuXHRcdFx0PGltYWdlIGNsYXNzPVwiY292ZXItaW1hZ2VcIiAgcmVzaXplPVwiY292ZXJcIiA6c3JjPVwicGxheWVkLmNvdmVyX2ltYWdlICsgJz9wYXJhbT0xMDB5MTAwJ1wiPjwvaW1hZ2U+XG5cdFx0PC92aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwicGxheS1jZW50ZXJcIiBAdGFwPVwidG9fcGxheV9wYWdlKClcIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwibXVzaWMtbmFtZVwiPnt7cGxheWVkLm5hbWV9fTwvdGV4dD5cblx0XHRcdDx0ZXh0IGNsYXNzPVwiY3JlYXRvci1uaWNrbmFtZVwiPnt7cGxheWVkLmNyZWF0b3J9fTwvdGV4dD5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0PHZpZXcgY2xhc3M9XCJwbGF5LXJpZ2h0XCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImhhbmRsZS1pY29uXCIgQHRhcD1cInR1cm4oJGV2ZW50KVwiID5cblx0XHRcdFx0PCEtLSA8d3l5LWljb24gdHlwZT1cIiYjeGU2Nzc7XCIgc2l6ZT1cIjUwXCIgY29sb3I9XCIjMDAwMDAwXCIgPjwvd3l5LWljb24+IC0tPlxuXHRcdFx0XHQ8d3l5LWljb24gOnR5cGU9XCJwbGF5aW5nID8gJyYjeGU2NzI7JyA6ICcmI3hlNjc3OydcIiBzaXplPVwiNTBcIiBjb2xvcj1cIiMwMDAwMDBcIiA+PC93eXktaWNvbj5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwiaGFuZGxlLWljb25cIiBAdGFwPVwib3Blbl9wbGF5bGlzdCgkZXZlbnQpXCI+XG5cdFx0XHRcdDx3eXktaWNvbiB0eXBlPVwiJiN4ZTY3MTtcIiBzaXplPVwiNDBcIiBjb2xvcj1cIiMwMDAwMDBcIiA+PC93eXktaWNvbj5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0PHBsYXlsaXN0LWRyYXdlciByZWY9XCJwbGF5bGlzdF9kcmF3ZXJcIj48L3BsYXlsaXN0LWRyYXdlcj5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHd5eUljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlJztcblx0aW1wb3J0IHBsYXlsaXN0RHJhd2VyIGZyb20gJ0AvY29tcG9uZW50cy9wbGF5bGlzdF9kcmF3ZXIubnZ1ZSc7XG5cdGltcG9ydCAkcmVwZWF0ZXIgZnJvbSAnQC91dGlscy9yZXBlYXRlci5qcyc7XG5cdFxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0d3l5SWNvbixcblx0XHRcdHBsYXlsaXN0RHJhd2VyXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0YXVkaW9fdXJsOiAnaHR0cHM6Ly9tdWRpYy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tLyVFOCVBRSVCOCVFNSVCNSVBOSUyMC0lMjAlRTUlQkElOTAlRTUlQjclOUUlRTYlOUMlODgubXAzJywgLy/mtYvor5Xpn7PpopFcblx0XHRcdH07XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0XG5cdFx0XHRwbGF5aW5nKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucGxheWluZztcblx0XHRcdH0sXG5cdFx0XHRwbGF5ZWQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5wbGF5ZWQ7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRvcGVuX3BsYXlsaXN0KGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR0aGlzLiRyZWZzLnBsYXlsaXN0X2RyYXdlci5vcGVuX3BsYXlsaXN0KCk7XG5cdFx0XHR9LFxuXHRcdFx0dG9fcGxheV9wYWdlKCkge1xuXHRcdFx0XHQkcmVwZWF0ZXIuaGVscGVyLnRvKCcuLi9wbGF5L3BsYXknKTtcblx0XHRcdH0sXG5cdFx0XHR0dXJuKGV2ZW50KSB7XG5cdFx0XHRcdC8v5YiH5o2i5pKt5pS+5pqC5YGc54q25oCBXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHQkcmVwZWF0ZXIucGxheWVyLnR1cm4oKTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LnBsYXkge1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XG5cdFx0Ym9yZGVyLXRvcC13aWR0aDogMXJweDtcblx0XHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdFx0LyogcG9zaXRpb246IGZpeGVkO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwOyAqL1xuXHR9XG5cdC5wbGF5OmFjdGl2ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xuXHR9XG5cdC5wbGF5LWxlZnQge1xuXHRcdHdpZHRoOiA5MHJweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDAgMTBycHg7XG5cdH1cblx0LnBsYXktcmlnaHQge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0d2lkdGg6IDE2MHJweDtcblx0fVxuXHQuaGFuZGxlLWljb24ge1xuXHRcdHdpZHRoOiA4MHJweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdFxuXHQucGxheS1jZW50ZXIge1xuXHRcdHdpZHRoOiA1MDBycHg7XG5cdFx0aGVpZ2h0OiA5MHJweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxuXHQuY292ZXItaW1hZ2Uge1xuXHRcdHdpZHRoOiA3MHJweDtcblx0XHRoZWlnaHQ6IDcwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwO1xuXHR9XG5cdC5tdXNpYy1uYW1lIHtcblx0XHRmb250LXNpemU6IDIwcnB4O1xuXHRcdGNvbG9yOiAjMDAwMDAwO1xuXHR9XG5cdC5jcmVhdG9yLW5pY2tuYW1lIHtcblx0XHRmb250LXNpemU6IDE4cnB4O1xuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg3YzRjYjRhJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGxheWxpc3RfZHJhd2VyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vcGxheWxpc3RfZHJhd2VyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vcGxheWxpc3RfZHJhd2VyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiN2JkZjg4MWRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvcGxheWxpc3RfZHJhd2VyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg3YzRjYjRhJlwiIiwidmFyIGNvbXBvbmVudHMgPSB7XG4gIFwid3l5LWljb25cIjogcmVxdWlyZShcIkAvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlXCIpLmRlZmF1bHRcbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ1bmktcG9wLXVwXCIsXG4gICAgeyByZWY6IFwic2hvd3BvcHVwXCIsIGF0dHJzOiB7IHR5cGU6IFwiYm90dG9tXCIgfSwgb246IHsgY2hhbmdlOiBfdm0uY2hhbmdlIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiY29udGVudFwiXSB9LCBbXG4gICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJoZWFkZXJcIl0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwbGF5LXR5cGVcIl0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ3eXktaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCImI3hlNjc2O1wiLCBzaXplOiBcIjMwXCIsIGNvbG9yOiBcIiMwMDAwMDBcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMjZycHhcIiwgbWFyZ2luTGVmdDogXCIyMHJweFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6ZqP5py65pKt5pS+XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImhlYWRlci1yaWdodFwiXSB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsaXN0XCIsXG4gICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBmbGV4OiBcIjFcIiB9LCBhdHRyczogeyBzaG93U2Nyb2xsYmFyOiBcImZhbHNlXCIgfSB9LFxuICAgICAgICAgIF92bS5fbChfdm0ucGxheWxpc3QsIGZ1bmN0aW9uKHNvbmcsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiY2VsbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICByZWY6IFwic29uZ1wiICsgc29uZy5pZCxcbiAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wic29uZy1jZWxsXCJdLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBsYXkoc29uZy5pZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHNvbmcuaWQgPT0gX3ZtLnBsYXllZC5pZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ3eXktaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpblJpZ2h0OiBcIjIwcnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIiYjeGU2N2Y7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIzMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRjAwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHNvbmcuaWQgPT0gX3ZtLnBsYXllZC5pZCA/IFwiYWN0aXZlLXNvbmdcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIyNnJweFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHNvbmcubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJhci10ZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHNvbmcuaWQgPT0gX3ZtLnBsYXllZC5pZCA/IFwiYWN0aXZlLXNvbmdcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKFwiIC0gXCIgKyBzb25nLmFydGlzdHNbMF0ubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJ3eXktaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIiYjeGU2MzY7XCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwiMzBcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgwLDAsMCwuNSlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheWxpc3RfZHJhd2VyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx1bmktcG9wLXVwIHJlZj1cInNob3dwb3B1cFwiIHR5cGU9XCJib3R0b21cIiBAY2hhbmdlPVwiY2hhbmdlXCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlclwiIHN0eWxlPVwiXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicGxheS10eXBlXCI+XG5cdFx0XHRcdFx0PHd5eS1pY29uIHR5cGU9XCImI3hlNjc2O1wiIHNpemU9XCIzMFwiIGNvbG9yPVwiIzAwMDAwMFwiID48L3d5eS1pY29uPlxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAyNnJweDsgbWFyZ2luLWxlZnQ6IDIwcnB4O1wiPumaj+acuuaSreaUvjwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1yaWdodFwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8bGlzdCBzdHlsZT1cImZsZXg6IDE7XCIgc2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiPlxuXHRcdFx0XHQ8Y2VsbCBjbGFzcz1cInNvbmctY2VsbFwiIHYtZm9yPVwiKHNvbmcsIGluZGV4KSBpbiBwbGF5bGlzdFwiIDprZXk9XCJpbmRleFwiIEB0YXA9XCJwbGF5KHNvbmcuaWQpXCIgOnJlZj1cImBzb25nJHtzb25nLmlkfWBcIj5cblx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7YWxpZ24taXRlbXM6IGNlbnRlclwiICA+XG5cdFx0XHRcdFx0XHQ8d3l5LWljb24gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDIwcnB4O1wiIHYtaWY9XCJzb25nLmlkID09IHBsYXllZC5pZFwiIHR5cGU9XCImI3hlNjdmO1wiIHNpemU9XCIzMFwiIGNvbG9yPVwiI0ZGMDAwMFwiID48L3d5eS1pY29uPlxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDI2cnB4O1wiIDpjbGFzcz1cInNvbmcuaWQgPT0gcGxheWVkLmlkID8gJ2FjdGl2ZS1zb25nJyA6ICcnXCI+e3tzb25nLm5hbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYXItdGV4dFwiIDpjbGFzcz1cInNvbmcuaWQgPT0gcGxheWVkLmlkID8gJ2FjdGl2ZS1zb25nJyA6ICcnXCIgPnt7JyAtICcgKyBzb25nLmFydGlzdHNbMF0ubmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8d3l5LWljb24gdHlwZT1cIiYjeGU2MzY7XCIgc2l6ZT1cIjMwXCIgY29sb3I9XCJyZ2JhKDAsMCwwLC41KVwiID48L3d5eS1pY29uPlxuXHRcdFx0XHQ8L2NlbGw+XG5cdFx0XHQ8L2xpc3Q+XG5cdFx0PC92aWV3PlxuXHQ8L3VuaS1wb3AtdXA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgdW5pUG9wVXAgZnJvbSAnQC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlJztcblx0aW1wb3J0IHd5eUljb24gZnJvbSAnQC9jb21wb25lbnRzL3d5eS1pY29uL3d5eS1pY29uLm52dWUnO1xuXHRcblx0aW1wb3J0ICRyZXBlYXRlciBmcm9tICdAL3V0aWxzL3JlcGVhdGVyLmpzJztcblx0Y29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0dW5pUG9wVXAsXG5cdFx0XHR3eXlJY29uXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0cHJvcHM6IHtcblx0XHRcdFxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHBsYXlsaXN0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY3VycmVudF9wbGF5bGlzdDtcblx0XHRcdH0sXG5cdFx0XHRwbGF5ZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucGxheWVkO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHByZXZfc29uZygpIHtcblx0XHRcdFx0JHJlcGVhdGVyLnBsYXllci5wcmV2KChwbGF5ZWQpPT4ge1xuXHRcdFx0XHRcdHBsYXllZCAmJiB0aGlzLiRzdG9yZS5jb21taXQoJ3NldF9wbGF5ZWQnLCBwbGF5ZWQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdG5leHRfc29uZygpIHtcblx0XHRcdFx0JHJlcGVhdGVyLnBsYXllci5uZXh0KChwbGF5ZWQpPT4ge1xuXHRcdFx0XHRcdHBsYXllZCAmJiB0aGlzLiRzdG9yZS5jb21taXQoJ3NldF9wbGF5ZWQnLCBwbGF5ZWQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHBsYXkoc29uZ19pZCkge1xuXHRcdFx0XHQkcmVwZWF0ZXIucGxheWVyLnN0YXJ0KHNvbmdfaWQsIChwbGF5ZWQpPT4ge1xuXHRcdFx0XHRcdHBsYXllZCAmJiB0aGlzLiRzdG9yZS5jb21taXQoJ3NldF9wbGF5ZWQnLCBwbGF5ZWQpO1xuXHRcdFx0XHRcdHRoaXMuY2xvc2VfcGxheWxpc3QoKTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRjaGFuZ2UoZSkge1xuXHRcdFx0XHQvLyDov5nph4zmmoLml7bkvJrmiqXkuIDkuKrplJnor68sIOWboOS4uuW9k+WJjeaSreaUvueahOatjOabsiwg5LiN5Zyo5pKt5pS+5YiX6KGo5LitLCDov5nkuKrpl67popjlnKjlsIbmrYzmm7Lmt7vliqDliLDliJfooajkuK3lkI7kvJroh6rliqjop6PlhrMsIOaaguaXtuS4jeW9seWTjeS9v+eUqFxuXHRcdFx0XHRpZiAoZS5zaG93KSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+IHtcblx0XHRcdFx0XHRcdGxldCBzb25nX2lkID0gdGhpcy5wbGF5ZWQuaWQ7XG5cdFx0XHRcdFx0XHRjb25zdCBlbCA9IHRoaXMuJHJlZnNbYHNvbmcke3NvbmdfaWR9YF1bMF07XG5cdFx0XHRcdFx0XHRkb20uc2Nyb2xsVG9FbGVtZW50KGVsLCB7XG5cdFx0XHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHRcdFx0YW5pbWF0ZWQ6IGZhbHNlXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0sIDMwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGNsb3NlX3BsYXlsaXN0KCkge1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kcmVmcy5zaG93cG9wdXAuY2xvc2UoKTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRvcGVuX3BsYXlsaXN0KCkge1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kcmVmcy5zaG93cG9wdXAub3BlbigpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQuY29udGVudCB7XG5cdFx0aGVpZ2h0OiA4NTBycHg7IHdpZHRoOiA3NTBycHg7IGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVycHg7XG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM1cnB4O1xuXHR9XG5cdC5oZWFkZXIge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0aGVpZ2h0OiA4MHJweDtcblx0XHRcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcnB4O1xuXHR9XG5cdC5wbGF5LXR5cGUge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0aGVpZ2h0OiA5MHJweDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDAgMjBycHg7XG5cdH1cblx0LnBsYXktdHlwZTphY3RpdmUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcblx0fVxuXHQuc29uZy1jZWxsIHtcblx0XHRwYWRkaW5nOiAwIDIwcnB4OyBcblx0XHRoZWlnaHQ6IDgwcnB4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0LnNvbmctY2VsbDphY3RpdmUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjEpO1xuXHR9XG5cdC5hY3RpdmUtc29uZyB7XG5cdFx0Y29sb3I6ICNGRjAwMDA7XG5cdH1cblx0LmFyLXRleHR7XG5cdFx0Zm9udC1zaXplOiAxOHJweDsgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViNTI1OTk4JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYjUyNTk5OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWViNTI1OTk4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlYjUyNTk5OFwiLFxuICBcIjQ3MDY2NzI1XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkRlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViNTI1OTk4JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHMgPSB7XG4gIFwidW5pLXRyYW5zaXRpb25cIjogcmVxdWlyZShcIkAvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWVcIilcbiAgICAuZGVmYXVsdFxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wicGFnZVwiXSB9LCBbXG4gICAgX3ZtLnNob3dQb3B1cFxuICAgICAgPyBfYyhcbiAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktcG9wdXBcIl0sIG9uOiB7IHRvdWNobW92ZTogX3ZtLmNsZWFyIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInVuaS10cmFuc2l0aW9uXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBtb2RlQ2xhc3M6IFtcImZhZGVcIl0sXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBfdm0ubWFza0NsYXNzLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfdm0uZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgc2hvdzogX3ZtLnNob3dUcmFuc1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uVGFwIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidW5pLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBtb2RlQ2xhc3M6IF92bS5hbmksXG4gICAgICAgICAgICAgICAgICBzdHlsZXM6IF92bS50cmFuc0NsYXNzLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF92bS5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgIHNob3c6IF92bS5zaG93VHJhbnNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25UYXAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1wb3B1cF9fd3JhcHBlci1ib3hcIl0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xlYXIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzZDNhMTk0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yM2QzYTE5NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjNkM2ExOTQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIzZDNhMTk0XCIsXG4gIFwiNmE2MGNkZmZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjNkM2ExOTQmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wicGFnZVwiXSB9LCBbXG4gICAgX3ZtLmlzU2hvd1xuICAgICAgPyBfYyhcbiAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWY6IFwiYW5pXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXRyYW5zaXRpb25cIl0sXG4gICAgICAgICAgICBjbGFzczogW192bS5hbmkuaW5dLFxuICAgICAgICAgICAgc3R5bGU6IFwidHJhbnNmb3JtOlwiICsgX3ZtLnRyYW5zZm9ybSArIFwiO1wiICsgX3ZtLnN0eWxlc09iamVjdCxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hhbmdlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHQ8dmlldyB2LWlmPVwiaXNTaG93XCIgcmVmPVwiYW5pXCIgY2xhc3M9XCJ1bmktdHJhbnNpdGlvblwiIDpjbGFzcz1cIlthbmkuaW5dXCIgOnN0eWxlPVwiJ3RyYW5zZm9ybTonICt0cmFuc2Zvcm0rJzsnK3N0eWxlc09iamVjdFwiIEBjbGljaz1cImNoYW5nZVwiPlxuXHRcdDxzbG90Pjwvc2xvdD5cblx0PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdC8vICNpZmRlZiBBUFAtTlZVRVxuXHRjb25zdCBhbmltYXRpb24gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignYW5pbWF0aW9uJyk7XG5cdC8vICNlbmRpZlxuXHQvKipcblx0ICogVHJhbnNpdGlvbiDov4fmuKHliqjnlLtcblx0ICogQGRlc2NyaXB0aW9uIOeugOWNlei/h+a4oeWKqOeUu+e7hOS7tlxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9OTg1XG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2hvdyA9IFtmYWxzZXx0cnVlXSDmjqfliLbnu4Tku7bmmL7npLrmiJbpmpDol49cblx0ICogQHByb3BlcnR5IHtBcnJheX0gbW9kZUNsYXNzID0gW2ZhZGV8c2xpZGUtdG9wfHNsaWRlLXJpZ2h0fHNsaWRlLWJvdHRvbXxzbGlkZS1sZWZ0fHpvb20taW58em9vbS1vdXRdIOi/h+a4oeWKqOeUu+exu+Wei1xuXHQgKiAgQHZhbHVlIGZhZGUg5riQ6ZqQ5riQ5Ye66L+H5rihXG5cdCAqICBAdmFsdWUgc2xpZGUtdG9wIOeUseS4iuiHs+S4i+i/h+a4oVxuXHQgKiAgQHZhbHVlIHNsaWRlLXJpZ2h0IOeUseWPs+iHs+W3pui/h+a4oVxuXHQgKiAgQHZhbHVlIHNsaWRlLWJvdHRvbSDnlLHkuIvoh7PkuIrov4fmuKFcblx0ICogIEB2YWx1ZSBzbGlkZS1sZWZ0IOeUseW3puiHs+WPs+i/h+a4oVxuXHQgKiAgQHZhbHVlIHpvb20taW4g55Sx5bCP5Yiw5aSn6L+H5rihXG5cdCAqICBAdmFsdWUgem9vbS1vdXQg55Sx5aSn5Yiw5bCP6L+H5rihXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkdXJhdGlvbiDov4fmuKHliqjnlLvmjIHnu63ml7bpl7Rcblx0ICogQHByb3BlcnR5IHtPYmplY3R9IHN0eWxlcyDnu4Tku7bmoLflvI/vvIzlkIwgY3NzIOagt+W8j++8jOazqOaEj+W4puKAmS3igJjov57mjqXnrKbnmoTlsZ7mgKfpnIDopoHkvb/nlKjlsI/pqbzls7Dlhpnms5XlpoLvvJpgYmFja2dyb3VuZENvbG9yOnJlZGBcblx0ICovXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndW5pVHJhbnNpdGlvbicsXG5cdFx0cHJvcHM6IHtcblx0XHRcdHNob3c6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRtb2RlQ2xhc3M6IHtcblx0XHRcdFx0dHlwZTogQXJyYXksXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xuXHRcdFx0XHRcdHJldHVybiBbXVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZHVyYXRpb246IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiAzMDBcblx0XHRcdH0sXG5cdFx0XHRzdHlsZXM6IHtcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcblx0XHRcdFx0XHRyZXR1cm4ge31cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlzU2hvdzogZmFsc2UsXG5cdFx0XHRcdHRyYW5zZm9ybTogJycsXG5cdFx0XHRcdGFuaToge1xuXHRcdFx0XHRcdGluOiAnJyxcblx0XHRcdFx0XHRhY3RpdmU6ICcnXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0c2hvdzoge1xuXHRcdFx0XHRoYW5kbGVyKG5ld1ZhbCkge1xuXHRcdFx0XHRcdGlmIChuZXdWYWwpIHtcblx0XHRcdFx0XHRcdHRoaXMub3BlbigpXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0c3R5bGVzT2JqZWN0KCkge1xuXHRcdFx0XHRsZXQgc3R5bGVzID0ge1xuXHRcdFx0XHRcdC4uLnRoaXMuc3R5bGVzLFxuXHRcdFx0XHRcdCd0cmFuc2l0aW9uLWR1cmF0aW9uJzogdGhpcy5kdXJhdGlvbiAvIDEwMDAgKyAncydcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdHJhbnNmcm9tID0gJydcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiBzdHlsZXMpIHtcblx0XHRcdFx0XHRsZXQgbGluZSA9IHRoaXMudG9MaW5lKGkpXG5cdFx0XHRcdFx0dHJhbnNmcm9tICs9IGxpbmUgKyAnOicgKyBzdHlsZXNbaV0gKyAnOydcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJhbnNmcm9tXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0Ly8gdGhpcy50aW1lciA9IG51bGxcblx0XHRcdC8vIHRoaXMubmV4dFRpY2sgPSAodGltZSA9IDUwKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdC8vIFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHQvLyBcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpXG5cdFx0XHQvLyBcdHJldHVybiB0aGlzLnRpbWVyXG5cdFx0XHQvLyB9KTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGNoYW5nZSgpIHtcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snLCB7XG5cdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuXHRcdFx0XHR0aGlzLmlzU2hvdyA9IHRydWVcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSAnJ1xuXHRcdFx0XHR0aGlzLmFuaS5pbiA9ICcnXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5nZXRUcmFuZnJvbShmYWxzZSkpIHtcblx0XHRcdFx0XHRpZiAoaSA9PT0gJ29wYWNpdHknKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmFuaS5pbiA9ICdmYWRlLWluJ1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyYW5zZm9ybSArPSBgJHt0aGlzLmdldFRyYW5mcm9tKGZhbHNlKVtpXX0gYFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9hbmltYXRpb24odHJ1ZSlcblx0XHRcdFx0XHR9LCA1MClcblx0XHRcdFx0fSlcblxuXHRcdFx0fSxcblx0XHRcdGNsb3NlKHR5cGUpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHRcdHRoaXMuX2FuaW1hdGlvbihmYWxzZSlcblx0XHRcdH0sXG5cdFx0XHRfYW5pbWF0aW9uKHR5cGUpIHtcblx0XHRcdFx0bGV0IHN0eWxlcyA9IHRoaXMuZ2V0VHJhbmZyb20odHlwZSlcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXG5cdFx0XHRcdGlmICghdGhpcy4kcmVmc1snYW5pJ10pIHJldHVyblxuXHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRyZWZzWydhbmknXS5yZWYsIHtcblx0XHRcdFx0XHRzdHlsZXMsXG5cdFx0XHRcdFx0ZHVyYXRpb246IHRoaXMuZHVyYXRpb24sIC8vbXNcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxuXHRcdFx0XHRcdG5lZWRMYXlvdXQ6IGZhbHNlLFxuXHRcdFx0XHRcdGRlbGF5OiAwIC8vbXNcblx0XHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHRcdGlmICghdHlwZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5pc1Nob3cgPSBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLU5WVUVcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSAnJ1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIHN0eWxlcykge1xuXHRcdFx0XHRcdGlmIChpID09PSAnb3BhY2l0eScpIHtcblx0XHRcdFx0XHRcdHRoaXMuYW5pLmluID0gYGZhZGUtJHt0eXBlPydvdXQnOidpbid9YFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyYW5zZm9ybSArPSBgJHtzdHlsZXNbaV19IGBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGlmICghdHlwZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5pc1Nob3cgPSBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XG5cdFx0XHRcdFx0fSlcblxuXHRcdFx0XHR9LCB0aGlzLmR1cmF0aW9uKVxuXHRcdFx0XHQvLyAjZW5kaWZcblxuXHRcdFx0fSxcblx0XHRcdGdldFRyYW5mcm9tKHR5cGUpIHtcblx0XHRcdFx0bGV0IHN0eWxlcyA9IHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06ICcnXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5tb2RlQ2xhc3MuZm9yRWFjaCgobW9kZSkgPT4ge1xuXHRcdFx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnZmFkZSc6XG5cdFx0XHRcdFx0XHRcdHN0eWxlcy5vcGFjaXR5ID0gdHlwZSA/IDEgOiAwXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnc2xpZGUtdG9wJzpcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgdHJhbnNsYXRlWSgke3R5cGU/JzAnOictMTAwJSd9KSBgXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnc2xpZGUtcmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGB0cmFuc2xhdGVYKCR7dHlwZT8nMCc6JzEwMCUnfSkgYFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLWJvdHRvbSc6XG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZVkoJHt0eXBlPycwJzonMTAwJSd9KSBgXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnc2xpZGUtbGVmdCc6XG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZVgoJHt0eXBlPycwJzonLTEwMCUnfSkgYFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3pvb20taW4nOlxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGBzY2FsZSgke3R5cGU/MTowLjh9KSBgXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnem9vbS1vdXQnOlxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGBzY2FsZSgke3R5cGU/MToxLjJ9KSBgXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuIHN0eWxlc1xuXHRcdFx0fSxcblx0XHRcdF9tb2RlQ2xhc3NBcnIodHlwZSkge1xuXHRcdFx0XHRsZXQgbW9kZSA9IHRoaXMubW9kZUNsYXNzXG5cdFx0XHRcdGlmICh0eXBlb2YobW9kZSkgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRsZXQgbW9kZXN0ciA9ICcnXG5cdFx0XHRcdFx0bW9kZS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0XHRtb2Rlc3RyICs9IChpdGVtICsgJy0nICsgdHlwZSArICcsJylcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJldHVybiBtb2Rlc3RyLnN1YnN0cigwLCBtb2Rlc3RyLmxlbmd0aCAtIDEpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1vZGUgKyAnLScgKyB0eXBlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvLyBnZXRFbChlbCkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhlbCB8fCBlbC5yZWYgfHwgbnVsbCk7XG5cdFx0XHQvLyBcdHJldHVybiBlbCB8fCBlbC5yZWYgfHwgbnVsbFxuXHRcdFx0Ly8gfSxcblx0XHRcdHRvTGluZShuYW1lKSB7XG5cdFx0XHRcdHJldHVybiBuYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCItJDFcIikudG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQudW5pLXRyYW5zaXRpb24ge1xuXHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuXHR9XG5cblx0LmZhZGUtaW4ge1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblxuXHQuZmFkZS1hY3RpdmUge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQuc2xpZGUtdG9wLWluIHtcblx0XHQvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7ICovXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcblx0fVxuXG5cdC5zbGlkZS10b3AtYWN0aXZlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0Lyogb3BhY2l0eTogMTsgKi9cblx0fVxuXG5cdC5zbGlkZS1yaWdodC1pbiB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXHR9XG5cblx0LnNsaWRlLXJpZ2h0LWFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHR9XG5cblx0LnNsaWRlLWJvdHRvbS1pbiB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuXHR9XG5cblx0LnNsaWRlLWJvdHRvbS1hY3RpdmUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXG5cdC5zbGlkZS1sZWZ0LWluIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuXHR9XG5cblx0LnNsaWRlLWxlZnQtYWN0aXZlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdC56b29tLWluLWluIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG5cdH1cblxuXHQuem9vbS1vdXQtYWN0aXZlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHR9XG5cblx0Lnpvb20tb3V0LWluIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG5cdH1cbjwvc3R5bGU+IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihuYW1lKSB7XHJcbiAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShuYW1lKVxyXG59XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yM2QzYTE5NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzZDNhMTk0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiQFRSQU5TSVRJT05cIjoge1xuICAgIFwidW5pLXRyYW5zaXRpb25cIjoge1xuICAgICAgXCJ0aW1pbmdGdW5jdGlvblwiOiBcImVhc2VcIixcbiAgICAgIFwiZHVyYXRpb25cIjogMzAwLFxuICAgICAgXCJwcm9wZXJ0eVwiOiBcInRyYW5zZm9ybSxvcGFjaXR5XCJcbiAgICB9XG4gIH0sXG4gIFwidW5pLXRyYW5zaXRpb25cIjoge1xuICAgIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFwiZWFzZVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDMwMCxcbiAgICBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiBcInRyYW5zZm9ybSxvcGFjaXR5XCJcbiAgfSxcbiAgXCJmYWRlLWluXCI6IHtcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9LFxuICBcImZhZGUtYWN0aXZlXCI6IHtcbiAgICBcIm9wYWNpdHlcIjogMVxuICB9LFxuICBcInNsaWRlLXRvcC1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKC0xMDAlKVwiXG4gIH0sXG4gIFwic2xpZGUtdG9wLWFjdGl2ZVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDApXCJcbiAgfSxcbiAgXCJzbGlkZS1yaWdodC1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVYKDEwMCUpXCJcbiAgfSxcbiAgXCJzbGlkZS1yaWdodC1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWCgwKVwiXG4gIH0sXG4gIFwic2xpZGUtYm90dG9tLWluXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMTAwJSlcIlxuICB9LFxuICBcInNsaWRlLWJvdHRvbS1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgwKVwiXG4gIH0sXG4gIFwic2xpZGUtbGVmdC1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiXG4gIH0sXG4gIFwic2xpZGUtbGVmdC1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWCgwKVwiLFxuICAgIFwib3BhY2l0eVwiOiAxXG4gIH0sXG4gIFwiem9vbS1pbi1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgwLjgpXCJcbiAgfSxcbiAgXCJ6b29tLW91dC1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMSlcIlxuICB9LFxuICBcInpvb20tb3V0LWluXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDEuMilcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHQ8dmlldyB2LWlmPVwic2hvd1BvcHVwXCIgY2xhc3M9XCJ1bmktcG9wdXBcIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cImNsZWFyXCI+XG5cdFx0PHVuaS10cmFuc2l0aW9uIDptb2RlLWNsYXNzPVwiWydmYWRlJ11cIiA6c3R5bGVzPVwibWFza0NsYXNzXCIgOmR1cmF0aW9uPVwiZHVyYXRpb25cIiA6c2hvdz1cInNob3dUcmFuc1wiIEBjbGljaz1cIm9uVGFwXCIgLz5cblx0XHQ8dW5pLXRyYW5zaXRpb24gOm1vZGUtY2xhc3M9XCJhbmlcIiA6c3R5bGVzPVwidHJhbnNDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktcG9wdXBfX3dyYXBwZXItYm94XCIgQGNsaWNrLnN0b3A9XCJjbGVhclwiPlxuXHRcdFx0XHQ8c2xvdCAvPlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdW5pLXRyYW5zaXRpb24+XG5cdDwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgdW5pVHJhbnNpdGlvbiBmcm9tICcuLi91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUnXG5cblx0LyoqXG5cdCAqIFBvcFVwIOW8ueWHuuWxglxuXHQgKiBAZGVzY3JpcHRpb24g5by55Ye65bGC57uE5Lu277yM5Li65LqG6Kej5Yaz6YGu572p5by55bGC55qE6Zeu6aKYXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0zMjlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbdG9wfGNlbnRlcnxib3R0b21dIOW8ueWHuuaWueW8j1xuXHQgKiBcdEB2YWx1ZSB0b3Ag6aG26YOo5by55Ye6XG5cdCAqIFx0QHZhbHVlIGNlbnRlciDkuK3pl7TlvLnlh7pcblx0ICogXHRAdmFsdWUgYm90dG9tIOW6lemDqOW8ueWHulxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFuaW1hdGlvbiA9IFt0dXJlfGZhbHNlXSDmmK/lkKblvIDlkK/liqjnlLtcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBtYXNrQ2xpY2sgPSBbdHVyZXxmYWxzZV0g6JKZ54mI54K55Ye75piv5ZCm5YWz6Zet5by556qXXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNoYW5nZSDmiZPlvIDlhbPpl63lvLnnqpfop6blj5HvvIxlPXtzaG93OiBmYWxzZX1cblx0ICovXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICdVbmlQb3B1cCcsXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0dW5pVHJhbnNpdGlvblxuXHRcdH0sXG5cdFx0cHJvcHM6IHtcblx0XHRcdC8vIOW8gOWQr+WKqOeUu1xuXHRcdFx0YW5pbWF0aW9uOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQvLyDlvLnlh7rlsYLnsbvlnovvvIzlj6/pgInlgLzvvIx0b3A6IOmhtumDqOW8ueWHuuWxgu+8m2JvdHRvbe+8muW6lemDqOW8ueWHuuWxgu+8m2NlbnRlcu+8muWFqOWxj+W8ueWHuuWxglxuXHRcdFx0dHlwZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICdjZW50ZXInXG5cdFx0XHR9LFxuXHRcdFx0Ly8gbWFza0NsaWNrXG5cdFx0XHRtYXNrQ2xpY2s6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGR1cmF0aW9uOiAzMDAsXG5cdFx0XHRcdGFuaTogW10sXG5cdFx0XHRcdHNob3dQb3B1cDogZmFsc2UsXG5cdFx0XHRcdHNob3dUcmFuczogZmFsc2UsXG5cdFx0XHRcdG1hc2tDbGFzczoge1xuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXG5cdFx0XHRcdFx0J2JvdHRvbSc6IDAsXG5cdFx0XHRcdFx0J3RvcCc6IDAsXG5cdFx0XHRcdFx0J2xlZnQnOiAwLFxuXHRcdFx0XHRcdCdyaWdodCc6IDAsXG5cdFx0XHRcdFx0J2JhY2tncm91bmRDb2xvcic6ICdyZ2JhKDAsIDAsIDAsIC42KSdcblx0XHRcdFx0fSxcblx0XHRcdFx0dHJhbnNDbGFzczoge1xuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXG5cdFx0XHRcdFx0J2xlZnQnOiAwLFxuXHRcdFx0XHRcdCdyaWdodCc6IDAsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHR0eXBlOiB7XG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbCkge1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy50eXBlKSB7XG5cdFx0XHRcdFx0XHRjYXNlICd0b3AnOlxuXHRcdFx0XHRcdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtdG9wJ11cblx0XHRcdFx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXG5cdFx0XHRcdFx0XHRcdFx0J2xlZnQnOiAwLFxuXHRcdFx0XHRcdFx0XHRcdCdyaWdodCc6IDAsXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdGNhc2UgJ2JvdHRvbSc6XG5cdFx0XHRcdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1ib3R0b20nXVxuXHRcdFx0XHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2ZpeGVkJyxcblx0XHRcdFx0XHRcdFx0XHQnbGVmdCc6IDAsXG5cdFx0XHRcdFx0XHRcdFx0J3JpZ2h0JzogMCxcblx0XHRcdFx0XHRcdFx0XHQnYm90dG9tJzogMFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRjYXNlICdjZW50ZXInOlxuXHRcdFx0XHRcdFx0XHR0aGlzLmFuaSA9IFsnem9vbS1vdXQnLCAnZmFkZSddXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0XHRcdFx0XHQncG9zaXRpb24nOiAnZml4ZWQnLFxuXHRcdFx0XHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0XHRcdFx0XHQnZGlzcGxheSc6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdFx0XHQnZmxleERpcmVjdGlvbic6ICdjb2x1bW4nLFxuXHRcdFx0XHRcdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0XHRcdFx0XHRcdCdib3R0b20nOiAwLFxuXHRcdFx0XHRcdFx0XHRcdCdsZWZ0JzogMCxcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAwLFxuXHRcdFx0XHRcdFx0XHRcdCd0b3AnOiAwLFxuXHRcdFx0XHRcdFx0XHRcdCdqdXN0aWZ5Q29udGVudCc6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdCdhbGlnbkl0ZW1zJzogJ2NlbnRlcidcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRpZiAodGhpcy5hbmltYXRpb24pIHtcblx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IDMwMFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IDBcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGNsZWFyKGUpIHtcblx0XHRcdFx0Ly8gVE9ETyBudnVlIOWPlua2iOWGkuazoVxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHR9LFxuXHRcdFx0b3BlbigpIHtcblx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcblx0XHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdFx0XHR9LCA1MCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRzaG93OiB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2UodHlwZSkge1xuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IGZhbHNlXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcblx0XHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRcdHNob3c6IGZhbHNlXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSBmYWxzZVxuXHRcdFx0XHRcdH0sIDMwMClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRvblRhcCgpIHtcblx0XHRcdFx0aWYgKCF0aGlzLm1hc2tDbGljaykgcmV0dXJuXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuXHQudW5pLXBvcHVwIHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0dG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHQvKiAjaWZuZGVmIEg1ICovXG5cdFx0dG9wOiAwO1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHR6LWluZGV4OiA5OTtcblx0XHQvKiAjZW5kaWYgKi9cblx0fVxuXG5cdC51bmktcG9wdXBfX21hc2sge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblxuXHQubWFzay1hbmkge1xuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblx0fVxuXG5cdC51bmktdG9wLW1hc2sge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQudW5pLWJvdHRvbS1tYXNrIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0LnVuaS1jZW50ZXItbWFzayB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdC51bmktcG9wdXBfX3dyYXBwZXIge1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdH1cblxuXHQudG9wIHtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcblx0fVxuXG5cdC5ib3R0b20ge1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MDBweCk7XG5cdH1cblxuXHQuY2VudGVyIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblx0LnVuaS1wb3B1cF9fd3JhcHBlci1ib3gge1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdH1cblxuXHQuY29udGVudC1hbmkge1xuXHRcdC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICovXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cdH1cblxuXG5cdC51bmktdG9wLWNvbnRlbnQge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXG5cdC51bmktYm90dG9tLWNvbnRlbnQge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXG5cdC51bmktY2VudGVyLWNvbnRlbnQge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWViNTI1OTk4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWViNTI1OTk4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidW5pLXBvcHVwXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwXG4gIH0sXG4gIFwidW5pLXBvcHVwX19tYXNrXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjQpXCIsXG4gICAgXCJvcGFjaXR5XCI6IDBcbiAgfSxcbiAgXCJAVFJBTlNJVElPTlwiOiB7XG4gICAgXCJtYXNrLWFuaVwiOiB7XG4gICAgICBcInByb3BlcnR5XCI6IFwib3BhY2l0eVwiLFxuICAgICAgXCJkdXJhdGlvblwiOiAyMDBcbiAgICB9LFxuICAgIFwiY29udGVudC1hbmlcIjoge1xuICAgICAgXCJwcm9wZXJ0eVwiOiBcInRyYW5zZm9ybSxvcGFjaXR5XCIsXG4gICAgICBcImR1cmF0aW9uXCI6IDIwMFxuICAgIH1cbiAgfSxcbiAgXCJtYXNrLWFuaVwiOiB7XG4gICAgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogXCJvcGFjaXR5XCIsXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogMjAwXG4gIH0sXG4gIFwidW5pLXRvcC1tYXNrXCI6IHtcbiAgICBcIm9wYWNpdHlcIjogMVxuICB9LFxuICBcInVuaS1ib3R0b20tbWFza1wiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDFcbiAgfSxcbiAgXCJ1bmktY2VudGVyLW1hc2tcIjoge1xuICAgIFwib3BhY2l0eVwiOiAxXG4gIH0sXG4gIFwidW5pLXBvcHVwX193cmFwcGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIlxuICB9LFxuICBcInRvcFwiOiB7XG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKC01MDBweClcIlxuICB9LFxuICBcImJvdHRvbVwiOiB7XG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDUwMHB4KVwiXG4gIH0sXG4gIFwiY2VudGVyXCI6IHtcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDEuMilcIixcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9LFxuICBcInVuaS1wb3B1cF9fd3JhcHBlci1ib3hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiY29udGVudC1hbmlcIjoge1xuICAgIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IFwidHJhbnNmb3JtLG9wYWNpdHlcIixcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiAyMDBcbiAgfSxcbiAgXCJ1bmktdG9wLWNvbnRlbnRcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgwKVwiXG4gIH0sXG4gIFwidW5pLWJvdHRvbS1jb250ZW50XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMClcIlxuICB9LFxuICBcInVuaS1jZW50ZXItY29udGVudFwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgxKVwiLFxuICAgIFwib3BhY2l0eVwiOiAxXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheWxpc3RfZHJhd2VyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjg1MHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCIzNXJweFwiLFxuICAgIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIjogXCIzNXJweFwiXG4gIH0sXG4gIFwiaGVhZGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMCwwLDAsMC4xKVwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcnB4XCJcbiAgfSxcbiAgXCJwbGF5LXR5cGVcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTBycHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWN0aXZlXCI6IFwicmdiYSgwLDAsMCwwLjIpXCJcbiAgfSxcbiAgXCJzb25nLWNlbGxcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphY3RpdmVcIjogXCJyZ2JhKDAsMCwwLDAuMSlcIlxuICB9LFxuICBcImFjdGl2ZS1zb25nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGMDAwMFwiXG4gIH0sXG4gIFwiYXItdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd3l5X3BsYXkubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd3l5X3BsYXkubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicGxheVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMSlcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyVG9wU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFjdGl2ZVwiOiBcInJnYmEoMCwwLDAsMC4xKVwiXG4gIH0sXG4gIFwicGxheS1sZWZ0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiOTBycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGxheS1yaWdodFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE2MHJweFwiXG4gIH0sXG4gIFwiaGFuZGxlLWljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI4MHJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInBsYXktY2VudGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTAwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI5MHJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNvdmVyLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjcwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTBcbiAgfSxcbiAgXCJtdXNpYy1uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwiY3JlYXRvci1uaWNrbmFtZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zb25nX2NhcmQubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMWMxODIxZiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NvbmdfY2FyZC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zb25nX2NhcmQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3NvbmdfY2FyZC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3NvbmdfY2FyZC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImM0MWQyZDNlXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkRlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3NvbmdfY2FyZC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zb25nX2NhcmQubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMWMxODIxZiZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJtdXNpY1wiXSwgb246IHsgY2xpY2s6IF92bS5wbGF5IH0gfSwgW1xuICAgIF92bS5zaG93X251bWJlclxuICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wibXVzaWMtaW5kZXhcIl0gfSwgW1xuICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImluZGV4LXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubnVtYmVyICsgMSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX2MoXG4gICAgICBcInZpZXdcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm11c2ljLWluZm9cIl0sXG4gICAgICAgIGNsYXNzOiBfdm0uc2hvd19udW1iZXIgPyBcIlwiIDogXCJwYWRkaW5nLWxlZnRcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibXVzaWMtbmFtZVwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc29uZy5uYW1lKSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm11c2ljLWNyZWF0b3JzXCJdIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS5zb25nLmFydGlzdHMsIGZ1bmN0aW9uKGNyZWF0b3IsIGNfaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgeyBrZXk6IGNfaW5kZXgsIHN0YXRpY0NsYXNzOiBbXCJtdXNpYy1jcmVhdG9yXCJdIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoY3JlYXRvci5uYW1lICsgXCIgXCIpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJtdXNpYy1hbFwiXSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIi0gXCIgKyBfdm0uX3MoX3ZtLnNvbmcuYWxidW1fbmFtZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdXG4gICAgKSxcbiAgICBmYWxzZSA/IF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJoYW5kbGUtYXJlYVwiXSB9KSA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NvbmdfY2FyZC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc29uZ19jYXJkLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwibXVzaWNcIiBAdGFwPVwicGxheVwiPlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwibXVzaWMtaW5kZXhcIiB2LWlmPVwic2hvd19udW1iZXJcIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwiaW5kZXgtdGV4dFwiPnt7bnVtYmVyICsgMX19PC90ZXh0PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cIm11c2ljLWluZm9cIiA6Y2xhc3M9XCJzaG93X251bWJlciA/ICcnIDogJ3BhZGRpbmctbGVmdCdcIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwibXVzaWMtbmFtZVwiPnt7c29uZy5uYW1lfX08L3RleHQ+XG5cdFx0XHQ8dmlldyBjbGFzcz1cIm11c2ljLWNyZWF0b3JzXCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibXVzaWMtY3JlYXRvclwiIHYtZm9yPVwiKGNyZWF0b3IsIGNfaW5kZXgpIGluIHNvbmcuYXJ0aXN0c1wiIDprZXk9XCJjX2luZGV4XCI+e3tjcmVhdG9yLm5hbWUgKyAnICd9fTwvdGV4dD5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJtdXNpYy1hbFwiPi0ge3tzb25nLmFsYnVtX25hbWV9fTwvdGV4dD5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJoYW5kbGUtYXJlYVwiIHYtaWY9XCJmYWxzZVwiPlxuXHRcdFx0XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgJHJlcGVhdGVyIGZyb20gJ0AvdXRpbHMvcmVwZWF0ZXIuanMnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHNvbmc6IHtcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRudW1iZXI6IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiAwXG5cdFx0XHR9LFxuXHRcdFx0c2hvd19udW1iZXI6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHRwbGF5bGlzdF9pZDoge1xuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6IDBcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRwbGF5ZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucGxheWVkO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Ly8g5pKt5pS+XG5cdFx0XHQvLyDlpoLmnpzpgInkuK3mrYzmm7LlkozlupXpg6jmkq3mlL7nu4Tku7bmmK/lkIzkuIDpppbmrYwsIOWImei3s+i9rOWIsOaSreaUvumhteW5tuW8gOWni+aSreaUvlxuXHRcdFx0Ly8g5aaC5p6c5LiN5ZCMLCDliJnlvIDlp4vmkq3mlL7mlrDpgInkuK3nmoTmrYzmm7IsIOabtOaWsOaSreaUvue7hOS7tuS/oeaBrywg5LiN6Lez6L2sXG5cdFx0XHRwbGF5KCkge1xuXHRcdFx0XHRsZXQgc29uZ19pZCA9IHRoaXMuc29uZy5pZDtcblx0XHRcdFx0JHJlcGVhdGVyLnBsYXllci5zdGFydChzb25nX2lkLCAocGxheWVkKT0+IHtcblx0XHRcdFx0XHRwbGF5ZWQgJiYgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRfcGxheWVkJywgcGxheWVkKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOiOt+WPluebuOWQjOatjOWNleS4i+eahOatjOabsueUn+aIkOS4gOS4quaSreaUvuWIl+ihqCwg5aaC5L2V5rKh5pyJ5oyH5a6a5q2M5Y2VaWQsIOmCo+S5iOS7heWwhuatpOmmluatjHB1c2jliLDmkq3mlL7liJfooajkuK1cblx0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLnBsYXlsaXN0X2lkKSB7XG5cdFx0XHRcdFx0bGV0IHBsYXlsaXN0X2lkID0gdGhpcy5wbGF5bGlzdF9pZDtcblx0XHRcdFx0XHQkcmVwZWF0ZXIucGxheWxpc3QuZ2V0X3BsYXlsaXN0X2RldGFpbChwbGF5bGlzdF9pZCwgKGRhdGEpPT4ge1xuXHRcdFx0XHRcdFx0bGV0IHBsYXlsaXN0ID0gZGF0YS5wbGF5bGlzdDtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGV0IGZvcm1hdF9zb25ncyA9IFtdO1xuXHRcdFx0XHRcdFx0cGxheWxpc3QudHJhY2tzLmZvckVhY2goKHNvbmcpPT4ge1xuXHRcdFx0XHRcdFx0XHRsZXQgZm9ybWF0X3NvbmcgPSB7fTtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0X3NvbmcuaWQgPSBzb25nLmlkO1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRfc29uZy5uYW1lID0gc29uZy5uYW1lO1xuXHRcdFx0XHRcdFx0XHRmb3JtYXRfc29uZy5hcnRpc3RzID0gc29uZy5hcjtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0X3NvbmcuYWxidW1fbmFtZSA9IHNvbmcuYWwubmFtZTtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0X3NvbmdzLnB1c2goZm9ybWF0X3NvbmcpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0X2N1cnJlbnRfcGxheWxpc3QnLCBmb3JtYXRfc29uZ3MpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5ZyocGxheWxpc3RfaWQsIOWImeebtOaOpeWwhuatpOatjOabsuaPkuWFpeWIsOaSreaUvuWIl+ihqOS4rVxuXHRcdFx0XHRcdGxldCBzb25nID0gdGhpcy5zb25nO1xuXHRcdFx0XHRcdGxldCBmb3JtYXRfc29uZyA9IHt9O1xuXHRcdFx0XHRcdGZvcm1hdF9zb25nLmlkID0gc29uZy5pZDtcblx0XHRcdFx0XHRmb3JtYXRfc29uZy5uYW1lID0gc29uZy5uYW1lO1xuXHRcdFx0XHRcdGZvcm1hdF9zb25nLmFydGlzdHMgPSBzb25nLmFydGlzdHM7XG5cdFx0XHRcdFx0Zm9ybWF0X3NvbmcuYWxidW1fbmFtZSA9IHNvbmcuYWxidW1fbmFtZTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3B1c2hfY3VycmVudF9wbGF5bGlzdCcsIGZvcm1hdF9zb25nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5tdXNpYyB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHR3aWR0aDogNzUwcnB4O1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdFxuXHR9XG5cdC5tdXNpYzphY3RpdmV7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xuXHR9XG5cdC5tdXNpYy1pbmRleCB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHR3aWR0aDogMTAwcnB4O1xuXHR9XG5cdC5pbmRleC10ZXh0IHtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG5cdH1cblx0Lm11c2ljLWluZm8ge1xuXHRcdGZsZXg6IDE7XG5cdFx0aGVpZ2h0OiAxMDBycHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XG5cdH1cblx0LnBhZGRpbmctbGVmdCB7XG5cdFx0cGFkZGluZy1sZWZ0OiAzMHJweDtcblx0fVxuXHQubXVzaWMtbmFtZSB7XG5cdFx0Zm9udC1zaXplOiAyNnJweDtcblx0fVxuXHQubXVzaWMtY3JlYXRvcnMge1xuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdH1cblx0Lm11c2ljLWNyZWF0b3Ige1xuXHRcdGZvbnQtc2l6ZTogMThycHg7XG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcblx0fVxuXHQubXVzaWMtYWwge1xuXHRcdGZvbnQtc2l6ZTogMThycHg7XG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcblx0fVxuXHQuaGFuZGxlLWFyZWEge1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdHdpZHRoOiAxMjBycHg7XG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc29uZ19jYXJkLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NvbmdfY2FyZC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJtdXNpY1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWN0aXZlXCI6IFwicmdiYSgwLDAsMCwwLjEpXCJcbiAgfSxcbiAgXCJtdXNpYy1pbmRleFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIxMDBycHhcIlxuICB9LFxuICBcImluZGV4LXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMylcIlxuICB9LFxuICBcIm11c2ljLWluZm9cIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwicGFkZGluZy1sZWZ0XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm11c2ljLW5hbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNnJweFwiXG4gIH0sXG4gIFwibXVzaWMtY3JlYXRvcnNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCJtdXNpYy1jcmVhdG9yXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMThycHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjMpXCJcbiAgfSxcbiAgXCJtdXNpYy1hbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zKVwiXG4gIH0sXG4gIFwiaGFuZGxlLWFyZWFcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEyMHJweFwiXG4gIH1cbn0iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9zZWFyY2gvc2VhcmNoLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3NlYXJjaC9zZWFyY2gnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc2VhcmNoLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY4N2U2MTAmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9zZWFyY2gubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTMzMDFjYTNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL3BhZ2VzL3NlYXJjaC9zZWFyY2gubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2ODdlNjEwJm1wVHlwZT1wYWdlXCIiLCJ2YXIgY29tcG9uZW50cyA9IHtcbiAgXCJ1bmktdHJhbnNpdGlvblwiOiByZXF1aXJlKFwiQC9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZVwiKVxuICAgIC5kZWZhdWx0LFxuICBcInd5eS1pY29uXCI6IHJlcXVpcmUoXCJAL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZVwiKS5kZWZhdWx0XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlXCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBmbGV4OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidW5pLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBtb2RlQ2xhc3M6IF92bS5tb2RlX2NsYXNzLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IF92bS50cmFuc2Zyb21fY2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6ICFfdm0uc2hvd19yZXN1bHRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICFfdm0uc2hvd19yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiY29udGVudFwiLCBcInNlYXJjaC1wYWdlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaG93U2Nyb2xsYmFyOiBcImZhbHNlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0aXRsZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXBwZW5kOiBcInRyZWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0aXRsZS10ZXh0XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y6G5Y+y6K6w5b2VXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNlYXJjaC1oaXN0b3J5XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0aXRsZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGl0bGUtdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIueDreaQnOamnFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaG90X2xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJob3QtaXRlbVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmhvdF9zZWFyY2goaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImhvdC1pdGVtLWluZGV4XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImluZGV4LXRleHRcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaW5kZXggKyAxKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiaG90LWluZm9cIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImtleV93b3JkXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5zZWFyY2hXb3JkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJkZXNjcmlwdGlvblwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5jb250ZW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVuaS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZUNsYXNzOiBfdm0ubW9kZV9jbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBfdm0udHJhbnNmcm9tX2NsYXNzLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiBfdm0uc2hvd19yZXN1bHRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY29udGVudFwiLCBcInJlc3VsdC1wYWdlXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNjcm9sbC1iYXItdmlld1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxXaXRoQW5pbWF0aW9uOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Njcm9sbGJhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSW50b1ZpZXc6IF92bS5jdXJyZW50X3Njcm9sbF9pbnRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInNjcm9sbC1iYXJcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnJlc3VsdF9iYXJzLCBmdW5jdGlvbihpdGVtLCBiYXJfaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGJhcl9pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYmFyLW5hbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IGl0ZW0uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25fdGFiX3RhcChiYXJfaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYmFyLW5hbWUtdGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRfYmFyX2luZGV4ID09IGJhcl9pbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZS1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3dpcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJiYXItYm94XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IF92bS5jdXJyZW50X2Jhcl9pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lwSGlkZGVuSXRlbUxheW91dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS50YWJfY2hhbmdlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yZXN1bHRfYmFycywgZnVuY3Rpb24ocGFnZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwic3dpcGVyLWl0ZW1cIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlLmlkID09IDEwMThcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZmxleDogXCIxXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNob3dTY3JvbGxiYXI6IFwiZmFsc2VcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbXByZWhlbnNpdmVfZGF0YSwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRfaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRfaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09IFwic29uZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGl0bGVcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWNleabslwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wodmFsdWUuc29uZ3MsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb25nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzX2luZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwic29uZy1jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHNfaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfbnVtYmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbmc6IHNvbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PSBcInBsYXlMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0aXRsZVwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5q2M5Y2VXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucGxheUxpc3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihwbGF5bGlzdCwgcF9pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInBsYXlsaXN0LWNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwX2luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWxpc3Q6IHBsYXlsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFnZS5pZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXg6IFwiMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaG93U2Nyb2xsYmFyOiBcImZhbHNlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInRvcC1iYXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImljb25cIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ3eXktaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiJiN4ZTYwMTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0b3AtYmFyLXRleHRcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmkq3mlL7lhajpg6hcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zb25nc19kYXRhLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29uZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc19pbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHNfaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic29uZy1jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X251bWJlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29uZzogc29uZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBhZ2UuaWQgPT0gMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmbGV4OiBcIjFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2hvd1Njcm9sbGJhcjogXCJmYWxzZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGxheWxpc3RfZGF0YSwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBfaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHBfaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwbGF5bGlzdC1jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYXlsaXN0OiBwbGF5bGlzdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImxpc3RcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXBwZW5kOiBcInRyZWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHTmnKrlrozmiJBcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0ucGxheWVkID8gX2MoXCJ3eXktcGxheVwiKSA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHRcdDx2aWV3IHN0eWxlPVwiZmxleDogMTtcIj5cblx0XHRcdDx1bmktdHJhbnNpdGlvbiA6ZHVyYXRpb249XCIyMDBcIiA6bW9kZS1jbGFzcz1cIm1vZGVfY2xhc3NcIiA6c3R5bGVzPVwidHJhbnNmcm9tX2NsYXNzXCIgOnNob3c9XCIhc2hvd19yZXN1bHRcIj5cblx0XHRcdFx0PGxpc3Qgdi1pZj1cIiFzaG93X3Jlc3VsdFwiIHNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiBjbGFzcz1cImNvbnRlbnQgc2VhcmNoLXBhZ2VcIj5cblx0XHRcdFx0XHQ8Y2VsbCBjbGFzcz1cInRpdGxlXCIgdi1pZj1cImZhbHNlXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLXRleHRcIj7ljoblj7LorrDlvZU8L3RleHQ+XG5cdFx0XHRcdFx0PC9jZWxsPlxuXHRcdFx0XHRcdDxjZWxsIGNsYXNzPVwic2VhcmNoLWhpc3RvcnlcIj48L2NlbGw+XG5cdFx0XHRcdFx0PGNlbGwgY2xhc3M9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZS10ZXh0XCI+54Ot5pCc5qacPC90ZXh0PlxuXHRcdFx0XHRcdDwvY2VsbD5cblx0XHRcdFx0XHQ8Y2VsbCBjbGFzcz1cImhvdC1pdGVtXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGhvdF9saXN0XCIgOmtleT1cImluZGV4XCIgQHRhcD1cImhvdF9zZWFyY2goaXRlbSlcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaG90LWl0ZW0taW5kZXhcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpbmRleC10ZXh0XCI+e3tpbmRleCArIDF9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaG90LWluZm9cIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJrZXlfd29yZFwiPnt7aXRlbS5zZWFyY2hXb3JkfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGVzY3JpcHRpb25cIj57e2l0ZW0uY29udGVudH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvY2VsbD5cblx0XHRcdFx0PC9saXN0PlxuXHRcdFx0PC91bmktdHJhbnNpdGlvbj5cblx0XHRcdFxuXHRcdFx0PCEtLSDmkJzntKLpobVFTkQgLS0+XG5cdFx0XHRcblx0XHRcdDwhLS0g5pCc57Si57uT5p6c6aG1IC0tPlxuXHRcdFx0PHVuaS10cmFuc2l0aW9uIDpkdXJhdGlvbj1cIjIwMFwiIDptb2RlLWNsYXNzPVwibW9kZV9jbGFzc1wiIDpzdHlsZXM9XCJ0cmFuc2Zyb21fY2xhc3NcIiA6c2hvdz1cInNob3dfcmVzdWx0XCI+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnQgcmVzdWx0LXBhZ2VcIj5cblx0XHRcdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXdpdGgtYW5pbWF0aW9uPVwidHJ1ZVwiIGNsYXNzPVwic2Nyb2xsLWJhci12aWV3XCIgOnNjcm9sbD1cImZhbHNlXCIgOnNjcm9sbC14PVwidHJ1ZVwiIDpzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgOnNjcm9sbC1pbnRvLXZpZXc9XCJjdXJyZW50X3Njcm9sbF9pbnRvXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNjcm9sbC1iYXJcIiA+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFyLW5hbWVcIiB2LWZvcj1cIihpdGVtLCBiYXJfaW5kZXgpIGluIHJlc3VsdF9iYXJzXCIgOmtleT1cImJhcl9pbmRleFwiIEB0YXA9XCJvbl90YWJfdGFwKGJhcl9pbmRleClcIiA6aWQ9XCJpdGVtLmlkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiY3VycmVudF9iYXJfaW5kZXggPT0gYmFyX2luZGV4ID8gJ2FjdGl2ZS1iYXInIDogJydcIiBjbGFzcz1cImJhci1uYW1lLXRleHRcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC9zY3JvbGwtdmlldz5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8c3dpcGVyIGNsYXNzPVwiYmFyLWJveFwiIDpjdXJyZW50PVwiY3VycmVudF9iYXJfaW5kZXhcIiBza2lwLWhpZGRlbi1pdGVtLWxheW91dCBAY2hhbmdlPVwidGFiX2NoYW5nZWRcIj5cblx0XHRcdFx0XHRcdDxzd2lwZXItaXRlbSB2LWZvcj1cIihwYWdlLCBpbmRleCkgaW4gcmVzdWx0X2JhcnNcIiA6a2V5PVwiaW5kZXhcIiA+XG5cdFx0XHRcblx0XHRcdFx0XHRcdFx0PCEtLSDnu7zlkIggLS0+XG5cdFx0XHRcdFx0XHRcdDxsaXN0IHYtaWY9XCJwYWdlLmlkID09IDEwMThcIiBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgc3R5bGU9XCJmbGV4OiAxO1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxjZWxsIHYtZm9yPVwiKHZhbHVlLCBrZXksIHRfaW5kZXgpIGluIGNvbXByZWhlbnNpdmVfZGF0YVwiIDprZXk9XCJ0X2luZGV4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwia2V5ID09ICdzb25nJ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZS10ZXh0XCI+5Y2V5puyPC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c29uZy1jYXJkIDpzaG93X251bWJlcj1cImZhbHNlXCIgIHYtZm9yPVwiKHNvbmcsIHNfaW5kZXgpIGluIHZhbHVlLnNvbmdzXCIgOnNvbmc9XCJzb25nXCIgOmtleT1cInNfaW5kZXhcIj48L3NvbmctY2FyZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwia2V5ID09ICdwbGF5TGlzdCdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGUtdGV4dFwiPuatjOWNlTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGxheWxpc3QtY2FyZCB2LWZvcj1cIihwbGF5bGlzdCwgcF9pbmRleCkgaW4gdmFsdWUucGxheUxpc3RzXCIgOmtleT1cInBfaW5kZXhcIiA6cGxheWxpc3Q9XCJwbGF5bGlzdFwiPjwvcGxheWxpc3QtY2FyZD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdDwvY2VsbD5cblx0XHRcdFx0XHRcdFx0PC9saXN0PlxuXHRcdFx0XHRcdFx0XHQ8IS0tIOe7vOWQiEVORCAtLT5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdDwhLS0g5Y2V5puyIC0tPlxuXHRcdFx0XHRcdFx0XHQ8bGlzdCBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgc3R5bGU9XCJmbGV4OiAxO1wiIHYtZWxzZS1pZj1cInBhZ2UuaWQgPT0gMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxjZWxsIGNsYXNzPVwidG9wLWJhclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx3eXktaWNvbiB0eXBlPVwiJiN4ZTYwMTtcIiBzaXplPVwiNDBcIiBjb2xvcj1cIiMwMDAwMDBcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidG9wLWJhci10ZXh0XCI+5pKt5pS+5YWo6YOoPC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDwvY2VsbD5cblx0XHRcdFx0XHRcdFx0XHQ8Y2VsbCB2LWZvcj1cIihzb25nLCBzX2luZGV4KSBpbiBzb25nc19kYXRhXCIgOmtleT1cInNfaW5kZXhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzb25nLWNhcmQgOnNob3dfbnVtYmVyPVwiZmFsc2VcIiA6c29uZz1cInNvbmdcIj48L3NvbmctY2FyZD5cblx0XHRcdFx0XHRcdFx0XHQ8L2NlbGw+XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdDwvbGlzdD5cblx0XHRcdFx0XHRcdFx0PCEtLSDljZXmm7JFTkQgLS0+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8IS0tIOatjOWNlSAtLT5cblx0XHRcdFx0XHRcdFx0PGxpc3Qgc2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIHN0eWxlPVwiZmxleDogMTtcIiB2LWVsc2UtaWY9XCJwYWdlLmlkID09IDEwMDBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8Y2VsbCB2LWZvcj1cIihwbGF5bGlzdCwgcF9pbmRleCkgaW4gcGxheWxpc3RfZGF0YVwiIDprZXk9XCJwX2luZGV4XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGxheWxpc3QtY2FyZCA6cGxheWxpc3Q9XCJwbGF5bGlzdFwiPjwvcGxheWxpc3QtY2FyZD5cblx0XHRcdFx0XHRcdFx0XHQ8L2NlbGw+XG5cdFx0XHRcdFx0XHRcdDwvbGlzdD5cblx0XHRcdFx0XHRcdFx0PCEtLSDmrYzljZVFTkQgLS0+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8bGlzdCB2LWVsc2U+XG5cdFx0XHRcdFx0XHRcdFx0PGNlbGw+XG5cdFx0XHRcdFx0XHRcdFx0XHTmnKrlrozmiJBcblx0XHRcdFx0XHRcdFx0XHQ8L2NlbGw+XG5cdFx0XHRcdFx0XHRcdDwvbGlzdD5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L3N3aXBlci1pdGVtPlxuXHRcdFx0XHRcdDwvc3dpcGVyPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3VuaS10cmFuc2l0aW9uPlxuXHRcdDwvdmlldz5cblx0XHQ8IS0tIOaQnOe0oumhtSAtLT5cblx0XHRcblx0XHRcblx0XHRcblx0XHRcblx0XHQ8IS0tIOaQnOe0oue7k+aenOmhtUVORCAtLT5cblx0XHRcblx0XHQ8d3l5LXBsYXkgdi1pZj1cInBsYXllZFwiPjwvd3l5LXBsYXk+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB1bmlUcmFuc2l0aW9uIGZyb20gJ0AvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUnXG5cdGltcG9ydCB3eXlQbGF5IGZyb20gJ0AvY29tcG9uZW50cy93eXktcGxheS93eXlfcGxheS5udnVlJztcblx0aW1wb3J0IHd5eUljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlJztcblx0aW1wb3J0IHNvbmdDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc29uZ19jYXJkLm52dWUnO1xuXHRpbXBvcnQgcGxheWxpc3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheWxpc3RfY2FyZC5udnVlJztcblx0aW1wb3J0ICRyZXBlYXRlciBmcm9tICdAL3V0aWxzL3JlcGVhdGVyLmpzJztcblx0XG5cdFxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0dW5pVHJhbnNpdGlvbixcblx0XHRcdHd5eVBsYXksXG5cdFx0XHRzb25nQ2FyZCxcblx0XHRcdHBsYXlsaXN0Q2FyZCxcblx0XHRcdHd5eUljb25cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRob3RfbGlzdDogW10sXG5cdFx0XHRcdHNob3dfcmVzdWx0OiBmYWxzZSxcblx0XHRcdFx0XG5cdFx0XHRcdHJlc3VsdF9iYXJzOiBbXG5cdFx0XHRcdFx0e2lkOiAxMDE4LCBuYW1lOiAn57u85ZCIJywga2V5OiAnY29tcHJlaGVuc2l2ZSd9LFxuXHRcdFx0XHRcdHtpZDogMSwgbmFtZTogJ+WNleabsicsIGtleTogJ3NvbmcnfSxcblx0XHRcdFx0XHQvLyB7aWQ6IDEwMTQsIG5hbWU6ICfop4bpopEnLCBrZXk6ICdtdid9LFxuXHRcdFx0XHRcdC8vIHtpZDogMTAwLCBuYW1lOiAn5q2M5omLJywga2V5OiAnYXJ0aXN0J30sXG5cdFx0XHRcdFx0Ly8ge2lkOiAxMCwgbmFtZTogJ+S4k+i+kScsIGtleTogJ2FsYnVtJ30sXG5cdFx0XHRcdFx0e2lkOiAxMDAwLCBuYW1lOiAn5q2M5Y2VJywga2V5OiAncGxheWxpc3QnfSxcblx0XHRcdFx0XHQvLyB7aWQ6IDEwMDksIG5hbWU6ICfkuLvmkq3nlLXlj7AnLCBrZXk6ICdkaid9LFxuXHRcdFx0XHRcdC8vIHtpZDogMTAwMiwgbmFtZTogJ+eUqOaItycsIGtleTogJ3VzZXInfSxcblx0XHRcdFx0XSxcblx0XHRcdFx0XG5cdFx0XHRcdGN1cnJlbnRfa2V5d29yZDogJycsXG5cdFx0XHRcdGN1cnJlbnRfc2VhcmNoX3Jlc3VsdDoge30sXG5cdFx0XHRcdGN1cnJlbnRfcGFnZTogMCxcblx0XHRcdFx0Y3VycmVudF9iYXJfaW5kZXg6IDAsXG5cdFx0XHRcdGN1cnJlbnRfc2Nyb2xsX2ludG86ICcnLFxuXHRcdFx0XHRcblx0XHRcdFx0bW9kZV9jbGFzczogWydmYWRlJ10sXG5cdFx0XHRcdHRyYW5zZnJvbV9jbGFzczoge1xuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXG5cdFx0XHRcdFx0J2JvdHRvbSc6ICc5MHJweCcsXG5cdFx0XHRcdFx0J3RvcCc6IDAsXG5cdFx0XHRcdFx0J2xlZnQnOiAwLFxuXHRcdFx0XHRcdCdyaWdodCc6IDAsXG5cdFx0XHRcdFx0J2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxuXHRcdFx0XHRcdCdhbGlnbi1pdGVtcyc6ICdjZW50ZXInXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHRjdXJyZW50X2Jhcl9pbmRleChpbmRleCwgb2xkX2luZGV4KSB7XG5cdFx0XHRcdGlmICghdGhpcy5zaG93X3Jlc3VsdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXRoaXMuY3VycmVudF9zZWFyY2hfcmVzdWx0W3RoaXMucmVzdWx0X2JhcnNbaW5kZXhdLmtleV0pIHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHBsYXllZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5wbGF5ZWQ7XG5cdFx0XHR9LFxuXHRcdFx0cGxheWxpc3RfZGF0YSgpIHtcblx0XHRcdFx0aWYgKCF0aGlzLnNlYXJjaF9yZXN1bHRfaW5pdF9jaGVjaygncGxheWxpc3QnKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHBsYXlsaXN0cyA9IHRoaXMuY3VycmVudF9zZWFyY2hfcmVzdWx0LnBsYXlsaXN0LnBsYXlsaXN0cztcblx0XHRcdFx0bGV0IG5ld19wbGF5bGlzdHMgPSBbXTtcblx0XHRcdFx0cGxheWxpc3RzLmZvckVhY2goKHBsYXlsaXN0KT0+IHtcblx0XHRcdFx0XHRsZXQgdG1wX3BsYXlsaXN0ID0ge307XG5cdFx0XHRcdFx0dG1wX3BsYXlsaXN0LmlkID0gcGxheWxpc3QuaWQ7XG5cdFx0XHRcdFx0dG1wX3BsYXlsaXN0LmNvdmVySW1nVXJsID0gcGxheWxpc3QuY292ZXJJbWdVcmw7XG5cdFx0XHRcdFx0dG1wX3BsYXlsaXN0Lm5hbWUgPSBwbGF5bGlzdC5uYW1lO1xuXHRcdFx0XHRcdHRtcF9wbGF5bGlzdC50cmFja0NvdW50ID0gcGxheWxpc3QudHJhY2tDb3VudDtcblx0XHRcdFx0XHR0bXBfcGxheWxpc3QuY3JlYXRvciA9IHBsYXlsaXN0LmNyZWF0b3I7XG5cdFx0XHRcdFx0bmV3X3BsYXlsaXN0cy5wdXNoKHRtcF9wbGF5bGlzdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbmV3X3BsYXlsaXN0cztcblx0XHRcdH0sXG5cdFx0XHRjb21wcmVoZW5zaXZlX2RhdGEoKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIXRoaXMuc2VhcmNoX3Jlc3VsdF9pbml0X2NoZWNrKCdjb21wcmVoZW5zaXZlJykpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGxldCBjb21wcmVoZW5zaXZlID0gdGhpcy5jdXJyZW50X3NlYXJjaF9yZXN1bHQuY29tcHJlaGVuc2l2ZTtcblx0XHRcdFx0aWYgKGNvbXByZWhlbnNpdmUuc29uZy5zb25ncykgeyAvL2Zvcm1hdCBzb25nc+S/oeaBr1xuXHRcdFx0XHRcdGNvbXByZWhlbnNpdmUuc29uZy5zb25ncy5mb3JFYWNoKChzb25nKT0+IHtcblx0XHRcdFx0XHRcdHNvbmcuaWQgPSBzb25nLmlkO1xuXHRcdFx0XHRcdFx0c29uZy5uYW1lID0gc29uZy5uYW1lO1xuXHRcdFx0XHRcdFx0c29uZy5hcnRpc3RzID0gc29uZy5hcjtcblx0XHRcdFx0XHRcdHNvbmcuYWxidW1fbmFtZSA9IHNvbmcuYWwubmFtZTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjb21wcmVoZW5zaXZlXG5cdFx0XHR9LFxuXHRcdFx0c29uZ3NfZGF0YTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIXRoaXMuc2VhcmNoX3Jlc3VsdF9pbml0X2NoZWNrKCdzb25nJykpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRfc2VhcmNoX3Jlc3VsdC5zb25nLnNvbmdDb3VudCA9PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBzb25ncyA9IHRoaXMuY3VycmVudF9zZWFyY2hfcmVzdWx0LnNvbmcuc29uZ3M7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgZm9ybWF0X3NvbmdzID0gW107XG5cdFx0XHRcdHNvbmdzLmZvckVhY2goKHNvbmcpPT4ge1xuXHRcdFx0XHRcdGxldCBmb3JtYXRfc29uZyA9IHt9O1xuXHRcdFx0XHRcdGZvcm1hdF9zb25nLmlkID0gc29uZy5pZDtcblx0XHRcdFx0XHRmb3JtYXRfc29uZy5uYW1lID0gc29uZy5uYW1lO1xuXHRcdFx0XHRcdGZvcm1hdF9zb25nLmFydGlzdHMgPSBzb25nLmFydGlzdHM7XG5cdFx0XHRcdFx0Zm9ybWF0X3NvbmcuYWxidW1fbmFtZSA9IHNvbmcuYWxidW0ubmFtZTtcblx0XHRcdFx0XHRmb3JtYXRfc29uZ3MucHVzaChmb3JtYXRfc29uZyk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gZm9ybWF0X3NvbmdzO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25CYWNrUHJlc3MoKSB7XG5cdFx0XHQvLyDlpoLmnpzlvZPliY3mmL7npLrnmoTmmK/mkJzntKLnu5PmnpzpobUsIOWImeaLpuaIqui/lOWbnuS6i+S7tiwg5bm25YWz6Zet57uT5p6c6aG1XG5cdFx0XHRpZiAodGhpcy5zaG93X3Jlc3VsdCkge1xuXHRcdFx0XHR0aGlzLmNsb3NlX3Jlc3VsdF9wYWdlKCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdHVuaS4kb24oJ3NlYXJjaCcsIHRoaXMub25fc2VhcmNoKTtcblx0XHRcdHRoaXMuZ2V0X2hvdF9saXN0KClcblx0XHR9LFxuXHRcdGJlZm9yZURlc3Ryb3koKSB7XG5cdFx0XHR1bmkuJG9mZignc2VhcmNoJyk7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQvL+ajgOafpeaYr+WQpuWPr+S7peato+W4uOWxleekuuaQnOe0oue7k+aenOebuOWFs+eahOWGheWuuVxuXHRcdFx0c2VhcmNoX3Jlc3VsdF9pbml0X2NoZWNrKG1vZHVsZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhtb2R1bGUpO1xuXHRcdFx0XHRpZiAoIXRoaXMuY3VycmVudF9rZXl3b3JkKSB7IC8v5rKh5pyJ5pCc57Si5YWz6ZSu6K+NXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghdGhpcy5jdXJyZW50X3NlYXJjaF9yZXN1bHRbbW9kdWxlXSkgeyAvL+WvueW6lOaooeWdl+ayoeacieWKoOi9veWlveaVsOaNrlxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuY3VycmVudF9zZWFyY2hfcmVzdWx0W21vZHVsZV0pLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRvbl9zZWFyY2goZSkge1xuXHRcdFx0XHR0aGlzLnNldF9rZXl3b3JkKGUua2V5d29yZCk7XG5cdFx0XHR9LFxuXHRcdFx0c2V0X2tleXdvcmQoa2V5d29yZCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhrZXl3b3JkKTtcblx0XHRcdFx0dGhpcy5jdXJyZW50X2tleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0XHR0aGlzLm9wZW5fcmVzdWx0X3BhZ2UoKTtcblx0XHRcdH0sXG5cdFx0XHRvbl90YWJfdGFwKGluZGV4KSB7XG5cdFx0XHRcdHRoaXMuc3dpdGNoX3RhYihpbmRleCk7XG5cdFx0XHR9LFxuXHRcdFx0dGFiX2NoYW5nZWQoZSkge1xuXHRcdFx0XHR0aGlzLnN3aXRjaF90YWIoZS5kZXRhaWwuY3VycmVudCk7XG5cdFx0XHR9LFxuXHRcdFx0c3dpdGNoX3RhYihpbmRleCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRfYmFyX2luZGV4ID0gaW5kZXg7XG5cdFx0XHRcdHRoaXMuY3VycmVudF9zY3JvbGxfaW50byA9IHRoaXMucmVzdWx0X2JhcnNbaW5kZXhdLmlkO1xuXHRcdFx0fSxcblx0XHRcdGhvdF9zZWFyY2goaG90KSB7XG5cdFx0XHRcdHRoaXMuc2V0X2tleXdvcmQoaG90LnNlYXJjaFdvcmQpO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0c2VhcmNoKCkge1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IGtleXdvcmQgPSB0aGlzLmN1cnJlbnRfa2V5d29yZDtcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBpbmRleCA9IHRoaXMuY3VycmVudF9iYXJfaW5kZXg7XG5cdFx0XHRcdGxldCB0eXBlID0gdGhpcy5yZXN1bHRfYmFyc1tpbmRleF0uaWRcblx0XHRcdFx0bGV0IHBhZ2UgPSB0aGlzLmN1cnJlbnRfcGFnZTtcblx0XHRcdFx0JHJlcGVhdGVyLnNlYXJjaC5zZWFyY2goa2V5d29yZCwgdHlwZSwgcGFnZSwgKGRhdGEpPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmN1cnJlbnRfc2VhcmNoX3Jlc3VsdCwgdGhpcy5yZXN1bHRfYmFyc1tpbmRleF0ua2V5LCBkYXRhLnJlc3VsdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlX3Jlc3VsdF9wYWdlKCkge1xuXHRcdFx0XHR0aGlzLnNob3dfcmVzdWx0ID0gZmFsc2U7IC8v5YWz6Zet57uT5p6c6aG1XG5cdFx0XHRcdHRoaXMuY3VycmVudF9rZXl3b3JkID0gJyc7XG5cdFx0XHRcdHRoaXMuY3VycmVudF9zZWFyY2hfcmVzdWx0ID0ge307XG5cdFx0XHRcdHRoaXMuY3VycmVudF9wYWdlID0gMDtcblx0XHRcdFx0dGhpcy5jdXJyZW50X2Jhcl9pbmRleCA9IDA7XG5cdFx0XHRcdHRoaXMuY3VycmVudF9zY3JvbGxfaW50byA9ICcnO1xuXHRcdFx0fSxcblx0XHRcdG9wZW5fcmVzdWx0X3BhZ2UoKSB7XG5cdFx0XHRcdHRoaXMuc2hvd19yZXN1bHQgPSB0cnVlOyAvL+aJk+W8gOe7k+aenOmhtVxuXHRcdFx0XHR0aGlzLmN1cnJlbnRfc2VhcmNoX3Jlc3VsdCA9IHt9O1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRfcGFnZSA9IDA7XG5cdFx0XHRcdHRoaXMuc2VhcmNoKCk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRnZXRfaG90X2xpc3QoKSB7XG5cdFx0XHRcdCRyZXBlYXRlci5zZWFyY2guZ2V0X2hvdF9saXN0KChkYXRhKT0+IHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsZXQgaG90X2xpc3QgPSBkYXRhLmRhdGE7XG5cdFx0XHRcdFx0Ly/pg6jliIbku4vnu43nu5PlsL7lj6/og73mnInmjaLooYznrKZcXG4s6ZyA6KaB5Y675o6J5LiN54S25Lya5omw5Lmx5qC35byPXG5cdFx0XHRcdFx0aG90X2xpc3QuZm9yRWFjaCgoaXRlbSk9PiB7XG5cdFx0XHRcdFx0XHRpdGVtLmNvbnRlbnQgPSBpdGVtLmNvbnRlbnQudHJpbSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0dGhpcy5ob3RfbGlzdCA9IGhvdF9saXN0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdFxuXHQucGFnZXtcblx0XHRmbGV4OiAxO1xuXHR9XG5cdC50aXRsZS10ZXh0IHtcblx0XHRmb250LXNpemU6IDI0cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGNvbG9yOiAjMDAwMDAwO1xuXHR9XG5cdC50aXRsZSB7XG5cdFx0aGVpZ2h0OiA4MHJweDtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHRcdHBhZGRpbmc6IDAgMzBycHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblx0LmNvbnRlbnQge1xuXHRcdHdpZHRoOiA3NTBycHg7IFxuXHRcdGZsZXg6IDE7XG5cblx0fVxuXHQuaG90LWl0ZW0ge1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0aGVpZ2h0OiAxMDBycHg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxuXHQuaG90LWl0ZW06YWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG5cdH1cblx0LmhvdC1pdGVtLWluZGV4IHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHdpZHRoOiAxMDBycHg7XG5cdH1cblx0LmluZGV4LXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMjZycHg7XG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcblx0fVxuXHQuaG90LWluZm8ge1xuXHRcdHdpZHRoOiA2NTBycHg7XG5cdFx0aGVpZ2h0OiAxMDBycHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblx0LmtleV93b3JkIHtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHR9XG5cdC5kZXNjcmlwdGlvbiB7XG5cdFx0Zm9udC1zaXplOiAxOHJweDtcblx0XHRjb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xuXHR9XG5cdC5zY3JvbGwtYmFyLXZpZXcge1xuXHRcdHdpZHRoOiA3NTBycHg7IGhlaWdodDogNzBycHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTgsIDQ1LCAzMCwgMSk7XG5cdH1cblx0LnNjcm9sbC1iYXIge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cblx0LmJhci1uYW1lIHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHdpZHRoOiAxMzVycHg7XG5cdH1cblx0LmJhci1uYW1lOmFjdGl2ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XG5cdH1cblx0LmJhci1uYW1lLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMjZycHg7XG5cdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuXHR9XG5cdC5hY3RpdmUtYmFyIHtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHR9XG5cdC5iYXItYm94IHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cdFxuXHQudG9wLWJhciB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0aGVpZ2h0OiA5MHJweDtcblx0XHRcblx0fVxuXHQuaWNvbiB7XG5cdFx0cGFkZGluZzogMCAzMHJweDtcblx0fVxuXHQudG9wLWJhci10ZXh0IHtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHRcdGNvbG9yOiAjMDAwMDAwO1xuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9wbGF5bGlzdF9jYXJkLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDI5Y2I1YzgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wbGF5bGlzdF9jYXJkLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BsYXlsaXN0X2NhcmQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3BsYXlsaXN0X2NhcmQubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9wbGF5bGlzdF9jYXJkLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMWUzODFiNWVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvcGxheWxpc3RfY2FyZC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5bGlzdF9jYXJkLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDI5Y2I1YzgmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJtdXNpYy1saXN0XCJdLCBvbjogeyBjbGljazogX3ZtLnRvX3BsYXlsaXN0IH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm11c2ljLWxpc3QtbGVmdFwiXSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJjb3Zlci1pbWFnZVwiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnBsYXlsaXN0LmNvdmVySW1nVXJsICsgXCI/cGFyYW09MTAweTEwMFwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm11c2ljLWxpc3QtY2VudGVyXCJdIH0sIFtcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibXVzaWMtbGlzdC1uYW1lXCJdIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wbGF5bGlzdC5uYW1lKSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm51bWJlclwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgX3ZtLl9zKF92bS5wbGF5bGlzdC50cmFja0NvdW50KSArXG4gICAgICAgICAgICAgIFwi6aaWIGJ5IFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wbGF5bGlzdC5jcmVhdG9yLm5pY2tuYW1lKVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm11c2ljLWxpc3QtcmlnaHRcIl0gfSlcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheWxpc3RfY2FyZC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheWxpc3RfY2FyZC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cIm11c2ljLWxpc3RcIiBAdGFwPVwidG9fcGxheWxpc3RcIj5cblx0XHQ8dmlldyBjbGFzcz1cIm11c2ljLWxpc3QtbGVmdFwiPlxuXHRcdFx0PGltYWdlIGNsYXNzPVwiY292ZXItaW1hZ2VcIiA6c3JjPVwicGxheWxpc3QuY292ZXJJbWdVcmwgKyAnP3BhcmFtPTEwMHkxMDAnXCI+PC9pbWFnZT5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0PHZpZXcgY2xhc3M9XCJtdXNpYy1saXN0LWNlbnRlclwiPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJtdXNpYy1saXN0LW5hbWVcIj57e3BsYXlsaXN0Lm5hbWV9fTwvdGV4dD5cblx0XHRcdDx0ZXh0IGNsYXNzPVwibnVtYmVyXCI+e3twbGF5bGlzdC50cmFja0NvdW50fX3pppYgYnkge3twbGF5bGlzdC5jcmVhdG9yLm5pY2tuYW1lfX08L3RleHQ+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwibXVzaWMtbGlzdC1yaWdodFwiPlxuXHRcdFx0XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgJHJlcGVhdGVyIGZyb20gJ0AvdXRpbHMvcmVwZWF0ZXIuanMnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHBsYXlsaXN0OiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0dG9fcGxheWxpc3QoKSB7XG5cdFx0XHRcdGxldCBwbGF5bGlzdCA9IHRoaXMucGxheWxpc3Q7XG5cdFx0XHRcdCRyZXBlYXRlci5oZWxwZXIudG8oJy9wYWdlcy9wbGF5bGlzdC9wbGF5bGlzdD9wbGF5bGlzdF9pZD0nICsgcGxheWxpc3QuaWQgKyAnJmNvdmVyX2ltYWdlPScgKyBwbGF5bGlzdC5jb3ZlckltZ1VybCArICcmbmFtZT0nICsgcGxheWxpc3QubmFtZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0Lm11c2ljLWxpc3R7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cblx0XHRwYWRkaW5nLWxlZnQ6IDI1cnB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDI1cnB4O1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHR9XG5cdC5jb3Zlci1pbWFnZXtcblx0XHRoZWlnaHQ6IDkwcnB4O1xuXHRcdHdpZHRoOiA5MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xuXHR9XG5cdC5tdXNpYy1saXN0LWxlZnQge1xuXHRcdFxuXHR9XG5cdC5tdXNpYy1saXN0LWNlbnRlcntcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHR3aWR0aDogNTYwcnB4O1xuXHRcdGhlaWdodDogNjBycHg7XG5cdFx0cGFkZGluZy1sZWZ0OiAxNXJweDtcblx0fVxuXHQubXVzaWMtbGlzdC1yaWdodCB7XG5cdFx0ZmxleDogMTtcblx0XHRoZWlnaHQ6IDYwcnB4O1xuXHR9XG5cdC5tdXNpYy1saXN0LW5hbWV7XG5cdFx0Zm9udC1zaXplOiAyNHJweDtcblx0fVxuXHQubnVtYmVye1xuXHRcdGZvbnQtc2l6ZTogMThycHg7XG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblx0fVxuXHQubXVzaWMtbGlzdDphY3RpdmV7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXlsaXN0X2NhcmQubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheWxpc3RfY2FyZC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJtdXNpYy1saXN0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjVycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI1cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphY3RpdmVcIjogXCJyZ2JhKDAsMCwwLDAuMSlcIlxuICB9LFxuICBcImNvdmVyLWltYWdlXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjkwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjkwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cnB4XCJcbiAgfSxcbiAgXCJtdXNpYy1saXN0LWNlbnRlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcIndpZHRoXCI6IFwiNTYwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNXJweFwiXG4gIH0sXG4gIFwibXVzaWMtbGlzdC1yaWdodFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJoZWlnaHRcIjogXCI2MHJweFwiXG4gIH0sXG4gIFwibXVzaWMtbGlzdC1uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIlxuICB9LFxuICBcIm51bWJlclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicGFnZVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJ0aXRsZS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcInRpdGxlXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJob3QtaXRlbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWN0aXZlXCI6IFwicmdiYSgwLDAsMCwwLjEpXCJcbiAgfSxcbiAgXCJob3QtaXRlbS1pbmRleFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIxMDBycHhcIlxuICB9LFxuICBcImluZGV4LXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMylcIlxuICB9LFxuICBcImhvdC1pbmZvXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJrZXlfd29yZFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cnB4XCJcbiAgfSxcbiAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zKVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInNjcm9sbC1iYXItdmlld1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzBycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjE4LDQ1LDMwLDEpXCJcbiAgfSxcbiAgXCJzY3JvbGwtYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImJhci1uYW1lXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEzNXJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFjdGl2ZVwiOiBcInJnYmEoMCwwLDAsMC4xKVwiXG4gIH0sXG4gIFwiYmFyLW5hbWUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC42KVwiXG4gIH0sXG4gIFwiYWN0aXZlLWJhclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJiYXItYm94XCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInRvcC1iYXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjkwcnB4XCJcbiAgfSxcbiAgXCJpY29uXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ0b3AtYmFyLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=