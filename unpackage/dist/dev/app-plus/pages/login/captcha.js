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
/******/ 	return __webpack_require__(__webpack_require__.s = 114);
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
/*!********************************************************!*\
  !*** D:/CODE/opera_uniapp/pages.json?{"type":"style"} ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** D:/CODE/opera_uniapp/pages.json?{"type":"stat"} ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__D07ECB1"});

/***/ }),
/* 5 */
/*!********************************************************!*\
  !*** D:/CODE/opera_uniapp/main.js?{"type":"appStyle"} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 6 */
/*!********************************************************************!*\
  !*** D:/CODE/opera_uniapp/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CODE/opera_uniapp/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!**********************************************!*\
  !*** D:/CODE/opera_uniapp/utils/repeater.js ***!
  \**********************************************/
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
/*!*********************************************!*\
  !*** D:/CODE/opera_uniapp/config/config.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author: your name
                                                                                                      * @Date: 2020-04-15 11:43:56
                                                                                                      * @LastEditTime: 2020-04-17 14:20:41
                                                                                                      * @LastEditors: Please set LastEditors
                                                                                                      * @Description: In User Settings Edit
                                                                                                      * @FilePath: \opera_uniapp\config\config.js
                                                                                                      */

var systemInfo = uni.getSystemInfoSync();

var status_bar_height = systemInfo.statusBarHeight;

var HOST = 'http://api.cloudmusic.pulsating.cn:3000/';
var host9090 = "http://localhost:9090";

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
  API: API,
  host9090: host9090 };exports.default = _default;

/***/ }),
/* 26 */
/*!*********************************************!*\
  !*** D:/CODE/opera_uniapp/helper/helper.js ***!
  \*********************************************/
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
/*!********************************************!*\
  !*** D:/CODE/opera_uniapp/utils/player.js ***!
  \********************************************/
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
/*!*********************************************!*\
  !*** D:/CODE/opera_uniapp/utils/storage.js ***!
  \*********************************************/
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
/*!******************************************!*\
  !*** D:/CODE/opera_uniapp/model/song.js ***!
  \******************************************/
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
/*!*********************************************!*\
  !*** D:/CODE/opera_uniapp/utils/request.js ***!
  \*********************************************/
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
/*!******************************************!*\
  !*** D:/CODE/opera_uniapp/model/user.js ***!
  \******************************************/
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
/*!**********************************************!*\
  !*** D:/CODE/opera_uniapp/model/playlist.js ***!
  \**********************************************/
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
/*!********************************************!*\
  !*** D:/CODE/opera_uniapp/model/search.js ***!
  \********************************************/
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
/*!*******************************************!*\
  !*** D:/CODE/opera_uniapp/model/other.js ***!
  \*******************************************/
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
/*!*******************************************!*\
  !*** D:/CODE/opera_uniapp/model/album.js ***!
  \*******************************************/
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
/*!**************************************************!*\
  !*** D:/CODE/opera_uniapp/model/personalized.js ***!
  \**************************************************/
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
/*!*****************************************!*\
  !*** D:/CODE/opera_uniapp/model/top.js ***!
  \*****************************************/
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
/*!*******************************************!*\
  !*** D:/CODE/opera_uniapp/model/video.js ***!
  \*******************************************/
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
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
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
/* 114 */
/*!***********************************************************************!*\
  !*** D:/CODE/opera_uniapp/main.js?{"page":"pages%2Flogin%2Fcaptcha"} ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_login_captcha_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/captcha.nvue?mpType=page */ 115);

        
        
        
        _pages_login_captcha_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_login_captcha_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/login/captcha'
        _pages_login_captcha_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_login_captcha_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 115 */
/*!*****************************************************************!*\
  !*** D:/CODE/opera_uniapp/pages/login/captcha.nvue?mpType=page ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _captcha_nvue_vue_type_template_id_e874549a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./captcha.nvue?vue&type=template&id=e874549a&mpType=page */ 116);
/* harmony import */ var _captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./captcha.nvue?vue&type=script&lang=js&mpType=page */ 118);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./captcha.nvue?vue&type=style&index=0&lang=css&mpType=page */ 120).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./captcha.nvue?vue&type=style&index=0&lang=css&mpType=page */ 120).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _captcha_nvue_vue_type_template_id_e874549a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _captcha_nvue_vue_type_template_id_e874549a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "78e07f00",
  false,
  _captcha_nvue_vue_type_template_id_e874549a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "CODE/opera_uniapp/pages/login/captcha.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 116 */
/*!***********************************************************************************************!*\
  !*** D:/CODE/opera_uniapp/pages/login/captcha.nvue?vue&type=template&id=e874549a&mpType=page ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_template_id_e874549a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./captcha.nvue?vue&type=template&id=e874549a&mpType=page */ 117);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_template_id_e874549a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_template_id_e874549a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_template_id_e874549a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_template_id_e874549a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 117 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CODE/opera_uniapp/pages/login/captcha.nvue?vue&type=template&id=e874549a&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c("view", { staticClass: ["tip"] }, [
            _c("view", { staticClass: ["title"] }, [
              _c("u-text", { staticClass: ["title-text"] }, [
                _vm._v("验证码已发送至")
              ])
            ]),
            _c("view", { staticClass: ["phone"] }, [
              _c("u-text", { staticClass: ["phone-text"] }, [
                _vm._v(_vm._s(_vm.format_phone))
              ])
            ])
          ]),
          _c(
            "view",
            { staticClass: ["captcha"], on: { click: _vm.to_focus } },
            _vm._l(_vm.captcha_obj, function(v, k) {
              return _c(
                "view",
                {
                  key: k,
                  staticClass: ["item"],
                  staticStyle: { alignItems: "center" }
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["number"],
                      staticStyle: { fontSize: "32rpx", height: "50rpx" }
                    },
                    [_vm._v(_vm._s(v))]
                  ),
                  _c("view", {
                    staticClass: ["bottom_line"],
                    class: v ? "line-active" : ""
                  })
                ]
              )
            }),
            0
          ),
          _c("u-input", {
            staticClass: ["input"],
            attrs: {
              maxlength: "4",
              focus: _vm.focus,
              type: "number",
              value: _vm.captcha
            },
            on: {
              input: [
                function($event) {
                  _vm.captcha = $event.detail.value
                },
                _vm.captcha_input
              ],
              blur: _vm.on_blur
            }
          })
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
/* 118 */
/*!*****************************************************************************************!*\
  !*** D:/CODE/opera_uniapp/pages/login/captcha.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./captcha.nvue?vue&type=script&lang=js&mpType=page */ 119);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 119 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CODE/opera_uniapp/pages/login/captcha.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






















