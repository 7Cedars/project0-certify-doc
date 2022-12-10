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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"./components/userContext.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* \nThis components creates the Navbar on top of the app. \nIt also handles selection of tabs and calls the wallet connect function. \n*/ \nvar _s = $RefreshSig$();\n\n\n\n\n// creates the Navbar at the top of the page. \nconst NavBar = (param)=>{\n    let { connectWeb3 , disconnectWeb3 , changeChain , web3ChainId  } = param;\n    _s();\n    //  { getSigner }\n    // navbar interacts with three contextual elements: tab and settab (reading and setting selected tab) \n    // and walletAddress: logging in with a wallet. \n    const { tab , setTab , walletAddress , ensName , walletConnected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_userContext__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    // The login button changes appearance with user being logged in or not.\n    // Login is assessed by (non)existance of const walletAddress. \n    const renderButton = ()=>{\n        // If wallet is not connected, return a button which allows them to connect their wllet\n        if (walletConnected == false) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                    color: \"blue\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            disabled: true,\n                            children: \"Read only mode\"\n                        }, void 0, false, {\n                            fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            primary: true,\n                            onClick: connectWeb3,\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined);\n        }\n        // If wallet is on the wrong network, return a red button requesting to change network. \n        // Button does not have any functionality at the moment. (hence basic color scheme)\n        if (walletConnected && web3ChainId !== 5) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                    color: \"red\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            disabled: true,\n                            children: \"Incorrect chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            basic: true,\n                            color: \"red\",\n                            onClick: changeChain,\n                            children: \"Change to Goerli\"\n                        }, void 0, false, {\n                            fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined);\n        } else {\n            // If wallet is  connected, return a green button that states wallet connected. \n            // Button does not have any functionality at the moment. (hence basic color scheme)\n            if (ensName) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                        color: \"green\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                disabled: true,\n                                children: [\n                                    \"Connected to: \",\n                                    ensName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                basic: true,\n                                color: \"grey\",\n                                onClick: disconnectWeb3,\n                                children: \"disconnect\"\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, undefined);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                        color: \"green\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                disabled: true,\n                                children: [\n                                    \"Connected to: \",\n                                    walletAddress.substring(0, 5),\n                                    \"...\",\n                                    walletAddress.substring(38, 42)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                basic: true,\n                                color: \"grey\",\n                                onClick: disconnectWeb3,\n                                children: \"disconnect\"\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 76,\n                    columnNumber: 21\n                }, undefined);\n            }\n        }\n    };\n    // Renders the navbar. \n    // per item, if clicked, setTab is set to the name of the tab. \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                name: \"Home\",\n                active: tab === \"Home\",\n                onClick: ()=>setTab(\"Home\"),\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 96,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                name: \"About\",\n                active: tab === \"About\",\n                onClick: ()=>setTab(\"About\")\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 104,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                container: true,\n                columns: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {\n                    centered: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        secondary: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Check Document\",\n                                active: tab === \"DocHash_Certs\",\n                                onClick: ()=>setTab(\"DocHash_Certs\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 112,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Check Certificates Issued\",\n                                active: tab === \"Issued_Certs\",\n                                onClick: ()=>setTab(\"Issued_Certs\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 118,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Check Certificates Received\",\n                                active: tab === \"Received_Certs\",\n                                onClick: ()=>setTab(\"Received_Certs\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 123,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                name: \"Certify Document\",\n                                active: tab === \"Certify\",\n                                onClick: ()=>setTab(\"Certify\")\n                            }, void 0, false, {\n                                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                                lineNumber: 128,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                        lineNumber: 111,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                    lineNumber: 110,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 109,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                children: renderButton()\n            }, void 0, false, {\n                fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n                lineNumber: 137,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/teijehidde/Documents/7CedarsGit/projects/certify-doc/my-app/components/navBar.js\",\n        lineNumber: 95,\n        columnNumber: 13\n    }, undefined);\n};\n_s(NavBar, \"fGtodAS7rDpHMPOkPlzogPsE0yw=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDUix3REFBUztnQ0FDTnNCLE1BQUs7Z0NBQ0xDLFFBQVFoQixRQUFRO2dDQUNoQlcsU0FBUyxJQUFNVixPQUFPOzs7Ozs7MENBRTFCLDhEQUFDUix3REFBUztnQ0FDTnNCLE1BQUs7Z0NBQ0xDLFFBQVFoQixRQUFRO2dDQUNoQlcsU0FBUyxJQUFNVixPQUFPOzs7Ozs7MENBRTFCLDhEQUFDUix3REFBUztnQ0FDTnNCLE1BQUs7Z0NBQ0xDLFFBQVFoQixRQUFRO2dDQUNoQlcsU0FBUyxJQUFNVixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU10Qyw4REFBQ1Isd0RBQVM7MEJBQ0pZOzs7Ozs7Ozs7Ozs7QUFJdEI7R0FsSU1WO0tBQUFBO0FBb0lOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2QmFyLmpzPzNlOGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXG5UaGlzIGNvbXBvbmVudHMgY3JlYXRlcyB0aGUgTmF2YmFyIG9uIHRvcCBvZiB0aGUgYXBwLiBcbkl0IGFsc28gaGFuZGxlcyBzZWxlY3Rpb24gb2YgdGFicyBhbmQgY2FsbHMgdGhlIHdhbGxldCBjb25uZWN0IGZ1bmN0aW9uLiBcbiovIFxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi91c2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBJY29uLCBNZW51LCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuLy8gY3JlYXRlcyB0aGUgTmF2YmFyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UuIFxuY29uc3QgTmF2QmFyID0gKHsgY29ubmVjdFdlYjMsIGRpc2Nvbm5lY3RXZWIzLCBjaGFuZ2VDaGFpbiwgd2ViM0NoYWluSWQgfSkgPT4ge1xuICAgIC8vICB7IGdldFNpZ25lciB9XG5cbiAgICAvLyBuYXZiYXIgaW50ZXJhY3RzIHdpdGggdGhyZWUgY29udGV4dHVhbCBlbGVtZW50czogdGFiIGFuZCBzZXR0YWIgKHJlYWRpbmcgYW5kIHNldHRpbmcgc2VsZWN0ZWQgdGFiKSBcbiAgICAvLyBhbmQgd2FsbGV0QWRkcmVzczogbG9nZ2luZyBpbiB3aXRoIGEgd2FsbGV0LiBcbiAgICBjb25zdCB7IHRhYiwgc2V0VGFiLCB3YWxsZXRBZGRyZXNzLCBlbnNOYW1lLCB3YWxsZXRDb25uZWN0ZWQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gICAgLy8gVGhlIGxvZ2luIGJ1dHRvbiBjaGFuZ2VzIGFwcGVhcmFuY2Ugd2l0aCB1c2VyIGJlaW5nIGxvZ2dlZCBpbiBvciBub3QuXG4gICAgLy8gTG9naW4gaXMgYXNzZXNzZWQgYnkgKG5vbilleGlzdGFuY2Ugb2YgY29uc3Qgd2FsbGV0QWRkcmVzcy4gXG4gICAgY29uc3QgcmVuZGVyQnV0dG9uID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIElmIHdhbGxldCBpcyBub3QgY29ubmVjdGVkLCByZXR1cm4gYSBidXR0b24gd2hpY2ggYWxsb3dzIHRoZW0gdG8gY29ubmVjdCB0aGVpciB3bGxldFxuICAgICAgICBpZiAod2FsbGV0Q29ubmVjdGVkID09IGZhbHNlKSB7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgY29sb3I9J2JsdWUnPlxuICAgICAgICAgICAgPEJ1dHRvbiAgZGlzYWJsZWQgPlxuICAgICAgICAgICAgICAgIFJlYWQgb25seSBtb2RlIFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uICBwcmltYXJ5IFxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7IGNvbm5lY3RXZWIzIH0gPlxuICAgICAgICAgICAgICAgIENvbm5lY3RcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2FsbGV0IGlzIG9uIHRoZSB3cm9uZyBuZXR3b3JrLCByZXR1cm4gYSByZWQgYnV0dG9uIHJlcXVlc3RpbmcgdG8gY2hhbmdlIG5ldHdvcmsuIFxuICAgICAgICAvLyBCdXR0b24gZG9lcyBub3QgaGF2ZSBhbnkgZnVuY3Rpb25hbGl0eSBhdCB0aGUgbW9tZW50LiAoaGVuY2UgYmFzaWMgY29sb3Igc2NoZW1lKVxuICAgICAgICBpZiAod2FsbGV0Q29ubmVjdGVkICYmIHdlYjNDaGFpbklkICE9PSA1KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cCBjb2xvcj0ncmVkJz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPiBcbiAgICAgICAgICAgICAgICAgICAgSW5jb3JyZWN0IGNoYWluXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvciA9IFwicmVkXCIgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7IGNoYW5nZUNoYWluIH0gPlxuICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgdG8gR29lcmxpXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgd2FsbGV0IGlzICBjb25uZWN0ZWQsIHJldHVybiBhIGdyZWVuIGJ1dHRvbiB0aGF0IHN0YXRlcyB3YWxsZXQgY29ubmVjdGVkLiBcbiAgICAgICAgICAgIC8vIEJ1dHRvbiBkb2VzIG5vdCBoYXZlIGFueSBmdW5jdGlvbmFsaXR5IGF0IHRoZSBtb21lbnQuIChoZW5jZSBiYXNpYyBjb2xvciBzY2hlbWUpXG4gICAgICAgICAgICBpZiAoIGVuc05hbWUgKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgY29sb3I9J2dyZWVuJz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPiBcbiAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGVkIHRvOiB7IGVuc05hbWUgfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gYmFzaWMgY29sb3IgPSBcImdyZXlcIiAgXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geyBkaXNjb25uZWN0V2ViMyB9ID5cbiAgICAgICAgICAgICAgICAgICAgZGlzY29ubmVjdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgY29sb3I9J2dyZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZCA+IFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGVkIHRvOiB7d2FsbGV0QWRkcmVzcy5zdWJzdHJpbmcoMCw1KX0uLi57d2FsbGV0QWRkcmVzcy5zdWJzdHJpbmcoMzgsNDIpfSAgXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJhc2ljIGNvbG9yID0gXCJncmV5XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsgZGlzY29ubmVjdFdlYjMgfSA+IFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY29ubmVjdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAvLyBSZW5kZXJzIHRoZSBuYXZiYXIuIFxuICAgIC8vIHBlciBpdGVtLCBpZiBjbGlja2VkLCBzZXRUYWIgaXMgc2V0IHRvIHRoZSBuYW1lIG9mIHRoZSB0YWIuIFxuICAgIHJldHVybiAoICAgICAgICBcbiAgICAgICAgICAgIDxNZW51ID5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdIb21lJ1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gJ0hvbWUnfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ0hvbWUnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgey8qIDxJY29uIG5hbWU9J2NoZWNrbWFyaycgc2l6ZSA9ICdsYXJnZScvPiAqL31cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT4gIFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J0Fib3V0J1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gJ0Fib3V0J31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdBYm91dCcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNvbHVtbnM9IHsxfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY2VudGVyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nQ2hlY2sgRG9jdW1lbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGFiID09PSAnRG9jSGFzaF9DZXJ0cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignRG9jSGFzaF9DZXJ0cycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdDaGVjayBDZXJ0aWZpY2F0ZXMgSXNzdWVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gJ0lzc3VlZF9DZXJ0cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignSXNzdWVkX0NlcnRzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdDaGVjayBDZXJ0aWZpY2F0ZXMgUmVjZWl2ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGFiID09PSAnUmVjZWl2ZWRfQ2VydHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ1JlY2VpdmVkX0NlcnRzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdDZXJ0aWZ5IERvY3VtZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gJ0NlcnRpZnknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ0NlcnRpZnknKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgIHsvKiByZW5kZXJpbmcgdGhlIGxvZ2luIGJ1dHRvbiBjcmVhdGVkIGFib3ZlICovfVxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gPlxuICAgICAgICAgICAgICAgICAgICB7IHJlbmRlckJ1dHRvbigpIH1cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT4gICBcbiAgICAgICAgICAgIDwvTWVudT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJCdXR0b24iLCJHcmlkIiwiSWNvbiIsIk1lbnUiLCJTZWdtZW50IiwiTmF2QmFyIiwiY29ubmVjdFdlYjMiLCJkaXNjb25uZWN0V2ViMyIsImNoYW5nZUNoYWluIiwid2ViM0NoYWluSWQiLCJ0YWIiLCJzZXRUYWIiLCJ3YWxsZXRBZGRyZXNzIiwiZW5zTmFtZSIsIndhbGxldENvbm5lY3RlZCIsInJlbmRlckJ1dHRvbiIsImRpdiIsIkdyb3VwIiwiY29sb3IiLCJkaXNhYmxlZCIsInByaW1hcnkiLCJvbkNsaWNrIiwiYmFzaWMiLCJzdWJzdHJpbmciLCJJdGVtIiwibmFtZSIsImFjdGl2ZSIsImNvbnRhaW5lciIsImNvbHVtbnMiLCJSb3ciLCJjZW50ZXJlZCIsInNlY29uZGFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navBar.js\n"));

/***/ })

});