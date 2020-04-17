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
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
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

/***/ 13:
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

/***/ 138:
/*!*********************************************************************!*\
  !*** D:/CODE/opera_uniapp/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.nvue?mpType=page */ 139);

        
        
        
        _pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/login/login'
        _pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_login_login_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 139:
/*!***************************************************************!*\
  !*** D:/CODE/opera_uniapp/pages/login/login.nvue?mpType=page ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_nvue_vue_type_template_id_19695e64_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.nvue?vue&type=template&id=19695e64&mpType=page */ 140);
/* harmony import */ var _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.nvue?vue&type=script&lang=js&mpType=page */ 142);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./login.nvue?vue&type=style&index=0&lang=css&mpType=page */ 144).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./login.nvue?vue&type=style&index=0&lang=css&mpType=page */ 144).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_nvue_vue_type_template_id_19695e64_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_nvue_vue_type_template_id_19695e64_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "4c599871",
  false,
  _login_nvue_vue_type_template_id_19695e64_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "CODE/opera_uniapp/pages/login/login.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 140:
/*!*********************************************************************************************!*\
  !*** D:/CODE/opera_uniapp/pages/login/login.nvue?vue&type=template&id=19695e64&mpType=page ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_19695e64_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.nvue?vue&type=template&id=19695e64&mpType=page */ 141);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_19695e64_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_19695e64_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_19695e64_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_template_id_19695e64_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 141:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CODE/opera_uniapp/pages/login/login.nvue?vue&type=template&id=19695e64&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c("u-image", {
            staticClass: ["logo"],
            attrs: { src: "../../static/wyy_logo.png" }
          }),
          _c(
            "button",
            {
              staticClass: ["login-button"],
              attrs: { size: "default", plain: true, type: "warn" },
              on: { click: _vm.login_by_phone }
            },
            [_vm._v("手机号登录")]
          )
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

/***/ 142:
/*!***************************************************************************************!*\
  !*** D:/CODE/opera_uniapp/pages/login/login.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.nvue?vue&type=script&lang=js&mpType=page */ 143);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 143:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CODE/opera_uniapp/pages/login/login.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _default = { data: function data() {return {};}, methods: {
    login_by_phone: function login_by_phone() {
      _repeater.default.helper.to('./phone');
    } } };exports.default = _default;

/***/ }),

/***/ 144:
/*!***********************************************************************************************!*\
  !*** D:/CODE/opera_uniapp/pages/login/login.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.nvue?vue&type=style&index=0&lang=css&mpType=page */ 145);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 145:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CODE/opera_uniapp/pages/login/login.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "flex": 1,
    "backgroundColor": "#FF0000"
  },
  "login-button": {
    "position": "absolute",
    "width": "550rpx",
    "borderRadius": "50rpx",
    "bottom": "200rpx",
    "height": "80rpx",
    "left": "100rpx",
    "backgroundColor": "#FFFFFF"
  },
  "logo": {
    "position": "absolute",
    "top": "300rpx",
    "left": "315rpx",
    "borderRadius": 50,
    "width": "120rpx",
    "height": "120rpx"
  }
}

/***/ }),

/***/ 2:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-261120200409001","_inBundle":false,"_integrity":"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz","_shasum":"e9daeef120f133bf3d4ca0505f5b2abed0e874a7","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"ff0877f516c1cc986cf2d7eae2bf5030c58050f9","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-261120200409001"};

/***/ }),

/***/ 23:
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

/***/ 24:
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

/***/ 25:
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

/***/ 26:
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

/***/ 27:
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

/***/ 28:
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

/***/ 29:
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

/***/ 3:
/*!********************************************************!*\
  !*** D:/CODE/opera_uniapp/pages.json?{"type":"style"} ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),

/***/ 30:
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

/***/ 31:
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

/***/ 32:
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

/***/ 33:
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

/***/ 34:
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

/***/ 35:
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

/***/ 36:
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

/***/ 37:
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

/***/ 38:
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

/***/ 4:
/*!*******************************************************!*\
  !*** D:/CODE/opera_uniapp/pages.json?{"type":"stat"} ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__D07ECB1"});

/***/ }),

