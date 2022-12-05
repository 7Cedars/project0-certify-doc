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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"./components/userContext.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* \nThis components creates the Navbar on top of the app. \nIt also handles selection of tabs and calls the wallet connect function. \n*/ \nvar _s = $RefreshSig$();\n\n\n\n\n// creates the Navbar at the top of the page. \nconst NavBar = (param)=>{\n    let { connectWallet  } = param;\n    _s();\n    //  { getSigner }\n    // navbar interacts with three contextual elements: tab and settab (reading and setting selected tab) \n    // and walletAddress: logging in with a wallet. \n    const { tab , setTab , walletAddress , ensName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_userContext__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    // The login button changes appearance with user being logged in or not.\n    // Login is assessed by (non)existance of const walletAddress. \n    const renderButton = ()=>{\n        // If wallet is not connected, return a button which allows them to connect their wllet\n        if (!walletAddress) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                    color: \"blue\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            disabled: true,\n                            children: \"Read only mode\"\n                        }, void 0, false, {\n                            fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            primary: true,\n                            onClick: connectWallet,\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined);\n        }\n        // If wallet is on the wron network, return a red button requesting to change network. \n        // Button does not have any functionality at the moment. (hence basic color scheme)\n        if (walletAddress == \"wrongNetwork\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    basic: true,\n                    color: \"red\",\n                    children: \"Incorrect network. Please change to Goerli.\"\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 46,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined);\n        } else {\n            // If wallet is  connected, return a green button that states wallet connected. \n            // Button does not have any functionality at the moment. (hence basic color scheme)\n            if (ensName) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                        color: \"green\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                disabled: true,\n                                children: [\n                                    \"Connected to: \",\n                                    ensName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                basic: true,\n                                color: \"green\",\n                                children: \"disconnect\"\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                        color: \"green\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                disabled: true,\n                                children: [\n                                    \"Connected to: \",\n                                    walletAddress.substring(0, 5),\n                                    \"...\",\n                                    walletAddress.substring(38, 42)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                basic: true,\n                                color: \"grey\",\n                                children: \"disconnect\"\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, undefined);\n            }\n        }\n    };\n    // Renders the navbar. \n    // per item, if clicked, setTab is set to the name of the tab. \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                name: \"Home\",\n                active: tab === \"Home\",\n                onClick: ()=>setTab(\"Home\"),\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 88,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                name: \"About\",\n                active: tab === \"About\",\n                onClick: ()=>setTab(\"About\")\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 96,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                container: true,\n                columns: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {\n                    centered: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        secondary: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Check Document\",\n                                active: tab === \"DocHash_Certs\",\n                                onClick: ()=>setTab(\"DocHash_Certs\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 104,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Check Certificates Issued\",\n                                active: tab === \"Issued_Certs\",\n                                onClick: ()=>setTab(\"Issued_Certs\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 110,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Check Certificates Received\",\n                                active: tab === \"Received_Certs\",\n                                onClick: ()=>setTab(\"Received_Certs\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 115,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Certify Document\",\n                                active: tab === \"Certify\",\n                                onClick: ()=>setTab(\"Certify\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 120,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                        lineNumber: 103,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 102,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 101,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                children: renderButton()\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 129,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n        lineNumber: 87,\n        columnNumber: 13\n    }, undefined);\n};\n_s(NavBar, \"dq8OfXx5lli6+AohRTlDhU/ynNM=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoQlUsU0FBUyxJQUFNVCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU10Qyw4REFBQ0wsd0RBQVM7MEJBQ0pROzs7Ozs7Ozs7Ozs7QUFJdEI7R0ExSE1OO0tBQUFBO0FBNEhOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2QmFyLmpzPzNlOGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXG5UaGlzIGNvbXBvbmVudHMgY3JlYXRlcyB0aGUgTmF2YmFyIG9uIHRvcCBvZiB0aGUgYXBwLiBcbkl0IGFsc28gaGFuZGxlcyBzZWxlY3Rpb24gb2YgdGFicyBhbmQgY2FsbHMgdGhlIHdhbGxldCBjb25uZWN0IGZ1bmN0aW9uLiBcbiovIFxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi91c2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBJY29uLCBNZW51LCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuLy8gY3JlYXRlcyB0aGUgTmF2YmFyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UuIFxuY29uc3QgTmF2QmFyID0gKHsgY29ubmVjdFdhbGxldCB9KSA9PiB7IC8vIGNoYW5nZU5ldHdvcmtcbiAgICAvLyAgeyBnZXRTaWduZXIgfVxuXG4gICAgLy8gbmF2YmFyIGludGVyYWN0cyB3aXRoIHRocmVlIGNvbnRleHR1YWwgZWxlbWVudHM6IHRhYiBhbmQgc2V0dGFiIChyZWFkaW5nIGFuZCBzZXR0aW5nIHNlbGVjdGVkIHRhYikgXG4gICAgLy8gYW5kIHdhbGxldEFkZHJlc3M6IGxvZ2dpbmcgaW4gd2l0aCBhIHdhbGxldC4gXG4gICAgY29uc3QgeyB0YWIsIHNldFRhYiwgd2FsbGV0QWRkcmVzcywgZW5zTmFtZSB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgICAvLyBUaGUgbG9naW4gYnV0dG9uIGNoYW5nZXMgYXBwZWFyYW5jZSB3aXRoIHVzZXIgYmVpbmcgbG9nZ2VkIGluIG9yIG5vdC5cbiAgICAvLyBMb2dpbiBpcyBhc3Nlc3NlZCBieSAobm9uKWV4aXN0YW5jZSBvZiBjb25zdCB3YWxsZXRBZGRyZXNzLiBcbiAgICBjb25zdCByZW5kZXJCdXR0b24gPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gSWYgd2FsbGV0IGlzIG5vdCBjb25uZWN0ZWQsIHJldHVybiBhIGJ1dHRvbiB3aGljaCBhbGxvd3MgdGhlbSB0byBjb25uZWN0IHRoZWlyIHdsbGV0XG4gICAgICAgIGlmICghd2FsbGV0QWRkcmVzcykge1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QnV0dG9uLkdyb3VwIGNvbG9yPSdibHVlJz5cbiAgICAgICAgICAgIDxCdXR0b24gIGRpc2FibGVkID5cbiAgICAgICAgICAgICAgICBSZWFkIG9ubHkgbW9kZSBcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiAgcHJpbWFyeSBcbiAgICAgICAgICAgICAgICBvbkNsaWNrID0geyBjb25uZWN0V2FsbGV0IH0gPlxuICAgICAgICAgICAgICAgIENvbm5lY3RcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2FsbGV0IGlzIG9uIHRoZSB3cm9uIG5ldHdvcmssIHJldHVybiBhIHJlZCBidXR0b24gcmVxdWVzdGluZyB0byBjaGFuZ2UgbmV0d29yay4gXG4gICAgICAgIC8vIEJ1dHRvbiBkb2VzIG5vdCBoYXZlIGFueSBmdW5jdGlvbmFsaXR5IGF0IHRoZSBtb21lbnQuIChoZW5jZSBiYXNpYyBjb2xvciBzY2hlbWUpXG4gICAgICAgIGlmICh3YWxsZXRBZGRyZXNzID09ICd3cm9uZ05ldHdvcmsnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgIDxCdXR0b24gYmFzaWMgY29sb3IgPSBcInJlZFwiID5cbiAgICAgICAgICAgICAgICBJbmNvcnJlY3QgbmV0d29yay4gUGxlYXNlIGNoYW5nZSB0byBHb2VybGkuIFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB3YWxsZXQgaXMgIGNvbm5lY3RlZCwgcmV0dXJuIGEgZ3JlZW4gYnV0dG9uIHRoYXQgc3RhdGVzIHdhbGxldCBjb25uZWN0ZWQuIFxuICAgICAgICAgICAgLy8gQnV0dG9uIGRvZXMgbm90IGhhdmUgYW55IGZ1bmN0aW9uYWxpdHkgYXQgdGhlIG1vbWVudC4gKGhlbmNlIGJhc2ljIGNvbG9yIHNjaGVtZSlcbiAgICAgICAgICAgIGlmICggZW5zTmFtZSApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cCBjb2xvcj0nZ3JlZW4nPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQgPiBcbiAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGVkIHRvOiB7IGVuc05hbWUgfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gYmFzaWMgY29sb3IgPSBcImdyZWVuXCIgID4gXG4gICAgICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3RcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwIGNvbG9yPSdncmVlbic+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQgPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RlZCB0bzoge3dhbGxldEFkZHJlc3Muc3Vic3RyaW5nKDAsNSl9Li4ue3dhbGxldEFkZHJlc3Muc3Vic3RyaW5nKDM4LDQyKX0gIFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvciA9IFwiZ3JleVwiICA+IFxuICAgICAgICAgICAgICAgICAgICBkaXNjb25uZWN0XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIC8vIFJlbmRlcnMgdGhlIG5hdmJhci4gXG4gICAgLy8gcGVyIGl0ZW0sIGlmIGNsaWNrZWQsIHNldFRhYiBpcyBzZXQgdG8gdGhlIG5hbWUgb2YgdGhlIHRhYi4gXG4gICAgcmV0dXJuICggICAgICAgIFxuICAgICAgICAgICAgPE1lbnUgPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J0hvbWUnXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGFiID09PSAnSG9tZSd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignSG9tZScpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICB7LyogPEljb24gbmFtZT0nY2hlY2ttYXJrJyBzaXplID0gJ2xhcmdlJy8+ICovfVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPiAgXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nQWJvdXQnXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGFiID09PSAnQWJvdXQnfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ0Fib3V0Jyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY29sdW1ucz0gezF9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjZW50ZXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdDaGVjayBEb2N1bWVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0YWIgPT09ICdEb2NIYXNoX0NlcnRzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdEb2NIYXNoX0NlcnRzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0NoZWNrIENlcnRpZmljYXRlcyBJc3N1ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGFiID09PSAnSXNzdWVkX0NlcnRzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdJc3N1ZWRfQ2VydHMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0NoZWNrIENlcnRpZmljYXRlcyBSZWNlaXZlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0YWIgPT09ICdSZWNlaXZlZF9DZXJ0cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignUmVjZWl2ZWRfQ2VydHMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0NlcnRpZnkgRG9jdW1lbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGFiID09PSAnQ2VydGlmeSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignQ2VydGlmeScpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgey8qIHJlbmRlcmluZyB0aGUgbG9naW4gYnV0dG9uIGNyZWF0ZWQgYWJvdmUgKi99XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSA+XG4gICAgICAgICAgICAgICAgICAgIHsgcmVuZGVyQnV0dG9uKCkgfVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPiAgIFxuICAgICAgICAgICAgPC9NZW51PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIkJ1dHRvbiIsIkdyaWQiLCJJY29uIiwiTWVudSIsIlNlZ21lbnQiLCJOYXZCYXIiLCJjb25uZWN0V2FsbGV0IiwidGFiIiwic2V0VGFiIiwid2FsbGV0QWRkcmVzcyIsImVuc05hbWUiLCJyZW5kZXJCdXR0b24iLCJkaXYiLCJHcm91cCIsImNvbG9yIiwiZGlzYWJsZWQiLCJwcmltYXJ5Iiwib25DbGljayIsImJhc2ljIiwic3Vic3RyaW5nIiwiSXRlbSIsIm5hbWUiLCJhY3RpdmUiLCJjb250YWluZXIiLCJjb2x1bW5zIiwiUm93IiwiY2VudGVyZWQiLCJzZWNvbmRhcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navBar.js\n"));

/***/ })

});