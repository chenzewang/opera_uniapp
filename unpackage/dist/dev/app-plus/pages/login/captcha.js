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

module.exports = {}

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
                                                                                                      * @LastEditTime: 2020-04-16 22:51:33
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy5qc29uPzYyOGYiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL3BhZ2VzLmpzb24/YTIyZCIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvbWFpbi5qcz9iYTA5Iiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9BcHAudnVlPzEyMWUiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL0FwcC52dWU/MDJiOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1IiwidW5pLWFwcDovLy91dGlscy9yZXBlYXRlci5qcyIsInVuaS1hcHA6Ly8vY29uZmlnL2NvbmZpZy5qcyIsInVuaS1hcHA6Ly8vaGVscGVyL2hlbHBlci5qcyIsInVuaS1hcHA6Ly8vdXRpbHMvcGxheWVyLmpzIiwidW5pLWFwcDovLy91dGlscy9zdG9yYWdlLmpzIiwidW5pLWFwcDovLy9tb2RlbC9zb25nLmpzIiwidW5pLWFwcDovLy91dGlscy9yZXF1ZXN0LmpzIiwidW5pLWFwcDovLy9tb2RlbC91c2VyLmpzIiwidW5pLWFwcDovLy9tb2RlbC9wbGF5bGlzdC5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvc2VhcmNoLmpzIiwidW5pLWFwcDovLy9tb2RlbC9vdGhlci5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvYWxidW0uanMiLCJ1bmktYXBwOi8vL21vZGVsL3BlcnNvbmFsaXplZC5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvdG9wLmpzIiwidW5pLWFwcDovLy9tb2RlbC92aWRlby5qcyIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvbWFpbi5qcz84MDY0Iiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9jYXB0Y2hhLm52dWU/NmZlYSIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvcGFnZXMvbG9naW4vY2FwdGNoYS5udnVlPzM4NjkiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL3BhZ2VzL2xvZ2luL2NhcHRjaGEubnZ1ZT81Y2RlIiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9jYXB0Y2hhLm52dWU/ZjUyZCIsInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vY2FwdGNoYS5udnVlIiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9jYXB0Y2hhLm52dWU/NGMyOCIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvcGFnZXMvbG9naW4vY2FwdGNoYS5udnVlPzRmMjMiXSwibmFtZXMiOlsiU1RBVF9WRVJTSU9OIiwidmVyc2lvbiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsInJ1bnRpbWUiLCJnZXREQ2xvdWRJZCIsImUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsIk9iamVjdCIsImtleXMiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwiaSIsInNpZ24iLCJvcHRpb25zIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0U3BsaWNpbmciLCJkYXRhIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwicHJvY2VzcyIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImdldExhc3RWaXNpdFRpbWUiLCJQQUdFX1JFU0lERU5DRV9USU1FIiwiRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsIkxhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsInNldFBhZ2VSZXNpZGVuY2VUaW1lIiwiZ2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJUT1RBTF9fVklTSVRfX0NPVU5UIiwiZ2V0VG90YWxWaXNpdENvdW50IiwiY291bnQiLCJHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zIiwicHJvcCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNldF9fRmlyc3RfX1RpbWUiLCJTZXRfX0xhc3RfX1RpbWUiLCJnZXRGaXJzdFRpbWUiLCJnZXRMYXN0VGltZSIsImdldFJlc2lkZW5jZVRpbWUiLCJ0eXBlIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiJG9wdGlvbnMiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwiY29uZmlnIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwidiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJyZXBsYWNlIiwibXBzZGsiLCJTREtWZXJzaW9uIiwibXB2IiwibGFuZyIsImxhbmd1YWdlIiwicHIiLCJwaXhlbFJhdGlvIiwid3ciLCJ3aW5kb3dXaWR0aCIsIndoIiwid2luZG93SGVpZ2h0Iiwic3ciLCJzY3JlZW5XaWR0aCIsInNoIiwic2NyZWVuSGVpZ2h0IiwicGF0aCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsInVybCIsIl9zZW5kRXZlbnRSZXF1ZXN0Iiwia2V5IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwicmVxdWVzdCIsInZhbHVlIiwiZV9uIiwiZV92IiwidG9TdHJpbmciLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJ0dG4iLCJ0dHBqIiwidHRjIiwicmVxdWVzdERhdGEiLCJwdXNoIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJmb3JFYWNoIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImFyZ3MiLCJjb21wbGV0ZSIsIl9sb2dpbiIsIl9zaGFyZSIsIl9wYXltZW50IiwiX3BhZ2VTaG93IiwiX2FwcGxpY2F0aW9uU2hvdyIsIl9wYWdlSGlkZSIsIl9hcHBsaWNhdGlvbkhpZGUiLCJlbSIsImluZm8iLCJlbVZhbCIsIm1lc3NhZ2UiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwiY2FsbCIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiIsInR5cG9mIiwicyIsInByb3RvdHlwZSIsInN1YnN0cmluZyIsImlzRGVidWdNb2RlIiwiX19jaGFubmVsSWRfXyIsImxvZyIsIl9sZW4iLCJhcmd1bWVudHMiLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsImZvcm1hdExvZyIsInNoaWZ0IiwicG9wIiwibXNncyIsIm1hcCIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwidlR5cGUiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsIm1zZyIsImxhc3RNc2ciLCJqb2luIiwiaW5kZXhPZiIsImhlbHBlciIsInVzZXIiLCJwbGF5bGlzdCIsInBsYXllciIsInN0b3JhZ2UiLCJzb25nIiwic2VhcmNoIiwib3RoZXIiLCJhbGJ1bSIsInBlcnNvbmFsaXplZCIsInRvcCIsInZpZGVvIiwic3lzdGVtSW5mbyIsInN0YXR1c19iYXJfaGVpZ2h0Iiwic3RhdHVzQmFySGVpZ2h0IiwiSE9TVCIsImhvc3Q5MDkwIiwiQVBJIiwiQ0VMTFBIT05FX0xPR0lOIiwiTE9HSU5fU1RBVFVTIiwiQ0hFQ0tfUEhPTkUiLCJMT0dPVVQiLCJTRU5EX0NBUFRDSEEiLCJWRVJJRllfQ0FQVENIQSIsIlBIT05FX1JFRyIsIlNVQkNPVU5UIiwiVVNFUl9ERVRBSUwiLCJVU0VSX1BMQVlMSVNUIiwiVVNFUl9MSUtFX0xJU1QiLCJMSUtFIiwiUExBWUxJU1RfREVUQUlMIiwiQUxCVU1fREVUQUlMIiwiU09ORyIsIkxZUklDIiwiU09OR19ERVRBSUwiLCJIT1RfU0VBUkNIIiwiU0VBUkNIIiwiQkFOTkVSIiwiUkVDT01NRU5EX1JFU09VUkNFIiwiUEVSU09OQUxJWkVEX1BMQVlMSVNUIiwiUEVSU09OQUxJWkVEX05FV1NPTkciLCJUT1BfQUxCVU0iLCJWSURFT19MSVNUIiwicGxheWVkX3dhdGNoIiwiY2IiLCJvYmoiLCJnZXRBcHAiLCJnbG9iYWxEYXRhIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwic2V0IiwiX3BsYXllZCIsImdldCIsImJhY2tncm91bmRlciIsIm9zIiwibmFtZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiYW5kcm9pZCIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJtb3ZlVGFza1RvQmFjayIsInRvIiwibW9kZSIsIm5hdmlnYXRlVG8iLCJ0b2FzdCIsImljb24iLCJ0ZXh0IiwiZHVyYXRpb24iLCJtYXNrIiwicG9zaXRpb24iLCJzaG93VG9hc3QiLCJQbGF5ZXJIZWxwZXIiLCJnZXRfcGxheWVyIiwic2V0X3VybCIsIlN0b3JhZ2UiLCJnZXRfcGxheWVkIiwic2V0U3R5bGVzIiwicGxheSIsInBhdXNlIiwiZ2V0X3Bvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJnZXRfZHVyYXRpb24iLCJnZXREdXJhdGlvbiIsInNlZWtfdG8iLCJzZWVrVG8iLCJwcmV2IiwicGxheWVkIiwiZ2V0X2N1cnJlbnRfcGxheWxpc3QiLCJjdXJyZW50X3NvbmdfaWQiLCJpZCIsInByZXZfaW5kZXgiLCJwcmV2X3NvbmdfaWQiLCJzdGFydCIsIm5leHQiLCJuZXh0X2luZGV4IiwibmV4dF9zb25nX2lkIiwic29uZ19pZCIsIlNvbmciLCJnZXRfc29uZ19kZXRhaWwiLCJzb25ncyIsInNvbmdfbmFtZSIsImNvdmVyX2ltYWdlIiwiYWwiLCJwaWNVcmwiLCJjdXJyZW50X3BsYXllZCIsInBsYXllZF9tdXNpY19pZCIsImlzUGF1c2VkIiwiSGVscGVyIiwiZ2V0X3NvbmdfdXJsIiwicmVzIiwiY3JlYXRvcnMiLCJhciIsImNyZWF0b3Jfc3RyIiwiY3JlYXRvciIsInR1cm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiTEFURVNUX1BMQVlFRCIsIkNVUlJFTlRfUExBWUxJU1QiLCJJU19MT0dJTiIsIlBMQVlfTU9ERSIsImlzX2xvZ2luIiwic2V0X2lzX2xvZ2luIiwic2V0X3BsYXllZCIsInNldF9jdXJyZW50X3BsYXlsaXN0IiwiZ2V0X3BsYXlfbW9kZSIsInNldF9wbGF5X21vZGUiLCJrIiwicGFyYW1zIiwiYnIiLCJjb2RlIiwiZ2V0X2x5cmljIiwiaWRzIiwic3VjY2Vzc19jYiIsImZhaWxlZF9jYiIsInVyaSIsImVyck1zZyIsImhpZGVUb2FzdCIsInBvc3QiLCJ0ZXN0IiwiVXNlciIsImNoZWNrX3Bob25lIiwicGhvbmUiLCJzdGF0dXNDb2RlIiwibG9naW4iLCJwYXNzd29yZCIsImdldF9zdGF0dXMiLCJzdGF0dXMiLCJyZWciLCJjYXB0Y2hhIiwibG9nb3V0Iiwic2VuZF9jYXB0Y2hhIiwidmVyaWZ5X2NhcHRjaGEiLCJjaGVja19sb2dpbiIsImdldF9zdWJjb3VudCIsImdldF91c2VyX2RldGFpbCIsInVpZCIsImdldF9wbGF5bGlzdCIsImdldF9saWtlbGlzdCIsImxpa2UiLCJtdXNpY19pZCIsInRzIiwidGltZXN0YW1wIiwiUGxheWxpc3QiLCJnZXRfcGxheWxpc3RfZGV0YWlsIiwiU2VhcmNoIiwiZ2V0X2hvdF9saXN0Iiwia2V5d29yZCIsImxpbWl0Iiwib2Zmc2V0Iiwia2V5d29yZHMiLCJPdGhlciIsImJhbm5lciIsInJlY29tbWVuZF9yZXNvdXJjZSIsIkFsYnVtIiwiZGV0YWlsIiwiUGVyc29uYWxpemVkIiwibmV3c29uZyIsIlRvcCIsIlZpZGVvIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFp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QUFDQTtBQUNBO0FBQ0EsS0FWQSxFQXZCQTs7QUFtQ0EsUUFuQ0Esa0JBbUNBLE9BbkNBLEVBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXhDQTtBQXlDQTtBQUNBLGlCQURBLDJCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBLEVBR0EsRUFIQTtBQUlBO0FBQ0EsT0FYQTtBQVlBLEtBaEJBO0FBaUJBLFlBakJBLHNCQWlCQTtBQUNBO0FBQ0EsS0FuQkE7O0FBcUJBLFdBckJBLHFCQXFCQTtBQUNBO0FBQ0EsS0F2QkE7QUF3QkEsaUJBeEJBLHlCQXdCQSxLQXhCQSxFQXdCQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkEsZ0JBM0JBLDBCQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsRUFFQSxFQUZBO0FBR0E7QUFDQSxPQVJBO0FBU0EsS0F0Q0EsRUF6Q0EsRTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQTAzQixDQUFnQixtNEJBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQTk0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy9sb2dpbi9jYXB0Y2hhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExNCk7XG4iLCJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IFNUQVRfVkVSU0lPTiA9IHZlcnNpb247XHJcbmNvbnN0IFNUQVRfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdCc7XHJcbmNvbnN0IFNUQVRfSDVfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdC5naWYnOyBcclxuY29uc3QgUEFHRV9QVkVSX1RJTUUgPSAxODAwO1xyXG5jb25zdCBBUFBfUFZFUl9USU1FID0gMzAwO1xyXG5jb25zdCBPUEVSQVRJTkdfVElNRSA9IDEwO1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5jb25zdCBVVUlEX1ZBTFVFID0gJ19fRENfVVVJRF9WQUxVRSc7XHJcblxyXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xyXG4gIGxldCB1dWlkID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHV1aWQgPSBwbHVzLnJ1bnRpbWUuZ2V0RENsb3VkSWQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdXVpZCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV1aWRcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICB1dWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB1dWlkID0gVVVJRF9WQUxVRTtcclxuICB9XHJcblxyXG4gIGlmICghdXVpZCkge1xyXG4gICAgdXVpZCA9IERhdGUubm93KCkgKyAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIHV1aWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIFVVSURfVkFMVUUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdXVpZDtcclxufVxyXG5cclxuY29uc3QgZ2V0U2dpbiA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBhcnIgPSBPYmplY3Qua2V5cyhzdGF0RGF0YSk7XHJcbiAgbGV0IHNvcnRBcnIgPSBhcnIuc29ydCgpO1xyXG4gIGxldCBzZ2luID0ge307XHJcbiAgbGV0IHNnaW5TdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIHNvcnRBcnIpIHtcclxuICAgIHNnaW5bc29ydEFycltpXV0gPSBzdGF0RGF0YVtzb3J0QXJyW2ldXTtcclxuICAgIHNnaW5TdHIgKz0gc29ydEFycltpXSArICc9JyArIHN0YXREYXRhW3NvcnRBcnJbaV1dICsgJyYnO1xyXG4gIH1cclxuICAvLyBjb25zdCBvcHRpb25zID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIC8vIHNnaW5TdHIgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpICsgJyZrZXk9JyArIFNUQVRfS0VZO1xyXG4gIC8vIGNvbnN0IHNpID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzZ2luU3RyKS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzaWduOiAnJyxcclxuICAgIG9wdGlvbnM6IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3BsaWNpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBzdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcclxuICAgIHN0ciArPSBpICsgJz0nICsgZGF0YVtpXSArICcmJztcclxuICB9XHJcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpXHJcbn07XHJcblxyXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhdGZvcm1OYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTGlzdCA9IHtcclxuICAgICdhcHAtcGx1cyc6ICduJyxcclxuICAgICdoNSc6ICdoNScsXHJcbiAgICAnbXAtd2VpeGluJzogJ3d4JyxcclxuICAgICdtcC1hbGlwYXknOiAnYWxpJyxcclxuICAgICdtcC1iYWlkdSc6ICdiZCcsXHJcbiAgICAnbXAtdG91dGlhbyc6ICd0dCcsXHJcbiAgICAnbXAtcXEnOiAncXEnXHJcbiAgfTtcclxuICByZXR1cm4gcGxhdGZvcm1MaXN0W3Byb2Nlc3MuZW52LlZVRV9BUFBfUExBVEZPUk1dO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFja05hbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHBhY2tOYW1lID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnd3gnIHx8IGdldFBsYXRmb3JtTmFtZSgpID09PSAncXEnKSB7XHJcbiAgICAvLyDlhbzlrrnlvq7kv6HlsI/nqIvluo/kvY7niYjmnKzln7rnoYDlupNcclxuICAgIGlmKHVuaS5jYW5JVXNlKCdnZXRBY2NvdW50SW5mb1N5bmMnKSl7XHJcbiAgICAgIHBhY2tOYW1lID0gdW5pLmdldEFjY291bnRJbmZvU3luYygpLm1pbmlQcm9ncmFtLmFwcElkIHx8ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFja05hbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgPyBwbHVzLnJ1bnRpbWUudmVyc2lvbiA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgY2hhbm5lbCA9ICcnO1xyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICduJykge1xyXG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xyXG4gIH1cclxuICByZXR1cm4gY2hhbm5lbDtcclxufTtcclxuXHJcbmNvbnN0IGdldFNjZW5lID0gKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgc2NlbmUgPSAnJztcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICd3eCcpIHtcclxuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XHJcbiAgfVxyXG4gIHJldHVybiBzY2VuZTtcclxufTtcclxuY29uc3QgRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnRmlyc3RfX1Zpc2l0X19UaW1lJztcclxuY29uc3QgTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdMYXN0X19WaXNpdF9fVGltZSc7XHJcblxyXG5jb25zdCBnZXRGaXJzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZLCB0aW1lKTtcclxuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICB9XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMYXN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9ICcnO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSwgZ2V0VGltZSgpKTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcclxubGV0IEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5sZXQgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxuXHJcblxyXG5jb25zdCBzZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSwgZ2V0VGltZSgpKTtcclxuICB9XHJcbiAgcmV0dXJuIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FKTtcclxuICB9XHJcbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuY29uc3QgVE9UQUxfX1ZJU0lUX19DT1VOVCA9ICdUb3RhbF9fVmlzaXRfX0NvdW50JztcclxuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCk7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgY291bnQgPSB0aW1lU3RvcmdlO1xyXG4gICAgY291bnQrKztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQsIGNvdW50KTtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5jb25zdCBHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBmb3IgKGxldCBwcm9wIGluIHN0YXREYXRhKSB7XHJcbiAgICBkYXRhW3Byb3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0YXREYXRhW3Byb3BdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5sZXQgU2V0X19GaXJzdF9fVGltZSA9IDA7XHJcbmxldCBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gMDtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IHRpbWU7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0UmVzaWRlbmNlVGltZSA9ICh0eXBlKSA9PiB7XHJcbiAgbGV0IHJlc2lkZW5jZVRpbWUgPSAwO1xyXG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XHJcbiAgICByZXNpZGVuY2VUaW1lID0gU2V0X19MYXN0X19UaW1lIC0gU2V0X19GaXJzdF9fVGltZTtcclxuICB9XHJcblxyXG4gIHJlc2lkZW5jZVRpbWUgPSBwYXJzZUludChyZXNpZGVuY2VUaW1lIC8gMTAwMCk7XHJcbiAgcmVzaWRlbmNlVGltZSA9IHJlc2lkZW5jZVRpbWUgPCAxID8gMSA6IHJlc2lkZW5jZVRpbWU7XHJcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gQVBQX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gUEFHRV9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXNpZGVuY2VUaW1lXHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG5cclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSkgfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG4gIGxldCBxdWVyeSA9IHNlbGYuX3F1ZXJ5O1xyXG4gIGxldCBzdHIgPSBxdWVyeSAmJiBKU09OLnN0cmluZ2lmeShxdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShxdWVyeSkgOiAnJztcclxuICAvLyBjbGVhclxyXG4gIHNlbGYuX3F1ZXJ5ID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUgKyBzdHIgKXx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUgKyBzdHIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XHJcbiAgaWYgKHNlbGYubXBUeXBlID09PSAncGFnZScgfHwgKHNlbGYuJG1wICYmIHNlbGYuJG1wLm1wVHlwZSA9PT0gJ3BhZ2UnKSB8fCBzZWxmLiRvcHRpb25zLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FsaWJyYXRpb24gPSAoZXZlbnROYW1lLCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gIGxvZ2luIOOAgSBzaGFyZSDjgIFwYXlfc3VjY2VzcyDjgIFwYXlfZmFpbCDjgIFyZWdpc3RlciDjgIF0aXRsZVxyXG4gIGlmKCFldmVudE5hbWUpe1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCDnvLrlsJEgW2V2ZW50TmFtZV0g5Y+C5pWwYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAoZXZlbnROYW1lLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOaIliBPYmplY3Qg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChldmVudE5hbWUgPT09ICd0aXRsZScgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUGFnZXNKc29uID0gcmVxdWlyZSgndW5pLXBhZ2VzP3tcInR5cGVcIjpcInN0eWxlXCJ9JykuZGVmYXVsdDtcclxuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XHJcblxyXG5jb25zdCByZXN1bHRPcHRpb25zID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5jbGFzcyBVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VsZiA9ICcnO1xyXG4gICAgdGhpcy5fcmV0cnkgPSAwO1xyXG4gICAgdGhpcy5fcGxhdGZvcm0gPSAnJztcclxuICAgIHRoaXMuX3F1ZXJ5ID0ge307XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICBsdDogJydcclxuICAgIH07XHJcbiAgICB0aGlzLl9vcGVyYXRpbmdUaW1lID0gMDtcclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge1xyXG4gICAgICAnMSc6IFtdLFxyXG4gICAgICAnMTEnOiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhID0ge1xyXG4gICAgICB1dWlkOiBnZXRVdWlkKCksXHJcbiAgICAgIHV0OiBnZXRQbGF0Zm9ybU5hbWUoKSxcclxuICAgICAgbXBuOiBnZXRQYWNrTmFtZSgpLFxyXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sXHJcbiAgICAgIHY6IGdldFZlcnNpb24oKSxcclxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcclxuICAgICAgY246ICcnLFxyXG4gICAgICBwbjogJycsXHJcbiAgICAgIGN0OiAnJyxcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICB0dDogJycsXHJcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcclxuICAgICAgYnJhbmQ6IHJlc3VsdE9wdGlvbnMuYnJhbmQgfHwgJycsXHJcbiAgICAgIG1kOiByZXN1bHRPcHRpb25zLm1vZGVsLFxyXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcclxuICAgICAgbXBzZGs6IHJlc3VsdE9wdGlvbnMuU0RLVmVyc2lvbiB8fCAnJyxcclxuICAgICAgbXB2OiByZXN1bHRPcHRpb25zLnZlcnNpb24gfHwgJycsXHJcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXHJcbiAgICAgIHByOiByZXN1bHRPcHRpb25zLnBpeGVsUmF0aW8sXHJcbiAgICAgIHd3OiByZXN1bHRPcHRpb25zLndpbmRvd1dpZHRoLFxyXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXHJcbiAgICAgIHN3OiByZXN1bHRPcHRpb25zLnNjcmVlbldpZHRoLFxyXG4gICAgICBzaDogcmVzdWx0T3B0aW9ucy5zY3JlZW5IZWlnaHRcclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uU2hvdygpIHtcclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdhcHAnKTtcclxuICAgICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0eXBlKSB7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICB0aGlzLl9zZW5kSGlkZVJlcXVlc3Qoe1xyXG4gICAgICB1cmxyZWY6IHJvdXRlLFxyXG4gICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgfSwgdHlwZSk7XHJcbiAgfVxyXG5cclxuICBfcGFnZVNob3coKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIGNvbnN0IHJvdXRlcGF0aCA9IGdldFJvdXRlKCk7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUuY29uZmlnID0gUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcgJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldy50aXRsZVRleHQgfHxcclxuICAgICAgUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLm5hdmlnYXRpb25CYXJUaXRsZVRleHQgfHwgJyc7XHJcblxyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvblNob3cpIHtcclxuICAgICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+i/meaYryBvbkxhdWNoIOS5i+WQjuaJp+ihjOeahOesrOS4gOasoSBwYWdlU2hvdyDvvIzkuLrkuIvmrKHorrDlvZXml7bpl7TlgZrlh4blpIcnKTtcclxuICAgICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBfcGFnZUhpZGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgICAgdGhpcy5fc2VuZFBhZ2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgICBwYWdlOiAnJyxcclxuICAgICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICAgIGx0OiAnJ1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9naW4oKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnbG9naW4nXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIF9zaGFyZSgpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdzaGFyZSdcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfcGF5bWVudChrZXkpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXlcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxJztcclxuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdCA9ICcxJztcclxuICAgIHRoaXMuc3RhdERhdGEudXJsID0gKG9wdGlvbnMucGF0aCArIHF1ZXJ5KSB8fCAnJztcclxuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEuc2MgPSBnZXRTY2VuZShvcHRpb25zLnNjZW5lKTtcclxuICAgIHRoaXMuc3RhdERhdGEuZnZ0cyA9IGdldEZpcnN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnR2YyA9IGdldFRvdGFsVmlzaXRDb3VudCgpO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMTEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsLFxyXG4gICAgICB0dDogdGhpcy5zdGF0RGF0YS50dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCB0eXBlKTtcclxuICB9XHJcbiAgX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAga2V5ID0gJycsXHJcbiAgICB2YWx1ZSA9IFwiXCJcclxuICB9ID0ge30pIHtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fbGFzdFBhZ2VSb3V0ZTtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzIxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybDogcm91dGUsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBlX246IGtleSxcclxuICAgICAgZV92OiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLnRvU3RyaW5nKCksXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV0d29ya0luZm8oKSB7XHJcbiAgICB1bmkuZ2V0TmV0d29ya1R5cGUoe1xyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0RGF0YS5uZXQgPSByZXN1bHQubmV0d29ya1R5cGU7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KCkge1xyXG4gICAgcGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldExvY2F0aW9uKCkge1xyXG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcclxuICAgICAgdW5pLmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLnBuID0gcmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY3QgPSByZXN1bHQuYWRkcmVzcy5jaXR5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IDA7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcclxuICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChkYXRhLCB0eXBlKSB7XHJcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlO1xyXG4gICAgZGF0YS50dG4gPSB0aXRsZS5wYWdlO1xyXG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xyXG4gICAgZGF0YS50dGMgPSB0aXRsZS5yZXBvcnQ7XHJcblxyXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICByZXF1ZXN0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGlmICghcmVxdWVzdERhdGFbZGF0YS5sdF0pIHtcclxuICAgICAgcmVxdWVzdERhdGFbZGF0YS5sdF0gPSBbXTtcclxuICAgIH1cclxuICAgIHJlcXVlc3REYXRhW2RhdGEubHRdLnB1c2goZGF0YSk7XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScsIHJlcXVlc3REYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaVN0YXREYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG4gICAgLy8g5pe26Ze06LaF6L+H77yM6YeN5paw6I635Y+W5pe26Ze05oizXHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgbGV0IGZpcnN0QXJyID0gW107XHJcbiAgICBsZXQgY29udGVudEFyciA9IFtdO1xyXG4gICAgbGV0IGxhc3RBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHVuaVN0YXREYXRhKSB7XHJcbiAgICAgIGNvbnN0IHJkID0gdW5pU3RhdERhdGFbaV07XHJcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBnZXRTcGxpY2luZyhlbG0pO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xyXG4gICAgICAgICAgbGFzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xyXG4gICAgbGV0IG9wdGlvbnNEYXRhID0ge1xyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTiwgLy/nu5/orqEgU0RLIOeJiOacrOWPt1xyXG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxyXG4gICAgICByZXF1ZXN0czogSlNPTi5zdHJpbmdpZnkoZmlyc3RBcnIpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHt9O1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgJiYgdGhpcy5zdGF0RGF0YS5wID09PSAnYScpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICB9XHJcbiAgX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKSB7XHJcbiAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogU1RBVF9VUkwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAvLyBoZWFkZXI6IHtcclxuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBkYXRhOiBvcHRpb25zRGF0YSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3N0YXQgcmVxdWVzdCBzdWNjZXNzJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGg1IOivt+axglxyXG4gICAqL1xyXG4gIGltYWdlUmVxdWVzdChkYXRhKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCBvcHRpb25zID0gZ2V0U2dpbihHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zKGRhdGEpKS5vcHRpb25zO1xyXG4gICAgaW1hZ2Uuc3JjID0gU1RBVF9INV9VUkwgKyAnPycgKyBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2VuZEV2ZW50KGtleSwgdmFsdWUpIHtcclxuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxyXG4gICAgaWYgKGNhbGlicmF0aW9uKGtleSwgdmFsdWUpKSByZXR1cm5cclxuXHJcbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5yZXBvcnQgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5LFxyXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vIOazqOWGjOaLpuaIquWZqFxyXG4gICAgaWYgKHR5cGVvZiB1bmkuYWRkSW50ZXJjZXB0b3IgPT09ICdmdW5jdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRMb2dpbigpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFNoYXJlKHRydWUpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRJbnRlcmNlcHRvckluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcclxuICAgICAgaW52b2tlKGFyZ3MpIHtcclxuICAgICAgICBzZWxmLl9uYXZpZ2F0aW9uQmFyVGl0bGUucGFnZSA9IGFyZ3MudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0TG9naW4oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBzZWxmLl9sb2dpbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFNoYXJlKHR5cGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2hhcmUnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFJlcXVlc3RQYXltZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdyZXF1ZXN0UGF5bWVudCcsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVwb3J0KG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ3JlcG9ydCBpbml0Jyk7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xyXG4gICAgaWYgKCFzZWxmLiRzY29wZSAmJiAhc2VsZi4kbXApIHtcclxuICAgICAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzaG93KHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25TaG93KHNlbGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZHkoc2VsZikge1xyXG4gICAgLy8gdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGhpZGUoc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVycm9yKGVtKSB7XHJcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCflvZPliY3ov5DooYznjq/looPkuLrlvIDlj5HogIXlt6XlhbfvvIzkuI3kuIrmiqXmlbDmja7jgIInKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZW1WYWwgPSAnJztcclxuICAgIGlmICghZW0ubWVzc2FnZSkge1xyXG4gICAgICBlbVZhbCA9IEpTT04uc3RyaW5naWZ5KGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtVmFsID0gZW0uc3RhY2s7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXHJcbiAgICAgIG1wdjogdGhpcy5zdGF0RGF0YS5tcHYsXHJcbiAgICAgIHY6IHRoaXMuc3RhdERhdGEudixcclxuICAgICAgZW06IGVtVmFsLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XHJcbmxldCBpc0hpZGUgPSBmYWxzZTtcclxuY29uc3QgbGlmZWN5Y2xlID0ge1xyXG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcclxuICAgIHN0YXQucmVwb3J0KG9wdGlvbnMsIHRoaXMpO1xyXG4gIH0sXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHN0YXQucmVhZHkodGhpcyk7XHJcbiAgfSxcclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgc3RhdC5sb2FkKG9wdGlvbnMsIHRoaXMpO1xyXG4gICAgLy8g6YeN5YaZ5YiG5Lqr77yM6I635Y+W5YiG5Lqr5LiK5oql5LqL5Lu2XHJcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG9sZFNoYXJlQXBwTWVzc2FnZSA9IHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlO1xyXG4gICAgICB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gb2xkU2hhcmVBcHBNZXNzYWdlLmNhbGwodGhpcywgb3B0aW9ucylcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2hvdygpIHtcclxuICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgc3RhdC5zaG93KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25IaWRlKCkge1xyXG4gICAgaXNIaWRlID0gdHJ1ZTtcclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgaWYgKGlzSGlkZSkge1xyXG4gICAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvbkVycm9yKGUpIHtcclxuICAgIHN0YXQuZXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnN0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xyXG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7XHJcbiAgICAgIHN0YXQuc2VuZEV2ZW50KHR5cGUsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbm1haW4oKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1wicGFnZXNcIjp7fSxcImdsb2JhbFN0eWxlXCI6e319IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX19EMDdFQ0IxXCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge30iLCJmdW5jdGlvbiB0eXBvZiAodikge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxufVxuXG5mdW5jdGlvbiBpc0RlYnVnTW9kZSAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gIHJldHVybiB0eXBlb2YgX19jaGFubmVsSWRfXyA9PT0gJ3N0cmluZycgJiYgX19jaGFubmVsSWRfX1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nICh0eXBlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIHZhciB0eXBlID0gYXJncy5zaGlmdCgpXG4gIGlmIChpc0RlYnVnTW9kZSgpKSB7XG4gICAgYXJncy5wdXNoKGFyZ3MucG9wKCkucmVwbGFjZSgnYXQgJywgJ3VuaS1hcHA6Ly8vJykpXG4gICAgcmV0dXJuIGNvbnNvbGVbdHlwZV1bJ2FwcGx5J10oY29uc29sZSwgYXJncylcbiAgfVxuXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgYXJyYXldJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYgPT09IG51bGwpIHtcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZcbiAgfSlcbiAgdmFyIG1zZyA9ICcnXG5cbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xuICAgIHZhciBsYXN0TXNnID0gbXNncy5wb3AoKVxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxuXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XG4gICAgICBtc2cgKz0gbGFzdE1zZ1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbXNnID0gbXNnc1swXVxuICB9XG5cbiAgY29uc29sZVt0eXBlXShtc2cpXG59XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IGhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyLmpzJztcclxuXHJcbmltcG9ydCBwbGF5ZXIgZnJvbSAnQC91dGlscy9wbGF5ZXIuanMnO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAL3V0aWxzL3N0b3JhZ2UuanMnO1xyXG5cclxuaW1wb3J0IHVzZXIgZnJvbSAnLi4vbW9kZWwvdXNlci5qcyc7XHJcbmltcG9ydCBwbGF5bGlzdCBmcm9tICcuLi9tb2RlbC9wbGF5bGlzdC5qcyc7XHJcbmltcG9ydCBzb25nIGZyb20gJy4uL21vZGVsL3NvbmcuanMnO1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uL21vZGVsL3NlYXJjaC5qcyc7XHJcbmltcG9ydCBvdGhlciBmcm9tICcuLi9tb2RlbC9vdGhlci5qcyc7XHJcbmltcG9ydCBhbGJ1bSBmcm9tICcuLi9tb2RlbC9hbGJ1bS5qcyc7XHJcbmltcG9ydCBwZXJzb25hbGl6ZWQgZnJvbSAnLi4vbW9kZWwvcGVyc29uYWxpemVkLmpzJztcclxuaW1wb3J0IHRvcCBmcm9tICcuLi9tb2RlbC90b3AuanMnO1xyXG5pbXBvcnQgdmlkZW8gZnJvbSAnLi4vbW9kZWwvdmlkZW8uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHR7IFxyXG5cdGNvbmZpZyxcclxuXHRoZWxwZXIsXHJcblx0dXNlcixcclxuXHRwbGF5bGlzdCxcclxuXHRwbGF5ZXIsXHJcblx0c3RvcmFnZSxcclxuXHRzb25nLFxyXG5cdHNlYXJjaCxcclxuXHRvdGhlcixcclxuXHRhbGJ1bSxcclxuXHRwZXJzb25hbGl6ZWQsXHJcblx0dG9wLFxyXG5cdHZpZGVvXHJcbn0iLCIvKlxyXG4gKiBAQXV0aG9yOiB5b3VyIG5hbWVcclxuICogQERhdGU6IDIwMjAtMDQtMTUgMTE6NDM6NTZcclxuICogQExhc3RFZGl0VGltZTogMjAyMC0wNC0xNiAyMjo1MTozM1xyXG4gKiBATGFzdEVkaXRvcnM6IFBsZWFzZSBzZXQgTGFzdEVkaXRvcnNcclxuICogQERlc2NyaXB0aW9uOiBJbiBVc2VyIFNldHRpbmdzIEVkaXRcclxuICogQEZpbGVQYXRoOiBcXG9wZXJhX3VuaWFwcFxcY29uZmlnXFxjb25maWcuanNcclxuICovXHJcblxyXG5jb25zdCBzeXN0ZW1JbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5jb25zdCBzdGF0dXNfYmFyX2hlaWdodCA9IHN5c3RlbUluZm8uc3RhdHVzQmFySGVpZ2h0O1xyXG5cclxuY29uc3QgSE9TVCA9ICdodHRwOi8vYXBpLmNsb3VkbXVzaWMucHVsc2F0aW5nLmNuOjMwMDAvJztcclxuY29uc3QgaG9zdDkwOTAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6OTA5MFwiO1xyXG5cclxuY29uc3QgQVBJID0ge307XHJcbi8v55m75b2VXHJcbkFQSS5DRUxMUEhPTkVfTE9HSU4gPSAnbG9naW4vY2VsbHBob25lJzsgLy8g5omL5py65Y+355m75b2VXHJcbkFQSS5MT0dJTl9TVEFUVVMgPSAnbG9naW4vc3RhdHVzJzsgLy8g55m76ZmG54q25oCBXHJcbkFQSS5DSEVDS19QSE9ORSA9ICdjZWxscGhvbmUvZXhpc3RlbmNlL2NoZWNrJzsgLy8g5qOA5p+l5omL5py65Y+35piv5ZCm5rOo5YaM6L+HXHJcbkFQSS5MT0dPVVQgPSAnbG9nb3V0JzsgLy8g55m75Ye6XHJcbkFQSS5TRU5EX0NBUFRDSEEgPSAnY2FwdGNoYS9zZW50JzsgLy8g5Y+R6YCB55+t5L+h6aqM6K+B56CBXHJcbkFQSS5WRVJJRllfQ0FQVENIQSA9ICdjYXB0Y2hhL3ZlcmlmeSc7IC8vIOaguOWunumqjOivgeeggVxyXG5BUEkuUEhPTkVfUkVHID0gJ3JlZ2lzdGVyL2NlbGxwaG9uZSc7IC8vIOaJi+acuuWPt+azqOWGjFxyXG4vL+eUqOaIt1xyXG5BUEkuU1VCQ09VTlQgPSAndXNlci9zdWJjb3VudCc7IC8vIOeUqOaIt+eahOatjOWNle+8jOaUtuiXj++8jG12LCBkaiDmlbDph49cclxuQVBJLlVTRVJfREVUQUlMID0gJ3VzZXIvZGV0YWlsJzsgLy8g6I635Y+W55So5oi36K+m5oOFXHJcbkFQSS5VU0VSX1BMQVlMSVNUID0gJ3VzZXIvcGxheWxpc3QnOyAvLyDojrflj5bnlKjmiLfmrYzljZVcclxuQVBJLlVTRVJfTElLRV9MSVNUID0gJ2xpa2VsaXN0JzsgLy8g6I635Y+W55So5oi35Zac5qyi55qE6Z+z5LmQ5YiX6KGoXHJcbkFQSS5MSUtFID0gJ2xpa2UnOyAvLyDllpzmrKLmn5DkuKrmrYzmm7JcclxuXHJcbi8vIOatjOWNlVxyXG5BUEkuUExBWUxJU1RfREVUQUlMID0gJ3BsYXlsaXN0L2RldGFpbCc7IC8vIOatjOWNleivpuaDhVxyXG5cclxuLy8g5LiT6L6RXHJcbkFQSS5BTEJVTV9ERVRBSUwgPSAnYWxidW0nOyAvL+S4k+i+keivpuaDhVxyXG5cclxuLy8g5q2M5puyXHJcbkFQSS5TT05HID0gJ3NvbmcvdXJsJzsgLy/ojrflj5bmrYzmm7J1cmxcclxuQVBJLkxZUklDID0gJ2x5cmljJzsgLy/ojrflj5bmrYzor41cclxuQVBJLlNPTkdfREVUQUlMID0gJ3NvbmcvZGV0YWlsJzsgLy/ojrflj5bmrYzmm7Lor6bmg4VcclxuXHJcbi8vIOaQnOe0olxyXG5BUEkuSE9UX1NFQVJDSCA9ICdzZWFyY2gvaG90L2RldGFpbCc7IC8v6I635Y+W54Ot5pCcXHJcbkFQSS5TRUFSQ0ggPSAnc2VhcmNoJzsgLy/mkJzntKJcclxuXHJcblxyXG4vLyBPdGhlclxyXG5BUEkuQkFOTkVSID0gJ2Jhbm5lcic7IC8vIOWPkeeOsOmhtWJhbm5lcuWbvlxyXG5BUEkuUkVDT01NRU5EX1JFU09VUkNFID0gJ3JlY29tbWVuZC9yZXNvdXJjZSc7IC8vIOavj+aXpeaOqOiNkOatjOWNlVxyXG5cclxuLy8g56eB5Lq65o6o6I2QXHJcbkFQSS5QRVJTT05BTElaRURfUExBWUxJU1QgPSAncGVyc29uYWxpemVkJzsgLy8g5o6o6I2Q5q2M5Y2VXHJcbkFQSS5QRVJTT05BTElaRURfTkVXU09ORyA9ICdwZXJzb25hbGl6ZWQvbmV3c29uZyc7IC8vIOaOqOiNkOaWsOatjFxyXG5cclxuLy8g5ZCE57G75o6S6KGMdG9wXHJcbkFQSS5UT1BfQUxCVU0gPSAndG9wL2FsYnVtJzsgLy8g5paw56Kf5LiK5p62XHJcblxyXG4vLyDop4bpopFcclxuQVBJLlZJREVPX0xJU1QgPSAndmlkZW8vZ3JvdXAnOyAvLyDmjInliIbnsbvojrflj5bop4bpopHliJfooagsIOmcgOeZu+W9lVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzeXN0ZW1JbmZvLCBcclxuXHRzdGF0dXNfYmFyX2hlaWdodCxcclxuXHRIT1NULFxyXG5cdEFQSSxcclxuXHRob3N0OTA5MFxyXG59XHJcbiIsIi8v55uR5ZCsZ2xvYmFsRGF0YeS4reeahHBsYXllZOWxnuaAp1xyXG5mdW5jdGlvbiBwbGF5ZWRfd2F0Y2goY2IpIHtcclxuXHR2YXIgb2JqID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInBsYXllZFwiLCB7XHJcblx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLl9wbGF5ZWQgPSB2YWx1ZTtcclxuXHRcdFx0Y2IodmFsdWUpO1xyXG5cdFx0fSxcclxuXHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIOWPr+S7peWcqOi/memHjOaJk+WNsOS4gOS6m+S4nOilv++8jOeEtuWQjuWcqOWFtuS7lueVjOmdouiwg+eUqGdldEFwcCgpLmdsb2JhbERhdGEucGxheWVk55qE5pe25YCZ77yM6L+Z6YeM5bCx5Lya5omn6KGM44CCXHJcblx0XHRcdHJldHVybiBnZXRBcHAoKS5nbG9iYWxEYXRhLl9wbGF5ZWQ7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJhY2tncm91bmRlcigpIHtcclxuXHRsZXQgb3MgPSBwbHVzLm9zLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSAnYW5kcm9pZCcgPyAnYW5kcm9pZCcgOiAnaW9zJztcclxuXHRpZiAob3MgPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRsZXQgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XHJcblx0XHRtYWluLm1vdmVUYXNrVG9CYWNrKGZhbHNlKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdG8odXJsLCBtb2RlKSB7XHJcblx0bW9kZSA9IG1vZGUgfHwgJ25hdmlnYXRlX3RvJztcclxuXHJcblxyXG5cdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdHVybDogdXJsXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b2FzdChpY29uLCB0ZXh0LCBkdXJhdGlvbiwgbWFzaywgcG9zaXRpb24pIHtcclxuXHRkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDE1MDA7XHJcblx0bWFzayA9IG1hc2sgfHwgZmFsc2U7XHJcblx0cG9zaXRpb24gPSBwb3NpdGlvbiB8fCBmYWxzZTtcclxuXHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdGljb246IGljb24sXHJcblx0XHR0aXRsZTogdGV4dCxcclxuXHRcdGR1cmF0aW9uOiBkdXJhdGlvbixcclxuXHRcdG1hc2s6IG1hc2ssXHJcblx0XHRwb3NpdGlvbjogcG9zaXRpb24sXHJcblx0fSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0byxcclxuXHR0b2FzdCxcclxuXHRiYWNrZ3JvdW5kZXIsXHJcblx0cGxheWVkX3dhdGNoLFxyXG5cdFxyXG59XHJcbiIsIi8vIOWFqOWxgOmfs+mikeaSreaUvueuoeeQhlxyXG5sZXQgUGxheWVySGVscGVyID0ge307XHJcblxyXG4vL+iOt+WPluWUr+S4gHBsYXllciwg5L+d5oyBcGxheWVy57uf5LiAXHJcbmZ1bmN0aW9uIGdldF9wbGF5ZXIoKSB7XHJcblx0cmV0dXJuIGdldEFwcCgpLmdsb2JhbERhdGEucGxheWVyO1xyXG59XHJcblxyXG5QbGF5ZXJIZWxwZXIuc2V0X3VybCA9IGZ1bmN0aW9uKHVybCkge1xyXG5cdFxyXG5cdHVybCA9IHVybCB8fCBTdG9yYWdlLmdldF9wbGF5ZWQoKS51cmw7XHJcblx0Ly8gY29uc29sZS5sb2coJ3NldF91cmw6JyArIHVybCk7XHJcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcclxuXHRwbGF5ZXIuc2V0U3R5bGVzKHtcclxuXHRcdHNyYzogdXJsXHJcblx0fSk7XHJcblx0XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG4vL3BsYXnliY3nmoTlh4blpIdcclxuLy8gUGxheWVySGVscGVyLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbi8vIFx0dGhpcy5zZXRfdXJsKCk7XHJcbi8vIFx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcclxuLy8gXHRwbGF5ZXIucmVzdW1lKCk7XHJcbi8vIFx0cmV0dXJuO1xyXG4vLyB9XHJcblxyXG4vL+e7n+S4gHBsYXnlhaXlj6MsIOecn+ato+eahOaSreaUvuWFpeWPo1xyXG5QbGF5ZXJIZWxwZXIucGxheSA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XHJcblx0cGxheWVyLnBsYXkoKCk9PntcclxuXHRcdGNvbnNvbGUubG9nKCflvZPliY3pn7PkuZDmkq3mlL7lrozmr5UnKTtcclxuXHR9LChlKT0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdH0pOztcclxuXHRyZXR1cm47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmoLlgZxcclxuICog6ZyA6KaBc3RhcnTlkI4sIOinpuWPkW9uUGxheeS6i+S7tuWQjiwgcGF1c2XmiY3mnInmlYhcclxuICovXHJcblBsYXllckhlbHBlci5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XHJcblx0cGxheWVyLnBhdXNlKCk7XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG5QbGF5ZXJIZWxwZXIuZ2V0X3Bvc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcclxuXHRyZXR1cm4gcGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbn1cclxuXHJcblBsYXllckhlbHBlci5nZXRfZHVyYXRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xyXG5cdFxyXG5cdHJldHVybiBwbGF5ZXIuZ2V0RHVyYXRpb24oKTtcclxufVxyXG5cclxuUGxheWVySGVscGVyLnNlZWtfdG8gPSBmdW5jdGlvbihwb3NpdGlvbikge1xyXG5cdHJldHVybiBnZXRfcGxheWVyKCkuc2Vla1RvKHBvc2l0aW9uKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuUGxheWVySGVscGVyLnByZXYgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCBwbGF5ZWQgPSBTdG9yYWdlLmdldF9wbGF5ZWQoKTtcclxuXHRsZXQgcGxheWxpc3QgPSBTdG9yYWdlLmdldF9jdXJyZW50X3BsYXlsaXN0KCk7XHJcblx0bGV0IGN1cnJlbnRfc29uZ19pZCA9IHBsYXllZC5pZDtcclxuXHRsZXQgcHJldl9pbmRleCA9IHBsYXlsaXN0Lmxlbmd0aCAtIDE7XHJcblx0XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5bGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGN1cnJlbnRfc29uZ19pZCA9PSBwbGF5bGlzdFtpXS5pZCkge1xyXG5cdFx0XHRpZiAoaSA+IDApIHtcclxuXHRcdFx0XHRwcmV2X2luZGV4ID0gaSAtIDE7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGxldCBwcmV2X3NvbmdfaWQgPSBwbGF5bGlzdFtwcmV2X2luZGV4XS5pZDtcclxuXHR0aGlzLnN0YXJ0KHByZXZfc29uZ19pZCwgKHBsYXllZCk9PiB7XHJcblx0XHRjYiAmJiBjYihwbGF5ZWQpXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5QbGF5ZXJIZWxwZXIubmV4dCA9IGZ1bmN0aW9uKGNiKSB7XHJcblx0bGV0IHBsYXllZCA9IFN0b3JhZ2UuZ2V0X3BsYXllZCgpO1xyXG5cdGxldCBjdXJyZW50X3NvbmdfaWQgPSBwbGF5ZWQuaWQ7XHJcblx0bGV0IHBsYXlsaXN0ID0gU3RvcmFnZS5nZXRfY3VycmVudF9wbGF5bGlzdCgpO1xyXG5cdFxyXG5cdGxldCBuZXh0X2luZGV4ID0gMDtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBsYXlsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoY3VycmVudF9zb25nX2lkID09IHBsYXlsaXN0W2ldLmlkKSB7XHJcblx0XHRcdGlmIChpICsgMSA8IHBsYXlsaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdG5leHRfaW5kZXggPSBpICsgMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc29sZS5sb2cobmV4dF9pbmRleCk7XHJcblx0bGV0IG5leHRfc29uZ19pZCA9IHBsYXlsaXN0W25leHRfaW5kZXhdLmlkO1xyXG5cdHRoaXMuc3RhcnQobmV4dF9zb25nX2lkLCAocGxheWVkKT0+IHtcclxuXHRcdGNiICYmIGNiKHBsYXllZClcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gc29uZ19pZFxyXG4gKiDkvKDlhaXmrYzmm7JpZOaSreaUvlxyXG4gKi9cclxuUGxheWVySGVscGVyLnN0YXJ0ID0gZnVuY3Rpb24oc29uZ19pZCwgY2IpIHtcclxuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xyXG5cdGxldCBwbGF5ZWQgPSBTdG9yYWdlLmdldF9wbGF5ZWQoKTtcclxuXHRcclxuXHRTb25nLmdldF9zb25nX2RldGFpbChzb25nX2lkLCAoZGF0YSk9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdGxldCBzb25nID0gZGF0YS5zb25nc1swXTtcclxuXHRcdGxldCBzb25nX25hbWUgPSBzb25nLm5hbWU7XHJcblx0XHRsZXQgY292ZXJfaW1hZ2UgPSBzb25nLmFsLnBpY1VybDtcclxuXHRcdGxldCBjdXJyZW50X3BsYXllZCA9IHBsYXllZDtcclxuXHRcdGxldCBwbGF5ZWRfbXVzaWNfaWQgPSBjdXJyZW50X3BsYXllZC5pZDtcclxuXHRcdFxyXG5cdFx0aWYgKHNvbmdfaWQgPT0gcGxheWVkX211c2ljX2lkKSB7XHJcblx0XHRcdC8vIOi3s+i9rOaSreaUvuivpuaDhemhteW5tuaSreaUvlxyXG5cdFx0XHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xyXG5cdFx0XHRpZiAocGxheWVyLmlzUGF1c2VkKCkpIHtcclxuXHRcdFx0XHRwbGF5ZXIucGxheSgoKT0+e30sKGUpPT4ge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSk7O1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHRoaXMudHVybigpO1xyXG5cdFx0XHRIZWxwZXIudG8oJy4uL3BsYXkvcGxheScpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFNvbmcuZ2V0X3NvbmdfdXJsKHNvbmdfaWQsIChyZXMpPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRsZXQgdXJsID0gcmVzLmRhdGFbMF0udXJsO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCF1cmwpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0SGVscGVyLnRvYXN0KCdub25lJywgJ+S6sueIseeahCwg5pqC5peg6K+l5q2M5puy6LWE5rqQficsIDMwMDAsIGZhbHNlLCAnYm90dG9tJyk7XHJcblx0XHRcdFx0fSwgMTApO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgY3JlYXRvcnMgPSBzb25nLmFyO1xyXG5cdFx0XHRsZXQgY3JlYXRvcl9zdHIgPSAnJztcclxuXHRcdFx0XHJcblx0XHRcdGZvciAobGV0IGNyZWF0b3Igb2YgY3JlYXRvcnMpIHtcclxuXHRcdFx0XHRjcmVhdG9yX3N0ciA9IGNyZWF0b3Jfc3RyICsgY3JlYXRvci5uYW1lO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcGxheWVkID0ge1xyXG5cdFx0XHRcdGlkOiBzb25nX2lkLFxyXG5cdFx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHRcdG5hbWU6IHNvbmdfbmFtZSxcclxuXHRcdFx0XHRjcmVhdG9yOiBjcmVhdG9yX3N0cixcclxuXHRcdFx0XHRjb3Zlcl9pbWFnZTogY292ZXJfaW1hZ2UsXHJcblx0XHRcdFx0Ly8gdGltZTogMCwgLy/kuIrmrKHmkq3mlL7nmoTkvY3nva5cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5zZXRfdXJsKHVybCk7XHJcblx0XHRcdFxyXG5cdFx0XHRjYiAmJiBjYihwbGF5ZWQpO1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5QbGF5ZXJIZWxwZXIudHVybiA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XHJcblx0aWYgKHBsYXllci5pc1BhdXNlZCgpKSB7XHJcblx0XHRwbGF5ZXIucGxheSgoKT0+e30sKGUpPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH0pOztcclxuXHR9ZWxzZSB7XHJcblx0XHRwbGF5ZXIucGF1c2UoKTtcclxuXHR9XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuLi91dGlscy9zdG9yYWdlLmpzJ1xyXG5pbXBvcnQgU29uZyBmcm9tICcuLi9tb2RlbC9zb25nLmpzJztcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyLmpzJ1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJIZWxwZXIiLCIvLyDnvJPlrZjnu5/kuIDnrqHnkIZcclxuXHJcbmxldCBTdG9yYWdlID0ge31cclxuXHJcbmNvbnN0IExBVEVTVF9QTEFZRUQgPSAnbGF0ZXN0X3BsYXllZCc7IC8v5pyA5ZCO5LiA5Liq5pKt5pS+6K6w5b2VXHJcbmNvbnN0IENVUlJFTlRfUExBWUxJU1QgPSAnY3VycmVudF9wbGF5bGlzdCc7IC8vIOW9k+WJjeaSreaUvuWIl+ihqFxyXG5jb25zdCBJU19MT0dJTiA9ICdpc19sb2dpbic7IC8vIOeZu+W9leeKtuaAgVxyXG5jb25zdCBQTEFZX01PREUgPSAncGxheV9tb2RlJztcclxuXHJcblN0b3JhZ2UuaXNfbG9naW4gPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZ2V0KElTX0xPR0lOKTtcclxufVxyXG5cclxuU3RvcmFnZS5zZXRfaXNfbG9naW4gPSBmdW5jdGlvbih2KSB7XHJcblx0c2V0KElTX0xPR0lOLCB2KTtcclxuXHRyZXR1cm47XHJcbn1cclxuXHJcblN0b3JhZ2UuZ2V0X3BsYXllZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBnZXQoTEFURVNUX1BMQVlFRCk7XHJcbn1cclxuXHJcblN0b3JhZ2Uuc2V0X3BsYXllZCA9IGZ1bmN0aW9uKHYpIHtcclxuXHRzZXQoTEFURVNUX1BMQVlFRCwgdik7XHJcblx0cmV0dXJuO1xyXG59XHJcblN0b3JhZ2UuZ2V0X2N1cnJlbnRfcGxheWxpc3QgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZ2V0KENVUlJFTlRfUExBWUxJU1QpO1xyXG59XHJcblxyXG5TdG9yYWdlLnNldF9jdXJyZW50X3BsYXlsaXN0ID0gZnVuY3Rpb24odikge1xyXG5cdHNldChDVVJSRU5UX1BMQVlMSVNULCB2KTtcclxuXHRyZXR1cm47XHJcbn1cclxuXHJcblN0b3JhZ2UuZ2V0X3BsYXlfbW9kZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBnZXQoUExBWV9NT0RFKTtcclxufVxyXG5cclxuU3RvcmFnZS5zZXRfcGxheV9tb2RlID0gZnVuY3Rpb24odikge1xyXG5cdHNldChQTEFZX01PREUsIHYpO1xyXG5cdHJldHVybjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0KGssIHYpIHtcclxuXHR0cnkge1xyXG5cdCAgICB1bmkuc2V0U3RvcmFnZVN5bmMoaywgdik7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdCAgICAvLyBlcnJvclxyXG5cdH1cclxuXHRyZXR1cm47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChrKSB7XHJcblx0dHJ5IHtcclxuXHQgICAgcmV0dXJuIHVuaS5nZXRTdG9yYWdlU3luYyhrKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0ICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdG9yYWdlOyIsImxldCBTb25nID0ge307XHJcblxyXG5Tb25nLmdldF9zb25nX3VybCA9IGZ1bmN0aW9uKGlkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNPTkc7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdGlkOiBpZCxcclxuXHRcdGJyOiAzMjAwMDBcclxuXHR9XHJcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5Tb25nLmdldF9seXJpYyA9IGZ1bmN0aW9uKGlkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkxZUklDO1xyXG5cdFxyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRpZDogaWQsXHJcblx0fVxyXG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdFxyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5Tb25nLmdldF9zb25nX2RldGFpbCA9IGZ1bmN0aW9uKGlkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNPTkdfREVUQUlMO1xyXG5cdFxyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRpZHM6IGlkLFxyXG5cdH1cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNvbmc7IiwiZnVuY3Rpb24gZ2V0KHVybCwgcGFyYW1zLCBzdWNjZXNzX2NiLCBmYWlsZWRfY2IpIHtcclxuXHRcclxuXHRoZWxwZXIudG9hc3QoJ2xvYWRpbmcnLCAn5Yqg6L295LitLi4uJywgMTAwMDApXHJcblx0XHJcblx0bGV0IHVyaSA9IGNvbmZpZy5IT1NUICsgdXJsO1xyXG5cclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IHVyaSwgXHJcblx0XHRkYXRhOiBwYXJhbXMsXHJcblx0XHRtZXRob2Q6XCJHRVRcIixcclxuXHRcdHN1Y2Nlc3M6IChyZXMpPT57XHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzX2NiICYmIHN1Y2Nlc3NfY2IocmVzKTtcclxuXHRcdH0sXHJcblx0XHRmYWlsOihyZXMpID0+IHtcclxuXHRcdFx0ZmFpbGVkX2NiICYmIGZhaWxlZF9jYihyZXMpO1xyXG5cdFx0ICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0X2ZhaWw6dXJsOicgKyB1cmwgKyAnIDsgJyArICdlcnJNc2c6JyArIHJlcy5lcnJNc2cpO1xyXG5cdFx0fSxcclxuXHRcdGNvbXBsZXRlOiAoKT0+IHtcclxuXHRcdFx0dW5pLmhpZGVUb2FzdCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59IFxyXG5cclxuZnVuY3Rpb24gcG9zdCh1cmwsIHBhcmFtcywgc3VjY2Vzc19jYiwgZmFpbGVkX2NiKSB7XHJcblx0XHJcblx0aGVscGVyLnRvYXN0KCdsb2FkaW5nJywgJ+WKoOi9veS4rS4uLicsIDEwMDAwKVxyXG5cdFxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogY29uZmlnLkhPU1QgKyB1cmwsIFxyXG5cdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0bWV0aG9kOlwiUE9TVFwiLCAgIFxyXG5cdFx0c3VjY2VzczogKHJlcyk9PntcclxuXHRcdFx0c3VjY2Vzc19jYiAmJiBzdWNjZXNzX2NiKHJlcyk7XHJcblx0XHR9LFxyXG5cdFx0ZmFpbDoocmVzKSA9PiB7XHJcblx0XHQgICAgY29uc29sZS5sb2coJ3JlcXVlc3RfZmFpbDp1cmw6JyArIHVybCArICcgOyAnICsgJ2Vyck1zZzonICsgcmVzLmVyck1zZyk7XHJcblx0XHRcdGZhaWxlZF9jYiAmJiBmYWlsZWRfY2IocmVzKTtcclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZTogKCk9PiB7XHJcblx0XHRcdHVuaS5oaWRlVG9hc3QoKTtcclxuXHRcdH1cclxuXHR9KSAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0KCkge1xyXG5cdC8vMTExLjEzLjEwMC45MlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHQgICAgdXJsOiAnaHR0cHM6Ly93d3cuYmFpZHUuY29tLycsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e5o6l5Y+j5Zyw5Z2A44CCXHJcblx0ICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHQgICAgfVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IGhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG5cdGdldCxcclxuXHRwb3N0LFxyXG5cdHRlc3RcclxufSIsImxldCBVc2VyID0ge307XHJcblxyXG5Vc2VyLmNoZWNrX3Bob25lID0gZnVuY3Rpb24ocGhvbmUsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuQ0hFQ0tfUEhPTkU7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHBob25lOiBwaG9uZVxyXG5cdH1cclxuXHRcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRcclxuXHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IocmVzLmRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4vL+eZu+mZhlxyXG5Vc2VyLmxvZ2luID0gZnVuY3Rpb24ocGhvbmUsIHBhc3N3b3JkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkNFTExQSE9ORV9MT0dJTjtcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0cGhvbmU6IHBob25lLFxyXG5cdFx0cGFzc3dvcmQ6IHBhc3N3b3JkXHJcblx0fVxyXG5cdFxyXG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGlmIChyZXMuZGF0YSkge1xyXG5cdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0Z2V0X3N0YXR1cygoc3RhdHVzKT0+IHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Y2IgJiYgY2Ioc3RhdHVzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdGhlbHBlci50b2FzdCgnbm9uZScsIGRhdGEubXNnLCAzMDAwLCBmYWxzZSwgJ2JvdHRvbScpO1xyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5Vc2VyLnJlZyA9IGZ1bmN0aW9uKHBob25lLCBwYXNzd29yZCwgY2FwdGNoYSwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5QSE9ORV9SRUc7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHBob25lOiBwaG9uZSxcclxuXHRcdHBhc3N3b3JkOiBwYXNzd29yZCxcclxuXHRcdGNhcHRjaGE6IGNhcHRjaGFcclxuXHR9XHJcblx0XHJcblx0cmVxdWVzdC5wb3N0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRjYiAmJiBjYihyZXMuZGF0YSlcclxuXHR9KVxyXG59XHJcblxyXG5Vc2VyLmxvZ291dCA9IGZ1bmN0aW9uKGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuTE9HT1VUO1xyXG5cclxuXHRcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHt9LCAocmVzKT0+IHtcclxuXHRcdFxyXG5cdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihyZXMuZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblVzZXIuc2VuZF9jYXB0Y2hhID0gZnVuY3Rpb24ocGhvbmUsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuU0VORF9DQVBUQ0hBO1xyXG5cdFxyXG5cdFxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHtwaG9uZTogcGhvbmV9LCAocmVzKT0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRjYiAmJiBjYihyZXMuZGF0YSlcclxuXHR9KVxyXG59XHJcblVzZXIudmVyaWZ5X2NhcHRjaGEgPSBmdW5jdGlvbihwaG9uZSwgY2FwdGNoYSwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5WRVJJRllfQ0FQVENIQTtcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0cGhvbmU6IHBob25lLFxyXG5cdFx0Y2FwdGNoYTogY2FwdGNoYVxyXG5cdH1cclxuXHRcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0Y2IgJiYgY2IocmVzLmRhdGEpXHJcblx0fSlcclxufVxyXG5cclxuLy/nmbvlvZXmo4Dmn6VcclxuVXNlci5jaGVja19sb2dpbiA9IGZ1bmN0aW9uKGNiKSB7XHJcblx0XHJcblx0Z2V0X3N0YXR1cygocmVzKT0+IHtcclxuXHRcdGNiICYmIGNiKHJlcyk7XHJcblx0fSlcclxufVxyXG5cclxuLy/ojrflj5bnlKjmiLdtdizmrYzljZUsIGRqLCDmlLbol4/mlbDph49cclxuVXNlci5nZXRfc3ViY291bnQgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNVQkNPVU5UO1xyXG5cdFxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHt9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRjYiAmJiBjYihkYXRhKTtcclxuXHR9KVxyXG59XHJcblxyXG4vL+iOt+WPlueUqOaIt+i1hOaWmVxyXG5Vc2VyLmdldF91c2VyX2RldGFpbCA9IGZ1bmN0aW9uKHVpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5VU0VSX0RFVEFJTDtcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0dWlkOiB1aWRcclxuXHR9XHJcblx0cmVxdWVzdC5wb3N0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdFxyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy/ojrflj5bnlKjmiLfmrYzljZXliJfooahcclxuVXNlci5nZXRfcGxheWxpc3QgPSBmdW5jdGlvbih1aWQsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVVNFUl9QTEFZTElTVDtcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0dWlkOiB1aWRcclxuXHR9XHJcblx0cmVxdWVzdC5wb3N0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuVXNlci5nZXRfbGlrZWxpc3QgPSBmdW5jdGlvbih1aWQsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVVNFUl9MSUtFX0xJU1Q7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHVpZDogdWlkXHJcblx0fVxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblVzZXIubGlrZSA9IGZ1bmN0aW9uKG11c2ljX2lkLCBsaWtlLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkxJS0U7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdGlkOiBtdXNpY19pZCxcclxuXHRcdGxpa2U6IGxpa2VcclxuXHR9XHJcblx0cmVxdWVzdC5wb3N0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy/ojrflj5bnlKjmiLfnirbmgIFcclxuZnVuY3Rpb24gZ2V0X3N0YXR1cyhjYikge1xyXG5cdGxldCB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkxPR0lOX1NUQVRVUztcclxuXHRcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHt0aW1lc3RhbXA6IHRzfSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0XHJcblx0XHRpZiAoZGF0YSAmJiBkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfojrflj5bnirbmgIHlpLHotKUnKTtcclxuXHRcdFx0Y2IgJiYgY2IoZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XHJcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcyc7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBVc2VyOyIsImxldCBQbGF5bGlzdCA9IHt9O1xyXG5cclxuUGxheWxpc3QuZ2V0X3BsYXlsaXN0X2RldGFpbCA9IGZ1bmN0aW9uKGlkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlBMQVlMSVNUX0RFVEFJTDtcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0aWQ6IGlkXHJcblx0fVxyXG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXlsaXN0OyIsImxldCBTZWFyY2ggPSB7fTtcclxuXHJcblNlYXJjaC5nZXRfaG90X2xpc3QgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkhPVF9TRUFSQ0g7XHJcblxyXG5cdHJlcXVlc3QuZ2V0KHVybCwge30sIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljZXpobnmkJzntKJcclxuICog5q2k5o6l5Y+jcG9zdOaWueW8j+aciemXrumimCwg5YiG6aG15Y+C5pWw5peg5pWIXHJcbiAqIFxyXG4gKiDlv4XpgInlj4LmlbA6IFxyXG4gKiBrZXl3b3Jkczog5YWz6ZSu6K+NXHJcbiAqIFxyXG4gKiDlj6/pgInlj4LmlbA6IFxyXG4gKiBsaW1pdCA6IOi/lOWbnuaVsOmHjyAsIOm7mOiupOS4uiAzMCBcclxuICogb2Zmc2V0IDog5YGP56e75pWw6YeP77yM55So5LqO5YiG6aG1ICwg5aaCIDog5aaCIDooIOmhteaVsCAtMSkqMzAsIOWFtuS4rSAzMCDkuLogbGltaXQg55qE5YC8ICwg6buY6K6k5Li6IDBcclxuICogdHlwZTog5pCc57Si57G75Z6L77yb6buY6K6k5Li6IDEg5Y2z5Y2V5puyICwg5Y+W5YC85oSP5LmJIDogMTog5Y2V5puyLCAxMDog5LiT6L6RLCAxMDA6IOatjOaJiywgMTAwMDog5q2M5Y2VLCAxMDAyOiDnlKjmiLcsIDEwMDQ6IE1WLCAxMDA2OiDmrYzor40sIDEwMDk6IOeUteWPsCwgMTAxNDog6KeG6aKRLCAxMDE4Oue7vOWQiFxyXG4gKi9cclxuU2VhcmNoLnNlYXJjaCA9IGZ1bmN0aW9uKGtleXdvcmQsIHR5cGUsIHBhZ2UsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuU0VBUkNIO1xyXG5cdGxldCBsaW1pdCA9IDEwO1xyXG5cdGxldCBvZmZzZXQgPSBwYWdlICogbGltaXQ7XHJcblx0dHlwZSA9IHR5cGUgfHwgMTtcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0a2V5d29yZHM6IGtleXdvcmQsXHJcblx0XHRsaW1pdDogbGltaXQsXHJcblx0XHRvZmZzZXQ6IG9mZnNldCxcclxuXHRcdHR5cGU6IHR5cGVcclxuXHR9XHJcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZWFyY2g7IiwibGV0IE90aGVyID0ge307XHJcblxyXG5PdGhlci5iYW5uZXIgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkJBTk5FUjtcclxuXHJcblx0cmVxdWVzdC5nZXQodXJsLCB7dHlwZTogMX0sIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vIOmcgOeZu+mZhuWQjuiwg+eUqFxyXG5PdGhlci5yZWNvbW1lbmRfcmVzb3VyY2UgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlJFQ09NTUVORF9SRVNPVVJDRTtcclxuXHRcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHt9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT3RoZXI7IiwibGV0IEFsYnVtID0ge307XHJcblxyXG5BbGJ1bS5kZXRhaWwgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5BTEJVTV9ERVRBSUw7XHJcblxyXG5cdHJlcXVlc3QuZ2V0KHVybCwge2lkOiBpZH0sIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBbGJ1bTsiLCJsZXQgUGVyc29uYWxpemVkID0ge307XHJcblxyXG5QZXJzb25hbGl6ZWQucGxheWxpc3QgPSBmdW5jdGlvbihjYiwgbGltaXQpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5QRVJTT05BTElaRURfUExBWUxJU1Q7XHJcblx0bGltaXQgPSBsaW1pdCB8fCAxMDtcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHtsaW1pdDogbGltaXR9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5QZXJzb25hbGl6ZWQubmV3c29uZyA9IGZ1bmN0aW9uKGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUEVSU09OQUxJWkVEX05FV1NPTkc7XHJcblx0cmVxdWVzdC5nZXQodXJsLCB7fSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBlcnNvbmFsaXplZDsiLCJsZXQgVG9wID0ge307XHJcblxyXG5Ub3AuYWxidW0gPSBmdW5jdGlvbihjYiwgbGltaXQsIG9mZnNldCkge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlRPUF9BTEJVTTtcclxuXHRsaW1pdCA9IGxpbWl0IHx8IDEwO1xyXG5cdG9mZnNldCA9IG9mZnNldCB8fCAwO1xyXG5cdHJlcXVlc3QuZ2V0KHVybCwge2xpbWl0OiBsaW1pdCwgb2Zmc2V0OiBvZmZzZXR9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9wOyIsImxldCBWaWRlbyA9IHt9O1xyXG5cclxuVmlkZW8ubGlzdCA9IGZ1bmN0aW9uKGlkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlZJREVPX0xJU1Q7XHJcblxyXG5cdHJlcXVlc3QuZ2V0KHVybCwge2lkOiBpZH0sIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWaWRlbzsiLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9sb2dpbi9jYXB0Y2hhLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2xvZ2luL2NhcHRjaGEnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2FwdGNoYS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU4NzQ1NDlhJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXB0Y2hhLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2FwdGNoYS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jYXB0Y2hhLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jYXB0Y2hhLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjc4ZTA3ZjAwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkNPREUvb3BlcmFfdW5pYXBwL3BhZ2VzL2xvZ2luL2NhcHRjaGEubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXB0Y2hhLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTg3NDU0OWEmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlXCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widGlwXCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0aXRsZVwiXSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRpdGxlLXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIumqjOivgeeggeW3suWPkemAgeiHs1wiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wicGhvbmVcIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJwaG9uZS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtYXRfcGhvbmUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY2FwdGNoYVwiXSwgb246IHsgY2xpY2s6IF92bS50b19mb2N1cyB9IH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNhcHRjaGFfb2JqLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGssXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaXRlbVwiXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibnVtYmVyXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjMycnB4XCIsIGhlaWdodDogXCI1MHJweFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModikpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJib3R0b21fbGluZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHYgPyBcImxpbmUtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInUtaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImlucHV0XCJdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbWF4bGVuZ3RoOiBcIjRcIixcbiAgICAgICAgICAgICAgZm9jdXM6IF92bS5mb2N1cyxcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXB0Y2hhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5jYXB0Y2hhID0gJGV2ZW50LmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3ZtLmNhcHRjaGFfaW5wdXRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYmx1cjogX3ZtLm9uX2JsdXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcHRjaGEubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FwdGNoYS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJwYWdlXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRpcFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZS10ZXh0XCI+6aqM6K+B56CB5bey5Y+R6YCB6IezPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicGhvbmVcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBob25lLXRleHRcIj57e2Zvcm1hdF9waG9uZX19PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwiY2FwdGNoYVwiIEB0YXA9XCJ0b19mb2N1c1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCIgdi1mb3I9XCIodiwgaykgaW4gY2FwdGNoYV9vYmpcIiA6a2V5PVwia1wiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibnVtYmVyXCIgc3R5bGU9XCJmb250LXNpemU6IDMycnB4O2hlaWdodDogNTBycHg7XCI+e3t2fX08L3RleHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b21fbGluZVwiIDpjbGFzcz1cInY/J2xpbmUtYWN0aXZlJyA6ICcnXCIgc3R5bGU9XCJcIj48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PGlucHV0IEBpbnB1dD1cImNhcHRjaGFfaW5wdXRcIiBAYmx1cj1cIm9uX2JsdXJcIiBtYXhsZW5ndGg9XCI0XCIgOmZvY3VzPVwiZm9jdXNcIiB2LW1vZGVsPVwiY2FwdGNoYVwiIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImlucHV0XCIgLz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCAkcmVwZWF0ZXIgZnJvbSAnLi4vLi4vdXRpbHMvcmVwZWF0ZXIuanMnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Zm9jdXM6IHRydWUsXHJcblx0XHRcdFx0cGhvbmU6ICcnLFxyXG5cdFx0XHRcdGNhcHRjaGE6ICcnLFxyXG5cdFx0XHRcdGNhcHRjaGFfb2JqOiB7XHJcblx0XHRcdFx0XHRvbmU6ICcnLFxyXG5cdFx0XHRcdFx0dHdvOiAnJyxcclxuXHRcdFx0XHRcdHRocmVlOiAnJyxcclxuXHRcdFx0XHRcdGZvdXI6ICcnLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGZvcm1hdF9waG9uZSgpIHtcclxuXHRcdFx0XHRsZXQgcGhvbmUgPSB0aGlzLnBob25lO1xyXG5cdFx0XHRcdGlmIChwaG9uZS5sZW5ndGggPT0gMTEpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBob25lLnN1YnN0cigwLDMpICsgXCIqKioqXCIgKyB0aGlzLnBob25lLnN1YnN0cig3KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRjYXB0Y2hhKHZhbHVlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5jYXB0Y2hhX29iai5vbmUgPSB2YWx1ZS5zdWJzdHIoMCwgMSk7XHJcblx0XHRcdFx0dGhpcy5jYXB0Y2hhX29iai50d28gPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XHJcblx0XHRcdFx0dGhpcy5jYXB0Y2hhX29iai50aHJlZSA9IHZhbHVlLnN1YnN0cigyLCAxKTtcclxuXHRcdFx0XHR0aGlzLmNhcHRjaGFfb2JqLmZvdXIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XHJcblx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA9PSA0KSB7XHJcblx0XHRcdFx0XHR0aGlzLmNoZWNrX2NhcHRjaGEoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb25zKSB7XHJcblx0XHRcdGlmIChvcHRpb25zLnBob25lKSB7XHJcblx0XHRcdFx0dGhpcy5waG9uZSA9IG9wdGlvbnMucGhvbmU7XHJcblx0XHRcdFx0dGhpcy5zZW5kX2NhcHRjaGEoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2hlY2tfY2FwdGNoYSgpIHtcclxuXHRcdFx0XHRsZXQgcGhvbmUgPSB0aGlzLnBob25lO1xyXG5cdFx0XHRcdGxldCBjYXB0Y2hhID0gdGhpcy5jYXB0Y2hhO1xyXG5cdFx0XHRcdCRyZXBlYXRlci51c2VyLnZlcmlmeV9jYXB0Y2hhKHBob25lLCBjYXB0Y2hhLCAocmVzKT0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdC8vIOmqjOivgeeggeato+ehriwg6Lez6L2s6Iez5rOo5YaML+S/ruaUueWvhueggemhtemdolxyXG5cdFx0XHRcdFx0XHQkcmVwZWF0ZXIuaGVscGVyLnRvKCcuL3Bhc3N3b3JkP2NhcHRjaGE9JyArIGNhcHRjaGEgKyAnJnBob25lPScgKyBwaG9uZSArICcmZnJvbT1yZWcnKTtcclxuXHRcdFx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHQkcmVwZWF0ZXIuaGVscGVyLnRvKCcuL3Bhc3N3b3JkP2NhcHRjaGE9JyArIGNhcHRjaGEgKyAnJnBob25lPScgKyBwaG9uZSArICcmZnJvbT1yZWcnKTtcclxuXHRcdFx0XHRcdFx0XHQkcmVwZWF0ZXIuaGVscGVyLnRvYXN0KCdub25lJywgJ+mqjOivgeeggemUmeivrycsIDQwMDAsIGZhbHNlLCAnYm90dG9tJyk7XHJcblx0XHRcdFx0XHRcdH0sIDEwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9fZm9jdXMoKSB7XHJcblx0XHRcdFx0dGhpcy5mb2N1cyA9IHRydWU7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRvbl9ibHVyKCkge1xyXG5cdFx0XHRcdHRoaXMuZm9jdXMgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2FwdGNoYV9pbnB1dChldmVudCkge1xyXG5cdFx0XHRcdHRoaXMuY2FwdGNoYSA9IGV2ZW50LmRldGFpbC52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VuZF9jYXB0Y2hhKCkge1xyXG5cdFx0XHRcdGxldCBwaG9uZSA9IHRoaXMucGhvbmU7XHJcblx0XHRcdFx0JHJlcGVhdGVyLnVzZXIuc2VuZF9jYXB0Y2hhKHBob25lLCAocmVzKT0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0JHJlcGVhdGVyLmhlbHBlci50b2FzdCgnbm9uZScsICfpqozor4HnoIHlt7Llj5HpgIEnLCAzMDAwLCBmYWxzZSwgJ2JvdHRvbScpO1xyXG5cdFx0XHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdCRyZXBlYXRlci5oZWxwZXIudG9hc3QoJ25vbmUnLCByZXMubWVzc2FnZSwgNDAwMCwgZmFsc2UsICdib3R0b20nKTtcclxuXHRcdFx0XHRcdFx0fSwgMTApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQucGFnZSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0cGFkZGluZy10b3A6IDEwMHJweDtcclxuXHR9XHJcblx0LnRpcCB7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRwYWRkaW5nOiAwIDMwcnB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHQudGl0bGUtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xyXG5cdH1cclxuXHQucGhvbmUtdGV4dCB7XHJcblx0XHRsaW5lLWhlaWdodDogNTBycHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cdH1cclxuXHQuY2FwdGNoYSB7XHJcblx0XHRoZWlnaHQ6IDMwMHJweDtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRcclxuXHRcdHBhZGRpbmc6IDEwMHJweCAxNTBycHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHQuYm90dG9tX2xpbmUge1xyXG5cdFx0d2lkdGg6IDkwcnB4O2hlaWdodDogNXJweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4zKTtcclxuXHR9XHJcblx0LmxpbmUtYWN0aXZlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0fVxyXG5cdC5pbnB1dCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IC05OTk5cnB4O1xyXG5cdFx0bGVmdDogLTk5OTlycHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXB0Y2hhLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcHRjaGEubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwYWdlXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMDBycHhcIlxuICB9LFxuICBcInRpcFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJ0aXRsZS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGhvbmUtdGV4dFwiOiB7XG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjUpXCJcbiAgfSxcbiAgXCJjYXB0Y2hhXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjMwMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMDBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNTBycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiYm90dG9tX2xpbmVcIjoge1xuICAgIFwid2lkdGhcIjogXCI5MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNXJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjMpXCJcbiAgfSxcbiAgXCJsaW5lLWFjdGl2ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfSxcbiAgXCJpbnB1dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCItOTk5OXJweFwiLFxuICAgIFwibGVmdFwiOiBcIi05OTk5cnB4XCJcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=