/***/ 5:
/*!********************************************************!*\
  !*** D:/CODE/opera_uniapp/main.js?{"type":"appStyle"} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 6:
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

/***/ 7:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CODE/opera_uniapp/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL2xpYi9mb3JtYXQtbG9nLmpzPzBkZTkiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL21haW4uanM/Njc3OSIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvcGFnZXMvbG9naW4vbG9naW4ubnZ1ZT8zZDMwIiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9sb2dpbi5udnVlPzZlMjgiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLm52dWU/ZDMzYSIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvcGFnZXMvbG9naW4vbG9naW4ubnZ1ZT82NmE0IiwidW5pLWFwcDovLy9wYWdlcy9sb2dpbi9sb2dpbi5udnVlIiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9sb2dpbi5udnVlPzY1MmMiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLm52dWU/NDkyNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/ZjBjNSIsInVuaS1hcHA6Ly8vdXRpbHMvcmVwZWF0ZXIuanMiLCJ1bmktYXBwOi8vL2NvbmZpZy9jb25maWcuanMiLCJ1bmktYXBwOi8vL2hlbHBlci9oZWxwZXIuanMiLCJ1bmktYXBwOi8vL3V0aWxzL3BsYXllci5qcyIsInVuaS1hcHA6Ly8vdXRpbHMvc3RvcmFnZS5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvc29uZy5qcyIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvcGFnZXMuanNvbj82MjhmIiwidW5pLWFwcDovLy91dGlscy9yZXF1ZXN0LmpzIiwidW5pLWFwcDovLy9tb2RlbC91c2VyLmpzIiwidW5pLWFwcDovLy9tb2RlbC9wbGF5bGlzdC5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvc2VhcmNoLmpzIiwidW5pLWFwcDovLy9tb2RlbC9vdGhlci5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvYWxidW0uanMiLCJ1bmktYXBwOi8vL21vZGVsL3BlcnNvbmFsaXplZC5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvdG9wLmpzIiwidW5pLWFwcDovLy9tb2RlbC92aWRlby5qcyIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvcGFnZXMuanNvbj9hMjJkIiwid2VicGFjazovLy9EOi9DT0RFL29wZXJhX3VuaWFwcC9tYWluLmpzP2JhMDkiLCJ3ZWJwYWNrOi8vL0Q6L0NPREUvb3BlcmFfdW5pYXBwL0FwcC52dWU/MTIxZSIsIndlYnBhY2s6Ly8vRDovQ09ERS9vcGVyYV91bmlhcHAvQXBwLnZ1ZT8wMmI4Il0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJ0eXBvZiIsInMiLCJwcm90b3R5cGUiLCJzdWJzdHJpbmciLCJpc0RlYnVnTW9kZSIsIl9fY2hhbm5lbElkX18iLCJsb2ciLCJfbGVuIiwiYXJndW1lbnRzIiwiQXJyYXkiLCJfa2V5IiwiYXBwbHkiLCJmb3JtYXRMb2ciLCJzaGlmdCIsInBvcCIsIm1zZ3MiLCJtYXAiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiLCJoZWxwZXIiLCJ1c2VyIiwicGxheWxpc3QiLCJwbGF5ZXIiLCJzdG9yYWdlIiwic29uZyIsInNlYXJjaCIsIm90aGVyIiwiYWxidW0iLCJwZXJzb25hbGl6ZWQiLCJ0b3AiLCJ2aWRlbyIsInN5c3RlbUluZm8iLCJzdGF0dXNfYmFyX2hlaWdodCIsInN0YXR1c0JhckhlaWdodCIsIkhPU1QiLCJob3N0OTA5MCIsIkFQSSIsIkNFTExQSE9ORV9MT0dJTiIsIkxPR0lOX1NUQVRVUyIsIkNIRUNLX1BIT05FIiwiTE9HT1VUIiwiU0VORF9DQVBUQ0hBIiwiVkVSSUZZX0NBUFRDSEEiLCJQSE9ORV9SRUciLCJTVUJDT1VOVCIsIlVTRVJfREVUQUlMIiwiVVNFUl9QTEFZTElTVCIsIlVTRVJfTElLRV9MSVNUIiwiTElLRSIsIlBMQVlMSVNUX0RFVEFJTCIsIkFMQlVNX0RFVEFJTCIsIlNPTkciLCJMWVJJQyIsIlNPTkdfREVUQUlMIiwiSE9UX1NFQVJDSCIsIlNFQVJDSCIsIkJBTk5FUiIsIlJFQ09NTUVORF9SRVNPVVJDRSIsIlBFUlNPTkFMSVpFRF9QTEFZTElTVCIsIlBFUlNPTkFMSVpFRF9ORVdTT05HIiwiVE9QX0FMQlVNIiwiVklERU9fTElTVCIsInBsYXllZF93YXRjaCIsImNiIiwib2JqIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsInNldCIsIl9wbGF5ZWQiLCJnZXQiLCJiYWNrZ3JvdW5kZXIiLCJvcyIsIm5hbWUiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImFuZHJvaWQiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwibW92ZVRhc2tUb0JhY2siLCJ0byIsIm1vZGUiLCJuYXZpZ2F0ZVRvIiwidG9hc3QiLCJpY29uIiwidGV4dCIsImR1cmF0aW9uIiwibWFzayIsInBvc2l0aW9uIiwic2hvd1RvYXN0IiwiUGxheWVySGVscGVyIiwiZ2V0X3BsYXllciIsInNldF91cmwiLCJTdG9yYWdlIiwiZ2V0X3BsYXllZCIsInNldFN0eWxlcyIsInBsYXkiLCJwYXVzZSIsImdldF9wb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZ2V0X2R1cmF0aW9uIiwiZ2V0RHVyYXRpb24iLCJzZWVrX3RvIiwic2Vla1RvIiwicHJldiIsInBsYXllZCIsImdldF9jdXJyZW50X3BsYXlsaXN0IiwiY3VycmVudF9zb25nX2lkIiwiaWQiLCJwcmV2X2luZGV4IiwicHJldl9zb25nX2lkIiwic3RhcnQiLCJuZXh0IiwibmV4dF9pbmRleCIsIm5leHRfc29uZ19pZCIsInNvbmdfaWQiLCJTb25nIiwiZ2V0X3NvbmdfZGV0YWlsIiwic29uZ3MiLCJzb25nX25hbWUiLCJjb3Zlcl9pbWFnZSIsImFsIiwicGljVXJsIiwiY3VycmVudF9wbGF5ZWQiLCJwbGF5ZWRfbXVzaWNfaWQiLCJpc1BhdXNlZCIsIkhlbHBlciIsImdldF9zb25nX3VybCIsInJlcyIsImNyZWF0b3JzIiwiYXIiLCJjcmVhdG9yX3N0ciIsImNyZWF0b3IiLCJ0dXJuIiwibW9kdWxlIiwiZXhwb3J0cyIsIkxBVEVTVF9QTEFZRUQiLCJDVVJSRU5UX1BMQVlMSVNUIiwiSVNfTE9HSU4iLCJQTEFZX01PREUiLCJpc19sb2dpbiIsInNldF9pc19sb2dpbiIsInNldF9wbGF5ZWQiLCJzZXRfY3VycmVudF9wbGF5bGlzdCIsImdldF9wbGF5X21vZGUiLCJzZXRfcGxheV9tb2RlIiwiayIsInBhcmFtcyIsImJyIiwiY29kZSIsImdldF9seXJpYyIsImlkcyIsInN1Y2Nlc3NfY2IiLCJmYWlsZWRfY2IiLCJ1cmkiLCJlcnJNc2ciLCJoaWRlVG9hc3QiLCJwb3N0IiwidGVzdCIsIlVzZXIiLCJjaGVja19waG9uZSIsInBob25lIiwic3RhdHVzQ29kZSIsImxvZ2luIiwicGFzc3dvcmQiLCJnZXRfc3RhdHVzIiwic3RhdHVzIiwicmVnIiwiY2FwdGNoYSIsImxvZ291dCIsInNlbmRfY2FwdGNoYSIsInZlcmlmeV9jYXB0Y2hhIiwiY2hlY2tfbG9naW4iLCJnZXRfc3ViY291bnQiLCJnZXRfdXNlcl9kZXRhaWwiLCJ1aWQiLCJnZXRfcGxheWxpc3QiLCJnZXRfbGlrZWxpc3QiLCJsaWtlIiwibXVzaWNfaWQiLCJ0cyIsInRpbWVzdGFtcCIsIlBsYXlsaXN0IiwiZ2V0X3BsYXlsaXN0X2RldGFpbCIsIlNlYXJjaCIsImdldF9ob3RfbGlzdCIsImtleXdvcmQiLCJsaW1pdCIsIm9mZnNldCIsImtleXdvcmRzIiwiT3RoZXIiLCJiYW5uZXIiLCJyZWNvbW1lbmRfcmVzb3VyY2UiLCJBbGJ1bSIsImRldGFpbCIsIlBlcnNvbmFsaXplZCIsIm5ld3NvbmciLCJUb3AiLCJWaWRlbyIsImxpc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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QVAsQ0FBV3lCLFVBQXJCLENBRUExSixpQkFBUXFLLEdBQVIsQ0FBWTlLLEdBQVosRUFBaUIsRUFBQ2tOLEVBQUUsRUFBRUEsRUFBTCxFQUFqQixFQUEyQixVQUFDb0IsR0FBRCxFQUFRLENBQ2xDLElBQUkzVyxJQUFJLEdBQUcyVyxHQUFHLENBQUMzVyxJQUFmLENBQ0EsSUFBSUEsSUFBSSxDQUFDZ1ksSUFBTCxJQUFhLEdBQWpCLEVBQXNCLENBQ3JCdEYsRUFBRSxJQUFJQSxFQUFFLENBQUMxUyxJQUFELENBQVIsQ0FDQSxDQUZELE1BRU0sQ0FDTCxhQUFZLFFBQVosNEJBQ0EsQ0FDRCxDQVBELEVBUUEsQ0FYRDs7QUFnQkFpWCxNQUFNLENBQUNDLE9BQVAsR0FBaUIrRCxLQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQWUsZ0VBQUMseUI7Ozs7Ozs7Ozs7O0FDQWhCO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDOzs7Ozs7Ozs7Ozs7O0FDRDlHO0FBQUE7QUFBQTtBQUFBO0FBQTIwQixDQUFnQixrM0JBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0EvMUIsbUIiLCJmaWxlIjoicGFnZXMvbG9naW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTM4KTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxufVxuXG5mdW5jdGlvbiBpc0RlYnVnTW9kZSAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gIHJldHVybiB0eXBlb2YgX19jaGFubmVsSWRfXyA9PT0gJ3N0cmluZycgJiYgX19jaGFubmVsSWRfX1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nICh0eXBlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIHZhciB0eXBlID0gYXJncy5zaGlmdCgpXG4gIGlmIChpc0RlYnVnTW9kZSgpKSB7XG4gICAgYXJncy5wdXNoKGFyZ3MucG9wKCkucmVwbGFjZSgnYXQgJywgJ3VuaS1hcHA6Ly8vJykpXG4gICAgcmV0dXJuIGNvbnNvbGVbdHlwZV1bJ2FwcGx5J10oY29uc29sZSwgYXJncylcbiAgfVxuXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgYXJyYXldJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYgPT09IG51bGwpIHtcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZcbiAgfSlcbiAgdmFyIG1zZyA9ICcnXG5cbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xuICAgIHZhciBsYXN0TXNnID0gbXNncy5wb3AoKVxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxuXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XG4gICAgICBtc2cgKz0gbGFzdE1zZ1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbXNnID0gbXNnc1swXVxuICB9XG5cbiAgY29uc29sZVt0eXBlXShtc2cpXG59XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9sb2dpbi9sb2dpbi5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9sb2dpbi9sb2dpbidcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9sb2dpbi5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5Njk1ZTY0Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2xvZ2luLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9sb2dpbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI0YzU5OTg3MVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDT0RFL29wZXJhX3VuaWFwcC9wYWdlcy9sb2dpbi9sb2dpbi5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTk2OTVlNjQmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlXCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImxvZ29cIl0sXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiLi4vLi4vc3RhdGljL3d5eV9sb2dvLnBuZ1wiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJsb2dpbi1idXR0b25cIl0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwiZGVmYXVsdFwiLCBwbGFpbjogdHJ1ZSwgdHlwZTogXCJ3YXJuXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dpbl9ieV9waG9uZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIuaJi+acuuWPt+eZu+W9lVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cInBhZ2VcIj5cclxuXHRcdDxpbWFnZSBjbGFzcz1cImxvZ29cIiBzcmM9XCIuLi8uLi9zdGF0aWMvd3l5X2xvZ28ucG5nXCI+PC9pbWFnZT5cclxuXHRcdDxidXR0b24gQHRhcD1cImxvZ2luX2J5X3Bob25lXCIgc2l6ZT1cImRlZmF1bHRcIiBwbGFpbiB0eXBlPVwid2FyblwiIGNsYXNzPVwibG9naW4tYnV0dG9uXCI+5omL5py65Y+355m75b2VPC9idXR0b24+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0ICRyZXBlYXRlciBmcm9tICdAL3V0aWxzL3JlcGVhdGVyLmpzJztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRsb2dpbl9ieV9waG9uZSgpIHtcclxuXHRcdFx0XHQkcmVwZWF0ZXIuaGVscGVyLnRvKCcuL3Bob25lJyk7XHJcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XHJcblx0LnBhZ2Uge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcblx0fVxyXG5cdFxyXG5cdC5sb2dpbi1idXR0b24ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDU1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0Ym90dG9tOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGVmdDogMTAwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0LmxvZ28ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAzMDBycHg7XHJcblx0XHRsZWZ0OiAzMTVycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MDtcclxuXHRcdHdpZHRoOiAxMjBycHg7XHJcblx0XHRoZWlnaHQ6IDEyMHJweDtcclxuXHR9XHJcblx0XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInBhZ2VcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGMDAwMFwiXG4gIH0sXG4gIFwibG9naW4tYnV0dG9uXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcIndpZHRoXCI6IFwiNTUwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1MHJweFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMjAwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwibGVmdFwiOiBcIjEwMHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwibG9nb1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCIzMDBycHhcIixcbiAgICBcImxlZnRcIjogXCIzMTVycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MCxcbiAgICBcIndpZHRoXCI6IFwiMTIwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMjBycHhcIlxuICB9XG59IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIGlmICghb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fVxuICAgIH1cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpICYmICFoYXNPd24uY2FsbChvcHRpb25zLmNvbXBvbmVudHMsIG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcyc7XHJcblxyXG5pbXBvcnQgcGxheWVyIGZyb20gJ0AvdXRpbHMvcGxheWVyLmpzJztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQC91dGlscy9zdG9yYWdlLmpzJztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4uL21vZGVsL3VzZXIuanMnO1xyXG5pbXBvcnQgcGxheWxpc3QgZnJvbSAnLi4vbW9kZWwvcGxheWxpc3QuanMnO1xyXG5pbXBvcnQgc29uZyBmcm9tICcuLi9tb2RlbC9zb25nLmpzJztcclxuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9tb2RlbC9zZWFyY2guanMnO1xyXG5pbXBvcnQgb3RoZXIgZnJvbSAnLi4vbW9kZWwvb3RoZXIuanMnO1xyXG5pbXBvcnQgYWxidW0gZnJvbSAnLi4vbW9kZWwvYWxidW0uanMnO1xyXG5pbXBvcnQgcGVyc29uYWxpemVkIGZyb20gJy4uL21vZGVsL3BlcnNvbmFsaXplZC5qcyc7XHJcbmltcG9ydCB0b3AgZnJvbSAnLi4vbW9kZWwvdG9wLmpzJztcclxuaW1wb3J0IHZpZGVvIGZyb20gJy4uL21vZGVsL3ZpZGVvLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0eyBcclxuXHRjb25maWcsXHJcblx0aGVscGVyLFxyXG5cdHVzZXIsXHJcblx0cGxheWxpc3QsXHJcblx0cGxheWVyLFxyXG5cdHN0b3JhZ2UsXHJcblx0c29uZyxcclxuXHRzZWFyY2gsXHJcblx0b3RoZXIsXHJcblx0YWxidW0sXHJcblx0cGVyc29uYWxpemVkLFxyXG5cdHRvcCxcclxuXHR2aWRlb1xyXG59IiwiLypcclxuICogQEF1dGhvcjogeW91ciBuYW1lXHJcbiAqIEBEYXRlOiAyMDIwLTA0LTE1IDExOjQzOjU2XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDQtMTYgMjI6NTE6MzNcclxuICogQExhc3RFZGl0b3JzOiBQbGVhc2Ugc2V0IExhc3RFZGl0b3JzXHJcbiAqIEBEZXNjcmlwdGlvbjogSW4gVXNlciBTZXR0aW5ncyBFZGl0XHJcbiAqIEBGaWxlUGF0aDogXFxvcGVyYV91bmlhcHBcXGNvbmZpZ1xcY29uZmlnLmpzXHJcbiAqL1xyXG5cclxuY29uc3Qgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY29uc3Qgc3RhdHVzX2Jhcl9oZWlnaHQgPSBzeXN0ZW1JbmZvLnN0YXR1c0JhckhlaWdodDtcclxuXHJcbmNvbnN0IEhPU1QgPSAnaHR0cDovL2FwaS5jbG91ZG11c2ljLnB1bHNhdGluZy5jbjozMDAwLyc7XHJcbmNvbnN0IGhvc3Q5MDkwID0gXCJodHRwOi8vbG9jYWxob3N0OjkwOTBcIjtcclxuXHJcbmNvbnN0IEFQSSA9IHt9O1xyXG4vL+eZu+W9lVxyXG5BUEkuQ0VMTFBIT05FX0xPR0lOID0gJ2xvZ2luL2NlbGxwaG9uZSc7IC8vIOaJi+acuuWPt+eZu+W9lVxyXG5BUEkuTE9HSU5fU1RBVFVTID0gJ2xvZ2luL3N0YXR1cyc7IC8vIOeZu+mZhueKtuaAgVxyXG5BUEkuQ0hFQ0tfUEhPTkUgPSAnY2VsbHBob25lL2V4aXN0ZW5jZS9jaGVjayc7IC8vIOajgOafpeaJi+acuuWPt+aYr+WQpuazqOWGjOi/h1xyXG5BUEkuTE9HT1VUID0gJ2xvZ291dCc7IC8vIOeZu+WHulxyXG5BUEkuU0VORF9DQVBUQ0hBID0gJ2NhcHRjaGEvc2VudCc7IC8vIOWPkemAgeefreS/oemqjOivgeeggVxyXG5BUEkuVkVSSUZZX0NBUFRDSEEgPSAnY2FwdGNoYS92ZXJpZnknOyAvLyDmoLjlrp7pqozor4HnoIFcclxuQVBJLlBIT05FX1JFRyA9ICdyZWdpc3Rlci9jZWxscGhvbmUnOyAvLyDmiYvmnLrlj7fms6jlhoxcclxuLy/nlKjmiLdcclxuQVBJLlNVQkNPVU5UID0gJ3VzZXIvc3ViY291bnQnOyAvLyDnlKjmiLfnmoTmrYzljZXvvIzmlLbol4/vvIxtdiwgZGog5pWw6YePXHJcbkFQSS5VU0VSX0RFVEFJTCA9ICd1c2VyL2RldGFpbCc7IC8vIOiOt+WPlueUqOaIt+ivpuaDhVxyXG5BUEkuVVNFUl9QTEFZTElTVCA9ICd1c2VyL3BsYXlsaXN0JzsgLy8g6I635Y+W55So5oi35q2M5Y2VXHJcbkFQSS5VU0VSX0xJS0VfTElTVCA9ICdsaWtlbGlzdCc7IC8vIOiOt+WPlueUqOaIt+WWnOasoueahOmfs+S5kOWIl+ihqFxyXG5BUEkuTElLRSA9ICdsaWtlJzsgLy8g5Zac5qyi5p+Q5Liq5q2M5puyXHJcblxyXG4vLyDmrYzljZVcclxuQVBJLlBMQVlMSVNUX0RFVEFJTCA9ICdwbGF5bGlzdC9kZXRhaWwnOyAvLyDmrYzljZXor6bmg4VcclxuXHJcbi8vIOS4k+i+kVxyXG5BUEkuQUxCVU1fREVUQUlMID0gJ2FsYnVtJzsgLy/kuJPovpHor6bmg4VcclxuXHJcbi8vIOatjOabslxyXG5BUEkuU09ORyA9ICdzb25nL3VybCc7IC8v6I635Y+W5q2M5puydXJsXHJcbkFQSS5MWVJJQyA9ICdseXJpYyc7IC8v6I635Y+W5q2M6K+NXHJcbkFQSS5TT05HX0RFVEFJTCA9ICdzb25nL2RldGFpbCc7IC8v6I635Y+W5q2M5puy6K+m5oOFXHJcblxyXG4vLyDmkJzntKJcclxuQVBJLkhPVF9TRUFSQ0ggPSAnc2VhcmNoL2hvdC9kZXRhaWwnOyAvL+iOt+WPlueDreaQnFxyXG5BUEkuU0VBUkNIID0gJ3NlYXJjaCc7IC8v5pCc57SiXHJcblxyXG5cclxuLy8gT3RoZXJcclxuQVBJLkJBTk5FUiA9ICdiYW5uZXInOyAvLyDlj5HnjrDpobViYW5uZXLlm75cclxuQVBJLlJFQ09NTUVORF9SRVNPVVJDRSA9ICdyZWNvbW1lbmQvcmVzb3VyY2UnOyAvLyDmr4/ml6XmjqjojZDmrYzljZVcclxuXHJcbi8vIOengeS6uuaOqOiNkFxyXG5BUEkuUEVSU09OQUxJWkVEX1BMQVlMSVNUID0gJ3BlcnNvbmFsaXplZCc7IC8vIOaOqOiNkOatjOWNlVxyXG5BUEkuUEVSU09OQUxJWkVEX05FV1NPTkcgPSAncGVyc29uYWxpemVkL25ld3NvbmcnOyAvLyDmjqjojZDmlrDmrYxcclxuXHJcbi8vIOWQhOexu+aOkuihjHRvcFxyXG5BUEkuVE9QX0FMQlVNID0gJ3RvcC9hbGJ1bSc7IC8vIOaWsOein+S4iuaetlxyXG5cclxuLy8g6KeG6aKRXHJcbkFQSS5WSURFT19MSVNUID0gJ3ZpZGVvL2dyb3VwJzsgLy8g5oyJ5YiG57G76I635Y+W6KeG6aKR5YiX6KGoLCDpnIDnmbvlvZVcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0c3lzdGVtSW5mbywgXHJcblx0c3RhdHVzX2Jhcl9oZWlnaHQsXHJcblx0SE9TVCxcclxuXHRBUEksXHJcblx0aG9zdDkwOTBcclxufVxyXG4iLCIvL+ebkeWQrGdsb2JhbERhdGHkuK3nmoRwbGF5ZWTlsZ7mgKdcclxuZnVuY3Rpb24gcGxheWVkX3dhdGNoKGNiKSB7XHJcblx0dmFyIG9iaiA9IGdldEFwcCgpLmdsb2JhbERhdGE7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgXCJwbGF5ZWRcIiwge1xyXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxyXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdFx0Z2V0QXBwKCkuZ2xvYmFsRGF0YS5fcGxheWVkID0gdmFsdWU7XHJcblx0XHRcdGNiKHZhbHVlKTtcclxuXHRcdH0sXHJcblx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyDlj6/ku6XlnKjov5nph4zmiZPljbDkuIDkupvkuJzopb/vvIznhLblkI7lnKjlhbbku5bnlYzpnaLosIPnlKhnZXRBcHAoKS5nbG9iYWxEYXRhLnBsYXllZOeahOaXtuWAme+8jOi/memHjOWwseS8muaJp+ihjOOAglxyXG5cdFx0XHRyZXR1cm4gZ2V0QXBwKCkuZ2xvYmFsRGF0YS5fcGxheWVkO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBiYWNrZ3JvdW5kZXIoKSB7XHJcblx0bGV0IG9zID0gcGx1cy5vcy5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2FuZHJvaWQnID8gJ2FuZHJvaWQnIDogJ2lvcyc7XHJcblx0aWYgKG9zID09ICdhbmRyb2lkJykge1xyXG5cdFx0bGV0IG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0bWFpbi5tb3ZlVGFza1RvQmFjayhmYWxzZSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvKHVybCwgbW9kZSkge1xyXG5cdG1vZGUgPSBtb2RlIHx8ICduYXZpZ2F0ZV90byc7XHJcblxyXG5cclxuXHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHR1cmw6IHVybFxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9hc3QoaWNvbiwgdGV4dCwgZHVyYXRpb24sIG1hc2ssIHBvc2l0aW9uKSB7XHJcblx0ZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxNTAwO1xyXG5cdG1hc2sgPSBtYXNrIHx8IGZhbHNlO1xyXG5cdHBvc2l0aW9uID0gcG9zaXRpb24gfHwgZmFsc2U7XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRpY29uOiBpY29uLFxyXG5cdFx0dGl0bGU6IHRleHQsXHJcblx0XHRkdXJhdGlvbjogZHVyYXRpb24sXHJcblx0XHRtYXNrOiBtYXNrLFxyXG5cdFx0cG9zaXRpb246IHBvc2l0aW9uLFxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dG8sXHJcblx0dG9hc3QsXHJcblx0YmFja2dyb3VuZGVyLFxyXG5cdHBsYXllZF93YXRjaCxcclxuXHRcclxufVxyXG4iLCIvLyDlhajlsYDpn7PpopHmkq3mlL7nrqHnkIZcclxubGV0IFBsYXllckhlbHBlciA9IHt9O1xyXG5cclxuLy/ojrflj5bllK/kuIBwbGF5ZXIsIOS/neaMgXBsYXllcue7n+S4gFxyXG5mdW5jdGlvbiBnZXRfcGxheWVyKCkge1xyXG5cdHJldHVybiBnZXRBcHAoKS5nbG9iYWxEYXRhLnBsYXllcjtcclxufVxyXG5cclxuUGxheWVySGVscGVyLnNldF91cmwgPSBmdW5jdGlvbih1cmwpIHtcclxuXHRcclxuXHR1cmwgPSB1cmwgfHwgU3RvcmFnZS5nZXRfcGxheWVkKCkudXJsO1xyXG5cdC8vIGNvbnNvbGUubG9nKCdzZXRfdXJsOicgKyB1cmwpO1xyXG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XHJcblx0cGxheWVyLnNldFN0eWxlcyh7XHJcblx0XHRzcmM6IHVybFxyXG5cdH0pO1xyXG5cdFxyXG5cdHJldHVybjtcclxufVxyXG5cclxuLy9wbGF55YmN55qE5YeG5aSHXHJcbi8vIFBsYXllckhlbHBlci5zdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4vLyBcdHRoaXMuc2V0X3VybCgpO1xyXG4vLyBcdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XHJcbi8vIFx0cGxheWVyLnJlc3VtZSgpO1xyXG4vLyBcdHJldHVybjtcclxuLy8gfVxyXG5cclxuLy/nu5/kuIBwbGF55YWl5Y+jLCDnnJ/mraPnmoTmkq3mlL7lhaXlj6NcclxuUGxheWVySGVscGVyLnBsYXkgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xyXG5cdHBsYXllci5wbGF5KCgpPT57XHJcblx0XHRjb25zb2xlLmxvZygn5b2T5YmN6Z+z5LmQ5pKt5pS+5a6M5q+VJyk7XHJcblx0fSwoZSk9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHR9KTs7XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG4vKipcclxuICog5pqC5YGcXHJcbiAqIOmcgOimgXN0YXJ05ZCOLCDop6blj5FvblBsYXnkuovku7blkI4sIHBhdXNl5omN5pyJ5pWIXHJcbiAqL1xyXG5QbGF5ZXJIZWxwZXIucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xyXG5cdHBsYXllci5wYXVzZSgpO1xyXG5cdHJldHVybjtcclxufVxyXG5cclxuUGxheWVySGVscGVyLmdldF9wb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XHJcblx0cmV0dXJuIHBsYXllci5nZXRQb3NpdGlvbigpO1xyXG59XHJcblxyXG5QbGF5ZXJIZWxwZXIuZ2V0X2R1cmF0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcclxuXHRcclxuXHRyZXR1cm4gcGxheWVyLmdldER1cmF0aW9uKCk7XHJcbn1cclxuXHJcblBsYXllckhlbHBlci5zZWVrX3RvID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcclxuXHRyZXR1cm4gZ2V0X3BsYXllcigpLnNlZWtUbyhwb3NpdGlvbik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblBsYXllckhlbHBlci5wcmV2ID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgcGxheWVkID0gU3RvcmFnZS5nZXRfcGxheWVkKCk7XHJcblx0bGV0IHBsYXlsaXN0ID0gU3RvcmFnZS5nZXRfY3VycmVudF9wbGF5bGlzdCgpO1xyXG5cdGxldCBjdXJyZW50X3NvbmdfaWQgPSBwbGF5ZWQuaWQ7XHJcblx0bGV0IHByZXZfaW5kZXggPSBwbGF5bGlzdC5sZW5ndGggLSAxO1xyXG5cdFxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChjdXJyZW50X3NvbmdfaWQgPT0gcGxheWxpc3RbaV0uaWQpIHtcclxuXHRcdFx0aWYgKGkgPiAwKSB7XHJcblx0XHRcdFx0cHJldl9pbmRleCA9IGkgLSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRsZXQgcHJldl9zb25nX2lkID0gcGxheWxpc3RbcHJldl9pbmRleF0uaWQ7XHJcblx0dGhpcy5zdGFydChwcmV2X3NvbmdfaWQsIChwbGF5ZWQpPT4ge1xyXG5cdFx0Y2IgJiYgY2IocGxheWVkKVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuUGxheWVySGVscGVyLm5leHQgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCBwbGF5ZWQgPSBTdG9yYWdlLmdldF9wbGF5ZWQoKTtcclxuXHRsZXQgY3VycmVudF9zb25nX2lkID0gcGxheWVkLmlkO1xyXG5cdGxldCBwbGF5bGlzdCA9IFN0b3JhZ2UuZ2V0X2N1cnJlbnRfcGxheWxpc3QoKTtcclxuXHRcclxuXHRsZXQgbmV4dF9pbmRleCA9IDA7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5bGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGN1cnJlbnRfc29uZ19pZCA9PSBwbGF5bGlzdFtpXS5pZCkge1xyXG5cdFx0XHRpZiAoaSArIDEgPCBwbGF5bGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRuZXh0X2luZGV4ID0gaSArIDE7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnNvbGUubG9nKG5leHRfaW5kZXgpO1xyXG5cdGxldCBuZXh0X3NvbmdfaWQgPSBwbGF5bGlzdFtuZXh0X2luZGV4XS5pZDtcclxuXHR0aGlzLnN0YXJ0KG5leHRfc29uZ19pZCwgKHBsYXllZCk9PiB7XHJcblx0XHRjYiAmJiBjYihwbGF5ZWQpXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtPYmplY3R9IHNvbmdfaWRcclxuICog5Lyg5YWl5q2M5puyaWTmkq3mlL5cclxuICovXHJcblBsYXllckhlbHBlci5zdGFydCA9IGZ1bmN0aW9uKHNvbmdfaWQsIGNiKSB7XHJcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcclxuXHRsZXQgcGxheWVkID0gU3RvcmFnZS5nZXRfcGxheWVkKCk7XHJcblx0XHJcblx0U29uZy5nZXRfc29uZ19kZXRhaWwoc29uZ19pZCwgKGRhdGEpPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRsZXQgc29uZyA9IGRhdGEuc29uZ3NbMF07XHJcblx0XHRsZXQgc29uZ19uYW1lID0gc29uZy5uYW1lO1xyXG5cdFx0bGV0IGNvdmVyX2ltYWdlID0gc29uZy5hbC5waWNVcmw7XHJcblx0XHRsZXQgY3VycmVudF9wbGF5ZWQgPSBwbGF5ZWQ7XHJcblx0XHRsZXQgcGxheWVkX211c2ljX2lkID0gY3VycmVudF9wbGF5ZWQuaWQ7XHJcblx0XHRcclxuXHRcdGlmIChzb25nX2lkID09IHBsYXllZF9tdXNpY19pZCkge1xyXG5cdFx0XHQvLyDot7Povazmkq3mlL7or6bmg4XpobXlubbmkq3mlL5cclxuXHRcdFx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcclxuXHRcdFx0aWYgKHBsYXllci5pc1BhdXNlZCgpKSB7XHJcblx0XHRcdFx0cGxheWVyLnBsYXkoKCk9Pnt9LChlKT0+IHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pOztcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB0aGlzLnR1cm4oKTtcclxuXHRcdFx0SGVscGVyLnRvKCcuLi9wbGF5L3BsYXknKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRTb25nLmdldF9zb25nX3VybChzb25nX2lkLCAocmVzKT0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0bGV0IHVybCA9IHJlcy5kYXRhWzBdLnVybDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICghdXJsKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdEhlbHBlci50b2FzdCgnbm9uZScsICfkurLniLHnmoQsIOaaguaXoOivpeatjOabsui1hOa6kH4nLCAzMDAwLCBmYWxzZSwgJ2JvdHRvbScpO1xyXG5cdFx0XHRcdH0sIDEwKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGNyZWF0b3JzID0gc29uZy5hcjtcclxuXHRcdFx0bGV0IGNyZWF0b3Jfc3RyID0gJyc7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKGxldCBjcmVhdG9yIG9mIGNyZWF0b3JzKSB7XHJcblx0XHRcdFx0Y3JlYXRvcl9zdHIgPSBjcmVhdG9yX3N0ciArIGNyZWF0b3IubmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHBsYXllZCA9IHtcclxuXHRcdFx0XHRpZDogc29uZ19pZCxcclxuXHRcdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0XHRuYW1lOiBzb25nX25hbWUsXHJcblx0XHRcdFx0Y3JlYXRvcjogY3JlYXRvcl9zdHIsXHJcblx0XHRcdFx0Y292ZXJfaW1hZ2U6IGNvdmVyX2ltYWdlLFxyXG5cdFx0XHRcdC8vIHRpbWU6IDAsIC8v5LiK5qyh5pKt5pS+55qE5L2N572uXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0X3VybCh1cmwpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y2IgJiYgY2IocGxheWVkKTtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuUGxheWVySGVscGVyLnR1cm4gPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xyXG5cdGlmIChwbGF5ZXIuaXNQYXVzZWQoKSkge1xyXG5cdFx0cGxheWVyLnBsYXkoKCk9Pnt9LChlKT0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTs7XHJcblx0fWVsc2Uge1xyXG5cdFx0cGxheWVyLnBhdXNlKCk7XHJcblx0fVxyXG5cdHJldHVybjtcclxufVxyXG5cclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi4vdXRpbHMvc3RvcmFnZS5qcydcclxuaW1wb3J0IFNvbmcgZnJvbSAnLi4vbW9kZWwvc29uZy5qcyc7XHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcydcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxheWVySGVscGVyIiwiLy8g57yT5a2Y57uf5LiA566h55CGXHJcblxyXG5sZXQgU3RvcmFnZSA9IHt9XHJcblxyXG5jb25zdCBMQVRFU1RfUExBWUVEID0gJ2xhdGVzdF9wbGF5ZWQnOyAvL+acgOWQjuS4gOS4quaSreaUvuiusOW9lVxyXG5jb25zdCBDVVJSRU5UX1BMQVlMSVNUID0gJ2N1cnJlbnRfcGxheWxpc3QnOyAvLyDlvZPliY3mkq3mlL7liJfooahcclxuY29uc3QgSVNfTE9HSU4gPSAnaXNfbG9naW4nOyAvLyDnmbvlvZXnirbmgIFcclxuY29uc3QgUExBWV9NT0RFID0gJ3BsYXlfbW9kZSc7XHJcblxyXG5TdG9yYWdlLmlzX2xvZ2luID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGdldChJU19MT0dJTik7XHJcbn1cclxuXHJcblN0b3JhZ2Uuc2V0X2lzX2xvZ2luID0gZnVuY3Rpb24odikge1xyXG5cdHNldChJU19MT0dJTiwgdik7XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG5TdG9yYWdlLmdldF9wbGF5ZWQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZ2V0KExBVEVTVF9QTEFZRUQpO1xyXG59XHJcblxyXG5TdG9yYWdlLnNldF9wbGF5ZWQgPSBmdW5jdGlvbih2KSB7XHJcblx0c2V0KExBVEVTVF9QTEFZRUQsIHYpO1xyXG5cdHJldHVybjtcclxufVxyXG5TdG9yYWdlLmdldF9jdXJyZW50X3BsYXlsaXN0ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGdldChDVVJSRU5UX1BMQVlMSVNUKTtcclxufVxyXG5cclxuU3RvcmFnZS5zZXRfY3VycmVudF9wbGF5bGlzdCA9IGZ1bmN0aW9uKHYpIHtcclxuXHRzZXQoQ1VSUkVOVF9QTEFZTElTVCwgdik7XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG5TdG9yYWdlLmdldF9wbGF5X21vZGUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZ2V0KFBMQVlfTU9ERSk7XHJcbn1cclxuXHJcblN0b3JhZ2Uuc2V0X3BsYXlfbW9kZSA9IGZ1bmN0aW9uKHYpIHtcclxuXHRzZXQoUExBWV9NT0RFLCB2KTtcclxuXHRyZXR1cm47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldChrLCB2KSB7XHJcblx0dHJ5IHtcclxuXHQgICAgdW5pLnNldFN0b3JhZ2VTeW5jKGssIHYpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHQgICAgLy8gZXJyb3JcclxuXHR9XHJcblx0cmV0dXJuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoaykge1xyXG5cdHRyeSB7XHJcblx0ICAgIHJldHVybiB1bmkuZ2V0U3RvcmFnZVN5bmMoayk7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdCAgICBjb25zb2xlLmxvZyhlKTtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RvcmFnZTsiLCJsZXQgU29uZyA9IHt9O1xyXG5cclxuU29uZy5nZXRfc29uZ191cmwgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TT05HO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRpZDogaWQsXHJcblx0XHRicjogMzIwMDAwXHJcblx0fVxyXG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuU29uZy5nZXRfbHlyaWMgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MWVJJQztcclxuXHRcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0aWQ6IGlkLFxyXG5cdH1cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuU29uZy5nZXRfc29uZ19kZXRhaWwgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TT05HX0RFVEFJTDtcclxuXHRcclxuXHRsZXQgcGFyYW1zID0ge1xyXG5cdFx0aWRzOiBpZCxcclxuXHR9XHJcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0XHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTb25nOyIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImZ1bmN0aW9uIGdldCh1cmwsIHBhcmFtcywgc3VjY2Vzc19jYiwgZmFpbGVkX2NiKSB7XHJcblx0XHJcblx0aGVscGVyLnRvYXN0KCdsb2FkaW5nJywgJ+WKoOi9veS4rS4uLicsIDEwMDAwKVxyXG5cdFxyXG5cdGxldCB1cmkgPSBjb25maWcuSE9TVCArIHVybDtcclxuXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmksIFxyXG5cdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0bWV0aG9kOlwiR0VUXCIsXHJcblx0XHRzdWNjZXNzOiAocmVzKT0+e1xyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2Vzc19jYiAmJiBzdWNjZXNzX2NiKHJlcyk7XHJcblx0XHR9LFxyXG5cdFx0ZmFpbDoocmVzKSA9PiB7XHJcblx0XHRcdGZhaWxlZF9jYiAmJiBmYWlsZWRfY2IocmVzKTtcclxuXHRcdCAgICBjb25zb2xlLmxvZygncmVxdWVzdF9mYWlsOnVybDonICsgdXJsICsgJyA7ICcgKyAnZXJyTXNnOicgKyByZXMuZXJyTXNnKTtcclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZTogKCk9PiB7XHJcblx0XHRcdHVuaS5oaWRlVG9hc3QoKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSBcclxuXHJcbmZ1bmN0aW9uIHBvc3QodXJsLCBwYXJhbXMsIHN1Y2Nlc3NfY2IsIGZhaWxlZF9jYikge1xyXG5cdFxyXG5cdGhlbHBlci50b2FzdCgnbG9hZGluZycsICfliqDovb3kuK0uLi4nLCAxMDAwMClcclxuXHRcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IGNvbmZpZy5IT1NUICsgdXJsLCBcclxuXHRcdGRhdGE6IHBhcmFtcyxcclxuXHRcdG1ldGhvZDpcIlBPU1RcIiwgICBcclxuXHRcdHN1Y2Nlc3M6IChyZXMpPT57XHJcblx0XHRcdHN1Y2Nlc3NfY2IgJiYgc3VjY2Vzc19jYihyZXMpO1xyXG5cdFx0fSxcclxuXHRcdGZhaWw6KHJlcykgPT4ge1xyXG5cdFx0ICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0X2ZhaWw6dXJsOicgKyB1cmwgKyAnIDsgJyArICdlcnJNc2c6JyArIHJlcy5lcnJNc2cpO1xyXG5cdFx0XHRmYWlsZWRfY2IgJiYgZmFpbGVkX2NiKHJlcyk7XHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6ICgpPT4ge1xyXG5cdFx0XHR1bmkuaGlkZVRvYXN0KCk7XHJcblx0XHR9XHJcblx0fSkgICBcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuXHQvLzExMS4xMy4xMDAuOTJcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0ICAgIHVybDogJ2h0dHBzOi8vd3d3LmJhaWR1LmNvbS8nLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdCAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0ICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0ICAgIH1cclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuXHRnZXQsXHJcblx0cG9zdCxcclxuXHR0ZXN0XHJcbn0iLCJsZXQgVXNlciA9IHt9O1xyXG5cclxuVXNlci5jaGVja19waG9uZSA9IGZ1bmN0aW9uKHBob25lLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkNIRUNLX1BIT05FO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRwaG9uZTogcGhvbmVcclxuXHR9XHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0XHJcblx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKHJlcy5kYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy/nmbvpmYZcclxuVXNlci5sb2dpbiA9IGZ1bmN0aW9uKHBob25lLCBwYXNzd29yZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5DRUxMUEhPTkVfTE9HSU47XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHBob25lOiBwaG9uZSxcclxuXHRcdHBhc3N3b3JkOiBwYXNzd29yZFxyXG5cdH1cclxuXHRcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRpZiAocmVzLmRhdGEpIHtcclxuXHRcdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdGdldF9zdGF0dXMoKHN0YXR1cyk9PiB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGNiICYmIGNiKHN0YXR1cyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRoZWxwZXIudG9hc3QoJ25vbmUnLCBkYXRhLm1zZywgMzAwMCwgZmFsc2UsICdib3R0b20nKTtcclxuXHRcdFx0fVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuVXNlci5yZWcgPSBmdW5jdGlvbihwaG9uZSwgcGFzc3dvcmQsIGNhcHRjaGEsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUEhPTkVfUkVHO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRwaG9uZTogcGhvbmUsXHJcblx0XHRwYXNzd29yZDogcGFzc3dvcmQsXHJcblx0XHRjYXB0Y2hhOiBjYXB0Y2hhXHJcblx0fVxyXG5cdFxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0Y2IgJiYgY2IocmVzLmRhdGEpXHJcblx0fSlcclxufVxyXG5cclxuVXNlci5sb2dvdXQgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkxPR09VVDtcclxuXHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCB7fSwgKHJlcyk9PiB7XHJcblx0XHRcclxuXHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IocmVzLmRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5Vc2VyLnNlbmRfY2FwdGNoYSA9IGZ1bmN0aW9uKHBob25lLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNFTkRfQ0FQVENIQTtcclxuXHRcclxuXHRcclxuXHRyZXF1ZXN0LnBvc3QodXJsLCB7cGhvbmU6IHBob25lfSwgKHJlcyk9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0Y2IgJiYgY2IocmVzLmRhdGEpXHJcblx0fSlcclxufVxyXG5Vc2VyLnZlcmlmeV9jYXB0Y2hhID0gZnVuY3Rpb24ocGhvbmUsIGNhcHRjaGEsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVkVSSUZZX0NBUFRDSEE7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHBob25lOiBwaG9uZSxcclxuXHRcdGNhcHRjaGE6IGNhcHRjaGFcclxuXHR9XHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdGNiICYmIGNiKHJlcy5kYXRhKVxyXG5cdH0pXHJcbn1cclxuXHJcbi8v55m75b2V5qOA5p+lXHJcblVzZXIuY2hlY2tfbG9naW4gPSBmdW5jdGlvbihjYikge1xyXG5cdFxyXG5cdGdldF9zdGF0dXMoKHJlcyk9PiB7XHJcblx0XHRjYiAmJiBjYihyZXMpO1xyXG5cdH0pXHJcbn1cclxuXHJcbi8v6I635Y+W55So5oi3bXYs5q2M5Y2VLCBkaiwg5pS26JeP5pWw6YePXHJcblVzZXIuZ2V0X3N1YmNvdW50ID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5TVUJDT1VOVDtcclxuXHRcclxuXHRyZXF1ZXN0LnBvc3QodXJsLCB7fSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0Y2IgJiYgY2IoZGF0YSk7XHJcblx0fSlcclxufVxyXG5cclxuLy/ojrflj5bnlKjmiLfotYTmlplcclxuVXNlci5nZXRfdXNlcl9kZXRhaWwgPSBmdW5jdGlvbih1aWQsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVVNFUl9ERVRBSUw7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHVpZDogdWlkXHJcblx0fVxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8v6I635Y+W55So5oi35q2M5Y2V5YiX6KGoXHJcblVzZXIuZ2V0X3BsYXlsaXN0ID0gZnVuY3Rpb24odWlkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlVTRVJfUExBWUxJU1Q7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdHVpZDogdWlkXHJcblx0fVxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblVzZXIuZ2V0X2xpa2VsaXN0ID0gZnVuY3Rpb24odWlkLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlVTRVJfTElLRV9MSVNUO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHR1aWQ6IHVpZFxyXG5cdH1cclxuXHRyZXF1ZXN0LnBvc3QodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5Vc2VyLmxpa2UgPSBmdW5jdGlvbihtdXNpY19pZCwgbGlrZSwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MSUtFO1xyXG5cdGxldCBwYXJhbXMgPSB7XHJcblx0XHRpZDogbXVzaWNfaWQsXHJcblx0XHRsaWtlOiBsaWtlXHJcblx0fVxyXG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8v6I635Y+W55So5oi354q25oCBXHJcbmZ1bmN0aW9uIGdldF9zdGF0dXMoY2IpIHtcclxuXHRsZXQgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MT0dJTl9TVEFUVVM7XHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCB7dGltZXN0YW1wOiB0c30sIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHRcdFxyXG5cdFx0aWYgKGRhdGEgJiYgZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn6I635Y+W54q25oCB5aSx6LSlJyk7XHJcblx0XHRcdGNiICYmIGNiKGZhbHNlKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXIuanMnO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcjsiLCJsZXQgUGxheWxpc3QgPSB7fTtcclxuXHJcblBsYXlsaXN0LmdldF9wbGF5bGlzdF9kZXRhaWwgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5QTEFZTElTVF9ERVRBSUw7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdGlkOiBpZFxyXG5cdH1cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5bGlzdDsiLCJsZXQgU2VhcmNoID0ge307XHJcblxyXG5TZWFyY2guZ2V0X2hvdF9saXN0ID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5IT1RfU0VBUkNIO1xyXG5cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHt9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4vKipcclxuICog5Y2V6aG55pCc57SiXHJcbiAqIOatpOaOpeWPo3Bvc3TmlrnlvI/mnInpl67popgsIOWIhumhteWPguaVsOaXoOaViFxyXG4gKiBcclxuICog5b+F6YCJ5Y+C5pWwOiBcclxuICoga2V5d29yZHM6IOWFs+mUruivjVxyXG4gKiBcclxuICog5Y+v6YCJ5Y+C5pWwOiBcclxuICogbGltaXQgOiDov5Tlm57mlbDph48gLCDpu5jorqTkuLogMzAgXHJcbiAqIG9mZnNldCA6IOWBj+enu+aVsOmHj++8jOeUqOS6juWIhumhtSAsIOWmgiA6IOWmgiA6KCDpobXmlbAgLTEpKjMwLCDlhbbkuK0gMzAg5Li6IGxpbWl0IOeahOWAvCAsIOm7mOiupOS4uiAwXHJcbiAqIHR5cGU6IOaQnOe0ouexu+Wei++8m+m7mOiupOS4uiAxIOWNs+WNleabsiAsIOWPluWAvOaEj+S5iSA6IDE6IOWNleabsiwgMTA6IOS4k+i+kSwgMTAwOiDmrYzmiYssIDEwMDA6IOatjOWNlSwgMTAwMjog55So5oi3LCAxMDA0OiBNViwgMTAwNjog5q2M6K+NLCAxMDA5OiDnlLXlj7AsIDEwMTQ6IOinhumikSwgMTAxODrnu7zlkIhcclxuICovXHJcblNlYXJjaC5zZWFyY2ggPSBmdW5jdGlvbihrZXl3b3JkLCB0eXBlLCBwYWdlLCBjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNFQVJDSDtcclxuXHRsZXQgbGltaXQgPSAxMDtcclxuXHRsZXQgb2Zmc2V0ID0gcGFnZSAqIGxpbWl0O1xyXG5cdHR5cGUgPSB0eXBlIHx8IDE7XHJcblx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdGtleXdvcmRzOiBrZXl3b3JkLFxyXG5cdFx0bGltaXQ6IGxpbWl0LFxyXG5cdFx0b2Zmc2V0OiBvZmZzZXQsXHJcblx0XHR0eXBlOiB0eXBlXHJcblx0fVxyXG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoOyIsImxldCBPdGhlciA9IHt9O1xyXG5cclxuT3RoZXIuYmFubmVyID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5CQU5ORVI7XHJcblxyXG5cdHJlcXVlc3QuZ2V0KHVybCwge3R5cGU6IDF9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4vLyDpnIDnmbvpmYblkI7osIPnlKhcclxuT3RoZXIucmVjb21tZW5kX3Jlc291cmNlID0gZnVuY3Rpb24oY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5SRUNPTU1FTkRfUkVTT1VSQ0U7XHJcblx0XHJcblx0cmVxdWVzdC5nZXQodXJsLCB7fSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE90aGVyOyIsImxldCBBbGJ1bSA9IHt9O1xyXG5cclxuQWxidW0uZGV0YWlsID0gZnVuY3Rpb24oaWQsIGNiKSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuQUxCVU1fREVUQUlMO1xyXG5cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHtpZDogaWR9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWxidW07IiwibGV0IFBlcnNvbmFsaXplZCA9IHt9O1xyXG5cclxuUGVyc29uYWxpemVkLnBsYXlsaXN0ID0gZnVuY3Rpb24oY2IsIGxpbWl0KSB7XHJcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUEVSU09OQUxJWkVEX1BMQVlMSVNUO1xyXG5cdGxpbWl0ID0gbGltaXQgfHwgMTA7XHJcblx0cmVxdWVzdC5nZXQodXJsLCB7bGltaXQ6IGxpbWl0fSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuUGVyc29uYWxpemVkLm5ld3NvbmcgPSBmdW5jdGlvbihjYikge1xyXG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlBFUlNPTkFMSVpFRF9ORVdTT05HO1xyXG5cdHJlcXVlc3QuZ2V0KHVybCwge30sIChyZXMpPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQZXJzb25hbGl6ZWQ7IiwibGV0IFRvcCA9IHt9O1xyXG5cclxuVG9wLmFsYnVtID0gZnVuY3Rpb24oY2IsIGxpbWl0LCBvZmZzZXQpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5UT1BfQUxCVU07XHJcblx0bGltaXQgPSBsaW1pdCB8fCAxMDtcclxuXHRvZmZzZXQgPSBvZmZzZXQgfHwgMDtcclxuXHRyZXF1ZXN0LmdldCh1cmwsIHtsaW1pdDogbGltaXQsIG9mZnNldDogb2Zmc2V0fSwgKHJlcyk9PiB7XHJcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRjYiAmJiBjYihkYXRhKVxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRvcDsiLCJsZXQgVmlkZW8gPSB7fTtcclxuXHJcblZpZGVvLmxpc3QgPSBmdW5jdGlvbihpZCwgY2IpIHtcclxuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5WSURFT19MSVNUO1xyXG5cclxuXHRyZXF1ZXN0LmdldCh1cmwsIHtpZDogaWR9LCAocmVzKT0+IHtcclxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdGNiICYmIGNiKGRhdGEpXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVmlkZW87IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX19EMDdFQ0IxXCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYLjEuNy4wLjIwMTkwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC4xLjcuMC4yMDE5MDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclguMS43LjAuMjAxOTAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge30iXSwic291cmNlUm9vdCI6IiJ9