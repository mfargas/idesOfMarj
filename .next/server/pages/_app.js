/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/themeContext.js":
/*!**************************************!*\
  !*** ./src/contexts/themeContext.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext();\nconst useTheme = ()=>{\n    const context = react__WEBPACK_IMPORTED_MODULE_1__.useContext(ThemeContext);\n    if (!context) {\n        throw new Error(\"useTheme must be used within a ThemeProvider\");\n    }\n    return context;\n};\nconst ThemeProvider = ({ children })=>{\n    const [theme, setTheme] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"light\");\n    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    // Initialize theme on mount\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        setMounted(true);\n        // Check localStorage first\n        const savedTheme = localStorage.getItem(\"theme\");\n        if (savedTheme) {\n            setTheme(savedTheme);\n        } else {\n            // Check system preference\n            const systemPrefersDark = window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n            setTheme(systemPrefersDark ? \"dark\" : \"light\");\n        }\n    }, []);\n    // Update document class and localStorage when theme changes\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (!mounted) return;\n        const root = document.documentElement;\n        root.classList.remove(\"light\", \"dark\");\n        root.classList.add(theme);\n        localStorage.setItem(\"theme\", theme);\n    }, [\n        theme,\n        mounted\n    ]);\n    // Listen for system theme changes\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (!mounted) return;\n        const mediaQuery = window.matchMedia(\"(prefers-color-scheme: dark)\");\n        const handleChange = (e)=>{\n            // Only update if user hasn't manually set a preference\n            if (!localStorage.getItem(\"theme\")) {\n                setTheme(e.matches ? \"dark\" : \"light\");\n            }\n        };\n        mediaQuery.addEventListener(\"change\", handleChange);\n        return ()=>mediaQuery.removeEventListener(\"change\", handleChange);\n    }, [\n        mounted\n    ]);\n    const toggleTheme = ()=>{\n        setTheme((prevTheme)=>prevTheme === \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme,\n            mounted\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/marjoreefargas/Documents/GitHub/idesOfMarj/src/contexts/themeContext.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdGhlbWVDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFFOUIsTUFBTUMsNkJBQWVELGdEQUFtQjtBQUVqQyxNQUFNRyxXQUFXO0lBQ3RCLE1BQU1DLFVBQVVKLDZDQUFnQixDQUFDQztJQUNqQyxJQUFJLENBQUNHLFNBQVM7UUFDWixNQUFNLElBQUlFLE1BQU07SUFDbEI7SUFDQSxPQUFPRjtBQUNULEVBQUM7QUFFTSxNQUFNRyxnQkFBZ0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDeEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLDJDQUFjLENBQUM7SUFDekMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLDJDQUFjLENBQUM7SUFFN0MsNEJBQTRCO0lBQzVCQSw0Q0FBZSxDQUFDO1FBQ2RhLFdBQVc7UUFFWCwyQkFBMkI7UUFDM0IsTUFBTUUsYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1FBRXhDLElBQUlGLFlBQVk7WUFDZEwsU0FBU0s7UUFDWCxPQUFPO1lBQ0wsMEJBQTBCO1lBQzFCLE1BQU1HLG9CQUFvQkMsT0FBT0MsVUFBVSxDQUFDLGdDQUFnQ0MsT0FBTztZQUNuRlgsU0FBU1Esb0JBQW9CLFNBQVM7UUFDeEM7SUFDRixHQUFHLEVBQUU7SUFFTCw0REFBNEQ7SUFDNURsQiw0Q0FBZSxDQUFDO1FBQ2QsSUFBSSxDQUFDWSxTQUFTO1FBRWQsTUFBTVUsT0FBT0MsU0FBU0MsZUFBZTtRQUNyQ0YsS0FBS0csU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUztRQUMvQkosS0FBS0csU0FBUyxDQUFDRSxHQUFHLENBQUNsQjtRQUNuQk8sYUFBYVksT0FBTyxDQUFDLFNBQVNuQjtJQUNoQyxHQUFHO1FBQUNBO1FBQU9HO0tBQVE7SUFFbkIsa0NBQWtDO0lBQ2xDWiw0Q0FBZSxDQUFDO1FBQ2QsSUFBSSxDQUFDWSxTQUFTO1FBRWQsTUFBTWlCLGFBQWFWLE9BQU9DLFVBQVUsQ0FBQztRQUNyQyxNQUFNVSxlQUFlLENBQUNDO1lBQ3BCLHVEQUF1RDtZQUN2RCxJQUFJLENBQUNmLGFBQWFDLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQ1AsU0FBU3FCLEVBQUVWLE9BQU8sR0FBRyxTQUFTO1lBQ2hDO1FBQ0Y7UUFFQVEsV0FBV0csZ0JBQWdCLENBQUMsVUFBVUY7UUFDdEMsT0FBTyxJQUFNRCxXQUFXSSxtQkFBbUIsQ0FBQyxVQUFVSDtJQUN4RCxHQUFHO1FBQUNsQjtLQUFRO0lBRVosTUFBTXNCLGNBQWM7UUFDbEJ4QixTQUFTeUIsQ0FBQUEsWUFBYUEsY0FBYyxVQUFVLFNBQVM7SUFDekQ7SUFFQSxxQkFDRSw4REFBQ2xDLGFBQWFtQyxRQUFRO1FBQUNDLE9BQU87WUFBRTVCO1lBQU95QjtZQUFhdEI7UUFBUTtrQkFDekRKOzs7Ozs7QUFHUCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyamllbGEvLi9zcmMvY29udGV4dHMvdGhlbWVDb250ZXh0LmpzP2NlNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VUaGVtZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVGhlbWVQcm92aWRlcicpXG4gIH1cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gUmVhY3QudXNlU3RhdGUoJ2xpZ2h0JylcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGVtZSBvbiBtb3VudFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSlcbiAgICBcbiAgICAvLyBDaGVjayBsb2NhbFN0b3JhZ2UgZmlyc3RcbiAgICBjb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgICBcbiAgICBpZiAoc2F2ZWRUaGVtZSkge1xuICAgICAgc2V0VGhlbWUoc2F2ZWRUaGVtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2hlY2sgc3lzdGVtIHByZWZlcmVuY2VcbiAgICAgIGNvbnN0IHN5c3RlbVByZWZlcnNEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzXG4gICAgICBzZXRUaGVtZShzeXN0ZW1QcmVmZXJzRGFyayA/ICdkYXJrJyA6ICdsaWdodCcpXG4gICAgfVxuICB9LCBbXSlcblxuICAvLyBVcGRhdGUgZG9jdW1lbnQgY2xhc3MgYW5kIGxvY2FsU3RvcmFnZSB3aGVuIHRoZW1lIGNoYW5nZXNcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1vdW50ZWQpIHJldHVyblxuICAgIFxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0JywgJ2RhcmsnKVxuICAgIHJvb3QuY2xhc3NMaXN0LmFkZCh0aGVtZSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSlcbiAgfSwgW3RoZW1lLCBtb3VudGVkXSlcblxuICAvLyBMaXN0ZW4gZm9yIHN5c3RlbSB0aGVtZSBjaGFuZ2VzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFtb3VudGVkKSByZXR1cm5cbiAgICBcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB1c2VyIGhhc24ndCBtYW51YWxseSBzZXQgYSBwcmVmZXJlbmNlXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB7XG4gICAgICAgIHNldFRoZW1lKGUubWF0Y2hlcyA/ICdkYXJrJyA6ICdsaWdodCcpXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1lZGlhUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgIHJldHVybiAoKSA9PiBtZWRpYVF1ZXJ5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgfSwgW21vdW50ZWRdKVxuXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIHNldFRoZW1lKHByZXZUaGVtZSA9PiBwcmV2VGhlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCB0b2dnbGVUaGVtZSwgbW91bnRlZCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlVGhlbWUiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVN0YXRlIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VFZmZlY3QiLCJzYXZlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN5c3RlbVByZWZlcnNEYXJrIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJyb290IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZXRJdGVtIiwibWVkaWFRdWVyeSIsImhhbmRsZUNoYW5nZSIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVRoZW1lIiwicHJldlRoZW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/themeContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/layout.css */ \"./src/styles/layout.css\");\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/themeContext */ \"./src/contexts/themeContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/marjoreefargas/Documents/GitHub/idesOfMarj/src/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marjoreefargas/Documents/GitHub/idesOfMarj/src/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQzJCO0FBRXhELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMscUJBQ0ksOERBQUNILGlFQUFhQTtrQkFDViw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdwQztBQUVBLGlFQUFlRixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyamllbGEvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2xheW91dC5jc3MnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvdGhlbWVDb250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/layout.css":
/*!*******************************!*\
  !*** ./src/styles/layout.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();