/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst isEmail_1 = __importDefault(__webpack_require__(/*! validator/lib/isEmail */ \"./node_modules/validator/lib/isEmail.js\"));\r\nconst SHOW_ERROR_MESSAGES = \"show-error-message\";\r\nconst form = document.querySelector(\"#formEmail\");\r\nconst email = document.querySelector(\".email-criar\");\r\nconst submitEventFn = (event) => {\r\n    // para nao enviar mais o formulario\r\n    event.preventDefault();\r\n    const target = event.target;\r\n    hideErrorMessages(target);\r\n    // Criando as validações\r\n    checkForEmptyFields(email);\r\n    checkEmail(email);\r\n    if (shouldSendForm(target))\r\n        window.location.href = './cadastroNome.html';\r\n};\r\nform === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", submitEventFn);\r\nfunction checkForEmptyFields(...inputs) {\r\n    inputs.forEach((input) => {\r\n        if (!input.value)\r\n            showErrorMessage(input, \"Campo não pode ficar vazio\");\r\n    });\r\n}\r\nfunction checkEmail(input) {\r\n    if (!(0, isEmail_1.default)(input.value))\r\n        showErrorMessage(input, \"Email Inválido\");\r\n}\r\nfunction showErrorMessage(input, msg) {\r\n    const emailcriarconta = input.parentElement;\r\n    const errorMessage = emailcriarconta.querySelector(\".error-message\");\r\n    errorMessage.innerText = msg;\r\n    emailcriarconta.classList.add(SHOW_ERROR_MESSAGES);\r\n}\r\nfunction hideErrorMessages(form) {\r\n    form.querySelectorAll(\".\" + SHOW_ERROR_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));\r\n}\r\nfunction shouldSendForm(form) {\r\n    let send = true;\r\n    form.querySelectorAll(\".\" + SHOW_ERROR_MESSAGES).forEach(() => (send = false));\r\n    return send;\r\n}\r\nconsole.log('validando email');\r\n__webpack_require__(/*! ./validandoNome */ \"./src/validandoNome.ts\");\r\n__webpack_require__(/*! ./validandoSenha */ \"./src/validandoSenha.ts\");\r\n\n\n//# sourceURL=webpack://quer-carona-front-end/./src/index.ts?");

/***/ }),

/***/ "./src/validandoNome.ts":
/*!******************************!*\
  !*** ./src/validandoNome.ts ***!
  \******************************/
/***/ (() => {

eval("\r\nconsole.log('Validando nome');\r\n\n\n//# sourceURL=webpack://quer-carona-front-end/./src/validandoNome.ts?");

/***/ }),

/***/ "./src/validandoSenha.ts":
/*!*******************************!*\
  !*** ./src/validandoSenha.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.submitEventFn1 = void 0;\r\nconsole.log('Validando senha');\r\nconst SHOW_ERROR_MESSAGES1 = \"show-error-message1\";\r\nconst formNome = document.querySelector(\"#formSenha\");\r\nconst password = document.querySelector(\".Psenha\");\r\nconst password2 = document.querySelector(\".Psenha2\");\r\nconst submitEventFn1 = (event1) => __awaiter(void 0, void 0, void 0, function* () {\r\n    // para nao enviar mais o formulario\r\n    console.log('oi');\r\n    event1.preventDefault();\r\n    const target = event1.target;\r\n    hideErrorMessages1(target);\r\n    // Criando as validações\r\n    yield checkForEmptyFields1(password, password2);\r\n    yield checkEqualPasswords1(password, password2);\r\n    const result = yield shouldSendForm1(target);\r\n    if (result)\r\n        window.location.href = './oferecer.html'; //form.submit();\r\n});\r\nexports.submitEventFn1 = submitEventFn1;\r\nformNome.addEventListener(\"submit\", exports.submitEventFn1);\r\nfunction checkForEmptyFields1(...inputs) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        inputs.forEach((input) => {\r\n            if (!input.value)\r\n                showErrorMessage1(input, \"Campo não pode ficar vazio\");\r\n        });\r\n    });\r\n}\r\nfunction checkEqualPasswords1(password, password2) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (password.value !== password2.value) {\r\n            yield showErrorMessage1(password, \"Senhas não coincide\");\r\n            yield showErrorMessage1(password2, \"Senhas não coincide\");\r\n        }\r\n    });\r\n}\r\n// nao esta retornando nada.\r\nfunction hideErrorMessages1(formNome) {\r\n    formNome.querySelectorAll(\".\" + SHOW_ERROR_MESSAGES1).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES1));\r\n}\r\nfunction showErrorMessage1(input, msg) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const cadastrarSenha1 = input.parentElement;\r\n        const errorMessage1 = cadastrarSenha1.querySelector(\".error-message1\");\r\n        errorMessage1.innerText = msg;\r\n        cadastrarSenha1.classList.add(SHOW_ERROR_MESSAGES1);\r\n    });\r\n}\r\n//checando se existe algum campo com msg de erro.\r\nfunction shouldSendForm1(formNome) {\r\n    let send = true;\r\n    formNome.querySelectorAll(\".\" + SHOW_ERROR_MESSAGES1).forEach(() => (send = false));\r\n    return send;\r\n}\r\n\n\n//# sourceURL=webpack://quer-carona-front-end/./src/validandoSenha.ts?");

/***/ }),

