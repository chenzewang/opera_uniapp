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
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
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
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
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
/* 92 */
/*!*****************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/main.js?{"page":"pages%2Fplay%2Fplay"} ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_play_play_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/play/play.nvue?mpType=page */ 93);

        
        
        
        _pages_play_play_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_play_play_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/play/play'
        _pages_play_play_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_play_play_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 93 */
/*!***********************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/play/play.nvue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _play_nvue_vue_type_template_id_0bc80f90_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.nvue?vue&type=template&id=0bc80f90&mpType=page */ 94);
/* harmony import */ var _play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.nvue?vue&type=script&lang=js&mpType=page */ 96);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./play.nvue?vue&type=style&index=0&lang=css&mpType=page */ 98).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./play.nvue?vue&type=style&index=0&lang=css&mpType=page */ 98).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _play_nvue_vue_type_template_id_0bc80f90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _play_nvue_vue_type_template_id_0bc80f90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "45d7b4a3",
  false,
  _play_nvue_vue_type_template_id_0bc80f90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/pages/play/play.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 94 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/play/play.nvue?vue&type=template&id=0bc80f90&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_template_id_0bc80f90_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./play.nvue?vue&type=template&id=0bc80f90&mpType=page */ 95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_template_id_0bc80f90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_template_id_0bc80f90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_template_id_0bc80f90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_template_id_0bc80f90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 95 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/pages/play/play.nvue?vue&type=template&id=0bc80f90&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            "uni-transition",
            {
              attrs: {
                duration: 300,
                modeClass: _vm.mode_class,
                styles: _vm.transfrom_class,
                show: _vm.show_lyric
              }
            },
            [
              !_vm.nolyric
                ? _c(
                    "list",
                    {
                      staticClass: ["lyric-list"],
                      attrs: { showScrollbar: "false" }
                    },
                    [
                      _c("cell", {
                        staticClass: ["top-area"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      }),
                      _vm._l(_vm.lyric, function(row, index) {
                        return _c(
                          "cell",
                          {
                            key: index,
                            appendAsTree: true,
                            attrs: { append: "tree" },
                            on: {
                              click: function($event) {
                                _vm.change_container()
                              }
                            }
                          },
                          [
                            row.content
                              ? _c("view", { staticClass: ["lyric-row"] }, [
                                  _c(
                                    "u-text",
                                    {
                                      ref: "lyric" + index,
                                      refInFor: true,
                                      staticClass: ["lyric-row-text"],
                                      class:
                                        _vm.active_lyric_row_index == row.index
                                          ? "light-text"
                                          : ""
                                    },
                                    [_vm._v(_vm._s(row.content))]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _c(
                    "view",
                    {
                      staticStyle: { flex: "1", justifyContent: "center" },
                      on: {
                        click: function($event) {
                          _vm.change_container()
                        }
                      }
                    },
                    [
                      _c("u-text", { staticClass: ["lyric-row-text"] }, [
                        _vm._v("纯音乐, 请欣赏")
                      ])
                    ]
                  )
            ]
          ),
          _c(
            "uni-transition",
            {
              attrs: {
                duration: 300,
                modeClass: _vm.mode_class,
                styles: _vm.transfrom_class,
                show: !_vm.show_lyric
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: ["container"],
                  on: {
                    click: function($event) {
                      _vm.change_container()
                    }
                  }
                },
                [
                  _c(
                    "view",
                    { staticClass: ["cover"] },
                    [
                      _c("u-image", {
                        ref: "cover_image",
                        staticClass: ["cover-image"],
                        attrs: {
                          resize: "cover",
                          src: _vm.played.cover_image + "?param=400y400"
                        }
                      })
                    ],
                    1
                  ),
                  _c("view", { staticClass: ["option-area"] }, [
                    _c("view", { staticClass: ["icon-group"] }, [
                      _c(
                        "view",
                        {
                          staticClass: ["icon-area"],
                          on: {
                            click: function($event) {
                              _vm.like($event)
                            }
                          }
                        },
                        [
                          _c("wyy-icon", {
                            attrs: {
                              type: _vm.islike ? "&#xe679;" : "&#xe67a;",
                              size: "40",
                              color: _vm.islike ? "#FF0000" : "#FFFFFF"
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "view",
                        { staticClass: ["icon-area"] },
                        [
                          _c("wyy-icon", {
                            attrs: {
                              type: "&#xe666;",
                              size: "40",
                              color: "#FFFFFF"
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "view",
                        { staticClass: ["icon-area"] },
                        [
                          _c("wyy-icon", {
                            attrs: {
                              type: "&#xe668;",
                              size: "40",
                              color: "#FFFFFF"
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "view",
                        { staticClass: ["icon-area"] },
                        [
                          _c("wyy-icon", {
                            attrs: {
                              type: "&#xe67d;",
                              size: "40",
                              color: "#FFFFFF"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            ]
          ),
          _c("view", { staticClass: ["footer"] }, [
            _c(
              "view",
              { staticClass: ["slider-view"] },
              [
                _c("view", { staticClass: ["current_time"] }, [
                  _c("u-text", { staticClass: ["time-text"] }, [
                    _vm._v(_vm._s(_vm.position_show))
                  ])
                ]),
                _c("u-slider", {
                  staticClass: ["slider"],
                  attrs: {
                    min: 0,
                    max: _vm.duration,
                    value: _vm.current_position,
                    activeColor: "rgba(255,255,255,.7)",
                    backgroundColor: "rgba(255,255,255,.4)",
                    blockColor: "#FFFFFF",
                    blockSize: "18"
                  },
                  on: {
                    change: _vm.slider_change,
                    changing: _vm.slider_changing
                  }
                }),
                _c("view", { staticClass: ["end_time"] }, [
                  _c(
                    "u-text",
                    { staticClass: ["time-text", "grey-time-text"] },
                    [_vm._v(_vm._s(_vm.duration_show))]
                  )
                ])
              ],
              1
            ),
            _c("view", { staticClass: ["handle-area"] }, [
              _c("view", { staticClass: ["icon-group"] }, [
                _c(
                  "view",
                  {
                    staticClass: ["icon-area", "loop"],
                    on: { click: _vm.change_play_mode }
                  },
                  [
                    _vm.play_mode == "random"
                      ? _c("wyy-icon", {
                          attrs: {
                            type: "&#xe676;",
                            size: "40",
                            color: "#FFFFFF"
                          }
                        })
                      : _vm._e(),
                    _vm.play_mode == "sequence"
                      ? _c("wyy-icon", {
                          attrs: {
                            type: "&#xe674;",
                            size: "40",
                            color: "#FFFFFF"
                          }
                        })
                      : _vm._e(),
                    _vm.play_mode == "single"
                      ? _c("wyy-icon", {
                          attrs: {
                            type: "&#xe678;",
                            size: "40",
                            color: "#FFFFFF"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _c(
                  "view",
                  {
                    staticClass: ["icon-area", "prev"],
                    on: {
                      click: function($event) {
                        _vm.prev()
                      }
                    }
                  },
                  [
                    _c("wyy-icon", {
                      attrs: { type: "&#xe66f;", size: "40", color: "#FFFFFF" }
                    })
                  ],
                  1
                ),
                _c(
                  "view",
                  {
                    staticClass: ["icon-area", "turn"],
                    on: {
                      click: function($event) {
                        _vm.turn()
                      }
                    }
                  },
                  [
                    _c("wyy-icon", {
                      attrs: {
                        type: _vm.playing ? "&#xe672;" : "&#xe673;",
                        size: "100",
                        color: "#FFFFFF"
                      }
                    })
                  ],
                  1
                ),
                _c(
                  "view",
                  {
                    staticClass: ["icon-area", "next"],
                    on: {
                      click: function($event) {
                        _vm.next()
                      }
                    }
                  },
                  [
                    _c("wyy-icon", {
                      attrs: { type: "&#xe622;", size: "50", color: "#FFFFFF" }
                    })
                  ],
                  1
                ),
                _c(
                  "view",
                  {
                    staticClass: ["icon-area", "list-menu"],
                    on: { click: _vm.open_playlist }
                  },
                  [
                    _c("wyy-icon", {
                      attrs: { type: "&#xe671;", size: "40", color: "#FFFFFF" }
                    })
                  ],
                  1
                )
              ])
            ])
          ]),
          _c("playlist-drawer", { ref: "playlist_drawer" })
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
/* 96 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/play/play.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./play.nvue?vue&type=script&lang=js&mpType=page */ 97);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 97 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/pages/play/play.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















































































var _uniTransition = _interopRequireDefault(__webpack_require__(/*! @/components/uni-transition/uni-transition.vue */ 67));
var _playlist_drawer = _interopRequireDefault(__webpack_require__(/*! @/components/playlist_drawer.nvue */ 59));

var _wyyIcon = _interopRequireDefault(__webpack_require__(/*! ../../components/wyy-icon/wyy-icon.nvue */ 45));

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
var animation = weex.requireModule('animation');var dom = weex.requireModule('dom');var _default = { components: { uniTransition: _uniTransition.default, playlistDrawer: _playlist_drawer.default, wyyIcon: _wyyIcon.default }, data: function data() {return { statusbar_height: _repeater.default.config.status_bar_height, duration: _repeater.default.player.get_duration().toFixed(0), //音频总长度单位s
      current_position: _repeater.default.player.get_position().toFixed(0), //当前播放位置
      timer: '', //计时器
      animation_timer: '', deg: 0, dragging: false, //
      show_lyric: false, //是否显示歌词
      nolyric: false, lyric: [], active_lyric_row_index: 0, mode_class: ['fade'], transfrom_class: { 'position': 'fixed', 'bottom': '200rpx', 'top': 0, 'left': 0, 'right': 0, 'align-items': 'center' } };}, computed: { position_show: function position_show() {var minute = parseInt(this.current_position / 60);var second = this.current_position % 60;if (minute < 10) {minute = '0' + minute;}if (second < 10) {second = '0' + second;}return minute + ':' + second;}, duration_show: function duration_show() {var minute = parseInt(this.duration / 60);var second = this.duration % 60;if (minute < 10) {minute = '0' + minute;}if (second < 10) {second = '0' + second;}return minute + ':' + second;}, playing: function playing() {return this.$store.state.playing;}, played: function played() {return this.$store.state.played;}, islike: function islike() {return this.$store.state.likelist.includes(this.played.id);}, play_mode: function play_mode() {return this.$store.state.play_mode;} }, watch: { played: function played(value) {__f__("log", value, " at pages\\play\\play.nvue:168");this._init();} }, created: function created() {}, onReady: function onReady() {this._init();}, methods: { _init: function _init() {this.set_title(this.played.name);this.get_lyric();this.init_cover_rotate();
      this.init_timer();
      this.init_slider();
    },
    init_slider: function init_slider() {var _this = this;
      setTimeout(function () {
        _this.duration = _repeater.default.player.get_duration().toFixed(0);
        _this.current_position = _repeater.default.player.get_position().toFixed(0);
      }, 1000);
    },
    open_playlist: function open_playlist() {
      this.$refs.playlist_drawer.open_playlist();
    },
    change_play_mode: function change_play_mode() {
      var mode_list = ['single', 'sequence', 'random'];
      var current_mode = this.play_mode;
      var index = mode_list.indexOf(current_mode);
      var next_index = index + 1 > 2 ? 0 : index + 1;
      var next_mode = mode_list[next_index];
      this.$store.commit('set_play_mode', next_mode);
    },
    like: function like(event) {var _this2 = this;
      event.stopPropagation();
      __f__("log", this.played.id, " at pages\\play\\play.nvue:205");

      _repeater.default.user.like(this.played.id, !this.islike, function (res) {
        __f__("log", res, " at pages\\play\\play.nvue:208");
        var playlist = _this2.$store.state.likelist;
        if (_this2.islike) {
          var index = playlist.indexOf(_this2.played.id);
          playlist.splice(index, 1);
          __f__("log", index, " at pages\\play\\play.nvue:213");
        } else {
          playlist.push(_this2.played.id);
        }
        __f__("log", playlist, " at pages\\play\\play.nvue:217");
        _this2.$store.commit('set_likelist', playlist);
      });

    },
    set_active_lyric_row_index: function set_active_lyric_row_index() {var _this3 = this;
      if (this.nolyric) {
        return;
      }
      var active_lyric_rows = this.lyric.filter(function (obj) {
        return parseInt(obj.second) <= parseInt(_this3.current_position) && obj.content;
      });

      var current_row = active_lyric_rows.pop();

      if (this.active_lyric_row_index == current_row.index) {//在一行歌词停留时, 就不滚动了
        return;
      }


      this.active_lyric_row_index = current_row.index;

      var to_index = 0;
      if (active_lyric_rows.length > 8) {
        to_index = active_lyric_rows.slice(-8)[0].index;

        __f__("log", active_lyric_rows.slice(-8)[0], " at pages\\play\\play.nvue:243");
      }

      if (current_row.content && to_index > 0) {
        try {
          var el = this.$refs["lyric".concat(to_index)][0];
          dom.scrollToElement(el, {});
        } catch (e) {
          __f__("log", e, " at pages\\play\\play.nvue:251");
        }
      }

    },
    get_lyric: function get_lyric() {var _this4 = this;
      _repeater.default.song.get_lyric(this.played.id, function (data) {

        if (data.nolyric || !data.lrc.lyric) {
          __f__("log", '暂无歌词', " at pages\\play\\play.nvue:260");
          _this4.nolyric = true;
          return;
        }
        var lyric = data.lrc.lyric;

        var lines = lyric.split('\n');

        var new_lyric = [];
        lines.forEach(function (line, index) {
          var new_line = {};
          if (!line) {
            return;
          }
          //哈哈哈,正则没写明白

          var pattern = /\[\S*\]/g;
          var time = line.match(pattern)[0];
          var line_lyric = line.replace(time, '');

          time = time.replace(/\[/, '');
          time = time.replace(/\]/, '');

          new_line.index = index;
          new_line.time = time;
          new_line.content = line_lyric.trim();
          new_line.second = (time.split(":")[0] * 60 + parseFloat(time.split(":")[1])).toFixed(0);
          new_lyric.push(new_line);
        });

        _this4.lyric = new_lyric;
        __f__("log", _this4.lyric[0], " at pages\\play\\play.nvue:291");
      });
    },
    change_container: function change_container() {
      this.show_lyric = !this.show_lyric;
    },
    init_cover_rotate: function init_cover_rotate() {var _this5 = this;
      if (this.animation_timer) {
        clearInterval(this.animation_timer);
        this.animation_timer = '';
      }
      var cover_image = this.$refs.cover_image;


      var degree = this.deg + 'deg';

      this.animation_timer = setInterval(function () {
        if (_this5.playing) {
          _this5.deg += 20; //步进值
        }

        degree = _this5.deg + 'deg';
        animation.transition(cover_image, {
          styles: {
            transform: 'rotate(' + degree + ')',
            transformOrigin: 'center center' },

          duration: 1400, //ms
          timingFunction: 'linear',
          delay: 0 //ms
        }, function () {


        });
      }, 1400);

    },
    set_title: function set_title(title) {
      uni.setNavigationBarTitle({
        title: title });

    },
    slider_changing: function slider_changing(e) {
      this.dragging = true;
      this.current_position = e.detail.value;
    },
    slider_change: function slider_change(e) {
      __f__("log", e, " at pages\\play\\play.nvue:338");
      var position = e.detail.value;
      _repeater.default.player.seek_to(position);
      this.dragging = false;
    },
    turn: function turn() {
      //切换播放暂停状态
      _repeater.default.player.turn();
    },
    stop_rotate: function stop_rotate() {

    },
    init_timer: function init_timer() {var _this6 = this;



      if (this.timer) {
        clearInterval(this.timer);
        this.timer = '';
      }
      this.timer = setInterval(function () {
        // console.log(this.lyric[this.active_row_lyric][2]);
        if (!_this6.dragging) {
          _this6.current_position = _repeater.default.player.get_position().toFixed(0);

          if (_this6.show_lyric) {
            _this6.set_active_lyric_row_index();
          }

        }
      }, 1000);
    },
    next: function next() {
      __f__("log", '下一曲', " at pages\\play\\play.nvue:371");
      this.$refs.playlist_drawer.next_song();
    },
    prev: function prev() {
      __f__("log", '上一曲', " at pages\\play\\play.nvue:375");
      this.$refs.playlist_drawer.prev_song();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),
/* 98 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/play/play.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./play.nvue?vue&type=style&index=0&lang=css&mpType=page */ 99);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 99 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/pages/play/play.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "flex": 1,
    "backgroundColor": "#171616"
  },
  "container": {
    "flex": 1
  },
  "cover": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "cover-image": {
    "width": "480rpx",
    "height": "480rpx",
    "borderRadius": 1000
  },
  "footer": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "height": "200rpx",
    "width": "750rpx",
    "alignItems": "center"
  },
  "slider-view": {
    "width": "750rpx",
    "height": "50rpx",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "slider": {
    "width": "630rpx",
    "marginLeft": "10rpx"
  },
  "current_time": {
    "width": "55rpx",
    "alignItems": "flex-end"
  },
  "end_time": {
    "width": "55rpx"
  },
  "time-text": {
    "color": "#FFFFFF",
    "fontSize": "16rpx"
  },
  "grey-time-text": {
    "color": "rgba(255,255,255,0.3)"
  },
  "option-area": {
    "width": "750rpx",
    "alignItems": "center",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "30rpx"
  },
  "handle-area": {
    "width": "750rpx",
    "alignItems": "center",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "icon-group": {
    "width": "600rpx",
    "height": "90rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "icon-area": {
    "width": "120rpx",
    "height": "90rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "lyric-row": {
    "width": "750rpx",
    "height": "65rpx",
    "paddingLeft": "16rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "lyric-row-text": {
    "fontSize": "24rpx",
    "color": "#8B8682"
  },
  "light-text": {
    "color": "#FFFFFF",
    "fontSize": "26rpx",
    "fontWeight": "bold"
  },
  "lyric-list": {
    "flex": 1,
    "width": "750rpx"
  },
  "top-area": {
    "height": "50rpx",
    "width": "750rpx"
  },
  "bottom-area": {
    "height": "600rpx",
    "width": "750rpx"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMuanNvbj9hOTkzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMuanNvbj9jOTU5Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvbWFpbi5qcz8wNDc4Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvQXBwLnZ1ZT83MmMzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvQXBwLnZ1ZT9hNmU3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL2xpYi9mb3JtYXQtbG9nLmpzPzBkZTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ1bmktYXBwOi8vL3V0aWxzL3JlcGVhdGVyLmpzIiwidW5pLWFwcDovLy9jb25maWcvY29uZmlnLmpzIiwidW5pLWFwcDovLy9oZWxwZXIvaGVscGVyLmpzIiwidW5pLWFwcDovLy91dGlscy9wbGF5ZXIuanMiLCJ1bmktYXBwOi8vL3V0aWxzL3N0b3JhZ2UuanMiLCJ1bmktYXBwOi8vL21vZGVsL3NvbmcuanMiLCJ1bmktYXBwOi8vL3V0aWxzL3JlcXVlc3QuanMiLCJ1bmktYXBwOi8vL21vZGVsL3VzZXIuanMiLCJ1bmktYXBwOi8vL21vZGVsL3BsYXlsaXN0LmpzIiwidW5pLWFwcDovLy9tb2RlbC9zZWFyY2guanMiLCJ1bmktYXBwOi8vL21vZGVsL290aGVyLmpzIiwidW5pLWFwcDovLy9tb2RlbC9hbGJ1bS5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvcGVyc29uYWxpemVkLmpzIiwidW5pLWFwcDovLy9tb2RlbC90b3AuanMiLCJ1bmktYXBwOi8vL21vZGVsL3ZpZGVvLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlP2I3NGQiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3d5eS1pY29uL3d5eS1pY29uLm52dWU/ZTRhZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZT8zNzQ5Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlP2FlNzQiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZT8zZmQzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlPzFiMTciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2RyYXdlci5udnVlPzBhNTMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2RyYXdlci5udnVlP2Q1MjIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2RyYXdlci5udnVlPzgyOTEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2RyYXdlci5udnVlPzYzYmEiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvcGxheWxpc3RfZHJhd2VyLm52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlP2E1N2YiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlPzJhNTQiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlPzBiMDkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZT8wMGY0Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/OTJkOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlPzU0N2EiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZT9jMWNiIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy91bmktYXBwLXBsdXMtbnZ1ZS9kaXN0L3JlcXVpcmUtbmF0aXZlLXBsdWdpbi5qcz9lZmU1Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/ODMyMSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlPzk0ZjYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlPzNlNzYiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlPzkyNTIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlPzg1MjciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2RyYXdlci5udnVlPzIwOGYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2RyYXdlci5udnVlP2NhZDEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9tYWluLmpzPzA3ZmYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9wYWdlcy9wbGF5L3BsYXkubnZ1ZT8zMDZmIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMvcGxheS9wbGF5Lm52dWU/ZjI5YiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL3BhZ2VzL3BsYXkvcGxheS5udnVlPzhiMWEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9wYWdlcy9wbGF5L3BsYXkubnZ1ZT84ZmJjIiwidW5pLWFwcDovLy9wYWdlcy9wbGF5L3BsYXkubnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL3BhZ2VzL3BsYXkvcGxheS5udnVlPzRhYzEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9wYWdlcy9wbGF5L3BsYXkubnZ1ZT80YTRmIl0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJ0eXBvZiIsInMiLCJwcm90b3R5cGUiLCJzdWJzdHJpbmciLCJpc0RlYnVnTW9kZSIsIl9fY2hhbm5lbElkX18iLCJsb2ciLCJfbGVuIiwiYXJndW1lbnRzIiwiQXJyYXkiLCJfa2V5IiwiYXBwbHkiLCJmb3JtYXRMb2ciLCJzaGlmdCIsInBvcCIsIm1zZ3MiLCJtYXAiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiLCJoZWxwZXIiLCJ1c2VyIiwicGxheWxpc3QiLCJwbGF5ZXIiLCJzdG9yYWdlIiwic29uZyIsInNlYXJjaCIsIm90aGVyIiwiYWxidW0iLCJwZXJzb25hbGl6ZWQiLCJ0b3AiLCJ2aWRlbyIsInN5c3RlbUluZm8iLCJzdGF0dXNfYmFyX2hlaWdodCIsInN0YXR1c0JhckhlaWdodCIsIkhPU1QiLCJBUEkiLCJDRUxMUEhPTkVfTE9HSU4iLCJMT0dJTl9TVEFUVVMiLCJDSEVDS19QSE9ORSIsIkxPR09VVCIsIlNFTkRfQ0FQVENIQSIsIlZFUklGWV9DQVBUQ0hBIiwiUEhPTkVfUkVHIiwiU1VCQ09VTlQiLCJVU0VSX0RFVEFJTCIsIlVTRVJfUExBWUxJU1QiLCJVU0VSX0xJS0VfTElTVCIsIkxJS0UiLCJQTEFZTElTVF9ERVRBSUwiLCJBTEJVTV9ERVRBSUwiLCJTT05HIiwiTFlSSUMiLCJTT05HX0RFVEFJTCIsIkhPVF9TRUFSQ0giLCJTRUFSQ0giLCJCQU5ORVIiLCJSRUNPTU1FTkRfUkVTT1VSQ0UiLCJQRVJTT05BTElaRURfUExBWUxJU1QiLCJQRVJTT05BTElaRURfTkVXU09ORyIsIlRPUF9BTEJVTSIsIlZJREVPX0xJU1QiLCJwbGF5ZWRfd2F0Y2giLCJjYiIsIm9iaiIsImdldEFwcCIsImdsb2JhbERhdGEiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJzZXQiLCJfcGxheWVkIiwiZ2V0IiwiYmFja2dyb3VuZGVyIiwib3MiLCJuYW1lIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJhbmRyb2lkIiwicnVudGltZU1haW5BY3Rpdml0eSIsIm1vdmVUYXNrVG9CYWNrIiwidG8iLCJtb2RlIiwibmF2aWdhdGVUbyIsInRvYXN0IiwiaWNvbiIsInRleHQiLCJkdXJhdGlvbiIsIm1hc2siLCJwb3NpdGlvbiIsInNob3dUb2FzdCIsIlBsYXllckhlbHBlciIsImdldF9wbGF5ZXIiLCJzZXRfdXJsIiwiU3RvcmFnZSIsImdldF9wbGF5ZWQiLCJzZXRTdHlsZXMiLCJwbGF5IiwicGF1c2UiLCJnZXRfcG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImdldF9kdXJhdGlvbiIsImdldER1cmF0aW9uIiwic2Vla190byIsInNlZWtUbyIsInByZXYiLCJwbGF5ZWQiLCJnZXRfY3VycmVudF9wbGF5bGlzdCIsImN1cnJlbnRfc29uZ19pZCIsImlkIiwicHJldl9pbmRleCIsInByZXZfc29uZ19pZCIsInN0YXJ0IiwibmV4dCIsIm5leHRfaW5kZXgiLCJuZXh0X3NvbmdfaWQiLCJzb25nX2lkIiwiU29uZyIsImdldF9zb25nX2RldGFpbCIsInNvbmdzIiwic29uZ19uYW1lIiwiY292ZXJfaW1hZ2UiLCJhbCIsInBpY1VybCIsImN1cnJlbnRfcGxheWVkIiwicGxheWVkX211c2ljX2lkIiwiaXNQYXVzZWQiLCJIZWxwZXIiLCJnZXRfc29uZ191cmwiLCJyZXMiLCJjcmVhdG9ycyIsImFyIiwiY3JlYXRvcl9zdHIiLCJjcmVhdG9yIiwidHVybiIsIm1vZHVsZSIsImV4cG9ydHMiLCJMQVRFU1RfUExBWUVEIiwiQ1VSUkVOVF9QTEFZTElTVCIsIklTX0xPR0lOIiwiUExBWV9NT0RFIiwiaXNfbG9naW4iLCJzZXRfaXNfbG9naW4iLCJzZXRfcGxheWVkIiwic2V0X2N1cnJlbnRfcGxheWxpc3QiLCJnZXRfcGxheV9tb2RlIiwic2V0X3BsYXlfbW9kZSIsImsiLCJwYXJhbXMiLCJiciIsImNvZGUiLCJnZXRfbHlyaWMiLCJpZHMiLCJzdWNjZXNzX2NiIiwiZmFpbGVkX2NiIiwidXJpIiwiZXJyTXNnIiwiaGlkZVRvYXN0IiwicG9zdCIsInRlc3QiLCJVc2VyIiwiY2hlY2tfcGhvbmUiLCJwaG9uZSIsInN0YXR1c0NvZGUiLCJsb2dpbiIsInBhc3N3b3JkIiwiZ2V0X3N0YXR1cyIsInN0YXR1cyIsInJlZyIsImNhcHRjaGEiLCJsb2dvdXQiLCJzZW5kX2NhcHRjaGEiLCJ2ZXJpZnlfY2FwdGNoYSIsImNoZWNrX2xvZ2luIiwiZ2V0X3N1YmNvdW50IiwiZ2V0X3VzZXJfZGV0YWlsIiwidWlkIiwiZ2V0X3BsYXlsaXN0IiwiZ2V0X2xpa2VsaXN0IiwibGlrZSIsIm11c2ljX2lkIiwidHMiLCJ0aW1lc3RhbXAiLCJQbGF5bGlzdCIsImdldF9wbGF5bGlzdF9kZXRhaWwiLCJTZWFyY2giLCJnZXRfaG90X2xpc3QiLCJrZXl3b3JkIiwibGltaXQiLCJvZmZzZXQiLCJrZXl3b3JkcyIsIk90aGVyIiwiYmFubmVyIiwicmVjb21tZW5kX3Jlc291cmNlIiwiQWxidW0iLCJkZXRhaWwiLCJQZXJzb25hbGl6ZWQiLCJuZXdzb25nIiwiVG9wIiwiVmlkZW8iLCJsaXN0IiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQStqQyxDQUFnQix1bENBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQW5sQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0EsUUFBb0M7QUFDcEMsUUFBOEI7QUFDOUIsUUFBNEQ7QUFDNUQsUUFBUSx5RUFBRztBQUNYLFFBQVEseUVBQUc7QUFD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Z01BLFFBaE1BLGtCQWdNQTtBQUNBO0FBQ0E7QUFDQSxLQW5NQTtBQW9NQSxRQXBNQSxrQkFvTUE7QUFDQTtBQUNBO0FBQ0EsS0F2TUEsRUFqRkEsRTs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQUE7QUFBQTtBQUFBO0FBQThrQyxDQUFnQix1bENBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQWxtQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy9wbGF5L3BsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOTIpO1xuIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fRDA3RUNCMVwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicGFnZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE2XCJcbiAgfVxufSIsImZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIHZhciBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpXG59XG5cbmZ1bmN0aW9uIGlzRGVidWdNb2RlICgpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgcmV0dXJuIHR5cGVvZiBfX2NoYW5uZWxJZF9fID09PSAnc3RyaW5nJyAmJiBfX2NoYW5uZWxJZF9fXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cgKHR5cGUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldXG4gIH1cbiAgY29uc29sZVt0eXBlXS5hcHBseShjb25zb2xlLCBhcmdzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldXG4gIH1cbiAgdmFyIHR5cGUgPSBhcmdzLnNoaWZ0KClcbiAgaWYgKGlzRGVidWdNb2RlKCkpIHtcbiAgICBhcmdzLnB1c2goYXJncy5wb3AoKS5yZXBsYWNlKCdhdCAnLCAndW5pLWFwcDovLy8nKSlcbiAgICByZXR1cm4gY29uc29sZVt0eXBlXVsnYXBwbHknXShjb25zb2xlLCBhcmdzKVxuICB9XG5cbiAgdmFyIG1zZ3MgPSBhcmdzLm1hcChmdW5jdGlvbiAodikge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICh0eXBlID09PSAnW29iamVjdCBvYmplY3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBhcnJheV0nKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2ID0gJy0tLUJFR0lOOkpTT04tLS0nICsgSlNPTi5zdHJpbmdpZnkodikgKyAnLS0tRU5EOkpTT04tLS0nXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xuICAgICAgICB2ID0gJy0tLU5VTEwtLS0nXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcblxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcbiAgICAgICAgICB2ID0gJy0tLUJFR0lOOicgKyB2VHlwZSArICctLS0nICsgdiArICctLS1FTkQ6JyArIHZUeXBlICsgJy0tLSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdlxuICB9KVxuICB2YXIgbXNnID0gJydcblxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XG4gICAgdmFyIGxhc3RNc2cgPSBtc2dzLnBvcCgpXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXG5cbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcbiAgICAgIG1zZyArPSBsYXN0TXNnXG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtc2cgPSBtc2dzWzBdXG4gIH1cblxuICBjb25zb2xlW3R5cGVdKG1zZylcbn1cbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIW9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnRzID0ge31cbiAgICB9XG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgICBmb3IgKHZhciBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChoYXNPd24uY2FsbChjb21wb25lbnRzLCBuYW1lKSAmJiAhaGFzT3duLmNhbGwob3B0aW9ucy5jb21wb25lbnRzLCBuYW1lKSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnRzW25hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyLmpzJztcblxuaW1wb3J0IHBsYXllciBmcm9tICdAL3V0aWxzL3BsYXllci5qcyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdAL3V0aWxzL3N0b3JhZ2UuanMnO1xuXG5pbXBvcnQgdXNlciBmcm9tICcuLi9tb2RlbC91c2VyLmpzJztcbmltcG9ydCBwbGF5bGlzdCBmcm9tICcuLi9tb2RlbC9wbGF5bGlzdC5qcyc7XG5pbXBvcnQgc29uZyBmcm9tICcuLi9tb2RlbC9zb25nLmpzJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vbW9kZWwvc2VhcmNoLmpzJztcbmltcG9ydCBvdGhlciBmcm9tICcuLi9tb2RlbC9vdGhlci5qcyc7XG5pbXBvcnQgYWxidW0gZnJvbSAnLi4vbW9kZWwvYWxidW0uanMnO1xuaW1wb3J0IHBlcnNvbmFsaXplZCBmcm9tICcuLi9tb2RlbC9wZXJzb25hbGl6ZWQuanMnO1xuaW1wb3J0IHRvcCBmcm9tICcuLi9tb2RlbC90b3AuanMnO1xuaW1wb3J0IHZpZGVvIGZyb20gJy4uL21vZGVsL3ZpZGVvLmpzJztcblxuZXhwb3J0IGRlZmF1bHR7IFxuXHRjb25maWcsXG5cdGhlbHBlcixcblx0dXNlcixcblx0cGxheWxpc3QsXG5cdHBsYXllcixcblx0c3RvcmFnZSxcblx0c29uZyxcblx0c2VhcmNoLFxuXHRvdGhlcixcblx0YWxidW0sXG5cdHBlcnNvbmFsaXplZCxcblx0dG9wLFxuXHR2aWRlb1xufSIsIlxuY29uc3Qgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuXG5jb25zdCBzdGF0dXNfYmFyX2hlaWdodCA9IHN5c3RlbUluZm8uc3RhdHVzQmFySGVpZ2h0O1xuXG5jb25zdCBIT1NUID0gJ2h0dHA6Ly9hcGkuY2xvdWRtdXNpYy5wdWxzYXRpbmcuY246MzAwMC8nO1xuXG5jb25zdCBBUEkgPSB7fTtcbi8v55m75b2VXG5BUEkuQ0VMTFBIT05FX0xPR0lOID0gJ2xvZ2luL2NlbGxwaG9uZSc7IC8vIOaJi+acuuWPt+eZu+W9lVxuQVBJLkxPR0lOX1NUQVRVUyA9ICdsb2dpbi9zdGF0dXMnOyAvLyDnmbvpmYbnirbmgIFcbkFQSS5DSEVDS19QSE9ORSA9ICdjZWxscGhvbmUvZXhpc3RlbmNlL2NoZWNrJzsgLy8g5qOA5p+l5omL5py65Y+35piv5ZCm5rOo5YaM6L+HXG5BUEkuTE9HT1VUID0gJ2xvZ291dCc7IC8vIOeZu+WHulxuQVBJLlNFTkRfQ0FQVENIQSA9ICdjYXB0Y2hhL3NlbnQnOyAvLyDlj5HpgIHnn63kv6Hpqozor4HnoIFcbkFQSS5WRVJJRllfQ0FQVENIQSA9ICdjYXB0Y2hhL3ZlcmlmeSc7IC8vIOaguOWunumqjOivgeeggVxuQVBJLlBIT05FX1JFRyA9ICdyZWdpc3Rlci9jZWxscGhvbmUnOyAvLyDmiYvmnLrlj7fms6jlhoxcbi8v55So5oi3XG5BUEkuU1VCQ09VTlQgPSAndXNlci9zdWJjb3VudCc7IC8vIOeUqOaIt+eahOatjOWNle+8jOaUtuiXj++8jG12LCBkaiDmlbDph49cbkFQSS5VU0VSX0RFVEFJTCA9ICd1c2VyL2RldGFpbCc7IC8vIOiOt+WPlueUqOaIt+ivpuaDhVxuQVBJLlVTRVJfUExBWUxJU1QgPSAndXNlci9wbGF5bGlzdCc7IC8vIOiOt+WPlueUqOaIt+atjOWNlVxuQVBJLlVTRVJfTElLRV9MSVNUID0gJ2xpa2VsaXN0JzsgLy8g6I635Y+W55So5oi35Zac5qyi55qE6Z+z5LmQ5YiX6KGoXG5BUEkuTElLRSA9ICdsaWtlJzsgLy8g5Zac5qyi5p+Q5Liq5q2M5puyXG5cbi8vIOatjOWNlVxuQVBJLlBMQVlMSVNUX0RFVEFJTCA9ICdwbGF5bGlzdC9kZXRhaWwnOyAvLyDmrYzljZXor6bmg4VcblxuLy8g5LiT6L6RXG5BUEkuQUxCVU1fREVUQUlMID0gJ2FsYnVtJzsgLy/kuJPovpHor6bmg4VcblxuLy8g5q2M5puyXG5BUEkuU09ORyA9ICdzb25nL3VybCc7IC8v6I635Y+W5q2M5puydXJsXG5BUEkuTFlSSUMgPSAnbHlyaWMnOyAvL+iOt+WPluatjOivjVxuQVBJLlNPTkdfREVUQUlMID0gJ3NvbmcvZGV0YWlsJzsgLy/ojrflj5bmrYzmm7Lor6bmg4VcblxuLy8g5pCc57SiXG5BUEkuSE9UX1NFQVJDSCA9ICdzZWFyY2gvaG90L2RldGFpbCc7IC8v6I635Y+W54Ot5pCcXG5BUEkuU0VBUkNIID0gJ3NlYXJjaCc7IC8v5pCc57SiXG5cblxuLy8gT3RoZXJcbkFQSS5CQU5ORVIgPSAnYmFubmVyJzsgLy8g5Y+R546w6aG1YmFubmVy5Zu+XG5BUEkuUkVDT01NRU5EX1JFU09VUkNFID0gJ3JlY29tbWVuZC9yZXNvdXJjZSc7IC8vIOavj+aXpeaOqOiNkOatjOWNlVxuXG4vLyDnp4HkurrmjqjojZBcbkFQSS5QRVJTT05BTElaRURfUExBWUxJU1QgPSAncGVyc29uYWxpemVkJzsgLy8g5o6o6I2Q5q2M5Y2VXG5BUEkuUEVSU09OQUxJWkVEX05FV1NPTkcgPSAncGVyc29uYWxpemVkL25ld3NvbmcnOyAvLyDmjqjojZDmlrDmrYxcblxuLy8g5ZCE57G75o6S6KGMdG9wXG5BUEkuVE9QX0FMQlVNID0gJ3RvcC9hbGJ1bSc7IC8vIOaWsOein+S4iuaetlxuXG4vLyDop4bpopFcbkFQSS5WSURFT19MSVNUID0gJ3ZpZGVvL2dyb3VwJzsgLy8g5oyJ5YiG57G76I635Y+W6KeG6aKR5YiX6KGoLCDpnIDnmbvlvZVcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHN5c3RlbUluZm8sIFxuXHRzdGF0dXNfYmFyX2hlaWdodCxcblx0SE9TVCxcblx0QVBJXG59XG4iLCIvL+ebkeWQrGdsb2JhbERhdGHkuK3nmoRwbGF5ZWTlsZ7mgKdcbmZ1bmN0aW9uIHBsYXllZF93YXRjaChjYikge1xuXHR2YXIgb2JqID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgXCJwbGF5ZWRcIiwge1xuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGdldEFwcCgpLmdsb2JhbERhdGEuX3BsYXllZCA9IHZhbHVlO1xuXHRcdFx0Y2IodmFsdWUpO1xuXHRcdH0sXG5cdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIOWPr+S7peWcqOi/memHjOaJk+WNsOS4gOS6m+S4nOilv++8jOeEtuWQjuWcqOWFtuS7lueVjOmdouiwg+eUqGdldEFwcCgpLmdsb2JhbERhdGEucGxheWVk55qE5pe25YCZ77yM6L+Z6YeM5bCx5Lya5omn6KGM44CCXG5cdFx0XHRyZXR1cm4gZ2V0QXBwKCkuZ2xvYmFsRGF0YS5fcGxheWVkO1xuXHRcdH1cblx0fSlcbn1cblxuXG5mdW5jdGlvbiBiYWNrZ3JvdW5kZXIoKSB7XG5cdGxldCBvcyA9IHBsdXMub3MubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09ICdhbmRyb2lkJyA/ICdhbmRyb2lkJyA6ICdpb3MnO1xuXHRpZiAob3MgPT0gJ2FuZHJvaWQnKSB7XG5cdFx0bGV0IG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xuXHRcdG1haW4ubW92ZVRhc2tUb0JhY2soZmFsc2UpO1xuXHR9XG59XG5cblxuXG5mdW5jdGlvbiB0byh1cmwsIG1vZGUpIHtcblx0bW9kZSA9IG1vZGUgfHwgJ25hdmlnYXRlX3RvJztcblxuXG5cdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHR1cmw6IHVybFxuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiB0b2FzdChpY29uLCB0ZXh0LCBkdXJhdGlvbiwgbWFzaywgcG9zaXRpb24pIHtcblx0ZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxNTAwO1xuXHRtYXNrID0gbWFzayB8fCBmYWxzZTtcblx0cG9zaXRpb24gPSBwb3NpdGlvbiB8fCBmYWxzZTtcblx0dW5pLnNob3dUb2FzdCh7XG5cdFx0aWNvbjogaWNvbixcblx0XHR0aXRsZTogdGV4dCxcblx0XHRkdXJhdGlvbjogZHVyYXRpb24sXG5cdFx0bWFzazogbWFzayxcblx0XHRwb3NpdGlvbjogcG9zaXRpb24sXG5cdH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0byxcblx0dG9hc3QsXG5cdGJhY2tncm91bmRlcixcblx0cGxheWVkX3dhdGNoLFxuXHRcbn1cbiIsIi8vIOWFqOWxgOmfs+mikeaSreaUvueuoeeQhlxubGV0IFBsYXllckhlbHBlciA9IHt9O1xuXG4vL+iOt+WPluWUr+S4gHBsYXllciwg5L+d5oyBcGxheWVy57uf5LiAXG5mdW5jdGlvbiBnZXRfcGxheWVyKCkge1xuXHRyZXR1cm4gZ2V0QXBwKCkuZ2xvYmFsRGF0YS5wbGF5ZXI7XG59XG5cblBsYXllckhlbHBlci5zZXRfdXJsID0gZnVuY3Rpb24odXJsKSB7XG5cdFxuXHR1cmwgPSB1cmwgfHwgU3RvcmFnZS5nZXRfcGxheWVkKCkudXJsO1xuXHQvLyBjb25zb2xlLmxvZygnc2V0X3VybDonICsgdXJsKTtcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcblx0cGxheWVyLnNldFN0eWxlcyh7XG5cdFx0c3JjOiB1cmxcblx0fSk7XG5cdFxuXHRyZXR1cm47XG59XG5cbi8vcGxheeWJjeeahOWHhuWkh1xuLy8gUGxheWVySGVscGVyLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4vLyBcdHRoaXMuc2V0X3VybCgpO1xuLy8gXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xuLy8gXHRwbGF5ZXIucmVzdW1lKCk7XG4vLyBcdHJldHVybjtcbi8vIH1cblxuLy/nu5/kuIBwbGF55YWl5Y+jLCDnnJ/mraPnmoTmkq3mlL7lhaXlj6NcblBsYXllckhlbHBlci5wbGF5ID0gZnVuY3Rpb24oKSB7XG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XG5cdHBsYXllci5wbGF5KCgpPT57XG5cdFx0Y29uc29sZS5sb2coJ+W9k+WJjemfs+S5kOaSreaUvuWujOavlScpO1xuXHR9LChlKT0+IHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fSk7O1xuXHRyZXR1cm47XG59XG5cbi8qKlxuICog5pqC5YGcXG4gKiDpnIDopoFzdGFydOWQjiwg6Kem5Y+Rb25QbGF55LqL5Lu25ZCOLCBwYXVzZeaJjeacieaViFxuICovXG5QbGF5ZXJIZWxwZXIucGF1c2UgPSBmdW5jdGlvbigpIHtcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcblx0cGxheWVyLnBhdXNlKCk7XG5cdHJldHVybjtcbn1cblxuUGxheWVySGVscGVyLmdldF9wb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xuXHRyZXR1cm4gcGxheWVyLmdldFBvc2l0aW9uKCk7XG59XG5cblBsYXllckhlbHBlci5nZXRfZHVyYXRpb24gPSBmdW5jdGlvbigpIHtcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcblx0XG5cdHJldHVybiBwbGF5ZXIuZ2V0RHVyYXRpb24oKTtcbn1cblxuUGxheWVySGVscGVyLnNlZWtfdG8gPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRyZXR1cm4gZ2V0X3BsYXllcigpLnNlZWtUbyhwb3NpdGlvbik7XG59XG5cblxuXG5cblBsYXllckhlbHBlci5wcmV2ID0gZnVuY3Rpb24oY2IpIHtcblx0bGV0IHBsYXllZCA9IFN0b3JhZ2UuZ2V0X3BsYXllZCgpO1xuXHRsZXQgcGxheWxpc3QgPSBTdG9yYWdlLmdldF9jdXJyZW50X3BsYXlsaXN0KCk7XG5cdGxldCBjdXJyZW50X3NvbmdfaWQgPSBwbGF5ZWQuaWQ7XG5cdGxldCBwcmV2X2luZGV4ID0gcGxheWxpc3QubGVuZ3RoIC0gMTtcblx0XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoY3VycmVudF9zb25nX2lkID09IHBsYXlsaXN0W2ldLmlkKSB7XG5cdFx0XHRpZiAoaSA+IDApIHtcblx0XHRcdFx0cHJldl9pbmRleCA9IGkgLSAxO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdFxuXHRsZXQgcHJldl9zb25nX2lkID0gcGxheWxpc3RbcHJldl9pbmRleF0uaWQ7XG5cdHRoaXMuc3RhcnQocHJldl9zb25nX2lkLCAocGxheWVkKT0+IHtcblx0XHRjYiAmJiBjYihwbGF5ZWQpXG5cdH0pO1xufVxuXG5cblBsYXllckhlbHBlci5uZXh0ID0gZnVuY3Rpb24oY2IpIHtcblx0bGV0IHBsYXllZCA9IFN0b3JhZ2UuZ2V0X3BsYXllZCgpO1xuXHRsZXQgY3VycmVudF9zb25nX2lkID0gcGxheWVkLmlkO1xuXHRsZXQgcGxheWxpc3QgPSBTdG9yYWdlLmdldF9jdXJyZW50X3BsYXlsaXN0KCk7XG5cdFxuXHRsZXQgbmV4dF9pbmRleCA9IDA7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoY3VycmVudF9zb25nX2lkID09IHBsYXlsaXN0W2ldLmlkKSB7XG5cdFx0XHRpZiAoaSArIDEgPCBwbGF5bGlzdC5sZW5ndGgpIHtcblx0XHRcdFx0bmV4dF9pbmRleCA9IGkgKyAxO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdGNvbnNvbGUubG9nKG5leHRfaW5kZXgpO1xuXHRsZXQgbmV4dF9zb25nX2lkID0gcGxheWxpc3RbbmV4dF9pbmRleF0uaWQ7XG5cdHRoaXMuc3RhcnQobmV4dF9zb25nX2lkLCAocGxheWVkKT0+IHtcblx0XHRjYiAmJiBjYihwbGF5ZWQpXG5cdH0pO1xufVxuXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHNvbmdfaWRcbiAqIOS8oOWFpeatjOabsmlk5pKt5pS+XG4gKi9cblBsYXllckhlbHBlci5zdGFydCA9IGZ1bmN0aW9uKHNvbmdfaWQsIGNiKSB7XG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XG5cdGxldCBwbGF5ZWQgPSBTdG9yYWdlLmdldF9wbGF5ZWQoKTtcblx0XG5cdFNvbmcuZ2V0X3NvbmdfZGV0YWlsKHNvbmdfaWQsIChkYXRhKT0+IHtcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRsZXQgc29uZyA9IGRhdGEuc29uZ3NbMF07XG5cdFx0bGV0IHNvbmdfbmFtZSA9IHNvbmcubmFtZTtcblx0XHRsZXQgY292ZXJfaW1hZ2UgPSBzb25nLmFsLnBpY1VybDtcblx0XHRsZXQgY3VycmVudF9wbGF5ZWQgPSBwbGF5ZWQ7XG5cdFx0bGV0IHBsYXllZF9tdXNpY19pZCA9IGN1cnJlbnRfcGxheWVkLmlkO1xuXHRcdFxuXHRcdGlmIChzb25nX2lkID09IHBsYXllZF9tdXNpY19pZCkge1xuXHRcdFx0Ly8g6Lez6L2s5pKt5pS+6K+m5oOF6aG15bm25pKt5pS+XG5cdFx0XHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xuXHRcdFx0aWYgKHBsYXllci5pc1BhdXNlZCgpKSB7XG5cdFx0XHRcdHBsYXllci5wbGF5KCgpPT57fSwoZSk9PiB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pOztcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMudHVybigpO1xuXHRcdFx0SGVscGVyLnRvKCcuLi9wbGF5L3BsYXknKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0U29uZy5nZXRfc29uZ191cmwoc29uZ19pZCwgKHJlcyk9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0bGV0IHVybCA9IHJlcy5kYXRhWzBdLnVybDtcblx0XHRcdFxuXHRcdFx0aWYgKCF1cmwpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRIZWxwZXIudG9hc3QoJ25vbmUnLCAn5Lqy54ix55qELCDmmoLml6Dor6XmrYzmm7LotYTmupB+JywgMzAwMCwgZmFsc2UsICdib3R0b20nKTtcblx0XHRcdFx0fSwgMTApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRsZXQgY3JlYXRvcnMgPSBzb25nLmFyO1xuXHRcdFx0bGV0IGNyZWF0b3Jfc3RyID0gJyc7XG5cdFx0XHRcblx0XHRcdGZvciAobGV0IGNyZWF0b3Igb2YgY3JlYXRvcnMpIHtcblx0XHRcdFx0Y3JlYXRvcl9zdHIgPSBjcmVhdG9yX3N0ciArIGNyZWF0b3IubmFtZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0bGV0IHBsYXllZCA9IHtcblx0XHRcdFx0aWQ6IHNvbmdfaWQsXG5cdFx0XHRcdHVybDogdXJsLFxuXHRcdFx0XHRuYW1lOiBzb25nX25hbWUsXG5cdFx0XHRcdGNyZWF0b3I6IGNyZWF0b3Jfc3RyLFxuXHRcdFx0XHRjb3Zlcl9pbWFnZTogY292ZXJfaW1hZ2UsXG5cdFx0XHRcdC8vIHRpbWU6IDAsIC8v5LiK5qyh5pKt5pS+55qE5L2N572uXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMuc2V0X3VybCh1cmwpO1xuXHRcdFx0XG5cdFx0XHRjYiAmJiBjYihwbGF5ZWQpO1xuXHRcdFx0XG5cdFx0fSk7XG5cdFx0XG5cdH0pO1xufVxuXG5cblBsYXllckhlbHBlci50dXJuID0gZnVuY3Rpb24oKSB7XG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XG5cdGlmIChwbGF5ZXIuaXNQYXVzZWQoKSkge1xuXHRcdHBsYXllci5wbGF5KCgpPT57fSwoZSk9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHR9KTs7XG5cdH1lbHNlIHtcblx0XHRwbGF5ZXIucGF1c2UoKTtcblx0fVxuXHRyZXR1cm47XG59XG5cbmltcG9ydCBTdG9yYWdlIGZyb20gJy4uL3V0aWxzL3N0b3JhZ2UuanMnXG5pbXBvcnQgU29uZyBmcm9tICcuLi9tb2RlbC9zb25nLmpzJztcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcydcblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJIZWxwZXIiLCIvLyDnvJPlrZjnu5/kuIDnrqHnkIZcblxubGV0IFN0b3JhZ2UgPSB7fVxuXG5jb25zdCBMQVRFU1RfUExBWUVEID0gJ2xhdGVzdF9wbGF5ZWQnOyAvL+acgOWQjuS4gOS4quaSreaUvuiusOW9lVxuY29uc3QgQ1VSUkVOVF9QTEFZTElTVCA9ICdjdXJyZW50X3BsYXlsaXN0JzsgLy8g5b2T5YmN5pKt5pS+5YiX6KGoXG5jb25zdCBJU19MT0dJTiA9ICdpc19sb2dpbic7IC8vIOeZu+W9leeKtuaAgVxuY29uc3QgUExBWV9NT0RFID0gJ3BsYXlfbW9kZSc7XG5cblN0b3JhZ2UuaXNfbG9naW4gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGdldChJU19MT0dJTik7XG59XG5cblN0b3JhZ2Uuc2V0X2lzX2xvZ2luID0gZnVuY3Rpb24odikge1xuXHRzZXQoSVNfTE9HSU4sIHYpO1xuXHRyZXR1cm47XG59XG5cblN0b3JhZ2UuZ2V0X3BsYXllZCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZ2V0KExBVEVTVF9QTEFZRUQpO1xufVxuXG5TdG9yYWdlLnNldF9wbGF5ZWQgPSBmdW5jdGlvbih2KSB7XG5cdHNldChMQVRFU1RfUExBWUVELCB2KTtcblx0cmV0dXJuO1xufVxuU3RvcmFnZS5nZXRfY3VycmVudF9wbGF5bGlzdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZ2V0KENVUlJFTlRfUExBWUxJU1QpO1xufVxuXG5TdG9yYWdlLnNldF9jdXJyZW50X3BsYXlsaXN0ID0gZnVuY3Rpb24odikge1xuXHRzZXQoQ1VSUkVOVF9QTEFZTElTVCwgdik7XG5cdHJldHVybjtcbn1cblxuU3RvcmFnZS5nZXRfcGxheV9tb2RlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBnZXQoUExBWV9NT0RFKTtcbn1cblxuU3RvcmFnZS5zZXRfcGxheV9tb2RlID0gZnVuY3Rpb24odikge1xuXHRzZXQoUExBWV9NT0RFLCB2KTtcblx0cmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzZXQoaywgdikge1xuXHR0cnkge1xuXHQgICAgdW5pLnNldFN0b3JhZ2VTeW5jKGssIHYpO1xuXHR9IGNhdGNoIChlKSB7XG5cdCAgICAvLyBlcnJvclxuXHR9XG5cdHJldHVybjtcbn1cblxuZnVuY3Rpb24gZ2V0KGspIHtcblx0dHJ5IHtcblx0ICAgIHJldHVybiB1bmkuZ2V0U3RvcmFnZVN5bmMoayk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0ICAgIGNvbnNvbGUubG9nKGUpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RvcmFnZTsiLCJsZXQgU29uZyA9IHt9O1xuXG5Tb25nLmdldF9zb25nX3VybCA9IGZ1bmN0aW9uKGlkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TT05HO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdGlkOiBpZCxcblx0XHRicjogMzIwMDAwXG5cdH1cblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cblNvbmcuZ2V0X2x5cmljID0gZnVuY3Rpb24oaWQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkxZUklDO1xuXHRcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRpZDogaWQsXG5cdH1cblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cblNvbmcuZ2V0X3NvbmdfZGV0YWlsID0gZnVuY3Rpb24oaWQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNPTkdfREVUQUlMO1xuXHRcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRpZHM6IGlkLFxuXHR9XG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0XG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdFxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gU29uZzsiLCJmdW5jdGlvbiBnZXQodXJsLCBwYXJhbXMsIHN1Y2Nlc3NfY2IsIGZhaWxlZF9jYikge1xuXHRcblx0aGVscGVyLnRvYXN0KCdsb2FkaW5nJywgJ+WKoOi9veS4rS4uLicsIDEwMDAwKVxuXHRcblx0bGV0IHVyaSA9IGNvbmZpZy5IT1NUICsgdXJsO1xuXG5cdHVuaS5yZXF1ZXN0KHtcblx0XHR1cmw6IHVyaSwgXG5cdFx0ZGF0YTogcGFyYW1zLFxuXHRcdG1ldGhvZDpcIkdFVFwiLFxuXHRcdHN1Y2Nlc3M6IChyZXMpPT57XG5cdFx0XHRcblx0XHRcdHN1Y2Nlc3NfY2IgJiYgc3VjY2Vzc19jYihyZXMpO1xuXHRcdH0sXG5cdFx0ZmFpbDoocmVzKSA9PiB7XG5cdFx0XHRmYWlsZWRfY2IgJiYgZmFpbGVkX2NiKHJlcyk7XG5cdFx0ICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0X2ZhaWw6dXJsOicgKyB1cmwgKyAnIDsgJyArICdlcnJNc2c6JyArIHJlcy5lcnJNc2cpO1xuXHRcdH0sXG5cdFx0Y29tcGxldGU6ICgpPT4ge1xuXHRcdFx0dW5pLmhpZGVUb2FzdCgpO1xuXHRcdH1cblx0fSk7XG59IFxuXG5mdW5jdGlvbiBwb3N0KHVybCwgcGFyYW1zLCBzdWNjZXNzX2NiLCBmYWlsZWRfY2IpIHtcblx0XG5cdGhlbHBlci50b2FzdCgnbG9hZGluZycsICfliqDovb3kuK0uLi4nLCAxMDAwMClcblx0XG5cdHVuaS5yZXF1ZXN0KHtcblx0XHR1cmw6IGNvbmZpZy5IT1NUICsgdXJsLCBcblx0XHRkYXRhOiBwYXJhbXMsXG5cdFx0bWV0aG9kOlwiUE9TVFwiLCAgIFxuXHRcdHN1Y2Nlc3M6IChyZXMpPT57XG5cdFx0XHRzdWNjZXNzX2NiICYmIHN1Y2Nlc3NfY2IocmVzKTtcblx0XHR9LFxuXHRcdGZhaWw6KHJlcykgPT4ge1xuXHRcdCAgICBjb25zb2xlLmxvZygncmVxdWVzdF9mYWlsOnVybDonICsgdXJsICsgJyA7ICcgKyAnZXJyTXNnOicgKyByZXMuZXJyTXNnKTtcblx0XHRcdGZhaWxlZF9jYiAmJiBmYWlsZWRfY2IocmVzKTtcblx0XHR9LFxuXHRcdGNvbXBsZXRlOiAoKT0+IHtcblx0XHRcdHVuaS5oaWRlVG9hc3QoKTtcblx0XHR9XG5cdH0pICAgXG59XG5cbmZ1bmN0aW9uIHRlc3QoKSB7XG5cdC8vMTExLjEzLjEwMC45MlxuXHR1bmkucmVxdWVzdCh7XG5cdCAgICB1cmw6ICdodHRwczovL3d3dy5iYWlkdS5jb20vJywgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7mjqXlj6PlnLDlnYDjgIJcblx0ICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0ICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdCAgICB9XG5cdH0pO1xufVxuXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdHtcblx0Z2V0LFxuXHRwb3N0LFxuXHR0ZXN0XG59IiwibGV0IFVzZXIgPSB7fTtcblxuVXNlci5jaGVja19waG9uZSA9IGZ1bmN0aW9uKHBob25lLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5DSEVDS19QSE9ORTtcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRwaG9uZTogcGhvbmVcblx0fVxuXHRcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdFxuXHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKHJlcy5kYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbi8v55m76ZmGXG5Vc2VyLmxvZ2luID0gZnVuY3Rpb24ocGhvbmUsIHBhc3N3b3JkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5DRUxMUEhPTkVfTE9HSU47XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0cGhvbmU6IHBob25lLFxuXHRcdHBhc3N3b3JkOiBwYXNzd29yZFxuXHR9XG5cdFxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0aWYgKHJlcy5kYXRhKSB7XG5cdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0XHRnZXRfc3RhdHVzKChzdGF0dXMpPT4ge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNiICYmIGNiKHN0YXR1cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH1lbHNlIHtcblx0XHRcdFx0aGVscGVyLnRvYXN0KCdub25lJywgZGF0YS5tc2csIDMwMDAsIGZhbHNlLCAnYm90dG9tJyk7XG5cdFx0XHR9XG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHR9XG5cdH0pXG59XG5Vc2VyLnJlZyA9IGZ1bmN0aW9uKHBob25lLCBwYXNzd29yZCwgY2FwdGNoYSwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUEhPTkVfUkVHO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdHBob25lOiBwaG9uZSxcblx0XHRwYXNzd29yZDogcGFzc3dvcmQsXG5cdFx0Y2FwdGNoYTogY2FwdGNoYVxuXHR9XG5cdFxuXHRyZXF1ZXN0LnBvc3QodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0Y2IgJiYgY2IocmVzLmRhdGEpXG5cdH0pXG59XG5cblVzZXIubG9nb3V0ID0gZnVuY3Rpb24oY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuTE9HT1VUO1xuXG5cdFxuXHRyZXF1ZXN0LmdldCh1cmwsIHt9LCAocmVzKT0+IHtcblx0XHRcblx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihyZXMuZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5Vc2VyLnNlbmRfY2FwdGNoYSA9IGZ1bmN0aW9uKHBob25lLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TRU5EX0NBUFRDSEE7XG5cdFxuXHRcblx0cmVxdWVzdC5wb3N0KHVybCwge3Bob25lOiBwaG9uZX0sIChyZXMpPT4ge1xuXHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0Y2IgJiYgY2IocmVzLmRhdGEpXG5cdH0pXG59XG5Vc2VyLnZlcmlmeV9jYXB0Y2hhID0gZnVuY3Rpb24ocGhvbmUsIGNhcHRjaGEsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlZFUklGWV9DQVBUQ0hBO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdHBob25lOiBwaG9uZSxcblx0XHRjYXB0Y2hhOiBjYXB0Y2hhXG5cdH1cblx0XG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdGNiICYmIGNiKHJlcy5kYXRhKVxuXHR9KVxufVxuXG4vL+eZu+W9leajgOafpVxuVXNlci5jaGVja19sb2dpbiA9IGZ1bmN0aW9uKGNiKSB7XG5cdFxuXHRnZXRfc3RhdHVzKChyZXMpPT4ge1xuXHRcdGNiICYmIGNiKHJlcyk7XG5cdH0pXG59XG5cbi8v6I635Y+W55So5oi3bXYs5q2M5Y2VLCBkaiwg5pS26JeP5pWw6YePXG5Vc2VyLmdldF9zdWJjb3VudCA9IGZ1bmN0aW9uKGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNVQkNPVU5UO1xuXHRcblx0cmVxdWVzdC5wb3N0KHVybCwge30sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XG5cdFx0Y2IgJiYgY2IoZGF0YSk7XG5cdH0pXG59XG5cbi8v6I635Y+W55So5oi36LWE5paZXG5Vc2VyLmdldF91c2VyX2RldGFpbCA9IGZ1bmN0aW9uKHVpZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVVNFUl9ERVRBSUw7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0dWlkOiB1aWRcblx0fVxuXHRyZXF1ZXN0LnBvc3QodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdFxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdFxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG4vL+iOt+WPlueUqOaIt+atjOWNleWIl+ihqFxuVXNlci5nZXRfcGxheWxpc3QgPSBmdW5jdGlvbih1aWQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlVTRVJfUExBWUxJU1Q7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0dWlkOiB1aWRcblx0fVxuXHRyZXF1ZXN0LnBvc3QodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuVXNlci5nZXRfbGlrZWxpc3QgPSBmdW5jdGlvbih1aWQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlVTRVJfTElLRV9MSVNUO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdHVpZDogdWlkXG5cdH1cblx0cmVxdWVzdC5wb3N0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cblVzZXIubGlrZSA9IGZ1bmN0aW9uKG11c2ljX2lkLCBsaWtlLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MSUtFO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdGlkOiBtdXNpY19pZCxcblx0XHRsaWtlOiBsaWtlXG5cdH1cblx0cmVxdWVzdC5wb3N0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbi8v6I635Y+W55So5oi354q25oCBXG5mdW5jdGlvbiBnZXRfc3RhdHVzKGNiKSB7XG5cdGxldCB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MT0dJTl9TVEFUVVM7XG5cdFxuXHRyZXF1ZXN0LmdldCh1cmwsIHt0aW1lc3RhbXA6IHRzfSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcblx0XHRcblx0XHRpZiAoZGF0YSAmJiBkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCfojrflj5bnirbmgIHlpLHotKUnKTtcblx0XHRcdGNiICYmIGNiKGZhbHNlKTtcblx0XHR9XG5cdH0pXG59XG5cblxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXIuanMnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gVXNlcjsiLCJsZXQgUGxheWxpc3QgPSB7fTtcblxuUGxheWxpc3QuZ2V0X3BsYXlsaXN0X2RldGFpbCA9IGZ1bmN0aW9uKGlkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5QTEFZTElTVF9ERVRBSUw7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0aWQ6IGlkXG5cdH1cblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5bGlzdDsiLCJsZXQgU2VhcmNoID0ge307XG5cblNlYXJjaC5nZXRfaG90X2xpc3QgPSBmdW5jdGlvbihjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5IT1RfU0VBUkNIO1xuXG5cdHJlcXVlc3QuZ2V0KHVybCwge30sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG4vKipcbiAqIOWNlemhueaQnOe0olxuICog5q2k5o6l5Y+jcG9zdOaWueW8j+aciemXrumimCwg5YiG6aG15Y+C5pWw5peg5pWIXG4gKiBcbiAqIOW/hemAieWPguaVsDogXG4gKiBrZXl3b3Jkczog5YWz6ZSu6K+NXG4gKiBcbiAqIOWPr+mAieWPguaVsDogXG4gKiBsaW1pdCA6IOi/lOWbnuaVsOmHjyAsIOm7mOiupOS4uiAzMCBcbiAqIG9mZnNldCA6IOWBj+enu+aVsOmHj++8jOeUqOS6juWIhumhtSAsIOWmgiA6IOWmgiA6KCDpobXmlbAgLTEpKjMwLCDlhbbkuK0gMzAg5Li6IGxpbWl0IOeahOWAvCAsIOm7mOiupOS4uiAwXG4gKiB0eXBlOiDmkJzntKLnsbvlnovvvJvpu5jorqTkuLogMSDljbPljZXmm7IgLCDlj5blgLzmhI/kuYkgOiAxOiDljZXmm7IsIDEwOiDkuJPovpEsIDEwMDog5q2M5omLLCAxMDAwOiDmrYzljZUsIDEwMDI6IOeUqOaItywgMTAwNDogTVYsIDEwMDY6IOatjOivjSwgMTAwOTog55S15Y+wLCAxMDE0OiDop4bpopEsIDEwMTg657u85ZCIXG4gKi9cblNlYXJjaC5zZWFyY2ggPSBmdW5jdGlvbihrZXl3b3JkLCB0eXBlLCBwYWdlLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TRUFSQ0g7XG5cdGxldCBsaW1pdCA9IDEwO1xuXHRsZXQgb2Zmc2V0ID0gcGFnZSAqIGxpbWl0O1xuXHR0eXBlID0gdHlwZSB8fCAxO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdGtleXdvcmRzOiBrZXl3b3JkLFxuXHRcdGxpbWl0OiBsaW1pdCxcblx0XHRvZmZzZXQ6IG9mZnNldCxcblx0XHR0eXBlOiB0eXBlXG5cdH1cblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoOyIsImxldCBPdGhlciA9IHt9O1xuXG5PdGhlci5iYW5uZXIgPSBmdW5jdGlvbihjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5CQU5ORVI7XG5cblx0cmVxdWVzdC5nZXQodXJsLCB7dHlwZTogMX0sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG4vLyDpnIDnmbvpmYblkI7osIPnlKhcbk90aGVyLnJlY29tbWVuZF9yZXNvdXJjZSA9IGZ1bmN0aW9uKGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlJFQ09NTUVORF9SRVNPVVJDRTtcblx0XG5cdHJlcXVlc3QuZ2V0KHVybCwge30sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gT3RoZXI7IiwibGV0IEFsYnVtID0ge307XG5cbkFsYnVtLmRldGFpbCA9IGZ1bmN0aW9uKGlkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5BTEJVTV9ERVRBSUw7XG5cblx0cmVxdWVzdC5nZXQodXJsLCB7aWQ6IGlkfSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBBbGJ1bTsiLCJsZXQgUGVyc29uYWxpemVkID0ge307XG5cblBlcnNvbmFsaXplZC5wbGF5bGlzdCA9IGZ1bmN0aW9uKGNiLCBsaW1pdCkge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5QRVJTT05BTElaRURfUExBWUxJU1Q7XG5cdGxpbWl0ID0gbGltaXQgfHwgMTA7XG5cdHJlcXVlc3QuZ2V0KHVybCwge2xpbWl0OiBsaW1pdH0sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5QZXJzb25hbGl6ZWQubmV3c29uZyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlBFUlNPTkFMSVpFRF9ORVdTT05HO1xuXHRyZXF1ZXN0LmdldCh1cmwsIHt9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcnNvbmFsaXplZDsiLCJsZXQgVG9wID0ge307XG5cblRvcC5hbGJ1bSA9IGZ1bmN0aW9uKGNiLCBsaW1pdCwgb2Zmc2V0KSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlRPUF9BTEJVTTtcblx0bGltaXQgPSBsaW1pdCB8fCAxMDtcblx0b2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cdHJlcXVlc3QuZ2V0KHVybCwge2xpbWl0OiBsaW1pdCwgb2Zmc2V0OiBvZmZzZXR9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcDsiLCJsZXQgVmlkZW8gPSB7fTtcblxuVmlkZW8ubGlzdCA9IGZ1bmN0aW9uKGlkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5WSURFT19MSVNUO1xuXG5cdHJlcXVlc3QuZ2V0KHVybCwge2lkOiBpZH0sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlkZW87IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwY2Y5YmFjJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI2YTkyMjg1ZlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwY2Y5YmFjJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2aWV3XCIsIFtcbiAgICBfYyhcbiAgICAgIFwidS10ZXh0XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uZm9udFwiXSxcbiAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6IF92bS5zaXplICsgXCJycHhcIiwgY29sb3I6IF92bS5jb2xvciB9LFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQ2xpY2sgfVxuICAgICAgfSxcbiAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSldXG4gICAgKVxuICBdKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXc+XG5cdFx0PHRleHQgQGNsaWNrPVwib25DbGlja1wiIGNsYXNzPVwiaWNvbmZvbnRcIiA6c3R5bGU9XCJ7Zm9udFNpemU6IHNpemUgKyAncnB4Jyxjb2xvcjpjb2xvcn1cIj57e25hbWV9fTwvdGV4dD5cblx0PC92aWV3PlxuXHRcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdC8v5LygJiN455qEaWNvbiwg6L2s5oiQXFx1IGljb25cblx0Ly90ZW1wbGF0ZSDnm7TmjqXkvb/nlKgmI3jnmoRpY29uIOWPr+S7peato+ehruWxleekuiwg5L2G5piv5aaC5p6c5L2/55So5Y+Y6YeP5LygJiN455qEaWNvbiDliJnlsZXnpLrlpLHotKVcblx0Ly90ZW1wbGF0ZSDkuK3nm7TmjqXkvb/nlKhcXHUgaWNvbiDmiJbogIXkvb/nlKhcXHUgaWNvbuWPmOmHjyDlsZXnpLrmlYjmnpzpg73mraPluLhcblx0Ly/lpoLmnpzkvb/nlKhwcm9wcyDkvKDov4fmnaXnmoRcXHUgaWNvbiDlnKh0ZW1wbGF0ZeS9v+eUqCDmmL7npLrlpLHotKUsIOS8oOi/h+adpeeahCBcXHUgaWNvbuS4gOiiq+e8lueggeaIkOWtl+espuS4suWGheWtmOS4reeahOWAvOWFtuWunuaYr1wiXFxcXHVlNzE1XCJcblx0ZXhwb3J0IGRlZmF1bHR7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHR5cGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0Y29sb3I6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiBcIiNGRkZGRkZcIlxuXHRcdFx0fSxcblx0XHRcdHNpemU6IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiA0MFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdG5hbWUoKXtcblx0XHRcdFx0bGV0IHRtcCA9IHRoaXMudHlwZTtcblx0XHRcdFx0dG1wID0gJ1xcXFwnICsgJ3UnICsgIHRtcC5yZXBsYWNlKCcmI3gnLCAnJyk7XG5cdFx0XHRcdHRtcCA9IHRtcC5zdWJzdHJpbmcoMCwgdG1wLmxlbmd0aC0xKTtcblx0XHRcdFx0cmV0dXJuICBldmFsKFwiJ1wiICsgdG1wICsgXCInXCIpOyAgICAgICAgICAgICAgIC8vIOWwhuWGheWtmOS4rVwiXFxcXHVlNzE1XCIg6L2s5oiQXCJcXHVlNzE1XCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH0sIFxuXHRcdGNyZWF0ZWQoKXtcblx0XHRcdFxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdCAgICBvbkNsaWNrKCkge1xuXHRcdCAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKVxuXHRcdCAgICB9IFxuXHRcdH0gIFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQuaWNvbmZvbnQgeyAgXG5cdCAgICBmb250LWZhbWlseTogd2VleFVpSWNvbkZvbnQ7ICBcblx0fSAgXG5cdC5pY29ubGlrZSB7ICBcblx0ICAgIHdpZHRoOiAzNnB4OyAgXG5cdCAgICBoZWlnaHQ6IDM2cHg7ICBcblx0ICAgIGZvbnQtc2l6ZTogMzRweDsgIFxuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImljb25mb250XCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJ3ZWV4VWlJY29uRm9udFwiXG4gIH0sXG4gIFwiaWNvbmxpa2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIzNlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzRcIlxuICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04N2M0Y2I0YSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjdiZGY4ODFkXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkRlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3BsYXlsaXN0X2RyYXdlci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04N2M0Y2I0YSZcIiIsInZhciBjb21wb25lbnRzID0ge1xuICBcInd5eS1pY29uXCI6IHJlcXVpcmUoXCJAL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZVwiKS5kZWZhdWx0XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidW5pLXBvcC11cFwiLFxuICAgIHsgcmVmOiBcInNob3dwb3B1cFwiLCBhdHRyczogeyB0eXBlOiBcImJvdHRvbVwiIH0sIG9uOiB7IGNoYW5nZTogX3ZtLmNoYW5nZSB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImNvbnRlbnRcIl0gfSwgW1xuICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyXCJdIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wicGxheS10eXBlXCJdIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwid3l5LWljb25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiJiN4ZTY3NjtcIiwgc2l6ZTogXCIzMFwiLCBjb2xvcjogXCIjMDAwMDAwXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjI2cnB4XCIsIG1hcmdpbkxlZnQ6IFwiMjBycHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIumaj+acuuaSreaUvlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJoZWFkZXItcmlnaHRcIl0gfSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGlzdFwiLFxuICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgZmxleDogXCIxXCIgfSwgYXR0cnM6IHsgc2hvd1Njcm9sbGJhcjogXCJmYWxzZVwiIH0gfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnBsYXlsaXN0LCBmdW5jdGlvbihzb25nLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgcmVmOiBcInNvbmdcIiArIHNvbmcuaWQsXG4gICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNvbmctY2VsbFwiXSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgYXBwZW5kOiBcInRyZWVcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5wbGF5KHNvbmcuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBzb25nLmlkID09IF92bS5wbGF5ZWQuaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwid3l5LWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW5SaWdodDogXCIyMHJweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCImI3hlNjdmO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiMzBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRkYwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBzb25nLmlkID09IF92bS5wbGF5ZWQuaWQgPyBcImFjdGl2ZS1zb25nXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMjZycHhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzb25nLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYXItdGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBzb25nLmlkID09IF92bS5wbGF5ZWQuaWQgPyBcImFjdGl2ZS1zb25nXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhcIiAtIFwiICsgc29uZy5hcnRpc3RzWzBdLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwid3l5LWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCImI3hlNjM2O1wiLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjMwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwwLDAsLjUpXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8dW5pLXBvcC11cCByZWY9XCJzaG93cG9wdXBcIiB0eXBlPVwiYm90dG9tXCIgQGNoYW5nZT1cImNoYW5nZVwiPlxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJcIiBzdHlsZT1cIlwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInBsYXktdHlwZVwiPlxuXHRcdFx0XHRcdDx3eXktaWNvbiB0eXBlPVwiJiN4ZTY3NjtcIiBzaXplPVwiMzBcIiBjb2xvcj1cIiMwMDAwMDBcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMjZycHg7IG1hcmdpbi1sZWZ0OiAyMHJweDtcIj7pmo/mnLrmkq3mlL48L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItcmlnaHRcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PGxpc3Qgc3R5bGU9XCJmbGV4OiAxO1wiIHNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIj5cblx0XHRcdFx0PGNlbGwgY2xhc3M9XCJzb25nLWNlbGxcIiB2LWZvcj1cIihzb25nLCBpbmRleCkgaW4gcGxheWxpc3RcIiA6a2V5PVwiaW5kZXhcIiBAdGFwPVwicGxheShzb25nLmlkKVwiIDpyZWY9XCJgc29uZyR7c29uZy5pZH1gXCI+XG5cdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O2FsaWduLWl0ZW1zOiBjZW50ZXJcIiAgPlxuXHRcdFx0XHRcdFx0PHd5eS1pY29uIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAyMHJweDtcIiB2LWlmPVwic29uZy5pZCA9PSBwbGF5ZWQuaWRcIiB0eXBlPVwiJiN4ZTY3ZjtcIiBzaXplPVwiMzBcIiBjb2xvcj1cIiNGRjAwMDBcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAyNnJweDtcIiA6Y2xhc3M9XCJzb25nLmlkID09IHBsYXllZC5pZCA/ICdhY3RpdmUtc29uZycgOiAnJ1wiPnt7c29uZy5uYW1lfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImFyLXRleHRcIiA6Y2xhc3M9XCJzb25nLmlkID09IHBsYXllZC5pZCA/ICdhY3RpdmUtc29uZycgOiAnJ1wiID57eycgLSAnICsgc29uZy5hcnRpc3RzWzBdLm5hbWV9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PHd5eS1pY29uIHR5cGU9XCImI3hlNjM2O1wiIHNpemU9XCIzMFwiIGNvbG9yPVwicmdiYSgwLDAsMCwuNSlcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0PC9jZWxsPlxuXHRcdFx0PC9saXN0PlxuXHRcdDwvdmlldz5cblx0PC91bmktcG9wLXVwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHVuaVBvcFVwIGZyb20gJ0AvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZSc7XG5cdGltcG9ydCB3eXlJY29uIGZyb20gJ0AvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlJztcblx0XG5cdGltcG9ydCAkcmVwZWF0ZXIgZnJvbSAnQC91dGlscy9yZXBlYXRlci5qcyc7XG5cdGNvbnN0IGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJylcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdHVuaVBvcFVwLFxuXHRcdFx0d3l5SWNvblxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdHByb3BzOiB7XG5cdFx0XHRcblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRwbGF5bGlzdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmN1cnJlbnRfcGxheWxpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0cGxheWVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnBsYXllZDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRwcmV2X3NvbmcoKSB7XG5cdFx0XHRcdCRyZXBlYXRlci5wbGF5ZXIucHJldigocGxheWVkKT0+IHtcblx0XHRcdFx0XHRwbGF5ZWQgJiYgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRfcGxheWVkJywgcGxheWVkKTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRuZXh0X3NvbmcoKSB7XG5cdFx0XHRcdCRyZXBlYXRlci5wbGF5ZXIubmV4dCgocGxheWVkKT0+IHtcblx0XHRcdFx0XHRwbGF5ZWQgJiYgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRfcGxheWVkJywgcGxheWVkKTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRwbGF5KHNvbmdfaWQpIHtcblx0XHRcdFx0JHJlcGVhdGVyLnBsYXllci5zdGFydChzb25nX2lkLCAocGxheWVkKT0+IHtcblx0XHRcdFx0XHRwbGF5ZWQgJiYgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRfcGxheWVkJywgcGxheWVkKTtcblx0XHRcdFx0XHR0aGlzLmNsb3NlX3BsYXlsaXN0KCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Y2hhbmdlKGUpIHtcblx0XHRcdFx0Ly8g6L+Z6YeM5pqC5pe25Lya5oql5LiA5Liq6ZSZ6K+vLCDlm6DkuLrlvZPliY3mkq3mlL7nmoTmrYzmm7IsIOS4jeWcqOaSreaUvuWIl+ihqOS4rSwg6L+Z5Liq6Zeu6aKY5Zyo5bCG5q2M5puy5re75Yqg5Yiw5YiX6KGo5Lit5ZCO5Lya6Ieq5Yqo6Kej5YazLCDmmoLml7bkuI3lvbHlk43kvb/nlKhcblx0XHRcdFx0aWYgKGUuc2hvdykge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PiB7XG5cdFx0XHRcdFx0XHRsZXQgc29uZ19pZCA9IHRoaXMucGxheWVkLmlkO1xuXHRcdFx0XHRcdFx0Y29uc3QgZWwgPSB0aGlzLiRyZWZzW2Bzb25nJHtzb25nX2lkfWBdWzBdO1xuXHRcdFx0XHRcdFx0ZG9tLnNjcm9sbFRvRWxlbWVudChlbCwge1xuXHRcdFx0XHRcdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGVkOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9LCAzMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRjbG9zZV9wbGF5bGlzdCgpIHtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHJlZnMuc2hvd3BvcHVwLmNsb3NlKCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0b3Blbl9wbGF5bGlzdCgpIHtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHJlZnMuc2hvd3BvcHVwLm9wZW4oKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LmNvbnRlbnQge1xuXHRcdGhlaWdodDogODUwcnB4OyB3aWR0aDogNzUwcnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cnB4O1xuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXJweDtcblx0fVxuXHQuaGVhZGVyIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGhlaWdodDogODBycHg7XG5cdFx0XG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXJweDtcblx0fVxuXHQucGxheS10eXBlIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGhlaWdodDogOTBycHg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xuXHR9XG5cdC5wbGF5LXR5cGU6YWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG5cdH1cblx0LnNvbmctY2VsbCB7XG5cdFx0cGFkZGluZzogMCAyMHJweDsgXG5cdFx0aGVpZ2h0OiA4MHJweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC5zb25nLWNlbGw6YWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4xKTtcblx0fVxuXHQuYWN0aXZlLXNvbmcge1xuXHRcdGNvbG9yOiAjRkYwMDAwO1xuXHR9XG5cdC5hci10ZXh0e1xuXHRcdGZvbnQtc2l6ZTogMThycHg7IGNvbG9yOiByZ2JhKDAsMCwwLC41KTtcblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYjUyNTk5OCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWI1MjU5OTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYjUyNTk5OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZWI1MjU5OThcIixcbiAgXCI0NzA2NjcyNVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYjUyNTk5OCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzID0ge1xuICBcInVuaS10cmFuc2l0aW9uXCI6IHJlcXVpcmUoXCJAL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlXCIpXG4gICAgLmRlZmF1bHRcbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2VcIl0gfSwgW1xuICAgIF92bS5zaG93UG9wdXBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widW5pLXBvcHVwXCJdLCBvbjogeyB0b3VjaG1vdmU6IF92bS5jbGVhciB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1bmktdHJhbnNpdGlvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbW9kZUNsYXNzOiBbXCJmYWRlXCJdLFxuICAgICAgICAgICAgICAgIHN0eWxlczogX3ZtLm1hc2tDbGFzcyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogX3ZtLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHNob3c6IF92bS5zaG93VHJhbnNcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vblRhcCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVuaS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbW9kZUNsYXNzOiBfdm0uYW5pLFxuICAgICAgICAgICAgICAgICAgc3R5bGVzOiBfdm0udHJhbnNDbGFzcyxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfdm0uZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICBzaG93OiBfdm0uc2hvd1RyYW5zXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uVGFwIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktcG9wdXBfX3dyYXBwZXItYm94XCJdLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsZWFyIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yM2QzYTE5NCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjNkM2ExOTQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzZDNhMTk0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyM2QzYTE5NFwiLFxuICBcIjZhNjBjZGZmXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkRlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzZDNhMTk0JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2VcIl0gfSwgW1xuICAgIF92bS5pc1Nob3dcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiBcImFuaVwiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS10cmFuc2l0aW9uXCJdLFxuICAgICAgICAgICAgY2xhc3M6IFtfdm0uYW5pLmluXSxcbiAgICAgICAgICAgIHN0eWxlOiBcInRyYW5zZm9ybTpcIiArIF92bS50cmFuc2Zvcm0gKyBcIjtcIiArIF92bS5zdHlsZXNPYmplY3QsXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoYW5nZSB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInBhZ2VcIj5cblx0PHZpZXcgdi1pZj1cImlzU2hvd1wiIHJlZj1cImFuaVwiIGNsYXNzPVwidW5pLXRyYW5zaXRpb25cIiA6Y2xhc3M9XCJbYW5pLmluXVwiIDpzdHlsZT1cIid0cmFuc2Zvcm06JyArdHJhbnNmb3JtKyc7JytzdHlsZXNPYmplY3RcIiBAY2xpY2s9XCJjaGFuZ2VcIj5cblx0XHQ8c2xvdD48L3Nsb3Q+XG5cdDwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHQvLyAjaWZkZWYgQVBQLU5WVUVcblx0Y29uc3QgYW5pbWF0aW9uID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2FuaW1hdGlvbicpO1xuXHQvLyAjZW5kaWZcblx0LyoqXG5cdCAqIFRyYW5zaXRpb24g6L+H5rih5Yqo55S7XG5cdCAqIEBkZXNjcmlwdGlvbiDnroDljZXov4fmuKHliqjnlLvnu4Tku7Zcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTk4NVxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHNob3cgPSBbZmFsc2V8dHJ1ZV0g5o6n5Yi257uE5Lu25pi+56S65oiW6ZqQ6JePXG5cdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IG1vZGVDbGFzcyA9IFtmYWRlfHNsaWRlLXRvcHxzbGlkZS1yaWdodHxzbGlkZS1ib3R0b218c2xpZGUtbGVmdHx6b29tLWlufHpvb20tb3V0XSDov4fmuKHliqjnlLvnsbvlnotcblx0ICogIEB2YWx1ZSBmYWRlIOa4kOmakOa4kOWHuui/h+a4oVxuXHQgKiAgQHZhbHVlIHNsaWRlLXRvcCDnlLHkuIroh7PkuIvov4fmuKFcblx0ICogIEB2YWx1ZSBzbGlkZS1yaWdodCDnlLHlj7Poh7Plt6bov4fmuKFcblx0ICogIEB2YWx1ZSBzbGlkZS1ib3R0b20g55Sx5LiL6Iez5LiK6L+H5rihXG5cdCAqICBAdmFsdWUgc2xpZGUtbGVmdCDnlLHlt6boh7Plj7Pov4fmuKFcblx0ICogIEB2YWx1ZSB6b29tLWluIOeUseWwj+WIsOWkp+i/h+a4oVxuXHQgKiAgQHZhbHVlIHpvb20tb3V0IOeUseWkp+WIsOWwj+i/h+a4oVxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gZHVyYXRpb24g6L+H5rih5Yqo55S75oyB57ut5pe26Ze0XG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzdHlsZXMg57uE5Lu25qC35byP77yM5ZCMIGNzcyDmoLflvI/vvIzms6jmhI/luKbigJkt4oCY6L+e5o6l56ym55qE5bGe5oCn6ZyA6KaB5L2/55So5bCP6am85bOw5YaZ5rOV5aaC77yaYGJhY2tncm91bmRDb2xvcjpyZWRgXG5cdCAqL1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3VuaVRyYW5zaXRpb24nLFxuXHRcdHByb3BzOiB7XG5cdFx0XHRzaG93OiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0bW9kZUNsYXNzOiB7XG5cdFx0XHRcdHR5cGU6IEFycmF5LFxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gW11cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGR1cmF0aW9uOiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDogMzAwXG5cdFx0XHR9LFxuXHRcdFx0c3R5bGVzOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHt9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpc1Nob3c6IGZhbHNlLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICcnLFxuXHRcdFx0XHRhbmk6IHtcblx0XHRcdFx0XHRpbjogJycsXG5cdFx0XHRcdFx0YWN0aXZlOiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHNob3c6IHtcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwpIHtcblx0XHRcdFx0XHRpZiAobmV3VmFsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9wZW4oKVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHN0eWxlc09iamVjdCgpIHtcblx0XHRcdFx0bGV0IHN0eWxlcyA9IHtcblx0XHRcdFx0XHQuLi50aGlzLnN0eWxlcyxcblx0XHRcdFx0XHQndHJhbnNpdGlvbi1kdXJhdGlvbic6IHRoaXMuZHVyYXRpb24gLyAxMDAwICsgJ3MnXG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRyYW5zZnJvbSA9ICcnXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gc3R5bGVzKSB7XG5cdFx0XHRcdFx0bGV0IGxpbmUgPSB0aGlzLnRvTGluZShpKVxuXHRcdFx0XHRcdHRyYW5zZnJvbSArPSBsaW5lICsgJzonICsgc3R5bGVzW2ldICsgJzsnXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRyYW5zZnJvbVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdC8vIHRoaXMudGltZXIgPSBudWxsXG5cdFx0XHQvLyB0aGlzLm5leHRUaWNrID0gKHRpbWUgPSA1MCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0XHQvLyBcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuXHRcdFx0Ly8gXHR0aGlzLnRpbWVyID0gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKVxuXHRcdFx0Ly8gXHRyZXR1cm4gdGhpcy50aW1lclxuXHRcdFx0Ly8gfSk7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjaGFuZ2UoKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywge1xuXHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRvcGVuKCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcblx0XHRcdFx0dGhpcy5pc1Nob3cgPSB0cnVlXG5cdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gJydcblx0XHRcdFx0dGhpcy5hbmkuaW4gPSAnJ1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMuZ2V0VHJhbmZyb20oZmFsc2UpKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT09ICdvcGFjaXR5Jykge1xuXHRcdFx0XHRcdFx0dGhpcy5hbmkuaW4gPSAnZmFkZS1pbidcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gKz0gYCR7dGhpcy5nZXRUcmFuZnJvbShmYWxzZSlbaV19IGBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5fYW5pbWF0aW9uKHRydWUpXG5cdFx0XHRcdFx0fSwgNTApXG5cdFx0XHRcdH0pXG5cblx0XHRcdH0sXG5cdFx0XHRjbG9zZSh0eXBlKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuXHRcdFx0XHR0aGlzLl9hbmltYXRpb24oZmFsc2UpXG5cdFx0XHR9LFxuXHRcdFx0X2FuaW1hdGlvbih0eXBlKSB7XG5cdFx0XHRcdGxldCBzdHlsZXMgPSB0aGlzLmdldFRyYW5mcm9tKHR5cGUpXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRVxuXHRcdFx0XHRpZiAoIXRoaXMuJHJlZnNbJ2FuaSddKSByZXR1cm5cblx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kcmVmc1snYW5pJ10ucmVmLCB7XG5cdFx0XHRcdFx0c3R5bGVzLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLCAvL21zXG5cdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlJyxcblx0XHRcdFx0XHRuZWVkTGF5b3V0OiBmYWxzZSxcblx0XHRcdFx0XHRkZWxheTogMCAvL21zXG5cdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuaXNTaG93ID0gZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXG5cdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gJydcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiBzdHlsZXMpIHtcblx0XHRcdFx0XHRpZiAoaSA9PT0gJ29wYWNpdHknKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmFuaS5pbiA9IGBmYWRlLSR7dHlwZT8nb3V0JzonaW4nfWBcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gKz0gYCR7c3R5bGVzW2ldfSBgXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuaXNTaG93ID0gZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0fSwgdGhpcy5kdXJhdGlvbilcblx0XHRcdFx0Ly8gI2VuZGlmXG5cblx0XHRcdH0sXG5cdFx0XHRnZXRUcmFuZnJvbSh0eXBlKSB7XG5cdFx0XHRcdGxldCBzdHlsZXMgPSB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubW9kZUNsYXNzLmZvckVhY2goKG1vZGUpID0+IHtcblx0XHRcdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2ZhZGUnOlxuXHRcdFx0XHRcdFx0XHRzdHlsZXMub3BhY2l0eSA9IHR5cGUgPyAxIDogMFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLXRvcCc6XG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZVkoJHt0eXBlPycwJzonLTEwMCUnfSkgYFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLXJpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgdHJhbnNsYXRlWCgke3R5cGU/JzAnOicxMDAlJ30pIGBcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdzbGlkZS1ib3R0b20nOlxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGB0cmFuc2xhdGVZKCR7dHlwZT8nMCc6JzEwMCUnfSkgYFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLWxlZnQnOlxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGB0cmFuc2xhdGVYKCR7dHlwZT8nMCc6Jy0xMDAlJ30pIGBcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICd6b29tLWluJzpcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0eXBlPzE6MC44fSkgYFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3pvb20tb3V0Jzpcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0eXBlPzE6MS4yfSkgYFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybiBzdHlsZXNcblx0XHRcdH0sXG5cdFx0XHRfbW9kZUNsYXNzQXJyKHR5cGUpIHtcblx0XHRcdFx0bGV0IG1vZGUgPSB0aGlzLm1vZGVDbGFzc1xuXHRcdFx0XHRpZiAodHlwZW9mKG1vZGUpICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0bGV0IG1vZGVzdHIgPSAnJ1xuXHRcdFx0XHRcdG1vZGUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdFx0bW9kZXN0ciArPSAoaXRlbSArICctJyArIHR5cGUgKyAnLCcpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRyZXR1cm4gbW9kZXN0ci5zdWJzdHIoMCwgbW9kZXN0ci5sZW5ndGggLSAxKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBtb2RlICsgJy0nICsgdHlwZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Ly8gZ2V0RWwoZWwpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coZWwgfHwgZWwucmVmIHx8IG51bGwpO1xuXHRcdFx0Ly8gXHRyZXR1cm4gZWwgfHwgZWwucmVmIHx8IG51bGxcblx0XHRcdC8vIH0sXG5cdFx0XHR0b0xpbmUobmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gbmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblx0LnVuaS10cmFuc2l0aW9uIHtcblx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcblx0fVxuXG5cdC5mYWRlLWluIHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblx0LmZhZGUtYWN0aXZlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0LnNsaWRlLXRvcC1pbiB7XG5cdFx0LyogdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5OyAqL1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG5cdH1cblxuXHQuc2xpZGUtdG9wLWFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdC8qIG9wYWNpdHk6IDE7ICovXG5cdH1cblxuXHQuc2xpZGUtcmlnaHQtaW4ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcblx0fVxuXG5cdC5zbGlkZS1yaWdodC1hY3RpdmUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0fVxuXG5cdC5zbGlkZS1ib3R0b20taW4ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcblx0fVxuXG5cdC5zbGlkZS1ib3R0b20tYWN0aXZlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblxuXHQuc2xpZGUtbGVmdC1pbiB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcblx0fVxuXG5cdC5zbGlkZS1sZWZ0LWFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQuem9vbS1pbi1pbiB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuXHR9XG5cblx0Lnpvb20tb3V0LWFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0fVxuXG5cdC56b29tLW91dC1pbiB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuXHR9XG48L3N0eWxlPiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVOYXRpdmVQbHVnaW4obmFtZSkge1xyXG4gIHJldHVybiB3ZWV4LnJlcXVpcmVNb2R1bGUobmFtZSlcclxufVxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjNkM2ExOTQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yM2QzYTE5NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIkBUUkFOU0lUSU9OXCI6IHtcbiAgICBcInVuaS10cmFuc2l0aW9uXCI6IHtcbiAgICAgIFwidGltaW5nRnVuY3Rpb25cIjogXCJlYXNlXCIsXG4gICAgICBcImR1cmF0aW9uXCI6IDMwMCxcbiAgICAgIFwicHJvcGVydHlcIjogXCJ0cmFuc2Zvcm0sb3BhY2l0eVwiXG4gICAgfVxuICB9LFxuICBcInVuaS10cmFuc2l0aW9uXCI6IHtcbiAgICBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2VcIixcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiAzMDAsXG4gICAgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogXCJ0cmFuc2Zvcm0sb3BhY2l0eVwiXG4gIH0sXG4gIFwiZmFkZS1pblwiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDBcbiAgfSxcbiAgXCJmYWRlLWFjdGl2ZVwiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDFcbiAgfSxcbiAgXCJzbGlkZS10b3AtaW5cIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgtMTAwJSlcIlxuICB9LFxuICBcInNsaWRlLXRvcC1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgwKVwiXG4gIH0sXG4gIFwic2xpZGUtcmlnaHQtaW5cIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWCgxMDAlKVwiXG4gIH0sXG4gIFwic2xpZGUtcmlnaHQtYWN0aXZlXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVgoMClcIlxuICB9LFxuICBcInNsaWRlLWJvdHRvbS1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDEwMCUpXCJcbiAgfSxcbiAgXCJzbGlkZS1ib3R0b20tYWN0aXZlXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMClcIlxuICB9LFxuICBcInNsaWRlLWxlZnQtaW5cIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWCgtMTAwJSlcIlxuICB9LFxuICBcInNsaWRlLWxlZnQtYWN0aXZlXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVgoMClcIixcbiAgICBcIm9wYWNpdHlcIjogMVxuICB9LFxuICBcInpvb20taW4taW5cIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMC44KVwiXG4gIH0sXG4gIFwiem9vbS1vdXQtYWN0aXZlXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDEpXCJcbiAgfSxcbiAgXCJ6b29tLW91dC1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgxLjIpXCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInBhZ2VcIj5cblx0PHZpZXcgdi1pZj1cInNob3dQb3B1cFwiIGNsYXNzPVwidW5pLXBvcHVwXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJjbGVhclwiPlxuXHRcdDx1bmktdHJhbnNpdGlvbiA6bW9kZS1jbGFzcz1cIlsnZmFkZSddXCIgOnN0eWxlcz1cIm1hc2tDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiIC8+XG5cdFx0PHVuaS10cmFuc2l0aW9uIDptb2RlLWNsYXNzPVwiYW5pXCIgOnN0eWxlcz1cInRyYW5zQ2xhc3NcIiA6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpzaG93PVwic2hvd1RyYW5zXCIgQGNsaWNrPVwib25UYXBcIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLXBvcHVwX193cmFwcGVyLWJveFwiIEBjbGljay5zdG9wPVwiY2xlYXJcIj5cblx0XHRcdFx0PHNsb3QgLz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3VuaS10cmFuc2l0aW9uPlxuXHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHVuaVRyYW5zaXRpb24gZnJvbSAnLi4vdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlJ1xuXG5cdC8qKlxuXHQgKiBQb3BVcCDlvLnlh7rlsYJcblx0ICogQGRlc2NyaXB0aW9uIOW8ueWHuuWxgue7hOS7tu+8jOS4uuS6huino+WGs+mBrue9qeW8ueWxgueahOmXrumimFxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MzI5XG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlID0gW3RvcHxjZW50ZXJ8Ym90dG9tXSDlvLnlh7rmlrnlvI9cblx0ICogXHRAdmFsdWUgdG9wIOmhtumDqOW8ueWHulxuXHQgKiBcdEB2YWx1ZSBjZW50ZXIg5Lit6Ze05by55Ye6XG5cdCAqIFx0QHZhbHVlIGJvdHRvbSDlupXpg6jlvLnlh7pcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBhbmltYXRpb24gPSBbdHVyZXxmYWxzZV0g5piv5ZCm5byA5ZCv5Yqo55S7XG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbWFza0NsaWNrID0gW3R1cmV8ZmFsc2VdIOiSmeeJiOeCueWHu+aYr+WQpuWFs+mXreW8ueeql1xuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjaGFuZ2Ug5omT5byA5YWz6Zet5by556qX6Kem5Y+R77yMZT17c2hvdzogZmFsc2V9XG5cdCAqL1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnVW5pUG9wdXAnLFxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdHVuaVRyYW5zaXRpb25cblx0XHR9LFxuXHRcdHByb3BzOiB7XG5cdFx0XHQvLyDlvIDlkK/liqjnlLtcblx0XHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5by55Ye65bGC57G75Z6L77yM5Y+v6YCJ5YC877yMdG9wOiDpobbpg6jlvLnlh7rlsYLvvJtib3R0b23vvJrlupXpg6jlvLnlh7rlsYLvvJtjZW50ZXLvvJrlhajlsY/lvLnlh7rlsYJcblx0XHRcdHR5cGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnY2VudGVyJ1xuXHRcdFx0fSxcblx0XHRcdC8vIG1hc2tDbGlja1xuXHRcdFx0bWFza0NsaWNrOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkdXJhdGlvbjogMzAwLFxuXHRcdFx0XHRhbmk6IFtdLFxuXHRcdFx0XHRzaG93UG9wdXA6IGZhbHNlLFxuXHRcdFx0XHRzaG93VHJhbnM6IGZhbHNlLFxuXHRcdFx0XHRtYXNrQ2xhc3M6IHtcblx0XHRcdFx0XHQncG9zaXRpb24nOiAnZml4ZWQnLFxuXHRcdFx0XHRcdCdib3R0b20nOiAwLFxuXHRcdFx0XHRcdCd0b3AnOiAwLFxuXHRcdFx0XHRcdCdsZWZ0JzogMCxcblx0XHRcdFx0XHQncmlnaHQnOiAwLFxuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kQ29sb3InOiAncmdiYSgwLCAwLCAwLCAuNiknXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRyYW5zQ2xhc3M6IHtcblx0XHRcdFx0XHQncG9zaXRpb24nOiAnZml4ZWQnLFxuXHRcdFx0XHRcdCdsZWZ0JzogMCxcblx0XHRcdFx0XHQncmlnaHQnOiAwLFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0dHlwZToge1xuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWwpIHtcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMudHlwZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAndG9wJzpcblx0XHRcdFx0XHRcdFx0dGhpcy5hbmkgPSBbJ3NsaWRlLXRvcCddXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0XHRcdFx0XHQncG9zaXRpb24nOiAnZml4ZWQnLFxuXHRcdFx0XHRcdFx0XHRcdCdsZWZ0JzogMCxcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAwLFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRjYXNlICdib3R0b20nOlxuXHRcdFx0XHRcdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtYm90dG9tJ11cblx0XHRcdFx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXG5cdFx0XHRcdFx0XHRcdFx0J2xlZnQnOiAwLFxuXHRcdFx0XHRcdFx0XHRcdCdyaWdodCc6IDAsXG5cdFx0XHRcdFx0XHRcdFx0J2JvdHRvbSc6IDBcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0Y2FzZSAnY2VudGVyJzpcblx0XHRcdFx0XHRcdFx0dGhpcy5hbmkgPSBbJ3pvb20tb3V0JywgJ2ZhZGUnXVxuXHRcdFx0XHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2ZpeGVkJyxcblx0XHRcdFx0XHRcdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0XHRcdFx0XHRcdFx0J2Rpc3BsYXknOiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0J2ZsZXhEaXJlY3Rpb24nOiAnY29sdW1uJyxcblx0XHRcdFx0XHRcdFx0XHQvKiAjZW5kaWYgKi9cblx0XHRcdFx0XHRcdFx0XHQnYm90dG9tJzogMCxcblx0XHRcdFx0XHRcdFx0XHQnbGVmdCc6IDAsXG5cdFx0XHRcdFx0XHRcdFx0J3JpZ2h0JzogMCxcblx0XHRcdFx0XHRcdFx0XHQndG9wJzogMCxcblx0XHRcdFx0XHRcdFx0XHQnanVzdGlmeUNvbnRlbnQnOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHQnYWxpZ25JdGVtcyc6ICdjZW50ZXInXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0aWYgKHRoaXMuYW5pbWF0aW9uKSB7XG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSAzMDBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSAwXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjbGVhcihlKSB7XG5cdFx0XHRcdC8vIFRPRE8gbnZ1ZSDlj5bmtojlhpLms6Fcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0fSxcblx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXG5cdFx0XHRcdFx0fSwgNTApO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGNsb3NlKHR5cGUpIHtcblx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSBmYWxzZVxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdFx0XHRzaG93OiBmYWxzZVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gZmFsc2Vcblx0XHRcdFx0XHR9LCAzMDApXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0b25UYXAoKSB7XG5cdFx0XHRcdGlmICghdGhpcy5tYXNrQ2xpY2spIHJldHVyblxuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cblx0LnVuaS1wb3B1cCB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdHRvcDogdmFyKC0td2luZG93LXRvcCk7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0LyogI2lmbmRlZiBINSAqL1xuXHRcdHRvcDogMDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ei1pbmRleDogOTk7XG5cdFx0LyogI2VuZGlmICovXG5cdH1cblxuXHQudW5pLXBvcHVwX19tYXNrIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblx0Lm1hc2stYW5pIHtcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cdH1cblxuXHQudW5pLXRvcC1tYXNrIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0LnVuaS1ib3R0b20tbWFzayB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdC51bmktY2VudGVyLW1hc2sge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQudW5pLXBvcHVwX193cmFwcGVyIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHR9XG5cblx0LnRvcCB7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XG5cdH1cblxuXHQuYm90dG9tIHtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAwcHgpO1xuXHR9XG5cblx0LmNlbnRlciB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IDA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxuXG5cdC51bmktcG9wdXBfX3dyYXBwZXItYm94IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR9XG5cblx0LmNvbnRlbnQtYW5pIHtcblx0XHQvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAqL1xuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXHR9XG5cblxuXHQudW5pLXRvcC1jb250ZW50IHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblxuXHQudW5pLWJvdHRvbS1jb250ZW50IHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblxuXHQudW5pLWNlbnRlci1jb250ZW50IHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYjUyNTk5OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYjUyNTk5OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1wb3B1cFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMFxuICB9LFxuICBcInVuaS1wb3B1cF9fbWFza1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC40KVwiLFxuICAgIFwib3BhY2l0eVwiOiAwXG4gIH0sXG4gIFwiQFRSQU5TSVRJT05cIjoge1xuICAgIFwibWFzay1hbmlcIjoge1xuICAgICAgXCJwcm9wZXJ0eVwiOiBcIm9wYWNpdHlcIixcbiAgICAgIFwiZHVyYXRpb25cIjogMjAwXG4gICAgfSxcbiAgICBcImNvbnRlbnQtYW5pXCI6IHtcbiAgICAgIFwicHJvcGVydHlcIjogXCJ0cmFuc2Zvcm0sb3BhY2l0eVwiLFxuICAgICAgXCJkdXJhdGlvblwiOiAyMDBcbiAgICB9XG4gIH0sXG4gIFwibWFzay1hbmlcIjoge1xuICAgIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IFwib3BhY2l0eVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDIwMFxuICB9LFxuICBcInVuaS10b3AtbWFza1wiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDFcbiAgfSxcbiAgXCJ1bmktYm90dG9tLW1hc2tcIjoge1xuICAgIFwib3BhY2l0eVwiOiAxXG4gIH0sXG4gIFwidW5pLWNlbnRlci1tYXNrXCI6IHtcbiAgICBcIm9wYWNpdHlcIjogMVxuICB9LFxuICBcInVuaS1wb3B1cF9fd3JhcHBlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCJcbiAgfSxcbiAgXCJ0b3BcIjoge1xuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgtNTAwcHgpXCJcbiAgfSxcbiAgXCJib3R0b21cIjoge1xuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSg1MDBweClcIlxuICB9LFxuICBcImNlbnRlclwiOiB7XG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgxLjIpXCIsXG4gICAgXCJvcGFjaXR5XCI6IDBcbiAgfSxcbiAgXCJ1bmktcG9wdXBfX3dyYXBwZXItYm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcImNvbnRlbnQtYW5pXCI6IHtcbiAgICBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiBcInRyYW5zZm9ybSxvcGFjaXR5XCIsXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogMjAwXG4gIH0sXG4gIFwidW5pLXRvcC1jb250ZW50XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMClcIlxuICB9LFxuICBcInVuaS1ib3R0b20tY29udGVudFwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDApXCJcbiAgfSxcbiAgXCJ1bmktY2VudGVyLWNvbnRlbnRcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMSlcIixcbiAgICBcIm9wYWNpdHlcIjogMVxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXlsaXN0X2RyYXdlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5bGlzdF9kcmF3ZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4NTBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCI6IFwiMzVycHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiMzVycHhcIlxuICB9LFxuICBcImhlYWRlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMSlcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXJweFwiXG4gIH0sXG4gIFwicGxheS10eXBlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiBcIjkwcnB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFjdGl2ZVwiOiBcInJnYmEoMCwwLDAsMC4yKVwiXG4gIH0sXG4gIFwic29uZy1jZWxsXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWN0aXZlXCI6IFwicmdiYSgwLDAsMCwwLjEpXCJcbiAgfSxcbiAgXCJhY3RpdmUtc29uZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRjAwMDBcIlxuICB9LFxuICBcImFyLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxOHJweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNSlcIlxuICB9XG59IiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvcGxheS9wbGF5Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3BsYXkvcGxheSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9wbGF5Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJjODBmOTAmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BsYXkubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9wbGF5Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3BsYXkubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3BsYXkubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjQ1ZDdiNGEzXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkRlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9wYWdlcy9wbGF5L3BsYXkubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXkubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmM4MGY5MCZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHMgPSB7XG4gIFwidW5pLXRyYW5zaXRpb25cIjogcmVxdWlyZShcIkAvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWVcIilcbiAgICAuZGVmYXVsdCxcbiAgXCJ3eXktaWNvblwiOiByZXF1aXJlKFwiQC9jb21wb25lbnRzL3d5eS1pY29uL3d5eS1pY29uLm52dWVcIikuZGVmYXVsdFxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1wicGFnZVwiXSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVuaS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICBtb2RlQ2xhc3M6IF92bS5tb2RlX2NsYXNzLFxuICAgICAgICAgICAgICAgIHN0eWxlczogX3ZtLnRyYW5zZnJvbV9jbGFzcyxcbiAgICAgICAgICAgICAgICBzaG93OiBfdm0uc2hvd19seXJpY1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLm5vbHlyaWNcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJseXJpYy1saXN0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNob3dTY3JvbGxiYXI6IFwiZmFsc2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImNlbGxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInRvcC1hcmVhXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXBwZW5kOiBcInRyZWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5seXJpYywgZnVuY3Rpb24ocm93LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hhbmdlX2NvbnRhaW5lcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImx5cmljLXJvd1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwibHlyaWNcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImx5cmljLXJvdy10ZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlX2x5cmljX3Jvd19pbmRleCA9PSByb3cuaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsaWdodC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHJvdy5jb250ZW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZmxleDogXCIxXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoYW5nZV9jb250YWluZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImx5cmljLXJvdy10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIue6r+mfs+S5kCwg6K+35qyj6LWPXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVuaS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICBtb2RlQ2xhc3M6IF92bS5tb2RlX2NsYXNzLFxuICAgICAgICAgICAgICAgIHN0eWxlczogX3ZtLnRyYW5zZnJvbV9jbGFzcyxcbiAgICAgICAgICAgICAgICBzaG93OiAhX3ZtLnNob3dfbHlyaWNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hhbmdlX2NvbnRhaW5lcigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY292ZXJcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY292ZXJfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJjb3Zlci1pbWFnZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5wbGF5ZWQuY292ZXJfaW1hZ2UgKyBcIj9wYXJhbT00MDB5NDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9wdGlvbi1hcmVhXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImljb24tZ3JvdXBcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uLWFyZWFcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpa2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ3eXktaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5pc2xpa2UgPyBcIiYjeGU2Nzk7XCIgOiBcIiYjeGU2N2E7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmlzbGlrZSA/IFwiI0ZGMDAwMFwiIDogXCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImljb24tYXJlYVwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInd5eS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCImI3hlNjY2O1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJpY29uLWFyZWFcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ3eXktaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiJiN4ZTY2ODtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiaWNvbi1hcmVhXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwid3l5LWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIiYjeGU2N2Q7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiZm9vdGVyXCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wic2xpZGVyLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJjdXJyZW50X3RpbWVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGltZS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucG9zaXRpb25fc2hvdykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwidS1zbGlkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNsaWRlclwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBfdm0uZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudF9wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwuNylcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsLjQpXCIsXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgICAgICAgICAgICAgICBibG9ja1NpemU6IFwiMThcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogX3ZtLnNsaWRlcl9jaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5naW5nOiBfdm0uc2xpZGVyX2NoYW5naW5nXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImVuZF90aW1lXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0aW1lLXRleHRcIiwgXCJncmV5LXRpbWUtdGV4dFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZHVyYXRpb25fc2hvdykpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiaGFuZGxlLWFyZWFcIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiaWNvbi1ncm91cFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb24tYXJlYVwiLCBcImxvb3BcIl0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hhbmdlX3BsYXlfbW9kZSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0ucGxheV9tb2RlID09IFwicmFuZG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwid3l5LWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiJiN4ZTY3NjtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBsYXlfbW9kZSA9PSBcInNlcXVlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwid3l5LWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiJiN4ZTY3NDtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBsYXlfbW9kZSA9PSBcInNpbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInd5eS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIiYjeGU2Nzg7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvbi1hcmVhXCIsIFwicHJldlwiXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJldigpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInd5eS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIiYjeGU2NmY7XCIsIHNpemU6IFwiNDBcIiwgY29sb3I6IFwiI0ZGRkZGRlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaWNvbi1hcmVhXCIsIFwidHVyblwiXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udHVybigpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInd5eS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLnBsYXlpbmcgPyBcIiYjeGU2NzI7XCIgOiBcIiYjeGU2NzM7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uLWFyZWFcIiwgXCJuZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwid3l5LWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiJiN4ZTYyMjtcIiwgc2l6ZTogXCI1MFwiLCBjb2xvcjogXCIjRkZGRkZGXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uLWFyZWFcIiwgXCJsaXN0LW1lbnVcIl0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3Blbl9wbGF5bGlzdCB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInd5eS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIiYjeGU2NzE7XCIsIHNpemU6IFwiNDBcIiwgY29sb3I6IFwiI0ZGRkZGRlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInBsYXlsaXN0LWRyYXdlclwiLCB7IHJlZjogXCJwbGF5bGlzdF9kcmF3ZXJcIiB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXkubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHRcdDx1bmktdHJhbnNpdGlvbiA6ZHVyYXRpb249XCIzMDBcIiA6bW9kZS1jbGFzcz1cIm1vZGVfY2xhc3NcIiA6c3R5bGVzPVwidHJhbnNmcm9tX2NsYXNzXCIgOnNob3c9XCJzaG93X2x5cmljXCI+XG5cdFx0XHRcblx0XHRcdDxsaXN0IHYtaWY9XCIhbm9seXJpY1wiIGNsYXNzPVwibHlyaWMtbGlzdFwiIHNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiA+XG5cdFx0XHRcdDxjZWxsIGNsYXNzPVwidG9wLWFyZWFcIj48L2NlbGw+XG5cdFx0XHRcdDxjZWxsIEB0YXA9XCJjaGFuZ2VfY29udGFpbmVyKClcIiB2LWZvcj1cIihyb3csIGluZGV4KSBpbiBseXJpY1wiIDprZXk9XCJpbmRleFwiPlxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJyb3cuY29udGVudFwiIGNsYXNzPVwibHlyaWMtcm93XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCA6cmVmPVwiYGx5cmljJHtpbmRleH1gXCIgOmNsYXNzPVwiYWN0aXZlX2x5cmljX3Jvd19pbmRleCA9PSByb3cuaW5kZXggPyAnbGlnaHQtdGV4dCcgOiAnJ1wiIGNsYXNzPVwibHlyaWMtcm93LXRleHRcIj57e3Jvdy5jb250ZW50fX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L2NlbGw+XG5cdFx0XHQ8L2xpc3Q+XG5cdFx0XHQ8dmlldyB2LWVsc2Ugc3R5bGU9XCJmbGV4OiAxO2p1c3RpZnktY29udGVudDogY2VudGVyO1wiIEB0YXA9XCJjaGFuZ2VfY29udGFpbmVyKClcIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJseXJpYy1yb3ctdGV4dFwiPue6r+mfs+S5kCwg6K+35qyj6LWPPC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdW5pLXRyYW5zaXRpb24+XG5cdFx0PHVuaS10cmFuc2l0aW9uIDpkdXJhdGlvbj1cIjMwMFwiIDptb2RlLWNsYXNzPVwibW9kZV9jbGFzc1wiIDpzdHlsZXM9XCJ0cmFuc2Zyb21fY2xhc3NcIiA6c2hvdz1cIiFzaG93X2x5cmljXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiIEB0YXA9XCJjaGFuZ2VfY29udGFpbmVyKClcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb3ZlclwiPlxuXHRcdFx0XHRcdDxpbWFnZSByZWY9XCJjb3Zlcl9pbWFnZVwiIGNsYXNzPVwiY292ZXItaW1hZ2VcIiByZXNpemU9XCJjb3ZlclwiIDpzcmM9XCJwbGF5ZWQuY292ZXJfaW1hZ2UgKyAnP3BhcmFtPTQwMHk0MDAnXCI+PC9pbWFnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9wdGlvbi1hcmVhXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24tYXJlYVwiIEB0YXA9XCJsaWtlKCRldmVudClcIj5cblx0XHRcdFx0XHRcdFx0PHd5eS1pY29uIDp0eXBlPVwiaXNsaWtlID8gJyYjeGU2Nzk7JyA6ICcmI3hlNjdhOydcIiBzaXplPVwiNDBcIiA6Y29sb3I9XCJpc2xpa2UgPyAnI0ZGMDAwMCcgOiAnI0ZGRkZGRidcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbi1hcmVhXCI+XG5cdFx0XHRcdFx0XHRcdDx3eXktaWNvbiB0eXBlPVwiJiN4ZTY2NjtcIiBzaXplPVwiNDBcIiBjb2xvcj1cIiNGRkZGRkZcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWFyZWFcIj5cblx0XHRcdFx0XHRcdFx0PHd5eS1pY29uIHR5cGU9XCImI3hlNjY4O1wiIHNpemU9XCI0MFwiIGNvbG9yPVwiI0ZGRkZGRlwiID48L3d5eS1pY29uPlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWFyZWFcIj5cblx0XHRcdFx0XHRcdFx0PHd5eS1pY29uIHR5cGU9XCImI3hlNjdkO1wiIHNpemU9XCI0MFwiIGNvbG9yPVwiI0ZGRkZGRlwiID48L3d5eS1pY29uPlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC91bmktdHJhbnNpdGlvbj5cblx0XHRcblx0XHRcblx0XHQ8dmlldyBjbGFzcz1cImZvb3RlclwiPlxuXHRcdFx0XG5cdFx0XHQ8dmlldyBjbGFzcz1cInNsaWRlci12aWV3XCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3VycmVudF90aW1lXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lLXRleHRcIj57e3Bvc2l0aW9uX3Nob3d9fTwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PHNsaWRlciBAY2hhbmdlPVwic2xpZGVyX2NoYW5nZVwiIEBjaGFuZ2luZz1cInNsaWRlcl9jaGFuZ2luZ1wiIGNsYXNzPVwic2xpZGVyXCIgOm1pbj1cIjBcIiA6bWF4PVwiZHVyYXRpb25cIiA6dmFsdWU9XCJjdXJyZW50X3Bvc2l0aW9uXCIgYWN0aXZlQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LC43KVwiIGJhY2tncm91bmRDb2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsLjQpXCIgYmxvY2stY29sb3I9XCIjRkZGRkZGXCIgYmxvY2stc2l6ZT1cIjE4XCIgLz5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW5kX3RpbWVcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWUtdGV4dCBncmV5LXRpbWUtdGV4dFwiPnt7ZHVyYXRpb25fc2hvd319PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDx2aWV3IGNsYXNzPVwiaGFuZGxlLWFyZWFcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWdyb3VwXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWFyZWEgbG9vcFwiIEB0YXA9XCJjaGFuZ2VfcGxheV9tb2RlXCI+XG5cdFx0XHRcdFx0XHQ8d3l5LWljb24gdi1pZj1cInBsYXlfbW9kZSA9PSAncmFuZG9tJ1wiIHR5cGU9XCImI3hlNjc2O1wiIHNpemU9XCI0MFwiIGNvbG9yPVwiI0ZGRkZGRlwiID48L3d5eS1pY29uPlxuXHRcdFx0XHRcdFx0PHd5eS1pY29uIHYtaWY9XCJwbGF5X21vZGUgPT0gJ3NlcXVlbmNlJ1wiIHR5cGU9XCImI3hlNjc0O1wiIHNpemU9XCI0MFwiIGNvbG9yPVwiI0ZGRkZGRlwiID48L3d5eS1pY29uPlxuXHRcdFx0XHRcdFx0PHd5eS1pY29uIHYtaWY9XCJwbGF5X21vZGUgPT0gJ3NpbmdsZSdcIiB0eXBlPVwiJiN4ZTY3ODtcIiBzaXplPVwiNDBcIiBjb2xvcj1cIiNGRkZGRkZcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWFyZWEgcHJldlwiIEB0YXA9XCJwcmV2KClcIj5cblx0XHRcdFx0XHRcdDx3eXktaWNvbiB0eXBlPVwiJiN4ZTY2ZjtcIiBzaXplPVwiNDBcIiBjb2xvcj1cIiNGRkZGRkZcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWFyZWEgdHVyblwiIEB0YXA9XCJ0dXJuKClcIj5cblx0XHRcdFx0XHRcdDx3eXktaWNvbiA6dHlwZT1cInBsYXlpbmcgPyAnJiN4ZTY3MjsnIDogJyYjeGU2NzM7J1wiIHNpemU9XCIxMDBcIiBjb2xvcj1cIiNGRkZGRkZcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWFyZWEgbmV4dFwiIEB0YXA9XCJuZXh0KClcIj5cblx0XHRcdFx0XHRcdDx3eXktaWNvbiB0eXBlPVwiJiN4ZTYyMjtcIiBzaXplPVwiNTBcIiBjb2xvcj1cIiNGRkZGRkZcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLWFyZWEgbGlzdC1tZW51XCIgQHRhcD1cIm9wZW5fcGxheWxpc3RcIj5cblx0XHRcdFx0XHRcdDx3eXktaWNvbiB0eXBlPVwiJiN4ZTY3MTtcIiBzaXplPVwiNDBcIiBjb2xvcj1cIiNGRkZGRkZcIiA+PC93eXktaWNvbj5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHBsYXlsaXN0LWRyYXdlciByZWY9XCJwbGF5bGlzdF9kcmF3ZXJcIj48L3BsYXlsaXN0LWRyYXdlcj5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHVuaVRyYW5zaXRpb24gZnJvbSAnQC9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZSdcblx0aW1wb3J0IHBsYXlsaXN0RHJhd2VyIGZyb20gJ0AvY29tcG9uZW50cy9wbGF5bGlzdF9kcmF3ZXIubnZ1ZSc7XG5cdFxuXHRpbXBvcnQgd3l5SWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3d5eS1pY29uL3d5eS1pY29uLm52dWUnO1xuXHRcblx0aW1wb3J0ICRyZXBlYXRlciBmcm9tICdAL3V0aWxzL3JlcGVhdGVyLmpzJztcblx0XG5cdGNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJyk7XG5cdGNvbnN0IGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJylcblx0XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHR1bmlUcmFuc2l0aW9uLFxuXHRcdFx0cGxheWxpc3REcmF3ZXIsXG5cdFx0XHR3eXlJY29uXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhdHVzYmFyX2hlaWdodDogJHJlcGVhdGVyLmNvbmZpZy5zdGF0dXNfYmFyX2hlaWdodCxcblx0XHRcdFx0ZHVyYXRpb246ICRyZXBlYXRlci5wbGF5ZXIuZ2V0X2R1cmF0aW9uKCkudG9GaXhlZCgwKSwgLy/pn7PpopHmgLvplb/luqbljZXkvY1zXG5cdFx0XHRcdGN1cnJlbnRfcG9zaXRpb246ICRyZXBlYXRlci5wbGF5ZXIuZ2V0X3Bvc2l0aW9uKCkudG9GaXhlZCgwKSwgLy/lvZPliY3mkq3mlL7kvY3nva5cblx0XHRcdFx0XG5cdFx0XHRcdHRpbWVyOiAnJywgLy/orqHml7blmahcblx0XHRcdFx0YW5pbWF0aW9uX3RpbWVyOiAnJyxcblx0XHRcdFx0ZGVnOiAwLFxuXHRcdFx0XHRkcmFnZ2luZzogZmFsc2UsIC8vXG5cdFx0XHRcdHNob3dfbHlyaWM6IGZhbHNlLCAvL+aYr+WQpuaYvuekuuatjOivjVxuXHRcdFx0XHRub2x5cmljOiBmYWxzZSxcblx0XHRcdFx0bHlyaWM6IFtdLFxuXHRcdFx0XHRhY3RpdmVfbHlyaWNfcm93X2luZGV4OiAwLFxuXHRcdFx0XHRcblx0XHRcdFx0bW9kZV9jbGFzczogWydmYWRlJ10sXG5cdFx0XHRcdHRyYW5zZnJvbV9jbGFzczoge1xuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXG5cdFx0XHRcdFx0J2JvdHRvbSc6ICcyMDBycHgnLFxuXHRcdFx0XHRcdCd0b3AnOiAwLFxuXHRcdFx0XHRcdCdsZWZ0JzogMCxcblx0XHRcdFx0XHQncmlnaHQnOiAwLFxuXHRcdFx0XHRcdCdhbGlnbi1pdGVtcyc6ICdjZW50ZXInXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRwb3NpdGlvbl9zaG93KCkge1xuXHRcdFx0XHRsZXQgbWludXRlID0gcGFyc2VJbnQodGhpcy5jdXJyZW50X3Bvc2l0aW9uIC8gNjApO1xuXHRcdFx0XHRsZXQgc2Vjb25kID0gdGhpcy5jdXJyZW50X3Bvc2l0aW9uICUgNjA7XG5cdFx0XHRcdGlmIChtaW51dGUgPCAxMCkge1xuXHRcdFx0XHRcdG1pbnV0ZSA9ICcwJyArIG1pbnV0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc2Vjb25kIDwgMTApIHtcblx0XHRcdFx0XHRzZWNvbmQgPSAnMCcgKyBzZWNvbmQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1pbnV0ZSArICc6JyArIHNlY29uZDtcblx0XHRcdH0sXG5cdFx0XHRkdXJhdGlvbl9zaG93KCkge1xuXHRcdFx0XHRsZXQgbWludXRlID0gcGFyc2VJbnQodGhpcy5kdXJhdGlvbiAvIDYwKTtcblx0XHRcdFx0bGV0IHNlY29uZCA9IHRoaXMuZHVyYXRpb24gJSA2MDtcblx0XHRcdFx0aWYgKG1pbnV0ZSA8IDEwKSB7XG5cdFx0XHRcdFx0bWludXRlID0gJzAnICsgbWludXRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzZWNvbmQgPCAxMCkge1xuXHRcdFx0XHRcdHNlY29uZCA9ICcwJyArIHNlY29uZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWludXRlICsgJzonICsgc2Vjb25kO1xuXHRcdFx0fSxcblx0XHRcdHBsYXlpbmcoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5wbGF5aW5nO1xuXHRcdFx0fSxcblx0XHRcdHBsYXllZCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnBsYXllZDtcblx0XHRcdH0sXG5cdFx0XHRpc2xpa2UoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5saWtlbGlzdC5pbmNsdWRlcyh0aGlzLnBsYXllZC5pZCk7XG5cdFx0XHR9LFxuXHRcdFx0cGxheV9tb2RlKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucGxheV9tb2RlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHBsYXllZCh2YWx1ZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdHRoaXMuX2luaXQoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRcblx0XHR9LFxuXHRcdG9uUmVhZHkoKSB7XG5cdFx0XHR0aGlzLl9pbml0KCk7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRfaW5pdCgpIHtcblx0XHRcdFx0dGhpcy5zZXRfdGl0bGUodGhpcy5wbGF5ZWQubmFtZSk7XG5cdFx0XHRcdHRoaXMuZ2V0X2x5cmljKCk7XG5cdFx0XHRcdHRoaXMuaW5pdF9jb3Zlcl9yb3RhdGUoKTtcblx0XHRcdFx0dGhpcy5pbml0X3RpbWVyKCk7XG5cdFx0XHRcdHRoaXMuaW5pdF9zbGlkZXIoKVxuXHRcdFx0fSxcblx0XHRcdGluaXRfc2xpZGVyKCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpPT4ge1xuXHRcdFx0XHRcdHRoaXMuZHVyYXRpb24gPSAkcmVwZWF0ZXIucGxheWVyLmdldF9kdXJhdGlvbigpLnRvRml4ZWQoMCk7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50X3Bvc2l0aW9uID0gICRyZXBlYXRlci5wbGF5ZXIuZ2V0X3Bvc2l0aW9uKCkudG9GaXhlZCgwKTtcblx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHR9LFxuXHRcdFx0b3Blbl9wbGF5bGlzdCgpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy5wbGF5bGlzdF9kcmF3ZXIub3Blbl9wbGF5bGlzdCgpO1xuXHRcdFx0fSxcblx0XHRcdGNoYW5nZV9wbGF5X21vZGUoKSB7XG5cdFx0XHRcdGxldCBtb2RlX2xpc3QgPSBbJ3NpbmdsZScsICdzZXF1ZW5jZScsICdyYW5kb20nXTtcblx0XHRcdFx0bGV0IGN1cnJlbnRfbW9kZSA9IHRoaXMucGxheV9tb2RlO1xuXHRcdFx0XHRsZXQgaW5kZXggPSBtb2RlX2xpc3QuaW5kZXhPZihjdXJyZW50X21vZGUpO1xuXHRcdFx0XHRsZXQgbmV4dF9pbmRleCA9IGluZGV4ICsgMSA+IDIgPyAwIDogaW5kZXggKyAxO1xuXHRcdFx0XHRsZXQgbmV4dF9tb2RlID0gbW9kZV9saXN0W25leHRfaW5kZXhdO1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3NldF9wbGF5X21vZGUnLCBuZXh0X21vZGUpO1xuXHRcdFx0fSxcblx0XHRcdGxpa2UoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMucGxheWVkLmlkKTtcblx0XHRcdFx0XG5cdFx0XHRcdCRyZXBlYXRlci51c2VyLmxpa2UodGhpcy5wbGF5ZWQuaWQsICF0aGlzLmlzbGlrZSwgKHJlcyk9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRsZXQgcGxheWxpc3QgPSB0aGlzLiRzdG9yZS5zdGF0ZS5saWtlbGlzdDtcblx0XHRcdFx0XHRpZiAodGhpcy5pc2xpa2UpIHtcblx0XHRcdFx0XHRcdGxldCBpbmRleCA9IHBsYXlsaXN0LmluZGV4T2YodGhpcy5wbGF5ZWQuaWQpO1xuXHRcdFx0XHRcdFx0cGxheWxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGluZGV4KTtcblx0XHRcdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdFx0XHRwbGF5bGlzdC5wdXNoKHRoaXMucGxheWVkLmlkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocGxheWxpc3QpO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0X2xpa2VsaXN0JywgcGxheWxpc3QpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRzZXRfYWN0aXZlX2x5cmljX3Jvd19pbmRleCgpIHtcblx0XHRcdFx0aWYgKHRoaXMubm9seXJpYykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgYWN0aXZlX2x5cmljX3Jvd3MgPSB0aGlzLmx5cmljLmZpbHRlcigob2JqKT0+IHtcblx0XHRcdFx0ICAgIHJldHVybiBwYXJzZUludChvYmouc2Vjb25kKSA8PSBwYXJzZUludCh0aGlzLmN1cnJlbnRfcG9zaXRpb24pICYmIG9iai5jb250ZW50O1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBjdXJyZW50X3JvdyA9IGFjdGl2ZV9seXJpY19yb3dzLnBvcCgpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMuYWN0aXZlX2x5cmljX3Jvd19pbmRleCA9PSBjdXJyZW50X3Jvdy5pbmRleCkgeyAvL+WcqOS4gOihjOatjOivjeWBnOeVmeaXtiwg5bCx5LiN5rua5Yqo5LqGXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5hY3RpdmVfbHlyaWNfcm93X2luZGV4ID0gY3VycmVudF9yb3cuaW5kZXg7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgdG9faW5kZXggPSAwO1xuXHRcdFx0XHRpZiAoYWN0aXZlX2x5cmljX3Jvd3MubGVuZ3RoID4gOCkge1xuXHRcdFx0XHRcdHRvX2luZGV4ID0gYWN0aXZlX2x5cmljX3Jvd3Muc2xpY2UoLTgpWzBdLmluZGV4O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGFjdGl2ZV9seXJpY19yb3dzLnNsaWNlKC04KVswXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmIChjdXJyZW50X3Jvdy5jb250ZW50ICYmIHRvX2luZGV4ID4gMCkge1xuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdGNvbnN0IGVsID0gdGhpcy4kcmVmc1tgbHlyaWMke3RvX2luZGV4fWBdWzBdO1xuXHRcdFx0XHRcdFx0ZG9tLnNjcm9sbFRvRWxlbWVudChlbCwge30pXG5cdFx0XHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdGdldF9seXJpYygpIHtcblx0XHRcdFx0JHJlcGVhdGVyLnNvbmcuZ2V0X2x5cmljKHRoaXMucGxheWVkLmlkLCAoZGF0YSk9PiB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKGRhdGEubm9seXJpYyB8fCAhZGF0YS5scmMubHlyaWMpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmmoLml6DmrYzor40nKTtcblx0XHRcdFx0XHRcdHRoaXMubm9seXJpYyA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBseXJpYyA9IGRhdGEubHJjLmx5cmljO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGxldCBsaW5lcyA9IGx5cmljLnNwbGl0KCdcXG4nKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsZXQgbmV3X2x5cmljID0gW107XG5cdFx0XHRcdFx0bGluZXMuZm9yRWFjaCgobGluZSwgaW5kZXgpPT4ge1xuXHRcdFx0XHRcdFx0bGV0IG5ld19saW5lID0ge307XG5cdFx0XHRcdFx0XHRpZiAoIWxpbmUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvL+WTiOWTiOWTiCzmraPliJnmsqHlhpnmmI7nmb1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bGV0IHBhdHRlcm4gPS9cXFtcXFMqXFxdL2c7XG5cdFx0XHRcdFx0XHRsZXQgdGltZSA9IGxpbmUubWF0Y2gocGF0dGVybilbMF07XG5cdFx0XHRcdFx0XHRsZXQgbGluZV9seXJpYyA9IGxpbmUucmVwbGFjZSh0aW1lLCAnJyk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHRpbWUgPSB0aW1lLnJlcGxhY2UoL1xcWy8sICcnKTtcblx0XHRcdFx0XHRcdHRpbWUgPSB0aW1lLnJlcGxhY2UoL1xcXS8sICcnKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bmV3X2xpbmUuaW5kZXggPSBpbmRleDtcblx0XHRcdFx0XHRcdG5ld19saW5lLnRpbWUgPSB0aW1lO1xuXHRcdFx0XHRcdFx0bmV3X2xpbmUuY29udGVudCA9IGxpbmVfbHlyaWMudHJpbSgpO1xuXHRcdFx0XHRcdFx0bmV3X2xpbmUuc2Vjb25kID0gKHRpbWUuc3BsaXQoXCI6XCIpWzBdICogNjAgKyBwYXJzZUZsb2F0KHRpbWUuc3BsaXQoXCI6XCIpWzFdKSkudG9GaXhlZCgwKTtcblx0XHRcdFx0XHRcdG5ld19seXJpYy5wdXNoKG5ld19saW5lKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMubHlyaWMgPSBuZXdfbHlyaWM7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5seXJpY1swXSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGNoYW5nZV9jb250YWluZXIoKSB7XG5cdFx0XHRcdHRoaXMuc2hvd19seXJpYyA9ICF0aGlzLnNob3dfbHlyaWM7XG5cdFx0XHR9LFxuXHRcdFx0aW5pdF9jb3Zlcl9yb3RhdGUoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmFuaW1hdGlvbl90aW1lcikge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5hbmltYXRpb25fdGltZXIpO1xuXHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uX3RpbWVyID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGNvdmVyX2ltYWdlID0gdGhpcy4kcmVmcy5jb3Zlcl9pbWFnZTtcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgZGVncmVlID0gdGhpcy5kZWcgKyAnZGVnJztcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuYW5pbWF0aW9uX3RpbWVyID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMucGxheWluZykge1xuXHRcdFx0XHRcdFx0dGhpcy5kZWcgKz0gMjA7IC8v5q2l6L+b5YC8XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGRlZ3JlZSA9IHRoaXMuZGVnICsgJ2RlZyc7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24oY292ZXJfaW1hZ2UsIHtcblx0XHRcdFx0XHRcdHN0eWxlczoge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICdyb3RhdGUoJytkZWdyZWUrJyknLFxuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxNDAwLCAvL21zXG5cdFx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG5cdFx0XHRcdFx0XHRkZWxheTogMCAvL21zXG5cdFx0XHRcdFx0fSwgICgpPT4ge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LCAxNDAwKTtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0c2V0X3RpdGxlKHRpdGxlKSB7XG5cdFx0XHRcdHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuXHRcdFx0XHRcdHRpdGxlOiB0aXRsZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRzbGlkZXJfY2hhbmdpbmcoZSkge1xuXHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5jdXJyZW50X3Bvc2l0aW9uID0gZS5kZXRhaWwudmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0c2xpZGVyX2NoYW5nZShlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0XHRsZXQgcG9zaXRpb24gPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdFx0JHJlcGVhdGVyLnBsYXllci5zZWVrX3RvKHBvc2l0aW9uKTtcblx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdHR1cm4oKSB7XG5cdFx0XHRcdC8v5YiH5o2i5pKt5pS+5pqC5YGc54q25oCBXG5cdFx0XHRcdCRyZXBlYXRlci5wbGF5ZXIudHVybigpO1xuXHRcdFx0fSxcblx0XHRcdHN0b3Bfcm90YXRlKCkge1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRpbml0X3RpbWVyKCkge1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy50aW1lcikge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHRcdFx0dGhpcy50aW1lciA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKT0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmx5cmljW3RoaXMuYWN0aXZlX3Jvd19seXJpY11bMl0pO1xuXHRcdFx0XHRcdGlmICghdGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50X3Bvc2l0aW9uID0gJHJlcGVhdGVyLnBsYXllci5nZXRfcG9zaXRpb24oKS50b0ZpeGVkKDApO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5zaG93X2x5cmljKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0X2FjdGl2ZV9seXJpY19yb3dfaW5kZXgoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHR9LFxuXHRcdFx0bmV4dCgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ+S4i+S4gOabsicpO1xuXHRcdFx0XHR0aGlzLiRyZWZzLnBsYXlsaXN0X2RyYXdlci5uZXh0X3NvbmcoKTtcblx0XHRcdH0sXG5cdFx0XHRwcmV2KCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygn5LiK5LiA5puyJyk7XG5cdFx0XHRcdHRoaXMuJHJlZnMucGxheWxpc3RfZHJhd2VyLnByZXZfc29uZygpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cblx0LnBhZ2Uge1xuXHRcdGZsZXg6IDE7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzE3MTYxNjtcblx0fVxuXHQuaGVhZGVyIHtcblx0XHRcblx0fVxuXHQuY29udGFpbmVyIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cdC5jb3ZlciB7XG5cdFx0ZmxleDogMTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5jb3Zlci1pbWFnZSB7XG5cdFx0d2lkdGg6IDQ4MHJweDtcblx0XHRoZWlnaHQ6IDQ4MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAwO1xuXHR9XG5cdC5mb290ZXIge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogMDtcblx0XHRoZWlnaHQ6IDIwMHJweDtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHRcdFxuXHRcdFxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XG5cdH1cblx0XG5cdC5zbGlkZXItdmlldyB7XG5cdFx0d2lkdGg6IDc1MHJweDtcblx0XHRoZWlnaHQ6IDUwcnB4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQuc2xpZGVyIHtcblx0XHR3aWR0aDogNjMwcnB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcblx0XHRcblx0fVxuXHQuY3VycmVudF90aW1lIHtcblx0XHR3aWR0aDogNTVycHg7XG5cdFx0XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHR9XG5cdC5lbmRfdGltZSB7XG5cdFx0d2lkdGg6IDU1cnB4O1xuXHRcdFxuXHR9XG5cdC50aW1lLXRleHQge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogMTZycHg7XG5cdH1cblx0LmdyZXktdGltZS10ZXh0IHtcblx0XHRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMyk7XG5cdH1cblx0Lm9wdGlvbi1hcmVhIHtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHRcdFxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMjBycHggMzBycHggMTBycHggMzBycHg7XG5cdH1cblx0LmhhbmRsZS1hcmVhIHtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHRcdFxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMjBycHggMzBycHggMzBycHggMzBycHg7XG5cdH1cblx0Lmljb24tZ3JvdXAge1xuXHRcdHdpZHRoOiA2MDBycHg7XG5cdFx0aGVpZ2h0OiA5MHJweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC5pY29uLWFyZWEge1xuXHRcdHdpZHRoOiAxMjBycHg7XG5cdFx0aGVpZ2h0OiA5MHJweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdFxuXHQubHlyaWMtcm93IHtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHRcdGhlaWdodDogNjVycHg7XG5cdFx0cGFkZGluZy1sZWZ0OiAxNnJweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5seXJpYy1yb3ctdGV4dHtcblx0XHRmb250LXNpemU6IDI0cnB4O1xuXHRcdGNvbG9yOiAjOEI4NjgyO1xuXHR9XG5cdC5saWdodC10ZXh0IHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG5cdC5seXJpYy1saXN0IHtcblx0XHRmbGV4OiAxO1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdH1cblx0LnRvcC1hcmVhIHtcblx0XHRoZWlnaHQ6IDUwcnB4O1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdH1cblx0LmJvdHRvbS1hcmVhIHtcblx0XHRoZWlnaHQ6IDYwMHJweDtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXkubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicGFnZVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTcxNjE2XCJcbiAgfSxcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiY292ZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNvdmVyLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDgwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0ODBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMDAwXG4gIH0sXG4gIFwiZm9vdGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjAwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwic2xpZGVyLXZpZXdcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwic2xpZGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjMwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcImN1cnJlbnRfdGltZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjU1cnB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImVuZF90aW1lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTVycHhcIlxuICB9LFxuICBcInRpbWUtdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTZycHhcIlxuICB9LFxuICBcImdyZXktdGltZS10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjMpXCJcbiAgfSxcbiAgXCJvcHRpb24tYXJlYVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJoYW5kbGUtYXJlYVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJpY29uLWdyb3VwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjAwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI5MHJweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJpY29uLWFyZWFcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMjBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjkwcnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwibHlyaWMtcm93XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2NXJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNnJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImx5cmljLXJvdy10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhCODY4MlwiXG4gIH0sXG4gIFwibGlnaHQtdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjZycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJseXJpYy1saXN0XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCJcbiAgfSxcbiAgXCJ0b3AtYXJlYVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcImJvdHRvbS1hcmVhXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjYwMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==