var _repeater = _interopRequireDefault(__webpack_require__(/*! ../../utils/repeater.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { data: function data() {return { focus: true, phone: '', captcha: '', captcha_obj: { one: '', two: '', three: '', four: '' } };}, computed: { format_phone: function format_phone() {var phone = this.phone;if (phone.length == 11) {return this.phone.substr(0, 3) + "****" + this.phone.substr(7);}} },

  watch: {
    captcha: function captcha(value) {

      this.captcha_obj.one = value.substr(0, 1);
      this.captcha_obj.two = value.substr(1, 1);
      this.captcha_obj.three = value.substr(2, 1);
      this.captcha_obj.four = value.substr(3, 1);
      if (value.length == 4) {
        this.check_captcha();
      }
    } },

  onLoad: function onLoad(options) {
    if (options.phone) {
      this.phone = options.phone;
      this.send_captcha();
    }
  },
  methods: {
    check_captcha: function check_captcha() {
      var phone = this.phone;
      var captcha = this.captcha;
      _repeater.default.user.verify_captcha(phone, captcha, function (res) {
        __f__("log", res, " at pages\\login\\captcha.nvue:71");
        if (res.code == 200) {
          // 验证码正确, 跳转至注册/修改密码页面
          _repeater.default.helper.to('./password?captcha=' + captcha + '&phone=' + phone + '&from=reg');
        } else {
          setTimeout(function () {
            _repeater.default.helper.to('./password?captcha=' + captcha + '&phone=' + phone + '&from=reg');
            _repeater.default.helper.toast('none', '验证码错误', 4000, false, 'bottom');
          }, 10);
        }
      });
    },
    to_focus: function to_focus() {
      this.focus = true;
    },

    on_blur: function on_blur() {
      this.focus = false;
    },
    captcha_input: function captcha_input(event) {
      this.captcha = event.detail.value;
    },
    send_captcha: function send_captcha() {
      var phone = this.phone;
      _repeater.default.user.send_captcha(phone, function (res) {
        if (res.code == 200) {
          _repeater.default.helper.toast('none', '验证码已发送', 3000, false, 'bottom');
        } else {
          setTimeout(function () {
            _repeater.default.helper.toast('none', res.message, 4000, false, 'bottom');
          }, 10);
        }
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 120 */
/*!*************************************************************************************************!*\
  !*** D:/CODE/opera_uniapp/pages/login/captcha.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./captcha.nvue?vue&type=style&index=0&lang=css&mpType=page */ 121);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_captcha_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 121 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CODE/opera_uniapp/pages/login/captcha.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "flex": 1,
    "paddingTop": "100rpx"
  },
  "tip": {
    "width": "750rpx",
    "height": "100rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx",
    "justifyContent": "space-between"
  },
  "title-text": {
    "fontSize": "30rpx",
    "lineHeight": "50rpx"
  },
  "phone-text": {
    "lineHeight": "50rpx",
    "fontSize": "24rpx",
    "color": "rgba(0,0,0,0.5)"
  },
  "captcha": {
    "height": "300rpx",
    "width": "750rpx",
    "paddingTop": "100rpx",
    "paddingRight": "150rpx",
    "paddingBottom": "100rpx",
    "paddingLeft": "150rpx",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "bottom_line": {
    "width": "90rpx",
    "height": "5rpx",
    "backgroundColor": "rgba(0,0,0,0.3)"
  },
  "line-active": {
    "backgroundColor": "#000000"
  },
  "input": {
    "position": "absolute",
    "top": "-9999rpx",
    "left": "-9999rpx"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy5qc29uPzYyOGYiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL3BhZ2VzLmpzb24/YTIyZCIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvbWFpbi5qcz9iYTA5Iiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9BcHAudnVlPzEyMWUiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL0FwcC52dWU/MDJiOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1IiwidW5pLWFwcDovLy91dGlscy9yZXBlYXRlci5qcyIsInVuaS1hcHA6Ly8vY29uZmlnL2NvbmZpZy5qcyIsInVuaS1hcHA6Ly8vaGVscGVyL2hlbHBlci5qcyIsInVuaS1hcHA6Ly8vdXRpbHMvcGxheWVyLmpzIiwidW5pLWFwcDovLy91dGlscy9zdG9yYWdlLmpzIiwidW5pLWFwcDovLy9tb2RlbC9zb25nLmpzIiwidW5pLWFwcDovLy91dGlscy9yZXF1ZXN0LmpzIiwidW5pLWFwcDovLy9tb2RlbC91c2VyLmpzIiwidW5pLWFwcDovLy9tb2RlbC9wbGF5bGlzdC5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvc2VhcmNoLmpzIiwidW5pLWFwcDovLy9tb2RlbC9vdGhlci5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvYWxidW0uanMiLCJ1bmktYXBwOi8vL21vZGVsL3BlcnNvbmFsaXplZC5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvdG9wLmpzIiwidW5pLWFwcDovLy9tb2RlbC92aWRlby5qcyIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvbWFpbi5qcz84MDY0Iiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9jYXB0Y2hhLm52dWU/NmZlYSIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvcGFnZXMvbG9naW4vY2FwdGNoYS5udnVlPzM4NjkiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL3BhZ2VzL2xvZ2luL2NhcHRjaGEubnZ1ZT81Y2RlIiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9jYXB0Y2hhLm52dWU/ZjUyZCIsInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vY2FwdGNoYS5udnVlIiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9jYXB0Y2hhLm52dWU/NGMyOCIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvcGFnZXMvbG9naW4vY2FwdGNoYS5udnVlPzRmMjMiXSwibmFtZXMiOlsiU1RBVF9WRVJTSU9OIiwidmVyc2lvbiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsInJ1bnRpbWUiLCJnZXREQ2xvdWRJZCIsImUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsIk9iamVjdCIsImtleXMiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwiaSIsInNpZ24iLCJvcHRpb25zIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0U3BsaWNpbmciLCJkYXRhIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwicHJvY2VzcyIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImdldExhc3RWaXNpdFRpbWUiLCJQQUdFX1JFU0lERU5DRV9USU1FIiwiRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsIkxhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsInNldFBhZ2VSZXNpZGVuY2VUaW1lIiwiZ2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJUT1RBTF9fVklTSVRfX0NPVU5UIiwiZ2V0VG90YWxWaXNpdENvdW50IiwiY291bnQiLCJHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zIiwicHJvcCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNldF9fRmlyc3RfX1RpbWUiLCJTZXRfX0xhc3RfX1RpbWUiLCJnZXRGaXJzdFRpbWUiLCJnZXRMYXN0VGltZSIsImdldFJlc2lkZW5jZVRpbWUiLCJ0eXBlIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiJG9wdGlvbnMiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwiY29uZmlnIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwidiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJyZXBsYWNlIiwibXBzZGsiLCJTREtWZXJzaW9uIiwibXB2IiwibGFuZyIsImxhbmd1YWdlIiwicHIiLCJwaXhlbFJhdGlvIiwid3ciLCJ3aW5kb3dXaWR0aCIsIndoIiwid2luZG93SGVpZ2h0Iiwic3ciLCJzY3JlZW5XaWR0aCIsInNoIiwic2NyZWVuSGVpZ2h0IiwicGF0aCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsInVybCIsIl9zZW5kRXZlbnRSZXF1ZXN0Iiwia2V5IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwicmVxdWVzdCIsInZhbHVlIiwiZV9uIiwiZV92IiwidG9TdHJpbmciLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJ0dG4iLCJ0dHBqIiwidHRjIiwicmVxdWVzdERhdGEiLCJwdXNoIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJmb3JFYWNoIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImFyZ3MiLCJjb21wbGV0ZSIsIl9sb2dpbiIsIl9zaGFyZSIsIl9wYXltZW50IiwiX3BhZ2VTaG93IiwiX2FwcGxpY2F0aW9uU2hvdyIsIl9wYWdlSGlkZSIsIl9hcHBsaWNhdGlvbkhpZGUiLCJlbSIsImluZm8iLCJlbVZhbCIsIm1lc3NhZ2UiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwiY2FsbCIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiIsInR5cG9mIiwicyIsInByb3RvdHlwZSIsInN1YnN0cmluZyIsImlzRGVidWdNb2RlIiwiX19jaGFubmVsSWRfXyIsImxvZyIsIl9sZW4iLCJhcmd1bWVudHMiLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsImZvcm1hdExvZyIsInNoaWZ0IiwicG9wIiwibXNncyIsIm1hcCIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwidlR5cGUiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsIm1zZyIsImxhc3RNc2ciLCJqb2luIiwiaW5kZXhPZiIsImhlbHBlciIsInVzZXIiLCJwbGF5bGlzdCIsInBsYXllciIsInN0b3JhZ2UiLCJzb25nIiwic2VhcmNoIiwib3RoZXIiLCJhbGJ1bSIsInBlcnNvbmFsaXplZCIsInRvcCIsInZpZGVvIiwic3lzdGVtSW5mbyIsInN0YXR1c19iYXJfaGVpZ2h0Iiwic3RhdHVzQmFySGVpZ2h0IiwiSE9TVCIsImhvc3Q5MDkwIiwiQVBJIiwiQ0VMTFBIT05FX0xPR0lOIiwiTE9HSU5fU1RBVFVTIiwiQ0hFQ0tfUEhPTkUiLCJMT0dPVVQiLCJTRU5EX0NBUFRDSEEiLCJWRVJJRllfQ0FQVENIQSIsIlBIT05FX1JFRyIsIlNVQkNPVU5UIiwiVVNFUl9ERVRBSUwiLCJVU0VSX1BMQVlMSVNUIiwiVVNFUl9MSUtFX0xJU1QiLCJMSUtFIiwiUExBWUxJU1RfREVUQUlMIiwiQUxCVU1fREVUQUlMIiwiU09ORyIsIkxZUklDIiwiU09OR19ERVRBSUwiLCJIT1RfU0VBUkNIIiwiU0VBUkNIIiwiQkFOTkVSIiwiUkVDT01NRU5EX1JFU09VUkNFIiwiUEVSU09OQUxJWkVEX1BMQVlMSVNUIiwiUEVSU09OQUxJWkVEX05FV1NPTkciLCJUT1BfQUxCVU0iLCJWSURFT19MSVNUIiwicGxheWVkX3dhdGNoIiwiY2IiLCJvYmoiLCJnZXRBcHAiLCJnbG9iYWxEYXRhIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwic2V0IiwiX3BsYXllZCIsImdldCIsImJhY2tncm91bmRlciIsIm9zIiwibmFtZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiYW5kcm9pZCIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJtb3ZlVGFza1RvQmFjayIsInRvIiwibW9kZSIsIm5hdmlnYXRlVG8iLCJ0b2FzdCIsImljb24iLCJ0ZXh0IiwiZHVyYXRpb24iLCJtYXNrIiwicG9zaXRpb24iLCJzaG93VG9hc3QiLCJQbGF5ZXJIZWxwZXIiLCJnZXRfcGxheWVyIiwic2V0X3VybCIsIlN0b3JhZ2UiLCJnZXRfcGxheWVkIiwic2V0U3R5bGVzIiwicGxheSIsInBhdXNlIiwiZ2V0X3Bvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJnZXRfZHVyYXRpb24iLCJnZXREdXJhdGlvbiIsInNlZWtfdG8iLCJzZWVrVG8iLCJwcmV2IiwicGxheWVkIiwiZ2V0X2N1cnJlbnRfcGxheWxpc3QiLCJjdXJyZW50X3NvbmdfaWQiLCJpZCIsInByZXZfaW5kZXgiLCJwcmV2X3NvbmdfaWQiLCJzdGFydCIsIm5leHQiLCJuZXh0X2luZGV4IiwibmV4dF9zb25nX2lkIiwic29uZ19pZCIsIlNvbmciLCJnZXRfc29uZ19kZXRhaWwiLCJzb25ncyIsInNvbmdfbmFtZSIsImNvdmVyX2ltYWdlIiwiYWwiLCJwaWNVcmwiLCJjdXJyZW50X3BsYXllZCIsInBsYXllZF9tdXNpY19pZCIsImlzUGF1c2VkIiwiSGVscGVyIiwiZ2V0X3NvbmdfdXJsIiwicmVzIiwiY3JlYXRvcnMiLCJhciIsImNyZWF0b3Jfc3RyIiwiY3JlYXRvciIsInR1cm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiTEFURVNUX1BMQVlFRCIsIkNVUlJFTlRfUExBWUxJU1QiLCJJU19MT0dJTiIsIlBMQVlfTU9ERSIsImlzX2xvZ2luIiwic2V0X2lzX2xvZ2luIiwic2V0X3BsYXllZCIsInNldF9jdXJyZW50X3BsYXlsaXN0IiwiZ2V0X3BsYXlfbW9kZSIsInNldF9wbGF5X21vZGUiLCJrIiwicGFyYW1zIiwiYnIiLCJjb2RlIiwiZ2V0X2x5cmljIiwiaWRzIiwic3VjY2Vzc19jYiIsImZhaWxlZF9jYiIsInVyaSIsImVyck1zZyIsImhpZGVUb2FzdCIsInBvc3QiLCJ0ZXN0IiwiVXNlciIsImNoZWNrX3Bob25lIiwicGhvbmUiLCJzdGF0dXNDb2RlIiwibG9naW4iLCJwYXNzd29yZCIsImdldF9zdGF0dXMiLCJzdGF0dXMiLCJyZWciLCJjYXB0Y2hhIiwibG9nb3V0Iiwic2VuZF9jYXB0Y2hhIiwidmVyaWZ5X2NhcHRjaGEiLCJjaGVja19sb2dpbiIsImdldF9zdWJjb3VudCIsImdldF91c2VyX2RldGFpbCIsInVpZCIsImdldF9wbGF5bGlzdCIsImdldF9saWtlbGlzdCIsImxpa2UiLCJtdXNpY19pZCIsInRzIiwidGltZXN0YW1wIiwiUGxheWxpc3QiLCJnZXRfcGxheWxpc3RfZGV0YWlsIiwiU2VhcmNoIiwiZ2V0X2hvdF9saXN0Iiwia2V5d29yZCIsImxpbWl0Iiwib2Zmc2V0Iiwia2V5d29yZHMiLCJPdGhlciIsImJhbm5lciIsInJlY29tbWVuZF9yZXNvdXJjZSIsIkFsYnVtIiwiZGV0YWlsIiwiUGVyc29uYWxpemVkIiwibmV3c29uZyIsIlRvcCIsIlZpZGVvIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFp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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkEsRUF2QkE7O0FBbUNBLFFBbkNBLGtCQW1DQSxPQW5DQSxFQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F4Q0E7QUF5Q0E7QUFDQSxpQkFEQSwyQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxFQUdBLEVBSEE7QUFJQTtBQUNBLE9BWEE7QUFZQSxLQWhCQTtBQWlCQSxZQWpCQSxzQkFpQkE7QUFDQTtBQUNBLEtBbkJBOztBQXFCQSxXQXJCQSxxQkFxQkE7QUFDQTtBQUNBLEtBdkJBO0FBd0JBLGlCQXhCQSx5QkF3QkEsS0F4QkEsRUF3QkE7QUFDQTtBQUNBLEtBMUJBO0FBMkJBLGdCQTNCQSwwQkEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLEVBRUEsRUFGQTtBQUdBO0FBQ0EsT0FSQTtBQVNBLEtBdENBLEVBekNBLEU7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUEwM0IsQ0FBZ0IsbTRCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E5NEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicGFnZXMvbG9naW4vY2FwdGNoYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMTQpO1xuIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fRDA3RUNCMVwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwYWdlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTZcIlxuICB9XG59IiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcbn1cblxuZnVuY3Rpb24gaXNEZWJ1Z01vZGUgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICByZXR1cm4gdHlwZW9mIF9fY2hhbm5lbElkX18gPT09ICdzdHJpbmcnICYmIF9fY2hhbm5lbElkX19cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyAodHlwZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICBjb25zb2xlW3R5cGVdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICB2YXIgdHlwZSA9IGFyZ3Muc2hpZnQoKVxuICBpZiAoaXNEZWJ1Z01vZGUoKSkge1xuICAgIGFyZ3MucHVzaChhcmdzLnBvcCgpLnJlcGxhY2UoJ2F0ICcsICd1bmktYXBwOi8vLycpKVxuICAgIHJldHVybiBjb25zb2xlW3R5cGVdWydhcHBseSddKGNvbnNvbGUsIGFyZ3MpXG4gIH1cblxuICB2YXIgbXNncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IG9iamVjdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IGFycmF5XScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxuXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHYgPSBTdHJpbmcodilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2XG4gIH0pXG4gIHZhciBtc2cgPSAnJ1xuXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgbGFzdE1zZyA9IG1zZ3MucG9wKClcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcblxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xuICAgICAgbXNnICs9IGxhc3RNc2dcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZyA9IG1zZ3NbMF1cbiAgfVxuXG4gIGNvbnNvbGVbdHlwZV0obXNnKVxufVxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIGlmICghb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fVxuICAgIH1cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpICYmICFoYXNPd24uY2FsbChvcHRpb25zLmNvbXBvbmVudHMsIG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcyc7XHJcblxyXG5pbXBvcnQgcGxheWVyIGZyb20gJ0AvdXRpbHMvcGxheWVyLmpzJztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQC91dGlscy9zdG9yYWdlLmpzJztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4uL21vZGVsL3VzZXIuanMnO1xyXG5pbXBvcnQgcGxheWxpc3QgZnJvbSAnLi4vbW9kZWwvcGxheWxpc3QuanMnO1xyXG5pbXBvcnQgc29uZyBmcm9tICcuLi9tb2RlbC9zb25nLmpzJztcclxuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9tb2RlbC9zZWFyY2guanMnO1xyXG5pbXBvcnQgb3RoZXIgZnJvbSAnLi4vbW9kZWwvb3RoZXIuanMnO1xyXG5pbXBvcnQgYWxidW0gZnJvbSAnLi4vbW9kZWwvYWxidW0uanMnO1xyXG5pbXBvcnQgcGVyc29uYWxpemVkIGZyb20gJy4uL21vZGVsL3BlcnNvbmFsaXplZC5qcyc7XHJcbmltcG9ydCB0b3AgZnJvbSAnLi4vbW9kZWwvdG9wLmpzJztcclxuaW1wb3J0IHZpZGVvIGZyb20gJy4uL21vZGVsL3ZpZGVvLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0eyBcclxuXHRjb25maWcsXHJcblx0aGVscGVyLFxyXG5cdHVzZXIsXHJcblx0cGxheWxpc3QsXHJcblx0cGxheWVyLFxyXG5cdHN0b3JhZ2UsXHJcblx0c29uZyxcclxuXHRzZWFyY2gsXHJcblx0b3RoZXIsXHJcblx0YWxidW0sXHJcblx0cGVyc29uYWxpemVkLFxyXG5cdHRvcCxcclxuXHR2aWRlb1xyXG59IiwiLypcclxuICogQEF1dGhvcjogeW91ciBuYW1lXHJcbiAqIEBEYXRlOiAyMDIwLTA0LTE1IDExOjQzOjU2XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDQtMTcgMTQ6MjA6NDFcclxuICogQExhc3RFZGl0b3JzOiBQbGVhc2Ugc2V0IExhc3RFZGl0b3JzXHJcbiAqIEBEZXNjcmlwdGlvbjogSW4gVXNlciBTZXR0aW5ncyBFZGl0XHJcbiAqIEBGaWxlUGF0aDogXFxvcGVyYV91bmlhcHBcXGNvbmZpZ1xcY29uZmlnLmpzXHJcbiAqL1xyXG5cclxuY29uc3Qgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY29uc3Qgc3RhdHVzX2Jhcl9oZWlnaHQgPSBzeXN0ZW1JbmZvLnN0YXR1c0JhckhlaWdodDtcclxuXHJcbmNvbnN0IEhPU1QgPSAnaHR0cDovL2FwaS5jbG91ZG11c2ljLnB1bHNhdGluZy5jbjozMDAwLyc7XHJcbmNvbnN0IGhvc3Q5MDkwID0gXCJodHRwOi8vbG9jYWxob3N0OjkwOTBcIjtcclxuXHJcbmNvbnN0IEFQSSA9IHt9O1xyXG4vL+eZu+W9lVxyXG5BUEkuQ0VMTFBIT05FX0xPR0lOID0gJ2xvZ2luL2NlbGxwaG9uZSc7IC8vIOaJi+acuuWPt+eZu+W9lVxyXG5BUEkuTE9HSU5fU1RBVFVTID0gJ2xvZ2luL3N0YXR1cyc7IC8vIOeZu+mZhueKtuaAgVxyXG5BUEkuQ0hFQ0tfUEhPTkUgPSAnY2VsbHBob25lL2V4aXN0ZW5jZS9jaGVjayc7IC8vIOajgOafpeaJi+acuuWPt+aYr+WQpuazqOWGjOi/h1xyXG5BUEkuTE9HT1VUID0gJ2xvZ291dCc7IC8vIOeZu+WHulxyXG5BUEkuU0VORF9DQVBUQ0hBID0gJ2NhcHRjaGEvc2VudCc7IC8vIOWPkemAgeefreS/oemqjOivgeeggVxyXG5BUEkuVkVSSUZZX0NBUFRDSEEgPSAnY2FwdGNoYS92ZXJpZnknOyAvLyDmoLjlrp7pqozor4HnoIFcclxuQVBJLlBIT05FX1JFRyA9ICdyZWdpc3Rlci9jZWxscGhvbmUnOyAvLyDmiYvmnLrlj7fms6jlhoxcclxuLy/nlKjmiLdcclxuQVBJLlNVQkNPVU5UID0gJ3VzZXIvc3ViY291bnQnOyAvLyDnlKjmiLfnmoTmrYzljZXvvIzmlLbol4/vvIxtdiwgZGog5pWw6YePXHJcbkFQSS5VU0VSX0RFVEFJTCA9ICd1c2VyL2RldGFpbCc7IC8vIOiOt+WPlueUqOaIt+ivpuaDhVxyXG5BUEkuVVNFUl9QTEFZTElTVCA9ICd1c2VyL3BsYXlsaXN0JzsgLy8g6I635Y+W55So5oi35q2M5Y2VXHJcbkFQSS5VU0VSX0xJS0VfTElTVCA9ICdsaWtlbGlzdCc7IC8vIOiOt+WPlueUqOaIt+WWnOasoueahOmfs+S5kOWIl+ihqFxyXG5BUEkuTElLRSA9ICdsaWtlJzsgLy8g5Zac5qyi5p+Q5Liq5q2M5puyXHJcblxyXG4vLyDmrYzljZVcclxuQVBJLlBMQVlMSVNUX0RFVEFJTCA9ICdwbGF5bGlzdC9kZXRhaWwnOyAvLyDmrYzljZXor6bmg4VcclxuXHJcbi8vIOS4k+i+kVxyXG5BUEkuQUxCVU1fREVUQUlMID0gJ2FsYnVtJzsgLy/kuJPovpHor6bmg4VcclxuXHJcbi8vIOatjOabslxyXG5BUEkuU09ORyA9ICdzb25nL3VybCc7IC8v6I635Y+W5q2M5puydXJsXHJcbkFQSS5MWVJJQyA9ICdseXJpYyc7IC8v6I635Y+W5q2M6K+NXHJcbkFQSS5TT05HX0RFVEFJTCA9ICdzb25nL2RldGFpbCc7IC8v6I635Y+W5q2M5puy6K+m5oOFXHJcblxyXG4vLyDmkJzntKJcclxuQVBJLkhPVF9TRUFSQ0ggPSAnc2VhcmNoL2hvdC9kZXRhaWwnOyAvL+iOt+WPlueDreaQnFxyXG5BUEkuU0VBUkNIID0gJ3NlYXJjaCc7IC8v5pCc57SiXHJcblxyXG5cclxuLy8gT3RoZXJcclxuQVBJLkJBTk5FUiA9ICdiYW5uZXInOyAvLyDlj5HnjrDpobViYW5uZXLlm75cclxuQVBJLlJFQ09NTUVORF9SRVNPVVJDRSA9ICdyZWNvbW1lbmQvcmVzb3VyY2UnOyAvLyDmr4/ml6XmjqjojZDmrYzljZVcclxuXHJcbi8vIOengeS6uuaOqOiNkFxyXG5BUEkuUEVSU09OQUxJWkVEX1BMQVlMSVNUID0gJ3BlcnNvbmFsaXplZCc7IC8vIOaOqOiNkOatjOWNlVxyXG5BUEkuUEVSU09OQUxJWkVEX05FV1NPTkcgPSAncGVyc29uYWxpemVkL25ld3NvbmcnOyAvLyDmjqjojZDmlrDmrYxcclxuXHJcbi8vIOWQhOexu+aOkuihjHRvcFxyXG5BUEkuVE9QX0FMQlVNID0gJ3RvcC9hbGJ1bSc7IC8vIOaWsOein+S4iuaetlxyXG5cclxuLy8g6KeG6aKRXHJcbkFQSS5WSURFT19MSVNUID0gJ3ZpZGVvL2dyb3VwJzsgLy8g5oyJ5YiG57G76I635Y+W6KeG6aKR5YiX6KGoLCDpnIDnmbvlvZVcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0c3lzdGVtSW5mbywgXHJcblx0c3RhdHVzX2Jhcl9oZWlnaHQsXHJcblx0SE9TVCxcclxuXHRBUEksXHJcblx0aG9zdDkwOTBcclxufVxyXG4iLCIvL+ebkeWQrGdsb2JhbERhdGHkuK3nmoRwbGF5ZWTlsZ7mgKdcclxuZnVuY3Rpb24gcGxheWVkX3dhdGNoKGNiKSB7XHJcblx0dmFyIG9iaiA9IGdldEFwcCgpLmdsb2JhbERhdGE7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgXCJwbGF5ZWRcIiwge1xyXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxyXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdFx0Z2V0QXBwKCkuZ2xvYmFsRGF0YS5fcGxheWVkID0gdmFsdWU7XHJcblx0XHRcdGNiKHZhbHVlKTtcclxuXHRcdH0sXHJcblx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyDlj6/ku6XlnKjov5nph4zmiZPljbDkuIDkupvkuJzopb/vvIznhLblkI7lnKjlhbbku5bnlYzpnaLosIPnlKhnZXRBcHAoKS5nbG9iYWxEYXRhLnBsYXllZOeahOaXtuWAme+8jOi/memHjOWwseS8muaJp+ihjOOAglxyXG5cdFx0XHRyZXR1cm4gZ2V0QXBwKCkuZ2xvYmFsRGF0YS5fcGxheWVkO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBiYWNrZ3JvdW5kZXIoKSB7XHJcblx0bGV0IG9zID0gcGx1cy5vcy5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2FuZHJvaWQnID8gJ2FuZHJvaWQnIDogJ2lvcyc7XHJcblx0aWYgKG9zID09ICdhbmRyb2lkJykge1xyXG5cdFx0bGV0IG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0bWFpbi5tb3ZlVGFza1RvQmFjayhmYWxzZSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvKHVybCwgbW9kZSkge1xyXG5cdG1vZGUgPSBtb2RlIHx8ICduYXZpZ2F0ZV90byc7XHJcblxyXG5cclxuXHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHR1cmw6IHVybFxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9hc3QoaWNvbiwgdGV4dCwgZHVyYXRpb24sIG1hc2ssIHBvc2l0aW9uKSB7XHJcblx0ZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxNTAwO1xyXG5cdG1hc2sgPSBtYXNrIHx8IGZhbHNlO1xyXG5cdHBvc2l0aW9uID0gcG9zaXRpb24gfHwgZmFsc2U7XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRpY29uOiBpY29uLFxyXG5cdFx0dGl0bGU6IHRleHQsXHJcblx0XHRkdXJhdGlvbjogZHVyYXRpb24sXHJcblx0XHRtYXNrOiBtYXNrLFxyXG5cdFx0cG9zaXRpb246IHBvc2l0aW9uLFxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dG8sXHJcblx0dG9hc3QsXHJcblx0YmFja2dyb3VuZGVyLFxyXG5cdHBsYXllZF93YXRjaCxcclxuXHRcclxufVxyXG4iLCIvLyDlhajlsYDpn7PpopHmkq3mlL7nrqHnkIZcclxubGV0IFBsYXllckhlbHBlciA9IHt9O1xyXG5cclxuLy/ojrflj5bllK/kuIBwbGF5ZXIsIOS/neaMgXBsYXllcue7n+S4gFxyXG5mdW5jdGlvbiBnZXRfcGxheWVyKCkge1xyXG5cdHJldHVybiBnZXRBcHAoKS5nbG9iYWxEYXRhLnBsYXllcjtcclxufVxyXG5cclxuUGxheWVySGVscGVyLnNldF91cmwgPSBmdW5jdGlvbih1cmwpIHtcclxuXHRcclxuXHR1cmwgPSB1cmwgfHwgU3RvcmFnZS5nZXRfcGxheWVkKCkudXJsO1xyXG5cdC8vIGNvbnNvbGUubG9nKCdzZXRfdXJsOicgKyB1cmwpO1xyXG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XHJcblx0cGxheWVyLnNldFN0eWxlcyh7XHJcblx0XHRzcmM6IHVybFxyXG5cdH0pO1xyXG5cdFxyXG5cdHJldHVybjtcclxufVxyXG5cclxuLy9wbGF55YmN55qE5YeG5aSHXHJcbi8vIFBsYXllckhlbHBlci5zdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4vLyBcdHRoaXMuc2V0X3VybCgpO1xyXG4vLyBcdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XHJcbi8vIFx0cGxheWVyLnJlc3VtZSgpO1xyXG4vLyBcdHJldHVybjtcclxuLy8gfVxyXG5cclxuLy/nu5/kuIBwbGF55YWl5Y+jLCDnnJ/mraPnmoTmkq3mlL7lhaXlj6NcclxuUGxheWVySGVscGVyLnBsYXkgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xyXG5cdHBsYXllci5wbGF5KCgpPT57XHJcblx0XHRjb25zb2xlLmxvZygn5b2T5YmN6Z+z5LmQ5pKt5pS+5a6M5q+VJyk7XHJcblx0fSwoZSk9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHR9KTs7XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG4vKipcclxuICog5pqC5YGcXHJcbiAqIOmcgOimgXN0YXJ05ZCOLCDop6blj5FvblBsYXnkuovku7blkI4sIHBhdXNl5omN5pyJ5pWIXHJcbiAqL1xyXG5QbGF5ZXJIZWxwZXIucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xyXG5cdHBsYXllci5wYXVzZSgpO1xyXG5cdHJldHVybjtcclxufVxyXG5cclxuUGxheWVySGVscGVyLmdldF9wb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XHJcblx0cmV0dXJuIHBsYXllci5nZXRQb3NpdGlvbigpO1xyXG59XHJcblxyXG5QbGF5ZXJIZWxwZXIuZ2V0X2R1cmF0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcclxuXHRcclxuXHRyZXR1cm4gcGxheWVyLmdldER1cmF0aW9uKCk7XHJcbn1cclxuXHJcblBsYXllckhlbHBlci5zZWVrX3RvID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcclxuXHRyZXR1cm4gZ2V0X3BsYXllcigpLnNlZWtUbyhwb3NpdGlvbik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblBsYXllckhlbHBlci5wcmV2ID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgcGxheWVkID0gU3RvcmFnZS5nZXRfcGxheWVkKCk7XHJcblx0bGV0IHBsYXlsaXN0ID0gU3RvcmFnZS5nZXRfY3VycmVudF9wbGF5bGlzdCgpO1xyXG5cdGxldCBjdXJyZW50X3NvbmdfaWQgPSBwbGF5ZWQuaWQ7XHJcblx0bGV0IHByZXZfaW5kZXggPSBwbGF5bGlzdC5sZW5ndGggLSAxO1xyXG5cdFxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChjdXJyZW50X3NvbmdfaWQgPT0gcGxheWxpc3RbaV0uaWQpIHtcclxuXHRcdFx0aWYgKGkgPiAwKSB7XHJcblx0XHRcdFx0cHJldl9pbmRleCA9IGkgLSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRsZXQgcHJldl9zb25nX2lkID0gcGxheWxpc3RbcHJldl9pbmRleF0uaWQ7XHJcblx0dGhpcy5zdGFydChwcmV2X3NvbmdfaWQsIChwbGF5ZWQpPT4ge1xyXG5cdFx0Y2IgJiYgY2IocGxheWVkKVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuUGxheWVySGVscGVyLm5leHQgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCBwbGF5ZWQgPSBTdG9yYWdlLmdldF9wbGF5ZWQoKTtcclxuXHRsZXQgY3VycmVudF9zb25nX2lkID0gcGxheWVkLmlkO1xyXG5cdGxldCBwbGF5bGlzdCA9IFN0b3JhZ2UuZ2V0X2N1cnJlbnRfcGxheWxpc3QoKTtcclxuXHRcclxuXHRsZXQgbmV4dF9pbmRleCA9IDA7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5bGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGN1cnJlbnRfc29uZ19pZCA9PSBwbGF5bGlzdFtpXS5pZCkge1xyXG5cdFx0XHRpZiAoaSArIDEgPCBwbGF5bGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRuZXh0X2luZGV4ID0gaSArIDE7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnNvbGUubG9nKG5leHRfaW5kZXgpO1xyXG5cdGxldCBuZXh0X3NvbmdfaWQgPSBwbGF5bGlzdFtuZXh0X2luZGV4XS5pZDtcclxuXHR0aGlzLnN0YXJ0KG5leHRfc29uZ19pZCwgKHBsYXllZCk9PiB7XHJcblx0XHRjYiAmJiBjYihwbGF5ZWQpXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtPYmplY3R9IHNvbmdfaWRcclxuICog5Lyg5YWl5q2M5puyaWTmkq3mlL5cclxuICovXHJcblBsYXllckhlbHBlci5zdGFydCA9IGZ1bmN0aW9uKHNvbmdfaWQsIGNiKSB7XHJcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcclxuXHRsZXQgcGxheWVkID0gU3RvcmFnZS5nZXRfcGxheWVkKCk7XHJcblx0XHJcblx0U29uZy5nZXRfc29uZ19kZXRhaWwoc29uZ19pZCwgKGRhdGEpPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRsZXQgc29uZyA9IGRhdGEuc29uZ3NbMF07XHJcblx0XHRsZXQgc29uZ19uYW1lID0gc29uZy5uYW1lO1xyXG5cdFx0bGV0IGNvdmVyX2ltYWdlID0gc29uZy5hbC5waWNVcmw7XHJcblx0XHRsZXQgY3VycmVudF9wbGF5ZWQgPSBwbGF5ZWQ7XHJcblx0XHRsZXQgcGxheWVkX211c2ljX2lkID0gY3VycmVudF9wbGF5ZWQuaWQ7XHJcblx0XHRcclxuXHRcdGlmIChzb25nX2lkID09IHBsYXllZF9tdXNpY19pZCkge1xyXG5cdFx0XHQvLyDot7Povazmkq3mlL7or6bmg4XpobXlubbmkq3mlL5cclxuXHRcdFx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcclxuXHRcdFx0aWYgKHBsYXllci5pc1BhdXNlZCgpKSB7XHJcblx0XHRcdFx0cGxheWVyLnBsYXkoKCk9Pnt9LChlKT0+IHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pOztcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB0aGlzLnR1cm4oKTtcclxuXHRcdFx0SGVscGVyLnRvKCcuLi9wbGF5L3BsYXknKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRTb25nLmdldF9zb25nX3VybChzb25nX2lkLCAocmVzKT0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0bGV0IHVybCA9IHJlcy5kYXRhWzBdLnVybDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICghdXJsKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdEhlbHBlci50b2FzdCgnbm9uZScsICfkurLniLHnmoQsIOaaguaXoOivpeatjOabsui1hOa6kH4nLCAzMDAwLCBmYWxzZSwgJ2JvdHRvbScpO1xyXG5cdFx0XHRcdH0sIDEwKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGNyZWF0b3JzID0gc29uZy5hcjtcclxuXHRcdFx0bGV0IGNyZWF0b3Jfc3RyID0gJyc7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKGxldCBjcmVhdG9yIG9mIGNyZWF0b3JzKSB7XHJcblx0XHRcdFx0Y3JlYXRvcl9zdHIgPSBjcmVhdG9yX3N0ciArIGNyZWF0b3IubmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHBsYXllZCA9IHtcclxuXHRcdFx0XHRpZDogc29uZ19pZCxcclxuXHRcdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0XHRuYW1lOiBzb25nX25hbWUsXHJcblx0XHRcdFx0Y3JlYXRvcjogY3JlYXRvcl9zdHIsXHJcblx0XHRcdFx0Y292ZXJfaW1hZ2U6IGNvdmVyX2ltYWdlLFxyXG5cdFx0XHRcdC8vIHRpbWU6IDAsIC8v5LiK5qyh5pKt5pS+55qE5L2N572uXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0X3VybCh1cmwpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y2IgJiYgY2IocGxheWVkKTtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuUGxheWVySGVscGVyLnR1cm4gPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xyXG5cdGlmIChwbGF5ZXIuaXNQYXVzZWQoKSkge1xyXG5cdFx0cGxheWVyLnBsYXkoKCk9Pnt9LChlKT0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTs7XHJcblx0fWVsc2Uge1xyXG5cdFx0cGxheWVyLnBhdXNlKCk7XHJcblx0fVxyXG5cdHJldHVybjtcclxufVxyXG5cclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi4vdXRpbHMvc3RvcmFnZS5qcydcclxuaW1wb3J0IFNvbmcgZnJvbSAnLi4vbW9kZWwvc29uZy5qcyc7XHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcydcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxheWVySGVscGVyIiwiLy8g57yT5a2Y57uf5LiA566h55CGXHJcblxyXG5sZXQgU3RvcmFnZSA9IHt9XHJcblxyXG5jb25zdCBMQVRFU1RfUExBWUVEID0gJ2xhdGVzdF9wbGF5ZWQnOyAvL+acgOWQjuS4gOS4quaSreaUvuiusOW9lVxyXG5jb25zdCBDVVJSRU5UX1BMQVlMSVNUID0gJ2N1cnJlbnRfcGxheWxpc3QnOyAvLyDlvZPliY3mkq3mlL7liJfooahcclxuY29uc3QgSVNfTE9HSU4gPSAnaXNfbG9naW4nOyAvLyDnmbvlvZXnirbmgIFcclxuY29uc3QgUExBWV9NT0RFID0gJ3BsYXlfbW9kZSc7XHJcblxyXG5TdG9yYWdlLmlzX2xvZ2luID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGdldChJU19MT0dJTik7XHJcbn1cclxuXHJcblN0b3JhZ2Uuc2V0X2lzX2xvZ2luID0gZnVuY3Rpb24odikge1xyXG5cdHNldChJU19MT0dJTiwgdik7XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG5TdG9yYWdlLmdldF9wbGF5ZWQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZ2V0KExBVEVTVF9QTEFZRUQpO1xyXG59XHJcblxyXG5TdG9yYWdlLnNldF9wbGF5ZWQgPSBmdW5jdGlvbih2KSB7XHJcblx0c2V0KExBVEVTVF9QTEFZRUQsIHYpO1xyXG5cdHJldHVybjtcclxufVxyXG5TdG9yYWdlLmdldF9jdXJyZW50X3BsYXlsaXN0ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGdldChDVVJSRU5UX1BMQVlMSVNUKTtcclxufVxyXG5cclxuU3RvcmFnZS5zZXRfY3VycmVudF9wbGF5bGlzdCA9IGZ1bmN0aW9uKHYpIHtcclxuXHRzZXQoQ1VSUkVOVF9QTEFZTElTVCwgdik7XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG5TdG9yYWdlLmdldF9wbGF5X21vZGUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZ2V0KFBMQVlfTU9ERSk7XHJcbn1cclxuXHJcblN0b3JhZ2Uuc2V0X3BsYXlfbW9kZSA9IGZ1bmN0aW9uKHYpIHtcclxuXHRzZXQoUExBWV9NT0RFLCB2KTtcclxuXHRyZXR1cm47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldChrLCB2KSB7XHJcblx0dHJ5IHtcclxuXHQgICAgdW5pLnNldFN0b3JhZ2VTeW5jKGssIHYpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHQgICAgLy8gZXJyb3JcclxuXHR9XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoaykge1xyXG5cdHRyeSB7XHJcblx0ICAgIHJldHVybiB1bmkuZ2V0U3RvcmFnZVN5bmMoayk7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdCAgICBjb25zb2xlLmxvZyhlKTtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RvcmFnZTsiLCJsZXQgU29uZyA9IHt9O1xyXG5cclxuU29uZy5nZXRfc29uZ191cmwgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TT05HO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRpZDogaWQsXHJcblx0XHRicjogMzIwMDAwXHJcblx0fVxyXG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuU29uZy5nZXRfbHlyaWMgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MWVJJQztcclxuXHRcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0aWQ6IGlkLFxyXG5cdH1cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuU29uZy5nZXRfc29uZ19kZXRhaWwgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TT05HX0RFVEFJTDtcclxuXHRcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0aWRzOiBpZCxcclxuXHR9XHJcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0XHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTb25nOyIsImZ1bmN0aW9uIGdldCh1cmwsIHBhcmFtcywgc3VjY2Vzc19jYiwgZmFpbGVkX2NiKSB7XHJcblx0XHJcblx0aGVscGVyLnRvYXN0KCdsb2FkaW5nJywgJ+WKoOi9veS4rS4uLicsIDEwMDAwKVxyXG5cdFxyXG5cdGxldCB1cmkgPSBjb25maWcuSE9TVCArIHVybDtcclxuXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmksIFxyXG5cdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0bWV0aG9kOlwiR0VUXCIsXHJcblx0XHRzdWNjZXNzOiAocmVzKT0+e1xyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2Vzc19jYiAmJiBzdWNjZXNzX2NiKHJlcyk7XHJcblx0XHR9LFxyXG5cdFx0ZmFpbDoocmVzKSA9PiB7XHJcblx0XHRcdGZhaWxlZF9jYiAmJiBmYWlsZWRfY2IocmVzKTtcclxuXHRcdCAgICBjb25zb2xlLmxvZygncmVxdWVzdF9mYWlsOnVybDonICsgdXJsICsgJyA7ICcgKyAnZXJyTXNnOicgKyByZXMuZXJyTXNnKTtcclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZTogKCk9PiB7XHJcblx0XHRcdHVuaS5oaWRlVG9hc3QoKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSBcclxuXHJcbmZ1bmN0aW9uIHBvc3QodXJsLCBwYXJhbXMsIHN1Y2Nlc3NfY2IsIGZhaWxlZF9jYikge1xyXG5cdFxyXG5cdGhlbHBlci50b2FzdCgnbG9hZGluZycsICfliqDovb3kuK0uLi4nLCAxMDAwMClcclxuXHRcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IGNvbmZpZy5IT1NUICsgdXJsLCBcclxuXHRcdGRhdGE6IHBhcmFtcyxcclxuXHRcdG1ldGhvZDpcIlBPU1RcIiwgICBcclxuXHRcdHN1Y2Nlc3M6IChyZXMpPT57XHJcblx0XHRcdHN1Y2Nlc3NfY2IgJiYgc3VjY2Vzc19jYihyZXMpO1xyXG5cdFx0fSxcclxuXHRcdGZhaWw6KHJlcykgPT4ge1xyXG5cdFx0ICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0X2ZhaWw6dXJsOicgKyB1cmwgKyAnIDsgJyArICdlcnJNc2c6JyArIHJlcy5lcnJNc2cpO1xyXG5cdFx0XHRmYWlsZWRfY2IgJiYgZmFpbGVkX2NiKHJlcyk7XHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6ICgpPT4ge1xyXG5cdFx0XHR1bmkuaGlkZVRvYXN0KCk7XHJcblx0XHR9XHJcblx0fSkgICBcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuXHQvLzExMS4xMy4xMDAuOTJcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0ICAgIHVybDogJ2h0dHBzOi8vd3d3LmJhaWR1LmNvbS8nLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdCAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0ICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0ICAgIH1cclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuXHRnZXQsXHJcblx0cG9zdCxcclxuXHR0ZXN0XHJcbn0iLCJsZXQgVXNlciA9IHt9O1xyXG5cclxuVXNlci5jaGVja19waG9uZSA9IGZ1bmN0aW9uKHBob25lLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkNIRUNLX1BIT05FO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRwaG9uZTogcGhvbmVcclxuXHR9XHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0XHJcblx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKHJlcy5kYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy/nmbvpmYZcclxuVXNlci5sb2dpbiA9IGZ1bmN0aW9uKHBob25lLCBwYXNzd29yZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5DRUxMUEhPTkVfTE9HSU47XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHBob25lOiBwaG9uZSxcclxuXHRcdHBhc3N3b3JkOiBwYXNzd29yZFxyXG5cdH1cclxuXHRcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRpZiAocmVzLmRhdGEpIHtcclxuXHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdGdldF9zdGF0dXMoKHN0YXR1cyk9PiB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGNiICYmIGNiKHN0YXR1cyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRoZWxwZXIudG9hc3QoJ25vbmUnLCBkYXRhLm1zZywgMzAwMCwgZmFsc2UsICdib3R0b20nKTtcclxuXHRcdFx0fVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuVXNlci5yZWcgPSBmdW5jdGlvbihwaG9uZSwgcGFzc3dvcmQsIGNhcHRjaGEsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUEhPTkVfUkVHO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRwaG9uZTogcGhvbmUsXHJcblx0XHRwYXNzd29yZDogcGFzc3dvcmQsXHJcblx0XHRjYXB0Y2hhOiBjYXB0Y2hhXHJcblx0fVxyXG5cdFxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0Y2IgJiYgY2IocmVzLmRhdGEpXHJcblx0fSlcclxufVxyXG5cclxuVXNlci5sb2dvdXQgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkxPR09VVDtcclxuXHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCB7fSwgKHJlcyk9PiB7XHJcblx0XHRcclxuXHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IocmVzLmRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5Vc2VyLnNlbmRfY2FwdGNoYSA9IGZ1bmN0aW9uKHBob25lLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNFTkRfQ0FQVENIQTtcclxuXHRcclxuXHRcclxuXHRyZXF1ZXN0LnBvc3QodXJsLCB7cGhvbmU6IHBob25lfSwgKHJlcyk9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0Y2IgJiYgY2IocmVzLmRhdGEpXHJcblx0fSlcclxufVxyXG5Vc2VyLnZlcmlmeV9jYXB0Y2hhID0gZnVuY3Rpb24ocGhvbmUsIGNhcHRjaGEsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVkVSSUZZX0NBUFRDSEE7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHBob25lOiBwaG9uZSxcclxuXHRcdGNhcHRjaGE6IGNhcHRjaGFcclxuXHR9XHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdGNiICYmIGNiKHJlcy5kYXRhKVxyXG5cdH0pXHJcbn1cclxuXHJcbi8v55m75b2V5qOA5p+lXHJcblVzZXIuY2hlY2tfbG9naW4gPSBmdW5jdGlvbihjYikge1xyXG5cdFxyXG5cdGdldF9zdGF0dXMoKHJlcyk9PiB7XHJcblx0XHRjYiAmJiBjYihyZXMpO1xyXG5cdH0pXHJcbn1cclxuXHJcbi8v6I635Y+W55So5oi3bXYs5q2M5Y2VLCBkaiwg5pS26JeP5pWw6YePXHJcblVzZXIuZ2V0X3N1YmNvdW50ID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TVUJDT1VOVDtcclxuXHRcclxuXHRyZXF1ZXN0LnBvc3QodXJsLCB7fSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0Y2IgJiYgY2IoZGF0YSk7XHJcblx0fSlcclxufVxyXG5cclxuLy/ojrflj5bnlKjmiLfotYTmlplcclxuVXNlci5nZXRfdXNlcl9kZXRhaWwgPSBmdW5jdGlvbih1aWQsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVVNFUl9ERVRBSUw7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHVpZDogdWlkXHJcblx0fVxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8v6I635Y+W55So5oi35q2M5Y2V5YiX6KGoXHJcblVzZXIuZ2V0X3BsYXlsaXN0ID0gZnVuY3Rpb24odWlkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlVTRVJfUExBWUxJU1Q7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHVpZDogdWlkXHJcblx0fVxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblVzZXIuZ2V0X2xpa2VsaXN0ID0gZnVuY3Rpb24odWlkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlVTRVJfTElLRV9MSVNUO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHR1aWQ6IHVpZFxyXG5cdH1cclxuXHRyZXF1ZXN0LnBvc3QodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5Vc2VyLmxpa2UgPSBmdW5jdGlvbihtdXNpY19pZCwgbGlrZSwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MSUtFO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRpZDogbXVzaWNfaWQsXHJcblx0XHRsaWtlOiBsaWtlXHJcblx0fVxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8v6I635Y+W55So5oi354q25oCBXHJcbmZ1bmN0aW9uIGdldF9zdGF0dXMoY2IpIHtcclxuXHRsZXQgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MT0dJTl9TVEFUVVM7XHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCB7dGltZXN0YW1wOiB0c30sIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHRcdFxyXG5cdFx0aWYgKGRhdGEgJiYgZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn6I635Y+W54q25oCB5aSx6LSlJyk7XHJcblx0XHRcdGNiICYmIGNiKGZhbHNlKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXIuanMnO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcjsiLCJsZXQgUGxheWxpc3QgPSB7fTtcclxuXHJcblBsYXlsaXN0LmdldF9wbGF5bGlzdF9kZXRhaWwgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5QTEFZTElTVF9ERVRBSUw7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdGlkOiBpZFxyXG5cdH1cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5bGlzdDsiLCJsZXQgU2VhcmNoID0ge307XHJcblxyXG5TZWFyY2guZ2V0X2hvdF9saXN0ID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5IT1RfU0VBUkNIO1xyXG5cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHt9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4vKipcclxuICog5Y2V6aG55pCc57SiXHJcbiAqIOatpOaOpeWPo3Bvc3TmlrnlvI/mnInpl67popgsIOWIhumhteWPguaVsOaXoOaViFxyXG4gKiBcclxuICog5b+F6YCJ5Y+C5pWwOiBcclxuICoga2V5d29yZHM6IOWFs+mUruivjVxyXG4gKiBcclxuICog5Y+v6YCJ5Y+C5pWwOiBcclxuICogbGltaXQgOiDov5Tlm57mlbDph48gLCDpu5jorqTkuLogMzAgXHJcbiAqIG9mZnNldCA6IOWBj+enu+aVsOmHj++8jOeUqOS6juWIhumhtSAsIOWmgiA6IOWmgiA6KCDpobXmlbAgLTEpKjMwLCDlhbbkuK0gMzAg5Li6IGxpbWl0IOeahOWAvCAsIOm7mOiupOS4uiAwXHJcbiAqIHR5cGU6IOaQnOe0ouexu+Wei++8m+m7mOiupOS4uiAxIOWNs+WNleabsiAsIOWPluWAvOaEj+S5iSA6IDE6IOWNleabsiwgMTA6IOS4k+i+kSwgMTAwOiDmrYzmiYssIDEwMDA6IOatjOWNlSwgMTAwMjog55So5oi3LCAxMDA0OiBNViwgMTAwNjog5q2M6K+NLCAxMDA5OiDnlLXlj7AsIDEwMTQ6IOinhumikSwgMTAxODrnu7zlkIhcclxuICovXHJcblNlYXJjaC5zZWFyY2ggPSBmdW5jdGlvbihrZXl3b3JkLCB0eXBlLCBwYWdlLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNFQVJDSDtcclxuXHRsZXQgbGltaXQgPSAxMDtcclxuXHRsZXQgb2Zmc2V0ID0gcGFnZSAqIGxpbWl0O1xyXG5cdHR5cGUgPSB0eXBlIHx8IDE7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdGtleXdvcmRzOiBrZXl3b3JkLFxyXG5cdFx0bGltaXQ6IGxpbWl0LFxyXG5cdFx0b2Zmc2V0OiBvZmZzZXQsXHJcblx0XHR0eXBlOiB0eXBlXHJcblx0fVxyXG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoOyIsImxldCBPdGhlciA9IHt9O1xyXG5cclxuT3RoZXIuYmFubmVyID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5CQU5ORVI7XHJcblxyXG5cdHJlcXVlc3QuZ2V0KHVybCwge3R5cGU6IDF9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4vLyDpnIDnmbvpmYblkI7osIPnlKhcclxuT3RoZXIucmVjb21tZW5kX3Jlc291cmNlID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5SRUNPTU1FTkRfUkVTT1VSQ0U7XHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCB7fSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE90aGVyOyIsImxldCBBbGJ1bSA9IHt9O1xyXG5cclxuQWxidW0uZGV0YWlsID0gZnVuY3Rpb24oaWQsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuQUxCVU1fREVUQUlMO1xyXG5cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHtpZDogaWR9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWxidW07IiwibGV0IFBlcnNvbmFsaXplZCA9IHt9O1xyXG5cclxuUGVyc29uYWxpemVkLnBsYXlsaXN0ID0gZnVuY3Rpb24oY2IsIGxpbWl0KSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUEVSU09OQUxJWkVEX1BMQVlMSVNUO1xyXG5cdGxpbWl0ID0gbGltaXQgfHwgMTA7XHJcblx0cmVxdWVzdC5nZXQodXJsLCB7bGltaXQ6IGxpbWl0fSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuUGVyc29uYWxpemVkLm5ld3NvbmcgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlBFUlNPTkFMSVpFRF9ORVdTT05HO1xyXG5cdHJlcXVlc3QuZ2V0KHVybCwge30sIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQZXJzb25hbGl6ZWQ7IiwibGV0IFRvcCA9IHt9O1xyXG5cclxuVG9wLmFsYnVtID0gZnVuY3Rpb24oY2IsIGxpbWl0LCBvZmZzZXQpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5UT1BfQUxCVU07XHJcblx0bGltaXQgPSBsaW1pdCB8fCAxMDtcclxuXHRvZmZzZXQgPSBvZmZzZXQgfHwgMDtcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHtsaW1pdDogbGltaXQsIG9mZnNldDogb2Zmc2V0fSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRvcDsiLCJsZXQgVmlkZW8gPSB7fTtcclxuXHJcblZpZGVvLmxpc3QgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5WSURFT19MSVNUO1xyXG5cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHtpZDogaWR9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVmlkZW87IiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvbG9naW4vY2FwdGNoYS5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9sb2dpbi9jYXB0Y2hhJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NhcHRjaGEubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODc0NTQ5YSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2FwdGNoYS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhcHRjaGEubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vY2FwdGNoYS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2FwdGNoYS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI3OGUwN2YwMFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9jYXB0Y2hhLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FwdGNoYS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU4NzQ1NDlhJm1wVHlwZT1wYWdlXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1wicGFnZVwiXSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRpcFwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widGl0bGVcIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0aXRsZS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLpqozor4HnoIHlt7Llj5HpgIHoh7NcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInBob25lXCJdIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wicGhvbmUtdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybWF0X3Bob25lKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImNhcHRjaGFcIl0sIG9uOiB7IGNsaWNrOiBfdm0udG9fZm9jdXMgfSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jYXB0Y2hhX29iaiwgZnVuY3Rpb24odiwgaykge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBrLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIml0ZW1cIl0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm51bWJlclwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIzMnJweFwiLCBoZWlnaHQ6IFwiNTBycHhcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHYpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYm90dG9tX2xpbmVcIl0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB2ID8gXCJsaW5lLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ1LWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpbnB1dFwiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG1heGxlbmd0aDogXCI0XCIsXG4gICAgICAgICAgICAgIGZvY3VzOiBfdm0uZm9jdXMsXG4gICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2FwdGNoYVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uY2FwdGNoYSA9ICRldmVudC5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5jYXB0Y2hhX2lucHV0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGJsdXI6IF92bS5vbl9ibHVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXB0Y2hhLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcHRjaGEubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0aXBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGUtdGV4dFwiPumqjOivgeeggeW3suWPkemAgeiHszwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBob25lXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJwaG9uZS10ZXh0XCI+e3tmb3JtYXRfcGhvbmV9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImNhcHRjaGFcIiBAdGFwPVwidG9fZm9jdXNcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyO1wiIHYtZm9yPVwiKHYsIGspIGluIGNhcHRjaGFfb2JqXCIgOmtleT1cImtcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm51bWJlclwiIHN0eWxlPVwiZm9udC1zaXplOiAzMnJweDtoZWlnaHQ6IDUwcnB4O1wiPnt7dn19PC90ZXh0PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tX2xpbmVcIiA6Y2xhc3M9XCJ2PydsaW5lLWFjdGl2ZScgOiAnJ1wiIHN0eWxlPVwiXCI+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDxpbnB1dCBAaW5wdXQ9XCJjYXB0Y2hhX2lucHV0XCIgQGJsdXI9XCJvbl9ibHVyXCIgbWF4bGVuZ3RoPVwiNFwiIDpmb2N1cz1cImZvY3VzXCIgdi1tb2RlbD1cImNhcHRjaGFcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJpbnB1dFwiIC8+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgJHJlcGVhdGVyIGZyb20gJy4uLy4uL3V0aWxzL3JlcGVhdGVyLmpzJztcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGZvY3VzOiB0cnVlLFxyXG5cdFx0XHRcdHBob25lOiAnJyxcclxuXHRcdFx0XHRjYXB0Y2hhOiAnJyxcclxuXHRcdFx0XHRjYXB0Y2hhX29iajoge1xyXG5cdFx0XHRcdFx0b25lOiAnJyxcclxuXHRcdFx0XHRcdHR3bzogJycsXHJcblx0XHRcdFx0XHR0aHJlZTogJycsXHJcblx0XHRcdFx0XHRmb3VyOiAnJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRmb3JtYXRfcGhvbmUoKSB7XHJcblx0XHRcdFx0bGV0IHBob25lID0gdGhpcy5waG9uZTtcclxuXHRcdFx0XHRpZiAocGhvbmUubGVuZ3RoID09IDExKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5waG9uZS5zdWJzdHIoMCwzKSArIFwiKioqKlwiICsgdGhpcy5waG9uZS5zdWJzdHIoNyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0Y2FwdGNoYSh2YWx1ZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuY2FwdGNoYV9vYmoub25lID0gdmFsdWUuc3Vic3RyKDAsIDEpO1xyXG5cdFx0XHRcdHRoaXMuY2FwdGNoYV9vYmoudHdvID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xyXG5cdFx0XHRcdHRoaXMuY2FwdGNoYV9vYmoudGhyZWUgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XHJcblx0XHRcdFx0dGhpcy5jYXB0Y2hhX29iai5mb3VyID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xyXG5cdFx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPT0gNCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jaGVja19jYXB0Y2hhKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9ucykge1xyXG5cdFx0XHRpZiAob3B0aW9ucy5waG9uZSkge1xyXG5cdFx0XHRcdHRoaXMucGhvbmUgPSBvcHRpb25zLnBob25lO1xyXG5cdFx0XHRcdHRoaXMuc2VuZF9jYXB0Y2hhKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNoZWNrX2NhcHRjaGEoKSB7XHJcblx0XHRcdFx0bGV0IHBob25lID0gdGhpcy5waG9uZTtcclxuXHRcdFx0XHRsZXQgY2FwdGNoYSA9IHRoaXMuY2FwdGNoYTtcclxuXHRcdFx0XHQkcmVwZWF0ZXIudXNlci52ZXJpZnlfY2FwdGNoYShwaG9uZSwgY2FwdGNoYSwgKHJlcyk9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHQvLyDpqozor4HnoIHmraPnoa4sIOi3s+i9rOiHs+azqOWGjC/kv67mlLnlr4bnoIHpobXpnaJcclxuXHRcdFx0XHRcdFx0JHJlcGVhdGVyLmhlbHBlci50bygnLi9wYXNzd29yZD9jYXB0Y2hhPScgKyBjYXB0Y2hhICsgJyZwaG9uZT0nICsgcGhvbmUgKyAnJmZyb209cmVnJyk7XHJcblx0XHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0JHJlcGVhdGVyLmhlbHBlci50bygnLi9wYXNzd29yZD9jYXB0Y2hhPScgKyBjYXB0Y2hhICsgJyZwaG9uZT0nICsgcGhvbmUgKyAnJmZyb209cmVnJyk7XHJcblx0XHRcdFx0XHRcdFx0JHJlcGVhdGVyLmhlbHBlci50b2FzdCgnbm9uZScsICfpqozor4HnoIHplJnor68nLCA0MDAwLCBmYWxzZSwgJ2JvdHRvbScpO1xyXG5cdFx0XHRcdFx0XHR9LCAxMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvX2ZvY3VzKCkge1xyXG5cdFx0XHRcdHRoaXMuZm9jdXMgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0b25fYmx1cigpIHtcclxuXHRcdFx0XHR0aGlzLmZvY3VzID0gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNhcHRjaGFfaW5wdXQoZXZlbnQpIHtcclxuXHRcdFx0XHR0aGlzLmNhcHRjaGEgPSBldmVudC5kZXRhaWwudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbmRfY2FwdGNoYSgpIHtcclxuXHRcdFx0XHRsZXQgcGhvbmUgPSB0aGlzLnBob25lO1xyXG5cdFx0XHRcdCRyZXBlYXRlci51c2VyLnNlbmRfY2FwdGNoYShwaG9uZSwgKHJlcyk9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdCRyZXBlYXRlci5oZWxwZXIudG9hc3QoJ25vbmUnLCAn6aqM6K+B56CB5bey5Y+R6YCBJywgMzAwMCwgZmFsc2UsICdib3R0b20nKTtcclxuXHRcdFx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHQkcmVwZWF0ZXIuaGVscGVyLnRvYXN0KCdub25lJywgcmVzLm1lc3NhZ2UsIDQwMDAsIGZhbHNlLCAnYm90dG9tJyk7XHJcblx0XHRcdFx0XHRcdH0sIDEwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LnBhZ2Uge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHBhZGRpbmctdG9wOiAxMDBycHg7XHJcblx0fVxyXG5cdC50aXAge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAzMHJweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0LnRpdGxlLXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHR9XHJcblx0LnBob25lLXRleHQge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHR9XHJcblx0LmNhcHRjaGEge1xyXG5cdFx0aGVpZ2h0OiAzMDBycHg7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0XHJcblx0XHRwYWRkaW5nOiAxMDBycHggMTUwcnB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblx0LmJvdHRvbV9saW5lIHtcclxuXHRcdHdpZHRoOiA5MHJweDtoZWlnaHQ6IDVycHg7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMyk7XHJcblx0fVxyXG5cdC5saW5lLWFjdGl2ZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHQuaW5wdXQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtOTk5OXJweDtcclxuXHRcdGxlZnQ6IC05OTk5cnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FwdGNoYS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXB0Y2hhLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicGFnZVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTAwcnB4XCJcbiAgfSxcbiAgXCJ0aXBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwidGl0bGUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBob25lLXRleHRcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiXG4gIH0sXG4gIFwiY2FwdGNoYVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIzMDBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTAwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMDBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTUwcnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImJvdHRvbV9saW5lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiOTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjVycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zKVwiXG4gIH0sXG4gIFwibGluZS1hY3RpdmVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwiaW5wdXRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiLTk5OTlycHhcIixcbiAgICBcImxlZnRcIjogXCItOTk5OXJweFwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9