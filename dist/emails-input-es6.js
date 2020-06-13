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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ES6.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ES6.js":
/*!********************!*\
  !*** ./src/ES6.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/es6 */ \"./src/js/es6.js\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_js_es6__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRVM2LmpzPzg5NGUiXSwibmFtZXMiOlsiRW1haWxzSW5wdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFZUEsOEdBQWYiLCJmaWxlIjoiLi9zcmMvRVM2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtYWlsc0lucHV0IGZyb20gJy4vanMvZXM2JztcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsc0lucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ES6.js\n");

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

/***/ "./src/js/es6.js":
/*!***********************!*\
  !*** ./src/js/es6.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/index */ \"./src/config/index.js\");\n\n\nclass EmailsInput extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({ mode: 'open' });\n    this.render();\n  }\n\n  addStyle() {\n    const styleTag = document.createElement('style');\n    styleTag.textContent = `@import \"${_config_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].style}\"`;\n    this.shadowRoot.appendChild(styleTag);\n  }\n\n  checkEmail(email) {\n    const self = this;\n    const regex = new RegExp(/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/);\n\n    return regex.test(email);\n  }\n\n  createElementEmail(value) {\n    const pill = document.createElement('div');\n    pill.className = 'pill';\n    const a = document.createElement('a');\n    a.className = 'close';\n    const span = document.createElement('span');\n    span.innerText = value;\n    a.appendChild(span);\n    a.addEventListener('click', event => this.removePill(event));\n    pill.appendChild(a);\n\n    if (value !== 'invalid.email') pill.classList.add('valid');\n\n    if (value === 'invalid.email') pill.classList.add('invalid');\n\n    return pill;\n  }\n\n  removePill(event) {\n    const self = this;\n    const { target } = event;\n    const { tagName } = event.target;\n    if (tagName === 'SPAN') target.parentElement.parentNode.remove();\n\n    if (tagName === 'A') target.parentElement.remove();\n  }\n\n  addEmail(event) {\n    const listEmails = [];\n    const container = event.target.parentElement.parentElement;\n    const content = container.getElementsByClassName('content')[0];\n    const emails = content.getElementsByClassName('multiple-emails')[0];\n    const pills = emails.getElementsByClassName('pill');\n    const input = emails.getElementsByTagName('input')[0];\n    const lengthPills = pills.length;\n    for (let i = 0; i < lengthPills; i++) {\n      const text = pills[i].textContent;\n      if (text && text !== 'invalid.email') listEmails.push(pills[i]);\n    }\n    const indexRandom = Math.floor(Math.random() * listEmails.length);\n    if (listEmails[indexRandom]) {\n      const newEmail = listEmails[indexRandom].cloneNode(true);\n      newEmail.getElementsByTagName('a')[0].addEventListener('click', e => this.removePill(e));\n      const element = pills[pills.length - 1];\n      element.classList.add('random');\n      element.after(newEmail);\n      input.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });\n    }\n  }\n\n  getEmailsCount(event) {\n    const self = this;\n    const container = event.target.parentElement.parentElement;\n    const content = container.getElementsByClassName('content')[0];\n    const action = container.getElementsByClassName('action')[0];\n    const emails = content.getElementsByClassName('multiple-emails')[0];\n    const pillsValids = emails.getElementsByClassName('pill valid');\n\n    const isExistCounter = action.getElementsByClassName('counter')[0];\n    if (isExistCounter) {\n      isExistCounter.innerText = `Valid emails count : ${pillsValids.length}`;\n    } else {\n      const counter = document.createElement('div');\n      counter.className = 'counter';\n      counter.innerText = `Valid emails count : ${pillsValids.length}`;\n      action.appendChild(counter);\n    }\n  }\n\n  addEmailsFormatted(values, multipleEmails) {\n    const emails = values.split(',').filter(email => email);\n    const lengthEmails = emails.length;\n    const element = multipleEmails.getElementsByTagName('input')[0];\n    for (let i = 0; i < lengthEmails; i++) {\n      const emailText = emails[i].trim().toLowerCase();\n      if (this.checkEmail(emailText)) {\n        element.before(this.createElementEmail(emailText));\n        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });\n      } else {\n        element.before(this.createElementEmail('invalid.email'));\n        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });\n      }\n    }\n  }\n\n  addEventsInput(input, multipleEmails) {\n    input.addEventListener('keyup', (event) => {\n      event.preventDefault();\n      const { value } = event.target;\n      if (value) {\n        if (event.keyCode === 13) {\n          this.addEmailsFormatted(value, multipleEmails);\n          event.target.value = '';\n        }\n        if (event.keyCode === 91) {\n          this.addEmailsFormatted(value, multipleEmails);\n          event.target.value = '';\n        }\n        if (event.keyCode === 188) {\n          this.addEmailsFormatted(value, multipleEmails);\n          event.target.value = '';\n        }\n      }\n    });\n\n    input.addEventListener('blur', (event) => {\n      event.preventDefault();\n      const { value } = event.target;\n      if (value) {\n        this.addEmailsFormatted(value, multipleEmails);\n        event.target.value = '';\n      }\n    });\n  }\n\n  render() {\n    const div = document.createElement('div');\n    const content = document.createElement('div');\n    const action = document.createElement('div');\n    const button = document.createElement('button');\n    const paragraph = document.createElement('label');\n    const input = document.createElement('input');\n    const multipleEmails = document.createElement('div');\n    multipleEmails.className = 'multiple-emails';\n    input.setAttribute('type', 'email');\n    input.setAttribute('id', 'emailinput');\n    input.setAttribute('placeholder', 'add more people…');\n    this.addEventsInput(input, multipleEmails);\n    action.className = 'action';\n    content.className = 'content';\n    paragraph.innerHTML = 'Share <span>Board name</span> with others';\n    button.innerText = 'Add email';\n    const buttonEmails = document.createElement('button');\n    buttonEmails.innerText = 'Get emails count';\n    buttonEmails.addEventListener('click', event => this.getEmailsCount(event));\n    button.addEventListener('click', event => this.addEmail(event));\n    content.appendChild(paragraph);\n    multipleEmails.appendChild(input);\n    content.appendChild(multipleEmails);\n    action.appendChild(button);\n    action.appendChild(buttonEmails);\n    div.appendChild(content);\n    div.appendChild(action);\n    div.classList.add('emails-input');\n    this.shadowRoot.appendChild(div);\n    this.addStyle();\n  }\n}\n\ntry {\n  customElements.define('emails-input', EmailsInput);\n} catch (err) {\n  const h3 = document.createElement('h3');\n  h3.innerHTML = \"This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!\";\n  document.body.appendChild(h3);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailsInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZXM2LmpzP2RmMmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFzQzs7QUFFdEM7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxxREFBTyxPQUFPO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCx5QkFBeUIsNkJBQTZCLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksZ0NBQWdDLEdBQUc7O0FBRWpMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsVUFBVTtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVEQUF1RDtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsbUJBQW1CO0FBQzVFLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0RBQWtELG1CQUFtQjtBQUNyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1REFBdUQ7QUFDdkYsT0FBTztBQUNQO0FBQ0EsZ0NBQWdDLHVEQUF1RDtBQUN2RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMEVBQVcsRUFBQyIsImZpbGUiOiIuL3NyYy9qcy9lczYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVVJMX0NTUyBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xuXG5jbGFzcyBFbWFpbHNJbnB1dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGFkZFN0eWxlKCkge1xuICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZVRhZy50ZXh0Q29udGVudCA9IGBAaW1wb3J0IFwiJHtVUkxfQ1NTLnN0eWxlfVwiYDtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICB9XG5cbiAgY2hlY2tFbWFpbChlbWFpbCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyk7XG5cbiAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50RW1haWwodmFsdWUpIHtcbiAgICBjb25zdCBwaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGlsbC5jbGFzc05hbWUgPSAncGlsbCc7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmNsYXNzTmFtZSA9ICdjbG9zZSc7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIGEuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMucmVtb3ZlUGlsbChldmVudCkpO1xuICAgIHBpbGwuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICBpZiAodmFsdWUgIT09ICdpbnZhbGlkLmVtYWlsJykgcGlsbC5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnaW52YWxpZC5lbWFpbCcpIHBpbGwuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuXG4gICAgcmV0dXJuIHBpbGw7XG4gIH1cblxuICByZW1vdmVQaWxsKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YWdOYW1lID09PSAnU1BBTicpIHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlKCk7XG5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ0EnKSB0YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGFkZEVtYWlsKGV2ZW50KSB7XG4gICAgY29uc3QgbGlzdEVtYWlscyA9IFtdO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgY29udGVudCA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250ZW50JylbMF07XG4gICAgY29uc3QgZW1haWxzID0gY29udGVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdWx0aXBsZS1lbWFpbHMnKVswXTtcbiAgICBjb25zdCBwaWxscyA9IGVtYWlscy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwaWxsJyk7XG4gICAgY29uc3QgaW5wdXQgPSBlbWFpbHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgY29uc3QgbGVuZ3RoUGlsbHMgPSBwaWxscy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhQaWxsczsgaSsrKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gcGlsbHNbaV0udGV4dENvbnRlbnQ7XG4gICAgICBpZiAodGV4dCAmJiB0ZXh0ICE9PSAnaW52YWxpZC5lbWFpbCcpIGxpc3RFbWFpbHMucHVzaChwaWxsc1tpXSk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4UmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdEVtYWlscy5sZW5ndGgpO1xuICAgIGlmIChsaXN0RW1haWxzW2luZGV4UmFuZG9tXSkge1xuICAgICAgY29uc3QgbmV3RW1haWwgPSBsaXN0RW1haWxzW2luZGV4UmFuZG9tXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBuZXdFbWFpbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLnJlbW92ZVBpbGwoZSkpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IHBpbGxzW3BpbGxzLmxlbmd0aCAtIDFdO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyYW5kb20nKTtcbiAgICAgIGVsZW1lbnQuYWZ0ZXIobmV3RW1haWwpO1xuICAgICAgaW5wdXQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJywgaW5saW5lOiAnc3RhcnQnIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEVtYWlsc0NvdW50KGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgY29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBjb250ZW50ID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnQnKVswXTtcbiAgICBjb25zdCBhY3Rpb24gPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aW9uJylbMF07XG4gICAgY29uc3QgZW1haWxzID0gY29udGVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdWx0aXBsZS1lbWFpbHMnKVswXTtcbiAgICBjb25zdCBwaWxsc1ZhbGlkcyA9IGVtYWlscy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwaWxsIHZhbGlkJyk7XG5cbiAgICBjb25zdCBpc0V4aXN0Q291bnRlciA9IGFjdGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudGVyJylbMF07XG4gICAgaWYgKGlzRXhpc3RDb3VudGVyKSB7XG4gICAgICBpc0V4aXN0Q291bnRlci5pbm5lclRleHQgPSBgVmFsaWQgZW1haWxzIGNvdW50IDogJHtwaWxsc1ZhbGlkcy5sZW5ndGh9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY291bnRlci5jbGFzc05hbWUgPSAnY291bnRlcic7XG4gICAgICBjb3VudGVyLmlubmVyVGV4dCA9IGBWYWxpZCBlbWFpbHMgY291bnQgOiAke3BpbGxzVmFsaWRzLmxlbmd0aH1gO1xuICAgICAgYWN0aW9uLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVtYWlsc0Zvcm1hdHRlZCh2YWx1ZXMsIG11bHRpcGxlRW1haWxzKSB7XG4gICAgY29uc3QgZW1haWxzID0gdmFsdWVzLnNwbGl0KCcsJykuZmlsdGVyKGVtYWlsID0+IGVtYWlsKTtcbiAgICBjb25zdCBsZW5ndGhFbWFpbHMgPSBlbWFpbHMubGVuZ3RoO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBtdWx0aXBsZUVtYWlscy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aEVtYWlsczsgaSsrKSB7XG4gICAgICBjb25zdCBlbWFpbFRleHQgPSBlbWFpbHNbaV0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAodGhpcy5jaGVja0VtYWlsKGVtYWlsVGV4dCkpIHtcbiAgICAgICAgZWxlbWVudC5iZWZvcmUodGhpcy5jcmVhdGVFbGVtZW50RW1haWwoZW1haWxUZXh0KSk7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJywgaW5saW5lOiAnc3RhcnQnIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5iZWZvcmUodGhpcy5jcmVhdGVFbGVtZW50RW1haWwoJ2ludmFsaWQuZW1haWwnKSk7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJywgaW5saW5lOiAnc3RhcnQnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50c0lucHV0KGlucHV0LCBtdWx0aXBsZUVtYWlscykge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMuYWRkRW1haWxzRm9ybWF0dGVkKHZhbHVlLCBtdWx0aXBsZUVtYWlscyk7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkxKSB7XG4gICAgICAgICAgdGhpcy5hZGRFbWFpbHNGb3JtYXR0ZWQodmFsdWUsIG11bHRpcGxlRW1haWxzKTtcbiAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTg4KSB7XG4gICAgICAgICAgdGhpcy5hZGRFbWFpbHNGb3JtYXR0ZWQodmFsdWUsIG11bHRpcGxlRW1haWxzKTtcbiAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFkZEVtYWlsc0Zvcm1hdHRlZCh2YWx1ZSwgbXVsdGlwbGVFbWFpbHMpO1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbXVsdGlwbGVFbWFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtdWx0aXBsZUVtYWlscy5jbGFzc05hbWUgPSAnbXVsdGlwbGUtZW1haWxzJztcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2FkZCBtb3JlIHBlb3BsZeKApicpO1xuICAgIHRoaXMuYWRkRXZlbnRzSW5wdXQoaW5wdXQsIG11bHRpcGxlRW1haWxzKTtcbiAgICBhY3Rpb24uY2xhc3NOYW1lID0gJ2FjdGlvbic7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCc7XG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9ICdTaGFyZSA8c3Bhbj5Cb2FyZCBuYW1lPC9zcGFuPiB3aXRoIG90aGVycyc7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgZW1haWwnO1xuICAgIGNvbnN0IGJ1dHRvbkVtYWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbkVtYWlscy5pbm5lclRleHQgPSAnR2V0IGVtYWlscyBjb3VudCc7XG4gICAgYnV0dG9uRW1haWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5nZXRFbWFpbHNDb3VudChldmVudCkpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMuYWRkRW1haWwoZXZlbnQpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgbXVsdGlwbGVFbWFpbHMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXVsdGlwbGVFbWFpbHMpO1xuICAgIGFjdGlvbi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGFjdGlvbi5hcHBlbmRDaGlsZChidXR0b25FbWFpbHMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWN0aW9uKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZW1haWxzLWlucHV0Jyk7XG4gICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKGRpdik7XG4gICAgdGhpcy5hZGRTdHlsZSgpO1xuICB9XG59XG5cbnRyeSB7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZW1haWxzLWlucHV0JywgRW1haWxzSW5wdXQpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMuaW5uZXJIVE1MID0gXCJUaGlzIHNpdGUgdXNlcyB3ZWJjb21wb25lbnRzIHdoaWNoIGRvbid0IHdvcmsgaW4gYWxsIGJyb3dzZXJzISBUcnkgdGhpcyBzaXRlIGluIGEgYnJvd3NlciB0aGF0IHN1cHBvcnRzIHRoZW0hXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaDMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbWFpbHNJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/es6.js\n");

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