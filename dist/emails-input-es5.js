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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ES5.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ES5.js":
/*!********************!*\
  !*** ./src/ES5.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _es = __webpack_require__(/*! ./js/es5 */ \"./src/js/es5.js\");\n\nvar _es2 = _interopRequireDefault(_es);\n\nvar _index = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _es2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRVM1LmpzPzVlN2EiXSwibmFtZXMiOlsiRW1haWxzSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZUEsWSIsImZpbGUiOiIuL3NyYy9FUzUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1haWxzSW5wdXQgZnJvbSAnLi9qcy9lczUnO1xuaW1wb3J0IFN0eWxlcyBmcm9tICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxzSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ES5.js\n");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst env = \"development\" === 'development';\n\nconst URL_CSS = {\n  style: (env) ? '../dist/style.css' : 'https://emails-input.now.sh/style.css',\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (URL_CSS);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LmpzP2YxMjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxZQUFZLGFBQW9COztBQUVoQztBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQyIsImZpbGUiOiIuL3NyYy9jb25maWcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcblxuY29uc3QgVVJMX0NTUyA9IHtcbiAgc3R5bGU6IChlbnYpID8gJy4uL2Rpc3Qvc3R5bGUuY3NzJyA6ICdodHRwczovL2VtYWlscy1pbnB1dC5ub3cuc2gvc3R5bGUuY3NzJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVSTF9DU1M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/js/es5.js":