/***/ "./node_modules/validator/lib/isByteLength.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isByteLength.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = isByteLength;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* eslint-disable prefer-rest-params */\nfunction isByteLength(str, options) {\n  (0, _assertString.default)(str);\n  var min;\n  var max;\n\n  if (_typeof(options) === 'object') {\n    min = options.min || 0;\n    max = options.max;\n  } else {\n    // backwards compatibility: isByteLength(str, min [, max])\n    min = arguments[1];\n    max = arguments[2];\n  }\n\n  var len = encodeURI(str).split(/%..|./).length - 1;\n  return len >= min && (typeof max === 'undefined' || len <= max);\n}\n\nmodule.exports = exports.default;\nmodule.exports[\"default\"] = exports.default;\n\n//# sourceURL=webpack://quer-carona-front-end/./node_modules/validator/lib/isByteLength.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isEmail.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmail.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = isEmail;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nvar _isByteLength = _interopRequireDefault(__webpack_require__(/*! ./isByteLength */ \"./node_modules/validator/lib/isByteLength.js\"));\n\nvar _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ \"./node_modules/validator/lib/isFQDN.js\"));\n\nvar _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ \"./node_modules/validator/lib/isIP.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar default_email_options = {\n  allow_display_name: false,\n  require_display_name: false,\n  allow_utf8_local_part: true,\n  require_tld: true,\n  blacklisted_chars: '',\n  ignore_max_length: false,\n  host_blacklist: []\n};\n/* eslint-disable max-len */\n\n/* eslint-disable no-control-regex */\n\nvar splitNameAddress = /^([^\\x00-\\x1F\\x7F-\\x9F\\cX]+)</i;\nvar emailUserPart = /^[a-z\\d!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]+$/i;\nvar gmailUserPart = /^[a-z\\d]+$/;\nvar quotedEmailUser = /^([\\s\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f\\x21\\x23-\\x5b\\x5d-\\x7e]|(\\\\[\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]))*$/i;\nvar emailUserUtf8Part = /^[a-z\\d!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]+$/i;\nvar quotedEmailUserUtf8 = /^([\\s\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f\\x21\\x23-\\x5b\\x5d-\\x7e\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]|(\\\\[\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))*$/i;\nvar defaultMaxEmailLength = 254;\n/* eslint-enable max-len */\n\n/* eslint-enable no-control-regex */\n\n/**\n * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2\n * @param {String} display_name\n */\n\nfunction validateDisplayName(display_name) {\n  var display_name_without_quotes = display_name.replace(/^\"(.+)\"$/, '$1'); // display name with only spaces is not valid\n\n  if (!display_name_without_quotes.trim()) {\n    return false;\n  } // check whether display name contains illegal character\n\n\n  var contains_illegal = /[\\.\";<>]/.test(display_name_without_quotes);\n\n  if (contains_illegal) {\n    // if contains illegal characters,\n    // must to be enclosed in double-quotes, otherwise it's not a valid display name\n    if (display_name_without_quotes === display_name) {\n      return false;\n    } // the quotes in display name must start with character symbol \\\n\n\n    var all_start_with_back_slash = display_name_without_quotes.split('\"').length === display_name_without_quotes.split('\\\\\"').length;\n\n    if (!all_start_with_back_slash) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction isEmail(str, options) {\n  (0, _assertString.default)(str);\n  options = (0, _merge.default)(options, default_email_options);\n\n  if (options.require_display_name || options.allow_display_name) {\n    var display_email = str.match(splitNameAddress);\n\n    if (display_email) {\n      var display_name = display_email[1]; // Remove display name and angle brackets to get email address\n      // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)\n\n      str = str.replace(display_name, '').replace(/(^<|>$)/g, ''); // sometimes need to trim the last space to get the display name\n      // because there may be a space between display name and email address\n      // eg. myname <address@gmail.com>\n      // the display name is `myname` instead of `myname `, so need to trim the last space\n\n      if (display_name.endsWith(' ')) {\n        display_name = display_name.substr(0, display_name.length - 1);\n      }\n\n      if (!validateDisplayName(display_name)) {\n        return false;\n      }\n    } else if (options.require_display_name) {\n      return false;\n    }\n  }\n\n  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {\n    return false;\n  }\n\n  var parts = str.split('@');\n  var domain = parts.pop();\n  var lower_domain = domain.toLowerCase();\n\n  if (options.host_blacklist.includes(lower_domain)) {\n    return false;\n  }\n\n  var user = parts.join('@');\n\n  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {\n    /*\n      Previously we removed dots for gmail addresses before validating.\n      This was removed because it allows `multiple..dots@gmail.com`\n      to be reported as valid, but it is not.\n      Gmail only normalizes single dots, removing them from here is pointless,\n      should be done in normalizeEmail\n    */\n    user = user.toLowerCase(); // Removing sub-address from username before gmail validation\n\n    var username = user.split('+')[0]; // Dots are not included in gmail length restriction\n\n    if (!(0, _isByteLength.default)(username.replace(/\\./g, ''), {\n      min: 6,\n      max: 30\n    })) {\n      return false;\n    }\n\n    var _user_parts = username.split('.');\n\n    for (var i = 0; i < _user_parts.length; i++) {\n      if (!gmailUserPart.test(_user_parts[i])) {\n        return false;\n      }\n    }\n  }\n\n  if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {\n    max: 64\n  }) || !(0, _isByteLength.default)(domain, {\n    max: 254\n  }))) {\n    return false;\n  }\n\n  if (!(0, _isFQDN.default)(domain, {\n    require_tld: options.require_tld\n  })) {\n    if (!options.allow_ip_domain) {\n      return false;\n    }\n\n    if (!(0, _isIP.default)(domain)) {\n      if (!domain.startsWith('[') || !domain.endsWith(']')) {\n        return false;\n      }\n\n      var noBracketdomain = domain.substr(1, domain.length - 2);\n\n      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {\n        return false;\n      }\n    }\n  }\n\n  if (user[0] === '\"') {\n    user = user.slice(1, user.length - 1);\n    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);\n  }\n\n  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;\n  var user_parts = user.split('.');\n\n  for (var _i = 0; _i < user_parts.length; _i++) {\n    if (!pattern.test(user_parts[_i])) {\n      return false;\n    }\n  }\n\n  if (options.blacklisted_chars) {\n    if (user.search(new RegExp(\"[\".concat(options.blacklisted_chars, \"]+\"), 'g')) !== -1) return false;\n  }\n\n  return true;\n}\n\nmodule.exports = exports.default;\nmodule.exports[\"default\"] = exports.default;\n\n//# sourceURL=webpack://quer-carona-front-end/./node_modules/validator/lib/isEmail.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isFQDN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = isFQDN;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar default_fqdn_options = {\n  require_tld: true,\n  allow_underscores: false,\n  allow_trailing_dot: false,\n  allow_numeric_tld: false,\n  allow_wildcard: false\n};\n\nfunction isFQDN(str, options) {\n  (0, _assertString.default)(str);\n  options = (0, _merge.default)(options, default_fqdn_options);\n  /* Remove the optional trailing dot before checking validity */\n\n  if (options.allow_trailing_dot && str[str.length - 1] === '.') {\n    str = str.substring(0, str.length - 1);\n  }\n  /* Remove the optional wildcard before checking validity */\n\n\n  if (options.allow_wildcard === true && str.indexOf('*.') === 0) {\n    str = str.substring(2);\n  }\n\n  var parts = str.split('.');\n  var tld = parts[parts.length - 1];\n\n  if (options.require_tld) {\n    // disallow fqdns without tld\n    if (parts.length < 2) {\n      return false;\n    }\n\n    if (!/^([a-z\\u00A1-\\u00A8\\u00AA-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {\n      return false;\n    } // disallow spaces\n\n\n    if (/\\s/.test(tld)) {\n      return false;\n    }\n  } // reject numeric TLDs\n\n\n  if (!options.allow_numeric_tld && /^\\d+$/.test(tld)) {\n    return false;\n  }\n\n  return parts.every(function (part) {\n    if (part.length > 63) {\n      return false;\n    }\n\n    if (!/^[a-z_\\u00a1-\\uffff0-9-]+$/i.test(part)) {\n      return false;\n    } // disallow full-width chars\n\n\n    if (/[\\uff01-\\uff5e]/.test(part)) {\n      return false;\n    } // disallow parts starting or ending with hyphen\n\n\n    if (/^-|-$/.test(part)) {\n      return false;\n    }\n\n    if (!options.allow_underscores && /_/.test(part)) {\n      return false;\n    }\n\n    return true;\n  });\n}\n\nmodule.exports = exports.default;\nmodule.exports[\"default\"] = exports.default;\n\n//# sourceURL=webpack://quer-carona-front-end/./node_modules/validator/lib/isFQDN.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isIP.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIP.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = isIP;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n11.3.  Examples\n\n   The following addresses\n\n             fe80::1234 (on the 1st link of the node)\n             ff02::5678 (on the 5th link of the node)\n             ff08::9abc (on the 10th organization of the node)\n\n   would be represented as follows:\n\n             fe80::1234%1\n             ff02::5678%5\n             ff08::9abc%10\n\n   (Here we assume a natural translation from a zone index to the\n   <zone_id> part, where the Nth zone of any scope is translated into\n   \"N\".)\n\n   If we use interface names as <zone_id>, those addresses could also be\n   represented as follows:\n\n            fe80::1234%ne0\n            ff02::5678%pvc1.3\n            ff08::9abc%interface10\n\n   where the interface \"ne0\" belongs to the 1st link, \"pvc1.3\" belongs\n   to the 5th link, and \"interface10\" belongs to the 10th organization.\n * * */\nvar IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';\nvar IPv4AddressFormat = \"(\".concat(IPv4SegmentFormat, \"[.]){3}\").concat(IPv4SegmentFormat);\nvar IPv4AddressRegExp = new RegExp(\"^\".concat(IPv4AddressFormat, \"$\"));\nvar IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';\nvar IPv6AddressRegExp = new RegExp('^(' + \"(?:\".concat(IPv6SegmentFormat, \":){7}(?:\").concat(IPv6SegmentFormat, \"|:)|\") + \"(?:\".concat(IPv6SegmentFormat, \":){6}(?:\").concat(IPv4AddressFormat, \"|:\").concat(IPv6SegmentFormat, \"|:)|\") + \"(?:\".concat(IPv6SegmentFormat, \":){5}(?::\").concat(IPv4AddressFormat, \"|(:\").concat(IPv6SegmentFormat, \"){1,2}|:)|\") + \"(?:\".concat(IPv6SegmentFormat, \":){4}(?:(:\").concat(IPv6SegmentFormat, \"){0,1}:\").concat(IPv4AddressFormat, \"|(:\").concat(IPv6SegmentFormat, \"){1,3}|:)|\") + \"(?:\".concat(IPv6SegmentFormat, \":){3}(?:(:\").concat(IPv6SegmentFormat, \"){0,2}:\").concat(IPv4AddressFormat, \"|(:\").concat(IPv6SegmentFormat, \"){1,4}|:)|\") + \"(?:\".concat(IPv6SegmentFormat, \":){2}(?:(:\").concat(IPv6SegmentFormat, \"){0,3}:\").concat(IPv4AddressFormat, \"|(:\").concat(IPv6SegmentFormat, \"){1,5}|:)|\") + \"(?:\".concat(IPv6SegmentFormat, \":){1}(?:(:\").concat(IPv6SegmentFormat, \"){0,4}:\").concat(IPv4AddressFormat, \"|(:\").concat(IPv6SegmentFormat, \"){1,6}|:)|\") + \"(?::((?::\".concat(IPv6SegmentFormat, \"){0,5}:\").concat(IPv4AddressFormat, \"|(?::\").concat(IPv6SegmentFormat, \"){1,7}|:))\") + ')(%[0-9a-zA-Z-.:]{1,})?$');\n\nfunction isIP(str) {\n  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  (0, _assertString.default)(str);\n  version = String(version);\n\n  if (!version) {\n    return isIP(str, 4) || isIP(str, 6);\n  }\n\n  if (version === '4') {\n    if (!IPv4AddressRegExp.test(str)) {\n      return false;\n    }\n\n    var parts = str.split('.').sort(function (a, b) {\n      return a - b;\n    });\n    return parts[3] <= 255;\n  }\n\n  if (version === '6') {\n    return !!IPv6AddressRegExp.test(str);\n  }\n\n  return false;\n}\n\nmodule.exports = exports.default;\nmodule.exports[\"default\"] = exports.default;\n\n//# sourceURL=webpack://quer-carona-front-end/./node_modules/validator/lib/isIP.js?");

/***/ }),

/***/ "./node_modules/validator/lib/util/assertString.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
/***/ ((module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = assertString;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction assertString(input) {\n  var isString = typeof input === 'string' || input instanceof String;\n\n  if (!isString) {\n    var invalidType = _typeof(input);\n\n    if (input === null) invalidType = 'null';else if (invalidType === 'object') invalidType = input.constructor.name;\n    throw new TypeError(\"Expected a string but received a \".concat(invalidType));\n  }\n}\n\nmodule.exports = exports.default;\nmodule.exports[\"default\"] = exports.default;\n\n//# sourceURL=webpack://quer-carona-front-end/./node_modules/validator/lib/util/assertString.js?");

/***/ }),

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/***/ ((module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = merge;\n\nfunction merge() {\n  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var defaults = arguments.length > 1 ? arguments[1] : undefined;\n\n  for (var key in defaults) {\n    if (typeof obj[key] === 'undefined') {\n      obj[key] = defaults[key];\n    }\n  }\n\n  return obj;\n}\n\nmodule.exports = exports.default;\nmodule.exports[\"default\"] = exports.default;\n\n//# sourceURL=webpack://quer-carona-front-end/./node_modules/validator/lib/util/merge.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;