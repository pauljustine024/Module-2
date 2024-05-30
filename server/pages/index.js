"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n\n\n\n\n\nfunction HomePage() {\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_4__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const deposit = async ()=>{\n        if (atm) {\n            let tx = await atm.deposit(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm) {\n            let tx = await atm.withdraw(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const initUser = ()=>{\n        // Check to see if user has Metamask\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install Metamask in order to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 14\n            }, this);\n        }\n        // Check to see if user is connected. If not, connect to their account\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 14\n            }, this);\n        }\n        if (balance == undefined) {\n            getBalance();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deposit,\n                    children: \"Deposit 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: withdraw,\n                    children: \"Withdraw 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-56a6f1d48df36383\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-56a6f1d48df36383\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-56a6f1d48df36383\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n                    lineNumber: 107,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"56a6f1d48df36383\",\n                children: \".container.jsx-56a6f1d48df36383{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Paul Justine Laycano\\\\Downloads\\\\SCM-Starter-main\\\\SCM-Starter-main\\\\pages\\\\index.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUM4QjtrREFBZTs7MEJBQ2QsOERBQUNDOzswQkFBTyw0RUFBQ0M7OzhCQUFHOzs7Ozs7Ozs7OztZQUNYUDs7Ozs7Ozs7Ozs7QUFTUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFyZGhhdC1wcm9qZWN0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtldGhlcnN9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBhdG1fYWJpIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0Fzc2Vzc21lbnQuc29sL0Fzc2Vzc21lbnQuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW2V0aFdhbGxldCwgc2V0RXRoV2FsbGV0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFthdG0sIHNldEFUTV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg1RmJEQjIzMTU2NzhhZmVjYjM2N2YwMzJkOTNGNjQyZjY0MTgwYWEzXCI7XG4gIGNvbnN0IGF0bUFCSSA9IGF0bV9hYmkuYWJpO1xuXG4gIGNvbnN0IGdldFdhbGxldCA9IGFzeW5jKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIHNldEV0aFdhbGxldCh3aW5kb3cuZXRoZXJldW0pO1xuICAgIH1cblxuICAgIGlmIChldGhXYWxsZXQpIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7bWV0aG9kOiBcImV0aF9hY2NvdW50c1wifSk7XG4gICAgICBoYW5kbGVBY2NvdW50KGFjY291bnQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFjY291bnQgPSAoYWNjb3VudCkgPT4ge1xuICAgIGlmIChhY2NvdW50KSB7XG4gICAgICBjb25zb2xlLmxvZyAoXCJBY2NvdW50IGNvbm5lY3RlZDogXCIsIGFjY291bnQpO1xuICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnQgZm91bmRcIik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSBhc3luYygpID0+IHtcbiAgICBpZiAoIWV0aFdhbGxldCkge1xuICAgICAgYWxlcnQoJ01ldGFNYXNrIHdhbGxldCBpcyByZXF1aXJlZCB0byBjb25uZWN0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgaGFuZGxlQWNjb3VudChhY2NvdW50cyk7XG4gICAgXG4gICAgLy8gb25jZSB3YWxsZXQgaXMgc2V0IHdlIGNhbiBnZXQgYSByZWZlcmVuY2UgdG8gb3VyIGRlcGxveWVkIGNvbnRyYWN0XG4gICAgZ2V0QVRNQ29udHJhY3QoKTtcbiAgfTtcblxuICBjb25zdCBnZXRBVE1Db250cmFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhXYWxsZXQpO1xuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IGF0bUNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGF0bUFCSSwgc2lnbmVyKTtcbiBcbiAgICBzZXRBVE0oYXRtQ29udHJhY3QpO1xuICB9XG5cbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jKCkgPT4ge1xuICAgIGlmIChhdG0pIHtcbiAgICAgIHNldEJhbGFuY2UoKGF3YWl0IGF0bS5nZXRCYWxhbmNlKCkpLnRvTnVtYmVyKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYygpID0+IHtcbiAgICBpZiAoYXRtKSB7XG4gICAgICBsZXQgdHggPSBhd2FpdCBhdG0uZGVwb3NpdCgxKTtcbiAgICAgIGF3YWl0IHR4LndhaXQoKVxuICAgICAgZ2V0QmFsYW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdpdGhkcmF3ID0gYXN5bmMoKSA9PiB7XG4gICAgaWYgKGF0bSkge1xuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLndpdGhkcmF3KDEpO1xuICAgICAgYXdhaXQgdHgud2FpdCgpXG4gICAgICBnZXRCYWxhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pdFVzZXIgPSAoKSA9PiB7XG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHVzZXIgaGFzIE1ldGFtYXNrXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcbiAgICAgIHJldHVybiA8cD5QbGVhc2UgaW5zdGFsbCBNZXRhbWFzayBpbiBvcmRlciB0byB1c2UgdGhpcyBBVE0uPC9wPlxuICAgIH1cblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGlzIGNvbm5lY3RlZC4gSWYgbm90LCBjb25uZWN0IHRvIHRoZWlyIGFjY291bnRcbiAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fT5QbGVhc2UgY29ubmVjdCB5b3VyIE1ldGFtYXNrIHdhbGxldDwvYnV0dG9uPlxuICAgIH1cblxuICAgIGlmIChiYWxhbmNlID09IHVuZGVmaW5lZCkge1xuICAgICAgZ2V0QmFsYW5jZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5Zb3VyIEFjY291bnQ6IHthY2NvdW50fTwvcD5cbiAgICAgICAgPHA+WW91ciBCYWxhbmNlOiB7YmFsYW5jZX08L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZGVwb3NpdH0+RGVwb3NpdCAxIEVUSDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3dpdGhkcmF3fT5XaXRoZHJhdyAxIEVUSDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtnZXRXYWxsZXQoKTt9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoZWFkZXI+PGgxPldlbGNvbWUgdG8gdGhlIE1ldGFjcmFmdGVycyBBVE0hPC9oMT48L2hlYWRlcj5cbiAgICAgIHtpbml0VXNlcigpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJhdG1fYWJpIiwiSG9tZVBhZ2UiLCJldGhXYWxsZXQiLCJzZXRFdGhXYWxsZXQiLCJ1bmRlZmluZWQiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImF0bSIsInNldEFUTSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiY29udHJhY3RBZGRyZXNzIiwiYXRtQUJJIiwiYWJpIiwiZ2V0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGFuZGxlQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0QWNjb3VudCIsImFsZXJ0IiwiYWNjb3VudHMiLCJnZXRBVE1Db250cmFjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiYXRtQ29udHJhY3QiLCJDb250cmFjdCIsImdldEJhbGFuY2UiLCJ0b051bWJlciIsImRlcG9zaXQiLCJ0eCIsIndhaXQiLCJ3aXRoZHJhdyIsImluaXRVc2VyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJtYWluIiwiaGVhZGVyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./artifacts/contracts/Assessment.sol/Assessment.json":
/*!************************************************************!*\
  !*** ./artifacts/contracts/Assessment.sol/Assessment.json ***!
  \************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Assessment","sourceName":"contracts/Assessment.sol","abi":[{"inputs":[{"internalType":"uint256","name":"initBalance","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"name":"InsufficientBalance","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x608060405260405161073f38038061073f833981810160405281019061002591906100ad565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600181905550506100da565b600080fd5b6000819050919050565b61008a81610077565b811461009557600080fd5b50565b6000815190506100a781610081565b92915050565b6000602082840312156100c3576100c2610072565b5b60006100d184828501610098565b91505092915050565b610656806100e96000396000f3fe60806040526004361061004a5760003560e01c806312065fe01461004f5780632e1a7d4d1461007a5780638da5cb5b146100a3578063b69ef8a8146100ce578063b6b55f25146100f9575b600080fd5b34801561005b57600080fd5b50610064610115565b60405161007191906103b9565b60405180910390f35b34801561008657600080fd5b506100a1600480360381019061009c9190610405565b61011f565b005b3480156100af57600080fd5b506100b8610270565b6040516100c59190610473565b60405180910390f35b3480156100da57600080fd5b506100e3610294565b6040516100f091906103b9565b60405180910390f35b610113600480360381019061010e9190610405565b61029a565b005b6000600154905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a490610511565b60405180910390fd5b600060015490508160015410156101ff57600154826040517fcf4791810000000000000000000000000000000000000000000000000000000081526004016101f6929190610531565b60405180910390fd5b81600160008282546102119190610589565b9250508190555081816102249190610589565b60015414610235576102346105bd565b5b7f5b6b431d4476a211bb7d41c20d1aab9ae2321deee0d20be3d9fc9b1093fa6e3d8260405161026491906103b9565b60405180910390a15050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b6000600154905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461032f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032690610511565b60405180910390fd5b816001600082825461034191906105ec565b92505081905550818161035491906105ec565b60015414610365576103646105bd565b5b7f4d6ce1e535dbade1c23defba91e23b8f791ce5edc0cc320257a2b364e4e384268260405161039491906103b9565b60405180910390a15050565b6000819050919050565b6103b3816103a0565b82525050565b60006020820190506103ce60008301846103aa565b92915050565b600080fd5b6103e2816103a0565b81146103ed57600080fd5b50565b6000813590506103ff816103d9565b92915050565b60006020828403121561041b5761041a6103d4565b5b6000610429848285016103f0565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061045d82610432565b9050919050565b61046d81610452565b82525050565b60006020820190506104886000830184610464565b92915050565b600082825260208201905092915050565b7f596f7520617265206e6f7420746865206f776e6572206f66207468697320616360008201527f636f756e74000000000000000000000000000000000000000000000000000000602082015250565b60006104fb60258361048e565b91506105068261049f565b604082019050919050565b6000602082019050818103600083015261052a816104ee565b9050919050565b600060408201905061054660008301856103aa565b61055360208301846103aa565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610594826103a0565b915061059f836103a0565b92508282039050818111156105b7576105b661055a565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b60006105f7826103a0565b9150610602836103a0565b925082820190508082111561061a5761061961055a565b5b9291505056fea2646970667358221220d013ad58f854f699eb2e431eafe38ba91b1b02f8719a7ec74c37b185ebb0f9fc64736f6c63430008110033","deployedBytecode":"0x60806040526004361061004a5760003560e01c806312065fe01461004f5780632e1a7d4d1461007a5780638da5cb5b146100a3578063b69ef8a8146100ce578063b6b55f25146100f9575b600080fd5b34801561005b57600080fd5b50610064610115565b60405161007191906103b9565b60405180910390f35b34801561008657600080fd5b506100a1600480360381019061009c9190610405565b61011f565b005b3480156100af57600080fd5b506100b8610270565b6040516100c59190610473565b60405180910390f35b3480156100da57600080fd5b506100e3610294565b6040516100f091906103b9565b60405180910390f35b610113600480360381019061010e9190610405565b61029a565b005b6000600154905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a490610511565b60405180910390fd5b600060015490508160015410156101ff57600154826040517fcf4791810000000000000000000000000000000000000000000000000000000081526004016101f6929190610531565b60405180910390fd5b81600160008282546102119190610589565b9250508190555081816102249190610589565b60015414610235576102346105bd565b5b7f5b6b431d4476a211bb7d41c20d1aab9ae2321deee0d20be3d9fc9b1093fa6e3d8260405161026491906103b9565b60405180910390a15050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b6000600154905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461032f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032690610511565b60405180910390fd5b816001600082825461034191906105ec565b92505081905550818161035491906105ec565b60015414610365576103646105bd565b5b7f4d6ce1e535dbade1c23defba91e23b8f791ce5edc0cc320257a2b364e4e384268260405161039491906103b9565b60405180910390a15050565b6000819050919050565b6103b3816103a0565b82525050565b60006020820190506103ce60008301846103aa565b92915050565b600080fd5b6103e2816103a0565b81146103ed57600080fd5b50565b6000813590506103ff816103d9565b92915050565b60006020828403121561041b5761041a6103d4565b5b6000610429848285016103f0565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061045d82610432565b9050919050565b61046d81610452565b82525050565b60006020820190506104886000830184610464565b92915050565b600082825260208201905092915050565b7f596f7520617265206e6f7420746865206f776e6572206f66207468697320616360008201527f636f756e74000000000000000000000000000000000000000000000000000000602082015250565b60006104fb60258361048e565b91506105068261049f565b604082019050919050565b6000602082019050818103600083015261052a816104ee565b9050919050565b600060408201905061054660008301856103aa565b61055360208301846103aa565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610594826103a0565b915061059f836103a0565b92508282039050818111156105b7576105b661055a565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b60006105f7826103a0565b9150610602836103a0565b925082820190508082111561061a5761061961055a565b5b9291505056fea2646970667358221220d013ad58f854f699eb2e431eafe38ba91b1b02f8719a7ec74c37b185ebb0f9fc64736f6c63430008110033","linkReferences":{},"deployedLinkReferences":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();