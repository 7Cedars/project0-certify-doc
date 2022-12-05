"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navBar.js":
/*!******************************!*\
  !*** ./components/navBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"./components/userContext.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* \nThis components creates the Navbar on top of the app. \nIt also handles selection of tabs and calls the wallet connect function. \n*/ \nvar _s = $RefreshSig$();\n\n\n\n\n// creates the Navbar at the top of the page. \nconst NavBar = (param)=>{\n    let { connectWallet  } = param;\n    _s();\n    //  { getSigner }\n    // navbar interacts with three contextual elements: tab and settab (reading and setting selected tab) \n    // and walletAddress: logging in with a wallet. \n    const { tab , setTab , walletAddress , ensName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_userContext__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    // The login button changes appearance with user being logged in or not.\n    // Login is assessed by (non)existance of const walletAddress. \n    const renderButton = ()=>{\n        // If wallet is not connected, return a button which allows them to connect their wllet\n        if (!walletAddress) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                    color: \"blue\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            disabled: true,\n                            children: \"Read only mode\"\n                        }, void 0, false, {\n                            fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            primary: true,\n                            onClick: connectWallet,\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined);\n        }\n        // If wallet is on the wron network, return a red button requesting to change network. \n        // Button does not have any functionality at the moment. (hence basic color scheme)\n        if (walletAddress == \"wrongNetwork\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    basic: true,\n                    color: \"red\",\n                    children: \"Incorrect network. Please change to Goerli.\"\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 46,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined);\n        } else {\n            // If wallet is  connected, return a green button that states wallet connected. \n            // Button does not have any functionality at the moment. (hence basic color scheme)\n            if (ensName) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                        color: \"green\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                disabled: true,\n                                children: [\n                                    \"Connected to: \",\n                                    ensName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                basic: true,\n                                color: \"green\",\n                                children: \"disconnect\"\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                        color: \"green\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                disabled: true,\n                                children: [\n                                    \"Connected to: \",\n                                    walletAddress.substring(0, 5),\n                                    \"...\",\n                                    walletAddress.substring(38, 42)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"red\",\n                                children: \"disconnect\"\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, undefined);\n            }\n        }\n    };\n    // Renders the navbar. \n    // per item, if clicked, setTab is set to the name of the tab. \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                name: \"Home\",\n                active: tab === \"Home\",\n                onClick: ()=>setTab(\"Home\"),\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 88,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                name: \"About\",\n                active: tab === \"About\",\n                onClick: ()=>setTab(\"About\")\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 96,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                container: true,\n                columns: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {\n                    centered: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        secondary: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Check Document\",\n                                active: tab === \"DocHash_Certs\",\n                                onClick: ()=>setTab(\"DocHash_Certs\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 104,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Check Certificates Issued\",\n                                active: tab === \"Issued_Certs\",\n                                onClick: ()=>setTab(\"Issued_Certs\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 110,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Check Certificates Received\",\n                                active: tab === \"Received_Certs\",\n                                onClick: ()=>setTab(\"Received_Certs\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 115,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Certify Document\",\n                                active: tab === \"Certify\",\n                                onClick: ()=>setTab(\"Certify\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 120,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                        lineNumber: 103,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 102,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 101,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                children: renderButton()\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 129,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n        lineNumber: 87,\n        columnNumber: 13\n    }, undefined);\n};\n_s(NavBar, \"dq8OfXx5lli6+AohRTlDhU/ynNM=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1ULE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXRDLDhEQUFDTCx3REFBUzswQkFDSlE7Ozs7Ozs7Ozs7OztBQUl0QjtHQTFITU47S0FBQUE7QUE0SE4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZCYXIuanM/M2U4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcblRoaXMgY29tcG9uZW50cyBjcmVhdGVzIHRoZSBOYXZiYXIgb24gdG9wIG9mIHRoZSBhcHAuIFxuSXQgYWxzbyBoYW5kbGVzIHNlbGVjdGlvbiBvZiB0YWJzIGFuZCBjYWxscyB0aGUgd2FsbGV0IGNvbm5lY3QgZnVuY3Rpb24uIFxuKi8gXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuL3VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIEljb24sIE1lbnUsIFNlZ21lbnQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuXG4vLyBjcmVhdGVzIHRoZSBOYXZiYXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZS4gXG5jb25zdCBOYXZCYXIgPSAoeyBjb25uZWN0V2FsbGV0IH0pID0+IHsgLy8gY2hhbmdlTmV0d29ya1xuICAgIC8vICB7IGdldFNpZ25lciB9XG5cbiAgICAvLyBuYXZiYXIgaW50ZXJhY3RzIHdpdGggdGhyZWUgY29udGV4dHVhbCBlbGVtZW50czogdGFiIGFuZCBzZXR0YWIgKHJlYWRpbmcgYW5kIHNldHRpbmcgc2VsZWN0ZWQgdGFiKSBcbiAgICAvLyBhbmQgd2FsbGV0QWRkcmVzczogbG9nZ2luZyBpbiB3aXRoIGEgd2FsbGV0LiBcbiAgICBjb25zdCB7IHRhYiwgc2V0VGFiLCB3YWxsZXRBZGRyZXNzLCBlbnNOYW1lIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICAgIC8vIFRoZSBsb2dpbiBidXR0b24gY2hhbmdlcyBhcHBlYXJhbmNlIHdpdGggdXNlciBiZWluZyBsb2dnZWQgaW4gb3Igbm90LlxuICAgIC8vIExvZ2luIGlzIGFzc2Vzc2VkIGJ5IChub24pZXhpc3RhbmNlIG9mIGNvbnN0IHdhbGxldEFkZHJlc3MuIFxuICAgIGNvbnN0IHJlbmRlckJ1dHRvbiA9ICgpID0+IHtcblxuICAgICAgICAvLyBJZiB3YWxsZXQgaXMgbm90IGNvbm5lY3RlZCwgcmV0dXJuIGEgYnV0dG9uIHdoaWNoIGFsbG93cyB0aGVtIHRvIGNvbm5lY3QgdGhlaXIgd2xsZXRcbiAgICAgICAgaWYgKCF3YWxsZXRBZGRyZXNzKSB7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgY29sb3I9J2JsdWUnPlxuICAgICAgICAgICAgPEJ1dHRvbiAgZGlzYWJsZWQgPlxuICAgICAgICAgICAgICAgIFJlYWQgb25seSBtb2RlIFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uICBwcmltYXJ5IFxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7IGNvbm5lY3RXYWxsZXQgfSA+XG4gICAgICAgICAgICAgICAgQ29ubmVjdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3YWxsZXQgaXMgb24gdGhlIHdyb24gbmV0d29yaywgcmV0dXJuIGEgcmVkIGJ1dHRvbiByZXF1ZXN0aW5nIHRvIGNoYW5nZSBuZXR3b3JrLiBcbiAgICAgICAgLy8gQnV0dG9uIGRvZXMgbm90IGhhdmUgYW55IGZ1bmN0aW9uYWxpdHkgYXQgdGhlIG1vbWVudC4gKGhlbmNlIGJhc2ljIGNvbG9yIHNjaGVtZSlcbiAgICAgICAgaWYgKHdhbGxldEFkZHJlc3MgPT0gJ3dyb25nTmV0d29yaycpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvciA9IFwicmVkXCIgPlxuICAgICAgICAgICAgICAgIEluY29ycmVjdCBuZXR3b3JrLiBQbGVhc2UgY2hhbmdlIHRvIEdvZXJsaS4gXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHdhbGxldCBpcyAgY29ubmVjdGVkLCByZXR1cm4gYSBncmVlbiBidXR0b24gdGhhdCBzdGF0ZXMgd2FsbGV0IGNvbm5lY3RlZC4gXG4gICAgICAgICAgICAvLyBCdXR0b24gZG9lcyBub3QgaGF2ZSBhbnkgZnVuY3Rpb25hbGl0eSBhdCB0aGUgbW9tZW50LiAoaGVuY2UgYmFzaWMgY29sb3Igc2NoZW1lKVxuICAgICAgICAgICAgaWYgKCBlbnNOYW1lICkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwIGNvbG9yPSdncmVlbic+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZCA+IFxuICAgICAgICAgICAgICAgICAgICBDb25uZWN0ZWQgdG86IHsgZW5zTmFtZSB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvciA9IFwiZ3JlZW5cIiAgPiBcbiAgICAgICAgICAgICAgICAgICAgZGlzY29ubmVjdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgY29sb3I9J2dyZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZCA+IFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGVkIHRvOiB7d2FsbGV0QWRkcmVzcy5zdWJzdHJpbmcoMCw1KX0uLi57d2FsbGV0QWRkcmVzcy5zdWJzdHJpbmcoMzgsNDIpfSAgXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yID0gXCJyZWRcIiAgPiBcbiAgICAgICAgICAgICAgICAgICAgZGlzY29ubmVjdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAvLyBSZW5kZXJzIHRoZSBuYXZiYXIuIFxuICAgIC8vIHBlciBpdGVtLCBpZiBjbGlja2VkLCBzZXRUYWIgaXMgc2V0IHRvIHRoZSBuYW1lIG9mIHRoZSB0YWIuIFxuICAgIHJldHVybiAoICAgICAgICBcbiAgICAgICAgICAgIDxNZW51ID5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdIb21lJ1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gJ0hvbWUnfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ0hvbWUnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgey8qIDxJY29uIG5hbWU9J2NoZWNrbWFyaycgc2l6ZSA9ICdsYXJnZScvPiAqL31cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT4gIFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J0Fib3V0J1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gJ0Fib3V0J31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdBYm91dCcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNvbHVtbnM9IHsxfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY2VudGVyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nQ2hlY2sgRG9jdW1lbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGFiID09PSAnRG9jSGFzaF9DZXJ0cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignRG9jSGFzaF9DZXJ0cycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdDaGVjayBDZXJ0aWZpY2F0ZXMgSXNzdWVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gJ0lzc3VlZF9DZXJ0cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignSXNzdWVkX0NlcnRzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdDaGVjayBDZXJ0aWZpY2F0ZXMgUmVjZWl2ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGFiID09PSAnUmVjZWl2ZWRfQ2VydHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ1JlY2VpdmVkX0NlcnRzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdDZXJ0aWZ5IERvY3VtZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gJ0NlcnRpZnknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ0NlcnRpZnknKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgIHsvKiByZW5kZXJpbmcgdGhlIGxvZ2luIGJ1dHRvbiBjcmVhdGVkIGFib3ZlICovfVxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gPlxuICAgICAgICAgICAgICAgICAgICB7IHJlbmRlckJ1dHRvbigpIH1cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT4gICBcbiAgICAgICAgICAgIDwvTWVudT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJCdXR0b24iLCJHcmlkIiwiSWNvbiIsIk1lbnUiLCJTZWdtZW50IiwiTmF2QmFyIiwiY29ubmVjdFdhbGxldCIsInRhYiIsInNldFRhYiIsIndhbGxldEFkZHJlc3MiLCJlbnNOYW1lIiwicmVuZGVyQnV0dG9uIiwiZGl2IiwiR3JvdXAiLCJjb2xvciIsImRpc2FibGVkIiwicHJpbWFyeSIsIm9uQ2xpY2siLCJiYXNpYyIsInN1YnN0cmluZyIsIkl0ZW0iLCJuYW1lIiwiYWN0aXZlIiwiY29udGFpbmVyIiwiY29sdW1ucyIsIlJvdyIsImNlbnRlcmVkIiwic2Vjb25kYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navBar.js\n"));

/***/ })

});