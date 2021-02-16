module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/reports/[reportId].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/reports/[reportId].ts":
/*!*****************************************!*\
  !*** ./pages/api/reports/[reportId].ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();\n\nconst handler = async (req, res) => {\n  try {\n    if (!req.body) {\n      return res.status(400).json({\n        error: 'Missing body payload'\n      });\n    }\n\n    if (!req.query.reportId) {\n      return res.status(400).json({\n        error: 'Empty reportId param'\n      });\n    }\n\n    const reportId = req.query.reportId.toString();\n    const {\n      ticketState\n    } = req.body;\n    await prisma.report.update({\n      where: {\n        id: reportId\n      },\n      data: {\n        status: ticketState\n      }\n    });\n    const reports = await prisma.report.findMany({\n      where: {\n        status: 'OPEN'\n      }\n    });\n    res.status(200).json({\n      reports\n    });\n    res.end();\n  } catch (err) {\n    throw new Error(err);\n  }\n\n  ;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVwb3J0cy9bcmVwb3J0SWRdLnRzP2MxZDUiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJxdWVyeSIsInJlcG9ydElkIiwidG9TdHJpbmciLCJ0aWNrZXRTdGF0ZSIsInJlcG9ydCIsInVwZGF0ZSIsIndoZXJlIiwiaWQiLCJkYXRhIiwicmVwb3J0cyIsImZpbmRNYW55IiwiZW5kIiwiZXJyIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLDJEQUFKLEVBQWY7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ25FLE1BQUk7QUFDRixRQUFHLENBQUNELEdBQUcsQ0FBQ0UsSUFBUixFQUFjO0FBQ1osYUFBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBckIsQ0FBUDtBQUNEOztBQUNELFFBQUcsQ0FBQ0wsR0FBRyxDQUFDTSxLQUFKLENBQVVDLFFBQWQsRUFBd0I7QUFDdEIsYUFBT04sR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBckIsQ0FBUDtBQUNEOztBQUNELFVBQU1FLFFBQVEsR0FBR1AsR0FBRyxDQUFDTSxLQUFKLENBQVVDLFFBQVYsQ0FBbUJDLFFBQW5CLEVBQWpCO0FBRUEsVUFBTTtBQUFFQztBQUFGLFFBQWtCVCxHQUFHLENBQUNFLElBQTVCO0FBRUEsVUFBTUwsTUFBTSxDQUFDYSxNQUFQLENBQWNDLE1BQWQsQ0FBcUI7QUFDekJDLFdBQUssRUFBRTtBQUNMQyxVQUFFLEVBQUVOO0FBREMsT0FEa0I7QUFJekJPLFVBQUksRUFBRTtBQUNKWCxjQUFNLEVBQUVNO0FBREo7QUFKbUIsS0FBckIsQ0FBTjtBQVNBLFVBQU1NLE9BQU8sR0FBRyxNQUFNbEIsTUFBTSxDQUFDYSxNQUFQLENBQWNNLFFBQWQsQ0FBdUI7QUFDM0NKLFdBQUssRUFBRTtBQUNMVCxjQUFNLEVBQUU7QUFESDtBQURvQyxLQUF2QixDQUF0QjtBQU1BRixPQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFVztBQUFGLEtBQXJCO0FBQ0FkLE9BQUcsQ0FBQ2dCLEdBQUo7QUFDRCxHQTVCRCxDQTRCRSxPQUFNQyxHQUFOLEVBQVc7QUFDWCxVQUFNLElBQUlDLEtBQUosQ0FBVUQsR0FBVixDQUFOO0FBQ0Q7O0FBQUE7QUFDRixDQWhDRDs7QUFtQ2VuQixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9yZXBvcnRzL1tyZXBvcnRJZF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBpZighcmVxLmJvZHkpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnTWlzc2luZyBib2R5IHBheWxvYWQnIH0pO1xuICAgIH1cbiAgICBpZighcmVxLnF1ZXJ5LnJlcG9ydElkKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0VtcHR5IHJlcG9ydElkIHBhcmFtJyB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVwb3J0SWQgPSByZXEucXVlcnkucmVwb3J0SWQudG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IHsgdGlja2V0U3RhdGUgfSA9IHJlcS5ib2R5O1xuXG4gICAgYXdhaXQgcHJpc21hLnJlcG9ydC51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHJlcG9ydElkXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXM6IHRpY2tldFN0YXRlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBvcnRzID0gYXdhaXQgcHJpc21hLnJlcG9ydC5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBzdGF0dXM6ICdPUEVOJ1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXBvcnRzIH0pO1xuICAgIHJlcy5lbmQoKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/reports/[reportId].ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ })

/******/ });