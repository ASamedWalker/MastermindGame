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
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _CodeMaker = _interopRequireDefault(require("./CodeMaker.js"));
var _config = require("./config.js");
var model = _interopRequireWildcard(require("./Model.js"));
var _UI = _interopRequireDefault(require("./UI.js"));
var _EventListener = _interopRequireDefault(require("./EventListener.js"));
var _HighscoreService = _interopRequireDefault(require("./service/HighscoreService.js"));
function _getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
// ---------------------------------------------------------------------------------------
const initModel = async (difficulty)=>{
    model.setDifficulty(difficulty);
    model.resetGuessedCode();
    model.setCurrentTurn(1);
    model.initializeTime();
    let secretCode = await _CodeMaker.default.fetchRandomNumbers(difficulty);
    model.setSecretCode(secretCode);
};
const initUI = ()=>{
    _UI.default.renderBoard(model.getDifficulty());
    _UI.default.updateTurn(model.getCurrentTurn());
    _UI.default.renderButtonPanel(model.getDifficulty());
    _UI.default.displayGame();
}; // Handlers/Callbacks for events
//-----------------------------------------------------
const onClose = ()=>{
    _UI.default.toggleAlert();
};
const onViewHighscores = ()=>{
    _UI.default.toggleAlert();
    startGame(model.getDifficulty());
};
const onGameOver = ()=>{
    _UI.default.toggleAlert();
    startGame(model.getDifficulty());
};
const onSubmitScore = (playerName)=>{
    _HighscoreService.default.addScore({
        playerName: playerName,
        numOfTries: model.getCurrentTurn(),
        duration: model.calcDuration()
    });
    _UI.default.renderHighscores(model.getHighscores());
    _EventListener.default.addEventListenerToCloseButton(onViewHighscores);
};
const onInput = (button)=>{
    const { secretCode , guessedCode , currentTurn  } = model.gameState;
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
        _UI.default.showModalForGameRules();
        _EventListener.default.addEventListenerToCloseButton(onClose);
    } else if (menuItem === "display-about") {
        _UI.default.showModalForCredits();
        _EventListener.default.addEventListenerToCloseButton(onClose);
    } else if (menuItem === "display-highscores") {
        _UI.default.showModalForHighscores(model.getHighscores());
        _EventListener.default.addEventListenerToCloseButton(onClose);
    }
};
const handleSubmit = ()=>{
    if (model.getGuessedCode().length !== _config.GAME_DIFFICULTY[model.getDifficulty()].codeLength) {
        _UI.default.showAlertOnInvalidInput(model.getDifficulty());
        _EventListener.default.addEventListenerToCloseButton(onClose);
        return;
    }
    const occurrenceStatus = compareCodes(model.getSecretCode(), model.getGuessedCode());
    model.setOccurrenceStatus(occurrenceStatus);
    _UI.default.renderOccurrenceStatus(model.getCurrentTurn(), model.getOccurrenceStatus(), model.getDifficulty());
    updateGameLogic();
    _UI.default.updateTurn(model.getCurrentTurn());
};
const handleUndo = ()=>{
    if (model.getGuessedCode().length < 1) return;
    model.getGuessedCode().pop();
    _UI.default.renderCodeCombination(model.getCurrentTurn(), model.getGuessedCode(), model.getDifficulty());
};
const handleSelectedNumber = (selectedNumber)=>{
    if (model.getGuessedCode().length < _config.GAME_DIFFICULTY[model.getDifficulty()].codeLength) model.getGuessedCode().push(selectedNumber);
    _UI.default.renderCodeCombination(model.getCurrentTurn(), model.getGuessedCode(), model.getDifficulty());
}; //-----------------------------------------------------
// initialize game
const startGame = (difficulty)=>{
    initModel(difficulty);
    initUI();
    _EventListener.default.addEventListenersToPanelButtons(onInput);
};
_EventListener.default.addEventListenerForNewGame(onNewGame);
_EventListener.default.addEventListenersToMenuButtons(onMenuInput); // won/lost/continue
const updateGameLogic = ()=>{
    if (hasGuessedSecretCode()) {
        _UI.default.showAlertForWinningCondition();
        _EventListener.default.addEventToSubmitButton(onSubmitScore);
    } else if (hasLost()) {
        _UI.default.showAlertForLosingCondition(model.getSecretCode(), model.getDifficulty());
        _EventListener.default.addEventListenerToCloseButton(onGameOver);
    } else {
        model.incrementTurn();
        model.resetGuessedCode();
    }
};
const hasGuessedSecretCode = ()=>{
    return model.getGuessedCode().join("") === model.getSecretCode().join("");
};
const hasLost = ()=>{
    return model.getCurrentTurn() === _config.MAX_TRIES;
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

},{"./CodeMaker.js":"lQStd","./config.js":"6V52N","./Model.js":"ejWFH","./UI.js":"lRoR1","./EventListener.js":"1T13D","./service/HighscoreService.js":"iVczu","@babel/runtime/helpers/interopRequireDefault":"bfiIA"}],"lQStd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _Config = require("./Config.js");
function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
var _generateRandomNumbers = /*#__PURE__*/ new WeakSet();
class CodeMaker {
    constructor(){
        _classPrivateMethodInitSpec(this, _generateRandomNumbers);
    }
    async fetchRandomNumbers(difficulty) {
        const { codeLength , maxNumber  } = _Config.GAME_DIFFICULTY[difficulty];
        const apiUrl = `https://www.random.org/integers/?num=${codeLength}&min=${_Config.MIN_NUMBER}&max=${maxNumber}&col=1&base=10&format=plain&rnd=new`;
        const response = await fetch(apiUrl, {
            method: "GET"
        });
        const result = await response.text();
        const randomNumbers = result.split("\n").slice(0, codeLength);
        if (randomNumbers.length > 0) return randomNumbers;
        return this.generateRandomNumbers();
    }
}
function _generateRandomNumbers2() {
    return [
        '0',
        '1',
        '2',
        '3'
    ];
}
var _default = new CodeMaker();
exports.default = _default;

},{"./Config.js":"hEUs6"}],"hEUs6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MIN_NUMBER = exports.MAX_TRIES = exports.MAX_ENTRIES = exports.LOCAL_STORAGE_KEY = exports.GAME_DIFFICULTY = void 0;
const MAX_TRIES = 10;
exports.MAX_TRIES = MAX_TRIES;
const MIN_NUMBER = 0;
exports.MIN_NUMBER = MIN_NUMBER;
const MAX_ENTRIES = 10;
exports.MAX_ENTRIES = MAX_ENTRIES;
const LOCAL_STORAGE_KEY = 'highscores';
exports.LOCAL_STORAGE_KEY = LOCAL_STORAGE_KEY;
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
exports.GAME_DIFFICULTY = GAME_DIFFICULTY;

},{}],"6V52N":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MIN_NUMBER = exports.MAX_TRIES = exports.MAX_ENTRIES = exports.LOCAL_STORAGE_KEY = exports.GAME_DIFFICULTY = void 0;
const MAX_TRIES = 10;
exports.MAX_TRIES = MAX_TRIES;
const MIN_NUMBER = 0;
exports.MIN_NUMBER = MIN_NUMBER;
const MAX_ENTRIES = 10;
exports.MAX_ENTRIES = MAX_ENTRIES;
const LOCAL_STORAGE_KEY = 'highscores';
exports.LOCAL_STORAGE_KEY = LOCAL_STORAGE_KEY;
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
exports.GAME_DIFFICULTY = GAME_DIFFICULTY;

},{}],"ejWFH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setSecretCode = exports.setOccurrenceStatus = exports.setHighscores = exports.setDifficulty = exports.setCurrentTurn = exports.resetGuessedCode = exports.initializeTime = exports.incrementTurn = exports.getSecretCode = exports.getOccurrenceStatus = exports.getHighscores = exports.getGuessedCode = exports.getDifficulty = exports.getCurrentTurn = exports.gameState = exports.calcDuration = void 0;
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
exports.gameState = gameState;
const setDifficulty = (difficulty)=>{
    gameState.difficulty = difficulty;
};
exports.setDifficulty = setDifficulty;
const getDifficulty = ()=>{
    return gameState.difficulty;
};
exports.getDifficulty = getDifficulty;
const setSecretCode = (randomNumbers)=>{
    gameState.secretCode = randomNumbers;
};
exports.setSecretCode = setSecretCode;
const getSecretCode = ()=>{
    return gameState.secretCode;
};
exports.getSecretCode = getSecretCode;
const getGuessedCode = ()=>{
    return gameState.guessedCode;
};
exports.getGuessedCode = getGuessedCode;
const getOccurrenceStatus = ()=>{
    return gameState.occurrenceStatus;
};
exports.getOccurrenceStatus = getOccurrenceStatus;
const setOccurrenceStatus = (occurrenceStatus)=>{
    gameState.occurrenceStatus = occurrenceStatus;
};
exports.setOccurrenceStatus = setOccurrenceStatus;
const incrementTurn = ()=>{
    gameState.currentTurn++;
};
exports.incrementTurn = incrementTurn;
const getCurrentTurn = ()=>{
    return gameState.currentTurn;
};
exports.getCurrentTurn = getCurrentTurn;
const setCurrentTurn = (currentTurn)=>{
    gameState.currentTurn = currentTurn;
};
exports.setCurrentTurn = setCurrentTurn;
const resetGuessedCode = ()=>{
    gameState.guessedCode = [];
};
exports.resetGuessedCode = resetGuessedCode;
const getHighscores = ()=>{
    return gameState.highscores;
};
exports.getHighscores = getHighscores;
const setHighscores = (highscores)=>{
    gameState.highscores = highscores;
};
exports.setHighscores = setHighscores;
const initializeTime = ()=>{
    gameState.startTime = new Date();
};
exports.initializeTime = initializeTime;
const calcDuration = ()=>{
    return new Date() - gameState.startTime;
};
exports.calcDuration = calcDuration;

},{}],"lRoR1":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));
var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));
var _BoardView = _interopRequireDefault(require("./views/BoardView.js"));
var _TurnView = _interopRequireDefault(require("./views/TurnView.js"));
var _ButtonPanelView = _interopRequireDefault(require("./views/ButtonPanelView.js"));
var _CodeCombinationView = _interopRequireDefault(require("./views/CodeCombinationView.js"));
var _OccurrenceStatusView = _interopRequireDefault(require("./views/OccurrenceStatusView.js"));
var _HighscoreView = _interopRequireDefault(require("./views/HighscoreView.js"));
var _AlertView = _interopRequireDefault(require("./views/AlertView.js"));
function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
var _boardView = /*#__PURE__*/ new WeakMap();
var _turnView = /*#__PURE__*/ new WeakMap();
var _buttonPanelView = /*#__PURE__*/ new WeakMap();
var _codeCombinationView = /*#__PURE__*/ new WeakMap();
var _occurrenceStatusView = /*#__PURE__*/ new WeakMap();
var _highscoreView = /*#__PURE__*/ new WeakMap();
var _alertView = /*#__PURE__*/ new WeakMap();
class UI {
    constructor(boardView, turnView, buttonPanelView, codeCombinationView, occurrenceStatusView, highscoreView, alertView){
        _classPrivateFieldInitSpec(this, _boardView, {
            writable: true,
            value: null
        });
        _classPrivateFieldInitSpec(this, _turnView, {
            writable: true,
            value: null
        });
        _classPrivateFieldInitSpec(this, _buttonPanelView, {
            writable: true,
            value: null
        });
        _classPrivateFieldInitSpec(this, _codeCombinationView, {
            writable: true,
            value: null
        });
        _classPrivateFieldInitSpec(this, _occurrenceStatusView, {
            writable: true,
            value: null
        });
        _classPrivateFieldInitSpec(this, _highscoreView, {
            writable: true,
            value: null
        });
        _classPrivateFieldInitSpec(this, _alertView, {
            writable: true,
            value: null
        });
        (0, _classPrivateFieldSet2.default)(this, _boardView, boardView);
        (0, _classPrivateFieldSet2.default)(this, _turnView, turnView);
        (0, _classPrivateFieldSet2.default)(this, _buttonPanelView, buttonPanelView);
        (0, _classPrivateFieldSet2.default)(this, _codeCombinationView, codeCombinationView);
        (0, _classPrivateFieldSet2.default)(this, _occurrenceStatusView, occurrenceStatusView);
        (0, _classPrivateFieldSet2.default)(this, _highscoreView, highscoreView);
        (0, _classPrivateFieldSet2.default)(this, _alertView, alertView);
    }
    displayGame() {
        const wrapper = document.querySelector('.game-wrapper');
        const menu = document.querySelector('.game-menu');
        wrapper.style.display = "block";
        menu.style.display = "none";
    }
    renderBoard(difficulty) {
        (0, _classPrivateFieldGet2.default)(this, _boardView).renderBoard(difficulty);
    }
    updateTurn(currentTurn, isActive = true) {
        (0, _classPrivateFieldGet2.default)(this, _turnView).updateTurn(currentTurn, isActive);
    }
    renderButtonPanel(difficulty1) {
        (0, _classPrivateFieldGet2.default)(this, _buttonPanelView).renderButtonPanel(difficulty1);
    }
    renderCodeCombination(currentTurn1, guessedCode, difficulty2) {
        (0, _classPrivateFieldGet2.default)(this, _codeCombinationView).renderCodeCombination(currentTurn1, guessedCode, difficulty2);
    }
    renderOccurrenceStatus(currentTurn2, occurrenceStatus, difficulty3) {
        (0, _classPrivateFieldGet2.default)(this, _occurrenceStatusView).renderOccurrenceStatus(currentTurn2, occurrenceStatus, difficulty3);
    }
    renderHighscores(highscores) {
        (0, _classPrivateFieldGet2.default)(this, _highscoreView).renderHighscores(highscores);
    }
    showAlertOnInvalidInput(difficulty4) {
        (0, _classPrivateFieldGet2.default)(this, _alertView).showAlertOnInvalidInput(difficulty4);
    }
    showAlertForWinningCondition() {
        (0, _classPrivateFieldGet2.default)(this, _alertView).showAlertForWinningCondition();
    }
    showAlertForLosingCondition(secretCode, difficulty5) {
        (0, _classPrivateFieldGet2.default)(this, _alertView).showAlertForLosingCondition(secretCode, difficulty5);
    }
    showModalForGameRules() {
        (0, _classPrivateFieldGet2.default)(this, _alertView).showModalForGameRules();
    }
    showModalForCredits() {
        (0, _classPrivateFieldGet2.default)(this, _alertView).showModalForCredits();
    }
    showModalForHighscores(highscores1) {
        (0, _classPrivateFieldGet2.default)(this, _alertView).showModalForHighscores(highscores1);
    }
    toggleAlert() {
        (0, _classPrivateFieldGet2.default)(this, _alertView).toggleAlert();
    }
}
var _default = new UI(_BoardView.default, _TurnView.default, _ButtonPanelView.default, _CodeCombinationView.default, _OccurrenceStatusView.default, _HighscoreView.default, _AlertView.default);
exports.default = _default;

},{"./views/BoardView.js":"6gRRT","./views/TurnView.js":"5XBtl","./views/ButtonPanelView.js":"fwZX2","./views/CodeCombinationView.js":"gR3VX","./views/OccurrenceStatusView.js":"4Jh4j","./views/HighscoreView.js":"3bL2u","./views/AlertView.js":"5KbgG","@babel/runtime/helpers/interopRequireDefault":"bfiIA","@babel/runtime/helpers/classPrivateFieldGet":"lIPAj","@babel/runtime/helpers/classPrivateFieldSet":"0VOf3"}],"6gRRT":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));
var _Config = require("../Config.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
var _element = /*#__PURE__*/ new WeakMap();
class BoardView {
    constructor(){
        _classPrivateFieldInitSpec(this, _element, {
            writable: true,
            value: document.querySelector(".game-board-view")
        });
    }
    // render a board
    renderBoard(difficulty) {
        (0, _classPrivateFieldGet2.default)(this, _element).innerHTML = '';
        for(let i = 1; i <= _Config.MAX_TRIES; i++){
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
            (0, _classPrivateFieldGet2.default)(this, _element).insertAdjacentHTML("afterbegin", html);
        }
    }
    getHTMLForChoices(difficulty1) {
        let html = "";
        for(let i = 0; i < _Config.GAME_DIFFICULTY[difficulty1].codeLength; i++)html += `<div class="choice choice-number" data-choice="${i}"><span class="number"></span></div>`;
        return html;
    }
    getHTMLForOccurrenceStatusFlags(difficulty2) {
        let html = "";
        for(let i = 0; i < _Config.GAME_DIFFICULTY[difficulty2].codeLength; i++)html += `<div class="choice occurrence-status-flag" data-occurrence-status="${i}"></div>`;
        return html;
    }
}
var _default = new BoardView();
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"bfiIA","@babel/runtime/helpers/classPrivateFieldGet":"lIPAj","../Config.js":"hEUs6"}],"bfiIA":[function(require,module,exports) {
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"lIPAj":[function(require,module,exports) {
var classApplyDescriptorGet = require("./classApplyDescriptorGet.js");
var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");
function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
}
module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./classApplyDescriptorGet.js":"3nr90","./classExtractFieldDescriptor.js":"28rZn"}],"3nr90":[function(require,module,exports) {
function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"28rZn":[function(require,module,exports) {
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"5XBtl":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));
function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
var _activeClass = /*#__PURE__*/ new WeakMap();
var _playedClass = /*#__PURE__*/ new WeakMap();
class TurnView {
    constructor(){
        _classPrivateFieldInitSpec(this, _activeClass, {
            writable: true,
            value: "current-turn"
        });
        _classPrivateFieldInitSpec(this, _playedClass, {
            writable: true,
            value: "played-turn"
        });
    }
    // update turn view style
    updateTurn(currentTurn, isActive = true) {
        const boxElement = document.querySelector(`[data-turn="${currentTurn}"]`);
        boxElement.classList.add(`${isActive ? (0, _classPrivateFieldGet2.default)(this, _activeClass) : (0, _classPrivateFieldGet2.default)(this, _playedClass)}`);
    }
}
var _default = new TurnView();
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"bfiIA","@babel/runtime/helpers/classPrivateFieldGet":"lIPAj"}],"fwZX2":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));
var _Config = require("../Config.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
var _element = /*#__PURE__*/ new WeakMap();
class ButtonPanelView {
    constructor(){
        _classPrivateFieldInitSpec(this, _element, {
            writable: true,
            value: document.querySelector(".number-picker-view")
        });
    }
    renderButtonPanel(difficulty) {
        (0, _classPrivateFieldGet2.default)(this, _element).innerHTML = "";
        let html = "";
        html += this.getHTMLForNumberPickerButtons(difficulty);
        html += this.getHTMLForControlButtons(); // result HTML insert in DOM
        (0, _classPrivateFieldGet2.default)(this, _element).insertAdjacentHTML("beforeend", html);
    }
    getHTMLForNumberPickerButtons(difficulty1) {
        let html = "";
        for(let i = 0; i <= _Config.GAME_DIFFICULTY[difficulty1].maxNumber; i++)html += `<button class="choice-btn" data-selected-number="${i}">${i}</button>`;
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
var _default = new ButtonPanelView();
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"bfiIA","@babel/runtime/helpers/classPrivateFieldGet":"lIPAj","../Config.js":"hEUs6"}],"gR3VX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _config = require("../config.js");
class CodeCombinationView {
    renderCodeCombination(currentTurn, guessedCode, difficulty) {
        const element = document.querySelector(`[data-turn="${currentTurn}"]`);
        for(let i = 0; i < _config.GAME_DIFFICULTY[difficulty].codeLength; i++){
            const numberElement = element.querySelector(`[data-choice="${i}"] span`);
            if (guessedCode[i] !== undefined) numberElement.innerHTML = guessedCode[i];
            else numberElement.innerHTML = "";
        }
    }
}
var _default = new CodeCombinationView();
exports.default = _default;

},{"../config.js":"6V52N"}],"4Jh4j":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _config = require("../config.js");
function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
var _getColorFlags = /*#__PURE__*/ new WeakSet();
class OccurrenceStatusView {
    constructor(){
        _classPrivateMethodInitSpec(this, _getColorFlags);
    }
    renderOccurrenceStatus(currentTurn, occurrenceStatus1, difficulty) {
        const colorFlags = _classPrivateMethodGet(this, _getColorFlags, _getColorFlags2).call(this, occurrenceStatus1);
        const element = document.querySelector(`.game-try [data-turn="${currentTurn}"]`);
        for(let i = 0; i < _config.GAME_DIFFICULTY[difficulty].codeLength; i++){
            const statusElement = element.querySelector(`[data-occurrence-status="${i}"]`);
            statusElement.style.backgroundColor = colorFlags[i];
        }
    }
}
function _getColorFlags2(occurrenceStatus) {
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
var _default = new OccurrenceStatusView();
exports.default = _default;

},{"../config.js":"6V52N"}],"3bL2u":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));
var _helpers = require("../helpers.js");
var _config = require("../config.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
var _element = /*#__PURE__*/ new WeakMap();
class HighscoreView {
    constructor(){
        _classPrivateFieldInitSpec(this, _element, {
            writable: true,
            value: document.querySelector(".alert-view")
        });
    }
    renderHighscores(highscores) {
        (0, _classPrivateFieldGet2.default)(this, _element).innerHTML = "";
        let html = `
      <div class="high-score-display">
      <h1>Top ${_config.MAX_ENTRIES} High Scores</h1>
      <button class="btn-close-alert">X</button>
      <ul class="high-score-container">
    `;
        highscores.forEach((item, i)=>{
            html += `
        <li class="high-score-item">
          <span>${i + 1}</span>
          <span class="high-score-username">${item.playerName}</span>
          <span class="high-score-moves">${item.numOfTries} tries</span> 
          <span class="high-score-time">${(0, _helpers.formatTime)(+item.duration)}</span>
        </li>
      `;
        });
        html += "</ul></div>";
        (0, _classPrivateFieldGet2.default)(this, _element).insertAdjacentHTML("afterbegin", html);
    }
}
var _default = new HighscoreView();
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"bfiIA","@babel/runtime/helpers/classPrivateFieldGet":"lIPAj","../helpers.js":"9RX9R","../config.js":"6V52N"}],"9RX9R":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatTime = exports.capitalize = void 0;
const capitalize = function(string) {
    return string[0].toUpperCase() + string.slice(1);
};
exports.capitalize = capitalize;
const formatTime = function(mills) {
    const seconds = `${Math.floor(mills / 1000 % 60)}`.padStart(2, 0);
    const minutes = `${Math.floor(mills / 1000 / 60 % 60)}`.padStart(2, 0);
    const hours = `${Math.floor(mills / 1000 / 3600 % 24)}`.padStart(2, 0);
    return `${hours == '00' ? '' : `${hours}h `}${minutes}min ${seconds}s`;
};
exports.formatTime = formatTime;

},{}],"5KbgG":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));
var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));
var _config = require("../config.js");
var _HighscoreView = _interopRequireDefault(require("./HighscoreView.js"));
function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
var _element = /*#__PURE__*/ new WeakMap();
var _overlay = /*#__PURE__*/ new WeakMap();
var _highscoreView = /*#__PURE__*/ new WeakMap();
class AlertView {
    constructor(highscoreView){
        _classPrivateFieldInitSpec(this, _element, {
            writable: true,
            value: document.querySelector(".alert-view")
        });
        _classPrivateFieldInitSpec(this, _overlay, {
            writable: true,
            value: document.querySelector(".overlay")
        });
        _classPrivateFieldInitSpec(this, _highscoreView, {
            writable: true,
            value: null
        });
        (0, _classPrivateFieldSet2.default)(this, _highscoreView, highscoreView);
    }
    showModalForGameRules() {
        (0, _classPrivateFieldGet2.default)(this, _element).innerHTML = "";
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
        (0, _classPrivateFieldGet2.default)(this, _element).insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    showModalForCredits() {
        (0, _classPrivateFieldGet2.default)(this, _element).innerHTML = "";
        const html = `
      <div class="credits">
        <button class="btn-close-alert">X</button>
        <h1>Credits</h1>
        <p>
         Hi, my name is Abdul Samed Walker and a passionate software developer. I love to code and thinker with things.
        </p>
      </div>
    `;
        (0, _classPrivateFieldGet2.default)(this, _element).insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    showModalForHighscores(highscores) {
        (0, _classPrivateFieldGet2.default)(this, _element).innerHTML = "";
        (0, _classPrivateFieldGet2.default)(this, _highscoreView).renderHighscores(highscores);
        this.toggleAlert();
    }
    showAlertForWinningCondition() {
        (0, _classPrivateFieldGet2.default)(this, _element).innerHTML = ""; // render HTML
        const html = `
      <p class="message">You broke the secret code!</p>
      <label for="name">Input your name:</label>
      <input type="text" id="playerName" />
      <button class="btn-submit-highscore">Submit</button>
    `;
        (0, _classPrivateFieldGet2.default)(this, _element).insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    showAlertForLosingCondition(secretCode, difficulty) {
        (0, _classPrivateFieldGet2.default)(this, _element).innerHTML = "";
        let html = `
      <button class="btn-close-alert">X</button>
      <p class="message">Sorry! You didn't break the code!</p>
      <p class="message">Secret code was:</p>
      <div class="secret-container">`;
        for(let i = 0; i < _config.GAME_DIFFICULTY[difficulty].codeLength; i++)html += `<div class="choice choice-number"><span class="number">${secretCode[i]}</span></div>`;
        html += "</div>";
        (0, _classPrivateFieldGet2.default)(this, _element).insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    showAlertOnInvalidInput(difficulty1) {
        (0, _classPrivateFieldGet2.default)(this, _element).innerHTML = ""; // render HTML
        const html = `<button class="btn-close-alert">X</button><p class="message">Code length needs to be ${_config.GAME_DIFFICULTY[difficulty1].codeLength}!</p>`;
        (0, _classPrivateFieldGet2.default)(this, _element).insertAdjacentHTML("afterbegin", html);
        this.toggleAlert();
    }
    toggleAlert() {
        (0, _classPrivateFieldGet2.default)(this, _element).classList.toggle("hidden");
        (0, _classPrivateFieldGet2.default)(this, _overlay).classList.toggle("hidden");
    }
}
var _default = new AlertView(_HighscoreView.default);
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"bfiIA","@babel/runtime/helpers/classPrivateFieldGet":"lIPAj","@babel/runtime/helpers/classPrivateFieldSet":"0VOf3","../config.js":"6V52N","./HighscoreView.js":"3bL2u"}],"0VOf3":[function(require,module,exports) {
var classApplyDescriptorSet = require("./classApplyDescriptorSet.js");
var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");
function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
module.exports = _classPrivateFieldSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{"./classApplyDescriptorSet.js":"h7ICq","./classExtractFieldDescriptor.js":"28rZn"}],"h7ICq":[function(require,module,exports) {
function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
module.exports = _classApplyDescriptorSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;

},{}],"1T13D":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var _default = new EventListener();
exports.default = _default;

},{}],"iVczu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var model = _interopRequireWildcard(require("../Model.js"));
var _config = require("../config.js");
function _getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
var _sliceHighscores = /*#__PURE__*/ new WeakSet();
var _sortHighScores = /*#__PURE__*/ new WeakSet();
var _storeHighscore = /*#__PURE__*/ new WeakSet();
class HighscoreService {
    constructor(){
        _classPrivateMethodInitSpec(this, _storeHighscore);
        _classPrivateMethodInitSpec(this, _sortHighScores);
        _classPrivateMethodInitSpec(this, _sliceHighscores);
        const highscores = localStorage.getItem(_config.LOCAL_STORAGE_KEY);
        console.log(highscores);
        if (null !== highscores) model.setHighscores(JSON.parse(highscores));
    }
    clearHighscores() {
        localStorage.clear(_config.LOCAL_STORAGE_KEY);
    }
    addScore(highscoreData) {
        model.getHighscores().push(highscoreData);
        _classPrivateMethodGet(this, _sortHighScores, _sortHighScores2).call(this);
        model.setHighscores(_classPrivateMethodGet(this, _sliceHighscores, _sliceHighscores2).call(this));
        _classPrivateMethodGet(this, _storeHighscore, _storeHighscore2).call(this);
    }
}
function _sliceHighscores2() {
    return model.getHighscores().slice(0, _config.MAX_ENTRIES);
}
function _sortHighScores2() {
    return model.getHighscores().sort((a, b)=>{
        if (a.numOfTries > b.numOfTries) return 1;
        if (a.numOfTries < b.numOfTries) return -1;
        if (a.duration > b.duration) return 1;
        if (a.duration < b.duration) return -1;
    });
}
function _storeHighscore2() {
    localStorage.setItem(_config.LOCAL_STORAGE_KEY, JSON.stringify(model.getHighscores()));
}
var _default = new HighscoreService();
/*
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
*/ exports.default = _default;

},{"../Model.js":"ejWFH","../config.js":"6V52N"}]},["1urTD","bbGHz"], "bbGHz", "parcelRequire22c8")

//# sourceMappingURL=index.cd8f74dd.js.map
