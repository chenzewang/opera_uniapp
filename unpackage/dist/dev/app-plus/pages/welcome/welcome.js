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
/******/ 	return __webpack_require__(__webpack_require__.s = 261);
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

/***/ 25:
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

/***/ 26:
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

/***/ 261:
/*!***********************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/main.js?{"page":"pages%2Fwelcome%2Fwelcome"} ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_welcome_welcome_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/welcome/welcome.nvue?mpType=page */ 262);

        
        
        
        _pages_welcome_welcome_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_welcome_welcome_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/welcome/welcome'
        _pages_welcome_welcome_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_welcome_welcome_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 262:
/*!*****************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/welcome/welcome.nvue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _welcome_nvue_vue_type_template_id_4f76689c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.nvue?vue&type=template&id=4f76689c&scoped=true&mpType=page */ 263);
/* harmony import */ var _welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.nvue?vue&type=script&lang=js&mpType=page */ 265);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./welcome.nvue?vue&type=style&index=0&id=4f76689c&scoped=true&lang=css&mpType=page */ 267).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./welcome.nvue?vue&type=style&index=0&id=4f76689c&scoped=true&lang=css&mpType=page */ 267).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _welcome_nvue_vue_type_template_id_4f76689c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _welcome_nvue_vue_type_template_id_4f76689c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f76689c",
  "433d8957",
  false,
  _welcome_nvue_vue_type_template_id_4f76689c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/opera_uniapp-master/pages/welcome/welcome.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 263:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/welcome/welcome.nvue?vue&type=template&id=4f76689c&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_template_id_4f76689c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./welcome.nvue?vue&type=template&id=4f76689c&scoped=true&mpType=page */ 264);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_template_id_4f76689c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_template_id_4f76689c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_template_id_4f76689c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_template_id_4f76689c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 264:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/pages/welcome/welcome.nvue?vue&type=template&id=4f76689c&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            staticStyle: {
              position: "absolute",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0"
            },
            attrs: { src: "../../static/run.png" }
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

/***/ 265:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/welcome/welcome.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./welcome.nvue?vue&type=script&lang=js&mpType=page */ 266);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 266:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/pages/welcome/welcome.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






var _wyyIcon = _interopRequireDefault(__webpack_require__(/*! ../../components/wyy-icon/wyy-icon.nvue */ 45));


var _repeater = _interopRequireDefault(__webpack_require__(/*! @/utils/repeater.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
var _default = { data: function data() {return {};},
  components: {
    wyyIcon: _wyyIcon.default },

  created: function created() {
    this.check_login();
  },

  methods: {
    check_login: function check_login() {var _this = this;
      _repeater.default.user.check_login(function (user_status) {
        __f__("log", user_status, " at pages\\welcome\\welcome.nvue:28");
        if (user_status && _repeater.default.storage.is_login()) {// 已登录
          var uid = user_status.profile.userId;
          _this.$store.commit('set_uid', uid);

          setTimeout(function () {
            uni.redirectTo({
              url: '../index/index' });

          }, 1500);

        } else {// 未登录
          setTimeout(function () {
            uni.redirectTo({
              url: '../login/login' });

          }, 1500);
        }

      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)["default"]))

/***/ }),

/***/ 267:
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages/welcome/welcome.nvue?vue&type=style&index=0&id=4f76689c&scoped=true&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_style_index_0_id_4f76689c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Downloads/HBuilderX.2.6.1.20200226.full/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./welcome.nvue?vue&type=style&index=0&id=4f76689c&scoped=true&lang=css&mpType=page */ 268);
/* harmony import */ var _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_style_index_0_id_4f76689c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_style_index_0_id_4f76689c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_style_index_0_id_4f76689c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_style_index_0_id_4f76689c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_1_20200226_full_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_welcome_nvue_vue_type_style_index_0_id_4f76689c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 268:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/86159/Desktop/opera_uniapp-master/pages/welcome/welcome.nvue?vue&type=style&index=0&id=4f76689c&scoped=true&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wyy-main-color": {
    "backgroundColor": "rgba(218,45,30,1)"
  },
  "wyy-bg-color": {
    "backgroundColor": "rgba(255,255,255,1)"
  },
  "wyy-refresh": {
    "width": "750rpx",
    "alignItems": "center"
  },
  "wyy-indicator-text": {
    "color": "#888888",
    "fontSize": "42rpx",
    "textAlign": "center"
  },
  "wyy-loading-indicator": {
    "backgroundColor": "#FFFFFF",
    "paddingTop": "15rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "15rpx",
    "borderRadius": 50,
    "height": "60rpx",
    "width": "60rpx",
    "color": "#FF0000"
  },
  "wyy-loading": {
    "width": "750rpx",
    "alignItems": "center"
  },
  "page": {
    "flex": 1
  },
  "container": {
    "marginTop": "200rpx",
    "width": "750rpx",
    "height": "300rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "slogan": {
    "fontSize": "80rpx",
    "fontWeight": "bold",
    "color": "#FFFFFF"
  },
  "footer": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "flexDirection": "row",
    "width": "750rpx",
    "height": "80rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "cycle": {
    "borderRadius": "100rpx",
    "width": "30rpx",
    "height": "30rpx",
    "backgroundColor": "#FFFFFF",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "10rpx"
  },
  "footer-text": {
    "fontSize": "26rpx",
    "color": "#FFFFFF"
  }
}

/***/ }),

/***/ 27:
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

/***/ 28:
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

/***/ 29:
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

/***/ 3:
/*!******************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages.json?{"type":"style"} ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),

/***/ 30:
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

/***/ 31:
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

/***/ 32:
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

/***/ 33:
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

/***/ 34:
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

/***/ 35:
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

/***/ 36:
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

/***/ 37:
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

/***/ 38:
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

/***/ 4:
/*!*****************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/pages.json?{"type":"stat"} ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__D07ECB1"});

/***/ }),

/***/ 45:
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

/***/ 46:
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

/***/ 47:
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

/***/ 48:
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

/***/ 49:
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

/***/ 5:
/*!******************************************************************************!*\
  !*** C:/Users/86159/Desktop/opera_uniapp-master/main.js?{"type":"appStyle"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 50:
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

/***/ 51:
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

/***/ 6:
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

