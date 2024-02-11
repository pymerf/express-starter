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

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(\"/api/users\", _routes_user_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use(\"/api/auth\", _routes_auth_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use((err, req, res, next) => {\n  if (err.name == \"UnauthorizedError\") {\n    return res.status(401).json({\n      error: err.name + \": \" + err.message\n    });\n  } else {\n    console.error(err);\n    return res.status(400).json({\n      error: err.name + \": \" + err.message\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://mern-skeleton/./server/app.js?");

/***/ }),

/***/ "./server/config.js":
/*!**************************!*\
  !*** ./server/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectName = \"mern-skeleton\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"my$uper$3cre3t\",\n  mongoUri: process.env.MONGO_URI || `mongodb://localhost:27017/${projectName}`\n});\n\n//# sourceURL=webpack://mern-skeleton/./server/config.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./server/config.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./server/app.js\");\n\n\n\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri, {\n  autoIndex: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on(\"error\", () => {\n  throw new Error(`Unable to connect to database: ${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri}`);\n});\n_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listen(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].port, err => {\n  if (err) console.error(err);else console.log(`Server started on port ${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].port}`);\n});\n\n//# sourceURL=webpack://mern-skeleton/./server/index.js?");

/***/ }),

/***/ "./server/middlewares/auth.middleware.js":
/*!***********************************************!*\
  !*** ./server/middlewares/auth.middleware.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hasAuthorization: () => (/* binding */ hasAuthorization),\n/* harmony export */   requireSignin: () => (/* binding */ requireSignin)\n/* harmony export */ });\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./server/config.js\");\n\n\nconst requireSignin = (0,express_jwt__WEBPACK_IMPORTED_MODULE_0__.expressjwt)({\n  secret: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwtSecret,\n  algorithms: [\"HS256\"]\n});\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (authorized) next();else return res.status(403).json({\n    error: \"User is not authorized\"\n  });\n};\n\n//# sourceURL=webpack://mern-skeleton/./server/middlewares/auth.middleware.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email already exists\",\n    match: [/.+\\@.+\\..+/, \"Please fill a valid email address\"],\n    required: \"Email is required\"\n  },\n  hashedPassword: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String\n}, {\n  timestamps: true\n});\nUserSchema.methods = {\n  encryptPassword: function (password) {\n    if (!password) return \"\";\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac(\"sha1\", this.salt).update(password).digest(\"hex\");\n    } catch (error) {\n      return \"\";\n    }\n  },\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) == this.hashedPassword;\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()).toString();\n  }\n};\nUserSchema.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashedPassword = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path(\"hashedPassword\").validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate(\"password\", \"Password must be at least 6 characters.\");\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate(\"password\", \"Password is required\");\n  }\n}, null);\nUserSchema.plugin((mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2___default()));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n\n//# sourceURL=webpack://mern-skeleton/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./server/config.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.post(\"/signin\", async (req, res) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n      email: req.body.email\n    });\n    if (user && user.authenticate(req.body.password)) {\n      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n        _id: user._id\n      }, _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].jwtSecret);\n      res.cookie(\"t\", token, {\n        expires: new Date(Date.now() + 600000)\n      }); // time delta in ms\n      return res.json({\n        token,\n        user: {\n          _id: user._id,\n          name: user.name,\n          email: user.email\n        }\n      });\n    } else res.status(401).json({\n      error: \"Email and Password don't match\"\n    });\n  } catch (error) {\n    return res.status(500).json({\n      error\n    });\n  }\n});\nrouter.get(\"/signout\", async (req, res) => {\n  res.clearCookie(\"t\");\n  return res.json({\n    message: \"signed out\"\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://mern-skeleton/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares/auth.middleware */ \"./server/middlewares/auth.middleware.js\");\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.route(\"/\").get(async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find().select(\"name email updatedAt createdAt\");\n    return res.json(users);\n  } catch (error) {\n    return res.status(500).json({\n      error\n    });\n  }\n}).post(async (req, res, next) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](req.body);\n  try {\n    await user.save();\n    return res.json({\n      message: \"Successfully signed up!\"\n    });\n  } catch (error) {\n    return res.status(400).json({\n      error\n    });\n  }\n});\nrouter.param(\"userId\", async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id);\n    if (!user) return res.status(404).json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  } catch (error) {\n    return res.status(400).json({\n      error\n    });\n  }\n});\nrouter.route(\"/:userId\").get(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__.requireSignin, async (req, res) => {\n  req.profile.hashedPassword = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n}).put(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__.requireSignin, _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__.hasAuthorization, async (req, res) => {\n  try {\n    let user = req.profile;\n    user = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.extend)(user, req.body);\n    await user.save();\n    user.hashedPassword = undefined;\n    user.salt = undefined;\n    return res.json(user);\n  } catch (error) {\n    return res.status(400).json({\n      error\n    });\n  }\n}).delete(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__.requireSignin, _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__.hasAuthorization, async (req, res) => {\n  try {\n    let deletedUser = await _models_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(req.profile._id).select(\"-salt -hashedPassword\");\n    return res.json(deletedUser);\n  } catch (error) {\n    return res.status(400).json({\n      error\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://mern-skeleton/./server/routes/user.routes.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("mongoose-unique-validator");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;