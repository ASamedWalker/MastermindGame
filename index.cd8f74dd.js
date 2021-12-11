// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1urTD":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "bf31e10ccd8f74dd";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bbGHz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _codeMakerJs = require("./CodeMaker.js");
var _codeMakerJsDefault = parcelHelpers.interopDefault(_codeMakerJs);
var _configJs = require("./config.js");
var _modelJs = require("./Model.js");
var _uiJs = require("./UI.js");
var _uiJsDefault = parcelHelpers.interopDefault(_uiJs);
var _eventListenerJs = require("./EventListener.js");
var _eventListenerJsDefault = parcelHelpers.interopDefault(_eventListenerJs);
var _highscoreServiceJs = require("./service/HighscoreService.js");
var _highscoreServiceJsDefault = parcelHelpers.interopDefault(_highscoreServiceJs);
"use strict";
// color codes (config)
// translation (config)
// sound effects (service)
// hover effects on buttons (CSS)
// In game loop (real time)
//    handleUserInput()
//    updateGame()
//    updateAI() is optional
//    render(data)
// Web HTTP Request
//    HTTP POST request comes in from HTML form (GET in case with search query in URL, q=game programming)
//    Routing chooses the controller by the API URL posts/ (routing decides which controller)
//    Service delegates the use case, all the business rules, to decide whichj data need to fetch
//    Fetches from DB the data, maps to model
//    Returned data pass to the template, render the data
// ---------------------------------------------------------------------------------------
const initModel = async (difficulty)=>{
    _modelJs.setDifficulty(difficulty);
    _modelJs.resetGuessedCode();
    _modelJs.setCurrentTurn(1);
    _modelJs.initializeTime();
    let secretCode = await _codeMakerJsDefault.default.fetchRandomNumbers(difficulty);
    _modelJs.setSecretCode(secretCode);
};
const initUI = ()=>{
    _uiJsDefault.default.renderBoard(_modelJs.getDifficulty());
    _uiJsDefault.default.updateTurn(_modelJs.getCurrentTurn());
    _uiJsDefault.default.renderButtonPanel(_modelJs.getDifficulty());
    _uiJsDefault.default.displayGame();
};
// Handlers/Callbacks for events
//-----------------------------------------------------
const onClose = ()=>{
    _uiJsDefault.default.toggleAlert();
};
const onViewHighscores = ()=>{
    _uiJsDefault.default.toggleAlert();
    startGame(_modelJs.getDifficulty());
};
const onGameOver = ()=>{
    _uiJsDefault.default.toggleAlert();
    startGame(_modelJs.getDifficulty());
};
const onSubmitScore = (playerName)=>{
    _highscoreServiceJsDefault.default.addScore({
        playerName: playerName,
        numOfTries: _modelJs.getCurrentTurn(),
        duration: _modelJs.calcDuration()
    });
    _uiJsDefault.default.renderHighscores(_modelJs.getHighscores());
    _eventListenerJsDefault.default.addEventListenerToCloseButton(onViewHighscores);
};
const onInput = (button)=>{
    const { secretCode , guessedCode , currentTurn  } = _modelJs.gameState;
    let { control , selectedNumber  } = button.dataset;
    if (control === "submit") handleSubmit();
    else if (control === "undo") handleUndo();
    else handleSelectedNumber(selectedNumber);
};
const onNewGame = (difficulty)=>{
    startGame(difficulty);
};
const onMenuInput = (button)=>{
    let { menuItem  } = button.dataset;
    if (menuItem === "display-rules") {
        _uiJsDefault.default.showModalForGameRules();
        _eventListenerJsDefault.default.addEventListenerToCloseButton(onClose);
    } else if (menuItem === "display-about") {
        _uiJsDefault.default.showModalForCredits();
        _eventListenerJsDefault.default.addEventListenerToCloseButton(onClose);
    } else if (menuItem === "display-highscores") {
        _uiJsDefault.default.showModalForHighscores(_modelJs.getHighscores());
        _eventListenerJsDefault.default.addEventListenerToCloseButton(onClose);
    }
};
const handleSubmit = ()=>{
    if (_modelJs.getGuessedCode().length !== _configJs.GAME_DIFFICULTY[_modelJs.getDifficulty()].codeLength) {
        _uiJsDefault.default.showAlertOnInvalidInput(_modelJs.getDifficulty());
        _eventListenerJsDefault.default.addEventListenerToCloseButton(onClose);
        return;
    }
    const occurrenceStatus = compareCodes(_modelJs.getSecretCode(), _modelJs.getGuessedCode());
    _modelJs.setOccurrenceStatus(occurrenceStatus);
    _uiJsDefault.default.renderOccurrenceStatus(_modelJs.getCurrentTurn(), _modelJs.getOccurrenceStatus(), _modelJs.getDifficulty());
    updateGameLogic();
    _uiJsDefault.default.updateTurn(_modelJs.getCurrentTurn());
};
const handleUndo = ()=>{
    if (_modelJs.getGuessedCode().length < 1) return;
    _modelJs.getGuessedCode().pop();
    _uiJsDefault.default.renderCodeCombination(_modelJs.getCurrentTurn(), _modelJs.getGuessedCode(), _modelJs.getDifficulty());
};
const handleSelectedNumber = (selectedNumber)=>{
    if (_modelJs.getGuessedCode().length < _configJs.GAME_DIFFICULTY[_modelJs.getDifficulty()].codeLength) _modelJs.getGuessedCode().push(selectedNumber);
    _uiJsDefault.default.renderCodeCombination(_modelJs.getCurrentTurn(), _modelJs.getGuessedCode(), _modelJs.getDifficulty());
};
//-----------------------------------------------------
// initialize game
const startGame = (difficulty)=>{
    initModel(difficulty);
    initUI();
    _eventListenerJsDefault.default.addEventListenersToPanelButtons(onInput);
};
_eventListenerJsDefault.default.addEventListenerForNewGame(onNewGame);
_eventListenerJsDefault.default.addEventListenersToMenuButtons(onMenuInput);
// won/lost/continue
const updateGameLogic = ()=>{
    if (hasGuessedSecretCode()) {
        _uiJsDefault.default.showAlertForWinningCondition();
        _eventListenerJsDefault.default.addEventToSubmitButton(onSubmitScore);
    } else if (hasLost()) {
        _uiJsDefault.default.showAlertForLosingCondition(_modelJs.getSecretCode(), _modelJs.getDifficulty());
        _eventListenerJsDefault.default.addEventListenerToCloseButton(onGameOver);
    } else {
        _modelJs.incrementTurn();
        _modelJs.resetGuessedCode();
    }
};
const hasGuessedSecretCode = ()=>{
    return _modelJs.getGuessedCode().join("") === _modelJs.getSecretCode().join("");
};
const hasLost = ()=>{
    return _modelJs.getCurrentTurn() === _configJs.MAX_TRIES;
};
const compareCodes = (secretCode, guessedCode)=>{
    let inPlaceCount = 0;
    let changedPlaceCount = 0;
    let wrongCount = 0;
    for(let i = 0; i < guessedCode.length; i++){
        const index = secretCode.indexOf(guessedCode[i]);
        if (guessedCode[i] === secretCode[i]) inPlaceCount++;
        else if (index !== -1 && i !== index) changedPlaceCount++;
        else wrongCount++;
    }
    return {
        inPlaceCount,
        changedPlaceCount,
        wrongCount
    };
};

},{"./CodeMaker.js":"lQStd","./config.js":"6V52N","./Model.js":"ejWFH","./UI.js":"lRoR1","./EventListener.js":"1T13D","./service/HighscoreService.js":"iVczu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lQStd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("./Config.js");
class CodeMaker {
    async fetchRandomNumbers(difficulty) {
        const { codeLength , maxNumber  } = _configJs.GAME_DIFFICULTY[difficulty];
        const apiUrl = `https://www.random.org/integers/?num=${codeLength}&min=${_configJs.MIN_NUMBER}&max=${maxNumber}&col=1&base=10&format=plain&rnd=new`;
        const response = await fetch(apiUrl, {
            method: "GET"
        });
        const result = await response.text();
        const randomNumbers = result.split("\n").slice(0, codeLength);
        if (randomNumbers.length > 0) return randomNumbers;
        return this.generateRandomNumbers();
    }
     #generateRandomNumbers() {
        return [
            '0',
            '1',
            '2',
            '3'
        ];
    }
}
exports.default = new CodeMaker();

},{"./Config.js":"hEUs6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hEUs6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX_TRIES", ()=>MAX_TRIES
);
parcelHelpers.export(exports, "MIN_NUMBER", ()=>MIN_NUMBER
);
parcelHelpers.export(exports, "MAX_ENTRIES", ()=>MAX_ENTRIES
);
parcelHelpers.export(exports, "LOCAL_STORAGE_KEY", ()=>LOCAL_STORAGE_KEY
);
parcelHelpers.export(exports, "GAME_DIFFICULTY", ()=>GAME_DIFFICULTY
);
const MAX_TRIES = 10;
const MIN_NUMBER = 0;
const MAX_ENTRIES = 10;
const LOCAL_STORAGE_KEY = 'highscores';
const GAME_DIFFICULTY = {
    easy: {
        codeLength: 3,
        maxNumber: 5
    },
    normal: {
        codeLength: 4,
        maxNumber: 7
    },
    hard: {
        codeLength: 5,
        maxNumber: 9
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6V52N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX_TRIES", ()=>MAX_TRIES
);
parcelHelpers.export(exports, "MIN_NUMBER", ()=>MIN_NUMBER
);
parcelHelpers.export(exports, "MAX_ENTRIES", ()=>MAX_ENTRIES
);
parcelHelpers.export(exports, "LOCAL_STORAGE_KEY", ()=>LOCAL_STORAGE_KEY
);
parcelHelpers.export(exports, "GAME_DIFFICULTY", ()=>GAME_DIFFICULTY
);
const MAX_TRIES = 10;
const MIN_NUMBER = 0;
const MAX_ENTRIES = 10;
const LOCAL_STORAGE_KEY = 'highscores';
const GAME_DIFFICULTY = {
    easy: {
        codeLength: 3,
        maxNumber: 5
    },
    normal: {
        codeLength: 4,
        maxNumber: 7
    },
    hard: {
        codeLength: 5,
        maxNumber: 9
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ejWFH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameState", ()=>gameState
);
parcelHelpers.export(exports, "setDifficulty", ()=>setDifficulty
);
parcelHelpers.export(exports, "getDifficulty", ()=>getDifficulty
);
parcelHelpers.export(exports, "setSecretCode", ()=>setSecretCode
);
parcelHelpers.export(exports, "getSecretCode", ()=>getSecretCode
);
parcelHelpers.export(exports, "getGuessedCode", ()=>getGuessedCode
);
parcelHelpers.export(exports, "getOccurrenceStatus", ()=>getOccurrenceStatus
);
parcelHelpers.export(exports, "setOccurrenceStatus", ()=>setOccurrenceStatus
);
parcelHelpers.export(exports, "incrementTurn", ()=>incrementTurn
);
parcelHelpers.export(exports, "getCurrentTurn", ()=>getCurrentTurn
);
parcelHelpers.export(exports, "setCurrentTurn", ()=>setCurrentTurn
);
parcelHelpers.export(exports, "resetGuessedCode", ()=>resetGuessedCode
);
parcelHelpers.export(exports, "getHighscores", ()=>getHighscores
);
parcelHelpers.export(exports, "setHighscores", ()=>setHighscores
);
parcelHelpers.export(exports, "initializeTime", ()=>initializeTime
);
parcelHelpers.export(exports, "calcDuration", ()=>calcDuration
);
let gameState = {
    difficulty: null,
    secretCode: [],
    guessedCode: [],
    currentTurn: 1,
    highscores: [],
    startTime: null,
    occurrenceStatus: {
    }
};
const setDifficulty = (difficulty)=>{
    gameState.difficulty = difficulty;
};
const getDifficulty = ()=>{
    return gameState.difficulty;
};
const setSecretCode = (randomNumbers)=>{
    gameState.secretCode = randomNumbers;
};
const getSecretCode = ()=>{
    return gameState.secretCode;
};
const getGuessedCode = ()=>{
    return gameState.guessedCode;
};
const getOccurrenceStatus = ()=>{
    return gameState.occurrenceStatus;
};
const setOccurrenceStatus = (occurrenceStatus)=>{
    gameState.occurrenceStatus = occurrenceStatus;
};
const incrementTurn = ()=>{
    gameState.currentTurn++;
};
const getCurrentTurn = ()=>{
    return gameState.currentTurn;
};
const setCurrentTurn = (currentTurn)=>{
    gameState.currentTurn = currentTurn;
};
const resetGuessedCode = ()=>{
    gameState.guessedCode = [];
};
const getHighscores = ()=>{
    return gameState.highscores;
};
const setHighscores = (highscores)=>{
    gameState.highscores = highscores;
};
const initializeTime = ()=>{
    gameState.startTime = new Date();
};
const calcDuration = ()=>{
    return new Date() - gameState.startTime;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lRoR1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _boardViewJs = require("./views/BoardView.js");
var _boardViewJsDefault = parcelHelpers.interopDefault(_boardViewJs);
var _turnViewJs = require("./views/TurnView.js");
var _turnViewJsDefault = parcelHelpers.interopDefault(_turnViewJs);
var _buttonPanelViewJs = require("./views/ButtonPanelView.js");
var _buttonPanelViewJsDefault = parcelHelpers.interopDefault(_buttonPanelViewJs);
var _codeCombinationViewJs = require("./views/CodeCombinationView.js");
var _codeCombinationViewJsDefault = parcelHelpers.interopDefault(_codeCombinationViewJs);
var _occurrenceStatusViewJs = require("./views/OccurrenceStatusView.js");
var _occurrenceStatusViewJsDefault = parcelHelpers.interopDefault(_occurrenceStatusViewJs);
var _highscoreViewJs = require("./views/HighscoreView.js");
var _highscoreViewJsDefault = parcelHelpers.interopDefault(_highscoreViewJs);
var _alertViewJs = require("./views/AlertView.js");
var _alertViewJsDefault = parcelHelpers.interopDefault(_alertViewJs);
class UI {
    #boardView = null;
    #turnView = null;
    #buttonPanelView = null;
    #codeCombinationView = null;
    #occurrenceStatusView = null;
    #highscoreView = null;
    #alertView = null;
    constructor(boardView, turnView, buttonPanelView, codeCombinationView, occurrenceStatusView, highscoreView, alertView){
        this.#boardView = boardView;
        this.#turnView = turnView;
        this.#buttonPanelView = buttonPanelView;
        this.#codeCombinationView = codeCombinationView;
        this.#occurrenceStatusView = occurrenceStatusView;
        this.#highscoreView = highscoreView;
        this.#alertView = alertView;
    }
    displayGame() {
        const wrapper = document.querySelector('.game-wrapper');
        const menu = document.querySelector('.game-menu');
        wrapper.style.display = "block";
        menu.style.display = "none";
    }
    renderBoard(difficulty) {
        this.#boardView.renderBoard(difficulty);
    }
    updateTurn(currentTurn, isActive = true) {
        this.#turnView.updateTurn(currentTurn, isActive);
    }
    // render controls
    renderButtonPanel(difficulty1) {
        this.#buttonPanelView.renderButtonPanel(difficulty1);
    }
    renderCodeCombination(currentTurn1, guessedCode, difficulty2) {
        this.#codeCombinationView.renderCodeCombination(currentTurn1, guessedCode, difficulty2);
    }
    renderOccurrenceStatus(currentTurn2, occurrenceStatus, difficulty3) {
        this.#occurrenceStatusView.renderOccurrenceStatus(currentTurn2, occurrenceStatus, difficulty3);
    }
    renderHighscores(highscores) {
        this.#highscoreView.renderHighscores(highscores);
    }
    showAlertOnInvalidInput(difficulty4) {
        this.#alertView.showAlertOnInvalidInput(difficulty4);
    }
    // show alert for winning condition
    showAlertForWinningCondition() {
        this.#alertView.showAlertForWinningCondition();
    }
    showAlertForLosingCondition(secretCode, difficulty5) {
        this.#alertView.showAlertForLosingCondition(secretCode, difficulty5);
    }
    showModalForGameRules() {
        this.#alertView.showModalForGameRules();
    }
    showModalForCredits() {
        this.#alertView.showModalForCredits();
    }
    showModalForHighscores(highscores1) {
        this.#alertView.showModalForHighscores(highscores1);
    }
    toggleAlert() {
        this.#alertView.toggleAlert();
    }
}
exports.default = new UI(_boardViewJsDefault.default, _turnViewJsDefault.default, _buttonPanelViewJsDefault.default, _codeCombinationViewJsDefault.default, _occurrenceStatusViewJsDefault.default, _highscoreViewJsDefault.default, _alertViewJsDefault.default);

},{"./views/BoardView.js":"6gRRT","./views/TurnView.js":"5XBtl","./views/ButtonPanelView.js":"fwZX2","./views/CodeCombinationView.js":"gR3VX","./views/OccurrenceStatusView.js":"4Jh4j","./views/HighscoreView.js":"3bL2u","./views/AlertView.js":"5KbgG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6gRRT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../Config.js");
class BoardView {
    #element = document.querySelector(".game-board-view");
    // render a board
    renderBoard(difficulty) {
        this.#element.innerHTML = '';
        for(let i = 1; i <= _configJs.MAX_TRIES; i++){
            const html = `
            <div class="game-try" data-turn="${i}">
                <span>Turn ${i}</span>
                <div class="choice-row">
                    ${this.getHTMLForChoices(difficulty)}
                </div>

                <div class="occurrence-status-row" data-turn="${i}">
                    ${this.getHTMLForOccurrenceStatusFlags(difficulty)}
                </div>
            </div>
            `;
            this.#element.insertAdjacentHTML("afterbegin", html);
        }
    }
    getHTMLForChoices(difficulty1) {
        let html = "";
        for(let i = 0; i < _configJs.GAME_DIFFICULTY[difficulty1].codeLength; i++)html += `<div class="choice choice-number" data-choice="${i}"><span class="number"></span></div>`;
        return html;
    }
    getHTMLForOccurrenceStatusFlags(difficulty2) {
        let html = "";
        for(let i = 0; i < _configJs.GAME_DIFFICULTY[difficulty2].codeLength; i++)html += `<div class="choice occurrence-status-flag" data-occurrence-status="${i}"></div>`;
        return html;
    }
}
exports.default = new BoardView();

},{"../Config.js":"hEUs6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5XBtl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class TurnView {
    #activeClass = "current-turn";
    #playedClass = "played-turn";
    // update turn view style
    updateTurn(currentTurn, isActive = true) {
        const boxElement = document.querySelector(`[data-turn="${currentTurn}"]`);
        boxElement.classList.add(`${isActive ? this.#activeClass : this.#playedClass}`);
    }
}
exports.default = new TurnView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fwZX2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../Config.js");
class ButtonPanelView {
    #element = document.querySelector(".number-picker-view");
    renderButtonPanel(difficulty) {
        this.#element.innerHTML = "";
        let html = "";
        html += this.getHTMLForNumberPickerButtons(difficulty);
        html += this.getHTMLForControlButtons();
        // result HTML insert in DOM
        this.#element.insertAdjacentHTML("beforeend", html);
    }
    getHTMLForNumberPickerButtons(difficulty1) {
        let html = "";
        for(let i = 0; i <= _configJs.GAME_DIFFICULTY[difficulty1].maxNumber; i++)html += `<button class="choice-btn" data-selected-number="${i}">${i}</button>`;
        return html;
    }
    getHTMLForControlButtons() {
        // Undo Button | Submit Button for guessed code (4 numbers)
        let html = `
      <button class="control-btn" data-control="undo">Undo</button>
      <button class="control-btn" data-control="submit">Submit</button>
    `;
        return html;
    }
}
exports.default = new ButtonPanelView();

},{"../Config.js":"hEUs6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gR3VX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
class CodeCombinationView {
    renderCodeCombination(currentTurn, guessedCode, difficulty) {
        const element = document.querySelector(`[data-turn="${currentTurn}"]`);
        for(let i = 0; i < _configJs.GAME_DIFFICULTY[difficulty].codeLength; i++){
            const numberElement = element.querySelector(`[data-choice="${i}"] span`);
            if (guessedCode[i] !== undefined) numberElement.innerHTML = guessedCode[i];
            else numberElement.innerHTML = "";
        }
    }
}
exports.default = new CodeCombinationView();

},{"../config.js":"6V52N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4Jh4j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
class OccurrenceStatusView {
     #getColorFlags(occurrenceStatus) {
        /*
    {inPlaceCount: 1, changedPlaceCount: 2, wrongCount: 1}
    "red white white black "
    "red white white black".split(" ");
    [0] = red
    [1] = white
    [2] = white
    [3] = black
    */ const { inPlaceCount , changedPlaceCount , wrongCount  } = occurrenceStatus;
        const red = "red ".repeat(inPlaceCount);
        const white = "white ".repeat(changedPlaceCount);
        const black = "black ".repeat(wrongCount);
        return (red + white + black).trim().split(" ");
    }
    renderOccurrenceStatus(currentTurn, occurrenceStatus1, difficulty) {
        console.log(occurrenceStatus1);
        const colorFlags = this.#getColorFlags(occurrenceStatus1);
        const element = document.querySelector(`.game-try [data-turn="${currentTurn}"]`);
        for(let i = 0; i < _configJs.GAME_DIFFICULTY[difficulty].codeLength; i++){
            const statusElement = element.querySelector(`[data-occurrence-status="${i}"]`);
            statusElement.style.backgroundColor = colorFlags[i];
        }
    }
}
exports.default = new OccurrenceStatusView();

},{"../config.js":"6V52N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3bL2u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("../helpers.js");
var _configJs = require("../config.js");
class HighscoreView {
    #element = document.querySelector(".alert-view");
    renderHighscores(highscores) {
        this.#element.innerHTML = "";
        let html = `
      <div class="high-score-display">
      <h1>Top ${_configJs.MAX_ENTRIES} High Scores</h1>
      <button class="btn-close-alert">X</button>
      <ul class="high-score-container">
    `;
        highscores.forEach((item, i)=>{
            html += `
        <li class="high-score-item">
          <span>${i + 1}</span>
          <span class="high-score-username">${item.playerName}</span>
          <span class="high-score-moves">${item.numOfTries} tries</span> 
          <span class="high-score-time">${_helpersJs.formatTime(+item.duration)}</span>
        </li>
      `;
        });
        html += "</ul></div>";
        this.#element.insertAdjacentHTML("afterbegin", html);
    }
}
exports.default = new HighscoreView();

},{"../helpers.js":"9RX9R","../config.js":"6V52N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9RX9R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "capitalize", ()=>capitalize
);
parcelHelpers.export(exports, "formatTime", ()=>formatTime
);
const capitalize = function(string) {
    return string[0].toUpperCase() + string.slice(1);
};
const formatTime = function(mills) {
    const seconds = `${Math.floor(mills / 1000 % 60)}`.padStart(2, 0);
    const minutes = `${Math.floor(mills / 1000 / 60 % 60)}`.padStart(2, 0);
    const hours = `${Math.floor(mills / 1000 / 3600 % 24)}`.padStart(2, 0);
    return `${hours == '00' ? '' : `${hours}h `}${minutes}min ${seconds}s`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5KbgG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
var _highscoreViewJs = require("./HighscoreView.js");
var _highscoreViewJsDefault = parcelHelpers.interopDefault(_highscoreViewJs);
class AlertView {
    #element = document.querySelector(".alert-view");
    #overlay = document.querySelector(".overlay");
    #highscoreView = null;
    constructor(highscoreView){
        this.#highscoreView = highscoreView;
    }
    showModalForGameRules() {
        this.#element.innerHTML = "";
        const html = `
      <div class="game-rules">
        <button class="btn-close-alert">X</button>
        <h1>Game Rules</h1>
        <p>
          Mastermind is a two-sided code-solving game played by a computer(codemaker) and a user/player(codebreaker). 
          Using a series of randomly generated numbers ranging from (0 - 7), the codemaker chooses a pattern code and conceals it in their gameplay area. 
          The codebreaker then begins trying to break the code by inserting various number combinations for each turn, hoping to break it within 10 chances. 
          In turn, the codemaker responds with feedback telling the codebreaker how close they are to winning. 
          At the start of the game, the player chooses the level of difficulty he/she prefers.
        </p>
        <p>
          Then the player clicks the new game button. 
          Once the game pops up, the player now has the opportunity to interact with the game by attempting to input a code to break the code set by the codemaker. 
          The codemaker then gives feedback at the end of each attempt made by the codebreaker. The feedback provided by the codemaker would be responses like
          The player had to guess a correct number
          The player had guessed a correct number and its correct location
          The player’s guess was incorrect.
        </p>
        <p>
          This response would be substituted with two flag which represent the color red, white, and flags in the game. 
          Each red flag would correspond to the feedback the player had guess a correct number and it’s correct location. 
          Each white flag corresponds to the feedback the player had guessed a correct number. 
          Each black flag would correspond to feedback that the player’s guess was incorrect.
        </p>
      </div>
    `;
        this.#element.insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    showModalForCredits() {
        this.#element.innerHTML = "";
        const html = `
      <div class="credits">
        <button class="btn-close-alert">X</button>
        <h1>Credits</h1>
        <p>
         Hi, my name is Abdul Samed Walker and a passionate software developer. I love to code and thinker with things.
        </p>
      </div>
    `;
        this.#element.insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    showModalForHighscores(highscores) {
        this.#element.innerHTML = "";
        this.#highscoreView.renderHighscores(highscores);
        this.toggleAlert();
    }
    // show alert for winning case
    showAlertForWinningCondition() {
        this.#element.innerHTML = "";
        // render HTML
        const html = `
      <p class="message">You broke the secret code!</p>
      <label for="name">Input your name:</label>
      <input type="text" id="playerName" />
      <button class="btn-submit-highscore">Submit</button>
    `;
        this.#element.insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    showAlertForLosingCondition(secretCode, difficulty) {
        this.#element.innerHTML = "";
        let html = `
      <button class="btn-close-alert">X</button>
      <p class="message">Sorry! You didn't break the code!</p>
      <p class="message">Secret code was:</p>
      <div class="secret-container">`;
        for(let i = 0; i < _configJs.GAME_DIFFICULTY[difficulty].codeLength; i++)html += `<div class="choice choice-number"><span class="number">${secretCode[i]}</span></div>`;
        html += "</div>";
        this.#element.insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    showAlertOnInvalidInput(difficulty1) {
        this.#element.innerHTML = "";
        // render HTML
        const html = `<button class="btn-close-alert">X</button><p class="message">Code length needs to be ${_configJs.GAME_DIFFICULTY[difficulty1].codeLength}!</p>`;
        this.#element.insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    // toggle (show/hide alert)
    toggleAlert() {
        this.#element.classList.toggle("hidden");
        this.#overlay.classList.toggle("hidden");
    }
}
exports.default = new AlertView(_highscoreViewJsDefault.default);

},{"../config.js":"6V52N","./HighscoreView.js":"3bL2u","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1T13D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventListener {
    addEventListenerForNewGame(clickHandler) {
        const button = document.querySelector(`[data-menu-item="new-game"]`);
        button.addEventListener("click", ()=>{
            const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
            clickHandler(difficulty);
        });
    }
    addEventListenersToMenuButtons(clickHandler1) {
        const element = document.querySelector(".game-menu");
        const buttons = element.querySelectorAll("button");
        for (let button of buttons)button.addEventListener("click", clickHandler1.bind(this, button));
    }
    addEventListenersToPanelButtons(clickHandler2) {
        const element = document.querySelector(".number-picker-view");
        const buttons = element.querySelectorAll("button");
        for (let button of buttons)button.addEventListener("click", clickHandler2.bind(this, button));
    }
    addEventListenerToCloseButton(clickHandler3) {
        const element = document.querySelector(".alert-view");
        element.querySelector(".btn-close-alert").addEventListener("click", clickHandler3);
    }
    addEventToSubmitButton(clickHandler4) {
        const element = document.querySelector(".alert-view");
        element.querySelector(".btn-submit-highscore").addEventListener("click", ()=>{
            const playerName = document.getElementById("playerName").value;
            clickHandler4(playerName);
        });
    }
}
exports.default = new EventListener();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iVczu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _modelJs = require("../Model.js");
var _configJs = require("../config.js");
class HighscoreService {
    constructor(){
        const highscores = localStorage.getItem(_configJs.LOCAL_STORAGE_KEY);
        console.log(highscores);
        if (null !== highscores) _modelJs.setHighscores(JSON.parse(highscores));
    }
    clearHighscores() {
        localStorage.clear(_configJs.LOCAL_STORAGE_KEY);
    }
    addScore(highscoreData) {
        _modelJs.getHighscores().push(highscoreData);
        this.#sortHighScores();
        _modelJs.setHighscores(this.#sliceHighscores());
        this.#storeHighscore();
    }
     #sliceHighscores() {
        return _modelJs.getHighscores().slice(0, _configJs.MAX_ENTRIES);
    }
     #sortHighScores() {
        return _modelJs.getHighscores().sort((a, b)=>{
            if (a.numOfTries > b.numOfTries) return 1;
            if (a.numOfTries < b.numOfTries) return -1;
            if (a.duration > b.duration) return 1;
            if (a.duration < b.duration) return -1;
        });
    }
     #storeHighscore() {
        localStorage.setItem(_configJs.LOCAL_STORAGE_KEY, JSON.stringify(_modelJs.getHighscores()));
    }
}
exports.default = new HighscoreService(); /*
abstract class BaseHighscoreService implements ExampleInterface {
  // common functionality
}

class HighscoreServiceAPI extends BaseHighscoreService {
  // send it to backend server
  addScore() {
    // send to server
  }
}

class HighscoreServiceInFile extends BaseHighscoreService {
  // save to file
  addScore();
}

class HighscoreServiceLocalStorage extends BaseHighscoreService {
  // save to local storage
  addScore();
}

// DEVELOPER A
class HighscoreService {
  //
  // common functionality
  // sortData
  // printData
  //
  //-----------------------------
  // send/save
  sendToServer(highscoreData);
  saveToFile(highscoreData);
}

// DEVELOPER B
1) Extends HighscoreService
class LocalStorageService extends HighscoreService {
  addScore() {
    // save in local storage
  }
}

DEVELOPER A has code in his project
DEVELOPER B to write extended version of that code
*/ 

},{"../Model.js":"ejWFH","../config.js":"6V52N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["1urTD","bbGHz"], "bbGHz", "parcelRequire22c8")

//# sourceMappingURL=index.cd8f74dd.js.map