/*!***********************!*\
  !*** ./src/js/es5.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/index */ \"./src/config/index.js\");\n/* eslint-disable */\n\n\n\n(function (window) {\n \n  function EmailsInput(nodes) {\n    EmailsInput.render(nodes);\n  }\n\n  EmailsInput.addStyle = function(parent) {\n    var styleTag = document.createElement('style');\n    var url = '@import \"' + _config_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].style + '\"';\n    styleTag.textContent = url;\n    parent.appendChild(styleTag);\n  }\n\n  EmailsInput.checkEmail = function(email) {\n    var self = this;\n    var regex = new RegExp(/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/);\n\n    return regex.test(email);\n  }\n\n  EmailsInput.createElementEmail = function(value) {\n    var pill = document.createElement('div');\n    pill.className = 'pill';\n    var a = document.createElement('a');\n    a.className = 'close';\n    var span = document.createElement('span');\n    span.innerText = value;\n    a.appendChild(span);\n    a.addEventListener('click', event => this.removePill(event));\n    pill.appendChild(a);\n\n    if (value !== 'invalid.email') pill.classList.add('valid');\n\n    if (value === 'invalid.email') pill.classList.add('invalid');\n\n    return pill;\n  }\n\n  EmailsInput.removePill = function(event) {\n    var self = this;\n    var target = event.target;\n    var tagName = event.target.tagName;\n    if (tagName === 'SPAN') target.parentElement.parentNode.remove();\n\n    if (tagName === 'A') target.parentElement.remove();\n  }\n\n  EmailsInput.addEmail = function(event) {\n    var listEmails = [];\n    var container = event.target.parentElement.parentElement;\n    var content = container.getElementsByClassName('content')[0];\n    var emails = content.getElementsByClassName('multiple-emails')[0];\n    var pills = emails.getElementsByClassName('pill');\n    var input = emails.getElementsByTagName('input')[0];\n    var lengthPills = pills.length;\n    for (let i = 0; i < lengthPills; i++) {\n      var text = pills[i].textContent;\n      if (text && text !== 'invalid.email') listEmails.push(pills[i]);\n    }\n    var indexRandom = Math.floor(Math.random() * listEmails.length);\n    if (listEmails[indexRandom]) {\n      var newEmail = listEmails[indexRandom].cloneNode(true);\n      newEmail.getElementsByTagName('a')[0].addEventListener('click', e => this.removePill(e));\n      var element = pills[pills.length - 1];\n      element.className += 'random';\n      element.after(newEmail);\n      if(input.scrollIntoView){\n      input.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });\n      }\n    }\n  }\n\n  EmailsInput.getEmailsCount = function(event) {\n    var self = this;\n    var container = event.target.parentElement.parentElement;\n    var content = container.getElementsByClassName('content')[0];\n    var action = container.getElementsByClassName('action')[0];\n    var emails = content.getElementsByClassName('multiple-emails')[0];\n    var pillsValids = emails.getElementsByClassName('pill valid');\n\n    var isExistCounter = action.getElementsByClassName('counter')[0];\n    if (isExistCounter) {\n      isExistCounter.innerText = `Valid emails count : ${pillsValids.length}`;\n    } else {\n      var counter = document.createElement('div');\n      counter.className = 'counter';\n      counter.innerText = `Valid emails count : ${pillsValids.length}`;\n      action.appendChild(counter);\n    }\n  }\n\n  EmailsInput.addEmailsFormatted = function(values,multipleEmails) {\n    var emails = values.split(',').filter(email => email);\n    var lengthEmails = emails.length;\n    var element = multipleEmails.getElementsByTagName('input')[0];\n    for (let i = 0; i < lengthEmails; i++) {\n      var emailText = emails[i].trim().toLowerCase();\n      if (this.checkEmail(emailText)) {\n        element.before(this.createElementEmail(emailText));\n        if(element.scrollIntoView){\n        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });\n        }\n      } else {\n        element.before(this.createElementEmail('invalid.email'));\n        if(element.scrollIntoView){\n        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });\n        }\n      }\n    }\n  }\n\n  EmailsInput.addEventsInput = function(input,multipleEmails) {\n    input.addEventListener('keyup', (event) => {\n      event.preventDefault();\n      var value = event.target.value;\n      if (value) {\n        if (event.keyCode === 13) {\n          this.addEmailsFormatted(value, multipleEmails);\n          event.target.value = '';\n        }\n        if (event.keyCode === 91) {\n          this.addEmailsFormatted(value, multipleEmails);\n          event.target.value = '';\n        }\n        if (event.keyCode === 188) {\n          this.addEmailsFormatted(value, multipleEmails);\n          event.target.value = '';\n        }\n      }\n    });\n\n    input.addEventListener('blur', (event) => {\n      event.preventDefault();\n      var value = event.target.value;\n      if (value) {\n        this.addEmailsFormatted(value, multipleEmails);\n        event.target.value = '';\n      }\n    });\n  }\n\n  EmailsInput.render = function(nodes) {\n    var div = document.createElement('div');\n    var content = document.createElement('div');\n    var action = document.createElement('div');\n    var button = document.createElement('button');\n    var paragraph = document.createElement('label');\n    var input = document.createElement('input');\n    var multipleEmails = document.createElement('div');\n    multipleEmails.className = 'multiple-emails';\n    input.setAttribute('type', 'email');\n    input.setAttribute('id', 'emailinput');\n    input.setAttribute('placeholder', 'add more people…');\n    EmailsInput.addEventsInput(input, multipleEmails);\n    action.className = 'action';\n    content.className = 'content';\n    paragraph.innerHTML = 'Share <span>Board name</span> with others';\n    button.innerText = 'Add email';\n    var buttonEmails = document.createElement('button');\n    buttonEmails.innerText = 'Get emails count';\n    buttonEmails.addEventListener('click', event => EmailsInput.getEmailsCount(event));\n    button.addEventListener('click', event => EmailsInput.addEmail(event));\n    content.appendChild(paragraph);\n    multipleEmails.appendChild(input);\n    content.appendChild(multipleEmails);\n    action.appendChild(button);\n    action.appendChild(buttonEmails);\n    div.appendChild(content);\n    div.appendChild(action);\n    div.classList.add('emails-input');\n    EmailsInput.addStyle(div);\n\n    if(nodes && !nodes.length){\n      nodes.appendChild(div);\n    }\n  }\n  window.EmailsInput = EmailsInput;\n\n}(window));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZXM1LmpzPzg4Y2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUVzQzs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIscURBQU87QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGdDQUFnQyxHQUFHOztBQUUvSztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQXVEO0FBQ25GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQXlELG1CQUFtQjtBQUM1RSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtEQUFrRCxtQkFBbUI7QUFDckU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1REFBdUQ7QUFDdkY7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGdDQUFnQyx1REFBdUQ7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6Ii4vc3JjL2pzL2VzNS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBVUkxfQ1NTIGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5cbihmdW5jdGlvbiAod2luZG93KSB7XG4gXG4gIGZ1bmN0aW9uIEVtYWlsc0lucHV0KG5vZGVzKSB7XG4gICAgRW1haWxzSW5wdXQucmVuZGVyKG5vZGVzKTtcbiAgfVxuXG4gIEVtYWlsc0lucHV0LmFkZFN0eWxlID0gZnVuY3Rpb24ocGFyZW50KSB7XG4gICAgdmFyIHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICB2YXIgdXJsID0gJ0BpbXBvcnQgXCInICsgVVJMX0NTUy5zdHlsZSArICdcIic7XG4gICAgc3R5bGVUYWcudGV4dENvbnRlbnQgPSB1cmw7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcbiAgfVxuXG4gIEVtYWlsc0lucHV0LmNoZWNrRW1haWwgPSBmdW5jdGlvbihlbWFpbCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKTtcblxuICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcbiAgfVxuXG4gIEVtYWlsc0lucHV0LmNyZWF0ZUVsZW1lbnRFbWFpbCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHBpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaWxsLmNsYXNzTmFtZSA9ICdwaWxsJztcbiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmNsYXNzTmFtZSA9ICdjbG9zZSc7XG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICBhLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLnJlbW92ZVBpbGwoZXZlbnQpKTtcbiAgICBwaWxsLmFwcGVuZENoaWxkKGEpO1xuXG4gICAgaWYgKHZhbHVlICE9PSAnaW52YWxpZC5lbWFpbCcpIHBpbGwuY2xhc3NMaXN0LmFkZCgndmFsaWQnKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gJ2ludmFsaWQuZW1haWwnKSBwaWxsLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcblxuICAgIHJldHVybiBwaWxsO1xuICB9XG5cbiAgRW1haWxzSW5wdXQucmVtb3ZlUGlsbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIHRhZ05hbWUgPSBldmVudC50YXJnZXQudGFnTmFtZTtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ1NQQU4nKSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuXG4gICAgaWYgKHRhZ05hbWUgPT09ICdBJykgdGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBFbWFpbHNJbnB1dC5hZGRFbWFpbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGxpc3RFbWFpbHMgPSBbXTtcbiAgICB2YXIgY29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB2YXIgY29udGVudCA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250ZW50JylbMF07XG4gICAgdmFyIGVtYWlscyA9IGNvbnRlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXVsdGlwbGUtZW1haWxzJylbMF07XG4gICAgdmFyIHBpbGxzID0gZW1haWxzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BpbGwnKTtcbiAgICB2YXIgaW5wdXQgPSBlbWFpbHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgdmFyIGxlbmd0aFBpbGxzID0gcGlsbHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoUGlsbHM7IGkrKykge1xuICAgICAgdmFyIHRleHQgPSBwaWxsc1tpXS50ZXh0Q29udGVudDtcbiAgICAgIGlmICh0ZXh0ICYmIHRleHQgIT09ICdpbnZhbGlkLmVtYWlsJykgbGlzdEVtYWlscy5wdXNoKHBpbGxzW2ldKTtcbiAgICB9XG4gICAgdmFyIGluZGV4UmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdEVtYWlscy5sZW5ndGgpO1xuICAgIGlmIChsaXN0RW1haWxzW2luZGV4UmFuZG9tXSkge1xuICAgICAgdmFyIG5ld0VtYWlsID0gbGlzdEVtYWlsc1tpbmRleFJhbmRvbV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgbmV3RW1haWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5yZW1vdmVQaWxsKGUpKTtcbiAgICAgIHZhciBlbGVtZW50ID0gcGlsbHNbcGlsbHMubGVuZ3RoIC0gMV07XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAncmFuZG9tJztcbiAgICAgIGVsZW1lbnQuYWZ0ZXIobmV3RW1haWwpO1xuICAgICAgaWYoaW5wdXQuc2Nyb2xsSW50b1ZpZXcpe1xuICAgICAgaW5wdXQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJywgaW5saW5lOiAnc3RhcnQnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEVtYWlsc0lucHV0LmdldEVtYWlsc0NvdW50ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgdmFyIGNvbnRlbnQgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudCcpWzBdO1xuICAgIHZhciBhY3Rpb24gPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aW9uJylbMF07XG4gICAgdmFyIGVtYWlscyA9IGNvbnRlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXVsdGlwbGUtZW1haWxzJylbMF07XG4gICAgdmFyIHBpbGxzVmFsaWRzID0gZW1haWxzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BpbGwgdmFsaWQnKTtcblxuICAgIHZhciBpc0V4aXN0Q291bnRlciA9IGFjdGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudGVyJylbMF07XG4gICAgaWYgKGlzRXhpc3RDb3VudGVyKSB7XG4gICAgICBpc0V4aXN0Q291bnRlci5pbm5lclRleHQgPSBgVmFsaWQgZW1haWxzIGNvdW50IDogJHtwaWxsc1ZhbGlkcy5sZW5ndGh9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvdW50ZXIuY2xhc3NOYW1lID0gJ2NvdW50ZXInO1xuICAgICAgY291bnRlci5pbm5lclRleHQgPSBgVmFsaWQgZW1haWxzIGNvdW50IDogJHtwaWxsc1ZhbGlkcy5sZW5ndGh9YDtcbiAgICAgIGFjdGlvbi5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgICB9XG4gIH1cblxuICBFbWFpbHNJbnB1dC5hZGRFbWFpbHNGb3JtYXR0ZWQgPSBmdW5jdGlvbih2YWx1ZXMsbXVsdGlwbGVFbWFpbHMpIHtcbiAgICB2YXIgZW1haWxzID0gdmFsdWVzLnNwbGl0KCcsJykuZmlsdGVyKGVtYWlsID0+IGVtYWlsKTtcbiAgICB2YXIgbGVuZ3RoRW1haWxzID0gZW1haWxzLmxlbmd0aDtcbiAgICB2YXIgZWxlbWVudCA9IG11bHRpcGxlRW1haWxzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoRW1haWxzOyBpKyspIHtcbiAgICAgIHZhciBlbWFpbFRleHQgPSBlbWFpbHNbaV0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAodGhpcy5jaGVja0VtYWlsKGVtYWlsVGV4dCkpIHtcbiAgICAgICAgZWxlbWVudC5iZWZvcmUodGhpcy5jcmVhdGVFbGVtZW50RW1haWwoZW1haWxUZXh0KSk7XG4gICAgICAgIGlmKGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcpe1xuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicsIGlubGluZTogJ3N0YXJ0JyB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5iZWZvcmUodGhpcy5jcmVhdGVFbGVtZW50RW1haWwoJ2ludmFsaWQuZW1haWwnKSk7XG4gICAgICAgIGlmKGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcpe1xuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicsIGlubGluZTogJ3N0YXJ0JyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEVtYWlsc0lucHV0LmFkZEV2ZW50c0lucHV0ID0gZnVuY3Rpb24oaW5wdXQsbXVsdGlwbGVFbWFpbHMpIHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLmFkZEVtYWlsc0Zvcm1hdHRlZCh2YWx1ZSwgbXVsdGlwbGVFbWFpbHMpO1xuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5MSkge1xuICAgICAgICAgIHRoaXMuYWRkRW1haWxzRm9ybWF0dGVkKHZhbHVlLCBtdWx0aXBsZUVtYWlscyk7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDE4OCkge1xuICAgICAgICAgIHRoaXMuYWRkRW1haWxzRm9ybWF0dGVkKHZhbHVlLCBtdWx0aXBsZUVtYWlscyk7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZGRFbWFpbHNGb3JtYXR0ZWQodmFsdWUsIG11bHRpcGxlRW1haWxzKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBFbWFpbHNJbnB1dC5yZW5kZXIgPSBmdW5jdGlvbihub2Rlcykge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdmFyIHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB2YXIgbXVsdGlwbGVFbWFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtdWx0aXBsZUVtYWlscy5jbGFzc05hbWUgPSAnbXVsdGlwbGUtZW1haWxzJztcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2FkZCBtb3JlIHBlb3BsZeKApicpO1xuICAgIEVtYWlsc0lucHV0LmFkZEV2ZW50c0lucHV0KGlucHV0LCBtdWx0aXBsZUVtYWlscyk7XG4gICAgYWN0aW9uLmNsYXNzTmFtZSA9ICdhY3Rpb24nO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnO1xuICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSAnU2hhcmUgPHNwYW4+Qm9hcmQgbmFtZTwvc3Bhbj4gd2l0aCBvdGhlcnMnO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIGVtYWlsJztcbiAgICB2YXIgYnV0dG9uRW1haWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uRW1haWxzLmlubmVyVGV4dCA9ICdHZXQgZW1haWxzIGNvdW50JztcbiAgICBidXR0b25FbWFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBFbWFpbHNJbnB1dC5nZXRFbWFpbHNDb3VudChldmVudCkpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IEVtYWlsc0lucHV0LmFkZEVtYWlsKGV2ZW50KSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgIG11bHRpcGxlRW1haWxzLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG11bHRpcGxlRW1haWxzKTtcbiAgICBhY3Rpb24uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBhY3Rpb24uYXBwZW5kQ2hpbGQoYnV0dG9uRW1haWxzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFjdGlvbik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2VtYWlscy1pbnB1dCcpO1xuICAgIEVtYWlsc0lucHV0LmFkZFN0eWxlKGRpdik7XG5cbiAgICBpZihub2RlcyAmJiAhbm9kZXMubGVuZ3RoKXtcbiAgICAgIG5vZGVzLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG4gIHdpbmRvdy5FbWFpbHNJbnB1dCA9IEVtYWlsc0lucHV0O1xuXG59KHdpbmRvdykpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/es5.js\n");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YTk5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3NyYy9zdHlsZXMvaW5kZXguc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/index.scss\n");

/***/ })

/******/ });