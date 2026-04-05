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

/***/ "(pages-dir-node)/./src/contexts/themeContext.js":
/*!**************************************!*\
  !*** ./src/contexts/themeContext.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext();\nconst useTheme = ()=>{\n    const context = react__WEBPACK_IMPORTED_MODULE_1__.useContext(ThemeContext);\n    if (!context) {\n        throw new Error('useTheme must be used within a ThemeProvider');\n    }\n    return context;\n};\nconst ThemeProvider = ({ children })=>{\n    const [theme, setTheme] = react__WEBPACK_IMPORTED_MODULE_1__.useState('dark');\n    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    // Initialize theme on mount\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"ThemeProvider.useEffect\": ()=>{\n            setMounted(true);\n            // Check localStorage first\n            const savedTheme = localStorage.getItem('theme');\n            if (savedTheme) {\n                setTheme(savedTheme);\n            } else {\n                // Check system preference\n                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n                setTheme('dark');\n            }\n        }\n    }[\"ThemeProvider.useEffect\"], []);\n    // Update document class and localStorage when theme changes\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"ThemeProvider.useEffect\": ()=>{\n            if (!mounted) return;\n            const root = document.documentElement;\n            root.classList.remove('light', 'dark');\n            root.classList.add(theme);\n            localStorage.setItem('theme', theme);\n        }\n    }[\"ThemeProvider.useEffect\"], [\n        theme,\n        mounted\n    ]);\n    // Listen for system theme changes\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"ThemeProvider.useEffect\": ()=>{\n            if (!mounted) return;\n            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');\n            const handleChange = {\n                \"ThemeProvider.useEffect.handleChange\": (e)=>{\n                    // Only update if user hasn't manually set a preference\n                    if (!localStorage.getItem('theme')) {\n                        setTheme(e.matches ? 'dark' : 'light');\n                    }\n                }\n            }[\"ThemeProvider.useEffect.handleChange\"];\n            mediaQuery.addEventListener('change', handleChange);\n            return ({\n                \"ThemeProvider.useEffect\": ()=>mediaQuery.removeEventListener('change', handleChange)\n            })[\"ThemeProvider.useEffect\"];\n        }\n    }[\"ThemeProvider.useEffect\"], [\n        mounted\n    ]);\n    const toggleTheme = ()=>{\n        setTheme((prevTheme)=>prevTheme === 'light' ? 'dark' : 'light');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme,\n            mounted\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/marjoreefargas/Documents/GitHub/idesOfMarj/src/contexts/themeContext.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0cy90aGVtZUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUU5QixNQUFNQyw2QkFBZUQsZ0RBQW1CO0FBRWpDLE1BQU1HLFdBQVc7SUFDdEIsTUFBTUMsVUFBVUosNkNBQWdCLENBQUNDO0lBQ2pDLElBQUksQ0FBQ0csU0FBUztRQUNaLE1BQU0sSUFBSUUsTUFBTTtJQUNsQjtJQUNBLE9BQU9GO0FBQ1QsRUFBQztBQUVNLE1BQU1HLGdCQUFnQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN4QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsMkNBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsMkNBQWMsQ0FBQztJQUU3Qyw0QkFBNEI7SUFDNUJBLDRDQUFlO21DQUFDO1lBQ2RhLFdBQVc7WUFFWCwyQkFBMkI7WUFDM0IsTUFBTUUsYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1lBRXhDLElBQUlGLFlBQVk7Z0JBQ2RMLFNBQVNLO1lBQ1gsT0FBTztnQkFDTCwwQkFBMEI7Z0JBQzFCLE1BQU1HLG9CQUFvQkMsT0FBT0MsVUFBVSxDQUFDLGdDQUFnQ0MsT0FBTztnQkFDbkZYLFNBQVM7WUFDWDtRQUNGO2tDQUFHLEVBQUU7SUFFTCw0REFBNEQ7SUFDNURWLDRDQUFlO21DQUFDO1lBQ2QsSUFBSSxDQUFDWSxTQUFTO1lBRWQsTUFBTVUsT0FBT0MsU0FBU0MsZUFBZTtZQUNyQ0YsS0FBS0csU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUztZQUMvQkosS0FBS0csU0FBUyxDQUFDRSxHQUFHLENBQUNsQjtZQUNuQk8sYUFBYVksT0FBTyxDQUFDLFNBQVNuQjtRQUNoQztrQ0FBRztRQUFDQTtRQUFPRztLQUFRO0lBRW5CLGtDQUFrQztJQUNsQ1osNENBQWU7bUNBQUM7WUFDZCxJQUFJLENBQUNZLFNBQVM7WUFFZCxNQUFNaUIsYUFBYVYsT0FBT0MsVUFBVSxDQUFDO1lBQ3JDLE1BQU1VO3dEQUFlLENBQUNDO29CQUNwQix1REFBdUQ7b0JBQ3ZELElBQUksQ0FBQ2YsYUFBYUMsT0FBTyxDQUFDLFVBQVU7d0JBQ2xDUCxTQUFTcUIsRUFBRVYsT0FBTyxHQUFHLFNBQVM7b0JBQ2hDO2dCQUNGOztZQUVBUSxXQUFXRyxnQkFBZ0IsQ0FBQyxVQUFVRjtZQUN0QzsyQ0FBTyxJQUFNRCxXQUFXSSxtQkFBbUIsQ0FBQyxVQUFVSDs7UUFDeEQ7a0NBQUc7UUFBQ2xCO0tBQVE7SUFFWixNQUFNc0IsY0FBYztRQUNsQnhCLFNBQVN5QixDQUFBQSxZQUFhQSxjQUFjLFVBQVUsU0FBUztJQUN6RDtJQUVBLHFCQUNFLDhEQUFDbEMsYUFBYW1DLFFBQVE7UUFBQ0MsT0FBTztZQUFFNUI7WUFBT3lCO1lBQWF0QjtRQUFRO2tCQUN6REo7Ozs7OztBQUdQLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJqb3JlZWZhcmdhcy9Eb2N1bWVudHMvR2l0SHViL2lkZXNPZk1hcmovc3JjL2NvbnRleHRzL3RoZW1lQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVRoZW1lIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBUaGVtZVByb3ZpZGVyJylcbiAgfVxuICByZXR1cm4gY29udGV4dFxufVxuXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSBSZWFjdC51c2VTdGF0ZSgnZGFyaycpXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIEluaXRpYWxpemUgdGhlbWUgb24gbW91bnRcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpXG4gICAgXG4gICAgLy8gQ2hlY2sgbG9jYWxTdG9yYWdlIGZpcnN0XG4gICAgY29uc3Qgc2F2ZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpXG4gICAgXG4gICAgaWYgKHNhdmVkVGhlbWUpIHtcbiAgICAgIHNldFRoZW1lKHNhdmVkVGhlbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENoZWNrIHN5c3RlbSBwcmVmZXJlbmNlXG4gICAgICBjb25zdCBzeXN0ZW1QcmVmZXJzRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlc1xuICAgICAgc2V0VGhlbWUoJ2RhcmsnKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgLy8gVXBkYXRlIGRvY3VtZW50IGNsYXNzIGFuZCBsb2NhbFN0b3JhZ2Ugd2hlbiB0aGVtZSBjaGFuZ2VzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFtb3VudGVkKSByZXR1cm5cbiAgICBcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcsICdkYXJrJylcbiAgICByb290LmNsYXNzTGlzdC5hZGQodGhlbWUpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWUpXG4gIH0sIFt0aGVtZSwgbW91bnRlZF0pXG5cbiAgLy8gTGlzdGVuIGZvciBzeXN0ZW0gdGhlbWUgY2hhbmdlc1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbW91bnRlZCkgcmV0dXJuXG4gICAgXG4gICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgLy8gT25seSB1cGRhdGUgaWYgdXNlciBoYXNuJ3QgbWFudWFsbHkgc2V0IGEgcHJlZmVyZW5jZVxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkge1xuICAgICAgICBzZXRUaGVtZShlLm1hdGNoZXMgPyAnZGFyaycgOiAnbGlnaHQnKVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtZWRpYVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICByZXR1cm4gKCkgPT4gbWVkaWFRdWVyeS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gIH0sIFttb3VudGVkXSlcblxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBzZXRUaGVtZShwcmV2VGhlbWUgPT4gcHJldlRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgdG9nZ2xlVGhlbWUsIG1vdW50ZWQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGhlbWVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVRoZW1lIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0Iiwic2F2ZWRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzeXN0ZW1QcmVmZXJzRGFyayIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwicm9vdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0SXRlbSIsIm1lZGlhUXVlcnkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVUaGVtZSIsInByZXZUaGVtZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/contexts/themeContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/layout.css */ \"(pages-dir-node)/./src/styles/layout.css\");\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_themeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/themeContext */ \"(pages-dir-node)/./src/contexts/themeContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_themeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/marjoreefargas/Documents/GitHub/idesOfMarj/src/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marjoreefargas/Documents/GitHub/idesOfMarj/src/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkI7QUFDMkI7QUFFeEQsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNuQyxxQkFDSSw4REFBQ0gsaUVBQWFBO2tCQUNWLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBR3BDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJqb3JlZWZhcmdhcy9Eb2N1bWVudHMvR2l0SHViL2lkZXNPZk1hcmovc3JjL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvbGF5b3V0LmNzcydcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy90aGVtZUNvbnRleHQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/layout.css":
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
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();