/***/ 7:
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL2xpYi9mb3JtYXQtbG9nLmpzPzBkZTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ1bmktYXBwOi8vL3V0aWxzL3JlcGVhdGVyLmpzIiwidW5pLWFwcDovLy9jb25maWcvY29uZmlnLmpzIiwidW5pLWFwcDovLy9oZWxwZXIvaGVscGVyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvbWFpbi5qcz84NzRlIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMvd2VsY29tZS93ZWxjb21lLm52dWU/MTJmYiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5udnVlPzI2ODMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9wYWdlcy93ZWxjb21lL3dlbGNvbWUubnZ1ZT9jODMwIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMvd2VsY29tZS93ZWxjb21lLm52dWU/NDM3NyIsInVuaS1hcHA6Ly8vcGFnZXMvd2VsY29tZS93ZWxjb21lLm52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9wYWdlcy93ZWxjb21lL3dlbGNvbWUubnZ1ZT9iNWUzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMvd2VsY29tZS93ZWxjb21lLm52dWU/ZTVkNyIsInVuaS1hcHA6Ly8vdXRpbHMvcGxheWVyLmpzIiwidW5pLWFwcDovLy91dGlscy9zdG9yYWdlLmpzIiwidW5pLWFwcDovLy9tb2RlbC9zb25nLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMuanNvbj9hOTkzIiwidW5pLWFwcDovLy91dGlscy9yZXF1ZXN0LmpzIiwidW5pLWFwcDovLy9tb2RlbC91c2VyLmpzIiwidW5pLWFwcDovLy9tb2RlbC9wbGF5bGlzdC5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvc2VhcmNoLmpzIiwidW5pLWFwcDovLy9tb2RlbC9vdGhlci5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvYWxidW0uanMiLCJ1bmktYXBwOi8vL21vZGVsL3BlcnNvbmFsaXplZC5qcyIsInVuaS1hcHA6Ly8vbW9kZWwvdG9wLmpzIiwidW5pLWFwcDovLy9tb2RlbC92aWRlby5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL3BhZ2VzLmpzb24/Yzk1OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZT9iNzRkIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvY29tcG9uZW50cy93eXktaWNvbi93eXktaWNvbi5udnVlP2U0YWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3d5eS1pY29uL3d5eS1pY29uLm52dWU/Mzc0OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZT9hZTc0IiwidW5pLWFwcDovLy9jb21wb25lbnRzL3d5eS1pY29uL3d5eS1pY29uLm52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9tYWluLmpzPzA0NzgiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU5L0Rlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3d5eS1pY29uL3d5eS1pY29uLm52dWU/M2ZkMyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTkvRGVza3RvcC9vcGVyYV91bmlhcHAtbWFzdGVyL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZT8xYjE3Iiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvQXBwLnZ1ZT83MmMzIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1OS9EZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvQXBwLnZ1ZT9hNmU3Il0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJ0eXBvZiIsInMiLCJwcm90b3R5cGUiLCJzdWJzdHJpbmciLCJpc0RlYnVnTW9kZSIsIl9fY2hhbm5lbElkX18iLCJsb2ciLCJfbGVuIiwiYXJndW1lbnRzIiwiQXJyYXkiLCJfa2V5IiwiYXBwbHkiLCJmb3JtYXRMb2ciLCJzaGlmdCIsInBvcCIsIm1zZ3MiLCJtYXAiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiLCJoZWxwZXIiLCJ1c2VyIiwicGxheWxpc3QiLCJwbGF5ZXIiLCJzdG9yYWdlIiwic29uZyIsInNlYXJjaCIsIm90aGVyIiwiYWxidW0iLCJwZXJzb25hbGl6ZWQiLCJ0b3AiLCJ2aWRlbyIsInN5c3RlbUluZm8iLCJzdGF0dXNfYmFyX2hlaWdodCIsInN0YXR1c0JhckhlaWdodCIsIkhPU1QiLCJBUEkiLCJDRUxMUEhPTkVfTE9HSU4iLCJMT0dJTl9TVEFUVVMiLCJDSEVDS19QSE9ORSIsIkxPR09VVCIsIlNFTkRfQ0FQVENIQSIsIlZFUklGWV9DQVBUQ0hBIiwiUEhPTkVfUkVHIiwiU1VCQ09VTlQiLCJVU0VSX0RFVEFJTCIsIlVTRVJfUExBWUxJU1QiLCJVU0VSX0xJS0VfTElTVCIsIkxJS0UiLCJQTEFZTElTVF9ERVRBSUwiLCJBTEJVTV9ERVRBSUwiLCJTT05HIiwiTFlSSUMiLCJTT05HX0RFVEFJTCIsIkhPVF9TRUFSQ0giLCJTRUFSQ0giLCJCQU5ORVIiLCJSRUNPTU1FTkRfUkVTT1VSQ0UiLCJQRVJTT05BTElaRURfUExBWUxJU1QiLCJQRVJTT05BTElaRURfTkVXU09ORyIsIlRPUF9BTEJVTSIsIlZJREVPX0xJU1QiLCJwbGF5ZWRfd2F0Y2giLCJjYiIsIm9iaiIsImdldEFwcCIsImdsb2JhbERhdGEiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJzZXQiLCJfcGxheWVkIiwiZ2V0IiwiYmFja2dyb3VuZGVyIiwib3MiLCJuYW1lIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJhbmRyb2lkIiwicnVudGltZU1haW5BY3Rpdml0eSIsIm1vdmVUYXNrVG9CYWNrIiwidG8iLCJtb2RlIiwibmF2aWdhdGVUbyIsInRvYXN0IiwiaWNvbiIsInRleHQiLCJkdXJhdGlvbiIsIm1hc2siLCJwb3NpdGlvbiIsInNob3dUb2FzdCIsIlBsYXllckhlbHBlciIsImdldF9wbGF5ZXIiLCJzZXRfdXJsIiwiU3RvcmFnZSIsImdldF9wbGF5ZWQiLCJzZXRTdHlsZXMiLCJwbGF5IiwicGF1c2UiLCJnZXRfcG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImdldF9kdXJhdGlvbiIsImdldER1cmF0aW9uIiwic2Vla190byIsInNlZWtUbyIsInByZXYiLCJwbGF5ZWQiLCJnZXRfY3VycmVudF9wbGF5bGlzdCIsImN1cnJlbnRfc29uZ19pZCIsImlkIiwicHJldl9pbmRleCIsInByZXZfc29uZ19pZCIsInN0YXJ0IiwibmV4dCIsIm5leHRfaW5kZXgiLCJuZXh0X3NvbmdfaWQiLCJzb25nX2lkIiwiU29uZyIsImdldF9zb25nX2RldGFpbCIsInNvbmdzIiwic29uZ19uYW1lIiwiY292ZXJfaW1hZ2UiLCJhbCIsInBpY1VybCIsImN1cnJlbnRfcGxheWVkIiwicGxheWVkX211c2ljX2lkIiwiaXNQYXVzZWQiLCJIZWxwZXIiLCJnZXRfc29uZ191cmwiLCJyZXMiLCJjcmVhdG9ycyIsImFyIiwiY3JlYXRvcl9zdHIiLCJjcmVhdG9yIiwidHVybiIsIm1vZHVsZSIsImV4cG9ydHMiLCJMQVRFU1RfUExBWUVEIiwiQ1VSUkVOVF9QTEFZTElTVCIsIklTX0xPR0lOIiwiUExBWV9NT0RFIiwiaXNfbG9naW4iLCJzZXRfaXNfbG9naW4iLCJzZXRfcGxheWVkIiwic2V0X2N1cnJlbnRfcGxheWxpc3QiLCJnZXRfcGxheV9tb2RlIiwic2V0X3BsYXlfbW9kZSIsImsiLCJwYXJhbXMiLCJiciIsImNvZGUiLCJnZXRfbHlyaWMiLCJpZHMiLCJzdWNjZXNzX2NiIiwiZmFpbGVkX2NiIiwidXJpIiwiZXJyTXNnIiwiaGlkZVRvYXN0IiwicG9zdCIsInRlc3QiLCJVc2VyIiwiY2hlY2tfcGhvbmUiLCJwaG9uZSIsInN0YXR1c0NvZGUiLCJsb2dpbiIsInBhc3N3b3JkIiwiZ2V0X3N0YXR1cyIsInN0YXR1cyIsInJlZyIsImNhcHRjaGEiLCJsb2dvdXQiLCJzZW5kX2NhcHRjaGEiLCJ2ZXJpZnlfY2FwdGNoYSIsImNoZWNrX2xvZ2luIiwiZ2V0X3N1YmNvdW50IiwiZ2V0X3VzZXJfZGV0YWlsIiwidWlkIiwiZ2V0X3BsYXlsaXN0IiwiZ2V0X2xpa2VsaXN0IiwibGlrZSIsIm11c2ljX2lkIiwidHMiLCJ0aW1lc3RhbXAiLCJQbGF5bGlzdCIsImdldF9wbGF5bGlzdF9kZXRhaWwiLCJTZWFyY2giLCJnZXRfaG90X2xpc3QiLCJrZXl3b3JkIiwibGltaXQiLCJvZmZzZXQiLCJrZXl3b3JkcyIsIk90aGVyIiwiYmFubmVyIiwicmVjb21tZW5kX3Jlc291cmNlIiwiQWxidW0iLCJkZXRhaWwiLCJQZXJzb25hbGl6ZWQiLCJuZXdzb25nIiwiVG9wIiwiVmlkZW8iLCJsaXN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFD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Ozs7Ozs7Ozs7OztBQ0EzbEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFraUMsQ0FBZ0IseWtDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBdGpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy93ZWxjb21lL3dlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYxKTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxufVxuXG5mdW5jdGlvbiBpc0RlYnVnTW9kZSAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gIHJldHVybiB0eXBlb2YgX19jaGFubmVsSWRfXyA9PT0gJ3N0cmluZycgJiYgX19jaGFubmVsSWRfX1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nICh0eXBlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIHZhciB0eXBlID0gYXJncy5zaGlmdCgpXG4gIGlmIChpc0RlYnVnTW9kZSgpKSB7XG4gICAgYXJncy5wdXNoKGFyZ3MucG9wKCkucmVwbGFjZSgnYXQgJywgJ3VuaS1hcHA6Ly8vJykpXG4gICAgcmV0dXJuIGNvbnNvbGVbdHlwZV1bJ2FwcGx5J10oY29uc29sZSwgYXJncylcbiAgfVxuXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgYXJyYXldJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYgPT09IG51bGwpIHtcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZcbiAgfSlcbiAgdmFyIG1zZyA9ICcnXG5cbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xuICAgIHZhciBsYXN0TXNnID0gbXNncy5wb3AoKVxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxuXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XG4gICAgICBtc2cgKz0gbGFzdE1zZ1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbXNnID0gbXNnc1swXVxuICB9XG5cbiAgY29uc29sZVt0eXBlXShtc2cpXG59XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcyc7XG5cbmltcG9ydCBwbGF5ZXIgZnJvbSAnQC91dGlscy9wbGF5ZXIuanMnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQC91dGlscy9zdG9yYWdlLmpzJztcblxuaW1wb3J0IHVzZXIgZnJvbSAnLi4vbW9kZWwvdXNlci5qcyc7XG5pbXBvcnQgcGxheWxpc3QgZnJvbSAnLi4vbW9kZWwvcGxheWxpc3QuanMnO1xuaW1wb3J0IHNvbmcgZnJvbSAnLi4vbW9kZWwvc29uZy5qcyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uL21vZGVsL3NlYXJjaC5qcyc7XG5pbXBvcnQgb3RoZXIgZnJvbSAnLi4vbW9kZWwvb3RoZXIuanMnO1xuaW1wb3J0IGFsYnVtIGZyb20gJy4uL21vZGVsL2FsYnVtLmpzJztcbmltcG9ydCBwZXJzb25hbGl6ZWQgZnJvbSAnLi4vbW9kZWwvcGVyc29uYWxpemVkLmpzJztcbmltcG9ydCB0b3AgZnJvbSAnLi4vbW9kZWwvdG9wLmpzJztcbmltcG9ydCB2aWRlbyBmcm9tICcuLi9tb2RlbC92aWRlby5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0eyBcblx0Y29uZmlnLFxuXHRoZWxwZXIsXG5cdHVzZXIsXG5cdHBsYXlsaXN0LFxuXHRwbGF5ZXIsXG5cdHN0b3JhZ2UsXG5cdHNvbmcsXG5cdHNlYXJjaCxcblx0b3RoZXIsXG5cdGFsYnVtLFxuXHRwZXJzb25hbGl6ZWQsXG5cdHRvcCxcblx0dmlkZW9cbn0iLCJcbmNvbnN0IHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblxuY29uc3Qgc3RhdHVzX2Jhcl9oZWlnaHQgPSBzeXN0ZW1JbmZvLnN0YXR1c0JhckhlaWdodDtcblxuY29uc3QgSE9TVCA9ICdodHRwOi8vYXBpLmNsb3VkbXVzaWMucHVsc2F0aW5nLmNuOjMwMDAvJztcblxuY29uc3QgQVBJID0ge307XG4vL+eZu+W9lVxuQVBJLkNFTExQSE9ORV9MT0dJTiA9ICdsb2dpbi9jZWxscGhvbmUnOyAvLyDmiYvmnLrlj7fnmbvlvZVcbkFQSS5MT0dJTl9TVEFUVVMgPSAnbG9naW4vc3RhdHVzJzsgLy8g55m76ZmG54q25oCBXG5BUEkuQ0hFQ0tfUEhPTkUgPSAnY2VsbHBob25lL2V4aXN0ZW5jZS9jaGVjayc7IC8vIOajgOafpeaJi+acuuWPt+aYr+WQpuazqOWGjOi/h1xuQVBJLkxPR09VVCA9ICdsb2dvdXQnOyAvLyDnmbvlh7pcbkFQSS5TRU5EX0NBUFRDSEEgPSAnY2FwdGNoYS9zZW50JzsgLy8g5Y+R6YCB55+t5L+h6aqM6K+B56CBXG5BUEkuVkVSSUZZX0NBUFRDSEEgPSAnY2FwdGNoYS92ZXJpZnknOyAvLyDmoLjlrp7pqozor4HnoIFcbkFQSS5QSE9ORV9SRUcgPSAncmVnaXN0ZXIvY2VsbHBob25lJzsgLy8g5omL5py65Y+35rOo5YaMXG4vL+eUqOaIt1xuQVBJLlNVQkNPVU5UID0gJ3VzZXIvc3ViY291bnQnOyAvLyDnlKjmiLfnmoTmrYzljZXvvIzmlLbol4/vvIxtdiwgZGog5pWw6YePXG5BUEkuVVNFUl9ERVRBSUwgPSAndXNlci9kZXRhaWwnOyAvLyDojrflj5bnlKjmiLfor6bmg4VcbkFQSS5VU0VSX1BMQVlMSVNUID0gJ3VzZXIvcGxheWxpc3QnOyAvLyDojrflj5bnlKjmiLfmrYzljZVcbkFQSS5VU0VSX0xJS0VfTElTVCA9ICdsaWtlbGlzdCc7IC8vIOiOt+WPlueUqOaIt+WWnOasoueahOmfs+S5kOWIl+ihqFxuQVBJLkxJS0UgPSAnbGlrZSc7IC8vIOWWnOasouafkOS4quatjOabslxuXG4vLyDmrYzljZVcbkFQSS5QTEFZTElTVF9ERVRBSUwgPSAncGxheWxpc3QvZGV0YWlsJzsgLy8g5q2M5Y2V6K+m5oOFXG5cbi8vIOS4k+i+kVxuQVBJLkFMQlVNX0RFVEFJTCA9ICdhbGJ1bSc7IC8v5LiT6L6R6K+m5oOFXG5cbi8vIOatjOabslxuQVBJLlNPTkcgPSAnc29uZy91cmwnOyAvL+iOt+WPluatjOabsnVybFxuQVBJLkxZUklDID0gJ2x5cmljJzsgLy/ojrflj5bmrYzor41cbkFQSS5TT05HX0RFVEFJTCA9ICdzb25nL2RldGFpbCc7IC8v6I635Y+W5q2M5puy6K+m5oOFXG5cbi8vIOaQnOe0olxuQVBJLkhPVF9TRUFSQ0ggPSAnc2VhcmNoL2hvdC9kZXRhaWwnOyAvL+iOt+WPlueDreaQnFxuQVBJLlNFQVJDSCA9ICdzZWFyY2gnOyAvL+aQnOe0olxuXG5cbi8vIE90aGVyXG5BUEkuQkFOTkVSID0gJ2Jhbm5lcic7IC8vIOWPkeeOsOmhtWJhbm5lcuWbvlxuQVBJLlJFQ09NTUVORF9SRVNPVVJDRSA9ICdyZWNvbW1lbmQvcmVzb3VyY2UnOyAvLyDmr4/ml6XmjqjojZDmrYzljZVcblxuLy8g56eB5Lq65o6o6I2QXG5BUEkuUEVSU09OQUxJWkVEX1BMQVlMSVNUID0gJ3BlcnNvbmFsaXplZCc7IC8vIOaOqOiNkOatjOWNlVxuQVBJLlBFUlNPTkFMSVpFRF9ORVdTT05HID0gJ3BlcnNvbmFsaXplZC9uZXdzb25nJzsgLy8g5o6o6I2Q5paw5q2MXG5cbi8vIOWQhOexu+aOkuihjHRvcFxuQVBJLlRPUF9BTEJVTSA9ICd0b3AvYWxidW0nOyAvLyDmlrDnop/kuIrmnrZcblxuLy8g6KeG6aKRXG5BUEkuVklERU9fTElTVCA9ICd2aWRlby9ncm91cCc7IC8vIOaMieWIhuexu+iOt+WPluinhumikeWIl+ihqCwg6ZyA55m75b2VXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRzeXN0ZW1JbmZvLCBcblx0c3RhdHVzX2Jhcl9oZWlnaHQsXG5cdEhPU1QsXG5cdEFQSVxufVxuIiwiLy/nm5HlkKxnbG9iYWxEYXRh5Lit55qEcGxheWVk5bGe5oCnXG5mdW5jdGlvbiBwbGF5ZWRfd2F0Y2goY2IpIHtcblx0dmFyIG9iaiA9IGdldEFwcCgpLmdsb2JhbERhdGE7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicGxheWVkXCIsIHtcblx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLl9wbGF5ZWQgPSB2YWx1ZTtcblx0XHRcdGNiKHZhbHVlKTtcblx0XHR9LFxuXHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyDlj6/ku6XlnKjov5nph4zmiZPljbDkuIDkupvkuJzopb/vvIznhLblkI7lnKjlhbbku5bnlYzpnaLosIPnlKhnZXRBcHAoKS5nbG9iYWxEYXRhLnBsYXllZOeahOaXtuWAme+8jOi/memHjOWwseS8muaJp+ihjOOAglxuXHRcdFx0cmV0dXJuIGdldEFwcCgpLmdsb2JhbERhdGEuX3BsYXllZDtcblx0XHR9XG5cdH0pXG59XG5cblxuZnVuY3Rpb24gYmFja2dyb3VuZGVyKCkge1xuXHRsZXQgb3MgPSBwbHVzLm9zLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSAnYW5kcm9pZCcgPyAnYW5kcm9pZCcgOiAnaW9zJztcblx0aWYgKG9zID09ICdhbmRyb2lkJykge1xuXHRcdGxldCBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcblx0XHRtYWluLm1vdmVUYXNrVG9CYWNrKGZhbHNlKTtcblx0fVxufVxuXG5cblxuZnVuY3Rpb24gdG8odXJsLCBtb2RlKSB7XG5cdG1vZGUgPSBtb2RlIHx8ICduYXZpZ2F0ZV90byc7XG5cblxuXHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0dXJsOiB1cmxcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gdG9hc3QoaWNvbiwgdGV4dCwgZHVyYXRpb24sIG1hc2ssIHBvc2l0aW9uKSB7XG5cdGR1cmF0aW9uID0gZHVyYXRpb24gfHwgMTUwMDtcblx0bWFzayA9IG1hc2sgfHwgZmFsc2U7XG5cdHBvc2l0aW9uID0gcG9zaXRpb24gfHwgZmFsc2U7XG5cdHVuaS5zaG93VG9hc3Qoe1xuXHRcdGljb246IGljb24sXG5cdFx0dGl0bGU6IHRleHQsXG5cdFx0ZHVyYXRpb246IGR1cmF0aW9uLFxuXHRcdG1hc2s6IG1hc2ssXG5cdFx0cG9zaXRpb246IHBvc2l0aW9uLFxuXHR9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0dG8sXG5cdHRvYXN0LFxuXHRiYWNrZ3JvdW5kZXIsXG5cdHBsYXllZF93YXRjaCxcblx0XG59XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy93ZWxjb21lL3dlbGNvbWUubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvd2VsY29tZS93ZWxjb21lJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3dlbGNvbWUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Zjc2Njg5YyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd2VsY29tZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3dlbGNvbWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vd2VsY29tZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGY3NjY4OWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vd2VsY29tZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGY3NjY4OWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGY3NjY4OWNcIixcbiAgXCI0MzNkODk1N1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEZXNrdG9wL29wZXJhX3VuaWFwcC1tYXN0ZXIvcGFnZXMvd2VsY29tZS93ZWxjb21lLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWxjb21lLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGY3NjY4OWMmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlXCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgICAgIHJpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgICAgYm90dG9tOiBcIjBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIuLi8uLi9zdGF0aWMvcnVuLnBuZ1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dlbGNvbWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2VsY29tZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZSBcIj5cblx0XHQ8aW1hZ2Ugc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcIiBzcmM9XCIuLi8uLi9zdGF0aWMvcnVuLnBuZ1wiPjwvaW1hZ2U+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB3eXlJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd3l5LWljb24vd3l5LWljb24ubnZ1ZSc7XG5cdFxuXHRcblx0aW1wb3J0ICRyZXBlYXRlciBmcm9tICdAL3V0aWxzL3JlcGVhdGVyLmpzJztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdHd5eUljb25cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHR0aGlzLmNoZWNrX2xvZ2luKCk7XG5cdFx0fSxcblx0XHRcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjaGVja19sb2dpbigpIHtcblx0XHRcdFx0JHJlcGVhdGVyLnVzZXIuY2hlY2tfbG9naW4oKHVzZXJfc3RhdHVzKT0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh1c2VyX3N0YXR1cyk7XG5cdFx0XHRcdFx0aWYgKHVzZXJfc3RhdHVzICYmICRyZXBlYXRlci5zdG9yYWdlLmlzX2xvZ2luKCkpIHsgLy8g5bey55m75b2VXG5cdFx0XHRcdFx0XHRsZXQgdWlkID0gdXNlcl9zdGF0dXMucHJvZmlsZS51c2VySWQ7XG5cdFx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3NldF91aWQnLCB1aWQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vaW5kZXgvaW5kZXgnLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0sIDE1MDApO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fWVsc2UgeyAvLyDmnKrnmbvlvZVcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5yZWRpcmVjdFRvKHtcblx0XHRcdFx0XHRcdFx0XHR1cmw6ICcuLi9sb2dpbi9sb2dpbicsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSwgMTUwMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHRAaW1wb3J0ICcuLi8uLi9jb21tb24vd3l5LmNzcyc7XG5cdFxuXHQucGFnZSB7XG5cdFx0ZmxleDogMTtcblx0fVxuXHQuY29udGFpbmVyIHtcblx0XHRtYXJnaW4tdG9wOiAyMDBycHg7XG5cdFx0d2lkdGg6IDc1MHJweDtcblx0XHRoZWlnaHQ6IDMwMHJweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5zbG9nYW4ge1xuXHRcdGZvbnQtc2l6ZTogODBycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdH1cblx0LmZvb3RlciB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0d2lkdGg6IDc1MHJweDtcblx0XHRoZWlnaHQ6IDgwcnB4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblx0LmN5Y2xlIHtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XG5cdFx0d2lkdGg6IDMwcnB4O1xuXHRcdGhlaWdodDogMzBycHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XG5cdH1cblx0LmZvb3Rlci10ZXh0IHtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHR9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dlbGNvbWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRmNzY2ODljJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWxjb21lLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00Zjc2Njg5YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3l5LW1haW4tY29sb3JcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyMTgsNDUsMzAsMSlcIlxuICB9LFxuICBcInd5eS1iZy1jb2xvclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcbiAgfSxcbiAgXCJ3eXktcmVmcmVzaFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwid3l5LWluZGljYXRvci10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzg4ODg4OFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MnJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ3eXktbG9hZGluZy1pbmRpY2F0b3JcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNXJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE1cnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTAsXG4gICAgXCJoZWlnaHRcIjogXCI2MHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI2MHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkYwMDAwXCJcbiAgfSxcbiAgXCJ3eXktbG9hZGluZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwicGFnZVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjAwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzAwcnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwic2xvZ2FuXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiODBycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcImZvb3RlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImN5Y2xlXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIzMHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJmb290ZXItdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9XG59IiwiLy8g5YWo5bGA6Z+z6aKR5pKt5pS+566h55CGXG5sZXQgUGxheWVySGVscGVyID0ge307XG5cbi8v6I635Y+W5ZSv5LiAcGxheWVyLCDkv53mjIFwbGF5ZXLnu5/kuIBcbmZ1bmN0aW9uIGdldF9wbGF5ZXIoKSB7XG5cdHJldHVybiBnZXRBcHAoKS5nbG9iYWxEYXRhLnBsYXllcjtcbn1cblxuUGxheWVySGVscGVyLnNldF91cmwgPSBmdW5jdGlvbih1cmwpIHtcblx0XG5cdHVybCA9IHVybCB8fCBTdG9yYWdlLmdldF9wbGF5ZWQoKS51cmw7XG5cdC8vIGNvbnNvbGUubG9nKCdzZXRfdXJsOicgKyB1cmwpO1xuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xuXHRwbGF5ZXIuc2V0U3R5bGVzKHtcblx0XHRzcmM6IHVybFxuXHR9KTtcblx0XG5cdHJldHVybjtcbn1cblxuLy9wbGF55YmN55qE5YeG5aSHXG4vLyBQbGF5ZXJIZWxwZXIuc3RhcnQgPSBmdW5jdGlvbigpIHtcbi8vIFx0dGhpcy5zZXRfdXJsKCk7XG4vLyBcdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XG4vLyBcdHBsYXllci5yZXN1bWUoKTtcbi8vIFx0cmV0dXJuO1xuLy8gfVxuXG4vL+e7n+S4gHBsYXnlhaXlj6MsIOecn+ato+eahOaSreaUvuWFpeWPo1xuUGxheWVySGVscGVyLnBsYXkgPSBmdW5jdGlvbigpIHtcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcblx0cGxheWVyLnBsYXkoKCk9Pntcblx0XHRjb25zb2xlLmxvZygn5b2T5YmN6Z+z5LmQ5pKt5pS+5a6M5q+VJyk7XG5cdH0sKGUpPT4ge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9KTs7XG5cdHJldHVybjtcbn1cblxuLyoqXG4gKiDmmoLlgZxcbiAqIOmcgOimgXN0YXJ05ZCOLCDop6blj5FvblBsYXnkuovku7blkI4sIHBhdXNl5omN5pyJ5pWIXG4gKi9cblBsYXllckhlbHBlci5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xuXHRwbGF5ZXIucGF1c2UoKTtcblx0cmV0dXJuO1xufVxuXG5QbGF5ZXJIZWxwZXIuZ2V0X3Bvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XG5cdHJldHVybiBwbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbn1cblxuUGxheWVySGVscGVyLmdldF9kdXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgcGxheWVyID0gZ2V0X3BsYXllcigpO1xuXHRcblx0cmV0dXJuIHBsYXllci5nZXREdXJhdGlvbigpO1xufVxuXG5QbGF5ZXJIZWxwZXIuc2Vla190byA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdHJldHVybiBnZXRfcGxheWVyKCkuc2Vla1RvKHBvc2l0aW9uKTtcbn1cblxuXG5cblxuUGxheWVySGVscGVyLnByZXYgPSBmdW5jdGlvbihjYikge1xuXHRsZXQgcGxheWVkID0gU3RvcmFnZS5nZXRfcGxheWVkKCk7XG5cdGxldCBwbGF5bGlzdCA9IFN0b3JhZ2UuZ2V0X2N1cnJlbnRfcGxheWxpc3QoKTtcblx0bGV0IGN1cnJlbnRfc29uZ19pZCA9IHBsYXllZC5pZDtcblx0bGV0IHByZXZfaW5kZXggPSBwbGF5bGlzdC5sZW5ndGggLSAxO1xuXHRcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5bGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChjdXJyZW50X3NvbmdfaWQgPT0gcGxheWxpc3RbaV0uaWQpIHtcblx0XHRcdGlmIChpID4gMCkge1xuXHRcdFx0XHRwcmV2X2luZGV4ID0gaSAtIDE7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0XG5cdGxldCBwcmV2X3NvbmdfaWQgPSBwbGF5bGlzdFtwcmV2X2luZGV4XS5pZDtcblx0dGhpcy5zdGFydChwcmV2X3NvbmdfaWQsIChwbGF5ZWQpPT4ge1xuXHRcdGNiICYmIGNiKHBsYXllZClcblx0fSk7XG59XG5cblxuUGxheWVySGVscGVyLm5leHQgPSBmdW5jdGlvbihjYikge1xuXHRsZXQgcGxheWVkID0gU3RvcmFnZS5nZXRfcGxheWVkKCk7XG5cdGxldCBjdXJyZW50X3NvbmdfaWQgPSBwbGF5ZWQuaWQ7XG5cdGxldCBwbGF5bGlzdCA9IFN0b3JhZ2UuZ2V0X2N1cnJlbnRfcGxheWxpc3QoKTtcblx0XG5cdGxldCBuZXh0X2luZGV4ID0gMDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5bGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChjdXJyZW50X3NvbmdfaWQgPT0gcGxheWxpc3RbaV0uaWQpIHtcblx0XHRcdGlmIChpICsgMSA8IHBsYXlsaXN0Lmxlbmd0aCkge1xuXHRcdFx0XHRuZXh0X2luZGV4ID0gaSArIDE7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0Y29uc29sZS5sb2cobmV4dF9pbmRleCk7XG5cdGxldCBuZXh0X3NvbmdfaWQgPSBwbGF5bGlzdFtuZXh0X2luZGV4XS5pZDtcblx0dGhpcy5zdGFydChuZXh0X3NvbmdfaWQsIChwbGF5ZWQpPT4ge1xuXHRcdGNiICYmIGNiKHBsYXllZClcblx0fSk7XG59XG5cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc29uZ19pZFxuICog5Lyg5YWl5q2M5puyaWTmkq3mlL5cbiAqL1xuUGxheWVySGVscGVyLnN0YXJ0ID0gZnVuY3Rpb24oc29uZ19pZCwgY2IpIHtcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcblx0bGV0IHBsYXllZCA9IFN0b3JhZ2UuZ2V0X3BsYXllZCgpO1xuXHRcblx0U29uZy5nZXRfc29uZ19kZXRhaWwoc29uZ19pZCwgKGRhdGEpPT4ge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdGxldCBzb25nID0gZGF0YS5zb25nc1swXTtcblx0XHRsZXQgc29uZ19uYW1lID0gc29uZy5uYW1lO1xuXHRcdGxldCBjb3Zlcl9pbWFnZSA9IHNvbmcuYWwucGljVXJsO1xuXHRcdGxldCBjdXJyZW50X3BsYXllZCA9IHBsYXllZDtcblx0XHRsZXQgcGxheWVkX211c2ljX2lkID0gY3VycmVudF9wbGF5ZWQuaWQ7XG5cdFx0XG5cdFx0aWYgKHNvbmdfaWQgPT0gcGxheWVkX211c2ljX2lkKSB7XG5cdFx0XHQvLyDot7Povazmkq3mlL7or6bmg4XpobXlubbmkq3mlL5cblx0XHRcdGxldCBwbGF5ZXIgPSBnZXRfcGxheWVyKCk7XG5cdFx0XHRpZiAocGxheWVyLmlzUGF1c2VkKCkpIHtcblx0XHRcdFx0cGxheWVyLnBsYXkoKCk9Pnt9LChlKT0+IHtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7O1xuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcy50dXJuKCk7XG5cdFx0XHRIZWxwZXIudG8oJy4uL3BsYXkvcGxheScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRTb25nLmdldF9zb25nX3VybChzb25nX2lkLCAocmVzKT0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRsZXQgdXJsID0gcmVzLmRhdGFbMF0udXJsO1xuXHRcdFx0XG5cdFx0XHRpZiAoIXVybCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdEhlbHBlci50b2FzdCgnbm9uZScsICfkurLniLHnmoQsIOaaguaXoOivpeatjOabsui1hOa6kH4nLCAzMDAwLCBmYWxzZSwgJ2JvdHRvbScpO1xuXHRcdFx0XHR9LCAxMCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGxldCBjcmVhdG9ycyA9IHNvbmcuYXI7XG5cdFx0XHRsZXQgY3JlYXRvcl9zdHIgPSAnJztcblx0XHRcdFxuXHRcdFx0Zm9yIChsZXQgY3JlYXRvciBvZiBjcmVhdG9ycykge1xuXHRcdFx0XHRjcmVhdG9yX3N0ciA9IGNyZWF0b3Jfc3RyICsgY3JlYXRvci5uYW1lO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRsZXQgcGxheWVkID0ge1xuXHRcdFx0XHRpZDogc29uZ19pZCxcblx0XHRcdFx0dXJsOiB1cmwsXG5cdFx0XHRcdG5hbWU6IHNvbmdfbmFtZSxcblx0XHRcdFx0Y3JlYXRvcjogY3JlYXRvcl9zdHIsXG5cdFx0XHRcdGNvdmVyX2ltYWdlOiBjb3Zlcl9pbWFnZSxcblx0XHRcdFx0Ly8gdGltZTogMCwgLy/kuIrmrKHmkq3mlL7nmoTkvY3nva5cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGhpcy5zZXRfdXJsKHVybCk7XG5cdFx0XHRcblx0XHRcdGNiICYmIGNiKHBsYXllZCk7XG5cdFx0XHRcblx0XHR9KTtcblx0XHRcblx0fSk7XG59XG5cblxuUGxheWVySGVscGVyLnR1cm4gPSBmdW5jdGlvbigpIHtcblx0bGV0IHBsYXllciA9IGdldF9wbGF5ZXIoKTtcblx0aWYgKHBsYXllci5pc1BhdXNlZCgpKSB7XG5cdFx0cGxheWVyLnBsYXkoKCk9Pnt9LChlKT0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdH0pOztcblx0fWVsc2Uge1xuXHRcdHBsYXllci5wYXVzZSgpO1xuXHR9XG5cdHJldHVybjtcbn1cblxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi4vdXRpbHMvc3RvcmFnZS5qcydcbmltcG9ydCBTb25nIGZyb20gJy4uL21vZGVsL3NvbmcuanMnO1xuaW1wb3J0IEhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyLmpzJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllckhlbHBlciIsIi8vIOe8k+WtmOe7n+S4gOeuoeeQhlxuXG5sZXQgU3RvcmFnZSA9IHt9XG5cbmNvbnN0IExBVEVTVF9QTEFZRUQgPSAnbGF0ZXN0X3BsYXllZCc7IC8v5pyA5ZCO5LiA5Liq5pKt5pS+6K6w5b2VXG5jb25zdCBDVVJSRU5UX1BMQVlMSVNUID0gJ2N1cnJlbnRfcGxheWxpc3QnOyAvLyDlvZPliY3mkq3mlL7liJfooahcbmNvbnN0IElTX0xPR0lOID0gJ2lzX2xvZ2luJzsgLy8g55m75b2V54q25oCBXG5jb25zdCBQTEFZX01PREUgPSAncGxheV9tb2RlJztcblxuU3RvcmFnZS5pc19sb2dpbiA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZ2V0KElTX0xPR0lOKTtcbn1cblxuU3RvcmFnZS5zZXRfaXNfbG9naW4gPSBmdW5jdGlvbih2KSB7XG5cdHNldChJU19MT0dJTiwgdik7XG5cdHJldHVybjtcbn1cblxuU3RvcmFnZS5nZXRfcGxheWVkID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBnZXQoTEFURVNUX1BMQVlFRCk7XG59XG5cblN0b3JhZ2Uuc2V0X3BsYXllZCA9IGZ1bmN0aW9uKHYpIHtcblx0c2V0KExBVEVTVF9QTEFZRUQsIHYpO1xuXHRyZXR1cm47XG59XG5TdG9yYWdlLmdldF9jdXJyZW50X3BsYXlsaXN0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBnZXQoQ1VSUkVOVF9QTEFZTElTVCk7XG59XG5cblN0b3JhZ2Uuc2V0X2N1cnJlbnRfcGxheWxpc3QgPSBmdW5jdGlvbih2KSB7XG5cdHNldChDVVJSRU5UX1BMQVlMSVNULCB2KTtcblx0cmV0dXJuO1xufVxuXG5TdG9yYWdlLmdldF9wbGF5X21vZGUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGdldChQTEFZX01PREUpO1xufVxuXG5TdG9yYWdlLnNldF9wbGF5X21vZGUgPSBmdW5jdGlvbih2KSB7XG5cdHNldChQTEFZX01PREUsIHYpO1xuXHRyZXR1cm47XG59XG5cbmZ1bmN0aW9uIHNldChrLCB2KSB7XG5cdHRyeSB7XG5cdCAgICB1bmkuc2V0U3RvcmFnZVN5bmMoaywgdik7XG5cdH0gY2F0Y2ggKGUpIHtcblx0ICAgIC8vIGVycm9yXG5cdH1cblx0cmV0dXJuO1xufVxuXG5mdW5jdGlvbiBnZXQoaykge1xuXHR0cnkge1xuXHQgICAgcmV0dXJuIHVuaS5nZXRTdG9yYWdlU3luYyhrKTtcblx0fSBjYXRjaCAoZSkge1xuXHQgICAgY29uc29sZS5sb2coZSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdG9yYWdlOyIsImxldCBTb25nID0ge307XG5cblNvbmcuZ2V0X3NvbmdfdXJsID0gZnVuY3Rpb24oaWQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNPTkc7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0aWQ6IGlkLFxuXHRcdGJyOiAzMjAwMDBcblx0fVxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuU29uZy5nZXRfbHlyaWMgPSBmdW5jdGlvbihpZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuTFlSSUM7XG5cdFxuXHRsZXQgcGFyYW1zID0ge1xuXHRcdGlkOiBpZCxcblx0fVxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdFxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuU29uZy5nZXRfc29uZ19kZXRhaWwgPSBmdW5jdGlvbihpZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuU09OR19ERVRBSUw7XG5cdFxuXHRsZXQgcGFyYW1zID0ge1xuXHRcdGlkczogaWQsXG5cdH1cblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBTb25nOyIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImZ1bmN0aW9uIGdldCh1cmwsIHBhcmFtcywgc3VjY2Vzc19jYiwgZmFpbGVkX2NiKSB7XG5cdFxuXHRoZWxwZXIudG9hc3QoJ2xvYWRpbmcnLCAn5Yqg6L295LitLi4uJywgMTAwMDApXG5cdFxuXHRsZXQgdXJpID0gY29uZmlnLkhPU1QgKyB1cmw7XG5cblx0dW5pLnJlcXVlc3Qoe1xuXHRcdHVybDogdXJpLCBcblx0XHRkYXRhOiBwYXJhbXMsXG5cdFx0bWV0aG9kOlwiR0VUXCIsXG5cdFx0c3VjY2VzczogKHJlcyk9Pntcblx0XHRcdFxuXHRcdFx0c3VjY2Vzc19jYiAmJiBzdWNjZXNzX2NiKHJlcyk7XG5cdFx0fSxcblx0XHRmYWlsOihyZXMpID0+IHtcblx0XHRcdGZhaWxlZF9jYiAmJiBmYWlsZWRfY2IocmVzKTtcblx0XHQgICAgY29uc29sZS5sb2coJ3JlcXVlc3RfZmFpbDp1cmw6JyArIHVybCArICcgOyAnICsgJ2Vyck1zZzonICsgcmVzLmVyck1zZyk7XG5cdFx0fSxcblx0XHRjb21wbGV0ZTogKCk9PiB7XG5cdFx0XHR1bmkuaGlkZVRvYXN0KCk7XG5cdFx0fVxuXHR9KTtcbn0gXG5cbmZ1bmN0aW9uIHBvc3QodXJsLCBwYXJhbXMsIHN1Y2Nlc3NfY2IsIGZhaWxlZF9jYikge1xuXHRcblx0aGVscGVyLnRvYXN0KCdsb2FkaW5nJywgJ+WKoOi9veS4rS4uLicsIDEwMDAwKVxuXHRcblx0dW5pLnJlcXVlc3Qoe1xuXHRcdHVybDogY29uZmlnLkhPU1QgKyB1cmwsIFxuXHRcdGRhdGE6IHBhcmFtcyxcblx0XHRtZXRob2Q6XCJQT1NUXCIsICAgXG5cdFx0c3VjY2VzczogKHJlcyk9Pntcblx0XHRcdHN1Y2Nlc3NfY2IgJiYgc3VjY2Vzc19jYihyZXMpO1xuXHRcdH0sXG5cdFx0ZmFpbDoocmVzKSA9PiB7XG5cdFx0ICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0X2ZhaWw6dXJsOicgKyB1cmwgKyAnIDsgJyArICdlcnJNc2c6JyArIHJlcy5lcnJNc2cpO1xuXHRcdFx0ZmFpbGVkX2NiICYmIGZhaWxlZF9jYihyZXMpO1xuXHRcdH0sXG5cdFx0Y29tcGxldGU6ICgpPT4ge1xuXHRcdFx0dW5pLmhpZGVUb2FzdCgpO1xuXHRcdH1cblx0fSkgICBcbn1cblxuZnVuY3Rpb24gdGVzdCgpIHtcblx0Ly8xMTEuMTMuMTAwLjkyXG5cdHVuaS5yZXF1ZXN0KHtcblx0ICAgIHVybDogJ2h0dHBzOi8vd3d3LmJhaWR1LmNvbS8nLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxuXHQgICAgc3VjY2VzczogKHJlcykgPT4ge1xuXHQgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0ICAgIH1cblx0fSk7XG59XG5cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0e1xuXHRnZXQsXG5cdHBvc3QsXG5cdHRlc3Rcbn0iLCJsZXQgVXNlciA9IHt9O1xuXG5Vc2VyLmNoZWNrX3Bob25lID0gZnVuY3Rpb24ocGhvbmUsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkNIRUNLX1BIT05FO1xuXHRsZXQgcGFyYW1zID0ge1xuXHRcdHBob25lOiBwaG9uZVxuXHR9XG5cdFxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0XG5cdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IocmVzLmRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuLy/nmbvpmYZcblVzZXIubG9naW4gPSBmdW5jdGlvbihwaG9uZSwgcGFzc3dvcmQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkNFTExQSE9ORV9MT0dJTjtcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRwaG9uZTogcGhvbmUsXG5cdFx0cGFzc3dvcmQ6IHBhc3N3b3JkXG5cdH1cblx0XG5cdHJlcXVlc3QuZ2V0KHVybCwgcGFyYW1zLCAocmVzKT0+IHtcblx0XHRpZiAocmVzLmRhdGEpIHtcblx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRcdGdldF9zdGF0dXMoKHN0YXR1cyk9PiB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y2IgJiYgY2Ioc3RhdHVzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRoZWxwZXIudG9hc3QoJ25vbmUnLCBkYXRhLm1zZywgMzAwMCwgZmFsc2UsICdib3R0b20nKTtcblx0XHRcdH1cblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdH1cblx0fSlcbn1cblVzZXIucmVnID0gZnVuY3Rpb24ocGhvbmUsIHBhc3N3b3JkLCBjYXB0Y2hhLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5QSE9ORV9SRUc7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0cGhvbmU6IHBob25lLFxuXHRcdHBhc3N3b3JkOiBwYXNzd29yZCxcblx0XHRjYXB0Y2hhOiBjYXB0Y2hhXG5cdH1cblx0XG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRjYiAmJiBjYihyZXMuZGF0YSlcblx0fSlcbn1cblxuVXNlci5sb2dvdXQgPSBmdW5jdGlvbihjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5MT0dPVVQ7XG5cblx0XG5cdHJlcXVlc3QuZ2V0KHVybCwge30sIChyZXMpPT4ge1xuXHRcdFxuXHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKHJlcy5kYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cblVzZXIuc2VuZF9jYXB0Y2hhID0gZnVuY3Rpb24ocGhvbmUsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNFTkRfQ0FQVENIQTtcblx0XG5cdFxuXHRyZXF1ZXN0LnBvc3QodXJsLCB7cGhvbmU6IHBob25lfSwgKHJlcyk9PiB7XG5cdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRjYiAmJiBjYihyZXMuZGF0YSlcblx0fSlcbn1cblVzZXIudmVyaWZ5X2NhcHRjaGEgPSBmdW5jdGlvbihwaG9uZSwgY2FwdGNoYSwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVkVSSUZZX0NBUFRDSEE7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0cGhvbmU6IHBob25lLFxuXHRcdGNhcHRjaGE6IGNhcHRjaGFcblx0fVxuXHRcblx0cmVxdWVzdC5nZXQodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0Y2IgJiYgY2IocmVzLmRhdGEpXG5cdH0pXG59XG5cbi8v55m75b2V5qOA5p+lXG5Vc2VyLmNoZWNrX2xvZ2luID0gZnVuY3Rpb24oY2IpIHtcblx0XG5cdGdldF9zdGF0dXMoKHJlcyk9PiB7XG5cdFx0Y2IgJiYgY2IocmVzKTtcblx0fSlcbn1cblxuLy/ojrflj5bnlKjmiLdtdizmrYzljZUsIGRqLCDmlLbol4/mlbDph49cblVzZXIuZ2V0X3N1YmNvdW50ID0gZnVuY3Rpb24oY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuU1VCQ09VTlQ7XG5cdFxuXHRyZXF1ZXN0LnBvc3QodXJsLCB7fSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcblx0XHRjYiAmJiBjYihkYXRhKTtcblx0fSlcbn1cblxuLy/ojrflj5bnlKjmiLfotYTmlplcblVzZXIuZ2V0X3VzZXJfZGV0YWlsID0gZnVuY3Rpb24odWlkLCBjYikge1xuXHRsZXQgdXJsID0gY29uZmlnLkFQSS5VU0VSX0RFVEFJTDtcblx0bGV0IHBhcmFtcyA9IHtcblx0XHR1aWQ6IHVpZFxuXHR9XG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbi8v6I635Y+W55So5oi35q2M5Y2V5YiX6KGoXG5Vc2VyLmdldF9wbGF5bGlzdCA9IGZ1bmN0aW9uKHVpZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVVNFUl9QTEFZTElTVDtcblx0bGV0IHBhcmFtcyA9IHtcblx0XHR1aWQ6IHVpZFxuXHR9XG5cdHJlcXVlc3QucG9zdCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YTtcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5Vc2VyLmdldF9saWtlbGlzdCA9IGZ1bmN0aW9uKHVpZCwgY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVVNFUl9MSUtFX0xJU1Q7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0dWlkOiB1aWRcblx0fVxuXHRyZXF1ZXN0LnBvc3QodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuVXNlci5saWtlID0gZnVuY3Rpb24obXVzaWNfaWQsIGxpa2UsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkxJS0U7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0aWQ6IG11c2ljX2lkLFxuXHRcdGxpa2U6IGxpa2Vcblx0fVxuXHRyZXF1ZXN0LnBvc3QodXJsLCBwYXJhbXMsIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuLy/ojrflj5bnlKjmiLfnirbmgIFcbmZ1bmN0aW9uIGdldF9zdGF0dXMoY2IpIHtcblx0bGV0IHRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkxPR0lOX1NUQVRVUztcblx0XG5cdHJlcXVlc3QuZ2V0KHVybCwge3RpbWVzdGFtcDogdHN9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhO1xuXHRcdFxuXHRcdGlmIChkYXRhICYmIGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPlueKtuaAgeWksei0pScpO1xuXHRcdFx0Y2IgJiYgY2IoZmFsc2UpO1xuXHRcdH1cblx0fSlcbn1cblxuXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlci5qcyc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBVc2VyOyIsImxldCBQbGF5bGlzdCA9IHt9O1xuXG5QbGF5bGlzdC5nZXRfcGxheWxpc3RfZGV0YWlsID0gZnVuY3Rpb24oaWQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlBMQVlMSVNUX0RFVEFJTDtcblx0bGV0IHBhcmFtcyA9IHtcblx0XHRpZDogaWRcblx0fVxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXlsaXN0OyIsImxldCBTZWFyY2ggPSB7fTtcblxuU2VhcmNoLmdldF9ob3RfbGlzdCA9IGZ1bmN0aW9uKGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkhPVF9TRUFSQ0g7XG5cblx0cmVxdWVzdC5nZXQodXJsLCB7fSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbi8qKlxuICog5Y2V6aG55pCc57SiXG4gKiDmraTmjqXlj6Nwb3N05pa55byP5pyJ6Zeu6aKYLCDliIbpobXlj4LmlbDml6DmlYhcbiAqIFxuICog5b+F6YCJ5Y+C5pWwOiBcbiAqIGtleXdvcmRzOiDlhbPplK7or41cbiAqIFxuICog5Y+v6YCJ5Y+C5pWwOiBcbiAqIGxpbWl0IDog6L+U5Zue5pWw6YePICwg6buY6K6k5Li6IDMwIFxuICogb2Zmc2V0IDog5YGP56e75pWw6YeP77yM55So5LqO5YiG6aG1ICwg5aaCIDog5aaCIDooIOmhteaVsCAtMSkqMzAsIOWFtuS4rSAzMCDkuLogbGltaXQg55qE5YC8ICwg6buY6K6k5Li6IDBcbiAqIHR5cGU6IOaQnOe0ouexu+Wei++8m+m7mOiupOS4uiAxIOWNs+WNleabsiAsIOWPluWAvOaEj+S5iSA6IDE6IOWNleabsiwgMTA6IOS4k+i+kSwgMTAwOiDmrYzmiYssIDEwMDA6IOatjOWNlSwgMTAwMjog55So5oi3LCAxMDA0OiBNViwgMTAwNjog5q2M6K+NLCAxMDA5OiDnlLXlj7AsIDEwMTQ6IOinhumikSwgMTAxODrnu7zlkIhcbiAqL1xuU2VhcmNoLnNlYXJjaCA9IGZ1bmN0aW9uKGtleXdvcmQsIHR5cGUsIHBhZ2UsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlNFQVJDSDtcblx0bGV0IGxpbWl0ID0gMTA7XG5cdGxldCBvZmZzZXQgPSBwYWdlICogbGltaXQ7XG5cdHR5cGUgPSB0eXBlIHx8IDE7XG5cdGxldCBwYXJhbXMgPSB7XG5cdFx0a2V5d29yZHM6IGtleXdvcmQsXG5cdFx0bGltaXQ6IGxpbWl0LFxuXHRcdG9mZnNldDogb2Zmc2V0LFxuXHRcdHR5cGU6IHR5cGVcblx0fVxuXHRyZXF1ZXN0LmdldCh1cmwsIHBhcmFtcywgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBTZWFyY2g7IiwibGV0IE90aGVyID0ge307XG5cbk90aGVyLmJhbm5lciA9IGZ1bmN0aW9uKGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkJBTk5FUjtcblxuXHRyZXF1ZXN0LmdldCh1cmwsIHt0eXBlOiAxfSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbi8vIOmcgOeZu+mZhuWQjuiwg+eUqFxuT3RoZXIucmVjb21tZW5kX3Jlc291cmNlID0gZnVuY3Rpb24oY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUkVDT01NRU5EX1JFU09VUkNFO1xuXHRcblx0cmVxdWVzdC5nZXQodXJsLCB7fSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBPdGhlcjsiLCJsZXQgQWxidW0gPSB7fTtcblxuQWxidW0uZGV0YWlsID0gZnVuY3Rpb24oaWQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLkFMQlVNX0RFVEFJTDtcblxuXHRyZXF1ZXN0LmdldCh1cmwsIHtpZDogaWR9LCAocmVzKT0+IHtcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXG5cdFx0aWYgKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdGNiICYmIGNiKGRhdGEpXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZhaWxlZCcpO1xuXHRcdH1cblx0fSlcbn1cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFsYnVtOyIsImxldCBQZXJzb25hbGl6ZWQgPSB7fTtcblxuUGVyc29uYWxpemVkLnBsYXlsaXN0ID0gZnVuY3Rpb24oY2IsIGxpbWl0KSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlBFUlNPTkFMSVpFRF9QTEFZTElTVDtcblx0bGltaXQgPSBsaW1pdCB8fCAxMDtcblx0cmVxdWVzdC5nZXQodXJsLCB7bGltaXQ6IGxpbWl0fSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cblBlcnNvbmFsaXplZC5uZXdzb25nID0gZnVuY3Rpb24oY2IpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuUEVSU09OQUxJWkVEX05FV1NPTkc7XG5cdHJlcXVlc3QuZ2V0KHVybCwge30sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyc29uYWxpemVkOyIsImxldCBUb3AgPSB7fTtcblxuVG9wLmFsYnVtID0gZnVuY3Rpb24oY2IsIGxpbWl0LCBvZmZzZXQpIHtcblx0bGV0IHVybCA9IGNvbmZpZy5BUEkuVE9QX0FMQlVNO1xuXHRsaW1pdCA9IGxpbWl0IHx8IDEwO1xuXHRvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblx0cmVxdWVzdC5nZXQodXJsLCB7bGltaXQ6IGxpbWl0LCBvZmZzZXQ6IG9mZnNldH0sIChyZXMpPT4ge1xuXHRcdGxldCBkYXRhID0gcmVzLmRhdGFcblx0XHRpZiAoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0Y2IgJiYgY2IoZGF0YSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZmFpbGVkJyk7XG5cdFx0fVxuXHR9KVxufVxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wOyIsImxldCBWaWRlbyA9IHt9O1xuXG5WaWRlby5saXN0ID0gZnVuY3Rpb24oaWQsIGNiKSB7XG5cdGxldCB1cmwgPSBjb25maWcuQVBJLlZJREVPX0xJU1Q7XG5cblx0cmVxdWVzdC5nZXQodXJsLCB7aWQ6IGlkfSwgKHJlcyk9PiB7XG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YVxuXHRcdGlmIChkYXRhLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRjYiAmJiBjYihkYXRhKVxuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcblx0XHR9XG5cdH0pXG59XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0LmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBWaWRlbzsiLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiX19VTklfX0QwN0VDQjFcIn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBjZjliYWMmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjZhOTIyODVmXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkRlc2t0b3Avb3BlcmFfdW5pYXBwLW1hc3Rlci9jb21wb25lbnRzL3d5eS1pY29uL3d5eS1pY29uLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBjZjliYWMmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgW1xuICAgIF9jKFxuICAgICAgXCJ1LXRleHRcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb25mb250XCJdLFxuICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogX3ZtLnNpemUgKyBcInJweFwiLCBjb2xvcjogX3ZtLmNvbG9yIH0sXG4gICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25DbGljayB9XG4gICAgICB9LFxuICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm5hbWUpKV1cbiAgICApXG4gIF0pXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3d5eS1pY29uLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93eXktaWNvbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldz5cblx0XHQ8dGV4dCBAY2xpY2s9XCJvbkNsaWNrXCIgY2xhc3M9XCJpY29uZm9udFwiIDpzdHlsZT1cIntmb250U2l6ZTogc2l6ZSArICdycHgnLGNvbG9yOmNvbG9yfVwiPnt7bmFtZX19PC90ZXh0PlxuXHQ8L3ZpZXc+XG5cdFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0Ly/kvKAmI3jnmoRpY29uLCDovazmiJBcXHUgaWNvblxuXHQvL3RlbXBsYXRlIOebtOaOpeS9v+eUqCYjeOeahGljb24g5Y+v5Lul5q2j56Gu5bGV56S6LCDkvYbmmK/lpoLmnpzkvb/nlKjlj5jph4/kvKAmI3jnmoRpY29uIOWImeWxleekuuWksei0pVxuXHQvL3RlbXBsYXRlIOS4reebtOaOpeS9v+eUqFxcdSBpY29uIOaIluiAheS9v+eUqFxcdSBpY29u5Y+Y6YePIOWxleekuuaViOaenOmDveato+W4uFxuXHQvL+WmguaenOS9v+eUqHByb3BzIOS8oOi/h+adpeeahFxcdSBpY29uIOWcqHRlbXBsYXRl5L2/55SoIOaYvuekuuWksei0pSwg5Lyg6L+H5p2l55qEIFxcdSBpY29u5LiA6KKr57yW56CB5oiQ5a2X56ym5Liy5YaF5a2Y5Lit55qE5YC85YW25a6e5pivXCJcXFxcdWU3MTVcIlxuXHRleHBvcnQgZGVmYXVsdHtcblx0XHRwcm9wczoge1xuXHRcdFx0dHlwZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRjb2xvcjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6IFwiI0ZGRkZGRlwiXG5cdFx0XHR9LFxuXHRcdFx0c2l6ZToge1xuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6IDQwXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0bmFtZSgpe1xuXHRcdFx0XHRsZXQgdG1wID0gdGhpcy50eXBlO1xuXHRcdFx0XHR0bXAgPSAnXFxcXCcgKyAndScgKyAgdG1wLnJlcGxhY2UoJyYjeCcsICcnKTtcblx0XHRcdFx0dG1wID0gdG1wLnN1YnN0cmluZygwLCB0bXAubGVuZ3RoLTEpO1xuXHRcdFx0XHRyZXR1cm4gIGV2YWwoXCInXCIgKyB0bXAgKyBcIidcIik7ICAgICAgICAgICAgICAgLy8g5bCG5YaF5a2Y5LitXCJcXFxcdWU3MTVcIiDovazmiJBcIlxcdWU3MTVcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSwgXG5cdFx0Y3JlYXRlZCgpe1xuXHRcdFx0XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0ICAgIG9uQ2xpY2soKSB7XG5cdFx0ICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpXG5cdFx0ICAgIH0gXG5cdFx0fSAgXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5pY29uZm9udCB7ICBcblx0ICAgIGZvbnQtZmFtaWx5OiB3ZWV4VWlJY29uRm9udDsgIFxuXHR9ICBcblx0Lmljb25saWtlIHsgIFxuXHQgICAgd2lkdGg6IDM2cHg7ICBcblx0ICAgIGhlaWdodDogMzZweDsgIFxuXHQgICAgZm9udC1zaXplOiAzNHB4OyAgXG5cdH1cbjwvc3R5bGU+XG4iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd3l5LWljb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaWNvbmZvbnRcIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcIndlZXhVaUljb25Gb250XCJcbiAgfSxcbiAgXCJpY29ubGlrZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM2XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzNlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNFwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMS4yMDIwMDIyNi5mdWxsL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xLjIwMjAwMjI2LmZ1bGwvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjEuMjAyMDAyMjYuZnVsbC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInBhZ2VcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNlwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9